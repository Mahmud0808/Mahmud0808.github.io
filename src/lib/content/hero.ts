import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Mahmudul Hasan Khan',
    tagline: 'I code Android apps and design websites.',
    description:
    "I’m a Final Year Computer Science Engineering Student at DIU, Ashulia. Primarily interested in Android and Web Development.\n\nI enjoy learning new skills and implementing them in real life!",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};