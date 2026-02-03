import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Image from "next/image";

import { CareerItem } from "@/app/types/career-type";
import { Briefcase, PartyPopper } from "lucide-react";
import { Separator } from "./ui/separator";
import { ImagePreview } from "./app-image-preview";

interface CareerDataProp {
  open: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  data?: CareerItem;
}

export default function CareerDialog({ open, close, data }: CareerDataProp) {
  console.log(data);
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className=" max-w-4xl!">
        <DialogHeader>
          <DialogTitle className=" flex items-center gap-2">
            {data?.position}
          </DialogTitle>
          <DialogDescription>{data?.companyName}</DialogDescription>
        </DialogHeader>
        <div className="scrollbar-hide max-h-[50vh] overflow-y-auto px-4 space-y-6">
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> ประสบการณ์การทำงาน
            </h3>

            <ul className="space-y-3 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
              {data &&
                data.jobExperience.map((item, index) => (
                  <li key={index} className="text-foreground">
                    {item}
                  </li>
                ))}
            </ul>
          </section>
          <Separator />

          <div className="grid gap-4 sm:grid-cols-1">
            {data?.jobSuccess?.length ? (
              <section className="space-y-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <PartyPopper className="w-5 h-5" />
                  ผลงานและความสำเร็จ
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {data.jobSuccess.map((item) => (
                    <div key={item.id} className="rounded-lg p-4">
                      {item.imagePath && (
                        <ImagePreview src={item.imagePath} alt={item.detail} />
                      )}
                      <p className="text-sm mt-2 text-center">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
          {/* </section> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
