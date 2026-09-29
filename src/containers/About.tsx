import { about } from '@/lib/content/about';

import WithAbbr from '@/components/WithAbbr';

const About = () => (
  <section className="section" id="about" aria-labelledby="about-h">
    <h2 id="about-h">About</h2>
    <div className="about">
      <div className="prose">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>
            <WithAbbr text={paragraph} />
          </p>
        ))}
      </div>
      <dl className="facts">
        {about.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>
              {fact.abbr && (
                <abbr title={fact.abbr.title}>{fact.abbr.text}</abbr>
              )}
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default About;
