import { Hero, Layout } from '@/containers';
import dynamic from 'next/dynamic';

import type { Metadata } from 'next';
import type { NextPage } from 'next';

const About = dynamic(() => import('@/containers/About'));
const Skills = dynamic(() => import('@/containers/Skills'));
const Experience = dynamic(() => import('@/containers/Experience'));
const FeaturedProjects = dynamic(() => import('@/containers/FeaturedProjects'));
const Projects = dynamic(() => import('@/containers/Projects'));
const Contact = dynamic(() => import('@/containers/Contact'));

export const metadata: Metadata = {
  robots: { index: true, follow: true },
  other: {
    "google-site-verification": "tuEELxkE7zuw6YSzuesy_71LuYE_C22T0qurgD-mFFg",
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
