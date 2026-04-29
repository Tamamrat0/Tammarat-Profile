import { useEffect, useState } from "react";

export function useScrollSpy(
  ids: string[],
  offset: number = 120 // ระยะจาก top (เผื่อ header)
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ids.length === 0) {
        setActiveId(null);
        return;
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (reachedBottom) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      let currentId: string = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.bottom > offset) {
          currentId = id;
          break;
        }
      }

      setActiveId(currentId);
    };

    handleScroll(); // run ครั้งแรก
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
