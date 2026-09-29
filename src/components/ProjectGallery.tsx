'use client';

import { useState } from 'react';

import { Platform, Project } from '@/lib/types';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { withTransition } from '@/lib/utils/transition';

import ProjectCard from './ProjectCard';

type Filter = 'all' | Platform;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'web', label: 'Web' },
  { value: 'other', label: 'Other' },
];

const ProjectGallery = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState(false);

  const matches = projects.filter(
    (project) => filter === 'all' || project.platform === filter
  );
  const matchIds = new Set(matches.map((project) => project.id));
  const shownIds = new Set(
    (expanded ? matches : matches.slice(0, PROJECTS_INITIALLY)).map(
      (project) => project.id
    )
  );
  const count = (value: Filter) =>
    value === 'all'
      ? projects.length
      : projects.filter((project) => project.platform === value).length;

  return (
    <div className="gallery">
      <div className="filters" role="group" aria-label="Filter projects">
        {filters
          .filter(({ value }) => count(value) > 0)
          .map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="btn"
              aria-pressed={filter === value}
              onClick={() => withTransition(() => setFilter(value))}
            >
              {label} {count(value)}
            </button>
          ))}
      </div>
      <ul className="projects" id="project-list" aria-live="polite">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            hidden={!matchIds.has(project.id) || !shownIds.has(project.id)}
          />
        ))}
      </ul>
      {matches.length > PROJECTS_INITIALLY && (
        <button
          type="button"
          className="btn more-toggle"
          aria-expanded={expanded}
          aria-controls="project-list"
          style={
            { viewTransitionName: 'projects-toggle' } as React.CSSProperties
          }
          onClick={() => withTransition(() => setExpanded((open) => !open))}
        >
          {expanded ? 'Show fewer' : `Show all ${matches.length} projects`}
        </button>
      )}
    </div>
  );
};

export default ProjectGallery;
