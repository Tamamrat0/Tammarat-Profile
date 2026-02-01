"use client";
import React, { Fragment } from "react";

import { Separator } from "@/components/ui/separator";
import { Book, BookCopy } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Page() {
  const informationPage: InformationType[] = [
    {
      id: "voc",
      header: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      headerIcon: Book,
      customDetail: (
        <div className="mt-4 space-y-4 ">
          <p className="text-xl leading-relaxed">
            วิทยาลัยเทคนิคสมุทรสาคร (2017-2020)
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            สาขาคอมพิวเตอร์ธุรกิจ
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            เกรดเฉลี่ย 3.4
          </p>
        </div>
      ),
    },
    {
      id: "hvc",
      header: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      headerIcon: BookCopy,
      customDetail: (
        <div className="mt-4 space-y-4">
          <p className="text-xl leading-relaxed">
            วิทยาลัยฐานเทคโนโลยี (2023-2025)
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            สาขาธุรกิจดิจิทัล
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            เกรดเฉลี่ย 3.3
          </p>
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
        <div className="flex flex-col gap-3 w-full  mb-8">
          {informationPage.map((item, index) => (
            <Fragment key={item.id}>
              <section id={item.id} className="scroll-mt-28">
                <h1 className="text-3xl font-semibold flex items-center gap-4">
                  {item.headerIcon && <item.headerIcon />}
                  {item.headerEmoji && <p>{item.headerEmoji}</p>}
                  <p>{item.header}</p>
                </h1>
                {item.normalDetail && (
                  <p className="text-muted-foreground text-base leading-relaxed mt-4 min-w-4xl">
                    {item.normalDetail}
                  </p>
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
