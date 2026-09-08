const portfolioData = {
  personal: {
    name: "Akula Sujan",
    title: "AI Engineer & Full-Stack Developer",
    email: "sujanphani964@gmail.com",
    phone: "+91-8121223075",
    location: "Vadlamudi, India",
    github: "https://github.com/Sujan833",
    linkedin: "https://linkedin.com/",
    codolio: "https://codolio.com/profile/iaVcueXaR",
    summary: "Engineer with hands-on experience building full-stack, GenAI, RAG, AI-agent, and cybersecurity applications using Python, Java, JavaScript, FastAPI, MCP, LangChain, and MERN, with experience in backend APIs and automation."
  },
  
  stats: [
    { label: "Problems Solved", value: "600+", icon: "code-2", sub: "LeetCode, CodeChef, GFG, HackerRank" },
    { label: "Active Practice", value: "100+ Days", icon: "calendar", sub: "Algorithmic Problem Solving" },
    { label: "B.Tech CGPA", value: "8.1", icon: "graduation-cap", sub: "Vignan's Lara Institute" },
    { label: "Class XII Score", value: "91.2%", icon: "percent", sub: "NRI Junior College" },
    { label: "Class X CGPA", value: "10.0", icon: "award", sub: "Viveka High School" }
  ],

  codingPlatforms: {
    codolioProfile: "https://codolio.com/profile/iaVcueXaR",
    handle: "@iaVcueXaR",
    totalSolved: "600+",
    activeDays: "100+ Days",
    summaryText: "Solves algorithmic challenges across LeetCode, CodeChef, GeeksforGeeks, and HackerRank. Actively practices multi-platform problem solving.",
    platforms: [
      { name: "LeetCode", desc: "Data Structures & Algorithmic Problem Solving", badge: "LeetCode", url: "https://codolio.com/profile/iaVcueXaR" },
      { name: "CodeChef", desc: "Competitive Programming & Problem Solving", badge: "CodeChef", url: "https://codolio.com/profile/iaVcueXaR" },
      { name: "HackerRank", desc: "Core Problem Solving & Fundamentals", badge: "HackerRank", url: "https://codolio.com/profile/iaVcueXaR" },
      { name: "GeeksforGeeks", desc: "Data Structures & Algorithm Practice", badge: "GFG", url: "https://codolio.com/profile/iaVcueXaR" }
    ]
  },

  internships: [
    {
      role: "AI Engineer Intern",
      company: "IIT Hyderabad",
      period: "May 2026 – July 2026",
      location: "Hyderabad, India",
      badge: "AI & RAG",
      highlights: [
        "Built a Multimodal Self-Healing RAG assistant using OCR, FAISS, BM25, and reranking for grounded retrieval from legal, compliance, and scanned documents.",
        "Designed secure document processing workflows with grounded answer generation, metadata filtering, and semantic search to support regulatory compliance, security policy analysis."
      ],
      tags: ["Python", "Multimodal RAG", "FAISS", "BM25", "OCR", "Reranking", "Semantic Search"]
    },
    {
      role: "Generative AI Engineer Intern",
      company: "SmartBridge | IBM Cloud",
      period: "May 2025 – July 2025",
      location: "Remote / Hybrid",
      badge: "GenAI",
      highlights: [
        "Developed a HealthAI: Intelligent Healthcare Assistant using IBM Granite, enabling real-time disease prediction, patient chat, and treatment planning.",
        "Integrated IBM Watson Machine Learning APIs to deliver AI-driven medical recommendations with personalized insights and data-backed decision support with reduced latency by 30%."
      ],
      tags: ["IBM Granite", "IBM Watson ML", "Python", "Generative AI", "Healthcare"]
    },
    {
      role: "Web Development Engineer Intern",
      company: "EY Global Delivery Services | AICTE",
      period: "Jan 2025 – Mar 2025",
      location: "Remote",
      badge: "MERN Stack",
      highlights: [
        "Engineered full-stack MERN applications including a recipe-sharing platform (FOODIEE) and a financial Expense Tracker, optimizing state management and database query efficiency."
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "MERN Stack"]
    }
  ],

  experience: [
    {
      role: "AI Evaluator & Aether Generalist",
      company: "Outlier",
      period: "2025",
      type: "Remote Freelance Work",
      highlights: [
        "Evaluated state-of-the-art Large Language Model (LLM) responses for factual accuracy, logical reasoning, instruction following, and response safety.",
        "Verified and annotated multimodal model outputs including detailed voice/audio transcriptions, image analysis, and visual reasoning data to support AI model alignment and instruction tuning."
      ]
    },
    {
      role: "AI Data Annotator",
      company: "Atlas Capture",
      period: "2025",
      type: "Remote Freelance Work",
      highlights: [
        "Labeled and annotated complex multi-modal image and video datasets according to strict project specifications to ensure high-precision data quality for training computer vision and multimodal AI models."
      ]
    }
  ],

  projects: [
    {
      id: "soc-agent",
      title: "AI Cybersecurity SOC Agent using MCP",
      subtitle: "Python | FastMCP | FastAPI | Security APIs",
      category: "security",
      featured: true,
      tech: ["Python", "FastMCP", "FastAPI", "Security APIs", "AbuseIPDB", "VirusTotal", "NVD"],
      metrics: "6 Security Tools • Automated Threat Analysis • JSON Evidence Triage",
      description: "Architected an NLP-based AI SOC Analyst using FastAPI and FastMCP to orchestrate 6 security intelligence tools (AbuseIPDB, VirusTotal, NVD) for automated threat analysis.",
      highlights: [
        "Architected an NLP-based AI SOC Analyst using FastAPI and FastMCP to orchestrate 6 security intelligence tools (AbuseIPDB, VirusTotal, NVD) for automated threat analysis.",
        "Built an LLM orchestration engine to collect JSON evidence and generate automated SOC incident reports."
      ],
      githubUrl: "https://github.com/Sujan833",
      liveUrl: "https://nlp-driven-cyber-threat-intelligence.onrender.com/"
    },
    {
      id: "personal-rag-bot",
      title: "Personal RAG Bot & Knowledge Base",
      subtitle: "Python | LangChain | FAISS | HuggingFace | Vector Search",
      category: "genai",
      featured: true,
      tech: ["Python", "LangChain", "FAISS", "HuggingFace", "RAG", "Vector Search"],
      metrics: "Grounded Document Q&A • Custom Embeddings • Semantic Search",
      description: "Built a Personal RAG Bot using LangChain, FAISS vector embeddings, and Hugging Face models for grounded conversational Q&A and semantic document search.",
      highlights: [
        "Built a Personal RAG Bot using LangChain, FAISS vector embeddings, and Hugging Face models for grounded conversational Q&A and semantic document search.",
        "Implemented custom document ingestion pipelines, chunking strategies, and semantic similarity search."
      ],
      githubUrl: "https://github.com/Sujan833",
      liveUrl: null
    },
    {
      id: "fullstack-builder",
      title: "Automated Full-Stack Application Builder",
      subtitle: "FastAPI | Gemini APIs | LangChain | Render | GitHub",
      category: "genai",
      featured: true,
      tech: ["FastAPI", "Gemini APIs", "LangChain", "Render", "GitHub"],
      metrics: "70% Development Effort Reduction • Natural Language Prompts",
      description: "Built an AI-powered full-stack website builder that generates frontend, backend, database, and API integrations from natural language requirements, reducing development effort by 70% through automation.",
      highlights: [
        "Built an AI-powered full-stack website builder that generates frontend, backend, database, and API integrations from natural language requirements, reducing development effort by 70% through automation.",
        "Designed for dynamic feature updates and automated deployment in full-stack applications."
      ],
      githubUrl: "https://github.com/Sujan833",
      liveUrl: null
    },
    {
      id: "multimodal-rag",
      title: "Multimodal Self-Healing RAG Assistant",
      subtitle: "IIT Hyderabad | OCR, FAISS, BM25 & Reranking",
      category: "genai",
      featured: true,
      tech: ["Python", "FAISS", "BM25", "OCR", "Reranking", "Semantic Search"],
      metrics: "Grounded Retrieval • Scanned PDF OCR • Legal & Compliance",
      description: "Built a Multimodal Self-Healing RAG assistant using OCR, FAISS, BM25, and reranking for grounded retrieval from legal, compliance, and scanned documents.",
      highlights: [
        "Built a Multimodal Self-Healing RAG assistant using OCR, FAISS, BM25, and reranking for grounded retrieval from legal, compliance, and scanned documents.",
        "Designed secure document processing workflows with grounded answer generation, metadata filtering, and semantic search to support regulatory compliance, security policy analysis."
      ],
      githubUrl: "https://github.com/Sujan833",
      liveUrl: null
    },
    {
      id: "health-ai",
      title: "HealthAI: Intelligent Healthcare Assistant",
      subtitle: "SmartBridge | IBM Cloud | IBM Granite & Watson ML",
      category: "genai",
      featured: false,
      tech: ["IBM Granite", "IBM Watson ML", "Python", "Healthcare"],
      metrics: "30% Latency Reduction • Disease Prediction • Clinical Chat",
      description: "Developed a HealthAI: Intelligent Healthcare Assistant using IBM Granite, enabling real-time disease prediction, patient chat, and treatment planning.",
      highlights: [
        "Developed a HealthAI: Intelligent Healthcare Assistant using IBM Granite, enabling real-time disease prediction, patient chat, and treatment planning.",
        "Integrated IBM Watson Machine Learning APIs to deliver AI-driven medical recommendations with personalized insights and data-backed decision support with reduced latency by 30%."
      ],
      githubUrl: "https://github.com/Sujan833",
      liveUrl: "https://health-assistant379.streamlit.app/"
    },
    {
      id: "foodiee",
      title: "FOODIEE - Recipe Sharing Platform",
      subtitle: "EY Global Delivery Services | Full-Stack MERN",
      category: "fullstack",
      featured: false,
      tech: ["React", "Node.js", "Express", "MongoDB", "MERN Stack"],
      metrics: "Full MERN Stack • Optimized Queries • Recipe Community",
      description: "Engineered full-stack MERN recipe-sharing platform (FOODIEE), optimizing state management and database query efficiency.",
      highlights: [
        "Engineered full-stack MERN applications including a recipe-sharing platform (FOODIEE) and a financial Expense Tracker, optimizing state management and database query efficiency."
      ],
      githubUrl: "https://github.com/Sujan833",
      liveUrl: "https://foodiee-1.onrender.com/"
    },
    {
      id: "expense-tracker",
      title: "Financial Expense Tracker",
      subtitle: "EY Global Delivery Services | Full-Stack MERN",
      category: "fullstack",
      featured: false,
      tech: ["React", "Node.js", "Express", "MongoDB", "MERN Stack"],
      metrics: "Financial Analytics • Expense Insights • Real-Time Data",
      description: "Engineered financial Expense Tracker application using the MERN stack, optimizing state management and database query efficiency.",
      highlights: [
        "Engineered full-stack MERN applications including a recipe-sharing platform (FOODIEE) and a financial Expense Tracker, optimizing state management and database query efficiency."
      ],
      githubUrl: "https://github.com/Sujan833",
      liveUrl: null
    }
  ],

  technicalSkills: {
    languages: "Python, Java, JavaScript, SQL, HTML/CSS.",
    areasOfInterest: "Generative AI, LLMs, AI Agents, AI Security & Cybersecurity, Full-Stack Development.",
    relevantCoursework: "DBMS, Operating Systems & Security, Data Structures & Algorithms, OOP.",
    toolsAndPlatforms: "Model Context Protocol (MCP), FastMCP, RAG, LangChain, FastAPI, MongoDB, GitHub."
  },

  skills: [
    { name: "Python", category: "languages", level: 95, icon: "file-code" },
    { name: "Java", category: "languages", level: 90, icon: "coffee" },
    { name: "JavaScript", category: "languages", level: 92, icon: "terminal" },
    { name: "SQL", category: "languages", level: 88, icon: "database" },
    { name: "HTML/CSS", category: "languages", level: 95, icon: "layout" },
    
    { name: "Generative AI & LLMs", category: "ai", level: 96, icon: "sparkles" },
    { name: "AI Agents (MCP / FastMCP)", category: "ai", level: 94, icon: "bot" },
    { name: "RAG & Vector Search", category: "ai", level: 92, icon: "cpu" },
    { name: "LangChain", category: "ai", level: 90, icon: "link" },
    { name: "FastAPI", category: "web", level: 94, icon: "zap" },

    { name: "MERN Stack (MongoDB, React, Node)", category: "web", level: 90, icon: "atom" },
    { name: "AI Security & Cybersecurity", category: "security", level: 90, icon: "shield" },
    { name: "DBMS & Operating Systems", category: "cs", level: 88, icon: "layers" },
    { name: "Data Structures & Algorithms", category: "cs", level: 92, icon: "git-branch" },
    { name: "Object-Oriented Programming (OOP)", category: "cs", level: 94, icon: "box" }
  ],

  certifications: [
    {
      title: "Generative AI in Action",
      issuer: "IBM SkillsBuild",
      date: "Certified",
      badge: "GenAI"
    },
    {
      title: "Python Foundation",
      issuer: "Infosys Springboard, Udemy, Cisco",
      date: "Certified",
      badge: "Python"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Edunet, Udemy",
      date: "Certified",
      badge: "Full-Stack"
    },
    {
      title: "Data Structures and Algorithms using Java",
      issuer: "NPTEL [Elite]",
      date: "Certified",
      badge: "Elite NPTEL"
    },
    {
      title: "Operating Systems and Security, Java Programming Fundamentals",
      issuer: "EDX",
      date: "Certified",
      badge: "OS & Security"
    },
    {
      title: "Cyber Threat Management, Junior CyberSecurity Analyst",
      issuer: "Cisco",
      date: "Certified",
      badge: "Cybersecurity"
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
      institution: "Vignan’s Lara Institute of Technology and Science",
      location: "Vadlamudi, India",
      period: "2022 – 2026",
      score: "CGPA: 8.1"
    },
    {
      degree: "Intermediate (Class XII) – MPC Stream",
      institution: "NRI Junior College",
      location: "Tenali, India",
      period: "2020 – 2022",
      score: "Percentage: 91.2%"
    },
    {
      degree: "Secondary School (Class X)",
      institution: "Viveka High School",
      location: "Angalakuduru, India",
      period: "2019 – 2020",
      score: "CGPA: 10.0"
    }
  ]
};
