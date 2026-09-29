import Image from 'next/image';

import { featuredProjects } from '@/lib/content/featured-projects';
import { githubRepos } from '@/lib/content/portfolio';
import { projects } from '@/lib/content/projects';
import { sortByYear } from '@/lib/utils/helper';

import { NewTab } from '@/components/Icons';
import ProjectGallery from '@/components/ProjectGallery';
import TechStack from '@/components/TechStack';
import WithAbbr from '@/components/WithAbbr';

const Work = () => (
  <section className="section" id="work" aria-labelledby="work-h">
    <div className="section-head">
      <h2 id="work-h">Selected work</h2>
      <a href={githubRepos} target="_blank" rel="noopener noreferrer">
        All projects on GitHub <NewTab />
      </a>
    </div>
    <div className="featured">
      {featuredProjects.map((project) => {
        const source = project.links.find((link) => link.kind === 'github');
        return (
          <article className="feature" key={project.id}>
            <a
              className="shot"
              href={source?.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={project.img}
                alt=""
                width={1200}
                height={675}
                sizes="(min-width: 80rem) 680px, (min-width: 52rem) 55vw, 100vw"
              />
            </a>
            <div className="feature-body">
              <p className="figure-num">{project.figure}</p>
              <h3>{project.name}</h3>
              <p>
                <WithAbbr text={project.description} />
              </p>
              <TechStack
                items={project.stack}
                label={`${project.name} tech stack`}
              />
              {source && (
                <p className="meta-row">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source on GitHub <NewTab />
                  </a>
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
    <ProjectGallery projects={sortByYear(projects)} />
  </section>
);

export default Work;
