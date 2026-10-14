export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  stack: string[];
  github?: string;
  live?: string;
  /** Shown in the large "Featured" grid when true, otherwise in the compact list. */
  featured: boolean;
  note?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  grade: string;
  logo: string;
}

export interface Credential {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}
