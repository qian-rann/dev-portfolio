export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'core' | 'tools' | 'frontend';
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  blog?: string;
}

export interface PersonalInfo {
  name: string;
  headline: string;
  shortBio: string;
  fullBio: string;
  avatarUrl: string;
}
