"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

interface StepData {
  num: string;
  title: string;
  desc: string;
  details: string[];
  customElement?: React.ReactNode;
  dark?: boolean;
}

export default function MethodologySection() {
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
        <div className="mt-3 p-2.5 bg-scarlet-fire-100/20 border border-scarlet-fire-200/50 rounded-lg flex items-center justify-between gap-2 font-mono text-base">
          <div className="px-2 py-0.5 bg-white border border-scarlet-fire-200 rounded-lg text-scarlet-fire-950 shadow-sm">Inquiry</div>
          <span className="text-scarlet-fire-400">→</span>
          <div className="px-2 py-0.5 bg-scarlet-fire-100/60 border border-scarlet-fire-300/60 rounded-lg text-scarlet-fire-950 font-medium">ADX Router</div>
          <span className="text-scarlet-fire-400">→</span>
          <div className="px-2 py-0.5 bg-scarlet-fire-500/20 border border-scarlet-fire-500/40 rounded-lg text-scarlet-fire-950 font-bold">Action</div>
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
        <div className="mt-3 p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-2 text-left font-sans text-base">
          <div className="max-w-[85%] p-2 bg-[#d9fdd3] text-neutral-800 rounded-lg rounded-tl-none shadow-sm ml-auto text-base leading-tight border border-[#c2f3ba]">
            Hi! I'd like to book an appointment for tomorrow.
          </div>
          <div className="max-w-[85%] p-2 bg-white text-neutral-800 rounded-lg rounded-tr-none shadow-sm border border-neutral-100 mr-auto text-base leading-tight">
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
      dark: true,
    },
  ];

  const gridSpans = [
    "md:col-span-1 lg:col-span-2",
    "md:col-span-1 lg:col-span-1",
    "md:col-span-1 lg:col-span-1",
    "md:col-span-1 lg:col-span-2",
    "md:col-span-1 lg:col-span-2",
    "md:col-span-1 lg:col-span-1",
  ];

  return (
    <section className="w-full bg-scarlet-fire-50/50 border-t border-scarlet-fire-200/60 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex-shrink-0 flex flex-col md:flex-row md:items-end md:justify-between border-b border-scarlet-fire-200/40 pb-4 gap-4">
          <div>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-scarlet-fire-950 tracking-tight leading-tight">
              Observe. Build. Improve.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-scarlet-fire-900 max-w-md md:text-right leading-relaxed">
            We understand your business before we write a single line of code. Then we build only what solves your problems.
          </p>
        </div>

        <div className="w-full">
          <BentoGrid className="h-full max-w-none gap-4 grid-rows-6 lg:grid-rows-3 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const isDark = step.dark;
              return (
                <BentoGridItem
                  key={step.num}
                  className={cn(
                    gridSpans[idx],
                    isDark && "bg-scarlet-fire-950 border-scarlet-fire-900 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-all duration-300"
                  )}
                  header={
                    <div className={cn(
                      "w-full pb-2 border-b flex-shrink-0",
                      isDark ? "border-scarlet-fire-900" : "border-scarlet-fire-100/60"
                    )}>
                      <h3 className={cn(
                        "text-2xl font-bold tracking-tight",
                        isDark ? "text-white" : "methodology-title text-scarlet-fire-950"
                      )}>
                        {step.num}. {step.title}
                      </h3>
                    </div>
                  }
                  title={null}
                  description={
                    <div className="flex flex-col justify-between flex-grow h-full gap-2 mt-1">
                      <p className={cn(
                        "text-base leading-relaxed",
                        isDark ? "text-scarlet-fire-200" : "methodology-desc text-neutral-600"
                      )}>
                        {step.desc}
                      </p>

                      {step.customElement}

                      <ul className="mt-auto pt-2 space-y-1">
                        {step.details.map((d, i) => (
                          <li key={i} className="text-base leading-relaxed flex gap-1.5">
                            <span className={cn(
                              "mt-0.5",
                              isDark ? "text-scarlet-fire-400" : "text-scarlet-fire-500"
                            )}>→</span>
                            <span className={isDark ? "text-scarlet-fire-100" : "text-scarlet-fire-900"}>
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              );
            })}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
