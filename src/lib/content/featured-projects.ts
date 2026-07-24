import { FeaturedProjectsSectionType } from '@/lib/types/sections';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: 'iconify',
      name: 'Iconify',
      description: 'Open-source Android theming application.',
      tasks:
        'Iconify gives Android 12+ owners full control of their system look - icons, colors, shapes, even the notification panel. No two setups end up alike.',
      url: 'https://github.com/Mahmud0808/Iconify',
      img: '/images/projects/iconify.webp',
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'Runtime Resource Overlay', icon: 'grommet-icons:resources' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
      ],
    },
    {
      id: 'colorblendr',
      name: 'ColorBlendr',
      description: 'Material You color control for Android 12+.',
      tasks:
        'ColorBlendr rewires Material You theming on Android 12+. Tweak accent colors, background saturation and more - straight from one clean interface.',
      url: 'https://github.com/Mahmud0808/ColorBlendr',
      img: '/images/projects/colorblendr.webp',
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'AIDL', icon: 'logos:android-icon' },
        { name: 'Material You', icon: 'logos:material-ui' },
        { name: 'Color Theory', icon: 'unjs:theme-colors' },
      ],
    },
  ],
};

export default featuredProjectsSection;
