import { hero } from '@/lib/content/hero';
import { author, resume } from '@/lib/content/portfolio';
import { prefix } from '@/lib/utils/config';

import Portrait from '@/components/Portrait';

const Hero = () => (
  <section className="intro" id="intro" aria-labelledby="name">
    <h1 className="name" id="name">
      <span>{hero.firstName}</span>
      <br />
      <span>{hero.lastName}</span>
    </h1>
    <div className="intro-copy">
      <p className="lede">{hero.lede}</p>
      <p className="status">
        <span className="dot" aria-hidden="true" />
        {hero.status}
      </p>
      {hero.now && (
        <p className="now">
          <b>Now</b> <span>{hero.now}</span>
        </p>
      )}
      <div className="actions">
        <a className="btn primary" href={`mailto:${author.email}`}>
          Email me
        </a>
        <a
          className="btn"
          href={`${prefix}${resume.file}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume (PDF)
        </a>
      </div>
    </div>
    <figure className="portrait">
      <Portrait label={author.name} />
    </figure>
  </section>
);

export default Hero;
