"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { MeshGradient } from "@paper-design/shaders-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-4.5rem)] flex items-center py-12 lg:py-20 overflow-hidden bg-background">
      {/* Background Mesh Gradient Shader */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          style={{ height: "100%", width: "100%" }}
          distortion={0.8}
          swirl={0.1}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={["#000000", "#494949", "#7c7a7a", "#ff5d73"]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Left-Aligned Premium Typography Content */}
        <m.div 
          className="max-w-3xl flex flex-col items-start text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow tag */}
          <m.span 
            className="font-mono text-xs uppercase tracking-widest text-white border border-white/10 font-bold px-3 py-1 bg-white/5 rounded-full"
            variants={itemVariants}
          >
            Digital Growth & Automation
          </m.span>
 
          {/* Heading */}
          <m.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.0] text-white text-wrap-balance"
            variants={itemVariants}
          >
            Build & Automate.<br />
            Grow Your Business.
          </m.h1>

          {/* Subheading */}
          <m.p 
            className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[45ch] text-wrap-pretty"
            variants={itemVariants}
          >
            We help growing businesses build modern websites, automate operations with AI, streamline workflows through custom business systems, and accelerate growth with data-driven digital marketing.
          </m.p>

          {/* CTAs */}
          <m.div 
            className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto"
            variants={itemVariants}
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all group"
            >
              <span>Explore Products</span>
              <IconArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/15 active:scale-[0.98] transition-all"
            >
              Book Strategy Call
            </Link>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
