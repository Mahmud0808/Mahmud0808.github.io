import { roles } from '@/lib/content/experience';
import { formatDuration, formatYearMonth } from '@/lib/utils/helper';

import Duration from '@/components/Duration';

const Experience = () => (
  <section className="section" id="experience" aria-labelledby="experience-h">
    <h2 id="experience-h">Experience</h2>
    <ol className="timeline">
      {roles.map((role) => (
        <li key={`${role.title}-${role.start}`}>
          <p className="when">
            <time className="when-years" dateTime={role.start}>
              {formatYearMonth(role.start)}
            </time>
            <span className="when-detail">
              Present ·{' '}
              <Duration
                start={role.start}
                initial={formatDuration(role.start)}
              />
            </span>
          </p>
          <div className="role">
            <h3>{role.title}</h3>
            <p className="org">
              {role.orgUrl ? (
                <a href={role.orgUrl} target="_blank" rel="noopener noreferrer">
                  {role.org}
                </a>
              ) : (
                role.org
              )}{' '}
              <span>· {role.meta}</span>
            </p>
            <ul>
              {role.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
