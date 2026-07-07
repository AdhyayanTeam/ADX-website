"use client";

interface StepData {
  num: string;
  title: string;
  desc: string;
  before: string;
  after: string;
  metricName: string;
  metricVal: string;
}

export default function MethodologySection() {
  const steps: StepData[] = [
    {
      num: "01",
      title: "Observe & Shadow",
      desc: "We shadow your staff's daily routines. We map every manual handoff, WhatsApp chat, and Google Sheet edit to locate invisible leaks.",
      before: "Counselors manually typing messages to leads from private accounts.",
      after: "Universal webhook listener log recording response latency in real-time.",
      metricName: "Friction Points Located",
      metricVal: "10-15 per business",
    },
    {
      num: "02",
      title: "Bottleneck Mapping",
      desc: "We define the exact bottlenecks where staff are bogged down by administrative copy-pasting, preventing timely sales follow-ups.",
      before: "Staff spending 3 hours daily copy-pasting customer details to Tally.",
      after: "Automated queue triggers routing data dynamically between systems.",
      metricName: "Hours Reclaimable",
      metricVal: "12-18 hrs/week",
    },
    {
      num: "03",
      title: "Attach Metrics",
      desc: "We establish performance baselines. We measure lead response time, payment collection delays, and client drop-offs to ground our work in data.",
      before: "Guessing conversion rates based on total monthly revenue.",
      after: "Unified tracking script outputting exact cohort conversions.",
      metricName: "Lead Response Latency",
      metricVal: "Down to 15 seconds",
    },
    {
      num: "04",
      title: "Flow Redesign",
      desc: "We simplify the operational logic. We remove manual checks, complex spreadsheets, and design clean, high-adoption team routines.",
      before: "Multi-tab Excel workbooks requiring manual color-coding.",
      after: "Single-button approval flows built directly into communication channels.",
      metricName: "Workflow Steps Eliminated",
      metricVal: "Up to 60%",
    },
    {
      num: "05",
      title: "Deploy Engines",
      desc: "We construct your customized operations hub: relational SQL databases, WhatsApp Cloud API triggers, and secure payment reconcilers.",
      before: "Generic CRMs requiring heavy manual configuration and data entry.",
      after: "Lightweight, event-driven APIs running silently in the background.",
      metricName: "Integration Security",
      metricVal: "100% End-to-End",
    },
    {
      num: "06",
      title: "Continuous Tuning",
      desc: "Operations are never static. We conduct monthly reviews to adjust triggers and optimize flows based on real dashboard feedback.",
      before: "Software sitting stagnant while the business changes around it.",
      after: "Fractional CTO support tweaking database queues monthly.",
      metricName: "System Adoption Rate",
      metricVal: "98.4% Staff Compliance",
    },
  ];

  // Mouse move handler to update cursor position CSS variables
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // Dynamic SVG render based on stage index
  const renderVisualizer = (stepIndex: number, heightClass: string = "h-32") => {
    const visualizerBg = `bg-glaucous-950/95 border border-glaucous-800/80 rounded-xl overflow-hidden flex items-center justify-center shadow-inner relative transition-all duration-300 w-full ${heightClass}`;

    switch (stepIndex) {
      case 0: // Observe (Radar Scan)
        return (
          <div className={`${visualizerBg}`}>
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d489f_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="absolute w-28 h-28 rounded-full border border-coffee-bean-500/40 animate-ping"></div>
            <div className="absolute w-20 h-20 rounded-full border border-glaucous-500/30 animate-[ping_2s_infinite]"></div>
            <div className="w-32 h-[1px] bg-glaucous-800 absolute"></div>
            <div className="h-32 w-[1px] bg-glaucous-800 absolute"></div>
            <div className="absolute top-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-scarlet-fire-500 shadow-[0_0_8px_#ff1500] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-coffee-bean-400 shadow-[0_0_8px_#ed126d]"></div>
            <span className="absolute bottom-2 right-2 font-mono text-[9px] text-glaucous-400 uppercase tracking-widest">
              SCANNING CHANNELS...
            </span>
          </div>
        );
      case 1: // Understand (Bottleneck mapping)
        return (
          <div className={`${visualizerBg}`}>
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <svg className="w-48 h-24" viewBox="0 0 200 100">
              <path d="M 20,20 L 80,45 L 120,45 L 180,20 M 180,80 L 120,55 L 80,55 L 20,80" fill="none" stroke="#2d489f" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="85" y="47" width="30" height="6" fill="#cc1100" className="animate-pulse shadow-[0_0_8px_#cc1100]" />
              <circle cx="40" cy="35" r="3" fill="#afbde9" />
              <circle cx="55" cy="42" r="3" fill="#afbde9" />
              <circle cx="70" cy="48" r="3.5" fill="#ed126d" className="animate-bounce" />
              <circle cx="130" cy="50" r="2" fill="#afbde9" className="animate-[ping_1.5s_infinite]" />
              <circle cx="155" cy="50" r="2" fill="#afbde9" />
            </svg>
            <span className="absolute bottom-2 left-3 font-mono text-[9px] text-scarlet-fire-400 uppercase tracking-widest animate-pulse">
              CONGESTION DETECTED
            </span>
          </div>
        );
      case 2: // Measure (Chart baseline)
        return (
          <div className={`relative w-full bg-glaucous-950/95 rounded-xl overflow-hidden p-4 flex flex-col justify-between border border-glaucous-800/80 shadow-inner transition-all duration-300 ${heightClass}`}>
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs text-glaucous-400">LATENCY TRACKING</span>
              <span className="font-mono text-xs text-scarlet-fire-500 font-bold">12M → 15S</span>
            </div>
            <div className="flex-grow flex items-center justify-center w-full my-2">
              <svg className="w-full h-16" viewBox="0 0 300 80" preserveAspectRatio="none">
                <line x1="0" y1="65" x2="300" y2="65" stroke="#ed126d" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <path d="M 10,15 Q 60,10 100,55 T 200,62 T 290,66" fill="none" stroke="#2d489f" strokeWidth="3" />
                <circle cx="10" cy="15" r="4" fill="#cc1100" />
                <circle cx="290" cy="66" r="4" fill="#ed126d" className="animate-ping" />
              </svg>
            </div>
            <div className="flex justify-between font-mono text-[8px] text-glaucous-400">
              <span>INBOUND (T-0)</span>
              <span>T+15m</span>
            </div>
          </div>
        );
      case 3: // Improve (Flow redesign)
        return (
          <div className={`${visualizerBg}`}>
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d489f_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <svg className="w-48 h-16" viewBox="0 0 200 60">
              <path d="M 10,30 L 190,30" fill="none" stroke="#2d489f" strokeWidth="4" />
              <circle cx="30" cy="30" r="5" fill="#ed126d">
                <animate attributeName="cx" from="10" to="190" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="90" cy="30" r="5" fill="#afbde9">
                <animate attributeName="cx" from="10" to="190" dur="2s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="30" r="5" fill="#422fd0">
                <animate attributeName="cx" from="10" to="190" dur="2s" begin="1.2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="absolute bottom-2 right-3 font-mono text-[9px] text-coffee-bean-400 uppercase tracking-widest">
              OPTIMIZED PIPELINE
            </span>
          </div>
        );
      case 4: // Build (DB schemas & tables)
        return (
          <div className={`${visualizerBg} p-3 flex gap-2 items-center justify-center`}>
            <div className="w-[48%] bg-glaucous-900 border border-glaucous-800 rounded-lg p-2 font-mono text-[9px] text-glaucous-300 flex flex-col justify-between h-[85%]">
              <div>
                <div className="border-b border-glaucous-800 pb-0.5 mb-1.5 text-vivid-royal-300 font-bold text-[10px]">TABLE: LEADS</div>
                <div>id : SERIAL PK</div>
                <div>whatsapp : VARCHAR</div>
              </div>
              <div className="text-coffee-bean-450 font-bold text-[8px]">trigger_webhook()</div>
            </div>
            <div className="text-glaucous-600 text-xs font-bold shrink-0">→</div>
            <div className="w-[42%] bg-glaucous-900 border border-glaucous-800 rounded-lg p-2 font-mono text-[9px] text-glaucous-300 flex flex-col justify-between h-[85%]">
              <div>
                <div className="border-b border-glaucous-800 pb-0.5 text-coffee-bean-450 font-bold text-[10px]">WEBHOOK</div>
                <div className="text-[8px] text-glaucous-400 mt-0.5">payload: lead_data</div>
              </div>
              <div className="bg-glaucous-950 p-0.5 rounded text-[8px] text-emerald-400 animate-pulse border border-glaucous-800 text-center font-bold">
                200 OK
              </div>
            </div>
          </div>
        );
      case 5: // Scale (Continuous tuning)
        return (
          <div className={`${visualizerBg}`}>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-glaucous-800 animate-[spin_40s_linear_infinite]"></div>
              <svg className="w-14 h-14 transform -rotate-90">
                <circle cx="28" cy="28" r="22" stroke="#2d489f" strokeWidth="3" fill="none" opacity="0.3" />
                <circle cx="28" cy="28" r="22" stroke="#ed126d" strokeWidth="3" fill="none" strokeDasharray="138" strokeDashoffset="8" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-mono text-xs font-bold text-white">98.4%</span>
              </div>
            </div>
            <span className="font-mono text-[9px] text-glaucous-400 uppercase tracking-widest mt-1 absolute bottom-2">
              COMPENSATION ACTIVE
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  // Responsive grid span utility
  const gridSpans = [
    "md:col-span-1 lg:col-span-2", // 01
    "md:col-span-1 lg:col-span-1", // 02
    "md:col-span-1 lg:col-span-1", // 03
    "md:col-span-1 lg:col-span-2", // 04
    "md:col-span-1 lg:col-span-2", // 05
    "md:col-span-1 lg:col-span-1", // 06
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      {/* Header Area */}
      <div className="mb-16">
        <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Methodology</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-3">The Operational Blueprint.</h2>
        <p className="text-sm sm:text-base text-glaucous-800 max-w-xl">
          Six continuous phases designed to optimize systems first, and only write code that moves numbers.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {steps.map((step, idx) => {
          const isWide = gridSpans[idx].includes("col-span-2");

          return (
            <div
              key={step.num}
              onMouseMove={handleMouseMove}
              className={`group w-full rounded-3xl border border-glaucous-200/80 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(45,72,159,0.06)] hover:border-glaucous-300 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${gridSpans[idx]}`}
            >
              {/* Spotlight background glow following cursor */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: "radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(45, 72, 159, 0.05), transparent 80%)",
                }}
              />

              {/* Spotlight border glow following cursor */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-vivid-royal-500/20 z-10"
                style={{
                  maskImage: "radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)",
                  WebkitMaskImage: "radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)",
                }}
              />

              {isWide ? (
                /* WIDE LAYOUT (Horizontal layers) */
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full gap-6 relative z-20">
                  {/* Top: Header, Title, Description */}
                  <div>
                    {/* Badge / Step No */}
                    <div className="mb-4">
                      <span className="font-mono text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-glaucous-50 border border-glaucous-200 text-glaucous-600 tracking-wider">
                        PHASE {step.num}
                      </span>
                    </div>

                    {/* Header */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-vivid-royal-950 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Middle: Visualizer (Full Width & dynamically scales to fill any height gap) */}
                  <div className="flex-grow flex items-center justify-center w-full my-1">
                    {renderVisualizer(idx, "h-full min-h-[160px] lg:min-h-[220px]")}
                  </div>

                  {/* Bottom: Paths & Metric side-by-side */}
                  <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 items-stretch">
                    {/* Left: Traditional & Optimized paths side-by-side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Traditional */}
                      <div className="bg-scarlet-fire-50/30 border border-scarlet-fire-100/50 p-4 rounded-xl flex flex-col justify-between">
                        <div>
                          <span className="font-mono text-[9px] sm:text-xs text-scarlet-fire-600 uppercase tracking-wider block mb-1.5 font-bold">
                            Traditional Path
                          </span>
                          <p className="text-xs sm:text-sm text-glaucous-850 leading-relaxed">
                            {step.before}
                          </p>
                        </div>
                      </div>

                      {/* Optimized */}
                      <div className="bg-emerald-50/30 border border-emerald-100/40 p-4 rounded-xl flex flex-col justify-between">
                        <div>
                          <span className="font-mono text-[9px] sm:text-xs text-emerald-600 uppercase tracking-wider block mb-1.5 font-bold">
                            ADX Optimized Path
                          </span>
                          <p className="text-xs sm:text-sm text-vivid-royal-950 leading-relaxed">
                            {step.after}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Target Metric block */}
                    <div className="bg-glaucous-50 border border-glaucous-200/80 p-4 rounded-xl flex flex-col justify-center">
                      <span className="font-mono text-[9px] sm:text-xs text-glaucous-500 uppercase block mb-1">
                        Target Metric
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-vivid-royal-950 block mb-1">
                        {step.metricName}
                      </span>
                      <div className="border-t border-glaucous-200/60 my-1.5" />
                      <div>
                        <span className="font-mono text-[9px] sm:text-xs text-glaucous-500 uppercase block">
                          Est. Impact
                        </span>
                        <span className="text-sm sm:text-base font-mono font-bold text-coffee-bean-600">
                          {step.metricVal}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* NARROW LAYOUT (1 Column) */
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full gap-5 relative z-20">
                  <div>
                    {/* Badge / Step No */}
                    <div className="mb-4">
                      <span className="font-mono text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-glaucous-50 border border-glaucous-200 text-glaucous-600 tracking-wider">
                        PHASE {step.num}
                      </span>
                    </div>

                    {/* Header */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-vivid-royal-950 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Visualizer */}
                  {renderVisualizer(idx, "h-32")}

                  {/* Operational Paths */}
                  <div className="flex flex-col gap-3">
                    {/* Traditional */}
                    <div className="bg-scarlet-fire-50/30 border border-scarlet-fire-100/50 p-4 rounded-xl">
                      <span className="font-mono text-[9px] sm:text-xs text-scarlet-fire-600 uppercase tracking-wider block mb-0.5 font-bold">
                        Traditional Path
                      </span>
                      <p className="text-xs sm:text-sm text-glaucous-850 leading-relaxed">
                        {step.before}
                      </p>
                    </div>

                    {/* Optimized */}
                    <div className="bg-emerald-50/30 border border-emerald-100/40 p-4 rounded-xl">
                      <span className="font-mono text-[9px] sm:text-xs text-emerald-600 uppercase tracking-wider block mb-0.5 font-bold">
                        ADX Optimized Path
                      </span>
                      <p className="text-xs sm:text-sm text-vivid-royal-950 leading-relaxed">
                        {step.after}
                      </p>
                    </div>
                  </div>

                  {/* Target Metric */}
                  <div className="bg-glaucous-50 border border-glaucous-200/80 p-4 rounded-xl flex justify-between items-center mt-auto">
                    <div>
                      <span className="font-mono text-[9px] sm:text-xs text-glaucous-500 uppercase block mb-0.5">
                        Target Metric
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-vivid-royal-950">
                        {step.metricName}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[9px] sm:text-xs text-glaucous-500 uppercase block mb-0.5">
                        Est. Impact
                      </span>
                      <span className="text-sm sm:text-base font-mono font-bold text-coffee-bean-600">
                        {step.metricVal}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
