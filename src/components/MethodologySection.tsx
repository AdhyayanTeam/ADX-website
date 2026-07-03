"use client";

import { useState } from "react";

interface StepData {
  num: string;
  title: string;
  desc: string;
  before: string;
  after: string;
  metricName: string;
  metricVal: string;
  emoji: string;
}

export default function MethodologySection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepData[] = [
    {
      num: "01",
      title: "Observe & Shadow",
      desc: "We shadow your staff's daily routines. We map every manual handoff, WhatsApp chat, and Google Sheet edit to locate invisible leaks.",
      before: "Counselors manually typing messages to leads from private accounts.",
      after: "Universal webhook listener log recording response latency in real-time.",
      metricName: "Friction Points Located",
      metricVal: "10-15 per business",
      emoji: "👁️",
    },
    {
      num: "02",
      title: "Bottleneck Mapping",
      desc: "We define the exact bottlenecks where staff are bogged down by administrative copy-pasting, preventing timely sales follow-ups.",
      before: "Staff spending 3 hours daily copy-pasting customer details to Tally.",
      after: "Automated queue triggers routing data dynamically between systems.",
      metricName: "Hours Reclaimable",
      metricVal: "12-18 hrs/week",
      emoji: "🧩",
    },
    {
      num: "03",
      title: "Attach Metrics",
      desc: "We establish performance baselines. We measure lead response time, payment collection delays, and client drop-offs to ground our work in data.",
      before: "Guessing conversion rates based on total monthly revenue.",
      after: "Unified tracking script outputting exact cohort conversions.",
      metricName: "Lead Response Latency",
      metricVal: "Down to 15 seconds",
      emoji: "📊",
    },
    {
      num: "04",
      title: "Flow Redesign",
      desc: "We simplify the operational logic. We remove manual checks, complex spreadsheets, and design clean, high-adoption team routines.",
      before: "Multi-tab Excel workbooks requiring manual color-coding.",
      after: "Single-button approval flows built directly into communication channels.",
      metricName: "Workflow Steps Eliminated",
      metricVal: "Up to 60%",
      emoji: "🔄",
    },
    {
      num: "05",
      title: "Deploy Engines",
      desc: "We construct your customized operations hub: relational SQL databases, WhatsApp Cloud API triggers, and secure payment reconcilers.",
      before: "Generic CRMs requiring heavy manual configuration and data entry.",
      after: "Lightweight, event-driven APIs running silently in the background.",
      metricName: "Integration Security",
      metricVal: "100% End-to-End",
      emoji: "⚙️",
    },
    {
      num: "06",
      title: "Continuous Tuning",
      desc: "Operations are never static. We conduct monthly reviews to adjust triggers and optimize flows based on real dashboard feedback.",
      before: "Software sitting stagnant while the business changes around it.",
      after: "Fractional CTO support tweaking database queues monthly.",
      metricName: "System Adoption Rate",
      metricVal: "98.4% Staff Compliance",
      emoji: "📈",
    },
  ];

  // Dynamic SVG render based on active stage
  const renderVisualizer = (stepIndex: number) => {
    switch (stepIndex) {
      case 0: // Observe (Radar Scan)
        return (
          <div className="relative w-full h-48 bg-glaucous-950 rounded-xl overflow-hidden flex items-center justify-center border border-glaucous-800 shadow-inner">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d489f_1px,transparent_1px)] [background-size:16px_16px]"></div>
            {/* Pulse animation */}
            <div className="absolute w-36 h-36 rounded-full border border-coffee-bean-500/40 animate-ping"></div>
            <div className="absolute w-24 h-24 rounded-full border border-glaucous-500/30 animate-[ping_2s_infinite]"></div>
            {/* Grid layout */}
            <div className="w-40 h-[1px] bg-glaucous-800 absolute"></div>
            <div className="h-40 w-[1px] bg-glaucous-800 absolute"></div>
            {/* Blip dots */}
            <div className="absolute top-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-scarlet-fire-500 shadow-[0_0_8px_#ff1500] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-coffee-bean-400 shadow-[0_0_8px_#ed126d]"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-scarlet-fire-600 shadow-[0_0_10px_#cc1100] animate-pulse"></div>
            <span className="absolute bottom-3 right-3 font-mono text-[8px] text-glaucous-500 uppercase tracking-widest">
              SCANNING OPERATIONAL CHANNELS...
            </span>
          </div>
        );
      case 1: // Understand (Bottleneck mapping)
        return (
          <div className="relative w-full h-48 bg-glaucous-950 rounded-xl overflow-hidden flex items-center justify-center border border-glaucous-800 shadow-inner">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            {/* Bottleneck funnel */}
            <svg className="w-56 h-36" viewBox="0 0 200 100">
              {/* Funnel bounds */}
              <path d="M 20,20 L 80,45 L 120,45 L 180,20 M 180,80 L 120,55 L 80,55 L 20,80" fill="none" stroke="#2d489f" strokeWidth="2" strokeDasharray="3 3" />
              {/* Bottleneck block */}
              <rect x="85" y="47" width="30" height="6" fill="#cc1100" className="animate-pulse shadow-[0_0_8px_#cc1100]" />
              {/* Particles stacking */}
              <circle cx="40" cy="35" r="3" fill="#afbde9" />
              <circle cx="55" cy="42" r="3" fill="#afbde9" />
              <circle cx="70" cy="48" r="3.5" fill="#ed126d" className="animate-bounce" />
              <circle cx="80" cy="46" r="3" fill="#cc1100" />
              <circle cx="75" cy="52" r="3" fill="#cc1100" />
              {/* Output trickle */}
              <circle cx="130" cy="50" r="2" fill="#afbde9" className="animate-[ping_1.5s_infinite]" />
              <circle cx="155" cy="50" r="2" fill="#afbde9" />
            </svg>
            <span className="absolute bottom-3 left-4 font-mono text-[8px] text-scarlet-fire-500 uppercase tracking-widest animate-pulse">
              WARNING: FLOW CONGESTION DETECTED
            </span>
          </div>
        );
      case 2: // Measure (Chart baseline)
        return (
          <div className="relative w-full h-48 bg-glaucous-950 rounded-xl overflow-hidden p-6 flex flex-col justify-between border border-glaucous-800 shadow-inner">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] text-glaucous-400">LATENCY TRACKING</span>
              <span className="font-mono text-[9px] text-scarlet-fire-500 font-bold">12 MIN AVG → 15 SEC</span>
            </div>
            <svg className="w-full h-24 mt-2" viewBox="0 0 300 80">
              {/* Target threshold line */}
              <line x1="0" y1="65" x2="300" y2="65" stroke="#ed126d" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              {/* Latency line */}
              <path d="M 10,15 Q 60,10 100,55 T 200,62 T 290,66" fill="none" stroke="#2d489f" strokeWidth="3" />
              {/* Dots along path */}
              <circle cx="10" cy="15" r="4" fill="#cc1100" />
              <circle cx="290" cy="66" r="4" fill="#ed126d" className="animate-ping" />
            </svg>
            <div className="flex justify-between font-mono text-[8px] text-glaucous-500">
              <span>T-0 (INBOUND)</span>
              <span>T+5m</span>
              <span>T+10m</span>
              <span>T+15m</span>
            </div>
          </div>
        );
      case 3: // Improve (Flow redesign)
        return (
          <div className="relative w-full h-48 bg-glaucous-950 rounded-xl overflow-hidden flex items-center justify-center border border-glaucous-800 shadow-inner">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d489f_1px,transparent_1px)] [background-size:20px_20px]"></div>
            {/* Streamlined pipeline */}
            <svg className="w-64 h-24" viewBox="0 0 200 60">
              {/* Clean path */}
              <path d="M 10,30 L 190,30" fill="none" stroke="#2d489f" strokeWidth="4" />
              {/* Flow particles */}
              <circle cx="30" cy="30" r="5" fill="#ed126d" className="animate-[ping_1s_infinite]">
                <animate attributeName="cx" from="10" to="190" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="90" cy="30" r="5" fill="#afbde9">
                <animate attributeName="cx" from="10" to="190" dur="2s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="30" r="5" fill="#422fd0">
                <animate attributeName="cx" from="10" to="190" dur="2s" begin="1.2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="absolute bottom-3 right-4 font-mono text-[8px] text-coffee-bean-400 uppercase tracking-widest">
              OPTIMIZED FLOW PATH ACTIVE
            </span>
          </div>
        );
      case 4: // Build (DB schemas & tables)
        return (
          <div className="relative w-full h-48 bg-glaucous-950 rounded-xl overflow-hidden p-4 flex gap-4 items-center justify-center border border-glaucous-800 shadow-inner">
            {/* Database schema columns */}
            <div className="w-1/2 bg-glaucous-900 border border-glaucous-800 rounded p-2.5 font-mono text-[8px] text-glaucous-300">
              <div className="border-b border-glaucous-800 pb-1 mb-1 text-vivid-royal-300 font-bold">TABLE: INBOUND_LEADS</div>
              <div>id : SERIAL PRIMARY KEY</div>
              <div>whatsapp : VARCHAR(15)</div>
              <div>status : VARCHAR(20) = &apos;NEW&apos;</div>
              <div className="text-coffee-bean-400 font-bold">trigger_webhook() : FUNCTION</div>
            </div>
            {/* Connected node */}
            <div className="text-glaucous-600 text-xs font-bold">→</div>
            <div className="w-1/3 bg-glaucous-900 border border-glaucous-800 rounded p-2.5 font-mono text-[8px] text-glaucous-300 flex flex-col justify-between h-28">
              <div className="border-b border-glaucous-800 pb-1 text-coffee-bean-400 font-bold">WEBHOOK</div>
              <div className="bg-glaucous-950 p-1 rounded text-[7px] text-emerald-400 animate-pulse border border-glaucous-800">
                HTTP 200 OK
              </div>
              <span className="text-[6px] text-glaucous-500">POST TO RAZORPAY API</span>
            </div>
          </div>
        );
      case 5: // Scale (Continuous tuning)
        return (
          <div className="relative w-full h-48 bg-glaucous-950 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-glaucous-800 shadow-inner p-6">
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Dial outer border */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-glaucous-800 animate-[spin_40s_linear_infinite]"></div>
              {/* Dial inner active fill */}
              <svg className="w-24 h-24 transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="#2d489f" strokeWidth="4" fill="none" opacity="0.3" />
                <circle cx="48" cy="48" r="40" stroke="#ed126d" strokeWidth="4" fill="none" strokeDasharray="251" strokeDashoffset="12" />
              </svg>
              {/* Dial text */}
              <div className="absolute flex flex-col items-center">
                <span className="font-mono text-xs font-bold text-white">98.4%</span>
                <span className="font-mono text-[7px] text-glaucous-400 uppercase tracking-widest mt-0.5">TUNED</span>
              </div>
            </div>
            <span className="font-mono text-[8px] text-glaucous-500 uppercase tracking-widest mt-3">
              MONTHLY SYSTEM DRIFT COMPENSATION ENGINE
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Methodology</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">The Operational Blueprint.</h2>
        <p className="text-glaucous-800 max-w-xl mx-auto">
          Six continuous phases designed to optimize systems first, and only write code that moves numbers.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-stretch">
        {/* Left Side: Timeline Navigation */}
        <div className="flex flex-col gap-4 justify-between relative">
          {/* Connector Line (Desktop Only) */}
          <div className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-glaucous-200/40 hidden lg:block z-0" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center gap-6 cursor-pointer select-none active:translate-y-[1px] z-10 border ${
                  isActive
                    ? "bg-gradient-to-b from-vivid-royal-100 to-vivid-royal-50 border-t-vivid-royal-300 border-x-vivid-royal-200/80 border-b-[4px] border-b-vivid-royal-300/90 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.75),0_8px_16px_rgba(66,47,208,0.06)]"
                    : "bg-gradient-to-b from-white to-glaucous-50 border-t-white border-x-glaucous-200/60 border-b-2 border-b-glaucous-300/80 shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:from-white hover:to-glaucous-100/50 hover:border-glaucous-300/80 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                }`}
              >
                {/* Number Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm border transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-coffee-bean-500 text-ghost-white-50 border-coffee-bean-600 shadow-[0_0_12px_rgba(237,18,109,0.35)]"
                      : "bg-ghost-white-50 text-glaucous-600 border-glaucous-200"
                  }`}
                >
                  {step.num}
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h4 className={`text-md font-bold transition-colors ${isActive ? "text-vivid-royal-950" : "text-glaucous-800"}`}>
                      {step.title}
                    </h4>
                    <span className="text-xs sm:text-sm">{step.emoji}</span>
                  </div>
                  <p className="text-[10px] text-glaucous-500 font-mono mt-0.5 uppercase tracking-widest hidden sm:block">
                    PHASE {step.num} // READY
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Step Details Panel */}
        <div className="bg-ghost-white-50 border border-glaucous-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[500px]">
          {/* Decorative Corner Light */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-vivid-royal-300/10 rounded-full filter blur-3xl -z-10" />

          <div>
            {/* Header Badge */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[9px] text-glaucous-600 uppercase tracking-widest font-bold">
                OPERATIONAL BLUEPRINT
              </span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-coffee-bean-50 text-coffee-bean-600 border border-coffee-bean-200 uppercase font-bold">
                Step {steps[activeStep].num}
              </span>
            </div>

            {/* Title & Desc */}
            <h3 className="text-2xl font-extrabold text-vivid-royal-950 mb-3 flex items-center gap-2">
              {steps[activeStep].title}
            </h3>
            <p className="text-sm text-glaucous-800 leading-relaxed mb-6">
              {steps[activeStep].desc}
            </p>

            {/* Dynamic visualizer rendering (Radar, Funnels, Charts) */}
            <div className="mb-6">
              {renderVisualizer(activeStep)}
            </div>

            {/* Before vs After Operations Path */}
            <div className="grid gap-3">
              <div className="bg-glaucous-50/50 border border-glaucous-200/50 p-4 rounded-xl flex gap-3 items-start">
                <span className="text-scarlet-fire-600 text-sm font-bold mt-0.5">✕</span>
                <div>
                  <span className="font-mono text-[9px] text-glaucous-500 uppercase block mb-0.5">Traditional Path</span>
                  <p className="text-xs text-glaucous-800 leading-relaxed">{steps[activeStep].before}</p>
                </div>
              </div>

              <div className="bg-vivid-royal-50/40 border border-vivid-royal-200/30 p-4 rounded-xl flex gap-3 items-start shadow-inner">
                <span className="text-coffee-bean-600 text-sm font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-mono text-[9px] text-vivid-royal-650 uppercase block mb-0.5">ADX Optimized Path</span>
                  <p className="text-xs text-vivid-royal-950 leading-relaxed">{steps[activeStep].after}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Dashboard Footer */}
          <div className="bg-glaucous-100/50 border border-glaucous-200/80 p-4 rounded-xl flex justify-between items-center mt-6">
            <div>
              <span className="font-mono text-[9px] text-glaucous-600 uppercase block mb-0.5">Target Metric</span>
              <span className="text-xs font-bold text-vivid-royal-950">{steps[activeStep].metricName}</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-[9px] text-glaucous-600 uppercase block mb-0.5">Est. Impact</span>
              <span className="text-sm font-mono font-bold text-coffee-bean-600">{steps[activeStep].metricVal}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
