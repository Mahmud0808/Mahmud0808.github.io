import { AboutSectionType } from '@/lib/types/sections';
import { getYearsSince } from '@/lib/utils/helper';

const years = getYearsSince(2022);
const yearsWord = 'one two three four five six seven eight nine ten'.split(' ')[
  years - 1
];
const yearsPhrase = yearsWord ? `over ${yearsWord} years` : `${years}+ years`;

export const aboutSection: AboutSectionType = {
  title: 'about me',
  paragraphs: [
    `I’m a software engineer from Dhaka with ${yearsPhrase} of experience in mobile development. Most of my work is native Android, built with Kotlin, Java and Jetpack Compose, and I also ship cross-platform apps with Flutter and React Native. I like working close to the platform, from system-level customization and AIDL to architecture that stays easy to maintain as a project grows. That approach has paid off: my apps are closing in on a million downloads.`,
    'On the web I build full-stack products with Next.js, React and Node.js, handling everything from the interface down to APIs, authentication and data. I’m also fluent in modern AI tooling, from coding agents to CLI tools and LLM-powered workflows, and I know where it fits into serious engineering work and where it doesn’t.',
    'Before any of that, I spent years in competitive programming and open source. Both stuck: I still maintain my own projects, contribute to others and take on contract work for long-term clients.',
  ],
  img: '/images/mahmudul-hasan.webp',
};
