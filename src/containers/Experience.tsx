'use client';
import { ListItem } from '@/components';
import SpotlightCard from '@/components/ui/SpotlightCard';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { m } from 'framer-motion';

const Experience = () => {
  const { title, experiences } = experienceSection;

  return (
    <m.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{title}</h2>
      <ol className="relative ml-2.5 space-y-8 border-l border-slate-900/10 dark:border-slate-50/10 sm:ml-3">
        {experiences.map(
          ({ role, company, companyUrl, started, upto, tasks }, i) => (
            <li key={company} className="relative pl-6 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[5.5px] top-9 flex h-2.5 w-2.5 sm:top-[42px]"
              >
                {i === 0 && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden" />
                )}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
              </span>
              <SpotlightCard className="rounded-2xl border border-slate-900/10 bg-white/60 shadow-soft backdrop-blur-sm dark:border-slate-50/10 dark:bg-transparent dark:shadow-2xl">
                <div className="space-y-4 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="text-lg font-medium capitalize text-dark-2">
                      {role}{' '}
                      {companyUrl ? (
                        <a
                          href={companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="link-sweep text-accent"
                        >
                          @{company}
                        </a>
                      ) : (
                        <span className="text-accent">@{company}</span>
                      )}
                    </h3>
                    <p className="rounded-full border border-slate-900/10 px-3 py-1 font-mono text-xs capitalize text-text dark:border-slate-50/10">
                      {String(started)} - {String(upto)}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm md:text-base">
                    {tasks.map((task, taskIndex) => (
                      <ListItem key={taskIndex} multiLine>
                        {task}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </li>
          )
        )}
      </ol>
    </m.section>
  );
};

export default Experience;
