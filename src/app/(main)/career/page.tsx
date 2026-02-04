"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { InformationType } from "@/app/types/informaion-type";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { CareerData } from "./career-data";
import { CareerItem } from "@/app/types/career-type";
import CareerDialog from "@/components/career-dialog";

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
          {CareerData.map((item) => (
            <Fragment key={item.id}>
              <div className="p-6 border rounded-md w-full flex flex-col items-start sm:items-center sm:flex-row gap-4 hover:bg-card duration-300">
                {/* Logo / Image */}
                <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center p-2">
                  <Image
                    src={item.companyLogo ?? ""}
                    alt="Company Logo"
                    width={80}
                    height={80}
                    className="rounded-md object-contain "
                  />
                </div>

                {/* Header */}
                <div className="flex flex-col  w-full">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">{item.position}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.companyName}
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-muted-foreground text-sm">
                      {item.period.start} – {item.period.end}
                    </p>
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleOpenDialog(item.id)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        รายละเอียดเพิ่มเติม <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
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
