'use client';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, ProjectCard, Wrapper } from '@/components';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { m } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? projects : topProjects;

  const wrapRef = useRef<HTMLDivElement>(null);
  const prevHeight = useRef<number | null>(null);

  const handleToggle = () => {
    prevHeight.current = wrapRef.current?.offsetHeight ?? null;
    setShowMore((prev) => !prev);
  };

  useLayoutEffect(() => {
    const el = wrapRef.current;
    const prev = prevHeight.current;
    prevHeight.current = null;
    if (!el || prev == null) return;

    const next = el.offsetHeight;
    if (prev === next) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.style.overflow = 'hidden';
    const animation = el.animate(
      [{ height: `${prev}px` }, { height: `${next}px` }],
      { duration: 400, easing: 'ease-in-out' }
    );
    animation.onfinish = () => {
      el.style.overflow = '';
    };
  }, [showMore]);

  return (
    <Wrapper id="all-projects" animate={false} {...getSectionAnimation}>
      <m.h2 className="heading-secondary text-center !mb-12">
        {title}
      </m.h2>
      <div ref={wrapRef}>
        <div className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center py-2">
          {sortByYear(visibleProjects).map((project, i) => {
            if (i < PROJECTS_INITIALLY) {
              return (
                <ProjectCard
                  {...project}
                  key={project.id}
                  variants={projectVariants}
                  initial="hidden"
                  whileInView="show"
                  custom={i % 3}
                  viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                />
              );
            }

            return (
              <ProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                animate="show"
                custom={(i - PROJECTS_INITIALLY) % 3}
              />
            );
          })}
        </div>
      </div>
      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20 rounded-full"
          center
          onClick={handleToggle}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
