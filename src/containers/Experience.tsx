'use client';
import { TabList } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { m } from 'framer-motion';

const Experience = () => {
  return (
    <m.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <TabList experiences={experienceSection.experiences} />
    </m.section>
  );
};

export default Experience;
