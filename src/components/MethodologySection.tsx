"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

interface StepData {
  num: string;
  title: string;
  desc: string;
  traditional: string;
  optimized: string;
  metricName: string;
  metricVal: string;
}

export default function MethodologySection() {
  const steps: StepData[] = [
    {
      num: "01",
      title: "Observe & Shadow",
      desc: "Shadow daily routines to locate invisible pipeline bottlenecks.",
      traditional: "Manual chats",
      optimized: "Webhook tracking",
      metricName: "Leaks Spotted",
      metricVal: "10-15 points",
    },
    {
      num: "02",
      title: "Bottleneck Mapping",
      desc: "Identify administrative copy-paste tasks slowing follow-ups.",
      traditional: "3hr copy-paste",
      optimized: "Queue triggers",
      metricName: "Reclaimed Time",
      metricVal: "12-18 hrs/wk",
    },
    {
      num: "03",
      title: "Attach Metrics",
      desc: "Establish baseline response speeds and conversion analytics.",
      traditional: "Guessing conversion",
      optimized: "Cohort tracking",
      metricName: "Response Latency",
      metricVal: "12m → 15s",
    },
    {
      num: "04",
      title: "Flow Redesign",
      desc: "Simplify communication logic into high-adoption routines.",
      traditional: "Complex Excel",
      optimized: "One-click actions",
      metricName: "Steps Removed",
      metricVal: "Up to 60%",
    },
    {
      num: "05",
      title: "Deploy Engines",
      desc: "Construct operations hub with WhatsApp APIs and secure databases.",
      traditional: "Heavy CRMs",
      optimized: "Lightweight APIs",
      metricName: "System Uptime",
      metricVal: "99.9% Uptime",
    },
    {
      num: "06",
      title: "Continuous Tuning",
      desc: "Conduct monthly reviews to optimize triggers based on data.",
      traditional: "Stagnant code",
      optimized: "CTO support",
      metricName: "Staff Compliance",
      metricVal: "98.4% Adoption",
    },
  ];

  // Responsive grid span utility
  const gridSpans = [
    "md:col-span-1 lg:col-span-2", // 01 (Wide)
    "md:col-span-1 lg:col-span-1", // 02 (Narrow)
    "md:col-span-1 lg:col-span-1", // 03 (Narrow)
    "md:col-span-1 lg:col-span-2", // 04 (Wide)
    "md:col-span-1 lg:col-span-2", // 05 (Wide)
    "md:col-span-1 lg:col-span-1", // 06 (Narrow)
  ];

  return (
    <section className="w-full bg-scarlet-fire-50/50 border-t border-scarlet-fire-200/60">
      <div className="w-[90vw] mx-auto min-h-screen lg:min-h-0 lg:h-screen flex flex-col justify-between py-6 lg:py-8 overflow-y-auto lg:overflow-hidden">
        {/* Header Area */}
        <div className="flex-shrink-0 flex flex-col md:flex-row md:items-end md:justify-between border-b border-scarlet-fire-200/40 pb-4 mb-4 gap-2">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-scarlet-fire-600 uppercase">Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-scarlet-fire-950 mt-0.5">The Operational Blueprint.</h2>
          </div>
          <p className="text-xs sm:text-sm text-scarlet-fire-900 max-w-md md:text-right leading-relaxed">
            Six continuous phases designed to optimize systems first, and only write code that moves numbers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="flex-grow lg:h-0 lg:min-h-0">
          <BentoGrid className="h-full max-w-none gap-4 grid-rows-6 lg:grid-rows-3 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const isWide = gridSpans[idx].includes("col-span-2");

              return (
                <BentoGridItem
                  key={step.num}
                  className={gridSpans[idx]}
                  header={
                    <div className="w-full pb-2 border-b border-scarlet-fire-100/60 flex-shrink-0">
                      <h3 className="methodology-title">
                        {step.title}
                      </h3>
                    </div>
                  }
                  title={null}
                  description={
                    <div className="flex flex-col justify-between flex-grow h-full gap-3 mt-1">
                      <p className="methodology-desc">
                        {step.desc}
                      </p>

                      {isWide ? (
                        /* WIDE LAYOUT (Horizontal bottom layout) */
                        <div className="flex justify-between items-center mt-auto pt-2 gap-4">
                          {/* Path Transition */}
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="methodology-path-old">
                              {step.traditional}
                            </span>
                            <span className="text-xs text-scarlet-fire-400 font-mono">→</span>
                            <span className="methodology-path-new">
                              {step.optimized}
                            </span>
                          </div>

                          {/* Metric block */}
                          <div className="flex items-baseline gap-1.5 flex-shrink-0">
                            <span className="methodology-metric-label">
                              {step.metricName}:
                            </span>
                            <span className="methodology-metric-val">
                              {step.metricVal}
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* NARROW LAYOUT (Stacked bottom layout) */
                        <div className="flex flex-col gap-2 mt-auto pt-2">
                          {/* Path Transition */}
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="methodology-path-old">
                              {step.traditional}
                            </span>
                            <span className="text-xs text-scarlet-fire-400 font-mono">→</span>
                            <span className="methodology-path-new">
                              {step.optimized}
                            </span>
                          </div>

                          {/* Metric Row */}
                          <div className="flex justify-between items-center border-t border-scarlet-fire-100/40 pt-2">
                            <span className="methodology-metric-label">
                              {step.metricName}
                            </span>
                            <span className="methodology-metric-val">
                              {step.metricVal}
                            </span>
                          </div>
                        </div>
                      )}
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
