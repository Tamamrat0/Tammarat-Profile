"use client";
import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Briefcase,
  ChevronDown,
  FolderKanban,
  GraduationCap,
  Home,
  Mail,
  Menu,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { motion } from "framer-motion";

export default function AppSidebar() {
  const [smOpenMenu, setSmOpenMenu] = useState(false);

  const pathname = usePathname();

  const items = [
    {
      title: "แนะนำตัว",
      url: "/about",
      icon: Home,
    },
    {
      title: "การศึกษา",
      url: "/education",
      icon: GraduationCap,
    },
    {
      title: "การทำงาน",
      url: "/career",
      icon: Briefcase,
    },
    {
      title: "โปรเจค",
      url: "/projects",
      icon: FolderKanban,
    },
  ];

  return (
    <div>
      {/* Desktop */}
      <div className="hidden  sm:flex flex-col w-40 md:w-63.5 duration-200 bg-background h-[calc(100vh-8.5rem)] overflow-y-auto gap-4 py-6 px-4 sticky top-29">
        <div className="flex flex-col w-full gap-3 items-center border-b">
          <div className="relative">
            <Avatar className="bg-blue-200 w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* สร้าง Badge เองด้วย div */}
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className=" absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600 border-2 border-white"></span>
            </span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <span>ธรรมรัตน์ มนตรี (ปลื้ม)</span>
            <a
              href="mailto:tammarat.m123@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors text-sm text-muted-foreground"
            >
              <Mail className="h-4 w-4" />
              tammarat.m123@gmail.com
            </a>
          </div>
        </div>
        {items.map((item, i) => (
          <Link
            href={item.url}
            key={i}
            className={`w-full text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground duration-300 ${pathname === item.url ? "text-primary font-semibold" : "font-base"}`}
          >
            <item.icon className="w-5 h-5" />
            {item.title}
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex flex-col sm:hidden w-full py-2 px-4">
        <button
          className="flex w-full items-center justify-between duration-300 cursor-pointer"
          onClick={() => setSmOpenMenu((prev) => !prev)}
        >
          <div className="flex items-center gap-2 ">
            <Menu className="w-4 h-4" />
            <span>เมนู</span>
          </div>
          <ChevronDown
            className={`${smOpenMenu ? "rotate-180" : " rotate-0"} duration-300`}
          />
        </button>
        <div className="mt-4">
          {/* AnimatePresence ใช้สำหรับจัดการการ Mount/Unmount ของ children */}
          <motion.div
            layout
            initial={false}
            animate={{
              height: smOpenMenu ? "auto" : 0,
              opacity: smOpenMenu ? 1 : 0,
            }}
            className="overflow-hidden w-full"
          >
            <div className="px-2 flex flex-col gap-4">
              {items.map((item, i) => (
                <Link
                  href={item.url}
                  key={i}
                  className={`w-full text-base flex items-center gap-2 text-muted-foreground hover:text-foreground ${pathname === item.url ? "text-primary font-semibold" : "font-base"}`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
