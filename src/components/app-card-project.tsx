"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProjectItem } from "@/app/types/project-type";
import { useEffect } from "react";
import { getTechImage } from "@/lib/teck-stack";

interface CardProjectProp {
  item: ProjectItem;
  activeId: string | null;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
  onclick: () => void;
}

export default function CardProject({
  item,
  activeId,
  setActiveId,
  onclick,
}: CardProjectProp) {
  const isActive = activeId === item.id;

  useEffect(() => {
    const close = () => setActiveId(null);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, [setActiveId]);

  const handleCardClick = () => {
    setActiveId(isActive ? null : item.id);
  };

  return (
    <div
      tabIndex={0}
      onClick={handleCardClick}
      onBlur={() => setActiveId(null)}
      className={`
        border rounded-md flex flex-col w-full h-80 overflow-hidden transition group
        ${isActive ? "bg-secondary/50" : ""}
      `}
    >
      {/* IMAGE */}
      <div className="relative h-[60%] border-b overflow-hidden">
        <div
          className={`
            absolute inset-0 transition duration-300
            ${isActive ? "blur-xl" : "group-hover:blur-xl"}
          `}
        >
          <Image
            src="/images/success_2024.jpg"
            alt="Company Logo"
            width={1024}
            height={1024}
            className="object-cover w-full h-full"
          />
          {/* <ImageSlider /> */}
        </div>

        {/* Overlay */}
        <div
          className={`
            absolute inset-0 flex items-center justify-center transition
            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        >
          <button
            className="flex items-center gap-2 text-white text-sm font-medium cursor-pointer"
            onClick={onclick}
          >
            รายละเอียดเพิ่มเติม <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3>{item.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
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
  );
}
