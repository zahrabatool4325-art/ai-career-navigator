import { AssessmentQuestion } from '../types';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    category: 'Core Interests',
    text: 'What type of problem do you enjoy solving most?',
    helperText: 'Think about what naturally captures your focus when you have free time to learn or build.',
    options: [
      {
        id: '1a',
        label: 'Building usable software, interactive web tools, and full-stack applications',
        description: 'Creating products that real users can test, touch, and get immediate value from.',
        scores: { 'ai-engineer': 30, 'ai-entrepreneur': 15, 'ml-engineer': 10 },
        strengths: ['Application Engineering', 'Practical Problem Solving']
      },
      {
        id: '1b',
        label: 'Finding hidden patterns, trends, and stories buried in large data sets',
        description: 'Exploring metrics, plotting charts, and discovering why trends happen.',
        scores: { 'data-scientist': 30, 'ml-engineer': 15 },
        strengths: ['Analytical Investigation', 'Data Intuition']
      },
      {
        id: '1c',
        label: 'Understanding how AI models learn and pushing mathematical boundaries',
        description: 'Reading academic papers, deriving loss formulas, and questioning foundational mechanisms.',
        scores: { 'ai-researcher': 30, 'ml-engineer': 15 },
        strengths: ['First-Principles Thinking', 'Theoretical Curiosity']
      },
      {
        id: '1d',
        label: 'Teaching machines to understand images, videos, 3D scenes, or autonomous movement',
        description: 'Working with cameras, pixel matrices, bounding boxes, and visual spatial reality.',
        scores: { 'cv-engineer': 30, 'ml-engineer': 10 },
        strengths: ['Spatial Reasoning', 'Visual Computing']
      },
      {
        id: '1e',
        label: 'Working with human language, dialogue, writing, and semantic reasoning',
        description: 'Making models interpret context, multilingual nuances, and generate coherent conversation.',
        scores: { 'nlp-engineer': 30, 'ai-engineer': 10 },
        strengths: ['Linguistic Nuance', 'Semantic Reasoning']
      },
      {
        id: '1f',
        label: 'Designing products that solve user frustrations and turn technology into real businesses',
        description: 'Prioritizing customer needs, strategic direction, and market opportunities.',
        scores: { 'ai-pm': 25, 'ai-entrepreneur': 25 },
        strengths: ['Strategic Vision', 'User Empathy']
      }
    ]
  },
  {
    id: 2,
    category: 'Coding Preference',
    text: 'How do you feel about writing code on a day-to-day basis?',
    helperText: 'Different AI careers have very different ratios of software engineering vs data analysis vs product strategy.',
    options: [
      {
        id: '2a',
        label: 'I love writing code and want software development to be my primary focus',
        description: 'Writing clean code, architecting microservices, debugging APIs, and deploying software.',
        scores: { 'ai-engineer': 25, 'ml-engineer': 25, 'nlp-engineer': 15, 'cv-engineer': 15 },
        strengths: ['Software Engineering', 'Code Craftsmanship']
      },
      {
        id: '2b',
        label: 'I enjoy writing code as a tool to inspect data, run simulations, or test models',
        description: 'Using code mainly in notebooks or scripts to run statistical experiments.',
        scores: { 'data-scientist': 25, 'ai-researcher': 20, 'nlp-engineer': 15, 'cv-engineer': 15 },
        strengths: ['Scientific Scripting', 'Experimental Mindset']
      },
      {
        id: '2c',
        label: 'I can code when needed (e.g. prototyping or scripts), but prefer focusing on strategy and users',
        description: 'Understanding the technical stack deeply without necessarily writing production code all day.',
        scores: { 'ai-pm': 30, 'ai-entrepreneur': 15 },
        strengths: ['Technical Translation', 'High-Level Architecture']
      },
      {
        id: '2d',
        label: 'I use modern AI coding tools to rapidly assemble products and ship as fast as possible',
        description: 'Practical builder mentality: leveraging modern tools to launch real projects with high speed.',
        scores: { 'ai-entrepreneur': 30, 'ai-engineer': 15, 'ai-pm': 10 },
        strengths: ['Rapid Prototyping', 'Resourcefulness']
      }
    ]
  },
  {
    id: 3,
    category: 'Mathematics Comfort',
    text: 'How do you feel about mathematics and formal statistics?',
    helperText: 'Be honest — you do not need a PhD in math to build impactful AI applications.',
    options: [
      {
        id: '3a',
        label: 'I really enjoy rigorous mathematics (linear algebra, calculus, probability proofs)',
        description: 'Excited by eigenvectors, gradient descents, loss landscapes, and formal derivations.',
        scores: { 'ai-researcher': 30, 'ml-engineer': 20, 'data-scientist': 15 },
        strengths: ['Mathematical Rigor', 'Quantitative Analysis']
      },
      {
        id: '3b',
        label: 'I am comfortable with applied math and statistics when solving real problems',
        description: 'Enjoy using hypothesis testing, regression equations, and probability to make decisions.',
        scores: { 'data-scientist': 25, 'ml-engineer': 20, 'cv-engineer': 15, 'nlp-engineer': 15 },
        strengths: ['Applied Statistics', 'Numerical Intuition']
      },
      {
        id: '3c',
        label: 'I can learn the necessary math concepts when a project requires it',
        description: 'Focus on intuitive geometric understanding rather than manual symbolic derivations.',
        scores: { 'ai-engineer': 25, 'cv-engineer': 15, 'nlp-engineer': 15 },
        strengths: ['Intuitive Learning', 'Adaptive Thinking']
      },
      {
        id: '3d',
        label: 'I prefer minimal math and want to focus on product utility, business logic, and UX',
        description: 'More drawn to user psychology, distribution, and practical software integration.',
        scores: { 'ai-pm': 30, 'ai-entrepreneur': 25 },
        strengths: ['Qualitative Judgment', 'User Centricity']
      }
    ]
  },
  {
    id: 4,
    category: 'Data & Analytics',
    text: 'How do you react when handed a messy, unstructured dataset?',
    helperText: 'Real-world data is rarely neat and tidy.',
    options: [
      {
        id: '4a',
        label: 'I am eager to dive in, clean the anomalies, run SQL queries, and uncover stories',
        description: 'Investigating missing values, generating correlations, and finding actionable patterns.',
        scores: { 'data-scientist': 30, 'ml-engineer': 15 },
        strengths: ['Data Wrangling', 'Pattern Recognition']
      },
      {
        id: '4b',
        label: 'I want to build an automated ingestion pipeline that transforms and validates it continuously',
        description: 'Designing reliable automated data ETLs, feature stores, and validation tests.',
        scores: { 'ml-engineer': 25, 'ai-engineer': 20 },
        strengths: ['Pipeline Engineering', 'Data Systems Architecture']
      },
      {
        id: '4c',
        label: 'I look at whether the data contains natural language, documents, or dialogue to process',
        description: 'Transforming text into embeddings, token clusters, and linguistic knowledge bases.',
        scores: { 'nlp-engineer': 30, 'ai-engineer': 15 },
        strengths: ['Text Normalization', 'Semantic Mining']
      },
      {
        id: '4d',
        label: 'I care most about what the data tells us about customer behavior and business decisions',
        description: 'Focusing on retention metrics, customer conversion drop-offs, and strategic prioritization.',
        scores: { 'ai-pm': 25, 'ai-entrepreneur': 25, 'data-scientist': 10 },
        strengths: ['Business Intelligence', 'Customer Analytics']
      }
    ]
  },
  {
    id: 5,
    category: 'Creativity & Building',
    text: 'What kind of project would you be most proud to show your peers?',
    helperText: 'Your dream portfolio piece reveals what truly motivates you.',
    options: [
      {
        id: '5a',
        label: 'A full-stack AI web app that thousands of students use to study or create every day',
        description: 'A polished, responsive application with real-time AI generation, streaming, and login.',
        scores: { 'ai-engineer': 30, 'ai-entrepreneur': 15 },
        strengths: ['Product Execution', 'User-Facing Design']
      },
      {
        id: '5b',
        label: 'A high-performance machine learning model trained to beat existing industry benchmarks',
        description: 'An optimized model with exceptional accuracy, low latency, and efficient inference.',
        scores: { 'ml-engineer': 30, 'ai-researcher': 15 },
        strengths: ['Algorithmic Optimization', 'Performance Benchmarking']
      },
      {
        id: '5c',
        label: 'An interactive analytical dashboard that changes a company leadership decision',
        description: 'Compelling charts, A/B test analysis, and statistical evidence that solved a mystery.',
        scores: { 'data-scientist': 30, 'ai-pm': 15 },
        strengths: ['Data Storytelling', 'Impactful Communication']
      },
      {
        id: '5d',
        label: 'A computer vision system that tracks objects or reconstructs 3D spaces in real time',
        description: 'Detecting faces, analyzing video feeds, or generating spatial visual outputs.',
        scores: { 'cv-engineer': 30 },
        strengths: ['Visual Computing', 'Real-Time Perception']
      },
      {
        id: '5e',
        label: 'A peer-reviewed scientific paper introducing an innovative neural network technique',
        description: 'A publication with novel mathematical formulations and rigorous experimental proofs.',
        scores: { 'ai-researcher': 30 },
        strengths: ['Academic Rigor', 'Innovative Research']
      },
      {
        id: '5f',
        label: 'An AI startup that generated its first $1,000 in revenue from paying customers',
        description: 'A real commercial product with pricing, customer validation, and market traction.',
        scores: { 'ai-entrepreneur': 30, 'ai-pm': 15 },
        strengths: ['Commercial Acumen', 'High Agency']
      }
    ]
  },
  {
    id: 6,
    category: 'Research & Curiosity',
    text: 'How do you prefer to learn about new AI developments?',
    helperText: 'AI changes weekly. Which format feels most energizing?',
    options: [
      {
        id: '6a',
        label: 'Building mini-projects, testing code samples on GitHub, and reading API documentation',
        description: 'Hands-on experimentation by cloning repositories and playing with live code.',
        scores: { 'ai-engineer': 25, 'ai-entrepreneur': 20 },
        strengths: ['Pragmatic Implementation', 'Hands-on Learning']
      },
      {
        id: '6b',
        label: 'Reading academic ArXiv papers and inspecting model architecture diagrams',
        description: 'Understanding self-attention mechanisms, loss formulations, and ablation tables.',
        scores: { 'ai-researcher': 30, 'ml-engineer': 15, 'nlp-engineer': 10 },
        strengths: ['Literature Review', 'Theoretical Comprehension']
      },
      {
        id: '6c',
        label: 'Inspecting benchmarks, profiling GPU compute metrics, and testing inference speed',
        description: 'Testing tokens-per-second, memory footprint, quantization degradation, and throughput.',
        scores: { 'ml-engineer': 25, 'cv-engineer': 15 },
        strengths: ['Hardware Awareness', 'Performance Profiling']
      },
      {
        id: '6d',
        label: 'Analyzing market trends, product launches, customer feedback, and case studies',
        description: 'Evaluating how products win, pricing models, and which features actually retain users.',
        scores: { 'ai-pm': 30, 'ai-entrepreneur': 25 },
        strengths: ['Market Analysis', 'Competitive Strategy']
      }
    ]
  },
  {
    id: 7,
    category: 'Problem-Solving Style',
    text: 'When faced with a bug or roadblock, what is your natural reaction?',
    helperText: 'Your diagnostic reflex highlights your cognitive strengths.',
    options: [
      {
        id: '7a',
        label: 'Inspect log traces, verify network payloads, check API keys, and test inputs systematically',
        description: 'Pragmatic full-stack debugging and isolation of failure points.',
        scores: { 'ai-engineer': 25, 'ml-engineer': 15 },
        strengths: ['Systematic Debugging', 'Diagnostic Troubleshooting']
      },
      {
        id: '7b',
        label: 'Inspect data distributions, check for label noise, and plot histograms to find anomalies',
        description: 'Examining whether underlying data assumptions were violated.',
        scores: { 'data-scientist': 25, 'ml-engineer': 20 },
        strengths: ['Data Integrity Auditing', 'Statistical Diagnostics']
      },
      {
        id: '7c',
        label: 'Re-derive equations, inspect gradient flows, and run controlled ablation experiments',
        description: 'Isolating whether the theoretical formulation or optimization parameters are flawed.',
        scores: { 'ai-researcher': 30, 'ml-engineer': 15 },
        strengths: ['Root-Cause Analysis', 'Scientific Method']
      },
      {
        id: '7d',
        label: 'Inspect visual bounding boxes, pixel normalizations, and image channel artifacts',
        description: 'Examining why a vision model misclassified a visual patch or frame.',
        scores: { 'cv-engineer': 30 },
        strengths: ['Visual Diagnostics', 'Spatial Debugging']
      },
      {
        id: '7e',
        label: 'Talk to users, re-evaluate user journeys, and question whether we are building the right thing',
        description: 'Questioning core product assumptions and aligning feature scope with reality.',
        scores: { 'ai-pm': 25, 'ai-entrepreneur': 25 },
        strengths: ['User Feedback Synthesis', 'Strategic Scoping']
      }
    ]
  },
  {
    id: 8,
    category: 'Business & Team Impact',
    text: 'How do you view the relationship between AI technology and business?',
    helperText: 'Every AI system ultimately serves a human or organizational purpose.',
    options: [
      {
        id: '8a',
        label: 'Technology is best when packaged into reliable software tools that streamline workflows',
        description: 'Focusing on building dependable systems that save people hours of manual effort.',
        scores: { 'ai-engineer': 25, 'nlp-engineer': 15 },
        strengths: ['Workflow Automation', 'Software Utility']
      },
      {
        id: '8b',
        label: 'Data and statistical models should directly guide major revenue and operational decisions',
        description: 'Ensuring executives rely on empirical evidence rather than gut feelings.',
        scores: { 'data-scientist': 25, 'ai-pm': 15 },
        strengths: ['Evidence-Based Decision Making', 'Business Translation']
      },
      {
        id: '8c',
        label: 'Scientific breakthroughs create future trillion-dollar industries that do not exist yet',
        description: 'Focusing on long-term foundational advances that unlock completely new paradigms.',
        scores: { 'ai-researcher': 25, 'ai-entrepreneur': 15 },
        strengths: ['Long-Range Vision', 'Paradigm Shift Thinking']
      },
      {
        id: '8d',
        label: 'The most important thing is finding a paying customer and product-market fit rapidly',
        description: 'Technology is a lever to build sustainable revenue, customer delight, and businesses.',
        scores: { 'ai-entrepreneur': 30, 'ai-pm': 20 },
        strengths: ['Commercial Orientation', 'Customer Focus']
      }
    ]
  },
  {
    id: 9,
    category: 'Working Environment',
    text: 'Which working environment sounds most energizing to you?',
    helperText: 'Your environment preferences help match you with roles where you will flourish.',
    options: [
      {
        id: '9a',
        label: 'A fast-paced engineering team building features and shipping regular releases',
        description: 'Collaborating with software developers, designers, and reviewing pull requests.',
        scores: { 'ai-engineer': 25, 'ml-engineer': 20 },
        strengths: ['Agile Collaboration', 'Team Engineering']
      },
      {
        id: '9b',
        label: 'An analytics or consulting team working across multiple business units',
        description: 'Tackling different high-impact data questions each month with diverse stakeholders.',
        scores: { 'data-scientist': 25, 'ai-pm': 15 },
        strengths: ['Cross-Functional Engagement', 'Versatility']
      },
      {
        id: '9c',
        label: 'An exploratory research laboratory or academic team pursuing open-ended questions',
        description: 'Deep uninterrupted focus on novel problems with freedom to explore hypotheses.',
        scores: { 'ai-researcher': 30 },
        strengths: ['Deep Intellectual Focus', 'Autonomy']
      },
      {
        id: '9d',
        label: 'A startup or entrepreneurial studio where you wear multiple hats and move fast',
        description: 'High autonomy, creating products from scratch, talking to users, and setting your own agenda.',
        scores: { 'ai-entrepreneur': 30, 'ai-pm': 20 },
        strengths: ['High Independence', 'Generalist Versatility']
      }
    ]
  },
  {
    id: 10,
    category: 'Career Vision',
    text: 'Where do you see yourself making the greatest impact over the next 3 to 5 years?',
    helperText: 'Think about your proudest long-term aspiration.',
    options: [
      {
        id: '10a',
        label: 'As a go-to engineer building intelligent production systems and autonomous workflows',
        description: 'Mastering modern AI stacks, RAG, tool calling, and high-reliability systems.',
        scores: { 'ai-engineer': 30, 'ml-engineer': 15 },
        strengths: ['Technical Mastery', 'Production Systems Leadership']
      },
      {
        id: '10b',
        label: 'As a specialist deploying high-scale machine learning models and MLOps platforms',
        description: 'Leading model serving, distributed training, and production reliability.',
        scores: { 'ml-engineer': 30 },
        strengths: ['Infrastructure Leadership', 'High-Scale Engineering']
      },
      {
        id: '10c',
        label: 'As a trusted data advisor uncovering critical insights for major organizations',
        description: 'Guiding executive strategy through rigorous predictive modeling and analysis.',
        scores: { 'data-scientist': 30 },
        strengths: ['Strategic Data Leadership', 'Insight Delivery']
      },
      {
        id: '10d',
        label: 'As an AI scientist publishing breakthrough research and pushing machine intelligence',
        description: 'Contributing fundamental papers that shape the trajectory of artificial intelligence.',
        scores: { 'ai-researcher': 30 },
        strengths: ['Scientific Pioneer', 'Foundational Innovation']
      },
      {
        id: '10e',
        label: 'As a specialist in vision or language systems powering robotics or communication',
        description: 'Excelling in multimodal perception, computer vision, or computational linguistics.',
        scores: { 'cv-engineer': 20, 'nlp-engineer': 20 },
        strengths: ['Domain Specialization', 'Multimodal Perception']
      },
      {
        id: '10f',
        label: 'As a founder or product executive who brought game-changing AI products to market',
        description: 'Leading product roadmaps or building a profitable AI company that employs others.',
        scores: { 'ai-entrepreneur': 25, 'ai-pm': 25 },
        strengths: ['Entrepreneurial Leadership', 'Market Creation']
      }
    ]
  }
];
