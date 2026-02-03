import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { CareerItem } from "@/app/types/career-type";
import { ArrowRight, Briefcase, Layers, PartyPopper } from "lucide-react";
import { Separator } from "./ui/separator";
import { ImagePreview } from "./app-image-preview";

import { ProjectData } from "@/app/(main)/projects/project-data";

interface CareerDataProp {
  open: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  data?: CareerItem;
}

export default function CareerDialog({ open, close, data }: CareerDataProp) {
  const techDotMap: Record<string, string> = {
    React: "bg-sky-500",
    NextJS: "bg-black dark:bg-white",
    AntD: "bg-blue-600",
    Shadcn: "bg-zinc-900 dark:bg-zinc-100",
    Tailwind: "bg-cyan-500",
    ExpressJS: "bg-gray-600",
    NestJS: "bg-red-600",
    Mssql: "bg-emerald-600",
  };

  const projectMap = Object.fromEntries(
    ProjectData.map((project) => [project.id, project]),
  );

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className=" max-w-4xl!">
        <DialogHeader>
          <DialogTitle className=" flex items-center gap-2">
            {data?.position}
          </DialogTitle>
          <DialogDescription>{data?.companyName}</DialogDescription>
        </DialogHeader>
        <div className="scrollbar-hide max-h-[50vh] overflow-y-auto px-4 space-y-6">
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> ประสบการณ์การทำงาน
            </h3>

            <ul className="space-y-3 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
              {data &&
                data.jobExperience.map((item, index) => (
                  <li key={index} className="text-foreground">
                    {item}
                  </li>
                ))}
            </ul>
          </section>
          <Separator />

          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Layers className="w-5 h-5" /> โปรเจค
            </h3>
            {data?.projects?.length ? (
              <div className="space-y-4">
                {data.projects.map((projectId) => {
                  const project = projectMap[projectId];
                  if (!project) return null;

                  return (
                    <div
                      key={project.id}
                      className="rounded-lg border p-4 transition hover:bg-muted/50"
                    >
                      <h4 className="font-semibold text-base">
                        {project.name}
                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>

                      {project.techStack?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="flex items-center gap-2 rounded-sm border px-2 py-0.5 text-xs text-muted-foreground"
                            >
                              <span
                                className={`relative h-2 w-2 rounded-full ${
                                  techDotMap[tech] ?? "bg-muted-foreground"
                                }`}
                              />
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-4 flex justify-end">
                        <button
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                          onClick={() => {
                            console.log("open project detail", project.id);
                          }}
                        >
                          รายละเอียดเพิ่มเติม <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </section>
          <Separator />
          <section className="grid gap-4 sm:grid-cols-1">
            {data?.jobSuccess?.length ? (
              <section className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <PartyPopper className="w-5 h-5" />
                  ผลงานและความสำเร็จ
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {data.jobSuccess.map((item) => (
                    <div key={item.id} className="rounded-lg p-4">
                      {item.imagePath && (
                        <ImagePreview src={item.imagePath} alt={item.detail} />
                      )}
                      <p className="text-sm mt-2 text-center">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
