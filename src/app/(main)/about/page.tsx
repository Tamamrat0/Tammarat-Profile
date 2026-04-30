"use client";
import React, { Fragment } from "react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { ArrowRight, HeartHandshake, Layers, Terminal } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Paragraph, Strong } from "@/components/app-text";

import { getTechImage } from "@/lib/teck-stack";
import { STACKS } from "@/app/types/stack-type";

const SOFT_SKILLS = [
  "การเก็บและวิเคราะห์ Requirement",
  "ออกแบบระบบ (System Design)",
  "ประสานงานและติดตามโครงการ",
  "สื่อสารและทำงานร่วมกับหลายทีม",
  "วิเคราะห์และแก้ปัญหาเชิงระบบ",
  "ดูแลระบบแบบ End-to-End",
  "การประยุกต์ใช้ AI เพื่อช่วยแก้ปัญหา",
];

const DOMAIN_EXPERTISE = [
  "SAP Business One Integration",
  "ระบบ ERP / Internal System",
  "Workflow งานผลิต",
  "ธุรกิจผลิตเครื่องสำอาง",
  "ออกแบบฐานข้อมูล",
  "เชื่อมต่อ Hardware",
  "การนำ AI มาใช้ช่วยวิเคราะห์ข้อมูลและเพิ่มประสิทธิภาพการทำงาน",
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
          <Paragraph indent>
            สวัสดีครับ ผมชื่อธรรมรัตน์ มนตรี (ปลื้ม) อายุ 24 เป็น Full-Stack
            Developer ที่พัฒนา <Strong>Internal System</Strong>{" "}
            ในองค์กรธุรกิจจริงมา 4+ ปี ดูแลงานตั้งแต่ Database, Backend,
            Frontend ไปจนถึงการเชื่อมต่อระบบให้ใช้งานได้จริง
            รวมถึงการพัฒนาแบบฟอร์มเอกสารให้สอดคล้องกับมาตรฐาน ISO
          </Paragraph>

          <Paragraph indent>
            ผมทำงานใกล้ชิดกับผู้ใช้งานและหลายแผนกในองค์กร รวมถึงการทำงานร่วมกับ{" "}
            <Strong>SAP Business One</Strong>
            ทำให้เข้าใจการทำงานของระบบ ERP ตั้งแต่การขาย การผลิต
            ไปจนถึงการจัดส่งสินค้า
          </Paragraph>

          <Paragraph indent>
            ผมสามารถนำความเข้าใจด้านระบบและการทำงานจริง
            มาพัฒนาเป็นระบบที่เชื่อมต่อข้อมูลระหว่าง SAP กับระบบภายใน
            ทำให้ผู้ใช้สามารถคีย์ข้อมูลเพียงครั้งเดียว
            แล้วนำไปใช้งานต่อได้ในหลายส่วน ช่วยลดขั้นตอนการทำงาน
            ลดความซ้ำซ้อนของข้อมูล และลดต้นทุนในการขยายระบบบน SAP
          </Paragraph>
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
                  <p className=" w-full">{item.header}</p>
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">
                  อยากรู้จักผมมากกว่านี้?
                </p>
                <p className="text-sm text-muted-foreground">
                  ก่อนจะมาเป็น Full-Stack Developer — ผมผ่านอะไรมาบ้าง
                </p>
              </div>
              <span className="flex items-center gap-2 text-sm font-medium text-primary whitespace-nowrap self-start sm:self-auto">
                Go to journey
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
