import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'Play.Partners',
      companyUrl: 'https://linkedin.com/company/play-partners',
      role: 'mobile app developer',
      started: 'april 2025',
      upto: 'present',
      tasks: [
        'Building exciting mobile games from scratch with Kotlin, Jetpack Compose, and ViewModels.',
        'Integrating WebView with Firebase, Appsflyer, OneSignal, and Facebook SDK to boost functionality.',
        'Improving code quality and user experience through continuous feedback and updates.',
      ],
    },
    {
      company: 'Fiverr',
      companyUrl: 'https://www.fiverr.com/drdisagree',
      role: 'self employed',
      started: 'march 2025',
      upto: 'present',
      tasks: [
        'Created a vehicle catalog app for a popular combat game with 5K+ downloads and 200+ 5-star ratings.',
        'Developed a full-stack job portal application using Spring Boot, Java, Firebase, and PostgreSQL.',
        'Delivered numerous other custom software solutions to clients with focus on quality, scalability, and performance.',
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
