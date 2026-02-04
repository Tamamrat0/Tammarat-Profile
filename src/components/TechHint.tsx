"use client";

import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsTouchDevice } from "@/hooks/useIsTouch";

export function TechHint({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const isTouch = useIsTouchDevice();

  if (isTouch) {
    // 📱 Mobile: tap แล้วค้าง
    return (
      <Popover>
        <PopoverTrigger asChild>
          <button type="button" className="inline-flex" aria-label={label}>
            {children}
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="w-auto px-2 py-1 bg-white text-background"
          forceMount
        >
          <span className="text-xs font-medium">{label}</span>
        </PopoverContent>
      </Popover>
    );
  }

  // 🖥 Desktop: hover
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex" aria-label={label}>
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top">
          <span className="text-xs font-medium">{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
