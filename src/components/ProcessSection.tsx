"use client";

import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { 
  IconPhoneCall, 
  IconSearch, 
  IconRocket, 
  IconCpu, 
  IconTrendingUp, 
  IconArrowRight 
} from "@tabler/icons-react";

interface StepItem {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position to draw timeline progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  const steps: StepItem[] = [
    {
      step: "1",
      title: "Discovery Call",
      desc: "A 30-minute conversation to identify your primary manual bottlenecks.",
      icon: IconPhoneCall,
    },
    {
      step: "2",
      title: "Operations Audit",
      desc: "We shadow your team to map information paths and locate process leaks.",
      icon: IconSearch,
    },
    {
      step: "3",
      title: "14-Day Pilot",
      desc: "We build and deploy a lightweight, focused prototype in two weeks.",
      icon: IconRocket,
    },
    {
      step: "4",
      title: "Full-Scale Build",
      desc: "We engineer your complete automated workflows and database syncs.",
      icon: IconCpu,
    },
    {
      step: "5",
      title: "Continuous Tuning",
      desc: "We optimize, review analytics, and adapt systems monthly as you scale.",
      icon: IconTrendingUp,
    }
  ];

  return (
    <section className="w-full bg-glaucous-50 border-t border-glaucous-200/80 py-20 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Sticky Intro) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-32 h-fit space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-vivid-royal-950 tracking-tight leading-[1.1] text-wrap-balance">
              How we work with you.
            </h2>
            <p className="text-glaucous-800 text-lg leading-relaxed max-w-md text-wrap-pretty">
              We partner with your team to replace manual bottlenecks with custom automation. Here is our step-by-step path.
            </p>
            <div className="pt-4">
              <Link 
                href="/discovery"
                className="inline-flex items-center gap-2 px-6 py-3 bg-vivid-royal-950 hover:bg-coffee-bean-600 text-white hover:text-vivid-royal-950 rounded-xl font-semibold shadow-md transition-all duration-300 group"
              >
                <span>Book a discovery call</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column (Vertical Timeline) */}
          <div ref={containerRef} className="lg:col-span-7 relative pl-2 sm:pl-6">
            
            {/* Timeline Track Line (Static background) */}
            <div className="absolute left-[31px] sm:left-[47px] top-6 bottom-6 w-[2px] bg-glaucous-200/50" />
            
            {/* Scroll-Linked Progress Line overlay */}
            <m.div 
              className="absolute left-[31px] sm:left-[47px] top-6 bottom-6 w-[2px] bg-coffee-bean-500 origin-top"
              style={{ scaleY }}
            />

            {/* Timeline Steps */}
            <div className="space-y-4">
              {steps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <m.div
                    key={idx}
                    initial={{ opacity: 0.35, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-15% 0px -25% 0px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative pl-14 sm:pl-24 pb-12 last:pb-4 group"
                  >
                    {/* Circle Dot Step Indicator */}
                    <div className="absolute left-3 sm:left-6 top-0.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-glaucous-300 bg-white group-hover:border-coffee-bean-500 group-hover:bg-coffee-bean-50 flex items-center justify-center transition-all duration-300 z-10 shadow-sm">
                      <IconComponent className="w-5 h-5 text-glaucous-700 group-hover:text-coffee-bean-600 transition-colors duration-300" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-vivid-royal-950 tracking-tight group-hover:text-coffee-bean-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-base text-glaucous-800 leading-relaxed max-w-xl text-wrap-pretty">
                        {item.desc}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
