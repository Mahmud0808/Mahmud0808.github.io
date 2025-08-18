import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'Fiverr',
      companyUrl: 'https://www.fiverr.com/drdisagree',
      role: 'Self employed | Full Stack Developer',
      started: 'march 2025',
      upto: 'present',
      tasks: [
        'Created a vehicle catalog app for a popular combat game with 10K+ downloads and 200+ 5-star ratings.',
        'Developed a full-stack job portal application using Spring Boot, Java, Firebase, and PostgreSQL.',
        'Built a social media style family networking app featuring family tree visualization and private sharing.',
        'Provided custom software development services to long-term clients, ensuring quality and reliability.',
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
        'Contributed to MRT Buddy, a companion app for Dhaka MRT Pass, migrating UI from Material Design 2 to Material Design 3 and implementing dynamic color options for improved user experience.',
        'Collaborated on various other open-source projects, contributing bug fixes, adding features, improving code quality, and actively participating in code reviews and discussions.',
      ],
    },
  ],
};
