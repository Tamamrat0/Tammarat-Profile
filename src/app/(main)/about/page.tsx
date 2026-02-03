"use client";
import React, { Fragment } from "react";

import { Separator } from "@/components/ui/separator";
import { Terminal } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import { SkillsTabs } from "@/components/skills/skills-tabs";

export default function Page() {
  const informationPage: InformationType[] = [
    {
      id: "intro",
      header: "สวัสดีครับ",
      headerEmoji: "👋",
      customDetail: (
        <div className="mt-4 ">
          <p className="indent-8 text-muted-foreground text-base leading-relaxed">
            ผมเป็นนักพัฒนา Internal System มีประสบการณ์พัฒนา Web Application
            สำหรับการใช้งานจริงในองค์กรกว่า 3 ปี
            มีส่วนร่วมตั้งแต่การเก็บความต้องการผู้ใช้งาน
            การออกแบบโครงสร้างระบบและฐานข้อมูล
          </p>

          <p className="text-muted-foreground text-base leading-relaxed mt-4">
            รับผิดชอบการพัฒนา Backend และ RESTful API รวมถึง Frontend
            สำหรับระบบงานจริง มีความเข้าใจระบบ ERP ฝั่งการผลิตและการปฏิบัติงาน
            (ยกเว้นส่วนบัญชี)
          </p>

          <p className="text-muted-foreground text-base leading-relaxed mt-4">
            เข้าใจมุมมองการใช้งานจริงของผู้ใช้ และกระบวนการทำงานภายในองค์กร
            สามารถสื่อสารกับผู้ใช้งานและทีมงานได้อย่างมีประสิทธิภาพ
          </p>
        </div>
      ),
    },
    {
      id: "skills",
      header: "สกิล",
      headerIcon: Terminal,
      customDetail: (
        <div className="mt-4 ">
          <SkillsTabs />
        </div>
      ),
    },
  ];

  const sectionIds = informationPage.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds, 200);

  return (
    <div className="flex w-full py-4">
      {/* Content */}
      <main className="flex-1 min-h-screen px-6 w-full  sm:w-208">
        <div className="flex flex-col gap-3 mb-8 ">
          {informationPage.map((item, index) => (
            <Fragment key={item.id}>
              <section id={item.id} className="scroll-mt-28">
                <h1 className="text-3xl font-semibold flex items-center gap-4">
                  {item.headerIcon && <item.headerIcon />}
                  {item.headerEmoji && <p>{item.headerEmoji}</p>}
                  <p>{item.header}</p>
                </h1>
                {item.normalDetail && (
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.normalDetail}
                  </p>
                )}
                {item.customDetail && (
                  <div className="">
                    {item.customDetail}
                  </div>
                )}
              </section>
              {index !== informationPage.length - 1 && (
                <Separator className="my-8" />
              )}
            </Fragment>
          ))}
        </div>
      </main>

      {/* TOC */}
      <aside className="hidden sm:block w-54 relative">
        <div className="sticky top-29 h-[calc(100vh-8.5rem)]">
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
