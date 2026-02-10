"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  src: string;
  alt?: string;
};

export function ImagePreview({ src, alt }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-md">
          <Image
            src={src}
            alt={alt ?? "preview"}
            fill
            loading="eager"
            // sizes="100vw"
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover transition hover:scale-105"
          />
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-7xl! border-none bg-transparent shadow-none">
        <VisuallyHidden>
          <DialogTitle>{alt ?? "Image preview"}</DialogTitle>
          <DialogDescription>
            Enlarged preview of the selected image
          </DialogDescription>
        </VisuallyHidden>

        <div className="relative max-h-[80vh] w-full">
          <Image
            src={src}
            alt={alt ?? "preview"}
            width={1200}
            height={800}
            className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
