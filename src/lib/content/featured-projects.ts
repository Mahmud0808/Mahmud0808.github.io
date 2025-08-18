import { FeaturedProjectsSectionType } from '@/lib/types/sections';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: 'iconify',
      name: 'Iconify',
      description: 'Open-source Android theming application.',
      tasks:
        'Iconify lets you customize your Android 12+ device easily. Change icons, colors, shapes, and even the notification panel for a personalized look that suits your style.',
      url: 'https://github.com/Mahmud0808/Iconify',
      img: 'https://i.postimg.cc/26L2PSLR/iconify.png',
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
      description: 'Customize Material You colors of your device.',
      tasks:
        'An application for customizing Material You colors on devices with Android 12+. It lets you tweak accent colors, background saturation, and more for a personalized look.',
      url: 'https://github.com/Mahmud0808/ColorBlendr',
      img: 'https://i.postimg.cc/9fnL87MY/colorblendr.png',
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
