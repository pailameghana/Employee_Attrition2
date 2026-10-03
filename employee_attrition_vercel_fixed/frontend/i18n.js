// MULTILINGUAL TRANSLATION ENGINE (i18n) FOR ENGLISH, TELUGU, AND HINDI

window.APP_CONFIG = {
    appName: "Real-Time Enterprise Employee Attrition Analytics",
    version: "2.0.0",
    defaultCompany: "All Companies"
};

window.currentLang = "en";

window.i18nDict = {
    en: {
        // Header & Nav
        brandTitle: "Employee Attrition Analytics",
        brandSubtitle: "Real-Time Company Attrition Prediction & SHAP Decision Support",
        tabDashboard: "Dashboard",
        tabPredictor: "Predict Risk",
        tabBatch: "Batch Audit",
        tabAnalytics: "Analytics",
        companyDatasetLabel: "Company Dataset:",
        languageLabel: "Language:",
        logoutBtn: "Logout",

        // Login Screen
        loginTitle: "Real-Time Employee Attrition Analytics",
        loginSubtitle: "Sign in to access corporate workforce attrition risk portal",
        emailLabel: "Corporate Email / Username",
        passwordLabel: "Password",
        showPw: "Show",
        hidePw: "Hide",
        signInBtn: "Sign In to Portal",
        quickDemoBtn: "Quick Demo Sign-in",

        // Dashboard
        heroTitle: "Real-Time Employee Attrition Analytics",
        heroDesc: "Predict employee turnover risk using essential workforce metrics and real-time company datasets (TCS, Wipro, Infosys, IBM, Cognizant, Accenture).",
        activeDataset: "Active Dataset:",
        startPredictionBtn: "Start Attrition Prediction",
        batchAssessmentBtn: "Batch Team Assessment",
        viewAnalyticsBtn: "View Company Analytics",
        datasetSwitcherTitle: "Real-Time Company Dataset Switcher",

        // KPIs
        analyzedRecords: "Analyzed Records",
        analyzedRecordsSub: "Real-time Employee Records",
        overallAttritionRate: "Overall Attrition Rate",
        highRiskBandSub: "High Attrition Risk Band",
        avgMonthlySalary: "Average Monthly Salary",
        compensationMedianSub: "Workforce Compensation Median",
        modelAccuracy: "Stacking Model Accuracy",
        modelAccuracySub: "Stacking Ensemble (SMOTE + SHAP)",

        // Predictor Form
        quickProfilesLabel: "Quick Sample Profiles:",
        sampleHighRisk: "High Risk Sample",
        sampleLowRisk: "Low Risk Sample",
        sampleExecutive: "Executive Sample",
        formTitle: "Employee Attrition Prediction Form",
        requiredFieldsPill: "8 Required Fields",
        formSub: "Fill in the essential employee attributes required to estimate turnover probability and analyze attrition drivers.",

        secDemographics: "1. Role & Demographics",
        labelAge: "Age (Years)",
        labelJobRole: "Job Role",

        secCompensation: "2. Compensation & Overtime Work",
        labelMonthlyIncome: "Monthly Salary ($)",
        labelOverTime: "Overtime Work",
        overtimeYes: "Yes (Frequent Overtime)",
        overtimeNo: "No (Standard Working Hours)",

        secSatisfaction: "3. Satisfaction & Work-Life Balance",
        labelJobSatisfaction: "Job Satisfaction (1-4)",
        sat1: "1 - Low Satisfaction",
        sat2: "2 - Medium Satisfaction",
        sat3: "3 - High Satisfaction",
        sat4: "4 - Very High Satisfaction",
        labelWorkLifeBalance: "Work-Life Balance (1-4)",
        wlb1: "1 - Poor Balance",
        wlb2: "2 - Good Balance",
        wlb3: "3 - Better Balance",
        wlb4: "4 - Best Balance",

        secTenure: "4. Tenure & Commute",
        labelYearsAtCompany: "Years at Company",
        labelDistanceFromHome: "Distance From Home (km)",
        predictBtn: "Predict Attrition Risk & Analyze Factors",

        // Results Card
        resultTitle: "Prediction Result",
        readyBadge: "Ready",
        reasonsTitle: "Why is this employee predicted to leave / stay?",
        reasonsSub: "The factors below show the key drivers calculated by the SHAP Explainability Model that contributed most to this employee's attrition prediction.",
        pushHeader: "Key Factors Increasing Attrition Risk",
        pullHeader: "Key Factors Reducing Attrition Risk",
        noPushFactors: "No major factors increasing risk.",
        noPullFactors: "No major factors reducing risk.",

        summaryTitle: "Employee Risk Summary & HR Action",
        sumRiskLevelLabel: "Risk Level:",
        sumTurnoverProbLabel: "Turnover Probability:",
        sumPrimaryDriverLabel: "Primary Attrition Driver:",
        sumSecDriverLabel: "Secondary Attrition Driver:",
        sumHRActionLabel: "Recommended HR Intervention:",

        // Risk Bands
        highRiskBand: "High Risk of Attrition",
        medRiskBand: "Medium Risk of Attrition",
        lowRiskBand: "Low Risk of Attrition",

        // Batch Audit
        batchTitle: "Batch Team Attrition Audit (CSV Assessment)",
        batchSub: "Upload a CSV file containing multiple employee records or run a real-time sample audit across selected company dataset.",
        uploadCsvBtn: "Upload Employee CSV",
        runSampleBatchBtn: "Run Company Sample Batch Assessment",
        searchPlaceholder: "Search Employee ID, Role, or Company...",
        allRiskLevels: "All Risk Levels",
        highRiskOnly: "High Risk Only",
        medRiskOnly: "Medium Risk Only",
        lowRiskOnly: "Low Risk Only",
        exportCsvBtn: "Export Audit to CSV",

        colEmpId: "Employee ID",
        colCompany: "Company",
        colRole: "Job Role",
        colIncome: "Monthly Income",
        colOvertime: "Overtime",
        colProb: "Risk Probability",
        colRiskLevel: "Risk Level",
        colDrivers: "Key Attrition Drivers",
        noBatchRunYet: 'No batch assessment run yet. Click "Run Company Sample Batch Assessment".',

        // Analytics
        analyticsCompanyFilter: "Analytics Company Filter:",
        showingMetricsFor: "Showing metrics for",
        highRiskTitle: "High Attrition Risk",
        medRiskTitle: "Medium Attrition Risk",
        lowRiskTitle: "Low Attrition Risk",
        riskDistributionTitle: "Attrition Risk Distribution",
        pieChartPill: "Pie Chart Values Clearly Displayed",
        globalShapTitle: "Top Factors Driving Attrition (Global SHAP Impact)",
        companyCompTitle: "Company-Wise Attrition Comparison Analysis",
        companyCompSub: "Real-time comparison of attrition rates across TCS, Wipro, Infosys, IBM, Cognizant, and Accenture.",
        multiCompPill: "Multi-Company Benchmark",
        roleBreakdownTitle: "Job Role Attrition Rate (%) Breakdown",
        benchmarkTitle: "Model Benchmark Accuracy Summary",
        colModel: "Model Architecture",
        colRocAuc: "ROC-AUC Score",
        colRecall: "Recall",
        colPrecision: "Precision",
        colF1: "F1 Score",
        colAccuracy: "Accuracy"
    },

    te: {
        // Telugu Translation
        brandTitle: "ఉద్యోగుల నిష్క్రమణ విశ్లేషణ",
        brandSubtitle: "రియల్-టైమ్ కంపెనీ అట్రిషన్ ప్రిడిక్షన్ మరియు SHAP నిర్ణయ సహకారం",
        tabDashboard: "డాష్‌బోర్డ్",
        tabPredictor: "రిస్క్ అంచనా",
        tabBatch: "బ్యాచ్ ఆడిట్",
        tabAnalytics: "అనలిటిక్స్",
        companyDatasetLabel: "కంపెనీ డేటాసెట్:",
        languageLabel: "భాష:",
        logoutBtn: "లాగ్ అవుట్",

        loginTitle: "రియల్-టైమ్ ఉద్యోగుల అట్రిషన్ విశ్లేషణ",
        loginSubtitle: "కార్పొరేట్ ఉద్యోగుల అట్రిషన్ రిస్క్ పోర్టల్ లాగిన్ చేయండి",
        emailLabel: "కార్పొరేట్ ఇమెయిల్ / యూజర్ నేమ్",
        passwordLabel: "పాస్‌వర్డ్",
        showPw: "చూపించు",
        hidePw: "దాచు",
        signInBtn: "పోర్టల్‌లోకి ప్రవేశించండి",
        quickDemoBtn: "త్వరిత డెమో లాగిన్",

        heroTitle: "రియల్-టైమ్ ఉద్యోగుల అట్రిషన్ విశ్లేషణ",
        heroDesc: "ముఖ్యమైన ఉద్యోగ డేటా మరియు రియల్-టైమ్ కంపెనీ డేటాసెట్‌ల ద్వారా ఉద్యోగుల తొలగింపు రిస్క్‌ను అంచనా వేయండి (TCS, Wipro, Infosys, IBM, Cognizant, Accenture).",
        activeDataset: "ప్రస్తుత డేటాసెట్:",
        startPredictionBtn: "అట్రిక్షన్ అంచనా ప్రారంభించండి",
        batchAssessmentBtn: "బృందం బ్యాచ్ అసెస్‌మెంట్",
        viewAnalyticsBtn: "కంపెనీ విశ్లేషణలు చూడండి",
        datasetSwitcherTitle: "రియల్-టైమ్ కంపెనీ డేటాసెట్ స్విచర్",

        analyzedRecords: "విశ్లేషించిన రికార్డులు",
        analyzedRecordsSub: "రియల్-టైమ్ ఉద్యోగి రికార్డులు",
        overallAttritionRate: "మొత్తం అట్రిషన్ రేటు",
        highRiskBandSub: "అధిక అట్రిషన్ రిస్క్ విభాగం",
        avgMonthlySalary: "సగటు నెలవారీ జీతం",
        compensationMedianSub: "ఉద్యోగుల జీతం మధ్యస్థం",
        modelAccuracy: "స్టాకింగ్ మోడల్ ఖచ్చితత్వం",
        modelAccuracySub: "స్టాకింగ్ ఎన్సెంబుల్ (SMOTE + SHAP)",

        quickProfilesLabel: "త్వరిత నమూనా ప్రొఫైల్‌లు:",
        sampleHighRisk: "అధిక రిస్క్ నమూనా",
        sampleLowRisk: "తక్కువ రిస్క్ నమూనా",
        sampleExecutive: "ఎగ్జిక్యూటివ్ నమూనా",
        formTitle: "ఉద్యోగుల అట్రిషన్ ప్రిడిక్షన్ ఫారమ్",
        requiredFieldsPill: "8 అవసరమైన ఫీల్డ్‌లు",
        formSub: "ఉద్యోగి నిష్క్రమణ సంభావ్యతను మరియు కారణాలను అంచనా వేయడానికి అవసరమైన వివరాలను నమోదు చేయండి.",

        secDemographics: "1. హోదా మరియు వివరాలు",
        labelAge: "వయస్సు (సంవత్సరాలు)",
        labelJobRole: "ఉద్యోగ హోదా",

        secCompensation: "2. జీతం మరియు ఓవర్‌టైమ్",
        labelMonthlyIncome: "నెలవారీ జీతం ($)",
        labelOverTime: "ఓవర్‌టైమ్ పని",
        overtimeYes: "అవును (క్రమమైన ఓవర్‌టైమ్)",
        overtimeNo: "కాదు (సమాన పని గంటలు)",

        secSatisfaction: "3. సంతృప్తి & వర్క్-లైఫ్ బ్యాలెన్స్",
        labelJobSatisfaction: "ఉద్యోగ సంతృప్తి (1-4)",
        sat1: "1 - తక్కువ సంతృప్తి",
        sat2: "2 - మధ్యస్థ సంతృప్తి",
        sat3: "3 - అధిక సంతృప్తి",
        sat4: "4 - చాలా అధిక సంతృప్తి",
        labelWorkLifeBalance: "వర్క్-లైఫ్ బ్యాలెన్స్ (1-4)",
        wlb1: "1 - తక్కువ సమతుల్యత",
        wlb2: "2 - మంచి సమతుల్యత",
        wlb3: "3 - మెరుగైన సమతుల్యత",
        wlb4: "4 - అత్యుత్తమ సమతుల్యత",

        secTenure: "4. అనుభవం & ప్రయాణ దూరం",
        labelYearsAtCompany: "కంపెనీలో అనుభవం (సంవత్సరాలు)",
        labelDistanceFromHome: "ఇంటి నుండి దూరం (కి.మీ)",
        predictBtn: "అట్రిక్షన్ రిస్క్ మరియు కారణాలు విశ్లేషించండి",

        resultTitle: "అంచనా ఫలితం",
        readyBadge: "సిద్ధంగా ఉంది",
        reasonsTitle: "ఈ ఉద్యోగి సంస్థ నుండి నిష్క్రమించడానికి / కొనసాగడానికి కారణాలు ఏమిటి?",
        reasonsSub: "SHAP Explainability మోడల్ ద్వారా గణించబడిన ప్రధాన కారణాలు క్రింద ఇవ్వబడ్డాయి.",
        pushHeader: "అట్రిషన్ రిస్క్ పెంచే ప్రధాన కారణాలు",
        pullHeader: "అట్రిషన్ రిస్క్ తగ్గించే ప్రధాన కారణాలు",
        noPushFactors: "రిస్క్ పెంచే ప్రధాన కారణాలు ఏవీ లేవు.",
        noPullFactors: "రిస్క్ తగ్గించే ప్రధాన కారణాలు ఏవీ లేవు.",

        summaryTitle: "ఉద్యోగి రిస్క్ సారాంశం & HR చర్యలు",
        sumRiskLevelLabel: "రిస్క్ స్థాయి:",
        sumTurnoverProbLabel: "నిష్క్రమణ సంభావ్యత:",
        sumPrimaryDriverLabel: "ప్రధాన కారణం:",
        sumSecDriverLabel: "రెండవ కారణం:",
        sumHRActionLabel: "సిఫార్సు చేసిన HR చర్య:",

        highRiskBand: "అధిక నిష్క్రమణ రిస్క్ (High Risk)",
        medRiskBand: "మధ్యస్థ నిష్క్రమణ రిస్క్ (Medium Risk)",
        lowRiskBand: "తక్కువ నిష్క్రమణ రిస్క్ (Low Risk)",

        batchTitle: "బృందం అట్రిషన్ ఆడిట్ (CSV అసెస్‌మెంట్)",
        batchSub: "ఉద్యోగుల డేటాతో కూడిన CSV ఫైల్‌ను అప్‌లోడ్ చేయండి లేదా కంపెనీ నమూనా ఆడిట్ నిర్వహించండి.",
        uploadCsvBtn: "ఉద్యోగుల CSV అప్‌లోడ్ చేయండి",
        runSampleBatchBtn: "కంపెనీ నమూనా బ్యాచ్ అసెస్‌మెంట్ నిర్వహించండి",
        searchPlaceholder: "ఉద్యోగి ID, హోదా లేదా కంపెనీ శోధించండి...",
        allRiskLevels: "అన్ని రిస్క్ స్థాయిలు",
        highRiskOnly: "అధిక రిస్క్ మాత్రమే",
        medRiskOnly: "మధ్యస్థ రిస్క్ మాత్రమే",
        lowRiskOnly: "తక్కువ రిస్క్ మాత్రమే",
        exportCsvBtn: "ఆడిట్ నివేదిక CSV డౌన్‌లోడ్ చేయండి",

        colEmpId: "ఉద్యోగి ID",
        colCompany: "కంపెనీ",
        colRole: "ఉద్యోగ హోదా",
        colIncome: "నెలవారీ జీతం",
        colOvertime: "ఓవర్‌టైమ్",
        colProb: "రిస్క్ సంభావ్యత",
        colRiskLevel: "రిస్క్ స్థాయి",
        colDrivers: "ప్రధాన కారణాలు",
        noBatchRunYet: 'ఇంకా ఎలాంటి బ్యాచ్ ఆడిట్ నిర్వహించలేదు. "కంపెనీ నమూనా బ్యాచ్ అసెస్‌మెంట్" పై క్లిక్ చేయండి.',

        analyticsCompanyFilter: "అనలిటిక్స్ కంపెనీ ఫిల్టర్:",
        showingMetricsFor: "విశ్లేషిస్తున్న కంపెనీ డేటా:",
        highRiskTitle: "అధిక అట్రిషన్ రిస్క్",
        medRiskTitle: "మధ్యస్థ అట్రిషన్ రిస్క్",
        lowRiskTitle: "తక్కువ అట్రిషన్ రిస్క్",
        riskDistributionTitle: "అట్రిషన్ రిస్క్ పంపిణీ",
        pieChartPill: "పై చార్ట్ విలువలు స్పష్టంగా చూపబడ్డాయి",
        globalShapTitle: "అట్రిషన్‌కు కారణమయ్యే ప్రధాన అంశాలు (Global SHAP Impact)",
        companyCompTitle: "కంపెనీల మధ్య అట్రిషన్ రేట్ల పోలిక",
        companyCompSub: "TCS, Wipro, Infosys, IBM, Cognizant, Accenture అట్రిషన్ రేట్ల ప్రత్యక్ష పోలిక.",
        multiCompPill: "మల్టీ-కంపెనీ బెంచ్‌మార్క్",
        roleBreakdownTitle: "ఉద్యోగ హోదా వారీగా అట్రిషన్ రేటు (%)",
        benchmarkTitle: "మోడల్ బెంచ్‌మార్క్ ఖచ్చితత్వ సారాంశం",
        colModel: "మోడల్ ఆర్కిటెక్చర్",
        colRocAuc: "ROC-AUC స్కోరు",
        colRecall: "రిసాల్ (Recall)",
        colPrecision: "ప్రెసిషన్ (Precision)",
        colF1: "F1 స్కోరు",
        colAccuracy: "ఖచ్చితత్వం (Accuracy)"
    },

    hi: {
        // Hindi Translation
        brandTitle: "कर्मचारी अट्रिशन विश्लेषण",
        brandSubtitle: "रियल-टाइम कंपनी अट्रिशन प्रेडिक्शन एवं SHAP निर्णय सहायता",
        tabDashboard: "डैशबोर्ड",
        tabPredictor: "जोखिम अनुमान",
        tabBatch: "बैच ऑडिट",
        tabAnalytics: "एनालिटिक्स",
        companyDatasetLabel: "कंपनी डेटासेट:",
        languageLabel: "भाषा:",
        logoutBtn: "लॉग आउट",

        loginTitle: "रियल-टाइम कर्मचारी अट्रिशन विश्लेषण",
        loginSubtitle: "कॉरपोरेट कर्मचारी अट्रिशन जोखिम पोर्टल में साइन इन करें",
        emailLabel: "कॉरपोरेट ईमेल / यूजरनेम",
        passwordLabel: "पासवर्ड",
        showPw: "दिखाएं",
        hidePw: "छिपाएं",
        signInBtn: "पोर्टल में साइन इन करें",
        quickDemoBtn: "त्वरित डेमो साइन-इन",

        heroTitle: "रियल-टाइम कर्मचारी अट्रिशन विश्लेषण",
        heroDesc: "आवश्यक कार्यबल मेट्रिक्स और रियल-टाइम कंपनी डेटासेट (TCS, Wipro, Infosys, IBM, Cognizant, Accenture) का उपयोग करके कर्मचारी टर्नओवर जोखिम का पूर्वानुमान लगाएं।",
        activeDataset: "सक्रिय डेटासेट:",
        startPredictionBtn: "अट्रिशन पूर्वानुमान शुरू करें",
        batchAssessmentBtn: "टीम बैच मूल्यांकन",
        viewAnalyticsBtn: "कंपनी एनालिटिक्स देखें",
        datasetSwitcherTitle: "रियल-टाइम कंपनी डेटासेट स्विचर",

        analyzedRecords: "विश्लेषित रिकॉर्ड्स",
        analyzedRecordsSub: "रियल-टाइम कर्मचारी रिकॉर्ड्स",
        overallAttritionRate: "कुल अट्रिशन दर",
        highRiskBandSub: "उच्च अट्रिशन जोखिम श्रेणी",
        avgMonthlySalary: "औसत मासिक वेतन",
        compensationMedianSub: "कार्यबल मुआवजा माध्यिका",
        modelAccuracy: "स्टैकिंग मॉडल सटीकता",
        modelAccuracySub: "स्टैकिंग एन्सेम्बल (SMOTE + SHAP)",

        quickProfilesLabel: "त्वरित नमूना प्रोफाइल:",
        sampleHighRisk: "उच्च जोखिम नमूना",
        sampleLowRisk: "कम जोखिम नमूना",
        sampleExecutive: "कार्यकारी नमूना",
        formTitle: "कर्मचारी अट्रिशन प्रेडिक्शन फॉर्म",
        requiredFieldsPill: "8 आवश्यक फ़ील्ड",
        formSub: "कर्मचारी के कंपनी छोड़ने की संभावना और कारणों का विश्लेषण करने के लिए आवश्यक विवरण भरें।",

        secDemographics: "1. पद एवं जनसांख्यिकी",
        labelAge: "आयु (वर्ष)",
        labelJobRole: "कार्य पद (Job Role)",

        secCompensation: "2. वेतन और ओवरटाइम कार्य",
        labelMonthlyIncome: "मासिक वेतन ($)",
        labelOverTime: "ओवरटाइम कार्य",
        overtimeYes: "हाँ (नियमित ओवरटाइम)",
        overtimeNo: "नहीं (सामान्य कार्य घंटे)",

        secSatisfaction: "3. संतुष्टि एवं कार्य-जीवन संतुलन",
        labelJobSatisfaction: "कार्य संतुष्टि (1-4)",
        sat1: "1 - कम संतुष्टि",
        sat2: "2 - मध्यम संतुष्टि",
        sat3: "3 - उच्च संतुष्टि",
        sat4: "4 - बहुत उच्च संतुष्टि",
        labelWorkLifeBalance: "कार्य-जीवन संतुलन (1-4)",
        wlb1: "1 - खराब संतुलन",
        wlb2: "2 - अच्छा संतुलन",
        wlb3: "3 - बेहतर संतुलन",
        wlb4: "4 - सर्वश्रेष्ठ संतुलन",

        secTenure: "4. अनुभव और यात्रा दूरी",
        labelYearsAtCompany: "कंपनी में अनुभव (वर्ष)",
        labelDistanceFromHome: "घर से दूरी (किमी)",
        predictBtn: "अट्रिशन जोखिम और कारणों का विश्लेषण करें",

        resultTitle: "पूर्वानुमान परिणाम",
        readyBadge: "तैयार",
        reasonsTitle: "यह कर्मचारी कंपनी क्यों छोड़ सकता है / रुक सकता है?",
        reasonsSub: "SHAP Explainability मॉडल द्वारा गणना किए गए प्रमुख कारक नीचे दिए गए हैं।",
        pushHeader: "अट्रिशन जोखिम बढ़ाने वाले प्रमुख कारक",
        pullHeader: "अट्रिशन जोखिम घटाने वाले प्रमुख कारक",
        noPushFactors: "जोखिम बढ़ाने वाले कोई मुख्य कारक नहीं मिले।",
        noPullFactors: "जोखिम घटाने वाले कोई मुख्य कारक नहीं मिले।",

        summaryTitle: "कर्मचारी जोखिम सारांश एवं एचआर कार्रवाई",
        sumRiskLevelLabel: "जोखिम स्तर:",
        sumTurnoverProbLabel: "छोड़ने की संभावना:",
        sumPrimaryDriverLabel: "प्राथमिक कारण:",
        sumSecDriverLabel: "द्वितीयक कारण:",
        sumHRActionLabel: "अनुशंसित एचआर कार्रवाई:",

        highRiskBand: "उच्च अट्रिशन जोखिम (High Risk)",
        medRiskBand: "मध्यम अट्रिशन जोखिम (Medium Risk)",
        lowRiskBand: "कम अट्रिशन जोखिम (Low Risk)",

        batchTitle: "टीम अट्रिशन बैच ऑडिट (CSV मूल्यांकन)",
        batchSub: "कर्मचारी डेटा वाली CSV फ़ाइल अपलोड करें या कंपनी नमूना परीक्षण चलाएं।",
        uploadCsvBtn: "कर्मचारी CSV अपलोड करें",
        runSampleBatchBtn: "कंपनी नमूना बैच मूल्यांकन चलाएं",
        searchPlaceholder: "कर्मचारी आईडी, पद या कंपनी खोजें...",
        allRiskLevels: "सभी जोखिम स्तर",
        highRiskOnly: "केवल उच्च जोखिम",
        medRiskOnly: "केवल मध्यम जोखिम",
        lowRiskOnly: "केवल कम जोखिम",
        exportCsvBtn: "ऑडिट रिपोर्ट CSV निर्यात करें",

        colEmpId: "कर्मचारी आईडी",
        colCompany: "कंपनी",
        colRole: "कार्य पद",
        colIncome: "मासिक वेतन",
        colOvertime: "ओवरटाइम",
        colProb: "जोखिम संभावना",
        colRiskLevel: "जोखिम स्तर",
        colDrivers: "मुख्य अट्रिशन कारण",
        noBatchRunYet: 'अभी तक कोई बैच परीक्षण नहीं किया गया है। "कंपनी नमूना बैच मूल्यांकन चलाएं" पर क्लिक करें।',

        analyticsCompanyFilter: "एनालिटिक्स कंपनी फ़िल्टर:",
        showingMetricsFor: "मेट्रिक्स प्रदर्शित किए जा रहे हैं:",
        highRiskTitle: "उच्च अट्रिशन जोखिम",
        medRiskTitle: "मध्यम अट्रिशन जोखिम",
        lowRiskTitle: "कम अट्रिशन जोखिम",
        riskDistributionTitle: "अट्रिशन जोखिम वितरण",
        pieChartPill: "पाई चार्ट मान स्पष्ट रूप से प्रदर्शित",
        globalShapTitle: "अट्रिशन के मुख्य कारण (Global SHAP Impact)",
        companyCompTitle: "कंपनियों के बीच अट्रिशन तुलनात्मक विश्लेषण",
        companyCompSub: "TCS, Wipro, Infosys, IBM, Cognizant, और Accenture की अट्रिशन दरों की प्रत्यक्ष तुलना।",
        multiCompPill: "मल्टी-कंपनी बेंचमार्क",
        roleBreakdownTitle: "कार्य पद के अनुसार अट्रिशन दर (%)",
        benchmarkTitle: "मॉडल बेंचमार्क सटीकता सारांश",
        colModel: "मॉडल आर्किटेक्चर",
        colRocAuc: "ROC-AUC स्कोर",
        colRecall: "रिकॉल (Recall)",
        colPrecision: "प्रिसिजन (Precision)",
        colF1: "F1 स्कोर",
        colAccuracy: "सटीकता (Accuracy)"
    }
};

window.setLanguage = function (lang) {
    if (!window.i18nDict[lang]) lang = "en";
    window.currentLang = lang;
    const dict = window.i18nDict[lang];

    // Translate all static elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                el.placeholder = dict[key];
            } else {
                el.innerText = dict[key];
            }
        }
    });

    // Update Language Dropdown Selectors
    const langSelect = document.getElementById("header-language-selector");
    if (langSelect) langSelect.value = lang;

    // Trigger dynamic translations update in app.js if available
    if (typeof window.onLanguageChanged === "function") {
        window.onLanguageChanged(lang);
    }
};
