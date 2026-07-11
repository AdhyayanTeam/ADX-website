"use client";

import { useState, useMemo } from "react";
import Stack from "./Stack";
import { cn } from "@/lib/utils";

interface StepData {
  num: string;
  title: string;
  desc: string;
  details: string[];
  customElement?: React.ReactNode;
  dark?: boolean;
  image?: string;
}

const steps: StepData[] = [
  {
    num: "01",
    title: "Observe",
    desc: "We spend time in your business before writing any code.",
    details: [
      "We ask about your business, your team, and your daily challenges",
      "We watch how your staff handles enquiries, scheduling, and payments",
      "We find where work gets stuck and where things get missed",
    ],
    image: "/methodology_1.png",
  },
  {
    num: "02",
    title: "Map",
    desc: "We trace every step from the first customer message to the final payment.",
    details: [
      "Follow where information goes, and where it gets lost",
      "Find the handoffs that cause delays",
      "Identify the questions your team answers over and over",
    ],
    customElement: (
      <div className="w-full max-w-[200px] mx-auto p-3 bg-white border border-scarlet-fire-200/60 rounded-xl flex flex-col items-center gap-2 font-mono text-xs shadow-sm">
        <div className="w-full text-center px-2 py-1 bg-scarlet-fire-50/50 border border-scarlet-fire-100 rounded-lg text-scarlet-fire-950 font-medium">
          Inquiry
        </div>
        <span className="text-scarlet-fire-500 font-extrabold text-sm leading-none">↓</span>
        <div className="w-full text-center px-2 py-1 bg-scarlet-fire-100/60 border border-scarlet-fire-200 rounded-lg text-scarlet-fire-950 font-semibold shadow-sm">
          ADX Router
        </div>
        <span className="text-scarlet-fire-500 font-extrabold text-sm leading-none">↓</span>
        <div className="w-full text-center px-2 py-1 bg-scarlet-fire-950 text-white rounded-lg font-bold shadow-md">
          Action
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Design",
    desc: "We simplify before we build anything.",
    details: [
      "48-hour report with our findings and recommendations",
      "Redesign the workflow to remove manual steps",
      "Agree on what success looks like with your team",
    ],
    image: "/methodology_3.png",
  },
  {
    num: "04",
    title: "Build",
    desc: "We build only what solves the problems we found. Nothing extra.",
    details: [
      "Custom WhatsApp flows that match your exact process",
      "A database that organizes your customer information",
      "No unnecessary features - only what moves your business forward",
    ],
    customElement: (
      <div className="w-full p-2.5 bg-white border border-neutral-200 rounded-lg space-y-1.5 text-left font-sans text-xs">
        <div className="max-w-[85%] p-1.5 bg-[#d9fdd3] text-neutral-800 rounded-lg rounded-tl-none shadow-sm ml-auto leading-tight border border-[#c2f3ba]">
          Hi! I'd like to book an appointment for tomorrow.
        </div>
        <div className="max-w-[85%] p-1.5 bg-white text-neutral-800 rounded-lg rounded-tr-none shadow-sm border border-neutral-100 mr-auto leading-tight">
          Sure! We have slots open at 10 AM and 2 PM. Please tap to choose.
        </div>
      </div>
    ),
  },
  {
    num: "05",
    title: "Deploy",
    desc: "We roll out slowly. Your team starts using it within two weeks.",
    details: [
      "14-day pilot focused on your biggest problem",
      "Your team uses the same tools they already know",
      "A simple dashboard shows adoption and results in real time",
    ],
    image: "/methodology_5.png",
  },
  {
    num: "06",
    title: "Improve",
    desc: "We keep making things better based on how your team actually uses the system.",
    details: [
      "Monthly check-ins to review what's working",
      "Adjust automations based on real usage data",
      "Add new workflows as your business grows",
    ],
    image: "/methodology_6.png",
  },
];

export default function MethodologySection() {
  const [activeStepId, setActiveStepId] = useState(1);

  const cardElements = useMemo(() => {
    return steps.map((step) => {
      const isDark = step.dark;
      return (
        <div
          key={step.num}
          className={cn(
            "w-full h-full p-5 sm:p-8 bg-white border border-scarlet-fire-200 rounded-2xl shadow-xl flex flex-col justify-between relative select-none",
            isDark && "bg-scarlet-fire-950 border-scarlet-fire-900 text-white"
          )}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Header */}
          <div className={cn(
            "w-full pb-2 border-b flex-shrink-0",
            isDark ? "border-scarlet-fire-900" : "border-scarlet-fire-100/60"
          )}>
            <h3 className={cn(
              "text-lg sm:text-2xl font-bold methodology-title tracking-tight",
              isDark ? "text-white" : "text-scarlet-fire-950"
            )}>
              {step.num}. {step.title}
            </h3>
          </div>

          {/* Content Body */}
          <div className="flex-1 flex flex-col justify-between min-h-0 mt-3 sm:mt-4 relative">
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 h-full min-h-0">
              
              {/* Left Column (Text & Details grouped at top) */}
              <div className="flex-1 flex flex-col gap-3 justify-start">
                <p className={cn(
                  "text-xs sm:text-base leading-relaxed font-medium",
                  isDark ? "text-scarlet-fire-200" : "text-neutral-700"
                )}>
                  {step.desc}
                </p>
                <ul className="space-y-1 sm:space-y-2">
                  {step.details.map((d, i) => (
                    <li key={i} className="text-xs sm:text-sm leading-relaxed flex items-start gap-1.5">
                      <span className={cn(
                        "mt-1 flex-shrink-0 text-xs",
                        isDark ? "text-scarlet-fire-400" : "text-scarlet-fire-500"
                      )}>→</span>
                      <span className={isDark ? "text-scarlet-fire-100" : "text-scarlet-fire-900"}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column (Asset Container) */}
              <div className="w-full sm:w-[45%] h-[130px] sm:h-full flex-shrink-0 self-center">
                <div className="w-full h-full rounded-xl overflow-hidden border border-scarlet-fire-200/40 bg-scarlet-fire-50/20 relative flex items-center justify-center p-3 sm:p-4">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-lg pointer-events-none select-none"
                    />
                  ) : step.customElement ? (
                    <div className="w-full pointer-events-none select-none">
                      {step.customElement}
                    </div>
                  ) : null}
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    });
  }, []);

  return (
    <section className="w-full bg-scarlet-fire-50/50 border-t border-scarlet-fire-200/60 py-16 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Headings & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-scarlet-fire-950 tracking-tight leading-tight">
                Observe.
                <br />
                Build.
                <br />
                Improve.
              </h2>
              <p className="text-base sm:text-lg text-scarlet-fire-900 leading-relaxed max-w-md mx-auto lg:mx-0">
                We understand your business before we write a single line of code. Then we build only what solves your problems.
              </p>
            </div>

            {/* Instruction and Indicators - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block pt-6 border-t border-scarlet-fire-200/60 space-y-4">
              <p className="text-xs font-semibold text-scarlet-fire-500 tracking-widest animate-pulse">
                Swipe or click cards to flip methodology
              </p>
              
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {steps.map((step, idx) => {
                  const isActive = activeStepId === idx + 1;
                  return (
                    <div
                      key={step.num}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        isActive ? "w-8 bg-scarlet-fire-600" : "w-2 bg-scarlet-fire-200"
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Card Stack */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] h-[450px] sm:h-[410px] relative">
              <Stack
                randomRotation={true}
                sensitivity={120}
                sendToBackOnClick={true}
                mobileClickOnly={false}
                cards={cardElements}
                onCardChange={(id) => setActiveStepId(id)}
              />
            </div>
          </div>

          {/* Mobile Pagination Dots & Instruction - Visible only on mobile (rendered at the bottom of the section) */}
          <div className="w-full flex flex-col items-center gap-3 mt-6 lg:hidden">
            <p className="text-xs font-semibold text-scarlet-fire-500 tracking-widest animate-pulse">
              Swipe or click cards to flip methodology
            </p>
            <div className="flex gap-2">
              {steps.map((step, idx) => {
                const isActive = activeStepId === idx + 1;
                return (
                  <div
                    key={step.num}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      isActive ? "w-8 bg-scarlet-fire-600" : "w-2 bg-scarlet-fire-200"
                    )}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
