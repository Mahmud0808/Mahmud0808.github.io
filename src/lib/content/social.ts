import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
      name: 'Github',
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
      name: 'Instagram',
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
      name: 'Twitter',
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
      name: 'LinkedIn',
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
      name: 'Facebook',
    },
  ],
};
