export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
  name: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: Date | string;
  upto: Date | 'present' | string;
  tasks: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  subtitle?: string;
  url?: string;
  year: number;
  img: string;
  repo?: string;
  playstore?: string;
  projectSkills: SkillType[];
};

export interface FeaturedProjectType
  extends Omit<ProjectType, 'year' | 'repo' | 'url'> {
  description: string;
  url: string;
  repo?: string;
  tasks?: string;
}

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SkillType = { name: string; icon: string };

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
