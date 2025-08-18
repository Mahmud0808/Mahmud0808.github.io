'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL, prefix } from '@/lib/utils/config';
import { getId } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ProjectSkillIcon from '../projects/ProjectSkillIcon';

const ProjectCard = ({
  id,
  name,
  subtitle,
  url,
  repo,
  year,
  img,
  projectSkills,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div
      {...rest}
      className="w-full max-w-[350px] !z-40 flex flex-col h-full"
      id={id}
    >
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url, '_blank');
        }}
        className="flex flex-col h-full w-full rounded-md shadow-xl bg-bg-secondary dark:shadow-2xl group"
      >
        <div className="overflow-hidden relative w-full h-[200px] rounded-t-md">
          <Image
            fill
            src={`${prefix}${img}`}
            alt={name}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
          />
        </div>
        <div className="px-4 py-3 space-y-1 rounded-b-md flex flex-col flex-grow">
          <>
            <div className="flex justify-between font-medium capitalize">
              <span className="text-slate-800 dark:text-slate-200 duration-200 group-hover:text-accent">
                {name}
              </span>
              <span className="mr-1">{year}</span>
            </div>
            <p className="text-start text-sm">{subtitle}</p>
            <div className="font-mono text-xs capitalize pt-2">
              <div
                key={getId()}
                className="flex flex-wrap justify-items-start gap-2"
              >
                {projectSkills.map(({ name, icon }) => (
                  <ProjectSkillIcon key={getId()} src={icon} name={name} />
                ))}
              </div>
            </div>
          </>
          <div className="flex space-x-4 pt-4 mt-auto">
            <a
              href={repo}
              className="flex items-center gap-1 duration-200 text-text hover:text-accent rounded-sm text-sm"
              target="_blank"
            >
              <Icon icon="tabler:brand-github" width={16} height={16} />
              GitHub
            </a>
            <a
              href={url}
              className="flex items-center gap-1 duration-200 text-text hover:text-accent rounded-sm text-sm"
              target="_blank"
            >
              <Icon icon="ci:external-link" width={16} height={16} />
              Demo
            </a>
          </div>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
