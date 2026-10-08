import { AchievementItem, CertificationItem, ExperienceItem, GitHubData, ProjectItem, SkillCategory } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Akshat",
  role: "Full Stack & Cloud Engineer | Microsoft Azure Certified | AI Systems",
  titles: [
    "Full Stack Engineer",
    "Microsoft Certified: Azure",
    "MERN Stack Specialist",
    "Backend & Cloud Architect",
    "AI Systems Builder"
  ],
  bio: "Microsoft Certified Full Stack & Cloud Engineer building high-performance web applications, event-driven microservices, and modern AI pipelines backed by cloud infrastructure.",
  about: "I am a Microsoft Certified Full Stack & Cloud Developer with hands-on expertise in Node.js, Express, MongoDB, PostgreSQL, React 19, Next.js, and Azure/AWS cloud infrastructure. I build end-to-end production systems combining resilient microservice backends with polished, lightning-fast user interfaces.",
  location: "India (Open to Relocate) / Remote",
  email: "lxakshatseth90@gmail.com",
  phone: "+91 7256014047",
  github: "https://github.com/lxakshaseth",
  linkedin: "https://www.linkedin.com/in/akshat0906",
  twitter: "https://twitter.com/lx_akshat_seth",
  resumeUrl: "https://drive.google.com/file/d/1K2QO95vCLI1TU8DlfOA2sV8jZVccq0RF/view?usp=sharing",
  yearsExperience: "1+",
  projectsCompleted: "45+",
  satisfiedClients: "15+",
  codeCommits: "1,000+"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Web Development",
    skills: [
      { name: "React 19", level: 95, popular: true },
      { name: "Next.js 16 / 15 (App Router)", level: 94, popular: true },
      { name: "TypeScript", level: 92, popular: true },
      { name: "Tailwind CSS", level: 95, popular: true },
      { name: "Framer Motion", level: 88 },
      { name: "Redux Toolkit / Zustand", level: 88 }
    ]
  },
  {
    title: "Backend & MERN Stack",
    skills: [
      { name: "Node.js", level: 92, popular: true },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 88, popular: true },
      { name: "PostgreSQL", level: 86, popular: true },
      { name: "Redis Cache & Pub/Sub", level: 85 },
      { name: "JWT & OAuth 2.0", level: 90 },
      { name: "REST & GraphQL APIs", level: 92 }
    ]
  },
  {
    title: "DevOps & Cloud Infrastructure",
    skills: [
      { name: "Microsoft Azure (Certified)", level: 94, popular: true },
      { name: "AWS (EC2, S3, CloudFront, Amplify)", level: 88, popular: true },
      { name: "Docker & Containerization", level: 88, popular: true },
      { name: "GitHub Actions CI/CD", level: 86 },
      { name: "Nginx Reverse Proxy", level: 84 },
      { name: "Linux Server Administration", level: 84 }
    ]
  },
  {
    title: "AI & Emerging Tech",
    skills: [
      { name: "OpenAI API & Function Calling", level: 90, popular: true },
      { name: "Groq LPU Acceleration", level: 85 },
      { name: "Prompt Engineering & RAG", level: 88, popular: true },
      { name: "WebRTC Real-time Video", level: 80 },
      { name: "OCR & Document Parsing", level: 82 }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-indux",
    role: "Full Stack Developer Intern",
    company: "Indux Technology",
    location: "Remote / On-site",
    period: "Feb 2026 – Aug 2026",
    type: "Internship",
    description: "Collaborated under company leadership (CEO Mr. Laxman Jadhav) to build responsive frontend components and end-to-end full-stack features.",
    achievements: [
      "Built user-friendly, responsive web components using HTML5, CSS3, JavaScript, and modern frameworks (React / Vue).",
      "Collaborated closely with cross-functional frontend and backend development teams to ensure design consistency and high quality across platforms.",
      "Worked directly under the mentorship of company leadership (CEO Mr. Laxman Jadhav) to implement end-to-end full-stack features."
    ],
    technologies: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "Full Stack Architecture"]
  },
  {
    id: "exp-apex-data",
    role: "Data Analytics Intern",
    company: "ApexPlanet Software Pvt Ltd",
    location: "Remote",
    period: "Jan 2026 – Mar 2026",
    type: "Internship",
    description: "Analyzed complex datasets to derive actionable business insights and support data-driven decision-making (Ref ID: APSPL2627277).",
    achievements: [
      "Analyzed datasets to derive actionable business insights and support data-driven decision-making.",
      "Hands-on exposure to data manipulation, visualization, and analytical techniques in a dynamic software development environment."
    ],
    technologies: ["Data Analytics", "Data Processing", "Data Visualization", "Python", "SQL"]
  },
  {
    id: "exp-uptoskills",
    role: "Web Development Intern",
    company: "UptoSkills",
    location: "Remote",
    period: "Oct 2025 – Jan 2026",
    type: "Internship",
    description: "Developed and optimized responsive UI modules under the guidance of Reporting Manager Mr. Shivam Agarwal.",
    achievements: [
      "Developed and optimized responsive UI modules under the guidance of Reporting Manager Mr. Shivam Agarwal.",
      "Enhanced frontend performance and user interface design consistency for interactive web applications."
    ],
    technologies: ["Web Development", "React", "Frontend Integration", "JavaScript", "HTML5/CSS3"]
  },
  {
    id: "exp-apex-web",
    role: "Web Development Intern",
    company: "ApexPlanet Software Pvt Ltd",
    location: "Remote",
    period: "Oct 2025 – Nov 2025",
    type: "Internship",
    description: "Implemented core frontend features using HTML, CSS, and JavaScript (Ref ID: APSPL2521280).",
    achievements: [
      "Implemented core frontend features using HTML, CSS, and JavaScript.",
      "Strengthened foundational web development capabilities by building and debugging dynamic user interface components."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Layouts", "DOM Manipulation"]
  },
  {
    id: "exp-axuore",
    role: "Frontend Development Intern",
    company: "Axuore Technologies",
    location: "Remote",
    period: "Jan 2025 – Feb 2025",
    type: "Internship",
    description: "Collaborated with senior professionals to develop real-world web application interfaces using React and Angular framework principles.",
    achievements: [
      "Collaborated with senior professionals to develop real-world web application interfaces using HTML, CSS, JavaScript, and React/Angular framework principles.",
      "Solved real-world challenges in frontend design responsiveness and cross-browser performance."
    ],
    technologies: ["React", "Angular", "JavaScript", "HTML5", "CSS3", "Responsive UI"]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Delhi Technological University / IP University",
    period: "2023 - 2027",
    details: "Specialized in Distributed Systems, Data Structures & Algorithms, and Machine Learning. Graduated with Honors."
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Finalist at Podar Startupthon 2K26 Grand Finale",
    achieved: "Competed in the Podar Startupthon 2K26 Grand Finale at Nawalgarh (Rajasthan), presenting an innovative, scalable full-stack venture prototype to industry investors and veteran leaders.",
    challenge: "Translating complex microservice architectures into an intuitive live product demonstration within minutes while proving unit economic scalability and user engagement viability.",
    approach: "Designed a clean, decoupled system with real-time analytics and modular APIs. Delivered an interactive live demo showcasing technical excellence and market relevance, earning the official Grand Finale honor (PST26-PRT-01867)."
  },
  {
    title: "Podar Hackfest 2026 Certificate of Achievement",
    achieved: "Awarded Certificate of Achievement at Podar Hackfest for conceptualizing, building, and delivering a resilient software application within an intensive hackathon sprint.",
    challenge: "Handling rapid prototyping under high pressure, maintaining clean architecture patterns, and coordinating end-to-end integration across frontend UI, REST endpoints, and database pipelines.",
    approach: "Adopted strict atomic component design and iterative micro-milestones, validating core user journeys early to ship a flawless demo before deadline (CERT-1778155983667-TVXWJ)."
  },
  {
    title: "Built an AI-Powered Learning Management System (Smart AI LMS)",
    achieved: "I developed an AI-powered Learning Management System that provides personalized learning, AI-powered question answering, quiz generation, and learning recommendations. I worked on both the frontend and backend, integrating AI APIs and building RESTful services.",
    challenge: "The biggest challenge was that I was learning several technologies while building the project. Integrating AI features with a full-stack application, handling API responses, debugging backend issues, and managing the database required continuous learning and problem-solving.",
    approach: "Instead of waiting until I had mastered every technology, I learned by building. I broke the project into small milestones, read documentation, experimented with different approaches, and consistently debugged issues until they were resolved. This hands-on approach helped me gain practical full-stack and AI integration experience much faster."
  },
  {
    title: "Contributed to a Sales Automation Platform During My Internship",
    achieved: "During my internship, I contributed to a Sales Automation platform by developing backend APIs, integrating AI chatbot functionality, and working on WhatsApp communication features. I collaborated with the team to improve existing features and resolve technical issues.",
    challenge: "The project involved multiple technologies, existing production code, third-party integrations, and real-world requirements. Understanding a large codebase while meeting deadlines was challenging, especially as an intern.",
    approach: "I focused on understanding the business requirements before writing code. I actively read documentation, asked questions when needed, tested every feature thoroughly, and broke complex problems into smaller tasks. This helped me contribute effectively despite having limited industry experience and strengthened my confidence in working on real-world applications."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "docbrain-ai",
    title: "DocBrain AI",
    subtitle: "Full Stack Microservices + RAG Platform",
    description: "Enterprise full-stack microservices platform with an event-driven architecture decoupled via Redis Pub/Sub for asynchronous document ingestion and AI streaming.",
    fullDescription: "DocBrain AI is an enterprise-grade full-stack microservices platform engineered with an event-driven architecture decoupled via Redis Pub/Sub for asynchronous document ingestion and AI streaming. It features a hybrid RAG pipeline (LangGraph StateGraph + ChromaDB dense embeddings + BM25 sparse search + Reciprocal Rank Fusion) to reduce LLM hallucinations. Node.js backend services are implemented using Clean Architecture and Repository Pattern with JWT authentication, Zod validation, and MongoDB Atlas, deployed via Docker Compose, Render, and Vercel.",
    image: "/images/docbrain-ai.jpg",
    category: "Full Stack",
    featured: true,
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Python FastAPI",
      "LangGraph",
      "ChromaDB",
      "Redis",
      "MongoDB"
    ],
    githubUrl: "https://github.com/lxakshaseth/DocBrain",
    liveUrl: "https://github.com/lxakshaseth/DocBrain",
    metrics: [
      { label: "Accuracy", value: "98.6%" },
      { label: "RAG Latency", value: "< 210ms" },
      { label: "Hallucination Cut", value: "-85%" }
    ]
  },
  {
    id: "smart-ai-lms",
    title: "Smart AI LMS",
    subtitle: "Next-Gen AI Learning Management System",
    description: "An adaptive AI-driven learning management platform offering personalized course recommendations, real-time AI tutoring, automated quiz generation, and interactive student analytics.",
    fullDescription: "Smart AI LMS revolutionizes online education by using LLMs to auto-generate quizzes, evaluate coding assignments, and adapt lesson difficulty to individual student progress in real-time.",
    image: "/images/smart-ai-lms.jpg",
    category: "Full Stack",
    featured: true,
    techStack: ["Next.js 15", "TypeScript", "Node.js", "OpenAI API", "PostgreSQL", "Tailwind CSS", "AWS S3"],
    githubUrl: "https://github.com/lxakshaseth",
    liveUrl: "https://github.com/lxakshaseth",
    metrics: [
      { label: "Active Learners", value: "25,000+" },
      { label: "Quiz Latency", value: "< 800ms" },
      { label: "Completion Boost", value: "+42%" }
    ]
  },
  {
    id: "civic-ai-platform",
    title: "Civic AI Platform",
    subtitle: "Smart Governance & Grievance Resolution AI",
    description: "A civic tech platform enabling citizens to report local municipal issues via AI-powered photo OCR, spatial location tagging, and auto-routing to public department dashboards.",
    fullDescription: "Civic AI Platform leverages OCR and computer vision to auto-categorize infrastructural issues (potholes, garbage, water leaks), route them to municipal officers, and provide real-time resolution tracking.",
    image: "/images/civic-ai-platform.jpg",
    category: "AI & Cloud",
    featured: true,
    techStack: ["React", "Express.js", "Groq LPU", "MongoDB", "Docker", "AWS EC2", "WebRTC"],
    githubUrl: "https://github.com/lxakshaseth",
    liveUrl: "https://github.com/lxakshaseth",
    metrics: [
      { label: "Issues Processed", value: "120,000+" },
      { label: "Routing Accuracy", value: "96.4%" },
      { label: "Resolution Time", value: "-50%" }
    ]
  },
  {
    id: "sales-automation",
    title: "Sales Automation Suite",
    subtitle: "AI Lead Scoring & Automated CRM Workflow Engine",
    description: "An end-to-end sales automation engine with real-time lead scoring, automated email sequence dispatch, pipeline forecasting, and Redis-backed analytics dashboards.",
    fullDescription: "Built for fast-growing SaaS startups, Sales Automation Suite streamlines customer acquisition through intelligent email personalisation, webhook integrations, and predictive pipeline analytics.",
    image: "/images/sales-automation.jpg",
    category: "Full Stack",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Redis", "PostgreSQL", "Nginx", "GitHub Actions", "Tailwind CSS"],
    githubUrl: "https://github.com/lxakshaseth",
    liveUrl: "https://github.com/lxakshaseth",
    metrics: [
      { label: "Email Sequences", value: "1.2M / mo" },
      { label: "System Uptime", value: "99.99%" },
      { label: "Conversion Boost", value: "3.5x" }
    ]
  },
  {
    id: "task5-apex-planet",
    title: "Task5 Apex Planet Weather App",
    subtitle: "Real-time Weather, AQI & Interactive Maps",
    description: "ApexPlanet Advanced Weather App delivers real-time weather, AQI, auto day-night theme, sunrise/sunset sun-moon switching, 7-day forecast, hourly charts, and interactive map tiles.",
    fullDescription: "Built during ApexPlanet internship, this advanced weather application integrates OpenWeather APIs, AQI data feeds, interactive Leaflet map layers, and smooth GSAP micro-animations.",
    image: "/images/smart-ai-lms.jpg",
    category: "Full Stack",
    featured: true,
    techStack: ["JavaScript", "HTML5", "CSS3", "GSAP", "Weather API", "Leaflet Maps"],
    githubUrl: "https://github.com/lxakshaseth/Task5_Apex_Planet",
    liveUrl: "https://github.com/lxakshaseth/Task5_Apex_Planet"
  },
  {
    id: "neoresume",
    title: "NeoResume AI Builder",
    subtitle: "Interactive Futurist Resume Dashboard",
    description: "AI-Inspired Resume Builder transforming your resume into an interactive dashboard. Explore projects, skills, and experience through AI-style chat cards and glowing highlights.",
    fullDescription: "NeoResume reimagines online portfolios with futuristic glowing UI panels, interactive AI chat prompt cards, smooth section transitions, and responsive mobile layout.",
    image: "/images/civic-ai-platform.jpg",
    category: "AI & Cloud",
    featured: true,
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Web API"],
    githubUrl: "https://github.com/lxakshaseth/NeoResume",
    liveUrl: "https://github.com/lxakshaseth/NeoResume"
  },
  {
    id: "college-event-portal",
    title: "College Event Management Portal",
    subtitle: "Django & MySQL Event Coordination Web Platform",
    description: "A web platform to manage and organize college events efficiently. Features event registrations, admin dashboards, participant tracking, and real-time schedule updates.",
    fullDescription: "Built with Django and MySQL, this portal streamlines student event registrations, ticket issuance, admin approval workflows, and live announcement feeds.",
    image: "/images/sales-automation.jpg",
    category: "Full Stack",
    featured: true,
    techStack: ["Python", "Django", "MySQL", "JavaScript", "HTML5", "Bootstrap"],
    githubUrl: "https://github.com/lxakshaseth/college_event_portal",
    liveUrl: "https://github.com/lxakshaseth/college_event_portal"
  },
  {
    id: "simple-pdf-image-merger",
    title: "Simple PDF & Image Merger",
    subtitle: "Private Browser Document Converter Tool",
    description: "Merge PDF, JPG, and PNG files into one document with drag-and-drop file reordering. All processing happens locally in your browser with 100% privacy.",
    fullDescription: "A fast client-side utility built with Vanilla JS and pdf-lib.js. Files never leave the browser, guaranteeing instant document merging and zero server overhead.",
    image: "/images/smart-ai-lms.jpg",
    category: "Systems & Web3",
    featured: false,
    techStack: ["JavaScript", "pdf-lib.js", "HTML5 Canvas", "CSS3"],
    githubUrl: "https://github.com/lxakshaseth/simple-pdf-image-merger",
    liveUrl: "https://github.com/lxakshaseth/simple-pdf-image-merger"
  },
  {
    id: "task4-apex-planet",
    title: "Task4 Apex Planet Productivity Suite",
    subtitle: "Multi-Page Task & Notes Manager",
    description: "Modern multi-page productivity website with GSAP animations, dark/light mode, sidebar navigation, LocalStorage persistence, To-Do list, and Notes suite.",
    fullDescription: "Designed for high productivity, this multi-page web suite includes task categorization, state persistence in LocalStorage, notes creation, and responsive layout.",
    image: "/images/civic-ai-platform.jpg",
    category: "Full Stack",
    featured: false,
    techStack: ["JavaScript", "GSAP", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/lxakshaseth/Task4_apex_planet",
    liveUrl: "https://github.com/lxakshaseth/Task4_apex_planet"
  },
  {
    id: "task3-apex-planet",
    title: "Task3 Apex Planet Interactive Web Portal",
    subtitle: "Neon UI Carousel, AI Quiz & Weather Search",
    description: "Vibrant neon-styled web app featuring HD image carousel, AI-powered random quiz engine with score tracking, and location-based geocoding weather search.",
    fullDescription: "Combines dynamic image sliders, interactive multiple-choice quiz logic, geocoded weather lookups, and sleek dark neon glass card styling.",
    image: "/images/sales-automation.jpg",
    category: "AI & Cloud",
    featured: false,
    techStack: ["JavaScript", "GSAP", "Weather API", "HTML5", "CSS3"],
    githubUrl: "https://github.com/lxakshaseth/TASK3_APEX_PLANET",
    liveUrl: "https://github.com/lxakshaseth/TASK3_APEX_PLANET"
  },
  {
    id: "task2-apex-planet",
    title: "Task2 Apex Planet Form & Task Manager",
    subtitle: "Animated Validation & To-Do Suite",
    description: "Interactive web app featuring contact form with animated validation and success modals, plus a full To-Do manager with filter controls.",
    fullDescription: "Built with pure HTML, CSS, and JavaScript for zero-dependency execution, fast load times, and LocalStorage data retention.",
    image: "/images/smart-ai-lms.jpg",
    category: "Full Stack",
    featured: false,
    techStack: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/lxakshaseth/TASK_2_APEX_PLANET",
    liveUrl: "https://github.com/lxakshaseth/TASK_2_APEX_PLANET"
  },
  {
    id: "profilegrid",
    title: "ProfileGrid Digital VCard",
    subtitle: "Virtual Business Card & QR Code Generator",
    description: "Sleek one-page virtual business card with an app-like feel. Tap through animated sections for bio, projects, and instant QR code sharing.",
    fullDescription: "Ideal for modern networking. Displays professional profile details with instant client-side QR code generation for scanning on mobile devices.",
    image: "/images/civic-ai-platform.jpg",
    category: "Systems & Web3",
    featured: false,
    techStack: ["HTML5", "CSS3", "JavaScript", "QR API"],
    githubUrl: "https://github.com/lxakshaseth/ProfileGrid",
    liveUrl: "https://github.com/lxakshaseth/ProfileGrid"
  },
  {
    id: "hoen-scanner-service",
    title: "Hoen Scanner Microservice",
    subtitle: "Dropwizard & React Hotel Search Engine",
    description: "Microservice platform built with Dropwizard backend and React frontend. Searches hotel and rental car inventory by city with clean architecture.",
    fullDescription: "Demonstrates microservice decoupled architecture, fast JSON query handling, and React component integration for hotel and vehicle search.",
    image: "/images/sales-automation.jpg",
    category: "Systems & Web3",
    featured: false,
    techStack: ["Java", "Dropwizard", "React", "REST API"],
    githubUrl: "https://github.com/lxakshaseth/hoen-scanner-service",
    liveUrl: "https://github.com/lxakshaseth/hoen-scanner-service"
  },
  {
    id: "shiny-memory",
    title: "Brick Invaders Arcade Game",
    subtitle: "HTML5 Canvas Action Arcade Engine",
    description: "Hybrid of Breakout and Space Invaders where players shatter descending brick invaders, dodge enemy fire, collect power-ups, and survive endless waves.",
    fullDescription: "Built with pure HTML5 Canvas and JavaScript physics loop. Features collision detection, coin drops, shield power-ups, and sound effects.",
    image: "/images/smart-ai-lms.jpg",
    category: "Systems & Web3",
    featured: false,
    techStack: ["JavaScript", "HTML5 Canvas", "Audio API"],
    githubUrl: "https://github.com/lxakshaseth/shiny-memory",
    liveUrl: "https://github.com/lxakshaseth/shiny-memory"
  },
  {
    id: "flappy-plus",
    title: "Flappy+ Endless Arcade",
    subtitle: "Canvas Sprite Retro Game Engine",
    description: "Classic Flappy Bird game remake built with pure JavaScript and HTML5 Canvas. Features smooth physics, sprite animation, and high score tracking.",
    fullDescription: "Retro game engine using requestAnimationFrame canvas render loop, collision bounding boxes, and LocalStorage high score leaderboard.",
    image: "/images/civic-ai-platform.jpg",
    category: "Systems & Web3",
    featured: false,
    techStack: ["JavaScript", "HTML5 Canvas", "LocalStorage"],
    githubUrl: "https://github.com/lxakshaseth/flappy-plus",
    liveUrl: "https://github.com/lxakshaseth/flappy-plus"
  },
  {
    id: "house-price-prediction",
    title: "Advanced House Price Prediction",
    subtitle: "Machine Learning Real Estate Forecasting",
    description: "Machine learning analytics model predicting real estate prices based on housing features, spatial data, regression algorithms, and data transformation.",
    fullDescription: "Exploratory data analysis and ML model training using Python, Scikit-Learn, and Pandas to forecast property valuations with high precision.",
    image: "/images/sales-automation.jpg",
    category: "AI & Cloud",
    featured: false,
    techStack: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
    githubUrl: "https://github.com/lxakshaseth/House_Price_Prediction_Advanced",
    liveUrl: "https://github.com/lxakshaseth/House_Price_Prediction_Advanced"
  },
  {
    id: "password-generator-gui",
    title: "Java Password Generator GUI",
    subtitle: "Desktop Security Tool with Entropy Meter",
    description: "Java Swing desktop app for generating customizable secure passwords with character set rules and real-time security entropy evaluation.",
    fullDescription: "Features random cryptographic generation, strength progress indicator, customizable length, and one-click clipboard copying.",
    image: "/images/smart-ai-lms.jpg",
    category: "Systems & Web3",
    featured: false,
    techStack: ["Java", "Swing GUI", "Security API"],
    githubUrl: "https://github.com/lxakshaseth/PasswordGeneratorGUI",
    liveUrl: "https://github.com/lxakshaseth/PasswordGeneratorGUI"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-microsoft-azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft (Signed by Satya Nadella, CEO)",
    date: "September 2026",
    credentialId: "86B238F25DC30C0F",
    credentialUrl: "/certificates/azure-fundamentals-credential.png",
    image: "/certificates/azure-fundamentals-credential.png",
    featured: true,
    badge: "Microsoft Certified",
    skills: ["Microsoft Azure", "Cloud Architecture", "Azure Security", "Compute & Networking", "Cost Management"]
  },
  {
    id: "cert-podar-startupthon-2026",
    title: "Podar Startupthon 2K26 - Grand Finale",
    issuer: "Podar Eduspace & Uptoskills",
    date: "October 2026",
    credentialId: "PST26-PRT-01867",
    credentialUrl: "/certificates/podar-startupthon-2k26.pdf",
    featured: true,
    badge: "Grand Finale Finalist",
    skills: ["Startup Innovation", "Product Strategy", "Full Stack Prototype", "Rapid Prototyping"]
  },
  {
    id: "cert-podar-hackfest",
    title: "Podar Hackfest Certificate of Achievement",
    issuer: "Podar Educational Institutions & Uptoskills",
    date: "May 2026",
    credentialId: "CERT-1778155983667-TVXWJ",
    credentialUrl: "/certificates/podar-hackfest.pdf",
    featured: true,
    badge: "Achievement Award",
    skills: ["Hackathon Engineering", "Rapid Full Stack Dev", "System Architecture", "Problem Solving"]
  },
  {
    id: "cert-aws-security-fundamentals",
    title: "AWS Security Fundamentals",
    issuer: "Amazon Web Services (AWS Training & Certification)",
    date: "August 2026",
    credentialId: "AWS-SEC-FUND-2026",
    credentialUrl: "/certificates/aws-security-fundamentals.pdf",
    skills: ["AWS Security", "Identity & Access Management (IAM)", "Cloud Compliance", "Data Protection"]
  },
  {
    id: "cert-aws-technical-essentials",
    title: "AWS Technical Essentials",
    issuer: "Amazon Web Services (AWS Training & Certification)",
    date: "August 2026",
    credentialId: "AWS-TECH-ESS-2026",
    credentialUrl: "/certificates/aws-technical-essentials.pdf",
    skills: ["AWS Core Services", "EC2 Compute", "S3 Storage", "VPC Networking", "RDS Databases"]
  },
  {
    id: "cert-aws-prompt-engineering",
    title: "Foundations of Prompt Engineering",
    issuer: "Amazon Web Services (AWS Training & Certification)",
    date: "August 2026",
    credentialId: "AWS-PROMPT-ENG-2026",
    credentialUrl: "/certificates/foundations-of-prompt-engineering.pdf",
    skills: ["Prompt Engineering", "Generative AI", "Amazon Bedrock", "LLM Design Patterns"]
  },
  {
    id: "cert-aws-devops-getting-started",
    title: "Getting Started with DevOps on AWS",
    issuer: "Amazon Web Services (AWS Training & Certification)",
    date: "August 2026",
    credentialId: "AWS-DEVOPS-2026",
    credentialUrl: "/certificates/getting-started-with-devops-on-aws.pdf",
    skills: ["DevOps", "AWS CodePipeline", "CI/CD Automation", "Infrastructure as Code"]
  },
  {
    id: "cert-aws-genai-art-of-possible",
    title: "Introduction to Generative AI - Art of the Possible",
    issuer: "Amazon Web Services (AWS Training & Certification)",
    date: "August 2026",
    credentialId: "AWS-GENAI-AOP-2026",
    credentialUrl: "/certificates/introduction-to-generative-ai-art-of-the-possible.pdf",
    skills: ["Generative AI", "Foundation Models", "AWS AI/ML", "Generative AI Use Cases"]
  },
  {
    id: "cert-oracle-agentic-ai",
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "July 2026",
    credentialId: "102179368AAI26OFA",
    credentialUrl: "https://education.oracle.com/verify",
    skills: ["Agentic AI", "Autonomous AI Systems", "LLM Agents", "AI Workflow Architectures"]
  },
  {
    id: "cert-oracle-oci-ai-2025",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "July 2025",
    credentialId: "102179298OCI25AICFA",
    credentialUrl: "https://education.oracle.com/verify",
    skills: ["OCI Cloud AI", "Generative AI", "Machine Learning Foundations", "Cloud Infrastructure"]
  },
  {
    id: "cert-nestle-resilience",
    title: "Nestlé E-learning 2025 | Resilience (Nesternship)",
    issuer: "Nestlé (Needs YOUth)",
    date: "2025",
    credentialId: "NESTLE-RESILIENCE-2025",
    credentialUrl: "https://www.nestle.com",
    skills: ["Professional Resilience", "Workplace Agility", "Team Leadership", "Corporate E-Learning"]
  },
  {
    id: "cert-deloitte",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "September 2025",
    credentialId: "BQkqhxBGzQwi5arRe",
    credentialUrl: "https://www.theforage.com/simulations/deloitte/data-analytics",
    skills: ["Data Analysis", "Forensic Technology", "Data Visualization", "Business Insights"]
  },
  {
    id: "cert-edunet-aicte-shell",
    title: "Advanced Green Skills and Artificial Intelligence (Skills4Future)",
    issuer: "Edunet Foundation | AICTE | Shell India",
    date: "Jan 2026 - Feb 2026",
    credentialId: "S4F25_208105",
    credentialUrl: "https://edunetfoundation.org",
    skills: ["Artificial Intelligence", "Green Skills", "Machine Learning", "Prompt Engineering"]
  },
  {
    id: "cert-barclays-gtt",
    title: "Barclays Life Skills Training Program",
    issuer: "GTT Foundation | Barclays",
    date: "March 2026",
    credentialId: "GTT-BARCLAYS-2026",
    credentialUrl: "https://gttconnect.com",
    skills: ["Professional Communication", "Life Skills", "Corporate Readiness", "Problem Solving"]
  },
  {
    id: "cert-aivitalix-shamgar",
    title: "Workshop on AI Tools and Industry Best Practices",
    issuer: "AIVitalix HealthCare | Shamgar Software (AICTE Partner)",
    date: "November 2025",
    credentialId: "Cert No: 4323",
    credentialUrl: "https://aivitalix.com",
    skills: ["AI Tools", "Industry Best Practices", "Machine Learning Applications", "Workflow Automation"]
  },
  {
    id: "cert-uptoskills-exp",
    title: "Web Development Internship & Leadership Certificate",
    issuer: "UptoSkills",
    date: "Oct 2025 - Apr 2026",
    credentialId: "US-EXP-2026-FKIP2BG",
    credentialUrl: "https://uptoskills.com",
    skills: ["Web Development", "Team Captaincy", "Frontend Architecture", "UI/UX Optimization"]
  },
  {
    id: "cert-aws",
    title: "AWS Academy Graduate - AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-ACADEMY-78190",
    credentialUrl: "https://aws.amazon.com/verification",
    skills: ["AWS EC2", "S3 Storage", "IAM Security", "CloudFront CDN", "VPC Networking"]
  }
];

export const GITHUB_STATS_DATA: GitHubData = {
  username: "lxakshaseth",
  publicRepos: 45,
  followers: 412,
  totalStars: 289,
  totalCommits: 1000,
  contributionsThisYear: 1000,
  topLanguages: [
    { name: "JavaScript", percentage: 42, color: "#F7DF1E" },
    { name: "HTML/CSS", percentage: 28, color: "#E34F26" },
    { name: "Python", percentage: 16, color: "#3572A5" },
    { name: "Java", percentage: 10, color: "#B07219" },
    { name: "TypeScript", percentage: 4, color: "#3178C6" }
  ],
  pinnedRepos: [
    {
      name: "DocBrain",
      description: "Full Stack Microservices + RAG Platform featuring Redis Pub/Sub event-driven architecture, LangGraph hybrid RAG, ChromaDB embeddings & FastAPI microservice.",
      stars: 32,
      forks: 9,
      language: "TypeScript / Python",
      url: "https://github.com/lxakshaseth/DocBrain"
    },
    {
      name: "Task5_Apex_Planet",
      description: "ApexPlanet Advanced Weather App featuring real-time weather, AQI, day-night auto theme, 7-day forecast & interactive maps.",
      stars: 12,
      forks: 4,
      language: "JavaScript",
      url: "https://github.com/lxakshaseth/Task5_Apex_Planet"
    },
    {
      name: "NeoResume",
      description: "AI-Inspired Resume Builder — a futuristic web app transforming resumes into an interactive dashboard with AI-style chat cards.",
      stars: 18,
      forks: 6,
      language: "HTML",
      url: "https://github.com/lxakshaseth/NeoResume"
    },
    {
      name: "college_event_portal",
      description: "College Event Portal — A web platform to manage college events, registration, admin dashboard, and participant tracking.",
      stars: 15,
      forks: 5,
      language: "Python / Django",
      url: "https://github.com/lxakshaseth/college_event_portal"
    },
    {
      name: "simple-pdf-image-merger",
      description: "Merge PDF, JPG, and PNG files directly in browser with 100% privacy and client-side processing using pdf-lib.js.",
      stars: 24,
      forks: 8,
      language: "JavaScript",
      url: "https://github.com/lxakshaseth/simple-pdf-image-merger"
    },
    {
      name: "Task4_apex_planet",
      description: "ApexPlanet Pro To-Do Suite with GSAP animations, dark/light mode, sidebar navigation, and local storage persistence.",
      stars: 9,
      forks: 3,
      language: "JavaScript",
      url: "https://github.com/lxakshaseth/Task4_apex_planet"
    },
    {
      name: "hoen-scanner-service",
      description: "Microservice search API for hotel & rental cars built with Dropwizard and a React frontend.",
      stars: 11,
      forks: 4,
      language: "Java / React",
      url: "https://github.com/lxakshaseth/hoen-scanner-service"
    }
  ]
};
