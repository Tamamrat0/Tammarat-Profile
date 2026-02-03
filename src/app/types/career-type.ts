import { ProjectItem } from "./project-type";

export interface CareerItem {
  id:string;
  companyName: string;
  companyLogo?: string;
  position: string;
  period: {
    start: string; // e.g. "Jan 2022"
    end?: string; // e.g. "Present"
  };
  jobExperience: string[];
  jobSuccess?: JobSuccess[];
  projects?: ProjectItem[];
}

export interface JobSuccess {
  id:string;
  imagePath?: string;
  detail: string;
}
