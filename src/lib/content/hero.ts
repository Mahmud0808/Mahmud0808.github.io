import { HeroSectionType } from '@/lib/types/sections';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Mahmudul Hasan Khan',
  tagline: ['Mobile App Developer', 'Web Developer', 'Full Stack Developer'],
  description:
    'Software engineer from Dhaka. My Android apps have pulled in close to a million downloads, and my web work runs in production for real clients. I care about the details most people scroll past.',
  specialText: 'Available for full-time roles & freelance projects',
  ctas: [
    {
      title: 'Check Out My Work',
      url: `/#projects`,
      sameTab: true,
    },
    {
      title: 'Hire Me',
      url: `/#contact`,
      sameTab: true,
    },
  ],
};
