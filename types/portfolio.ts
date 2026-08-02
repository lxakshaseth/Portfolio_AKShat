export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon?: string;
    popular?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string; // Full-time, Remote, Contract
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  category: "Full Stack" | "AI & Cloud" | "Systems & Web3";
  featured: boolean;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  metrics?: { label: string; value: string }[];
}

export interface CaseStudy {
  id: string;
  projectId: string;
  title: string;
  overview: string;
  architecture: {
    title: string;
    description: string;
    diagramComponents: string[];
  };
  keyFeatures: string[];
  challenges: {
    problem: string;
    solution: string;
  }[];
  apiFlow: {
    step: number;
    title: string;
    description: string;
  }[];
  databaseDesign: {
    entity: string;
    description: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  achieved: string;
  challenge: string;
  approach: string;
}

export interface GitHubData {
  username: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalCommits: number;
  contributionsThisYear: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  pinnedRepos: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
  }[];
}
