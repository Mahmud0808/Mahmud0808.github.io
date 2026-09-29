export type LinkKind = 'github' | 'playstore' | 'live';

export type ProjectLink = {
  kind: LinkKind;
  href: string;
};

export type Platform = 'mobile' | 'web' | 'other';

export type Project = {
  id: string;
  name: string;
  description: string;
  year: number;
  img: string;
  platform: Platform;
  stack: string[];
  links: ProjectLink[];
};

export type FeaturedProject = {
  id: string;
  name: string;
  figure: string;
  description: string;
  img: string;
  stack: string[];
  links: ProjectLink[];
};

export type Role = {
  title: string;
  org: string;
  orgUrl?: string;
  meta: string;
  start: string;
  tasks: string[];
};

export type Discipline = {
  title: string;
  description: string;
  stack: string[];
};

export type Review = {
  client: string;
  source: string;
  country: string;
  quote: string;
};

export type Fact = {
  label: string;
  value: string;
  abbr?: { text: string; title: string };
};

export type SocialLink = {
  name: 'GitHub' | 'LinkedIn' | 'X (Twitter)' | 'Instagram' | 'Facebook';
  href: string;
};
