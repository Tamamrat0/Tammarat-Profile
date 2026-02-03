export interface CareerItem {
  id: string;
  companyName: string;
  companyLogo?: string;
  position: string;
  period: {
    start: string; // e.g. "Jan 2022"
    end?: string; // e.g. "Present"
  };
  jobExperience: string[];
  jobSuccess?: JobSuccess[];
  projects?: string[];
}

export interface JobSuccess {
  id: string;
  imagePath?: string;
  detail: string;
}
