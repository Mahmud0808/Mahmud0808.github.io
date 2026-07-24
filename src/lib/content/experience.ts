import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'International Software Team',
      companyUrl: '',
      role: 'Senior Mobile & Web Developer (Contract)',
      started: 'april 2025',
      upto: 'present',
      tasks: [
        'Work remotely with a distributed team, shipping several production apps under contract.',
        'Turned existing websites into full mobile app experiences across different industries.',
        'Wrote 2D games from scratch - custom physics and gameplay mechanics included.',
        'Built the internal web platform the team uses to manage and monitor its production pipeline.',
        'Started junior, now senior. I own architecture decisions, feature planning and technical direction.',
      ],
    },
    {
      company: 'Fiverr',
      companyUrl: 'https://www.fiverr.com/drdisagree',
      role: 'Self-employed | Full Stack Developer',
      started: 'march 2025',
      upto: 'present',
      tasks: [
        'Built a vehicle catalog app for a popular combat game - 10K+ downloads, 200+ five-star ratings.',
        'Developed a full-stack job portal with Spring Boot, Java, Firebase and PostgreSQL.',
        'Made a family networking app with family tree visualization and private sharing.',
        'Most of my clients come back for the next project. That’s the metric I care about.',
      ],
    },
    {
      company: 'GitHub',
      companyUrl:
        'https://github.com/Mahmud0808?tab=overview#activities--stats',
      role: 'open-source contributor',
      started: 'april 2023',
      upto: 'present',
      tasks: [
        'Migrated MRT Buddy - the Dhaka MRT Pass companion app - from Material Design 2 to 3 and added dynamic color support.',
        'Fix bugs, add features and review code across a range of open-source projects.',
      ],
    },
  ],
};
