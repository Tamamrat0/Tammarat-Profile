import { StackName } from "./stack-type";

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  link?: string;
  overview?: string[];
  role?: string[];
  background?: string[];
  problem?: string[];
  solve?:string[];
  techStack?: StackName[];
  attachments?: Attachments[];
}

export interface Attachments {
  imagePath?: string;
  detail: string;
}
