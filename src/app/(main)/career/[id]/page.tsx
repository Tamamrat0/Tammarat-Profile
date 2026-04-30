"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Layers,
  PartyPopper,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Paragraph, SubHeading, ImageBlock } from "@/components/app-text";
import { CareerData } from "../career-data";
import { ProjectData } from "@/app/(main)/projects/project-data";
import { getTechImage } from "@/lib/teck-stack";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Page() {
  const params = useParams<{ id: string }>();
  const data = CareerData.find((i) => i.id === params.id);

  const projectMap = Object.fromEntries(
    ProjectData.map((p) => [p.id, p]),
  );

  const tocItems = [
    { id: "experience", label: "ประสบการณ์การทำงาน" },
    ...(data?.projects?.length ? [{ id: "projects", label: "โปรเจค" }] : []),
    ...(data?.jobSuccess?.length
      ? [{ id: "success", label: "ผลงานและความสำเร็จ" }]
      : []),
  ];
  const activeId = useScrollSpy(
    tocItems.map((i) => i.id),
    200,
  );

  if (!data) {
    return (
      <div className="flex w-full py-4">
        <main className="flex-1 min-h-screen px-6 w-full sm:w-208">
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" /> กลับไปหน้า Career
          </Link>
          <Paragraph>ไม่พบข้อมูลที่ค้นหา</Paragraph>
        </main>
      </div>
    );
  }

  return (
    <div className="flex w-full py-4">
      <main className="flex-1 min-h-screen px-6 w-full sm:w-208">
        <Link
          href="/career"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> กลับไปหน้า Career
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {data.companyLogo && (
            <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center p-2 shrink-0">
              <Image
                src={data.companyLogo}
                alt={data.companyName}
                width={80}
                height={80}
                className="rounded-md object-contain"
              />
            </div>
          )}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              {data.position}
            </h1>
            <p className="text-muted-foreground">{data.companyName}</p>
            <p className="text-muted-foreground text-sm">
              {data.period.start} – {data.period.end}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <section id="experience" className="scroll-mt-28 space-y-2">
          <SubHeading>
            <span className="inline-flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> ประสบการณ์การทำงาน
            </span>
          </SubHeading>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
            {data.jobExperience.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {data.projects?.length ? (
          <>
            <Separator className="my-8" />
            <section id="projects" className="scroll-mt-28 space-y-4">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <Layers className="w-5 h-5" /> โปรเจค
                </span>
              </SubHeading>
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
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} title={tech}>
                              {getTechImage(tech, 30)}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-4 flex justify-end">
                        <Link
                          href={`/projects/${project.id}?from=${encodeURIComponent(`/career/${data.id}#projects`)}`}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                        >
                          รายละเอียดเพิ่มเติม
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        ) : null}

        {data.jobSuccess?.length ? (
          <>
            <Separator className="my-8" />
            <section id="success" className="scroll-mt-28 space-y-4">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <PartyPopper className="w-5 h-5" /> ผลงานและความสำเร็จ
                </span>
              </SubHeading>
              <div className="grid gap-6 sm:grid-cols-2">
                {data.jobSuccess.map((item) => (
                  <ImageBlock
                    key={item.id}
                    src={item.imagePath ?? ""}
                    alt={item.detail}
                    caption={item.detail}
                  />
                ))}
              </div>
            </section>
          </>
        ) : null}
      </main>

      {/* TOC */}
      <aside className="hidden sm:block w-54 relative">
        <div className="sticky top-29">
          <p className="text-sm font-medium">ในหน้านี้</p>

          <nav className="mt-4 space-y-2 text-sm">
            {tocItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block transition-colors ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
}
