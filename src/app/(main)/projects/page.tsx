"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { CareerData } from "../career/career-data";
import { ProjectData } from "./project-data";
import { CareerItem } from "@/app/types/career-type";
import CareerDialog from "@/components/career-dialog";
import { getTechImage } from "@/lib/teck-stack";

export default function Page() {
  const [openDetail, setOpenDetail] = useState(false);
  const [detailCareer, setDetailCareer] = useState<CareerItem>();
  const informationPage: InformationType[] = [
    {
      id: "work",
      header: "การทำงาน",
      headerIcon: BriefcaseBusiness,
      normalDetail: "เส้นทางอาชีพของผม",
      customDetail: (
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ProjectData.map((item) => (
              <Fragment key={item.id}>
                <div className="border rounded-md flex flex-col w-full h-80 overflow-hidden hover:bg-secondary/50 transition cursor-pointer group">
                  <div className="relative h-[60%] border-b overflow-hidden ">
                    <div className="absolute inset-0  transition duration-300 group-hover:blur-xl">
                      {/* Background image layer */}
                      <Image
                        src="/images/success_2024.jpg"
                        alt="Company Logo"
                        width={1920}
                        height={1920}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <button className="flex items-center gap-2 text-white text-sm font-medium">
                        รายละเอียดเพิ่มเติม <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 p-4 flex-1 ">
                    <h3>{item.name}</h3>
                    <p className={`text-sm text-muted-foreground line-clamp-2`}>
                      {item.description}
                    </p>
                    {item.techStack?.length ? (
                      <div className="flex flex-wrap items-center gap-2">
                        {item.techStack.map((tech) => (
                          <span key={tech} title={tech}>
                            {getTechImage(tech, 30)}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      ),
    },
  ];

  function handleOpenDialog(id: string) {
    const result = CareerData.find((i) => i.id === id);
    if (!result) return;
    setDetailCareer(result);
    setOpenDetail(true);
  }

  const sectionIds = informationPage.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds, 200);

  return (
    <div className="flex w-full py-4">
      <CareerDialog
        open={openDetail}
        close={setOpenDetail}
        data={detailCareer}
      />
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
