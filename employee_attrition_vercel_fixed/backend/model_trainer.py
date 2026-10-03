import os
import joblib
import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split, StratifiedKFold
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    roc_auc_score, recall_score, precision_score, f1_score, accuracy_score,
    confusion_matrix, roc_curve
)

from dataset_manager import (
    get_cleaned_dataset, EXPECTED_PREDICTORS, CATEGORICAL_COLS, NUMERICAL_COLS
)

MODEL_DIR = os.path.join(os.path.dirname(__file__), "models")
PIPELINE_PATH = os.path.join(MODEL_DIR, "trained_pipeline.joblib")


def build_preprocessor():
    return ColumnTransformer(
        transformers=[
            ("num", StandardScaler(), NUMERICAL_COLS),
            ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), CATEGORICAL_COLS),
        ]
    )


def create_base_models():
    # Deployment-safe stacking ensemble: no XGBoost or imbalanced-learn dependency.
    return {
        "Random Forest": RandomForestClassifier(
            n_estimators=120, max_depth=6, min_samples_split=4,
            class_weight="balanced", random_state=42, n_jobs=-1
        ),
        "Decision Tree": DecisionTreeClassifier(
            max_depth=4, min_samples_split=6,
            class_weight="balanced", random_state=42
        ),
        "SVM": SVC(
            probability=True, kernel="rbf", C=0.8,
            class_weight="balanced", random_state=42
        ),
        "Logistic Regression": LogisticRegression(
            C=0.5, class_weight="balanced", max_iter=1000, random_state=42
        ),
    }


def train_and_evaluate_pipeline():
    """Train and serialize the production stacking model."""
    os.makedirs(MODEL_DIR, exist_ok=True)
    df = get_cleaned_dataset()

    X = df[EXPECTED_PREDICTORS]
    y = df["Attrition_Flag"].values

    X_train_raw, X_test_raw, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )

    preprocessor = build_preprocessor()
    X_train_trans = preprocessor.fit_transform(X_train_raw)
    X_test_trans = preprocessor.transform(X_test_raw)

    cat_encoder = preprocessor.named_transformers_["cat"]
    encoded_cat_names = list(cat_encoder.get_feature_names_out(CATEGORICAL_COLS))
    feature_names = NUMERICAL_COLS + encoded_cat_names

    base_models_proto = create_base_models()
    model_names = list(base_models_proto.keys())

    # Generate out-of-fold predictions for the stacking meta learner.
    skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    oof_meta_features = np.zeros((len(X_train_trans), len(base_models_proto)))

    for train_idx, val_idx in skf.split(X_train_trans, y_train):
        X_fold_train, y_fold_train = X_train_trans[train_idx], y_train[train_idx]
        X_fold_val = X_train_trans[val_idx]

        fold_models = create_base_models()
        for idx, (m_name, model_inst) in enumerate(fold_models.items()):
            model_inst.fit(X_fold_train, y_fold_train)
            oof_meta_features[val_idx, idx] = model_inst.predict_proba(X_fold_val)[:, 1]

    meta_learner = LogisticRegression(
        C=0.5, class_weight="balanced", max_iter=1000, random_state=42
    )
    meta_learner.fit(oof_meta_features, y_train)

    final_base_models = create_base_models()
    test_meta_features = np.zeros((len(X_test_trans), len(final_base_models)))

    for idx, (m_name, model_inst) in enumerate(final_base_models.items()):
        model_inst.fit(X_train_trans, y_train)
        test_meta_features[:, idx] = model_inst.predict_proba(X_test_trans)[:, 1]

    stack_test_probs = meta_learner.predict_proba(test_meta_features)[:, 1]

    metrics_summary = {}

    for idx, m_name in enumerate(model_names):
        probs = test_meta_features[:, idx]
        preds = (probs >= 0.5).astype(int)

        auc = roc_auc_score(y_test, probs)
        rec = recall_score(y_test, preds, zero_division=0)
        prec = precision_score(y_test, preds, zero_division=0)
        f1 = f1_score(y_test, preds, zero_division=0)
        acc = accuracy_score(y_test, preds)
        cm = confusion_matrix(y_test, preds).tolist()
        fpr, tpr, _ = roc_curve(y_test, probs)

        metrics_summary[m_name] = {
            "Model": m_name,
            "ROC_AUC": round(float(auc), 4),
            "Recall": round(float(rec), 4),
            "Precision": round(float(prec), 4),
            "F1_Score": round(float(f1), 4),
            "Accuracy": round(float(acc), 4),
            "Confusion_Matrix": cm,
            "ROC_Curve": {
                "fpr": [round(x, 4) for x in fpr.tolist()],
                "tpr": [round(y, 4) for y in tpr.tolist()],
            },
        }

    stack_preds = (stack_test_probs >= 0.5).astype(int)
    stack_auc = roc_auc_score(y_test, stack_test_probs)
    stack_rec = recall_score(y_test, stack_preds, zero_division=0)
    stack_prec = precision_score(y_test, stack_preds, zero_division=0)
    stack_f1 = f1_score(y_test, stack_preds, zero_division=0)
    stack_acc = accuracy_score(y_test, stack_preds)
    stack_cm = confusion_matrix(y_test, stack_preds).tolist()
    sfpr, stpr, _ = roc_curve(y_test, stack_test_probs)

    metrics_summary["Stacking Ensemble"] = {
        "Model": "Stacking Ensemble (Proposed)",
        "ROC_AUC": round(float(stack_auc), 4),
        "Recall": round(float(stack_rec), 4),
        "Precision": round(float(stack_prec), 4),
        "F1_Score": round(float(stack_f1), 4),
        "Accuracy": round(float(stack_acc), 4),
        "Confusion_Matrix": stack_cm,
        "ROC_Curve": {
            "fpr": [round(x, 4) for x in sfpr.tolist()],
            "tpr": [round(y, 4) for y in stpr.tolist()],
        },
    }

    pipeline_payload = {
        "preprocessor": preprocessor,
        "base_models": final_base_models,
        "meta_learner": meta_learner,
        "feature_names": feature_names,
        "metrics_summary": metrics_summary,
        "X_train_raw": X_train_raw,
        "y_train": y_train,
        "X_test_raw": X_test_raw,
        "y_test": y_test,
    }

    joblib.dump(pipeline_payload, PIPELINE_PATH, compress=3)
    print(f"Model Pipeline trained and saved to {PIPELINE_PATH}")
    return pipeline_payload


def load_trained_pipeline():
    """Load the pre-trained production pipeline; train only when running locally."""
    if not os.path.exists(PIPELINE_PATH):
        return train_and_evaluate_pipeline()
    return joblib.load(PIPELINE_PATH)


if __name__ == "__main__":
    train_and_evaluate_pipeline()
