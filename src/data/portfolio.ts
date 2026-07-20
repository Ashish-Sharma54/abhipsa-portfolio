export const siteConfig = {
  name: "Abhipsa",
  fullName: "Abhipsa Dash",
  title: "Biomedical Engineering Researcher",
  description:
    "B.Tech in Biomedical Engineering at NIT Rourkela (CGPA 9.14). Researching physiological signal analysis, multimodal learning, and Vision-Language Models for healthcare applications.",
  email: "abhipsa0407@gmail.com",
  github: "https://github.com/dashabhipsa",
  linkedin: "https://www.linkedin.com/in/dash-abhipsa1a00121/",
  location: "NIT Rourkela, Odisha",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const education = [
  {
    degree: "Bachelor of Technology in Biomedical Engineering",
    institution: "National Institute of Technology, Rourkela",
    period: "Nov 2022 – June 2026",
    location: "Rourkela, Odisha",
    detail: "CGPA – 9.14",
  },
  {
    degree: "AISCCE – CBSE, Science (PCM)",
    institution: "Mother's Public School, Bhubaneswar",
    period: "May 2022",
    location: "Bhubaneswar, Odisha",
    detail: "Percentage – 97.6%",
  },
  {
    degree: "AISSE – CBSE",
    institution: "St. Xavier's High School, Bhubaneswar",
    period: "May 2020",
    location: "Bhubaneswar, Odisha",
    detail: "Percentage – 98.2%",
  },
];

export const researchInterests = [
  "Physiological signals and wearable sensor data analysis",
  "Multimodal learning and time-series modelling",
  "Vision-Language Models (VLMs) for visual reasoning",
  "Interpretable neural networks for healthcare applications",
  "Biomedical signal processing and medical image analysis",
  "Domain adaptation and generalisation in biomedical data",
];

export const workExperience = [
  {
    role: "REU Research Intern",
    company: "Translational AI Center, Iowa State University",
    period: "May 2025 – July 2025",
    location: "USA",
    description:
      "Benchmarking Vision-Language Models for Few-shot cell detection and classification.",
    highlights: [
      "Implemented a VLM-based few-shot object detection and classification pipeline using GPT-4o, Gemini-2.5-Pro, and Gemini-2.5-Pro-Flash in thinking and non-thinking modes for cells in microscopy images across multiple datasets (NIH-3T3, BCCD, Rat-C6, Malaria).",
      "Designed zero-shot and few-shot bounding box prediction experiments using few-shot prompting and image annotations, and evaluated model performance using IoU, mAP, and F1 score, analysing robustness under domain shift and varying shot counts.",
    ],
  },
  {
    role: "Research Intern",
    company: "Intelligent Biosensors and Microsystems Laboratory, NIT Rourkela",
    period: "May 2024 – July 2024",
    location: "Rourkela, Odisha",
    description:
      "Automatic Physical Activity Recognition using hybrid CNN-BiGRU-Bahdanau Attention Networks.",
    highlights: [
      "Developed hybrid Bi-directional GRU + 1D CNN models with Bahdanau attention layers for classifying physical activities (walking, sitting, standing) using wearable sensor data across multiple benchmarks, including UCI HAR, USC-HAD, UniMiB-SHAR, and Opportunity datasets.",
      "Performed cross-dataset evaluation using 5-fold cross-validation, achieving high accuracy and precision–recall scores while examining generalisation across sensor placements and activity distributions.",
    ],
  },
];

export const projects = [
  {
    title: "Interpretable Neural Networks for Activity Classification and Glucose Forecasting",
    description:
      "Developed a two-stage BiGRU-CNN framework for activity-aware glucose forecasting that transfers latent embeddings from Stage-1 aerobic/anaerobic activity classification into a Stage-2 personalized glucose forecasting model using EMG, heart rate, and CGM signals from OhioT1DM 2018/2020 and a custom-collected dataset.",
    results: "Achieved 97.84% activity classification accuracy and RMSE 4.20 and MAE 2.75 for glucose forecasting, while Clarke Error Grid analysis showed the majority of predictions in Zone A at all prediction horizons under LOSO evaluation.",
    tags: ["BiGRU", "CNN", "Glucose Forecasting", "OhioT1DM"],
  },
  {
    title: "Cross-Disease Risk Estimation using Interpretable Probabilistic Tsetlin Machines",
    description:
      "Built an interpretable probabilistic Tsetlin Machine to model transcriptomic crosstalk between Type-2 Diabetes and endocrine cancers using multi-RNA-Seq data, enabling explainable cross-disease risk mapping.",
    results: "Achieved 98.8% recall and 98.4% F1-score, identifying shared immune–metabolic genes TYROBP, FCGR1A, CD163, and visualizing phenotypic convergence via clause activation heatmaps, latent-space centroid distances, and t-SNE plots.",
    tags: ["Tsetlin Machine", "Transcriptomics", "Interpretable AI", "Cross-Disease"],
  },
];

export const publications = {
  published: [
    {
      title: "Integrating Transcriptomics and Gene-Level Interpretable Probabilistic Tsetlin Machine Reveals Elevated Pancreatic Cancer Risk in Type 2 Diabetes",
      authors: "Subhradyuti Basu, Abhipsa Dash, Deepjyoti Kalita, Amrita Singh, Christofer Toumazou, Khalid Baig Mirza",
      journal: "Computational Biology and Chemistry",
      year: "2026",
      tags: ["Transcriptomics", "Tsetlin Machine", "Diabetes"],
    },
    {
      title: "In-Context Adaptation of VLMs for Few-Shot Cell Detection in Optical Microscopy",
      authors: "Shreyan Ganguly, Angona Biswas, Jaydeep Rade, Md Hasan Hasib, Nabila Masud, Nitish Singla, Abhipsa Dash, Ushashi Bhattacharjee, Aditya Balu, Anwesha Sarkar, Adarsh Krishnamurthy, Soumik Sarkar",
      journal: "Frontiers in Artificial Intelligence",
      year: "2026",
      tags: ["VLMs", "Few-Shot Learning", "Cell Detection"],
    },
    {
      title: "Automatic Physical Activity Recognition using Multichannel, Fusion CNN-BiGRU-Bahdanau Attention Networks",
      authors: "Deepjyoti Kalita, Abhipsa Dash, Khalid B. Mirza",
      journal: "Medical Engineering and Physics, Elsevier",
      year: "2025",
      tags: ["CNN", "BiGRU", "Activity Recognition"],
    },
  ],
  underReview: [
    {
      title: "Multi-Exogenous Landmark Encoding Hierarchical Interpolation Network for Glucose Forecasting in Aerobic and Anaerobic Exercise",
      authors: "Abhipsa Dash, Manaswita Ghose, Subhradyuti Basu, Rominkumar Vaghasiya, Deepjyoti Kalita, Jayanta Kumar Panda, Khalid B Mirza",
      journal: "IEEE Journal of Biomedical and Health Informatics (JBHI)",
      year: "2026",
      tags: ["Glucose Forecasting", "IEEE JBHI"],
    },
  ],
  conference: [
    {
      title: "Subject-Aware Multimodal Glucose Forecasting with Channel-Temporal Attention and Iterative Residual Refinement",
      authors: "Abhipsa Dash, Manaswita Ghose, Tushar Shirke, Deepjyoti Kalita, Khalid Baig Mirza",
      venue: "IEEE TENCON 2026",
      year: "2026",
    },
    {
      title: "Interstitial Glucose Dynamics During Aerobic and Anaerobic Physical Activities",
      authors: "Abhipsa Dash, Rominkumar Vaghasiya, Manaswita Ghose, Soumyaranjan Mohanty, Jayanta Kumar Panda, Khalid B. Mirza",
      venue: "Diabetes India 2026 World Congress",
      year: "2026",
    },
    {
      title: "Cross-Disease Risk Estimation using Interpretable Probabilistic Tsetlin Machines on Transcriptomic Data",
      authors: "Abhipsa Dash, Subhradyuti Basu, Deepjyoti Kalita, Soumyaranjan Mohanty, Amrita Singh, Khalid B. Mirza",
      venue: "Doctors AI Global Summit 2025",
      year: "2025",
    },
    {
      title: "Impact of CLAHE and Gaussian Smoothing for Optimized Deep Learning Based Diabetic Retinopathy Detection",
      authors: "Deepjyoti Kalita, Shashank Patoju, Abhipsa Dash, Hrishita Sharma, Khalid B. Mirza",
      venue: "6th IEEE India Council International Subsections Conference (INDISCON 2025)",
      year: "2025",
    },
  ],
};

export const skills = {
  "Languages": ["Python", "MATLAB", "SQL", "HTML", "CSS"],
  "Frameworks": ["FastAPI", "Streamlit", "Gradio", "Git", "Docker", "MLflow", "LangChain", "LangGraph"],
  "ML / AI Libraries": ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
  "Research": ["Signal Processing", "Medical Imaging", "Statistical Analysis", "Experimental Design", "Academic Writing", "Peer Review"],
  "Tools": ["Google Scholar", "Overleaf", "LaTeX", "Mendeley", "Jupyter", "Linux"],
};

export const achievements = [
  {
    title: "GATE 2025 – All India Rank 36",
    detail: "Biomedical Engineering",
    date: "Mar 2025",
    icon: "trophy",
  },
  {
    title: "IELTS Academic – Band 8.0",
    detail: "CEFR Level C1",
    date: "Oct 2025",
    icon: "globe",
  },
  {
    title: "GIAN Course 2025",
    detail: "AI and Medical Image Informatics for Cross-Scale Disease Characterisation and Precision Medicine",
    date: "Dec 2025",
    icon: "certificate",
  },
];

export const extracurricular = [
  {
    role: "Member",
    organization: "Chitraang",
    period: "Dec 2022 – June 2026",
    description: "Designed and executed multiple large-scale mural and art installations across campus. Organized and managed Palette, the official art and installation exhibition of NIT Rourkela.",
  },
  {
    role: "Management Team",
    organization: "Think India Odisha Conclave",
    period: "Dec 2022 – June 2026",
    description: "Coordinated the Odisha segment of the Think India Conclave, leading communication and logistics for academic and networking sessions focused on youth leadership, innovation, and policy discussion.",
  },
  {
    role: "Organising Team",
    organization: "GIAN Course 2025",
    period: "Dec 2025",
    description: "Part of the core organising team, coordinating lectures, logistics, and academic sessions for an international GIAN program.",
  },
  {
    role: "Coordinator",
    organization: "Vriddhi (Annual Sports Fest, NIT Rourkela)",
    period: "Nov 2023",
    description: "Led a five-member organizing team handling registration, scheduling, and data management for over 500 participants.",
  },
];
