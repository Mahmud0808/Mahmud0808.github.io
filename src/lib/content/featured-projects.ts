import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Iconify',
      description: 'Free and open-source android customizer application.',
      tasks: 'Iconify lets you customize your Android 12+ device easily. Change icons, colors, shapes, and even the notification panel for a personalized look that suits your style.',
      url: 'https://github.com/Mahmud0808/Iconify',
      img: 'https://i.postimg.cc/VzTtxw2M/iconify.png',
      tags: ['Kotlin', 'Java', 'Runtime Resource Overlay', 'Shell Scripting'],
    },
    {
      id: getId(),
      name: 'ColorBlendr',
      description: 'Customize Material You colors of your device.',
      tasks: 'An Android app for customizing Material You colors on devices with Android 12+. It lets you tweak accent colors, background saturation, and more for a personalized look.',
      url: 'https://github.com/Mahmud0808/ColorBlendr',
      img: 'https://i.postimg.cc/ZmjNmrk4/colorblendr.png',
      tags: ['Java', 'AIDL', 'Material You', 'Color Theory'],
    },
  ],
};

export default featuredProjectsSection;
