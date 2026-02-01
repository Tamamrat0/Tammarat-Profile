import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
export interface InformationType {
  id: string;
  header: string;
  headerIcon?: LucideIcon;
  headerEmoji?: string;
  normalDetail?: string;
  customDetail?: ReactNode;
}
