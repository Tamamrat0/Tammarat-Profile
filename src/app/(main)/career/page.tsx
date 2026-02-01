"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, Mouse } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Page() {
  const [openDetail, setOpenDetail] = useState("");
  // const [openDetail , setOpenDetail] = useState("");
  const informationPage: InformationType[] = [
    {
      id: "work",
      header: "การทำงาน",
      headerIcon: BriefcaseBusiness,
      normalDetail: "เส้นทางอาชีพของผม",
      customDetail: (
        <div className="mt-4">
          <div className="p-6 border rounded-md w-full flex flex-col items-start sm:items-center sm:flex-row gap-4 bg-card hover:bg-secondary duration-300">
            {/* Logo / Image */}
            <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center p-2">
              <Image
                src="/images/logo-wann.svg"
                alt="Company Logo"
                width={76}
                height={76}
                className="rounded-md object-contain "
              />
            </div>

            {/* Header */}
            <div className="flex flex-col ">
              <div className="space-y-1">
                <h3 className="text-base font-semibold">
                  IT Specialist (Internal System Developer)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Wann Cosmetics & Laboratory Co., Ltd
                </p>
              </div>
              <div className="space-y-0.5 mt-4">
                <p className="text-muted-foreground text-sm">
                  Dec 2021 – Present
                </p>
                <button className="flex gap-2 items-center text-muted-foreground hover:text-white cursor-pointer">
                  <Mouse className="w-4 h-4" />
                  รายละเอียดเพิ่มเติม
                </button>
              </div>
            </div>
          </div>
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
        <div className="flex flex-col gap-3 w-full mb-8">
          {informationPage.map((item, index) => (
            <Fragment key={item.id}>
              <section id={item.id} className="scroll-mt-28">
                <h1 className="text-3xl font-semibold flex items-center gap-4">
                  {item.headerIcon && <item.headerIcon />}
                  {item.headerEmoji && <p>{item.headerEmoji}</p>}
                  <p>{item.header}</p>
                </h1>
                {item.normalDetail && (
                  <div className="text-muted-foreground text-base leading-relaxed mt-2 flex">
                    {item.normalDetail}
                  </div>
                )}
                {item.customDetail && item.customDetail}
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
