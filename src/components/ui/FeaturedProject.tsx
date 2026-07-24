import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import SpotlightCard from '@/components/ui/SpotlightCard';

import Icon from '@/components/ui/Icon';
import { m, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks,
  projectSkills,
  align = 'left',
  ...rest
}: Props) => {
  return (
    <m.div {...rest}>
      <SpotlightCard className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white/60 backdrop-blur-sm shadow-soft dark:bg-transparent dark:border-slate-50/10 dark:shadow-2xl">
        <article
          className={cn(
            'group flex flex-col lg:flex-row',
            align === 'left' && 'lg:flex-row-reverse'
          )}
        >
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${name}`}
            className="relative block overflow-hidden lg:w-[55%]"
          >
            <Image
              src={img}
              alt={`Screenshot of ${name}`}
              width={720}
              height={480}
              className="aspect-video h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none lg:aspect-auto"
              placeholder="blur"
              blurDataURL={blurImageURL}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </Link>

          <div className="flex flex-col gap-4 p-6 sm:p-8 lg:w-[45%] lg:p-9">
            <div className="space-y-2">
              <p className="font-mono text-xs capitalize text-accent">
                featured project
              </p>
              <h3 className="heading-tertiary !normal-case">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="duration-200 hover:text-accent"
                >
                  {name}
                </a>
              </h3>
            </div>

            <p className="text-dark-1">{description}</p>
            <p className="text-sm">{tasks}</p>

            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs capitalize text-accent">
              {projectSkills.map(({ name: skill }) => (
                <li key={skill}>{skill.replaceAll(' ', '-')}</li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-4 pt-2">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} source code on GitHub`}
                  className="block duration-200 hover:text-accent"
                >
                  <Icon icon="tabler:brand-github" width={22} height={22} />
                </a>
              )}
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${name}`}
                className="block duration-200 hover:text-accent"
              >
                <Icon icon="ci:external-link" width={24} height={24} />
              </a>
            </div>
          </div>
        </article>
      </SpotlightCard>
    </m.div>
  );
};

export default FeaturedProject;
