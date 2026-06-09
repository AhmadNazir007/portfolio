import { Experience, Project, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/AhmadNazir007",
  linkedin: "https://www.linkedin.com/in/ahmadnazirofficial/",
  email: "ahmadnazir866@gmail.com",
  phone: "+92 3067199507"
};

export const SKILLS: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: ["LLMs (GPT-4, Llama-2, Mistral)", "RAG", "Workflow Automation (n8n)",
      "AI Automation & Orchestration (n8n + APIs)", "Computer Vision (YOLO, U-Net)", "NLP (BERT, Transformers)", "LangChain", "LlamaIndex", "HuggingFace", "PyTorch", "TensorFlow"]
  },
  {
    name: "Backend & MLOps",
    skills: ["Python", "FastAPI", "Django", "Docker", "AWS (EC2, S3, SageMaker)", "Pinecone", "Supabase", "Redis", "Celery", "CI/CD"]
  },
  {
    name: "Data & Tools",
    skills: ["PostgreSQL", "MongoDB", "Git", "Seaborn", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "solgenci",
    company: "Visionerds",
    role: "AI Full Stack Engineer",
    period: "January 2025 - Present",
    description: [
      "Specializing in developing advanced, scalable AI-driven solutions using OpenAI, LangChain, and RAG pipelines.",
      "Developed an interpretable ML model using Scikit-learn, CatBoost, Lifelines, FBProphet, FAISS, and SHAP, ensuring it meets business monotonicity constraints.",
      "Optimized performance for LLM-based applications, ensuring high throughput and low latency.",
      "Drove best DevOps and MLOps practices for reliable ETL, feature generation, model training, and inference."
    ],
    tech: ["OpenAI", "LangChain", "FastAPI", "AWS", "RAG", "Azure", "Docker", "Git", "Python", "FastAPI", "Django", "Docker", "AWS (EC2, S3, SageMaker)", "Pinecone", "Supabase", "Redis", "Celery", "CI/CD"]
  },
  {
    id: "senarios",
    company: "Visionerds",
    role: "Full Stack Developer",
    period: "January 2024 - December 2024",
    description: [
      "Frontend / Full-Stack Developer with experience in building scalable and responsive web applications using React.js, Next.js, and Tailwind CSS.",
      "Developed production-ready projects with a focus on performance, SEO optimization, and modern JavaScript (ES6+).",
      "Collaborated with designers, product managers, and backend teams to deliver high-quality user interfaces.",
      "Also contributed on the backend using NestJS to build RESTful APIs, authentication systems, and integrate frontend with backend services."
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "NestJS", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Git", "Seaborn", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
  },
  // {
  //   id: "ml1",
  //   company: "Machine Learning 1",
  //   role: "Junior Data Scientist",
  //   period: "2019 - 2021",
  //   description: [
  //     "Led the development of a customer support Voicebot reducing latency to 3-4 seconds.",
  //     "Worked on Text-to-Image models (Stable Diffusion) for website design automation.",
  //     "Built Document Understanding Transformers for automated invoice processing."
  //   ],
  //   tech: ["Voice AI", "Stable Diffusion", "OCR", "Twilio"]
  // }
];

export const PROJECTS: Project[] = [
  {
    id: "creditbpo-ai",
    title: "CreditBPO AI/ML Backend",
    role: "AI Backend Engineer",
    shortDescription: "AI-powered document extraction and financial data analysis microservice.",
    fullDescription: "Built a production-ready FastAPI microservice for intelligent document processing and financial data extraction. The platform leverages Google Gemini AI for document understanding, Azure Blob Storage for file management, and MongoDB for persistent storage.",
    tags: ["AI", "Document Processing", "Financial Analysis", "FastAPI"],
    techStack: ["Python", "FastAPI", "Google Gemini", "MongoDB", "Azure Blob Storage", "Docker"],
    features: [
      "AI-powered document extraction and classification.",
      "Financial data analysis and summarization.",
      "Azure Blob Storage integration for file management.",
      "RESTful API architecture with scalable deployment."
    ],
    challenges: [
      "Handling diverse document formats and layouts.",
      "Maintaining extraction accuracy across financial documents.",
      "Optimizing AI inference costs and response times."
    ],
    results: [
      "Automated document processing workflows.",
      "Reduced manual data entry efforts significantly.",
      "Production-ready scalable microservice architecture."
    ],
    imageUrl: "/creditbpo_project.png"
  },
  {
    id: "caremate",
    title: "CareMate - NDIS Support Coordinator Assistant",
    role: "AI Engineer",
    shortDescription: "AI-powered NDIS report generation platform for support coordinators.",
    fullDescription: "Developed an AI-driven platform that helps NDIS Support Coordinators generate compliant reports quickly using OCR, Gemini AI, and document automation workflows.",
    tags: ["Healthcare", "AI", "OCR", "Document Generation"],
    techStack: ["Python", "FastAPI", "Streamlit", "Google Gemini", "OCR", "Uvicorn"],
    features: [
      "Automated Change of Circumstance reports.",
      "Progress and Support Plan generation.",
      "OCR-based document extraction.",
      "NDIS-compliant reporting templates."
    ],
    challenges: [
      "Maintaining compliance with NDIS reporting standards.",
      "Extracting information from scanned documents.",
      "Generating structured professional reports."
    ],
    results: [
      "Reduced report preparation time by over 80%.",
      "Improved report consistency and compliance.",
      "Enabled coordinators to focus on client outcomes."
    ],
    imageUrl: "/caremate_project.png"
  },
  {
    id: "parth-operation",
    title: "PARTH Operation Management System",
    role: "Full Stack Engineer",
    shortDescription: "Internal order lifecycle management platform replacing manual Excel workflows.",
    fullDescription: "Designed and developed a centralized order management platform that digitizes the complete customer order lifecycle, including order placement, vendor coordination, invoicing, payments, and tracking.",
    tags: ["ERP", "Operations", "Automation", "Business Platform"],
    techStack: ["React", "Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    features: [
      "End-to-end order lifecycle management.",
      "Vendor coordination and workflow tracking.",
      "Invoice and payment management.",
      "Real-time order visibility dashboard."
    ],
    challenges: [
      "Migrating manual Excel-based processes.",
      "Ensuring accurate order tracking.",
      "Building scalable workflow automation."
    ],
    results: [
      "Improved operational efficiency significantly.",
      "Centralized business operations data.",
      "Reduced manual errors and delays."
    ],
    imageUrl: "/parth_project.png"
  },
  {
    id: "maya-beauty-bag",
    title: "Maya Beauty Bag AI",
    role: "AI Full Stack Engineer",
    shortDescription: "AI-powered beauty recommendation and skincare assistant.",
    fullDescription: "Built an intelligent beauty assistant that provides personalized skincare recommendations, skin analysis, and customized beauty routines using AI and LLM technologies.",
    tags: ["AI Assistant", "Beauty Tech", "LLM", "Recommendations"],
    techStack: ["Python", "FastAPI", "OpenAI", "LangChain", "Deepgram", "Streamlit"],
    features: [
      "Personalized beauty product recommendations.",
      "AI-powered skin analysis.",
      "Voice and chat-based interactions.",
      "Beauty routine optimization."
    ],
    challenges: [
      "Creating accurate recommendation logic.",
      "Handling conversational memory.",
      "Integrating voice and text AI experiences."
    ],
    results: [
      "Improved customer engagement through AI conversations.",
      "Delivered personalized beauty experiences.",
      "Scalable AI assistant architecture."
    ],
    imageUrl: "/maya_beauty_chatbot.png"
  },
  {
    id: "florida-arbitration",
    title: "Florida Arbitration Assistant",
    role: "AI Engineer",
    shortDescription: "Legal AI assistant for generating arbitration-ready complaints.",
    fullDescription: "Developed an AI-powered legal assistant that generates structured arbitration complaints under FDCPA, FCCPA, and FCRA regulations using RAG and legal document generation workflows.",
    tags: ["LegalTech", "RAG", "AI Assistant", "Document Generation"],
    techStack: ["Python", "FastAPI", "OpenAI", "LangChain", "RAG", "PostgreSQL"],
    features: [
      "Automated arbitration complaint drafting.",
      "Legal document retrieval and grounding.",
      "Structured complaint generation.",
      "PDF export and document assembly."
    ],
    challenges: [
      "Maintaining legal formatting consistency.",
      "Reducing hallucinations in legal content.",
      "Handling large legal document datasets."
    ],
    results: [
      "Accelerated complaint generation workflows.",
      "Improved legal drafting consistency.",
      "Reduced manual preparation effort significantly."
    ],
    imageUrl: "/florida_arbitraction_compilant.png"
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    role: "Full Stack Developer",
    shortDescription: "Modern social media platform inspired by Twitter/X.",
    fullDescription: "Built a full-featured Twitter clone with responsive UI, real-time updates, authentication, tweet management, and social interaction capabilities.",
    tags: ["Social Media", "Full Stack", "Real-Time"],
    techStack: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO"],
    features: [
      "Tweet creation and management.",
      "Following and follower system.",
      "Real-time notifications and updates.",
      "Responsive modern UI."
    ],
    challenges: [
      "Implementing scalable real-time communication.",
      "Managing social graph relationships.",
      "Optimizing feed performance."
    ],
    results: [
      "Production-quality social media experience.",
      "Modern responsive design.",
      "Real-time user engagement features."
    ],
    imageUrl: "/twitterclone.png"
  },
  {
    id: "charitag",
    title: "Charitag - Charity Marketplace",
    role: "Frontend Developer",
    shortDescription: "Marketplace platform connecting charities and donors.",
    fullDescription: "Developed a charity marketplace platform enabling charitable organizations to connect with donors through a secure and transparent donation ecosystem.",
    tags: ["Marketplace", "FinTech", "Charity", "Frontend"],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Organization and donor profiles.",
      "Donation tracking and reporting.",
      "Responsive user experience.",
      "Secure donation workflows."
    ],
    challenges: [
      "Creating trust-focused user experiences.",
      "Managing donation workflow complexity.",
      "Optimizing platform usability."
    ],
    results: [
      "Improved donor engagement.",
      "Streamlined donation management.",
      "Professional and accessible UI."
    ],
    imageUrl: "/charitag.png"
  }
];
