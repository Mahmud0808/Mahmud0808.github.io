import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m open to remote roles, contract work and projects worth doing well.',
    'Want to talk through an idea - or just say hi? My inbox is open.',
  ],
  link: `mailto:${author.email}`,
};
