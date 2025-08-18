import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { Metadata } from 'next';
import type { NextPage } from 'next';

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
