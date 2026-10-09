import type { ProjectItem } from "@/types/portfolio";

// Total commits on each public default branch, checked 9 October 2026.
export const MAJOR_PROJECTS = [
  { id: "sales-automation", commits: 474 },
  { id: "college-discovery", commits: 162 },
  { id: "civic-ai-platform", commits: 101 },
  { id: "smart-ai-lms", commits: 72 },
  { id: "docbrain-ai", commits: 53 },
  { id: "enterprise-mobility", commits: 35 },
] as const;
export const COMMIT_COUNTS_CHECKED = "2026-10-09";
export const PROJECT_UPDATES: Record<string, Partial<ProjectItem>> = {
  "sales-automation": {
    subtitle: "Multi-channel CRM & AI Sales Assistant",
    description: "A sales platform connecting lead management, email campaigns, WhatsApp conversations, and an AI sales assistant.",
    fullDescription: "Sales Automation combines a Next.js application with MongoDB-backed lead and campaign management, a BullMQ and Redis email worker, and a FastAPI AI assistant powered by Groq. Twilio connects WhatsApp and SMS conversations, while dashboards bring campaign activity and customer interactions together.",
    techStack: ["Next.js 16", "TypeScript", "MongoDB", "Redis", "BullMQ", "FastAPI", "Groq", "Twilio"],
    githubUrl: "https://github.com/lxakshaseth/sales-automation", liveUrl: "https://github.com/lxakshaseth/sales-automation",
  },
  "civic-ai-platform": {
    description: "A civic reporting platform with citizen, officer, and admin dashboards, AI-assisted complaint classification, status tracking, and analytics.",
    fullDescription: "Civic AI connects location-based citizen reports to officer and admin workflows. Its React and TypeScript frontend communicates with Node.js and Express services, alongside a Python FastAPI AI service for complaint classification and priority scoring. PostgreSQL and Redis support storage, caching, and queued processing.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/lxakshaseth/civic-ai-platform", liveUrl: "https://github.com/lxakshaseth/civic-ai-platform",
  },
  "smart-ai-lms": {
    subtitle: "AI Learning, Virtual Labs & Coding Tools",
    description: "An AI learning platform combining tutoring, OCR study support, interactive virtual labs, a browser code editor, quizzes, and progress analytics.",
    fullDescription: "Smart-LMS brings study tools, AI tutoring, virtual practical laboratories, and coding practice into one learning platform. The project uses React, Vite, TypeScript, Node.js, MongoDB, and Socket.IO, with Groq and Gemini integrations, Tesseract.js OCR, and a Monaco code editor.",
    techStack: ["React", "TypeScript", "Vite", "Node.js", "MongoDB", "Socket.IO", "Groq", "Gemini"],
    githubUrl: "https://github.com/lxakshaseth/Smart-LMS", liveUrl: "https://github.com/lxakshaseth/Smart-LMS",
  },
  "docbrain-ai": { githubUrl: "https://github.com/lxakshaseth/docbrain-ai", liveUrl: "https://github.com/lxakshaseth/docbrain-ai" },
};
export const ADDITIONAL_MAJOR_PROJECTS: ProjectItem[] = [
  {
    id: "college-discovery", title: "CampusPulse", subtitle: "College Discovery & Comparison Platform",
    description: "A college discovery platform with searchable listings, side-by-side comparisons, admission rank predictions, student reviews, and saved wishlists.",
    fullDescription: "CampusPulse helps students research and compare colleges using filters for location, rankings, fees, and ratings. It includes college detail pages, a cost and ROI estimator, comparison exports, admission rank prediction tools, community Q&A, and authenticated wishlists. Built with Next.js, TypeScript, Prisma, NextAuth, and PostgreSQL.",
    image: "/images/civic-ai-platform.jpg", category: "Full Stack", featured: true,
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    githubUrl: "https://github.com/lxakshaseth/College-Discovery-Platform", liveUrl: "https://github.com/lxakshaseth/College-Discovery-Platform",
  },
  {
    id: "enterprise-mobility", title: "Shivneri Enterprise Mobility", subtitle: "Multi-tenant Employee Transport Platform",
    description: "A corporate mobility platform for employee transportation, fleet and driver management, live tracking, safety workflows, billing, and analytics.",
    fullDescription: "Shivneri Enterprise Mobility organizes employee transportation through a multi-tenant platform. Its repository describes role and attribute-based access controls, fleet and driver management, live tracking, SOS safety, automated workflows, billing, analytics, audit controls, and AI-assisted operations.",
    image: "/images/sales-automation.jpg", category: "Full Stack", featured: true,
    techStack: ["Multi-tenancy", "RBAC / ABAC", "Live Tracking", "Workflow Automation", "Analytics"],
    githubUrl: "https://github.com/lxakshaseth/shivneri-enterprise-mobility", liveUrl: "https://github.com/lxakshaseth/shivneri-enterprise-mobility",
  },
];
