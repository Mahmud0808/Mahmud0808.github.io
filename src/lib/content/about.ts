import { Fact } from '@/lib/types';

export const about = {
  paragraphs: [
    'I’ve been building for mobile since 2022, mostly native Android in Kotlin, Java and Jetpack Compose. For cross-platform work I use Compose Multiplatform, plus Flutter and React Native when a project calls for them. I care about clean architecture that stays easy to maintain as an app grows.',
    'On the web I build full-stack products with Next.js, React and Node.js, from the interface down to APIs, authentication and data. AI tooling (coding agents, CLI tools and LLM workflows) is part of my everyday engineering.',
    'Before all of that came years of competitive programming and open source. I still maintain my own projects, contribute to other people’s, and take on contract work for long-term clients.',
  ],
  facts: [
    { label: 'App downloads', value: '1M+' },
    { label: 'Building since', value: '2022' },
    { label: 'Competitive programming problems', value: '1,000+' },
    {
      label: 'Time zone',
      value: '+6',
      abbr: { text: 'UTC', title: 'Coordinated Universal Time' },
    },
  ] as Fact[],
};

export const abbreviations: Record<string, string> = {
  AIDL: 'Android Interface Definition Language',
  RRO: 'Runtime Resource Overlay',
};
