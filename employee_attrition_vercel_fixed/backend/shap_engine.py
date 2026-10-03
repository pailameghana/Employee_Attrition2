import numpy as np
import pandas as pd
import shap
from dataset_manager import EXPECTED_PREDICTORS, CATEGORICAL_COLS, NUMERICAL_COLS
from model_trainer import load_trained_pipeline

class SHAPEngine:
    def __init__(self):
        self.pipeline_payload = load_trained_pipeline()
        self.preprocessor = self.pipeline_payload["preprocessor"]
        self.rf_model = self.pipeline_payload["base_models"]["Random Forest"]
        self.meta_learner = self.pipeline_payload["meta_learner"]
        self.feature_names = self.pipeline_payload["feature_names"]
        
        # TreeExplainer on Random Forest base model
        self.explainer = shap.TreeExplainer(self.rf_model)
        val = self.explainer.expected_value
        if isinstance(val, (list, np.ndarray)):
            self.expected_value = float(val[1]) if len(val) > 1 else float(val[0])
        else:
            self.expected_value = float(val)

    def predict_single(self, input_dict):
        """
        Runs prediction for a single employee record with 8 core predictors.
        Returns probability, risk band, top push/pull SHAP factors, waterfall data, plain language phrases, and HR recommendations.
        """
        df_single = pd.DataFrame([input_dict])
        df_single = df_single[EXPECTED_PREDICTORS]
        X_trans = self.preprocessor.transform(df_single)
        
        # Base models predictions
        base_preds = []
        for m_name, m_inst in self.pipeline_payload["base_models"].items():
            prob = m_inst.predict_proba(X_trans)[0, 1]
            base_preds.append(prob)
            
        # Stacking meta-learner prediction
        meta_input = np.array([base_preds])
        final_prob = float(self.meta_learner.predict_proba(meta_input)[0, 1])
        
        # Risk band mapping
        if final_prob < 0.35:
            risk_band = "Low"
            risk_color = "success"
        elif final_prob <= 0.65:
            risk_band = "Medium"
            risk_color = "warning"
        else:
            risk_band = "High"
            risk_color = "danger"
            
        # SHAP calculation
        shap_vals = self.explainer.shap_values(X_trans)
        if isinstance(shap_vals, list):
            shap_vec = shap_vals[1][0] if len(shap_vals) > 1 else shap_vals[0][0]
        elif len(shap_vals.shape) == 3:
            shap_vec = shap_vals[0, :, 1]
        else:
            shap_vec = shap_vals[0]
            
        # Group SHAP values by original 8 predictor fields
        predictor_shap = {}
        for idx, col in enumerate(NUMERICAL_COLS):
            predictor_shap[col] = float(shap_vec[idx])
            
        cat_encoder = self.preprocessor.named_transformers_["cat"]
        offset = len(NUMERICAL_COLS)
        for cat_col in CATEGORICAL_COLS:
            cat_shap_sum = 0.0
            categories = cat_encoder.categories_[CATEGORICAL_COLS.index(cat_col)]
            for c_idx in range(len(categories)):
                cat_shap_sum += float(shap_vec[offset])
                offset += 1
            predictor_shap[cat_col] = cat_shap_sum
            
        # Sort factors into Push (positive SHAP, increasing risk) and Pull (negative SHAP, reducing risk)
        sorted_factors = sorted(predictor_shap.items(), key=lambda x: x[1], reverse=True)
        top_push = [item for item in sorted_factors if item[1] > 0][:4]
        top_pull = [item for item in sorted_factors if item[1] < 0][-4:][::-1]
        
        # Plain-language factor translations
        plain_push = [self.translate_factor(feat, val, input_dict[feat], True) for feat, val in top_push]
        plain_pull = [self.translate_factor(feat, val, input_dict[feat], False) for feat, val in top_pull]
        
        # Waterfall plot data
        waterfall_data = []
        for feat, val in sorted_factors:
            waterfall_data.append({
                "feature": feat,
                "value": input_dict[feat],
                "shap_value": round(val, 4),
                "translation": self.translate_factor(feat, val, input_dict[feat], val > 0)
            })
            
        # HR recommendations mapped to push factors
        recommendations = self.generate_hr_recommendations(top_push, input_dict)
        
        return {
            "attrition_probability": round(final_prob, 4),
            "risk_band": risk_band,
            "risk_color": risk_color,
            "base_value": round(self.expected_value, 4),
            "top_push_factors": [{"feature": f, "shap": round(s, 4), "plain": p} for (f, s), p in zip(top_push, plain_push)],
            "top_pull_factors": [{"feature": f, "shap": round(s, 4), "plain": p} for (f, s), p in zip(top_pull, plain_pull)],
            "waterfall_data": waterfall_data,
            "recommendations": recommendations,
            "input_summary": input_dict
        }

    def translate_factor(self, feature, shap_val, raw_val, is_push):
        """Translates technical SHAP values into clear HR plain-language statements."""
        if feature == "OverTime":
            return "Frequent overtime workload (+35% Risk)" if str(raw_val).lower() == "yes" else "Standard work hours (No overtime)"
        elif feature == "MonthlyIncome":
            return f"Salary level (${raw_val:,}/mo)" if raw_val < 5000 else f"Competitive compensation (${raw_val:,}/mo)"
        elif feature == "DistanceFromHome":
            return f"Long commute distance ({raw_val} km)" if raw_val >= 15 else f"Convenient commute distance ({raw_val} km)"
        elif feature == "JobSatisfaction":
            return f"Low job satisfaction ({raw_val}/4)" if raw_val <= 2 else f"High job satisfaction ({raw_val}/4)"
        elif feature == "WorkLifeBalance":
            return f"Poor work-life balance ({raw_val}/4)" if raw_val <= 2 else f"Satisfactory work-life balance ({raw_val}/4)"
        elif feature == "YearsAtCompany":
            return f"Short tenure at company ({raw_val} yrs)" if raw_val <= 2 else f"Stable tenure at company ({raw_val} yrs)"
        elif feature == "Age":
            return f"Early career stage ({raw_val} yrs old)" if raw_val <= 28 else f"Established experience ({raw_val} yrs old)"
        elif feature == "JobRole":
            return f"Role demands ({raw_val})"
        else:
            direction = "increasing attrition risk" if is_push else "reducing attrition risk"
            return f"{feature} = {raw_val} ({direction})"

    def generate_hr_recommendations(self, top_push_factors, input_dict):
        """Generates actionable retention recommendations based on top push factors."""
        recs = []
        push_features = [f for f, s in top_push_factors]
        
        if "OverTime" in push_features and str(input_dict.get("OverTime")).lower() == "yes":
            recs.append({
                "title": "Workload Re-balancing & Overtime Cap",
                "action": "Offer flexible scheduling or reduce mandatory overtime hours to mitigate burnout risk.",
                "category": "Work-Life Integration"
            })
            
        if "MonthlyIncome" in push_features and input_dict.get("MonthlyIncome", 0) < 5500:
            recs.append({
                "title": "Compensation Band Alignment",
                "action": f"Current monthly income (${input_dict.get('MonthlyIncome'):,}) is below role median. Conduct salary band review and consider retention bonus.",
                "category": "Compensation & Benefits"
            })

        if "DistanceFromHome" in push_features and input_dict.get("DistanceFromHome", 0) >= 12:
            recs.append({
                "title": "Remote / Hybrid Flexibility",
                "action": f"Long commute ({input_dict.get('DistanceFromHome')} km). Provide hybrid work options or commuter transportation allowance.",
                "category": "Work Environment"
            })

        if "JobSatisfaction" in push_features and input_dict.get("JobSatisfaction", 0) <= 2:
            recs.append({
                "title": "Job Role & Manager 1-on-1 Review",
                "action": "Schedule stay-interview to discuss daily responsibilities and career growth path.",
                "category": "Employee Engagement"
            })

        if not recs:
            recs.append({
                "title": "Routine Engagement Check-in",
                "action": "Maintain periodic stay-interviews and check job satisfaction alignment.",
                "category": "General Management"
            })

        return recs

    def get_global_shap_insights(self):
        """Computes global SHAP feature importance rankings."""
        df_clean = load_trained_pipeline()["X_test_raw"].copy()
        X_trans = self.preprocessor.transform(df_clean)
        
        shap_vals = self.explainer.shap_values(X_trans)
        if isinstance(shap_vals, list):
            shap_matrix = shap_vals[1] if len(shap_vals) > 1 else shap_vals[0]
        elif len(shap_vals.shape) == 3:
            shap_matrix = shap_vals[:, :, 1]
        else:
            shap_matrix = shap_vals
            
        mean_abs_shap = np.mean(np.abs(shap_matrix), axis=0)
        
        grouped_importances = {}
        for idx, col in enumerate(NUMERICAL_COLS):
            grouped_importances[col] = float(mean_abs_shap[idx])
            
        cat_encoder = self.preprocessor.named_transformers_["cat"]
        offset = len(NUMERICAL_COLS)
        for cat_col in CATEGORICAL_COLS:
            cat_imp = 0.0
            categories = cat_encoder.categories_[CATEGORICAL_COLS.index(cat_col)]
            for _ in categories:
                cat_imp += float(mean_abs_shap[offset])
                offset += 1
            grouped_importances[cat_col] = cat_imp
            
        sorted_imp = sorted(grouped_importances.items(), key=lambda x: x[1], reverse=True)

        return {
            "global_top_features": [{"feature": f, "mean_abs_shap": round(imp, 4)} for f, imp in sorted_imp]
        }
