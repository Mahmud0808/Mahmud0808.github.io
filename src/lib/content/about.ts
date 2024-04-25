import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few languages I’ve been working with recently:',
    items: [
        'Kotlin',
        'C',
        'Java',
        'C++',
        'Python',
        'HTML',
        'JavaScript',
        'CSS',
        'Node.js',
        'PHP',
        'React.js',
        'MySQL'
    ],
    },
    img: '/mahmudul-hasan.png',
};