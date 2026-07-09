"use client";

import { useRef, useEffect } from "react";
import { track } from "@/lib/track";
import { setLastSection } from "@/lib/usePageAnalytics";

export default function SectionTracker({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            setLastSection(id);
            track("section_view", undefined, { section: id });

            const sectionEl = entry.target.closest("section");
            if (sectionEl) sectionEl.dataset.sectionFired = "1";

            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [id]);

  return <div ref={ref} className="absolute top-0 left-0 w-0 h-0 pointer-events-none" />;
}
