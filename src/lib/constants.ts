// Shared constants and configuration
export const SITE_CONFIG = {
  name: 'ProjectKaro',
  /** Common spaced spelling people search on Google */
  alternateName: 'Project Karo',
  alternateNames: ['Project Karo', 'Project Karo India', 'project karo'] as const,
  description:
    'ProjectKaro — also known as Project Karo — is a professional web development and student project studio in India. We build websites, full-stack applications, portfolio sites, startup MVPs, and complete academic projects with fixed pricing and on-time delivery.',
  url: 'https://projectkaro.com',
  ogImage: '/opengraph-image',
  locale: 'en_IN',
  twitterHandle: '@projectkaro',
} as const;

/** Brand + service keywords for metadata (SEO, entity, brand SERP) */
export const BRAND_KEYWORDS = [
  'ProjectKaro',
  'Project Karo',
  'Project Karo India',
  'project karo',
  'project karo website',
  'project karo student projects',
  'project karo web development',
  'ProjectKaro India',
] as const;

export const SEO_KEYWORDS = [
  ...BRAND_KEYWORDS,
  'web development india',
  'website development service',
  'student major project help',
  'student minor project',
  'full stack application development',
  'startup mvp development',
  'business website',
  'portfolio website',
  'ai solutions',
  'research project assistance',
  'technical consulting',
  'final year project',
  'college project help',
  'academic project delivery',
] as const;

export const CONTACT_INFO = {
  email: 'contact@projectkaro.com',
  responseTime: '24 hours',
} as const;

export const ANALYTICS = {
  googleAnalyticsId: 'G-QETZ1MQ5EC',
} as const;

export const SERVICE_TYPES = [
  'Website Development',
  'Personal Portfolio Website',
  'Full Stack Application',
  'AI Solution',
  'Student Major Project',
  'Student Minor Project',
  'Research Project',
  'Startup MVP Development',
  'Business Website',
  'Technical Consulting',
] as const;

export const SUPPORTED_DOMAINS = [
  'Web Development',
  'Full Stack',
  'Artificial Intelligence',
  'Machine Learning',
  'IoT & Embedded Systems',
  'Mobile Development',
  'Data Science',
  'Computer Science',
  'Electronics & Hardware',
  'Mechanical Engineering',
] as const;
