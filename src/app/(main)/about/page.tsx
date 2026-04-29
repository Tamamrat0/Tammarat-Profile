"use client";
import React, { Fragment } from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { ArrowRight, HeartHandshake, Layers, Terminal } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import { getTechImage } from "@/lib/teck-stack";
import { STACKS } from "@/app/types/stack-type";

const SOFT_SKILLS = [
  "Requirement Gathering",
  "System Analysis & Design",
  "Project Coordination",
  "Cross-team Communication",
  "Problem Solving",
  "End-to-End Ownership",
];

const DOMAIN_EXPERTISE = [
  "SAP Business One Integration",
  "ERP / Internal System",
  "Manufacturing Workflow",
  "Cosmetics Industry",
  "Database Design",
  "Hardware Integration",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
      {children}
    </span>
  );
}

export default function Page() {
  const informationPage: InformationType[] = [
    {
      id: "intro",
      header: "สวัสดีครับ",
      headerEmoji: "👋",
      customDetail: (
        <div className="mt-4 space-y-4">
          <p className="text-muted-foreground text-base leading-relaxed text-pretty wrap-break-word">
            <span className="inline-block w-8"></span>
            ผมชื่อธรรมรัตน์ มนตรี ชื่อเล่น ปลื้ม ครับ เป็น Full Stack Developer
            ที่มีประสบการณ์กว่า 4 ปี ในการพัฒนา Internal System
            ภายในองค์กรธุรกิจจริง ตั้งแต่ออกแบบ Database ไปจนถึง UI
            ที่ผู้ใช้งานหน้างานใช้จริงทุกวัน ผมรับผิดชอบงานแบบ End-to-End
            ครอบคลุมทั้ง Frontend, Backend และการเชื่อมต่อระบบ
            ทำให้มองเห็นภาพรวมของระบบได้ครบทุกมิติและแก้ปัญหาได้
          </p>

          <p className="text-muted-foreground text-base leading-relaxed text-pretty wrap-break-word">
            <span className="inline-block w-8"></span>
            จุดที่ทำให้ผมแตกต่างจาก Developer
            ทั่วไปคือประสบการณ์ทำงานใกล้ชิดกับทีม Operations ทำให้เข้าใจ
            Workflow และความต้องการที่แท้จริงของผู้ใช้ ไม่ใช่แค่เขียน Code ตาม
            Spec นอกจากนี้ยังมีประสบการณ์กับ SAP Business One และการพัฒนา
            Satellite System เพื่อเติมเต็มในส่วนที่ระบบ ERP หลักยังไม่ครอบคลุม
          </p>

          <p className="text-muted-foreground text-base leading-relaxed text-pretty wrap-break-word">
            <span className="inline-block w-8"></span>
            ในโครงการล่าสุดผมยังรับบทบาท Project Coordinator ดูแลตั้งแต่การเก็บ
            Requirement จากผู้ใช้จริง สรุปออกมาเป็น Flow
            งานที่ทีมพัฒนาภายนอกนำไปใช้ได้เลย
            และติดตามความคืบหน้าให้สอดคล้องกับเป้าหมายขององค์กร
            ประสบการณ์ดังกล่าวทำให้ผมเชื่อว่า Developer ที่ดีไม่ใช่แค่คนที่ Code
            เก่ง แต่ต้องเข้าใจ &ldquo;ปัญหาจริง&rdquo; ที่ต้องการแก้ไขด้วย
          </p>
        </div>
      ),
    },
    {
      id: "skills",
      header: "Tech Stack",
      headerIcon: Terminal,
      customDetail: (
        <div className="mt-4 flex gap-4 items-center flex-wrap">
          {STACKS.filter((i) => i !== "MongoDB").map((tech) => (
            <span key={tech} title={tech}>
              {getTechImage(tech, 40)}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: "soft-skills",
      header: "Soft Skills",
      headerIcon: HeartHandshake,
      normalDetail: "ทักษะที่ทำให้ผมส่งงานได้จริง ไม่ใช่แค่เขียนโค้ดเก่ง",
      customDetail: (
        <div className="mt-4 flex gap-2 flex-wrap">
          {SOFT_SKILLS.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      ),
    },
    {
      id: "domain",
      header: "Domain Expertise",
      headerIcon: Layers,
      normalDetail: "ประสบการณ์เฉพาะทางที่สั่งสมจากการทำงานในธุรกิจจริง",
      customDetail: (
        <div className="mt-4 flex gap-2 flex-wrap">
          {DOMAIN_EXPERTISE.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      ),
    },
  ];

  const sectionIds = informationPage.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds, 200);

  return (
    <div className="flex w-full py-4">
      {/* Content */}
      <main className="flex-1 min-h-screen px-6 w-full sm:w-208">
        <div className="flex flex-col gap-3 pb-40">
          {informationPage.map((item, index) => (
            <Fragment key={item.id}>
              <section id={item.id} className="scroll-mt-28">
                <h1 className="text-3xl font-semibold flex items-center gap-4">
                  {item.headerIcon && <item.headerIcon />}
                  {item.headerEmoji && <p>{item.headerEmoji}</p>}
                  <p>{item.header}</p>
                </h1>
                {item.normalDetail && (
                  <p className="text-muted-foreground text-base leading-relaxed mt-2">
                    {item.normalDetail}
                  </p>
                )}
                {item.customDetail && (
                  <div className="">{item.customDetail}</div>
                )}
              </section>
              {index !== informationPage.length - 1 && (
                <Separator className="my-8" />
              )}
            </Fragment>
          ))}

          <Separator className="my-8" />

          {/* CTA → Journey */}
          <Link
            href="/journey#intro"
            className="group block rounded-lg border border-primary/30 bg-primary/5 p-6 hover:bg-primary/10 transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">
                  อยากรู้จักผมมากกว่านี้?
                </p>
                <p className="text-sm text-muted-foreground">
                  เรื่องราวความสำเร็จและความล้มเหลว จนถึงวันที่กลายเป็น
                  Full-Stack Developer
                </p>
              </div>
              <span className="flex items-center gap-2 text-sm font-medium text-primary whitespace-nowrap">
                อ่านเรื่องราวฉบับเต็ม
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </main>

      {/* TOC */}
      <aside className="hidden sm:block w-54 relative">
        <div className="sticky top-29">
          <p className="text-sm font-medium">ในหน้านี้</p>

          <nav className="mt-4 space-y-2 text-sm">
            {informationPage.map((item) => {
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
                  {item.header}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
}
