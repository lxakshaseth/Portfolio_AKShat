import { CaseStudy } from "@/types/portfolio";

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "docbrain-ai": {
    id: "cs-docbrain",
    projectId: "docbrain-ai",
    title: "DocBrain AI — Enterprise Microservices & Hybrid RAG Architecture",
    overview: "DocBrain AI is an enterprise full-stack microservices platform designed for high-throughput asynchronous document ingestion, multi-tenant knowledge indexing, and zero-hallucination hybrid retrieval.",
    architecture: {
      title: "Decoupled Event-Driven Microservices & Hybrid Retrieval Pipeline",
      description: "Engineered with Next.js 15, Node.js/Express, Python FastAPI, and LangGraph. Asynchronous document ingestion and real-time streaming are decoupled using Redis Pub/Sub, separating vector embedding generation from backend query handling.",
      diagramComponents: [
        "Frontend Application (Next.js 15 App Router + TypeScript + Tailwind CSS)",
        "API Gateway & Auth (Node.js Express + Clean Architecture + Zod + JWT)",
        "Event Bus / Queue (Redis Pub/Sub for async document ingestion & streaming)",
        "RAG Orchestrator Microservice (Python FastAPI + LangGraph StateGraph)",
        "Vector & Sparse Search (ChromaDB dense embeddings + BM25 search engine)",
        "Primary Database & Storage (MongoDB Atlas + AWS S3 for raw documents)"
      ]
    },
    keyFeatures: [
      "Hybrid RAG Pipeline: Integrates LangGraph StateGraph, ChromaDB dense embeddings, and BM25 sparse search fused via Reciprocal Rank Fusion (RRF).",
      "Event-Driven Ingestion Engine: Decoupled Redis Pub/Sub message broker handles heavy document parsing without blocking synchronous user queries.",
      "Clean Architecture Node.js Backend: Strictly layered repository pattern with Zod payload validation and JWT-authenticated route guards.",
      "Containerized Multi-Cloud Deployment: Orchestrated with Docker Compose for localized testing, deployed across Vercel, Render, and MongoDB Atlas."
    ],
    challenges: [
      {
        problem: "Standard dense vector search alone suffered from high hallucination rates on exact keyword lookup for enterprise contracts.",
        solution: "Engineered a hybrid retrieval system combining BM25 keyword matching with ChromaDB vector search, using Reciprocal Rank Fusion (RRF) to score and rerank document chunks before LLM generation."
      },
      {
        problem: "Heavy PDF parsing and embedding generation blocked Node.js event loop causing 504 gateway timeouts.",
        solution: "Decoupled processing into an asynchronous task architecture using Redis Pub/Sub to pass ingestion jobs to Python FastAPI workers while streaming real-time status to the frontend via SSE."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "Document Ingestion Request",
        description: "User submits an enterprise document. Express.js authenticates JWT, validates payload with Zod, and publishes an ingestion event to Redis Pub/Sub."
      },
      {
        step: 2,
        title: "Async Chunking & Vectorization",
        description: "FastAPI microservice consumes event, chunks document with smart boundary detection, and indexes dense vectors in ChromaDB alongside BM25 tokens."
      },
      {
        step: 3,
        title: "StateGraph Hybrid Querying",
        description: "User queries DocBrain. LangGraph StateGraph executes hybrid dense+sparse retrieval, reranks with RRF, and streams hallucination-free response in < 210ms."
      }
    ],
    databaseDesign: [
      {
        entity: "Document & IngestionJob",
        description: "MongoDB collection tracking document metadata, chunk counts, processing statuses (queued, indexing, complete), and owner tenant IDs."
      },
      {
        entity: "ChromaDB Vector Collections",
        description: "High-dimensional embedding store with HNSW spatial indexing for fast semantic context retrieval."
      },
      {
        entity: "User & Subscription RBAC",
        description: "MongoDB Atlas schema managing user profiles, API rate-limiting tier tokens, and role-based permissions."
      }
    ]
  },
  "smart-ai-lms": {
    id: "cs-1",
    projectId: "smart-ai-lms",
    title: "Smart AI LMS — Architecture & System Case Study",
    overview: "Smart AI LMS was built to solve engagement drop-off in online education by providing real-time AI tutoring, personalized assignment feedback, and dynamically generated adaptive quizzes.",
    architecture: {
      title: "Micro-Frontend & Serverless AI Pipeline",
      description: "Built using Next.js 15 App Router with React Server Components for ultra-fast rendering. The AI engine uses a queued request pattern over Redis to stream OpenAI / Groq LLM responses without blocking the main event loop.",
      diagramComponents: [
        "Client Interface (Next.js 15 App Router + Framer Motion)",
        "API Gateway & Auth (NextAuth + Edge Middleware)",
        "AI Execution Service (Groq / OpenAI API streaming)",
        "Database Layer (PostgreSQL with Prisma ORM)",
        "Cache & Queue (Redis Upstash for streaming & session state)",
        "Cloud Storage (AWS S3 for video assets & PDF handouts)"
      ]
    },
    keyFeatures: [
      "AI Tutor Chatbot: Instant multi-modal homework assistance with code snippet formatting.",
      "Dynamic Quiz Generator: Automatically parses lesson transcripts and creates 5-minute diagnostic quizzes.",
      "Progress Analytics Dashboard: Visual charts showing skill mastery heatmaps and streak counters.",
      "Video Chunking & Smart Subtitles: Automatic speech-to-text processing for fast content searching."
    ],
    challenges: [
      {
        problem: "High latency when generating complex custom quizzes for long video courses led to user drop-offs.",
        solution: "Implemented background job processing with Redis queues and streaming SSE (Server-Sent Events) so users see partial quiz cards rendering instantly."
      },
      {
        problem: "DB connection pool exhaustion during peak exam hours with 10,000+ concurrent student sessions.",
        solution: "Migrated to Prisma Postgres Connection Pooler and cached user progress data in Redis with a 5-minute write-back strategy."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "Course Transcript Upload",
        description: "Instructor uploads lesson materials. The backend sends text payload to AWS S3 and enqueues vector embedding creation."
      },
      {
        step: 2,
        title: "Vector Embedding & Indexing",
        description: "Text is chunked into 512-token windows and stored in PostgreSQL pgvector for semantic retrieval."
      },
      {
        step: 3,
        title: "Real-time RAG Querying",
        description: "Student asks a question; the system retrieves relevant course context and streams AI response in < 500ms."
      }
    ],
    databaseDesign: [
      {
        entity: "User & Profile",
        description: "Stores authentication credentials, role (Student/Instructor), enrollment history, and global XP points."
      },
      {
        entity: "Course & Module",
        description: "Hierarchical schema linking courses, chapters, video transcripts, and attached downloadable assets."
      },
      {
        entity: "QuizAttempt & AI Feedback",
        description: "JSONB columns storing student answers, AI-generated explanations, score breakdowns, and timestamp logs."
      }
    ]
  },
  "civic-ai-platform": {
    id: "cs-2",
    projectId: "civic-ai-platform",
    title: "Civic AI Platform — Municipal Infrastructure Intelligence",
    overview: "Civic AI Platform empowers municipal authorities to automatically process, triage, and dispatch work orders for citizen-reported infrastructure issues like potholes, malfunctioning streetlights, and sanitation hazards.",
    architecture: {
      title: "Event-Driven Vision & GIS Routing Architecture",
      description: "Citizens upload geotagged photos via mobile web. The image pipeline passes photos to OpenCV & Groq LPU Vision models for instant classification, generating spatial coordinates and priority urgency scores.",
      diagramComponents: [
        "PWA Web Mobile App (React + Geolocation API)",
        "Image Ingestion Gateway (Express.js + Multer)",
        "Vision Classification Worker (Groq LPU Vision + OpenCV)",
        "Spatial Database (PostgreSQL with PostGIS extension)",
        "Municipal Admin Portal (Next.js Dashboard + Mapbox GIS)"
      ]
    },
    keyFeatures: [
      "AI Pothole & Hazard Detection: Auto-classifies severity from mild to critical hazard.",
      "GIS Map Integration: Visual cluster maps showing municipal repair priority zones.",
      "Automated Work Order Dispatch: Routes reports to the nearest maintenance depot.",
      "Citizen SMS/WhatsApp Status Notifications: Real-time SMS updates when a reported issue is marked repaired."
    ],
    challenges: [
      {
        problem: "Duplicate complaints submitted for the exact same physical issue caused backlog clutter.",
        solution: "Built a PostGIS spatial clustering algorithm (ST_DWithin 25m radius) combined with image feature similarity checks to automatically merge duplicate reports."
      },
      {
        problem: "High failure rate on image uploads from low-bandwidth 3G mobile networks.",
        solution: "Implemented client-side image compression using HTML5 Canvas before network transmission, reducing photo payload size by 80% without losing OCR details."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "Photo Capture & Geo-Tagging",
        description: "User snaps photo. Web app extracts EXIF GPS coordinates and compresses photo locally."
      },
      {
        step: 2,
        title: "Vision Model Analysis",
        description: "Groq Vision model classifies issue type (Pothole, Waste, Light) and evaluates urgency score."
      },
      {
        step: 3,
        title: "Depot Dispatch & Tracking",
        description: "Ticket generated in PostGIS database, visual marker added to admin GIS map, notification pushed to repair crew."
      }
    ],
    databaseDesign: [
      {
        entity: "GrievanceReport",
        description: "Contains photo URLs, ST_Point spatial coordinates, issue category, urgency level, and status flags."
      },
      {
        entity: "MunicipalZone & Depot",
        description: "Polygonal boundaries defining city wards, assigned officer contacts, and active equipment fleets."
      }
    ]
  },
  "sales-automation": {
    id: "cs-3",
    projectId: "sales-automation",
    title: "Sales Automation Suite — High-Scale SaaS CRM Engine",
    overview: "Built to automate lead discovery, email drip campaigns, and revenue forecasting for growing B2B sales teams.",
    architecture: {
      title: "Microservices Architecture with Event-Driven Job Queues",
      description: "Separated into a stateless Next.js frontend, Node.js queue workers powered by BullMQ and Redis, and PostgreSQL for ACID transactions.",
      diagramComponents: [
        "React Dashboard (Tailwind CSS + Recharts)",
        "API Service Layer (Node.js Express)",
        "Queue Engine (BullMQ + Redis)",
        "Email Delivery Workers (AWS SES + Rate Limiters)",
        "Analytical Database (PostgreSQL + TimescaleDB)"
      ]
    },
    keyFeatures: [
      "AI Personalization Generator: Customizes cold outreach emails based on prospect LinkedIn bios.",
      "Visual Workflow Builder: Drag-and-drop node graph for configuring automated lead triggers.",
      "Deliverability Shield: Spreads email sending across domain pools to prevent spam folder classification.",
      "Real-time Lead Scoring: Instant notification when a high-value lead opens an email or clicks a link."
    ],
    challenges: [
      {
        problem: "Email provider rate limits caused outbound campaign stalls and IP throttling.",
        solution: "Designed a token-bucket rate-limiting worker queue using Redis to ensure outbound emails never exceed provider quotas."
      },
      {
        problem: "Complex workflow builder UI was sluggish when rendering 50+ interconnected nodes.",
        solution: "Optimized React state using Zustand and custom memoization wrappers, maintaining 60 FPS graph interactions."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "Prospect Import",
        description: "CSV or CRM sync imports leads into staging tables with data enrichment hooks."
      },
      {
        step: 2,
        title: "AI Personalization",
        description: "Background worker crafts tailored opening sentences using lead company metadata."
      },
      {
        step: 3,
        title: "Scheduled Dispatch & Webhooks",
        description: "Emails dispatched according to prospect timezone; opens/clicks logged via tracking pixel webhooks."
      }
    ],
    databaseDesign: [
      {
        entity: "Prospect & Company",
        description: "Stores contact details, domain information, deal stage, and lifetime engagement score."
      },
      {
        entity: "Sequence & Step",
        description: "Defines multi-step drip campaign rules, delay timers, and conditional branching nodes."
      }
    ]
  },
  "task5-apex-planet": {
    id: "cs-4",
    projectId: "task5-apex-planet",
    title: "Task5 ApexPlanet Weather App — Architecture Case Study",
    overview: "Delivers real-time weather forecasts, Air Quality Index (AQI) tracking, automatic day-night theme switching, interactive Leaflet map layers, and GSAP micro-animations.",
    architecture: {
      title: "Client-Side REST Integration & GIS Renderer",
      description: "Uses asynchronous Fetch API pipelines to ingest OpenWeatherMap REST streams, mapping geographic coordinates to interactive Leaflet tile canvases.",
      diagramComponents: [
        "UI Layer (Vanilla JS + GSAP Micro-Animations)",
        "Geocoding & Location Resolver (Browser Geolocation API)",
        "Weather & AQI API Pipeline (OpenWeather REST Engine)",
        "GIS Map Renderer (Leaflet.js + Custom Dark/Light Tiles)"
      ]
    },
    keyFeatures: [
      "Auto Theme Switching: Dynamic day/night sun-moon themes based on solar elevation times.",
      "AQI Monitoring: Real-time pollutant metrics for PM2.5, PM10, CO, NO2, and O3.",
      "7-Day & Hourly Charts: Interactive forecast visualizer rendered with Chart.js."
    ],
    challenges: [
      {
        problem: "Excessive API calls triggered rate limits during user rapid city searches.",
        solution: "Implemented input debouncing (300ms delay) and cached search results in LocalStorage."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "City Search / Geolocation",
        description: "App resolves latitude and longitude coordinates from user query or browser GPS."
      },
      {
        step: 2,
        title: "Parallel API Ingestion",
        description: "Fetches current weather, 5-day forecast, and air pollution JSON endpoints concurrently."
      }
    ],
    databaseDesign: [
      {
        entity: "SearchHistory (LocalStorage)",
        description: "Stores recent user searched cities and cached JSON payloads with expiration timestamps."
      }
    ]
  },
  "neoresume": {
    id: "cs-5",
    projectId: "neoresume",
    title: "NeoResume AI Builder — Architecture Case Study",
    overview: "A futuristic single-page web application transforming traditional flat resumes into an interactive AI-style dashboard experience.",
    architecture: {
      title: "Interactive Component Pipeline & Animations",
      description: "Combines modular JS state machines with GSAP timeline triggers to render glowing chat cards and skill heatmaps.",
      diagramComponents: [
        "Interactive Dashboard UI (HTML5 + Custom Glassmorphism CSS)",
        "State Engine (Vanilla JS Event Emitter)",
        "Animation Controller (GSAP ScrollTrigger)",
        "Export Engine (Client-Side PDF Generator)"
      ]
    },
    keyFeatures: [
      "AI-Style Chat Cards: Interactive prompts allowing visitors to query career achievements.",
      "Glowing UI Highlights: Sleek neon status badges and skill progress bars.",
      "Instant PDF Export: Client-side rendering of print-ready resume documents."
    ],
    challenges: [
      {
        problem: "CSS layout breaking during mobile viewport transitions.",
        solution: "Refactored layout to mobile-first CSS Grid and Flexbox container queries."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "Card Selection",
        description: "User taps skill or project pill; state engine updates active view panel."
      }
    ],
    databaseDesign: [
      {
        entity: "ProfileState",
        description: "JSON structure containing work history, skills, and projects."
      }
    ]
  },
  "college-event-portal": {
    id: "cs-6",
    projectId: "college-event-portal",
    title: "College Event Portal — Full Stack Django Architecture",
    overview: "A full-stack web platform for managing college events, participant registrations, admin approval workflows, and live announcement feeds.",
    architecture: {
      title: "MVC Architecture with Django & MySQL",
      description: "Structured using Django MVT (Model-View-Template) pattern backed by MySQL for relational integrity and role-based access control.",
      diagramComponents: [
        "Frontend Templates (HTML5 + Bootstrap + JS)",
        "Django Web Server (Python WSGI Engine)",
        "Authentication & RBAC (Django Auth Engine)",
        "Relational Database (MySQL DBMS)"
      ]
    },
    keyFeatures: [
      "Role-Based Access Control: Admin, Event Coordinator, and Student Registration portals.",
      "Live Ticket Generation: Auto-generates registration passes with unique pass codes.",
      "Admin Analytics Dashboard: Real-time graphs for attendance numbers and revenue."
    ],
    challenges: [
      {
        problem: "Slowing DB query times when listing hundreds of registrations per event.",
        solution: "Added database indexes on event_id and student_id foreign keys, reducing query execution times by 70%."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "Event Registration Request",
        description: "Student submits registration form; Django views validate capacity and store transaction."
      }
    ],
    databaseDesign: [
      {
        entity: "Event & Registration",
        description: "Relational tables defining event schedules, seat capacities, and student registration records."
      }
    ]
  },
  "simple-pdf-image-merger": {
    id: "cs-7",
    projectId: "simple-pdf-image-merger",
    title: "Simple PDF & Image Merger — Browser Client Architecture",
    overview: "Private client-side document processing tool enabling users to merge PDF, JPG, and PNG files directly in browser without server upload.",
    architecture: {
      title: "Client-Side WASM & Canvas Engine",
      description: "Utilizes pdf-lib.js and HTML5 Canvas API to perform binary PDF manipulation and image conversion entirely in user browser memory.",
      diagramComponents: [
        "Drag & Drop File Dropzone (HTML5 File API)",
        "Image to PDF Converter (HTML5 Canvas 2D)",
        "PDF Binary Merger Engine (pdf-lib.js)",
        "Blob Downloader (Browser FileSaver Stream)"
      ]
    },
    keyFeatures: [
      "100% Client-Side Privacy: Files never leave user device.",
      "Drag & Drop Reordering: Reorder pages visually before generating final merged PDF.",
      "Multi-Format Ingestion: Merges mix of PDF, PNG, and JPEG files into single output."
    ],
    challenges: [
      {
        problem: "Browser crashing when merging large 100MB+ PDF documents.",
        solution: "Implemented chunked array buffer reading and released unused Canvas memory references."
      }
    ],
    apiFlow: [
      {
        step: 1,
        title: "File ArrayBuffer Reading",
        description: "User drops files; FileReader reads ArrayBuffers and passes payload to pdf-lib engine."
      }
    ],
    databaseDesign: [
      {
        entity: "In-Memory Blob Store",
        description: "Transient browser memory storing file bytes before final PDF generation."
      }
    ]
  }
};
