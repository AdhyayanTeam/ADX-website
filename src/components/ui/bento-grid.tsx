import { cn } from "@/lib/utils";
import React, { useRef } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/bento w-full rounded-3xl border border-glaucous-200/80 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(45,72,159,0.06)] hover:border-glaucous-300 transition-all duration-300 relative overflow-hidden flex flex-col justify-between p-4 sm:p-5",
        className,
      )}
    >
      {/* Spotlight background glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: "radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(45, 72, 159, 0.05), transparent 80%)",
        }}
      />

      {/* Spotlight border glow following cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 border border-vivid-royal-500/20 z-10"
        style={{
          maskImage: "radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)",
          WebkitMaskImage: "radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)",
        }}
      />

      <div className="relative z-20 flex flex-col justify-between h-full w-full gap-3 flex-grow">
        {header && <div className="flex-shrink-0">{header}</div>}
        <div className="transition duration-200 group-hover/bento:translate-x-1 flex flex-col gap-2 flex-grow h-full justify-between">
          <div className="flex flex-col gap-2">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            {title && <div className="flex-shrink-0">{title}</div>}
          </div>
          {description && <div className="flex-grow flex flex-col justify-between">{description}</div>}
        </div>
      </div>
    </div>
  );
};
