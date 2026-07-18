"use client";

import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { 
  IconSearch, 
  IconCompass, 
  IconPalette, 
  IconCode, 
  IconRocket, 
  IconLifebuoy 
} from "@tabler/icons-react";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position to draw progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We spend time shadowing your team, tracking manual handoffs, and identifying where leads and revenue are leaking.",
      icon: IconSearch
    },
    {
      num: "02",
      title: "Strategy",
      desc: "We architect the database schema, mapping API integrations (Tally, Razorpay, etc.), and mapping custom workflows.",
      icon: IconCompass
    },
    {
      num: "03",
      title: "Design",
      desc: "We draft clean user interface layouts, system maps, and dashboard wireframes, ensuring absolute clarity and brand trust.",
      icon: IconPalette
    },
    {
      num: "04",
      title: "Development",
      desc: "We write clean, production-ready code. We build your database, sync pipelines, WhatsApp integrations, and customer dashboards.",
      icon: IconCode
    },
    {
      num: "05",
      title: "Launch",
      desc: "We complete API approval cycles, onboard your staff with simple training sessions, and deploy your custom system.",
      icon: IconRocket
    },
    {
      num: "06",
      title: "Support",
      desc: "We monitor performance, refine codebases, adapt workflows as you scale, and provide ongoing engineering support.",
      icon: IconLifebuoy
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-sm uppercase tracking-widest text-accent font-bold">
            Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            Our Engineering Process
          </h2>
          <p className="text-base text-secondary leading-relaxed max-w-2xl">
            A systematic, collaborative approach to replacing manual bottlenecks with stable digital systems. How we take you from diagnostic to deployment.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (Sticky Intro) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28 h-fit space-y-6">
            <div className="neumorphic-flat rounded-2xl p-6 space-y-4">
              <div>
                <span className="font-mono text-xs font-bold text-accent uppercase bg-accent/5 px-2 py-0.5 rounded">Pilot Model</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">14-Day Initial Deployment</h3>
              <p className="text-sm text-secondary leading-relaxed">
                We believe in delivering immediate value. In typical workflows, we deploy a live, focused pilot of your primary system in 14 days, then expand it iteratively.
              </p>
            </div>
          </div>

          {/* Right Column (Vertical Timeline) */}
          <div ref={containerRef} className="lg:col-span-7 relative pl-4 sm:pl-10">
            
            {/* Timeline Track Line */}
            <div className="absolute left-[31px] sm:left-[43px] top-6 bottom-6 w-[1.5px] bg-border z-0" />
            
            {/* Scroll-Linked Progress Line */}
            <m.div 
              className="absolute left-[31px] sm:left-[43px] top-6 bottom-6 w-[1.5px] bg-accent origin-top z-0"
              style={{ scaleY }}
            />

            {/* Steps list */}
            <div className="space-y-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <m.div
                    key={step.num}
                    className="relative pl-12 sm:pl-20 pb-12 last:pb-4 group"
                    initial={{ opacity: 0.35, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-15% 0px -25% 0px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Circle Dot Step Indicator */}
                    <div className="absolute left-2 sm:left-5 top-0.5 w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-border bg-background group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-center transition-all duration-300 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                      <Icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors duration-300" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs text-secondary font-bold">
                          [ {step.num} ]
                        </span>
                        <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-secondary leading-relaxed max-w-xl">
                        {step.desc}
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
