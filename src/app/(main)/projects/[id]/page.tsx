"use client";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  BicepsFlexed,
  Images,
  LayoutDashboard,
  Megaphone,
  Milestone,
  TriangleAlert,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Paragraph, SubHeading, ImageBlock } from "@/components/app-text";
import { ProjectData } from "../project-data";
import { getTechImage } from "@/lib/teck-stack";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Page() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const data = ProjectData.find((i) => i.id === params.id);

  const from = searchParams.get("from");
  const backHref = from && from.startsWith("/") ? from : "/projects";
  const backLabel = backHref.startsWith("/career")
    ? "กลับไปหน้า Career"
    : "กลับไปหน้า Projects";

  const tocItems = [
    ...(data?.overview?.length
      ? [{ id: "overview", label: "ภาพรวมโปรเจค" }]
      : []),
    ...(data?.role?.length
      ? [{ id: "role", label: "บทบาทและความรับผิดชอบ" }]
      : []),
    ...(data?.background?.length
      ? [{ id: "background", label: "ความเป็นมา" }]
      : []),
    ...(data?.problem?.length
      ? [{ id: "problem", label: "ปัญหาที่พบ" }]
      : []),
    ...(data?.solve?.length
      ? [{ id: "solve", label: "วิธีคิดและการแก้ไข" }]
      : []),
    ...(data?.attachments?.length
      ? [{ id: "gallery", label: "แกลเลอรี่" }]
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
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" /> {backLabel}
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
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> {backLabel}
        </Link>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold">{data.name}</h1>
          <p className="text-muted-foreground">{data.description}</p>
          {data.techStack?.length ? (
            <div className="flex flex-wrap items-center gap-2">
              {data.techStack.map((tech) => (
                <span key={tech} title={tech}>
                  {getTechImage(tech, 30)}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {data.overview?.length ? (
          <>
            <Separator className="my-8" />
            <section id="overview" className="scroll-mt-28 space-y-2">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5" /> ภาพรวมโปรเจค
                </span>
              </SubHeading>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
                {data.overview.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        ) : null}

        {data.role?.length ? (
          <>
            <Separator className="my-8" />
            <section id="role" className="scroll-mt-28 space-y-2">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <BicepsFlexed className="w-5 h-5" /> บทบาทและความรับผิดชอบ
                </span>
              </SubHeading>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
                {data.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        ) : null}

        {data.background?.length ? (
          <>
            <Separator className="my-8" />
            <section id="background" className="scroll-mt-28 space-y-2">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <Milestone className="w-5 h-5" /> ความเป็นมา
                </span>
              </SubHeading>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
                {data.background.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        ) : null}

        {data.problem?.length ? (
          <>
            <Separator className="my-8" />
            <section id="problem" className="scroll-mt-28 space-y-2">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <TriangleAlert className="w-5 h-5" /> ปัญหาที่พบ
                </span>
              </SubHeading>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
                {data.problem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        ) : null}

        {data.solve?.length ? (
          <>
            <Separator className="my-8" />
            <section id="solve" className="scroll-mt-28 space-y-2">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <Megaphone className="w-5 h-5" /> วิธีคิดและการแก้ไข
                </span>
              </SubHeading>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-base leading-relaxed">
                {data.solve.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </>
        ) : null}

        {data.attachments?.length ? (
          <>
            <Separator className="my-8" />
            <section id="gallery" className="scroll-mt-28 space-y-4">
              <SubHeading>
                <span className="inline-flex items-center gap-2">
                  <Images className="w-5 h-5" /> แกลเลอรี่
                </span>
              </SubHeading>
              <div className="grid gap-6 sm:grid-cols-2">
                {data.attachments.map((item, index) =>
                  item.imagePath ? (
                    <ImageBlock
                      key={index}
                      src={item.imagePath}
                      alt={item.detail}
                      caption={item.detail}
                    />
                  ) : null,
                )}
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
