'use client';
import { skillsSection } from '@/lib/content/skills';
import { SkillType } from '@/lib/types';

import { ListItem, Wrapper } from '@/components';
import FigmaEditVisual from '@/components/ui/FigmaEditVisual';
import OrbitVisual from '@/components/ui/OrbitVisual';
import SpotlightCard from '@/components/ui/SpotlightCard';

import { getSectionAnimation } from '@/styles/animations';

import Icon from '@/components/ui/Icon';

const pick = (skills: SkillType[], names: string[]) =>
  names
    .map((name) => skills.find((skill) => skill.name === name))
    .filter(Boolean) as SkillType[];

const Skills = () => {
  const { title, skills } = skillsSection;
  const [mobile, web, design] = skills;

  const mobileInner = pick(mobile.projectSkills, [
    'Kotlin',
    'Jetpack Compose',
    'Flutter',
    'Java',
  ]);
  const mobileOuter = pick(mobile.projectSkills, [
    'Dart',
    'React Native',
    'Android',
    'Firebase',
    'SQLite',
    'Git',
  ]);
  const webInner = pick(web.projectSkills, [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
  ]);
  const webOuter = pick(web.projectSkills, [
    'JavaScript',
    'Tailwind CSS',
    'Express',
    'MongoDB',
    'MySQL',
    'Supabase',
  ]);

  const cards = [
    {
      skill: mobile,
      visual: (
        <OrbitVisual
          inner={mobileInner}
          outer={mobileOuter}
          centerIcon="tabler:device-mobile"
        />
      ),
    },
    {
      skill: web,
      visual: (
        <OrbitVisual inner={webInner} outer={webOuter} centerIcon="tabler:code" />
      ),
    },
    { skill: design, visual: <FigmaEditVisual /> },
  ];

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="space-y-6 lg:space-y-8">
        {cards.map(({ skill, visual }, i) => (
          <SpotlightCard
            key={skill.id}
            className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white/60 backdrop-blur-sm shadow-soft dark:bg-transparent dark:border-slate-50/10 dark:shadow-2xl"
          >
            <div
              className={`flex flex-col-reverse lg:flex-row ${
                i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex flex-1 flex-col gap-6 p-7 sm:p-10">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-accent"
                  >{`0${i + 1}`}</span>
                  <h3 className="text-2xl capitalize text-dark-2 sm:text-3xl">
                    {skill.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-base">
                  {skill.points.map((point) => (
                    <ListItem key={point} multiLine>
                      {point}
                    </ListItem>
                  ))}
                </ul>
                <ul className="mt-auto flex flex-wrap gap-2 border-t border-slate-900/10 pt-6 dark:border-slate-50/10">
                  {skill.projectSkills.map(({ name, icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-1.5 rounded-full border border-slate-900/10 px-3 py-1.5 font-mono text-xs capitalize text-text duration-200 hover:border-accent/50 hover:text-accent dark:border-slate-50/10"
                    >
                      <Icon icon={icon} width={14} height={14} aria-hidden="true" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative grid min-h-[300px] place-items-center overflow-hidden p-6 sm:min-h-[360px] lg:w-[44%]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--panel-glow),transparent_65%)]"
                />
                {visual}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
