export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  category: 'frontend' | 'fullstack' | 'api';
  statusLabel?: string; // e.g. "Ongoing / Concept"
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface TrainingItem {
  title: string;
  organization: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
  highlights: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  platform: string;
  date: string;
}

export interface AchievementItem {
  stat: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade: string;
  period: string;
  location: string;
}
