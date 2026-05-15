export const STACKS = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "Tailwind",
  "Antd",
  "Shadcn",
  "ExpressJS",
  "NestJS",
  "Mssql",
  "MongoDB",
  "SocketIo",
  "Docker",
  "SAP",
  "GitHub Actions",
  "Vercel",
] as const;

export type StackName = (typeof STACKS)[number];
