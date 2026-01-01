import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building static and dynamic mobile applications.',
        'Developing responsive and scalable web solutions.',
        'Creating interactive, modern, and visually appealing user interfaces.',
      ],
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'React Native', icon: 'devicon:reactnative' },
        { name: 'C', icon: 'vscode-icons:file-type-c' },
        { name: 'C++', icon: 'vscode-icons:file-type-cpp' },
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Next.js', icon: 'vscode-icons:file-type-next' },
        { name: 'React', icon: 'logos:react' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'HTML-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
    },
    {
      id: getId(),
      title: 'UI / UX Designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Designing intuitive interfaces for mobile applications.',
        'Developing design systems and style guides for seamless user experiences.',
        'Providing user-friendly design solutions with modern design tools.',
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
