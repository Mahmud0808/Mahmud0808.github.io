import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Mahmudul Hasan Khan',
  tagline: ['Android Developer', 'Web Developer', 'Full Stack Developer'],
  description:
    'I’m a Final Year Computer Science & Engineering student at Daffodil International University, focused on Android and Web Development. I enjoy learning new skills and building interactive apps. I’m eager to grow and work well with others to turn ideas into reality.',
  specialText:
    'Currently available for job opportunities and freelance projects.',
  ctas: [
    {
      title: 'View My Resume',
      url: `/${resumeFileName}`,
      hideInDesktop: true,
      sameTab: false,
    },
    {
      title: 'Check Out My Projects',
      url: `/#projects`,
      hideInMobile: true,
      sameTab: true,
    },
    {
      title: 'Hire Me',
      url: `/#contact`,
      sameTab: true,
    },
  ],
};
