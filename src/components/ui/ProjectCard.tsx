'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL, prefix } from '@/lib/utils/config';

import ExpandableText from '@/components/ui/ExpandableText';
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
  playstore,
  year,
  img,
  projectSkills,
  ...rest
}: ProjectType & MotionProps) => {
  const cardRef = useRef<HTMLElement>(null);

  const links = [
    playstore && {
      href: playstore,
      icon: 'mage:playstore',
      label: 'Play Store',
      description: 'listing on Google Play',
    },
    repo && {
      href: repo,
      icon: 'tabler:brand-github',
      label: 'GitHub',
      description: 'source code on GitHub',
    },
    url && {
      href: url,
      icon: 'ci:external-link',
      label: 'Demo',
      description: 'live demo',
    },
  ].filter(Boolean) as {
    href: string;
    icon: string;
    label: string;
    description: string;
  }[];

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
      className="spotlight-card group relative !z-40 hover:!z-[45] focus-within:!z-[45] flex h-auto w-full max-w-none xs:w-auto xs:grow xs:basis-[300px] sm:max-w-[350px] flex-col rounded-2xl border border-slate-900/10 bg-white/60 backdrop-blur-sm shadow-soft dark:bg-transparent transition-transform duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5 dark:border-slate-50/10 dark:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
      <div className="flex flex-grow flex-col px-5 py-4 text-left">
        <div className="flex items-baseline justify-between gap-3 font-medium capitalize">
          <h3 className="text-slate-800 dark:text-slate-200">{name}</h3>
          <span className="shrink-0 font-mono text-sm text-text/70">
            {year}
          </span>
        </div>
        {subtitle && (
          <div className="mt-2">
            <ExpandableText
              text={subtitle}
              lines={2}
              className="text-pretty text-start text-[13px] leading-relaxed text-slate-600 dark:text-slate-400"
            />
          </div>
        )}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            {projectSkills.map(({ name: skillName, icon }) => (
              <ProjectSkillIcon key={skillName} src={icon} name={skillName} />
            ))}
          </div>
          {links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-900/10 pt-3 dark:border-slate-50/10">
              {links.map(({ href, icon, label, description }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} ${description}`}
                  className="flex items-center gap-1 rounded-sm text-sm text-text duration-200 hover:text-accent"
                >
                  <Icon icon={icon} width={16} height={16} />
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </m.article>
  );
};

export default ProjectCard;
