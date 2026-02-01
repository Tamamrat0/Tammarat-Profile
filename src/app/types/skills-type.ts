import { ReactNode } from "react";

export type SkillLevel = "low" | "mid" | "high";

export interface SkillTableItem {
  name: string;
  level: SkillLevel;
  projects: ReactNode;
}
