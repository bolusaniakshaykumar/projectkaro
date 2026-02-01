// Shared constants and configuration
export const SITE_CONFIG = {
  name: 'ProjectKaro',
  description: 'ProjectKaro helps engineering students and beginners build and complete real-world projects.',
  url: 'https://projectkaro.com',
  ogImage: '/og-image.jpg',
} as const;

export const CONTACT_INFO = {
  email: 'hello@projectkaro.com',
  responseTime: '24-48 hours',
} as const;

export const PROJECT_TYPES = [
  'College Mini Projects',
  'Final-Year Projects',
  'Portfolio Projects',
  'IoT Projects',
] as const;

export const SUPPORTED_DOMAINS = [
  'Electronics',
  'Computer Science',
  'Mechanical',
  'Civil',
  'Electrical',
  'Biomedical',
] as const;