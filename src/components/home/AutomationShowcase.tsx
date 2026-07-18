"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { 
  IconUserPlus, 
  IconBrandWhatsapp, 
  IconBrain, 
  IconDatabase, 
  IconChartBar, 
  IconFileText 
} from "@tabler/icons-react";

export default function AutomationShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Lead Intake",
      desc: "Incoming lead captured from Meta Ads or Web Form.",
      icon: IconUserPlus,
      color: "text-accent",
      bg: "bg-accent/5",
      border: "border-accent/20"
    },
    {
      label: "WhatsApp Engine",
      desc: "Instant automated WhatsApp greeting & intake form link.",
      icon: IconBrandWhatsapp,
      color: "text-[#494949]",
      bg: "bg-[#494949]/5",
      border: "border-[#494949]/20"
    },
    {
      label: "AI Assistant",
      desc: "Analyzes intake responses, categories intent, and tags lead.",
      icon: IconBrain,
      color: "text-accent",
      bg: "bg-accent/5",
      border: "border-accent/20"
    },
    {
      label: "Central CRM",
      desc: "Logs profile, checks availability, and assigns batch/slot.",
      icon: IconDatabase,
      color: "text-[#7c7a7a]",
      bg: "bg-[#7c7a7a]/5",
      border: "border-[#7c7a7a]/20"
    },
    {
      label: "Dashboard",
      desc: "Generates secure invoice and schedules installment reminders.",
      icon: IconChartBar,
      color: "text-[#494949]",
      bg: "bg-[#494949]/5",
      border: "border-[#494949]/20"
    },
    {
      label: "Live Reports",
      desc: "Updates conversion metrics and triggers team alert.",
      icon: IconFileText,
      color: "text-accent",
      bg: "bg-accent/5",
      border: "border-accent/20"
    }
  ];

  // Auto-advance workflow steps to animate data flow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="w-full py-20 lg:py-32 bg-background relative z-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
            Workflow Logic
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">
            End-to-End Automation Showcase
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Watch how a single client action triggers a chain of background operations, syncing databases and alerting staff instantly.
          </p>
        </div>

        {/* Workflow Horizontal Stream */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-border/40 hidden lg:block z-0">
            <m.div
              className="h-full bg-accent origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (activeStep) / (steps.length - 1) }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;

              return (
                <div
                  key={step.label}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center space-y-4 cursor-pointer group"
                >
                  {/* Step Bubble Icon - Dynamic Neumorphic tactile transition */}
                  <m.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                      isActive 
                        ? "neumorphic-flat scale-110 z-10" 
                        : "neumorphic-sunken opacity-70 hover:opacity-100"
                    }`}
                    whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                  >
                    {/* Active Pulsing Ring */}
                    {isActive && (
                      <m.span 
                        className="absolute inset-0 rounded-2xl border border-accent/40"
                        layoutId="activeRing"
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      />
                    )}
                    
                    <div className={`p-2 rounded-xl ${step.bg} ${isActive ? step.color : "text-secondary group-hover:text-foreground"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </m.div>

                  {/* Details Block */}
                  <div className="space-y-1">
                    <h3 className={`text-sm font-bold tracking-tight transition-colors ${isActive ? "text-accent" : "text-foreground"}`}>
                      {step.label}
                    </h3>
                    <p className="text-xs text-secondary leading-normal px-2 max-w-[150px] mx-auto">
                      {step.desc}
                    </p>
                  </div>

                  {/* Flow Arrow (Mobile indicator) */}
                  {idx < steps.length - 1 && (
                    <div className="text-border font-bold text-xs py-1 block lg:hidden">
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
