"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

interface StepData {
  num: string;
  title: string;
  desc: string;
  details: string[];
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
        "Follow where information goes — and where it gets lost",
        "Find the handoffs that cause delays",
        "Identify the questions your team answers over and over",
      ],
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
        "No unnecessary features — only what moves your business forward",
      ],
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
    <section className="w-full bg-scarlet-fire-50/50 border-t border-scarlet-fire-200/60">
      <div className="w-[90vw] mx-auto min-h-screen lg:min-h-0 lg:h-screen flex flex-col justify-between py-6 lg:py-8 overflow-y-auto lg:overflow-hidden">
        <div className="flex-shrink-0 flex flex-col md:flex-row md:items-end md:justify-between border-b border-scarlet-fire-200/40 pb-4 mb-4 gap-2">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-scarlet-fire-600 uppercase">How We Work</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-scarlet-fire-950 mt-0.5">Observe. Build. Improve.</h2>
          </div>
          <p className="text-xs sm:text-sm text-scarlet-fire-900 max-w-md md:text-right leading-relaxed">
            We understand your business before we write a single line of code. Then we build only what solves your problems.
          </p>
        </div>

        <div className="flex-grow lg:h-0 lg:min-h-0">
          <BentoGrid className="h-full max-w-none gap-4 grid-rows-6 lg:grid-rows-3 lg:grid-cols-3">
            {steps.map((step, idx) => {
              return (
                <BentoGridItem
                  key={step.num}
                  className={gridSpans[idx]}
                  header={
                    <div className="w-full pb-2 border-b border-scarlet-fire-100/60 flex-shrink-0">
                      <h3 className="methodology-title">
                        {step.num}. {step.title}
                      </h3>
                    </div>
                  }
                  title={null}
                  description={
                    <div className="flex flex-col justify-between flex-grow h-full gap-2 mt-1">
                      <p className="methodology-desc text-sm">
                        {step.desc}
                      </p>

                      <ul className="mt-auto pt-2 space-y-1">
                        {step.details.map((d, i) => (
                          <li key={i} className="text-xs text-scarlet-fire-900 leading-relaxed flex gap-1.5">
                            <span className="text-scarlet-fire-500 mt-0.5">→</span>
                            <span>{d}</span>
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
