import { FeaturedProjectsSectionType } from '@/lib/types/sections';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: 'iconify',
      name: 'Iconify',
      description: 'Open-source Android theming application.',
      tasks:
        'Built on Runtime Resource Overlays and Xposed hooks to restyle system UI without repacking OEM firmware - shipped across wildly fragmented Android ROMs with 500K+ downloads.',
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
        'Drives Android’s Material You theming engine directly over AIDL through a privileged system service, applying live palette changes without a reboot - 200K+ downloads.',
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
