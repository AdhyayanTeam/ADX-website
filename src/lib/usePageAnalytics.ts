import { useEffect, useRef } from "react";
import { track } from "./track";

let lastSectionGlobal: string | null = null;

export function setLastSection(id: string) {
  lastSectionGlobal = id;
}

export function usePageAnalytics(page: string) {
  const startTime = useRef<number | null>(null);
  const maxScroll = useRef(0);

  useEffect(() => {
    startTime.current = Date.now();
    track("page_view", page);

    const handleScroll = () => {
      const scrollPct = Math.min(
        100,
        Math.round(
          (window.scrollY + window.innerHeight) /
            Math.max(document.body.scrollHeight, window.innerHeight) * 100,
        ),
      );
      if (scrollPct > maxScroll.current) maxScroll.current = scrollPct;
    };

    const elapsed = () => Math.round((Date.now() - (startTime.current ?? Date.now())) / 1000);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("[data-track-cta]") as HTMLElement | null;
      if (link) {
        const source = link.getAttribute("data-track-cta") || "unknown";
        track("cta_click", page, { source, time_to_click_s: elapsed() });
      }
    };

    const handleExit = () => {
      track("exit", page, {
        time_on_page_s: elapsed(),
        max_scroll_pct: maxScroll.current,
        last_section: lastSectionGlobal || "unknown",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleClick, true);
    window.addEventListener("beforeunload", handleExit);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") handleExit();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick, true);
      window.removeEventListener("beforeunload", handleExit);
    };
  }, [page]);
}
