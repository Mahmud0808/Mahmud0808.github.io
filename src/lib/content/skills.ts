import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'mobile app development',
      points: [
        'Native Android with Kotlin, Jetpack Compose and Material Design 3.',
        'Cross-platform builds with Flutter, React Native and Compose Multiplatform.',
        '900K+ downloads in production, plus the user feedback that keeps me honest.',
      ],
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'Jetpack Compose', icon: 'devicon:jetpackcompose' },
        { name: 'Flutter', icon: 'logos:flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'React Native', icon: 'devicon:reactnative' },
        { name: 'Android', icon: 'logos:android-icon' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'SQLite', icon: 'vscode-icons:file-type-sqlite' },
        { name: 'Git', icon: 'logos:git-icon' },
      ],
    },
    {
      id: getId(),
      title: 'full stack web development',
      points: [
        'Frontends with Next.js, React and Tailwind that stay fast under real traffic.',
        'Backends on Node.js, Express and Spring Boot with MongoDB, MySQL and Supabase.',
        'Auth, real-time features and data models built to outlive the launch week.',
      ],
      projectSkills: [
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'React', icon: 'logos:react' },
        { name: 'Next.js', icon: 'vscode-icons:file-type-next' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Express', icon: 'simple-icons:express' },
        { name: 'Spring Boot', icon: 'logos:spring-icon' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'Prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'Supabase', icon: 'logos:supabase-icon' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'HTML-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
      ],
    },
    {
      id: getId(),
      title: 'UI / UX Designing',
      points: [
        'Interfaces designed for real thumbs, not just mockup screenshots.',
        'Design systems and style guides a team can actually follow.',
        'From Figma to production without losing the details on the way.',
      ],
      projectSkills: [
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe XD', icon: 'logos:adobe-xd' },
        { name: 'figma', icon: 'logos:figma' },
      ],
    },
  ],
};
