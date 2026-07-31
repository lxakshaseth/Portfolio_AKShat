import { CertificationItem, ExperienceItem, GitHubData, ProjectItem, SkillCategory } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Akshat Gupta",
  role: "Full Stack | MERN Stack | Backend | Frontend Developer",
  titles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Engineer",
    "Frontend Web Developer"
  ],
  bio: "Building high-performance MERN stack web applications, robust backend microservices, and modern responsive frontend interfaces backed by cloud infrastructure.",
  about: "I am a Full Stack Developer & MERN Stack Specialist with deep expertise in Node.js, Express, MongoDB, PostgreSQL, React 19, Next.js 15, and AWS cloud deployments. I build end-to-end web applications combining scalable backend APIs with polished, lightning-fast frontend user interfaces.",
  location: "pune, India / Global Remote",
  email: "akshat.dev.contact@gmail.com",
  phone: "+91 7256014047",
  github: "https://github.com/lxakshaseth",
  linkedin: "www.linkedin.com/in/akshat0906",
  twitter: "https://twitter.com/lx_akshat_seth",
  resumeUrl: "https://drive.google.com/file/d/1ZIRdRRXlGHo9EIvix15CAs6mgsO290Q1/view?usp=sharing",
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
      { name: "Next.js 15 (App Router)", level: 92, popular: true },
      { name: "TypeScript", level: 90, popular: true },
      { name: "Tailwind CSS", level: 95, popular: true },
      { name: "Framer Motion", level: 85 },
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
      { name: "Redis Cache", level: 84 },
      { name: "JWT & OAuth 2.0", level: 90 },
      { name: "REST & GraphQL APIs", level: 92 }
    ]
  },
  {
    title: "DevOps & Cloud Infrastructure",
    skills: [
      { name: "Docker & Containerization", level: 88, popular: true },
      { name: "AWS (EC2, S3, CloudFront, Amplify)", level: 86, popular: true },
      { name: "GitHub Actions CI/CD", level: 85 },
      { name: "Nginx Reverse Proxy", level: 82 },
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

export const ACHIEVEMENTS = [
  {
    title: "Global AI Hackathon Winner 2024",
    description: "Awarded 1st place among 500+ teams for building Civic AI Platform, an automated citizen grievance triage agent."
  },
  {
    title: "AWS Certified Community Contributor",
    description: "Published technical guides on deploying Next.js 15 apps with CloudFront & Lambda@Edge."
  },
  {
    title: "Open Source Contributor",
    description: "Contributed performance optimizations and bug fixes to popular NPM developer tools."
  }
];

export const PROJECTS: ProjectItem[] = [
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
    id: "cert-1",
    title: "Oracle Cloud Infrastructure 2024 AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "2024",
    credentialId: "OCI-AI-2024-AKSHAT-8921",
    credentialUrl: "https://education.oracle.com/verify",
    skills: ["Generative AI", "LLM Fine-Tuning", "Machine Learning Foundations", "Oracle Cloud AI Services"]
  },
  {
    id: "cert-2",
    title: "AWS Academy Graduate - AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-ACADEMY-78190",
    credentialUrl: "https://aws.amazon.com/verification",
    skills: ["AWS EC2", "S3 Storage", "IAM Security", "CloudFront CDN", "VPC Networking"]
  },
  {
    id: "cert-3",
    title: "Meta Certified Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2023",
    credentialId: "META-FED-99214",
    credentialUrl: "https://coursera.org/verify",
    skills: ["Advanced React", "UI/UX Principles", "Web Performance Optimization", "CSS Architecture"]
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
