import { disciplines } from '@/lib/content/skills';

import TechStack from '@/components/TechStack';

const Skills = () => (
  <section className="section" id="skills" aria-labelledby="skills-h">
    <h2 id="skills-h">What I do</h2>
    <div className="skills">
      {disciplines.map((discipline) => (
        <article className="skill" key={discipline.title}>
          <h3>{discipline.title}</h3>
          <p>{discipline.description}</p>
          <TechStack
            items={discipline.stack}
            label={`${discipline.title} tools`}
            withIcons
          />
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
