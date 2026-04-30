import React from "react";

import { ImagePreview } from "@/components/app-image-preview";

export function Paragraph({
  children,
  indent = false,
}: {
  children: React.ReactNode;
  indent?: boolean;
}) {
  return (
    <p className="text-muted-foreground text-base leading-relaxed text-pretty wrap-break-word">
      {indent && <span className="inline-block w-8" />}
      {children}
    </p>
  );
}

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-primary/40 bg-primary/5 pl-4 py-3 my-2 italic text-foreground/90 rounded-r">
      {children}
    </blockquote>
  );
}

export function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>;
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-foreground font-semibold">{children}</strong>;
}

export function ImageBlock({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-2">
      <ImagePreview src={src} alt={alt} />
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
