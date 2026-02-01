import { useEffect, useState } from "react";

export function useScrollSpy(
  ids: string[],
  offset: number = 120 // ระยะจาก top (เผื่อ header)
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentId: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= offset) {
          currentId = id;
        }
      }

      setActiveId(currentId ?? ids[0]);
    };

    handleScroll(); // run ครั้งแรก
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
