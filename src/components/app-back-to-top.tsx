"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AppBackToTop({ threshold = 300 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      type="button"
      size="icon"
      aria-label="กลับไปด้านบน"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full shadow-lg transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
