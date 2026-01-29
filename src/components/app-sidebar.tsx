"use client";
import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Menu,
  Search,
  Settings,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function AppSidebar() {
  const isMobile = useIsMobile();
  const [smOpenMenu, setSmOpenMenu] = useState(false);

  console.log(isMobile);
  const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  return (
    <div>
      <div className="hidden sm:flex flex-col w-40 md:w-63.5 duration-200 bg-background border h-[calc(100vh-8.5rem)] overflow-y-auto gap-4 py-6 px-4">
        <div className="flex flex-col w-full gap-3 items-center">
          <div className="relative">
            <Avatar className="bg-blue-200 w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* สร้าง Badge เองด้วย div */}
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600 border-2 border-white"></span>
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span>XXXX XXXX</span>
            <span className="text-muted-foreground">xxxx@xxxx.com</span>
          </div>
        </div>
        {items.map((item, i) => (
          <a
            href="#"
            key={i}
            className={`w-full text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground ${i === 2 ? "text-primary font-semibold" : "font-base"}`}
          >
            <item.icon className="w-4 h-4 " />
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex flex-col sm:hidden w-full border py-2 px-4">
        <button
          className="flex w-full items-center justify-between duration-300 cursor-pointer"
          onClick={() => setSmOpenMenu((prev) => !prev)}
        >
          <div className="flex items-center gap-2 ">
            <Menu />
            Menu
          </div>
          <ChevronDown
            className={`${smOpenMenu ? "rotate-180" : " rotate-0"} duration-300`}
          />
        </button>
        <div className={`mt-6 ${smOpenMenu ? "h-20" : "h-0"} duration-200`}>
          2123
        </div>
      </div>
    </div>
  );
}
