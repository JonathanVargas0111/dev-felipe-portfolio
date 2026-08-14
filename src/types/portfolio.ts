export type ProjectCategory = 'all' | 'webstark' | 'personal' | 'ai-automation' | 'ecommerce';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'webstark' | 'personal' | 'client';
  tags: string[];
  featured: boolean;
  company?: {
    name: string;
    location: string;
    url?: string;
    isOwner: boolean; // false for Web Stark
    role: string;
    commitsCount?: number;
  };
  overview: {
    en: string;
    es: string;
  };
  challenge: {
    en: string;
    es: string;
  };
  solution: {
    en: string;
    es: string;
  };
  keyFeatures: {
    en: string[];
    es: string[];
  };
  architectureHighlights: {
    en: string[];
    es: string[];
  };
  metrics: ProjectMetric[];
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
    isPrivate?: boolean;
  };
  image: string;
  mockupType: 'browser' | 'code' | 'dashboard' | 'mobile' | 'extension';
  year: string;
  period: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: {
    en: string;
    es: string;
  };
  company: string;
  location: string;
  type: 'full-time' | 'freelance' | 'internship' | 'education';
  description: {
    en: string;
    es: string;
  };
  achievements: {
    en: string[];
    es: string[];
  };
  technologies: string[];
  link?: string;
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    es: string;
  };
  iconName: string;
  description: {
    en: string;
    es: string;
  };
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    highlight?: string;
  }[];
}
