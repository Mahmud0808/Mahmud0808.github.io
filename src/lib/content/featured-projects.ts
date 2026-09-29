import { FeaturedProject } from '@/lib/types';

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'iconify',
    name: 'Iconify',
    figure: '500K+ downloads',
    description:
      'Open-source Android theming app. Runtime Resource Overlays and Xposed hooks restyle the system UI without repacking OEM firmware, across a very fragmented set of Android ROMs.',
    img: '/images/projects/iconify.webp',
    stack: ['Kotlin', 'Java', 'RRO', 'Shell'],
    links: [{ kind: 'github', href: 'https://github.com/Mahmud0808/Iconify' }],
  },
  {
    id: 'colorblendr',
    name: 'ColorBlendr',
    figure: '200K+ downloads',
    description:
      'Material You colour control for Android 12 and up. Drives the system theming engine over AIDL through a privileged service, so palette changes apply live without a reboot.',
    img: '/images/projects/colorblendr.webp',
    stack: ['Kotlin', 'AIDL', 'Material You'],
    links: [
      { kind: 'github', href: 'https://github.com/Mahmud0808/ColorBlendr' },
    ],
  },
];
