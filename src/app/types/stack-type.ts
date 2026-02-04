export const STACKS = [
  "React",
  "NextJS",
  "Tailwind",
  "Antd",
  "ExpressJS",
  "SocketIo",
  "NestJS",
  "Shadcn",
  "Docker",
  "Mssql",
] as const;

export type StackName = (typeof STACKS)[number];
