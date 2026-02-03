import { ReactNode } from "react";
import Image from "next/image";
import { StackName } from "@/app/types/stack-type";

const TECH_IMAGE_MAP: Record<StackName, string> = {
  React: "/icons/react.png",
  NextJS: "/icons/nextjs.png",
  Tailwind: "/icons/tailwindcss.png",
  Antd: "/icons/antd.png",
  ExpressJS: "/icons/react.png",
  NestJS: "/icons/express.png",
  Shadcn: "/icons/shadcn.png",
  Mssql: "/icons/mssql.png",
};

export function getTechImage(tech: StackName, size: number = 16): ReactNode {
  const src = TECH_IMAGE_MAP[tech];

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={tech}
      width={size}
      height={size}
      className="shrink-0"
    />
  );
}
