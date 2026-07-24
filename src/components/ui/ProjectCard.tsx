'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL, prefix } from '@/lib/utils/config';

import Icon from '@/components/ui/Icon';
import { m, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { MouseEvent, useRef } from 'react';
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
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <m.article
      {...rest}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative !z-40 hover:!z-[45] focus-within:!z-[45] flex h-full w-full max-w-none sm:max-w-[350px] flex-col rounded-2xl border border-slate-900/10 bg-white/60 backdrop-blur-sm shadow-soft dark:bg-transparent transition-transform duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5 dark:border-slate-50/10 dark:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[7/4] w-full overflow-hidden rounded-t-2xl">
        <Image
          fill
          sizes="(max-width: 640px) 100vw, 350px"
          src={`${prefix}${img}`}
          alt={`Preview of ${name}`}
          placeholder="blur"
          blurDataURL={blurImageURL}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-grow flex-col space-y-1 px-4 py-3 text-left">
        <div className="flex justify-between font-medium capitalize">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-800 duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-accent dark:text-slate-200"
          >
            {name}
          </a>
          <span className="mr-1 font-mono text-sm text-text">{year}</span>
        </div>
        <p className="text-start text-sm">{subtitle}</p>
        <div className="pt-2 font-mono text-xs capitalize">
          <div className="flex flex-wrap justify-items-start gap-2">
            {projectSkills.map(({ name: skillName, icon }) => (
              <ProjectSkillIcon key={skillName} src={icon} name={skillName} />
            ))}
          </div>
        </div>
        <div className="relative z-10 mt-auto flex space-x-4 pt-4">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} source code on GitHub`}
              className="flex items-center gap-1 rounded-sm text-sm text-text duration-200 hover:text-accent"
            >
              <Icon icon="tabler:brand-github" width={16} height={16} />
              GitHub
            </a>
          )}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} live demo`}
            className="flex items-center gap-1 rounded-sm text-sm text-text duration-200 hover:text-accent"
          >
            <Icon icon="ci:external-link" width={16} height={16} />
            Demo
          </a>
        </div>
      </div>
    </m.article>
  );
};

export default ProjectCard;
