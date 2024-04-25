import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'full stack development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Building static and dynamic Android applications',
        'Developing responsive and scalable web solutions',
        'Creating interactive, modern, and visually appealing user interfaces',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'C', icon: 'vscode-icons:file-type-c' },
        { name: 'C++', icon: 'vscode-icons:file-type-cpp' },
        { name: 'java', icon: 'vscode-icons:file-type-java' },
        { name: 'kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'shell script', icon: 'vscode-icons:file-type-shell' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
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
        'Designing intuitive interfaces for mobile applications',
        'Developing design systems and style guides for seamless user experiences',
        'Providing user-friendly design solutions with modern design tools',
        ],
        softwareSkills: [
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe XD', icon: 'logos:adobe-xd' },
        { name: 'figma', icon: 'logos:figma' },
        ],
    },
    ],
};
