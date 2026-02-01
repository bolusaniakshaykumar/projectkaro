// Shared TypeScript types and interfaces
export interface ProjectType {
  id: string;
  title: string;
  description: string;
  category: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  description: string;
  deadline?: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}