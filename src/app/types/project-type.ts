export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  overview?: string[];
  role?: string[];
  background?: string[];
  problem?: string[];
  techStack?: string[];
  attachments?: Attachments[];
}

export interface Attachments {
  imagePath?: string;
  detail: string;
}
