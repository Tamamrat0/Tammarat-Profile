"use client";
import React, { Fragment } from "react";

import { Separator } from "@/components/ui/separator";
import { Terminal } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import { getTechImage } from "@/lib/teck-stack";
import { STACKS } from "@/app/types/stack-type";

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
            ผมเป็น IT Specialist ที่ได้รับมอบหมายให้พัฒนา Internal System
            ภายในองค์กร มีประสบการณ์กว่า 3 ปี ในการแปลง Workflow ทางธุรกิจ
            ให้เป็นระบบดิจิทัลที่สามารถใช้งานได้จริง รับผิดชอบงานในลักษณะ
            End-to-End ตั้งแต่การเก็บ Requirement จากผู้ใช้งานหน้างาน
            การออกแบบโครงสร้างระบบและฐานข้อมูล
            ไปจนถึงการพัฒนาและปรับปรุงระบบให้ตอบโจทย์การทำงานจริง
            ประสบการณ์ดังกล่าวทำให้ผมมีความเข้าใจเชิงลึกในมุมมองการใช้งานของผู้ใช้
            และสามารถออกแบบระบบที่ช่วยอำนวยความสะดวกให้กับการทำงานภายในองค์กรได้อย่างแท้จริง
          </p>

          <p className="text-muted-foreground text-base leading-relaxed text-pretty wrap-break-word">
            <span className="inline-block w-8"></span>
            ในด้านความเข้าใจธุรกิจ ผมมีความคุ้นเคยกับกระบวนการทำงานของแผนกต่าง ๆ
            ในสายการผลิต (Operations) เป็นอย่างดี โดยเข้าใจบทบาท
            หน้าที่ความรับผิดชอบ และลำดับการส่งต่องานระหว่างแผนกต่าง ๆ
            ยกเว้นในส่วนของงานด้านบัญชี นอกจากนี้ยังมีประสบการณ์ในการใช้งาน SAP
            Business One และสามารถดึงข้อมูลจาก SAP มาพัฒนาเป็นระบบเสริม
            (Satellite System) เพื่อเติมเต็ม Workflow ในส่วนที่ระบบ ERP
            หลักยังไม่ครอบคลุม
          </p>

          <p className="text-muted-foreground text-base leading-relaxed text-pretty wrap-break-word">
            <span className="inline-block w-8"></span>
            นอกเหนือจากการพัฒนาระบบด้วยตนเอง
            ผมยังมีประสบการณ์ในการทำหน้าที่เป็นตัวกลางประสานงานโครงการ (Project
            Coordinator) โดยรับผิดชอบการรวบรวมความต้องการจากผู้ใช้งาน
            สรุปออกมาเป็น Flow งานที่ชัดเจน
            รวมถึงติดตามและประสานงานกับทีมพัฒนาภายนอก
            เพื่อให้การทำงานของทุกฝ่ายเป็นไปอย่างราบรื่นและสอดคล้องกับเป้าหมายขององค์กร
          </p>
        </div>
      ),
    },
    {
      id: "skills",
      header: "สกิล",
      headerIcon: Terminal,
      customDetail: (
        <div className="mt-4 flex gap-4 items-center flex-wrap">
          {STACKS.map((tech) => (
            <span key={tech} title={tech}>
              {getTechImage(tech, 40)}
            </span>
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
                  <div className="">{item.customDetail}</div>
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
