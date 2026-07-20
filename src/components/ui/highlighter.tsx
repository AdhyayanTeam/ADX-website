"use client";

import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "underline" | "circle" | "box" | "bracket" | "strike-through" | "crossed-off";
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color,
  strokeWidth = 2,
  animationDuration = 800,
  iterations = 1,
  isView = true,
}: HighlighterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // Premium golden amber/yellow defaults for high-contrast professional look
  const defaultColor = action === "highlight" 
    ? "#FFE08240" // Soft, translucent golden marker highlight
    : "#FFA000";  // Rich amber gold for underlines

  const activeColor = color || defaultColor;

  useEffect(() => {
    if (!ref.current) return;

    let annotation: any = null;

    if (isView) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!annotation) {
                annotation = annotate(ref.current!, {
                  type: action,
                  color: activeColor,
                  strokeWidth,
                  animationDuration,
                  iterations,
                });
                annotation.show();
              }
              observer.unobserve(ref.current!);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
        if (annotation) {
          try {
            annotation.hide();
          } catch (e) {
            // Ignore error if element is unmounted
          }
        }
      };
    } else {
      annotation = annotate(ref.current, {
        type: action,
        color: activeColor,
        strokeWidth,
        animationDuration,
        iterations,
      });
      annotation.show();

      return () => {
        if (annotation) {
          try {
            annotation.hide();
          } catch (e) {
            // Ignore
          }
        }
      };
    }
  }, [action, activeColor, strokeWidth, animationDuration, iterations, isView]);

  return (
    <span ref={ref} className="inline-block relative">
      {children}
    </span>
  );
}
