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
  "SocketIo",
  "Docker",
  "SAP",
] as const;

export type StackName = (typeof STACKS)[number];
