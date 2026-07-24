'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getYearsSince } from '@/lib/utils/helper';

import { AuthorImage, Wrapper } from '@/components';
import CountUp from '@/components/ui/CountUp';

import { getSectionAnimation } from '@/styles/animations';

const stats = [
  { to: 900, suffix: 'K+', label: 'app downloads' },
  { to: getYearsSince(2022), suffix: '+', label: 'years building' },
  { to: 1000, suffix: '+', label: 'problems solved' },
];

const About = () => {
  const { title, img, paragraphs } = aboutSection;

  return (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main>
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-16">
          <div className="order-last space-y-4 lg:order-none lg:w-3/5">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <AuthorImage src={img} alt={author.name} />
        </div>
        <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-900/10 pt-6 dark:border-slate-50/10 lg:w-3/5">
          {stats.map(({ to, suffix, label }) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="text-2xl font-medium text-dark-1 sm:text-3xl">
                <CountUp to={to} suffix={suffix} />
              </dd>
              <dd className="mt-1 font-mono text-xs text-text sm:text-sm">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </main>
    </Wrapper>
  );
};

export default About;
