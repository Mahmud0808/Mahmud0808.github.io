import Image from 'next/image';

import { LinkKind, Project } from '@/lib/types';

import { ExternalIcon } from './Icons';

const linkLabels: Record<LinkKind, string> = {
  live: 'Live',
  playstore: 'Play Store',
  github: 'GitHub',
};

const primaryOrder: LinkKind[] = ['live', 'playstore', 'github'];

const ProjectCard = ({
  project,
  hidden,
}: {
  project: Project;
  hidden: boolean;
}) => {
  const primary = primaryOrder
    .map((kind) => project.links.find((link) => link.kind === kind))
    .find(Boolean);

  return (
    <li
      className="project"
      hidden={hidden}
      style={
        { viewTransitionName: `project-${project.id}` } as React.CSSProperties
      }
    >
      <div className="shot">
        <Image
          src={project.img}
          alt={`Screenshot of ${project.name}`}
          width={700}
          height={400}
          sizes="(min-width: 80rem) 384px, (min-width: 47rem) 50vw, 100vw"
        />
      </div>
      <div className="project-head">
        <h3>
          {primary ? (
            <a href={primary.href} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <span className="year">{project.year}</span>
      </div>
      <p>{project.description}</p>
      <ul className="stack" aria-label={`${project.name} tech stack`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {project.links.length > 0 && (
        <p className="links">
          {project.links.map((link) => (
            <a
              key={link.kind}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on ${linkLabels[link.kind]} (opens in new tab)`}
            >
              {linkLabels[link.kind]} <ExternalIcon />
            </a>
          ))}
        </p>
      )}
    </li>
  );
};

export default ProjectCard;
