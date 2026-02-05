import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  ArrowRight,
  BicepsFlexed,
  Briefcase,
  Layers,
  LayoutDashboard,
  Megaphone,
  Milestone,
  PartyPopper,
  TriangleAlert,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { ImagePreview } from "./app-image-preview";

import { getTechImage } from "@/lib/teck-stack";
import { ProjectItem } from "@/app/types/project-type";

interface ProjectDataProp {
  open: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  data?: ProjectItem;
}

export default function ProjectDialog({ open, close, data }: ProjectDataProp) {
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className=" max-w-4xl!">
        <DialogHeader>
          <DialogTitle className=" flex items-center gap-2">
            {data?.name}
          </DialogTitle>
          {/* <DialogDescription>{data?.description}</DialogDescription> */}
        </DialogHeader>
        <div className="scrollbar-hide max-h-[50vh] overflow-y-auto px-4 space-y-6">
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5" /> ภาพรวมโปรเจค
            </h3>
            {data?.overview?.length ? (
              <ul className="space-y-3 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                {data.overview.map((item, index) => (
                  <li key={index} className="text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
          <Separator />
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BicepsFlexed className="w-5 h-5" /> บทบาทและความรับผิดชอบ
            </h3>
            {data?.role?.length ? (
              <ul className="space-y-3 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                {data.role.map((item, index) => (
                  <li key={index} className="text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
          <Separator />
          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Milestone className="w-5 h-5" /> ความเป็นมา
            </h3>

            {data?.background?.length ? (
              <ul className="space-y-3 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                {data.background.map((item, index) => (
                  <li key={index} className="text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
          <Separator />

          <section className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TriangleAlert className="w-5 h-5" /> ปัญหาที่พบ
            </h3>

            {data?.problem?.length ? (
              <ul className="space-y-3 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                {data.problem.map((item, index) => (
                  <li key={index} className="text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
          <Separator />
          <section className="grid gap-4 sm:grid-cols-1">
            <section className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Megaphone className="w-5 h-5" />
                วิธีคิดและการแก้ไข
              </h3>
              {data?.solve?.length ? (
                <ul className="space-y-3 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                  {data.solve.map((item, index) => (
                    <li key={index} className="text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
