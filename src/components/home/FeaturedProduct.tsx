"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  IconArrowRight, 
  IconBrandWhatsapp, 
  IconUsers, 
  IconReceipt, 
  IconCalendar,
  IconShield,
  IconCheck,
} from "@tabler/icons-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Highlighter } from "@/registry/magicui/highlighter";
import Logo from "../Logo";

export default function FeaturedProduct() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null); // Center Hub

  return (
    <section className="w-full py-20 lg:py-28 bg-background relative z-10 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-center space-y-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
            Flagship Platform
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            ADX <Highlighter action="highlight">Institute OS</Highlighter>
          </h2>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            The complete operating system for modern educational organizations. We run the backend operations so your teaching team can focus on outcomes.
          </p>
        </div>

        {/* Center: Animated Beam Diagram with Backlit Glow */}
        <div className="relative w-full max-w-7xl mb-12 group">
          {/* Backlit Glow Element (behind diagram box) */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/35 via-[#ff5d73]/25 to-accent/35 rounded-[36px] blur-3xl opacity-85 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 -z-10" />
          
          {/* Main Diagram Box */}
          <div 
            ref={containerRef}
            className="relative w-full h-[480px] flex items-center justify-between p-6 sm:p-16 overflow-hidden rounded-3xl border border-border/80 bg-white/80 dark:bg-zinc-950/20 backdrop-blur-[2px] shadow-sm select-none z-10"
          >
            {/* Subtle Dot Pattern Background with Radial Mask (Inner Box Only) */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#27272a_1.5px,transparent_1.5px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)] opacity-85 pointer-events-none" 
            />
            {/* Left Column Description (Desktop Only) */}
            <div className="hidden lg:flex flex-col justify-between h-full w-64 text-right pr-6 py-10 z-20">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Student CRM</h4>
                <p className="text-xs text-secondary leading-relaxed">Automate leads from Ads to batch allocation.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Fee Management</h4>
                <p className="text-xs text-secondary leading-relaxed">Razorpay loops and auto installment alerts.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">WhatsApp Engine</h4>
                <p className="text-xs text-secondary leading-relaxed">Direct templates, reports and status alerts.</p>
              </div>
            </div>

            {/* Inner Constrained Grid (Hexagon shape matching documentation) */}
            <div className="flex-1 flex h-full max-w-2xl flex-col items-stretch justify-between py-6">
              
              {/* Row 1 */}
              <div className="flex flex-row items-center justify-between">
                <div ref={div1Ref} className="w-16 h-16 rounded-full border border-border bg-background shadow-md flex items-center justify-center text-secondary transition-colors hover:text-accent hover:border-accent/30 z-10 cursor-default">
                  <IconUsers className="w-6 h-6" />
                </div>
                <div ref={div4Ref} className="w-16 h-16 rounded-full border border-border bg-background shadow-md flex items-center justify-center text-secondary transition-colors hover:text-accent hover:border-accent/30 z-10 cursor-default">
                  <IconCalendar className="w-6 h-6" />
                </div>
              </div>

              {/* Row 2 (Center Hub) */}
              <div className="flex flex-row items-center justify-between">
                <div ref={div2Ref} className="w-16 h-16 rounded-full border border-border bg-background shadow-md flex items-center justify-center text-secondary transition-colors hover:text-accent hover:border-accent/30 z-10 cursor-default">
                  <IconReceipt className="w-6 h-6" />
                </div>

                {/* Center Core Hub */}
                <div ref={div7Ref} className="w-24 h-24 rounded-full border-2 border-accent bg-background shadow-lg flex flex-col items-center justify-center text-accent p-2 z-10 scale-110 relative translate-y-8 group-hover:scale-115 transition-transform duration-500 cursor-default">
                  <Logo className="w-12 h-auto text-accent mb-0.5" />
                  <span className="text-[9px] font-mono font-bold tracking-tighter uppercase leading-none opacity-80">INSTITUTE OS</span>
                </div>

                <div ref={div5Ref} className="w-16 h-16 rounded-full border border-border bg-background shadow-md flex items-center justify-center text-secondary transition-colors hover:text-accent hover:border-accent/30 z-10 cursor-default">
                  <IconShield className="w-6 h-6" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-row items-center justify-between">
                <div ref={div3Ref} className="w-16 h-16 rounded-full border border-border bg-background shadow-md flex items-center justify-center text-secondary transition-colors hover:text-accent hover:border-accent/30 z-10 cursor-default">
                  <IconBrandWhatsapp className="w-6 h-6" />
                </div>
                <div ref={div6Ref} className="w-16 h-16 rounded-full border border-border bg-background shadow-md flex items-center justify-center text-secondary transition-colors hover:text-accent hover:border-accent/30 z-10 cursor-default">
                  <IconCheck className="w-6 h-6" />
                </div>
              </div>

            </div>

            {/* Right Column Description (Desktop Only) */}
            <div className="hidden lg:flex flex-col justify-between h-full w-64 text-left pl-6 py-10 z-20">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Faculty Portal</h4>
                <p className="text-xs text-secondary leading-relaxed">Lecture logs, notes upload, schedule tracks.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">HRMS & Attendance</h4>
                <p className="text-xs text-secondary leading-relaxed">QR code check-ins and staff salary sheets.</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Parent & CMS</h4>
                <p className="text-xs text-secondary leading-relaxed">Unified study portals and transparent access.</p>
              </div>
            </div>

            {/* Animated Beams connecting outer nodes to central hub */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div7Ref}
              curvature={-10}
              gradientStartColor="#ff5d73"
              gradientStopColor="#ff5d73"
              duration={3}
              delay={0.8}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div7Ref}
              gradientStartColor="#ff5d73"
              gradientStopColor="#ff5d73"
              duration={3}
              delay={0}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div7Ref}
              curvature={10}
              gradientStartColor="#ff5d73"
              gradientStopColor="#ff5d73"
              duration={3}
              delay={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={div7Ref}
              curvature={-10}
              reverse={true}
              gradientStartColor="#ff5d73"
              gradientStopColor="#ff5d73"
              duration={3}
              delay={1.2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div7Ref}
              reverse={true}
              gradientStartColor="#ff5d73"
              gradientStopColor="#ff5d73"
              duration={3}
              delay={0.2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
              curvature={10}
              reverse={true}
              gradientStartColor="#ff5d73"
              gradientStopColor="#ff5d73"
              duration={3}
              delay={1.6}
            />
          </div>
        </div>

        {/* Mobile Descriptions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg lg:hidden mb-12 text-center">
          <div className="p-4 rounded-xl border border-border bg-zinc-950/[0.01]">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Student CRM</h4>
            <p className="text-[11px] text-secondary mt-1">Automate leads from Ads to batch allocation.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-zinc-950/[0.01]">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Fee Management</h4>
            <p className="text-[11px] text-secondary mt-1">Razorpay loops and auto installment alerts.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-zinc-950/[0.01]">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">WhatsApp Engine</h4>
            <p className="text-[11px] text-secondary mt-1">Direct templates, reports and status alerts.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-zinc-950/[0.01]">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Faculty Portal</h4>
            <p className="text-[11px] text-secondary mt-1">Lecture logs, notes upload, schedule tracks.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-zinc-950/[0.01]">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">HRMS & Attendance</h4>
            <p className="text-[11px] text-secondary mt-1">QR code check-ins and staff salary sheets.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-zinc-950/[0.01]">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Parent & CMS</h4>
            <p className="text-[11px] text-secondary mt-1">Unified study portals and transparent access.</p>
          </div>
        </div>

        {/* Explore Button */}
        <Link
          href="/products/institute-os"
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full neumorphic-button-accent group"
        >
          <span>Explore Institute OS</span>
          <IconArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

      </div>
    </section>
  );
}
