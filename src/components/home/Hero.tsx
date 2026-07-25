"use client";

import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import InteractiveShader from "@/components/ui/InteractiveShader";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#030303] py-20 px-6 z-10">
      {/* Interactive WebGL Liquid Shader Background */}
      <InteractiveShader />

      {/* Subtle Overlay Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff/[0.015]_1px,transparent_1px),linear-gradient(to_bottom,#ffffff/[0.015]_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Main Content Layout */}
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 relative z-20 pointer-events-auto">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#ff5d73] border border-[#ff5d73]/20 font-bold px-3.5 py-1 bg-[#ff5d73]/5 rounded-full select-none">
            Digital Growth & Automation
          </span>
        </div>

        {/* Headline (Max 2 lines) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white">
          Build & Automate.<br className="hidden sm:inline" />
          Grow Your Business.
        </h1>

        {/* Subtext (Max 20 words, clean & legible) */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
          We build custom websites, automate daily workflows with AI, and grow your customer pipeline with precision ads.
        </p>

        {/* Action CTAs (Max 2, no duplicate intent) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white text-zinc-950 hover:bg-zinc-200 active:scale-[0.98] transition-all duration-150 group"
          >
            <span>Explore Services</span>
            <IconArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 active:scale-[0.98] transition-all duration-150"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
