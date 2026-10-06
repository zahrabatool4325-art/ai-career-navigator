import { Career } from '../types';

export const CAREERS: Career[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    shortDesc: 'Build intelligent applications and AI-powered systems.',
    fullDesc: 'AI Engineers bridge the gap between machine learning models and production software. They integrate foundation models, build retrieval-augmented generation (RAG) pipelines, construct autonomous agent workflows, and deploy robust APIs that millions of users interact with.',
    iconName: 'Cpu',
    keySkills: ['Python', 'LLM APIs & Prompting', 'Vector Databases & RAG', 'Full-Stack Software Engineering', 'System Design', 'Git & CI/CD'],
    technologies: ['Python', 'FastAPI', 'LangChain / LlamaIndex', 'Pinecone / Chroma', 'OpenAI / Gemini APIs', 'Docker', 'Next.js'],
    personalityFit: [
      'Enjoys building tangible software end-to-end',
      'Pragmatic problem solver focused on user experience',
      'Excited by rapid iteration and shipping real tools',
      'Comfortable connecting different APIs and architectural layers'
    ],
    whatTheyDo: [
      'Design and build full-stack applications with integrated generative AI capabilities',
      'Build RAG pipelines connecting proprietary documents to LLM reasoning loops',
      'Orchestrate autonomous agent systems with multi-step tool invocation',
      'Optimize latency, cost, caching, and fallback mechanisms for AI features',
      'Establish evaluation benchmarks for output quality, safety, and hallucination reduction'
    ],
    industryApplications: [
      'Enterprise Copilots & Workflow Automation',
      'Healthcare Diagnostic Support Interfaces',
      'EdTech Personalized Tutoring Platforms',
      'Creative Software & AI-Assisted Design Suites'
    ],
    careerProgression: [
      { title: 'Associate AI Engineer', experience: '0–2 years', focus: 'API integrations, prompt evaluations, building UI wrappers, basic RAG' },
      { title: 'Senior AI Engineer', experience: '3–5 years', focus: 'Complex agentic workflows, high-throughput streaming systems, cost optimization' },
      { title: 'Staff AI Architect', experience: '6+ years', focus: 'Company-wide AI platform architecture, security governance, multi-modal systems' }
    ],
    skillsToDevelop: ['Python', 'Mathematics for AI', 'Machine Learning', 'Deep Learning', 'APIs & Backend', 'Git & GitHub'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Python Fundamentals',
        description: 'Master clean coding, OOP, async programming, and data structures in Python.',
        keyTopics: ['Variables, Loops & Functions', 'Object-Oriented Programming (OOP)', 'AsyncIO & Concurrency', 'Package Management with Poetry/Pip'],
        recommendedTools: ['Python 3.12+', 'VS Code', 'Ruff / Black'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 2,
        title: 'Mathematics for AI',
        description: 'Build intuition for linear algebra, calculus, and basic probability required to understand embeddings.',
        keyTopics: ['Vectors, Matrices & Dot Products', 'Gradients & Partial Derivatives', 'Probability Distributions', 'Cosine Similarity & Distance Metrics'],
        recommendedTools: ['3Blue1Brown Linear Algebra', 'Khan Academy'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 3,
        title: 'NumPy & Pandas',
        description: 'Manipulate multidimensional arrays, tabular data, and data transformation routines.',
        keyTopics: ['NumPy Array Operations & Broadcasting', 'Pandas DataFrame Transformations', 'Data Cleaning & Normalization', 'File formats: CSV, Parquet, JSON'],
        recommendedTools: ['NumPy', 'Pandas', 'Jupyter Lab'],
        estimatedWeeks: '2 weeks'
      },
      {
        stageNumber: 4,
        title: 'Machine Learning Foundations',
        description: 'Understand core supervised and unsupervised algorithms, overfitting, and validation metrics.',
        keyTopics: ['Linear & Logistic Regression', 'Decision Trees & Ensembles', 'Cross-Validation & Train-Test Splits', 'Precision, Recall, ROC-AUC'],
        recommendedTools: ['Scikit-Learn', 'Matplotlib / Seaborn'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 5,
        title: 'Deep Learning',
        description: 'Learn neural network basics, activation functions, backpropagation, and loss functions.',
        keyTopics: ['Multilayer Perceptrons (MLPs)', 'Backpropagation & Stochastic Gradient Descent', 'Loss Functions & Regularization', 'Overfitting Prevention (Dropout)'],
        recommendedTools: ['PyTorch', 'TensorBoard'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 6,
        title: 'PyTorch & Modern Neural Networks',
        description: 'Train and fine-tune modern neural networks using PyTorch tensors and modules.',
        keyTopics: ['Custom Datasets & DataLoaders', 'Building nn.Module Architectures', 'Model Checkpointing & GPU Acceleration', 'Hugging Face Transformers basics'],
        recommendedTools: ['PyTorch', 'Hugging Face Hub', 'Google Colab / Kaggle'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 7,
        title: 'Large Language Models (LLMs)',
        description: 'Understand transformer attention mechanisms, tokenization, context windows, and prompting techniques.',
        keyTopics: ['Self-Attention & Transformer Architecture', 'Tokenization & Embeddings', 'Structured Outputs (JSON mode)', 'Few-shot & Chain-of-Thought prompting'],
        recommendedTools: ['Gemini API', 'OpenAI API', 'Tiktoken'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 8,
        title: 'RAG & AI Applications',
        description: 'Implement Retrieval-Augmented Generation with vector databases and chunking strategies.',
        keyTopics: ['Chunking & Embedding Generation', 'Vector Search (HNSW / Cosine)', 'Hybrid Keyword + Semantic Search', 'Reranking & Context Stuffing'],
        recommendedTools: ['ChromaDB / Pinecone', 'LangChain / LlamaIndex', 'FastAPI'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 9,
        title: 'AI Agents & Function Calling',
        description: 'Build autonomous agents that reason, plan, and use tools to accomplish multi-step objectives.',
        keyTopics: ['Tool/Function Calling Protocols', 'ReAct Prompting & Planning Loops', 'State Management & Memory Persistence', 'Multi-Agent Collaboration'],
        recommendedTools: ['LangGraph', 'Pydantic AI', 'PostgreSQL'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 10,
        title: 'Production Deployment & Evaluation',
        description: 'Deploy resilient AI services with streaming, rate-limiting, observability, and evals.',
        keyTopics: ['FastAPI Server with SSE Streaming', 'Dockerization & Cloud Run / AWS ECS', 'LLM Observability & Tracing', 'Ragas & Prompt Evals'],
        recommendedTools: ['Docker', 'Langfuse / Arize', 'GitHub Actions'],
        estimatedWeeks: '3 weeks'
      }
    ],
    projects: [
      {
        title: 'AI Chatbot with Memory',
        difficulty: 'Beginner',
        description: 'Build an interactive web-based conversational assistant that maintains conversation history, uses system prompts, and renders markdown outputs.',
        skillsLearned: ['Python', 'API Integration', 'Session State Management', 'Streamlit or FastAPI']
      },
      {
        title: 'Document & Resume Analyzer',
        difficulty: 'Intermediate',
        description: 'Develop an application that extracts text from PDFs, calculates job matching scores, and provides structured feedback using JSON schema mode.',
        skillsLearned: ['PDF Parsing', 'Prompt Engineering', 'Structured JSON Outputs', 'Pydantic Validation']
      },
      {
        title: 'RAG-based Knowledge Assistant',
        difficulty: 'Advanced',
        description: 'Construct an end-to-end document search engine using semantic chunking, vector embeddings, hybrid reranking, and citation generation.',
        skillsLearned: ['Vector Databases', 'Embedding Models', 'Chunking Strategies', 'FastAPI & React']
      }
    ]
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    shortDesc: 'Develop, optimize, and deploy machine learning models at scale.',
    fullDesc: 'Machine Learning Engineers focus on the end-to-end lifecycle of ML models. They build scalable training pipelines, monitor data drift, optimize inference throughput, and maintain MLOps infrastructure in production clouds.',
    iconName: 'Server',
    keySkills: ['PyTorch / TensorFlow', 'MLOps & CI/CD for Models', 'Model Quantization & Optimization', 'Feature Engineering', 'Docker & Kubernetes', 'Python & C++ basics'],
    technologies: ['PyTorch', 'Kubeflow / MLflow', 'Triton Inference Server', 'vLLM', 'Docker', 'AWS SageMaker', 'Weights & Biases'],
    personalityFit: [
      'Enjoys systems engineering, performance tuning, and optimization',
      'Excited by infrastructure, throughput, and low-latency serving',
      'Rigorous about reproducible pipelines and data integrity',
      'Balanced between algorithmic understanding and systems architecture'
    ],
    whatTheyDo: [
      'Build automated training and evaluation pipelines for machine learning models',
      'Optimize model latency and memory footprint using quantization (INT8, FP8) and pruning',
      'Deploy inference servers capable of serving thousands of queries per second',
      'Design feature stores and data preprocessing pipelines that prevent training-serving skew',
      'Monitor production model accuracy, concept drift, and data pipeline health'
    ],
    industryApplications: [
      'High-Frequency Financial Algorithmic Systems',
      'Autonomous Driving Sensor Fusion Pipelines',
      'Recommendation Engines (Streaming & E-commerce)',
      'Telecom Network Anomaly Detection'
    ],
    careerProgression: [
      { title: 'Junior ML Engineer', experience: '0–2 years', focus: 'Training script maintenance, data preprocessing, baseline model benchmarking' },
      { title: 'Senior ML Engineer', experience: '3–5 years', focus: 'Distributed training clusters, custom inference serving, continuous training pipelines' },
      { title: 'Lead MLOps Architect', experience: '6+ years', focus: 'Organization-wide ML platform governance, hardware budgeting (GPUs/TPUs), high-scale reliability' }
    ],
    skillsToDevelop: ['PyTorch', 'Distributed Computing', 'MLOps (MLflow, Kubeflow)', 'Model Quantization', 'Docker & Kubernetes', 'System Benchmarking'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Python & Systems Foundations',
        description: 'Deepen knowledge in systems programming, memory management, and Linux tooling.',
        keyTopics: ['Memory & Profiling in Python', 'Linux Shell & Bash Scripting', 'Virtual Environments & Packaging', 'Multiprocessing & Threading'],
        recommendedTools: ['Linux', 'Bash', 'PySpy / cProfile'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 2,
        title: 'Applied Math & Statistics',
        description: 'Master linear algebra, multivariate calculus, and statistical hypothesis testing.',
        keyTopics: ['Eigenvalues & SVD', 'Optimization (SGD, Adam, L-BFGS)', 'Hypothesis Testing & A/B Experiments', 'Covariance & Correlation'],
        recommendedTools: ['NumPy', 'SciPy', 'Statsmodels'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 3,
        title: 'Classical Machine Learning',
        description: 'Build strong intuitions for traditional ML algorithms and feature engineering techniques.',
        keyTopics: ['Gradient Boosted Trees (XGBoost, LightGBM)', 'SVMs & Random Forests', 'Feature Scaling & One-Hot Encoding', 'Dimensionality Reduction (PCA, UMAP)'],
        recommendedTools: ['Scikit-Learn', 'XGBoost', 'LightGBM'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 4,
        title: 'Deep Learning with PyTorch',
        description: 'Build, train, and validate custom neural architectures from scratch in PyTorch.',
        keyTopics: ['Autograd & Tensor Manipulation', 'Loss Functions & Custom Optimizers', 'Model Checkpointing & Early Stopping', 'GPU Training with CUDA'],
        recommendedTools: ['PyTorch', 'NVIDIA CUDA', 'Torchvision'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 5,
        title: 'Experiment Tracking & Versioning',
        description: 'Implement rigorous reproducibility with experiment logging and dataset version control.',
        keyTopics: ['Hyperparameter Sweeps', 'Weights & Biases Logging', 'Data Version Control (DVC)', 'Model Registries'],
        recommendedTools: ['MLflow', 'Weights & Biases', 'DVC'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 6,
        title: 'Model Optimization & Compression',
        description: 'Squeeze maximum performance out of models through pruning, distillation, and quantization.',
        keyTopics: ['Post-Training Quantization (PTQ)', 'Knowledge Distillation', 'ONNX Export & Runtime', 'TensorRT & vLLM Engines'],
        recommendedTools: ['ONNX', 'TensorRT', 'vLLM'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 7,
        title: 'MLOps & Inference Serving',
        description: 'Package models into resilient microservices capable of high-throughput predictions.',
        keyTopics: ['Dockerizing ML Services', 'Triton / TorchServe / FastAPI', 'Batch vs Real-time Inference', 'gRPC vs REST Protocols'],
        recommendedTools: ['Docker', 'Triton Inference Server', 'gRPC'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 8,
        title: 'Monitoring & Drift Detection',
        description: 'Ensure models stay accurate in production through automated metrics and retrain triggers.',
        keyTopics: ['Data Drift & Concept Drift', 'KS-Tests & Population Stability Index', 'Prometheus & Grafana Monitoring', 'Automated Retraining Pipelines'],
        recommendedTools: ['Evidently AI', 'Prometheus', 'Grafana'],
        estimatedWeeks: '3 weeks'
      }
    ],
    projects: [
      {
        title: 'Customer Churn Predictor API',
        difficulty: 'Beginner',
        description: 'Train an XGBoost model on tabular customer data, evaluate using ROC-AUC, and wrap it into a containerized FastAPI endpoint.',
        skillsLearned: ['Feature Engineering', 'Scikit-Learn', 'FastAPI', 'Docker Basics']
      },
      {
        title: 'End-to-End MLOps Pipeline',
        difficulty: 'Intermediate',
        description: 'Set up an automated training pipeline with MLflow experiment tracking, automated model testing, and container deployment upon Git push.',
        skillsLearned: ['MLflow', 'GitHub Actions', 'Model Registry', 'Continuous Integration']
      },
      {
        title: 'High-Throughput LLM Serving System',
        difficulty: 'Advanced',
        description: 'Deploy an open-weights model using vLLM or Triton with PagedAttention, benchmarking token generation latency and GPU utilization.',
        skillsLearned: ['Model Quantization', 'vLLM', 'Inference Optimization', 'Benchmarking']
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    shortDesc: 'Use data, statistics, and machine learning to discover insights.',
    fullDesc: 'Data Scientists extract actionable knowledge from noisy real-world data. They formulate hypotheses, design rigorous statistical experiments, build predictive models, and communicate strategic findings to executive decision-makers.',
    iconName: 'BarChart3',
    keySkills: ['Statistical Inference & A/B Testing', 'Python & SQL', 'Exploratory Data Analysis (EDA)', 'Predictive Modeling', 'Data Storytelling', 'Business Acumen'],
    technologies: ['Python', 'SQL (PostgreSQL, Snowflake)', 'Pandas / Polars', 'Scikit-Learn', 'Tableau / PowerBI', 'Jupyter', 'Streamlit'],
    personalityFit: [
      'Inquisitive mindset: loves asking "Why did this metric change?"',
      'Strong analytical intuition and appreciation for empirical evidence',
      'Enjoys bridging technical findings with strategic human decisions',
      'Appreciates both storytelling and numerical rigor'
    ],
    whatTheyDo: [
      'Clean, transform, and analyze massive datasets from diverse databases and logs',
      'Formulate hypotheses and run statistical A/B tests to measure feature impact',
      'Build predictive models for customer churn, lifetime value, and demand forecasting',
      'Synthesize complex findings into executive summaries and interactive dashboards',
      'Collaborate with product and marketing teams to define core company metrics'
    ],
    industryApplications: [
      'Consumer Tech Engagement & Retention Optimization',
      'Healthcare Clinical Trial Data Modeling',
      'Retail Supply Chain Demand Forecasting',
      'Fintech Fraud Detection & Credit Risk Scoring'
    ],
    careerProgression: [
      { title: 'Junior Data Scientist', experience: '0–2 years', focus: 'Data cleaning, EDA, SQL queries, standard regression/classification models' },
      { title: 'Senior Data Scientist', experience: '3–5 years', focus: 'Complex causal inference, cross-functional project leadership, A/B testing frameworks' },
      { title: 'Principal Data Scientist', experience: '6+ years', focus: 'Strategic company analytics roadmap, high-impact business modeling, mentoring' }
    ],
    skillsToDevelop: ['Advanced SQL', 'Statistical Hypothesis Testing', 'Python (Pandas, Polars)', 'Scikit-Learn', 'Data Visualization', 'Executive Communication'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Advanced SQL & Relational Databases',
        description: 'Master writing complex queries, window functions, CTEs, and relational database schemas.',
        keyTopics: ['Joins, Grouping & Aggregations', 'Window Functions (RANK, LEAD, LAG)', 'Common Table Expressions (CTEs)', 'Query Optimization & Indexing'],
        recommendedTools: ['PostgreSQL', 'DuckDB', 'DBeaver'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 2,
        title: 'Python for Data Analysis',
        description: 'Harness Pandas and Polars to wrangle, reshape, and clean real-world messy data.',
        keyTopics: ['DataFrame Indexing & Slicing', 'Missing Data Imputation', 'Data Reshaping (Melt, Pivot)', 'Fast processing with Polars'],
        recommendedTools: ['Pandas', 'Polars', 'Jupyter Lab'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 3,
        title: 'Probability & Applied Statistics',
        description: 'Develop strong statistical foundations for hypothesis testing and distributions.',
        keyTopics: ['Descriptive Statistics', 'Normal, Binomial & Poisson Distributions', 'Central Limit Theorem', 'Confidence Intervals & p-values'],
        recommendedTools: ['SciPy Stats', 'Statsmodels'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 4,
        title: 'Exploratory Data Analysis & Visualization',
        description: 'Uncover hidden patterns and tell compelling visual stories through clean charts.',
        keyTopics: ['Correlation & Distribution Plots', 'Data Storytelling Principles', 'Interactive Dashboards with Plotly', 'Heatmaps & Categorical Analysis'],
        recommendedTools: ['Seaborn', 'Plotly', 'Matplotlib'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 5,
        title: 'Statistical Modeling & Machine Learning',
        description: 'Train supervised and unsupervised models with robust feature selection and evaluation.',
        keyTopics: ['Linear & Logistic Regression with Interpretation', 'Random Forests & Gradient Boosting', 'Clustering (K-Means, DBSCAN)', 'Model Interpretability (SHAP, LIME)'],
        recommendedTools: ['Scikit-Learn', 'SHAP'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 6,
        title: 'A/B Testing & Experimentation',
        description: 'Design rigorous randomized controlled trials and interpret statistical outcomes.',
        keyTopics: ['Sample Size & Power Calculation', 'Type I & Type II Errors', 'Multi-Armed Bandits vs A/B', 'Novelty Effects & Cohort Tracking'],
        recommendedTools: ['Python Experimentation Suites', 'G*Power'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 7,
        title: 'Causal Inference & Advanced Analytics',
        description: 'Go beyond correlation to understand true causality in business and scientific scenarios.',
        keyTopics: ['Difference-in-Differences', 'Propensity Score Matching', 'Instrumental Variables', 'Interrupted Time Series'],
        recommendedTools: ['DoWhy', 'CausalML'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 8,
        title: 'Communicating Business Impact',
        description: 'Translate analytical models into interactive executive dashboards and decision decks.',
        keyTopics: ['Interactive Apps with Streamlit', 'KPI Design & Metric Trees', 'Executive Slide Deck Architecture', 'Translating Odds Ratios to Revenue'],
        recommendedTools: ['Streamlit', 'Tableau', 'PowerBI'],
        estimatedWeeks: '2-3 weeks'
      }
    ],
    projects: [
      {
        title: 'E-commerce Customer Segmentation',
        difficulty: 'Beginner',
        description: 'Analyze transaction histories using RFM (Recency, Frequency, Monetary) metrics and K-Means clustering to identify high-value customer personas.',
        skillsLearned: ['SQL', 'Pandas', 'K-Means Clustering', 'Matplotlib']
      },
      {
        title: 'A/B Test Evaluation Dashboard',
        difficulty: 'Intermediate',
        description: 'Build a Streamlit app that ingests user clickstream data, calculates statistical significance, confidence intervals, and warns against early stopping.',
        skillsLearned: ['Hypothesis Testing', 'Statistical Power', 'Streamlit', 'Plotly']
      },
      {
        title: 'Causal Churn & Lifetime Value Engine',
        difficulty: 'Advanced',
        description: 'Develop a predictive model that estimates customer lifetime value and uses causal inference (SHAP & propensity matching) to advise retention campaigns.',
        skillsLearned: ['Causal Inference', 'SHAP Explainability', 'Gradient Boosting', 'Executive Storytelling']
      }
    ]
  },
  {
    id: 'ai-researcher',
    title: 'AI Researcher',
    shortDesc: 'Explore new methods, models, and approaches in artificial intelligence.',
    fullDesc: 'AI Researchers expand the scientific frontier of machine intelligence. They investigate novel model architectures, investigate mechanistic interpretability, publish peer-reviewed papers at top conferences (NeurIPS, ICML, ICLR), and push the boundaries of general reasoning.',
    iconName: 'FlaskConical',
    keySkills: ['Advanced Mathematics & Theory', 'Deep Learning Architecture Design', 'Scientific Writing & Publishing', 'PyTorch / JAX', 'Mechanistic Interpretability', 'Benchmarking Rigor'],
    technologies: ['PyTorch', 'JAX / Flax', 'Hugging Face Transformers', 'LaTeX', 'CUDA / Triton', 'ArXiv / Weights & Biases'],
    personalityFit: [
      'Passionate about foundational scientific principles and curiosity-driven inquiry',
      'Thrives in open-ended research where answers are not yet known',
      'Comfortable reading math-dense academic papers',
      'Values theoretical rigor, proofs, and disciplined experimentation'
    ],
    whatTheyDo: [
      'Formulate novel hypotheses regarding neural representations and reasoning capability',
      'Design, implement, and benchmark experimental architectures against state of the art',
      'Investigate mechanistic interpretability, safety alignment, and reasoning boundaries',
      'Author scientific papers and present discoveries at leading AI conferences',
      'Collaborate with university laboratories and corporate frontier research divisions'
    ],
    industryApplications: [
      'Frontier Foundation Model Laboratories',
      'Biomedical Molecular & Protein Folding Modeling',
      'Quantum Computing & Material Science Simulation',
      'AI Safety & Alignment Verification Research'
    ],
    careerProgression: [
      { title: 'Research Intern / Associate', experience: '0–2 years', focus: 'Replicating baseline papers, conducting ablation studies, literature reviews' },
      { title: 'Research Scientist', experience: '3–5 years', focus: 'Leading primary paper submissions, designing novel training recipes, patent filings' },
      { title: 'Principal Research Scientist', experience: '6+ years', focus: 'Setting multi-year research agendas, lab direction, foundational scientific breakthroughs' }
    ],
    skillsToDevelop: ['Linear Algebra & Vector Calculus', 'Probability Theory & Measure', 'PyTorch & JAX', 'Academic Writing in LaTeX', 'Experimental Ablation Design', 'Model Architectures'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Rigorous Mathematical Foundations',
        description: 'Study advanced linear algebra, multivariable analysis, and optimization theory.',
        keyTopics: ['Spectral Theory & Matrix Decompositions', 'Convex Optimization & Duality', 'Information Theory (Entropy, KL Divergence)', 'Multivariate Probability'],
        recommendedTools: ['Gilbert Strang Lectures', 'Boyd Convex Optimization'],
        estimatedWeeks: '4-5 weeks'
      },
      {
        stageNumber: 2,
        title: 'Deep Learning from First Principles',
        description: 'Derive backpropagation and attention equations by hand, understanding loss landscapes.',
        keyTopics: ['Analytical Gradient Derivations', 'Loss Surface Geometry & Saddle Points', 'Initialization Schemes (He, Xavier)', 'Normalization Dynamics (LayerNorm, RMSNorm)'],
        recommendedTools: ['Goodfellow Deep Learning Book', 'PyTorch'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 3,
        title: 'Paper Replication & Literature Mastery',
        description: 'Learn to dissect academic publications and reproduce baseline findings faithfully.',
        keyTopics: ['Reading NeurIPS / ICLR Papers', 'Identifying Missing Baseline Hyperparameters', 'Ablation Study Methodology', 'Replicating landmark architectures'],
        recommendedTools: ['ArXiv', 'Papers with Code', 'Weights & Biases'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 4,
        title: 'Modern Transformer & Attention Innovations',
        description: 'Study self-attention variants, linear attention, state space models, and recurrence.',
        keyTopics: ['FlashAttention Mechanics', 'State Space Models (Mamba / S4)', 'Mixture of Experts (MoE) Routing', 'Positional Encodings (RoPE, ALiBi)'],
        recommendedTools: ['PyTorch', 'Hugging Face', 'JAX'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 5,
        title: 'Mechanistic Interpretability & AI Safety',
        description: 'Inspect what neural networks actually represent inside their hidden layers.',
        keyTopics: ['Probing Classifiers', 'Induction Heads & Circuit Analysis', 'Sparse Autoencoders (SAEs)', 'RLHF, DPO, and Alignment Objectives'],
        recommendedTools: ['TransformerLens', 'SAE Bench'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 6,
        title: 'JAX & Accelerated Computing',
        description: 'Leverage functional programming and automatic vectorization for custom primitives.',
        keyTopics: ['JAX Pure Functions & PRNG Keys', 'jit, vmap, and grad Primitives', 'Distributed Training with pmap', 'Flax / Equinox Frameworks'],
        recommendedTools: ['JAX', 'Flax', 'Google TPU Cloud'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 7,
        title: 'Academic Writing & Conference Submission',
        description: 'Master writing high-impact scientific prose, typesetting equations, and creating publication figures.',
        keyTopics: ['LaTeX / Overleaf Typesetting', 'Clear Scientific Argumentation', 'Creating High-Res Vector Schematics', 'Responding to Peer Review Rebuttals'],
        recommendedTools: ['Overleaf', 'Inkscape', 'LaTeX'],
        estimatedWeeks: '3 weeks'
      }
    ],
    projects: [
      {
        title: 'Paper Implementation from Scratch',
        difficulty: 'Beginner',
        description: 'Implement the original "Attention Is All You Need" transformer architecture in pure PyTorch without using pre-built layers.',
        skillsLearned: ['PyTorch nn.Module', 'Multi-Head Attention', 'Positional Encoding', 'PyTorch Tensor Math']
      },
      {
        title: 'Mechanistic Interpretability Probe',
        difficulty: 'Intermediate',
        description: 'Use TransformerLens to locate induction heads and analyze how a small language model performs in-context copy-paste tasks.',
        skillsLearned: ['TransformerLens', 'Attention Head Analysis', 'Activation Probing', 'Scientific Visualization']
      },
      {
        title: 'Novel Architecture Ablation Study',
        difficulty: 'Advanced',
        description: 'Design and evaluate a custom attention variant (e.g. sparse attention or hybrid recurrent mechanism) against a standard baseline, authoring an Overleaf report.',
        skillsLearned: ['JAX or PyTorch', 'Controlled Experiments', 'LaTeX Scientific Writing', 'Statistical Benchmarking']
      }
    ]
  },
  {
    id: 'nlp-engineer',
    title: 'NLP Engineer',
    shortDesc: 'Build systems that understand, generate, and process human language.',
    fullDesc: 'Natural Language Processing (NLP) Engineers specialize in computational linguistics and language model fine-tuning. They craft multilingual translation pipelines, semantic search engines, dialogue systems, and domain-adapted text models.',
    iconName: 'MessageSquareCode',
    keySkills: ['Computational Linguistics', 'Tokenization & Embeddings', 'Transformer Fine-Tuning (LoRA/QLoRA)', 'Text Preprocessing & Regex', 'Evaluation (BLEU, ROUGE, LLM-as-a-Judge)', 'Python'],
    technologies: ['Hugging Face', 'PyTorch', 'spaCy', 'LoRA / PEFT', 'Sentence Transformers', 'FastAPI'],
    personalityFit: [
      'Fascinated by language nuances, grammar, semantics, and rhetoric',
      'Enjoys bridging linguistic intuition with deep learning architectures',
      'Values multilingual accessibility and text representation nuances',
      'Detail-oriented when dealing with noisy, unstructured human writing'
    ],
    whatTheyDo: [
      'Fine-tune open-weights models (Llama, Mistral) on domain-specific corpora using LoRA',
      'Build semantic text search, classification, and entity extraction pipelines',
      'Curate, clean, and deduplicate massive text corpora for training and evaluation',
      'Optimize tokenizers and embedding models for multilingual and low-resource languages',
      'Design robust LLM-as-a-judge evaluation frameworks for conversational systems'
    ],
    industryApplications: [
      'Multilingual Translation & Localization Platforms',
      'Automated Legal Contract Analysis & Redlining',
      'Customer Support Conversational Intelligence',
      'Medical Record Clinical Entity Extraction'
    ],
    careerProgression: [
      { title: 'Junior NLP Engineer', experience: '0–2 years', focus: 'Text cleaning, regex tokenization, Hugging Face pipelines, sentiment classifiers' },
      { title: 'Senior NLP Engineer', experience: '3–5 years', focus: 'Domain fine-tuning (PEFT/LoRA), custom embedding fine-tuning, latency optimization' },
      { title: 'Lead Language Systems Architect', experience: '6+ years', focus: 'Enterprise conversational core, multi-language alignment, model governance' }
    ],
    skillsToDevelop: ['Linguistics & Text Preprocessing', 'Hugging Face Ecosystem', 'PEFT & LoRA Fine-Tuning', 'Vector Embeddings', 'Model Evaluation', 'PyTorch'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Text Fundamentals & Regex',
        description: 'Master Unicode handling, regular expressions, and classic text normalization.',
        keyTopics: ['Unicode Normalization & UTF-8', 'Advanced Regular Expressions', 'Tokenization Rules (Whitespace, BPE, WordPiece)', 'Stop words & Lemmatization'],
        recommendedTools: ['Python re module', 'Regex101', 'ftfy'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 2,
        title: 'Classical NLP with spaCy',
        description: 'Implement part-of-speech tagging, named entity recognition (NER), and dependency parsing.',
        keyTopics: ['Named Entity Recognition (NER)', 'Part-of-Speech (POS) Tagging', 'Dependency Parsing', 'TF-IDF & Word2Vec vectors'],
        recommendedTools: ['spaCy', 'NLTK', 'Scikit-Learn'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 3,
        title: 'The Hugging Face Ecosystem',
        description: 'Master using the Transformers, Datasets, and Accelerate libraries.',
        keyTopics: ['Hugging Face pipeline API', 'Tokenizers Library (AutoTokenizer)', 'Managing and streaming Hugging Face Datasets', 'Model Hub deployment'],
        recommendedTools: ['Hugging Face Transformers', 'Datasets', 'Colab GPU'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 4,
        title: 'Embeddings & Semantic Search',
        description: 'Learn dense vector representations and contrastive learning for search and classification.',
        keyTopics: ['Sentence Transformers (bi-encoders)', 'Cross-Encoders for Reranking', 'Contrastive Loss & Triplet Loss', 'MTEB (Massive Text Embedding Benchmark)'],
        recommendedTools: ['sentence-transformers', 'FAISS', 'ChromaDB'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 5,
        title: 'Model Fine-Tuning with PEFT & LoRA',
        description: 'Adapt multi-billion parameter language models on consumer GPUs using parameter-efficient tuning.',
        keyTopics: ['LoRA & QLoRA Mathematical Intuition', 'Quantization (4-bit / 8-bit with bitsandbytes)', 'Target Module Selection (q_proj, v_proj)', 'Dataset Formatting (ChatML, Alpaca)'],
        recommendedTools: ['PEFT', 'TRL (Transformer Reinforcement Learning)', 'Unsloth'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 6,
        title: 'Alignment & Preference Optimization',
        description: 'Align language model outputs with human preferences and domain safety guidelines.',
        keyTopics: ['Supervised Fine-Tuning (SFT)', 'Direct Preference Optimization (DPO)', 'Reward Modeling Intuitions', 'Preventing Catastrophic Forgetting'],
        recommendedTools: ['TRL DPO Trainer', 'Weights & Biases'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 7,
        title: 'NLP Evaluation & Productionization',
        description: 'Rigorously test models for precision, toxicity, hallucinations, and conversational coherence.',
        keyTopics: ['Automated Metrics (ROUGE, BLEU, BERTScore)', 'LLM-as-a-Judge Evaluation Protocols', 'Latency Profiling & vLLM Serving', 'Safety & Jailbreak Defense'],
        recommendedTools: ['Ragas', 'Promptfoo', 'vLLM'],
        estimatedWeeks: '3 weeks'
      }
    ],
    projects: [
      {
        title: 'Custom Domain Named Entity Recognizer',
        difficulty: 'Beginner',
        description: 'Train a spaCy or Hugging Face classifier to detect medical conditions or financial entities in unstructured blog posts.',
        skillsLearned: ['Text Preprocessing', 'spaCy', 'Classification Metrics', 'Annotation']
      },
      {
        title: 'Fine-Tuned Customer Support LLM',
        difficulty: 'Intermediate',
        description: 'Fine-tune a 7B model using QLoRA on a specialized customer support dataset to answer company-specific queries accurately.',
        skillsLearned: ['QLoRA / PEFT', 'Hugging Face TRL', 'Dataset Formatting', 'Validation']
      },
      {
        title: 'Multilingual Semantic Search & Reranking Engine',
        difficulty: 'Advanced',
        description: 'Build a multilingual search engine pairing a bi-encoder for candidate retrieval and a cross-encoder for semantic reranking across 5 languages.',
        skillsLearned: ['Sentence Transformers', 'Cross-Encoders', 'Contrastive Learning', 'FAISS Vector Indexing']
      }
    ]
  },
  {
    id: 'cv-engineer',
    title: 'Computer Vision Engineer',
    shortDesc: 'Build AI systems that understand, segment, and generate images and video.',
    fullDesc: 'Computer Vision Engineers empower machines to perceive the visual world. They develop algorithms for object detection, instance segmentation, 3D spatial reconstruction, video tracking, and diffusion-based image generation.',
    iconName: 'ScanEye',
    keySkills: ['Convolutional Networks & Vision Transformers', 'Object Detection (YOLO, DETR)', 'Image Processing (OpenCV)', 'Diffusion & Generative Models', '3D Vision & NeRFs', 'PyTorch'],
    technologies: ['OpenCV', 'PyTorch', 'Ultralytics YOLO', 'Torchvision', 'Hugging Face Diffusers', 'CUDA', 'C++ basics'],
    personalityFit: [
      'Visually oriented thinker who enjoys seeing models literally "see" and segment',
      'Excited by robotics, augmented reality, autonomous vehicles, and media',
      'Comfortable debugging spatial coordinates, bounding boxes, and camera matrices',
      'Appreciates real-time performance and GPU-accelerated computing'
    ],
    whatTheyDo: [
      'Develop real-time object detection and tracking pipelines for video streams',
      'Implement segmentation models for medical imaging, satellite data, and robotics',
      'Calibrate camera matrices and process 3D point clouds for spatial perception',
      'Fine-tune diffusion models and multimodal vision-language models (VLMs)',
      'Deploy models onto edge devices like NVIDIA Jetson or mobile platforms'
    ],
    industryApplications: [
      'Autonomous Driving & Robot Navigation',
      'Medical Radiology & Pathology Image Diagnostics',
      'Manufacturing Automated Quality Inspection',
      'Augmented Reality & Spatial Computing'
    ],
    careerProgression: [
      { title: 'Junior CV Engineer', experience: '0–2 years', focus: 'OpenCV filters, YOLO training on custom data, video streaming loops' },
      { title: 'Senior CV Engineer', experience: '3–5 years', focus: 'Vision Transformers, multi-camera tracking, edge deployment, synthetic data generation' },
      { title: 'Lead Perception Architect', experience: '6+ years', focus: 'Full autonomy perception stack, safety critical redundancy, multimodal foundation vision' }
    ],
    skillsToDevelop: ['OpenCV & Digital Image Processing', 'PyTorch & Torchvision', 'Object Detection (YOLO / DETR)', 'Vision Transformers (ViT)', 'Edge AI & TensorRT', 'Generative Diffusion Models'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Digital Image Processing with OpenCV',
        description: 'Learn color spaces, matrix transformations, filtering, and edge detection.',
        keyTopics: ['RGB, BGR, HSV & Grayscale Conversions', 'Convolution Kernels, Blurring & Sharpening', 'Canny Edge Detection & Contours', 'Geometric Transformations (Affine, Homography)'],
        recommendedTools: ['OpenCV', 'NumPy', 'Matplotlib'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 2,
        title: 'CNN Architectures & PyTorch Vision',
        description: 'Understand convolutional layers, pooling, receptive fields, and classic architectures.',
        keyTopics: ['2D Convolutions & Strides', 'ResNet, ConvNeXt, and Skip Connections', 'Data Augmentation (Albumentations)', 'Transfer Learning for Image Classification'],
        recommendedTools: ['PyTorch', 'Torchvision', 'Albumentations'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 3,
        title: 'Object Detection & YOLO',
        description: 'Master bounding box prediction, anchor boxes, IoU, and real-time detection systems.',
        keyTopics: ['Intersection over Union (IoU) & NMS', 'YOLO Architecture (Ultralytics)', 'Mean Average Precision (mAP) Evaluation', 'Custom Dataset Labeling (Roboflow)'],
        recommendedTools: ['Ultralytics YOLOv8/v11', 'Roboflow', 'Colab GPU'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 4,
        title: 'Semantic & Instance Segmentation',
        description: 'Predict pixel-level masks for nuanced scene understanding.',
        keyTopics: ['U-Net Architecture for Biomedical Segmentation', 'Mask R-CNN for Instance Segmentation', 'Segment Anything Model (SAM)', 'Dice Loss & Cross-Entropy'],
        recommendedTools: ['Meta SAM', 'PyTorch Segmentation Models'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 5,
        title: 'Vision Transformers (ViT) & Multi-Modal Models',
        description: 'Learn how self-attention applies to image patches and inspect vision-language models.',
        keyTopics: ['Patch Projection & Position Embeddings in ViT', 'CLIP (Contrastive Language-Image Pretraining)', 'Vision-Language Models (PaliGemma, LLaVA)', 'Zero-shot Classification'],
        recommendedTools: ['Hugging Face Transformers', 'OpenAI CLIP'],
        estimatedWeeks: '4 weeks'
      },
      {
        stageNumber: 6,
        title: 'Generative Models & Diffusion',
        description: 'Understand diffusion mechanics, denoising loops, and image synthesis.',
        keyTopics: ['Forward & Reverse Diffusion Processes', 'UNet & DiT (Diffusion Transformers)', 'ControlNet & conditioning mechanisms', 'LoRA for Image Styles'],
        recommendedTools: ['Diffusers Library', 'ComfyUI'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 7,
        title: 'Edge Deployment & Real-Time Optimization',
        description: 'Optimize vision models to run smoothly at 60+ FPS on edge hardware.',
        keyTopics: ['TensorRT & ONNX Runtime', 'Quantization for Embedded Hardware', 'Video Stream Processing (RTSP pipelines)', 'NVIDIA Jetson optimization'],
        recommendedTools: ['TensorRT', 'DeepStream', 'NVIDIA Jetson'],
        estimatedWeeks: '3 weeks'
      }
    ],
    projects: [
      {
        title: 'Real-Time PPE Detection System',
        difficulty: 'Beginner',
        description: 'Train a YOLO model to detect hard hats and safety vests from live webcam video, issuing alerts on safety violations.',
        skillsLearned: ['OpenCV', 'YOLO Training', 'Webcam Stream Handling', 'Annotation']
      },
      {
        title: 'Automated Satellite Land-Cover Segmentation',
        difficulty: 'Intermediate',
        description: 'Train a U-Net architecture in PyTorch to segment bodies of water, forests, and urban areas from satellite imagery.',
        skillsLearned: ['PyTorch', 'Semantic Segmentation', 'Albumentations', 'Dice Loss']
      },
      {
        title: 'Multimodal Visual QA & Zero-Shot Search',
        difficulty: 'Advanced',
        description: 'Build a photo library search engine that uses CLIP embeddings to search personal photos with natural language queries without pre-tagged keywords.',
        skillsLearned: ['CLIP Embeddings', 'Vector Search', 'Vision-Language Models', 'FastAPI']
      }
    ]
  },
  {
    id: 'ai-pm',
    title: 'AI Product Manager',
    shortDesc: 'Combine AI technology with product strategy, ethics, and user needs.',
    fullDesc: 'AI Product Managers bridge executive strategy, technical AI capabilities, and human user experience. They define product specifications for AI features, balance hallucination risks, orchestrate data flywheels, and ensure economic viability.',
    iconName: 'Layers',
    keySkills: ['Product Strategy & Roadmapping', 'Understanding AI Capabilities & Limitations', 'User Experience for Probabilistic Interfaces', 'Data Strategy & Flywheels', 'Metric Definition & ROI', 'Cross-Functional Leadership'],
    technologies: ['Figma', 'Product Analytics (Mixpanel / PostHog)', 'Linear / Jira', 'Prompt Engineering', 'Langfuse / Arize', 'SQL Basics'],
    personalityFit: [
      'Empathetic communicator who loves understanding customer pain points',
      'Comfortable with uncertainty, probabilistic outputs, and trade-offs',
      'Enjoys strategic prioritization and business model design',
      'Excited to translate complex deep learning concepts into plain user value'
    ],
    whatTheyDo: [
      'Define product vision and specifications for machine learning and generative features',
      'Establish acceptance criteria, quality guardrails, and acceptable error tolerance',
      'Design delightful UX patterns for non-deterministic, probabilistic AI behaviors',
      'Build business cases, calculate inference unit economics, and measure customer ROI',
      'Coordinate between engineering, data science, legal, marketing, and design teams'
    ],
    industryApplications: [
      'SaaS Workflow Automation Software',
      'Consumer Social & Content Generation Apps',
      'Fintech Automated Advisory & Underwriting',
      'Enterprise Collaboration Tools'
    ],
    careerProgression: [
      { title: 'Associate AI Product Manager', experience: '0–2 years', focus: 'Feature specs, prompt testing, user interview synthesis, sprint management' },
      { title: 'Senior AI Product Manager', experience: '3–5 years', focus: 'AI strategy for whole product verticals, unit economics, evaluation framework design' },
      { title: 'VP / Head of AI Product', experience: '6+ years', focus: 'Company-wide AI portfolio, data flywheel moats, partnership strategy' }
    ],
    skillsToDevelop: ['AI Mental Models & Limitations', 'UX Design for Probabilistic Systems', 'Unit Economics & Token Costing', 'Product Analytics & SQL', 'Evaluation Metrics', 'Executive Roadmapping'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Foundations of Modern AI for Products',
        description: 'Understand what AI can and cannot do: deterministic vs probabilistic software.',
        keyTopics: ['Machine Learning vs Deep Learning vs LLMs', 'Hallucinations, Latency & Failure Modes', 'Data Flywheels & Feedback Loops', 'The AI Stack: Compute, Models, Apps'],
        recommendedTools: ['Andrew Ng AI for Everyone', 'Prompting Playbooks'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 2,
        title: 'UX Design for Non-Deterministic AI',
        description: 'Design intuitive interfaces that manage user expectations when answers are imperfect.',
        keyTopics: ['Designing for Uncertainty & Disclaimers', 'Streaming UI & Skeleton Loading States', 'Feedback Mechanisms (Thumbs Up/Down, Edits)', 'User Control & Steerability'],
        recommendedTools: ['Figma', 'Design Systems for AI'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 3,
        title: 'Product Discovery & Opportunity Sizing',
        description: 'Validate if an AI feature is truly needed or if a simple heuristic is better.',
        keyTopics: ['Customer Problem Framing', 'AI Feasibility vs Impact Matrix', 'Competitive Landscape & Moat Analysis', 'Data Acquisition Feasibility'],
        recommendedTools: ['Miro', 'Customer Interview Frameworks'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 4,
        title: 'AI Economics & Cost Modeling',
        description: 'Calculate token pricing, margins, latency budgets, and cloud inference costs.',
        keyTopics: ['Input/Output Token Cost Modeling', 'Caching & Routing ROI', 'Margin Impact of LLM APIs', 'SLAs & Latency Tolerances'],
        recommendedTools: ['Spreadsheet Financial Models', 'Cloud Pricing Calculators'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 5,
        title: 'Metrics & Evaluation Frameworks',
        description: 'Define clear quantitative guardrails for launching and monitoring AI systems.',
        keyTopics: ['Task Success Rate & Completion Time', 'Human-in-the-Loop Agreement Scores', 'Toxicity & Safety Evals', 'A/B Testing AI Experiences'],
        recommendedTools: ['PostHog', 'Mixpanel', 'Eval Rubrics'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 6,
        title: 'Cross-Functional Roadmapping & Delivery',
        description: 'Run agile sprints with data scientists and engineers where R&D timelines are uncertain.',
        keyTopics: ['Spike vs Production Timelines in ML', 'PRDs (Product Requirement Documents) for AI', 'Release Phasing (Alpha, Closed Beta, GA)', 'Handling Model Deprecations'],
        recommendedTools: ['Linear', 'Notion', 'Jira'],
        estimatedWeeks: '3 weeks'
      }
    ],
    projects: [
      {
        title: 'Comprehensive AI PRD & Feature Spec',
        difficulty: 'Beginner',
        description: 'Author a complete Product Requirement Document for an AI-powered customer support summarizer, including error states and success metrics.',
        skillsLearned: ['PRD Writing', 'Failure Mode Analysis', 'Success Metric Definition']
      },
      {
        title: 'Figma Prototype for Non-Deterministic AI',
        difficulty: 'Intermediate',
        description: 'Design an interactive Figma prototype illustrating how a user edits, provides feedback, and recovers from incorrect AI generated output.',
        skillsLearned: ['UX Design for AI', 'Feedback Loops', 'Figma', 'Micro-copy']
      },
      {
        title: 'Unit Economics & Model Feasibility Deck',
        difficulty: 'Advanced',
        description: 'Build a financial and technical business case comparing API vs open-source fine-tuned model hosting for 100k daily active users.',
        skillsLearned: ['Token Cost Modeling', 'Architecture Trade-offs', 'Executive Presentation']
      }
    ]
  },
  {
    id: 'ai-entrepreneur',
    title: 'AI Entrepreneur',
    shortDesc: 'Use AI to create products, services, workflows, and high-growth businesses.',
    fullDesc: 'AI Entrepreneurs spot market opportunities created by algorithmic shifts and build sustainable, scalable ventures. They assemble rapid prototypes, establish defensible data advantages, identify customer willingness-to-pay, and scale customer acquisition.',
    iconName: 'Rocket',
    keySkills: ['Rapid Prototyping & MVPs', 'Customer Discovery & Sales', 'Business Modeling & Moat Strategy', 'Growth Marketing & Distribution', 'Fundraising & Bootstrapping', 'Pragmatic AI Tooling'],
    technologies: ['Next.js / React', 'Supabase / Firebase', 'Stripe', 'Gemini / Claude / OpenAI APIs', 'Vercel', 'Cursor / Lovable / Claude Code', 'Analytics'],
    personalityFit: [
      'High agency: takes initiative and drives projects to completion independently',
      'Comfortable with risk, experimentation, and pivoting when feedback arrives',
      'Obsessed with customer value, revenue generation, and market distribution',
      'Relentlessly resourceful and quick to leverage modern AI tools'
    ],
    whatTheyDo: [
      'Identify acute industry bottlenecks where AI reduces cost or unlocks new capability',
      'Ship rapid minimum viable products (MVPs) in days rather than months',
      'Conduct customer interviews and validate willingness-to-pay before scaling',
      'Build proprietary data loops and workflow moats that prevent commoditization',
      'Oversee sales, distribution, pricing, marketing, and investor relationships'
    ],
    industryApplications: [
      'Vertical AI SaaS (Legal, Construction, Real Estate, Dental)',
      'Autonomous Micro-Agencies & Workflow Automation Firms',
      'AI-Native Consumer Platforms & Entertainment',
      'Developer Tooling & Specialized Evaluation Benchmarks'
    ],
    careerProgression: [
      { title: 'Solo Hacker / Early Founder', experience: 'Day 0–1', focus: 'Building MVPs, direct user sales, finding first 10 paying customers' },
      { title: 'Seed-Stage Founder / CEO', experience: 'Year 1–2', focus: 'Product-market fit, hiring founding team, repeatable distribution engine' },
      { title: 'Growth-Stage Leader', experience: 'Year 3+', focus: 'Scaling operations, defensible enterprise moats, expanding product ecosystem' }
    ],
    skillsToDevelop: ['Rapid Prototyping (Full Stack + AI)', 'Customer Discovery & Interviewing', 'Sales & Pricing Strategy', 'Defensibility & Moat Building', 'Distribution & SEO / Viral Growth', 'Financial Runway Management'],
    roadmap: [
      {
        stageNumber: 1,
        title: 'Mindset & Opportunity Discovery',
        description: 'Learn to identify real human problems where AI provides an order-of-magnitude improvement.',
        keyTopics: ['The "Toothache" Problem Framework', 'Vertical vs Horizontal Market Opportunities', 'The "Mom Test" Customer Interviewing', 'Analyzing Legacy Industry Inefficiencies'],
        recommendedTools: ['The Mom Test Book', 'Twitter/X Tech Ecosystem', 'Y Combinator Library'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 2,
        title: 'Rapid Prototyping Stack',
        description: 'Build working web applications with authentication, databases, and AI in a weekend.',
        keyTopics: ['Modern Frontend (React / Tailwind)', 'Backend-as-a-Service (Supabase / Firebase)', 'AI API Orchestration (Streaming & Tools)', 'Hosting & Instant Deployment (Vercel)'],
        recommendedTools: ['Cursor / AI Code Editors', 'Vercel', 'Supabase'],
        estimatedWeeks: '3-4 weeks'
      },
      {
        stageNumber: 3,
        title: 'Monetization & Payment Integration',
        description: 'Integrate billing early: validate real value by charging actual money.',
        keyTopics: ['Stripe Checkout & Customer Portal', 'Usage-Based vs Subscription Pricing', 'Calculating Margins on AI Compute', 'Free Trials vs Freemium Strategies'],
        recommendedTools: ['Stripe', 'Paddle'],
        estimatedWeeks: '2 weeks'
      },
      {
        stageNumber: 4,
        title: 'Building Defensibility & Moats',
        description: 'Avoid being a mere "thin wrapper" by embedding deep workflows and proprietary data loops.',
        keyTopics: ['Workflow Lock-in & High Switching Costs', 'Proprietary Data Accumulation', 'System of Record vs Single-Feature Tool', 'Network Effects & Community Moats'],
        recommendedTools: ['7 Powers Strategy Framework', 'Case Studies'],
        estimatedWeeks: '2-3 weeks'
      },
      {
        stageNumber: 5,
        title: 'Distribution & Growth Engines',
        description: 'Build repeatable acquisition channels: SEO, cold outreach, viral content, and communities.',
        keyTopics: ['Programmatic SEO with AI', 'Cold Email & Outbound Prospecting', 'Building in Public on Social Channels', 'Affiliate & Referral Programs'],
        recommendedTools: ['PostHog', 'Ahrefs', 'Apollo.io'],
        estimatedWeeks: '3 weeks'
      },
      {
        stageNumber: 6,
        title: 'Fundraising, Bootstrapping & Scaling',
        description: 'Understand venture capital vs bootstrapping economics and scale company operations.',
        keyTopics: ['Bootstrapping to $10k MRR', 'Venture Capital & Safe Notes', 'Pitch Deck Storytelling', 'Hiring Founding Engineers & Sales'],
        recommendedTools: ['AngelList', 'SAFE Docs', 'Pitch Deck Builders'],
        estimatedWeeks: '3 weeks'
      }
    ],
    projects: [
      {
        title: 'Weekend AI Micro-SaaS MVP',
        difficulty: 'Beginner',
        description: 'Build and deploy a functional tool that solves one specific niche pain point (e.g. generating localized real estate listings), complete with Stripe checkout.',
        skillsLearned: ['Rapid Prototyping', 'Stripe Billing', 'AI APIs', 'Vercel Deployment']
      },
      {
        title: 'Customer Discovery & Validation Campaign',
        difficulty: 'Intermediate',
        description: 'Interview 15 industry professionals using "The Mom Test" framework, synthesize actionable pain points, and secure 3 pre-orders or letters of intent.',
        skillsLearned: ['Qualitative Research', 'Objection Handling', 'Value Proposition Design']
      },
      {
        title: 'Full-Funnel AI Product Launch',
        difficulty: 'Advanced',
        description: 'Launch an AI software product on Product Hunt and Twitter with a dedicated landing page, onboarding analytics, and a self-serve subscription funnel.',
        skillsLearned: ['Growth Marketing', 'Product Analytics', 'Conversion Rate Optimization', 'Customer Support']
      }
    ]
  }
];
