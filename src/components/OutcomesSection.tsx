"use client";

import { useState } from "react";

interface OutcomeCard {
  title: string;
  traditional: {
    stat: string;
    desc: string;
    progress: number;
  };
  system: {
    stat: string;
    desc: string;
    progress: number;
  };
}

export default function OutcomesSection() {
  const [isOptimized, setIsOptimized] = useState<boolean>(true);

  const outcomes: OutcomeCard[] = [
    {
      title: "Lead Conversion Rate",
      traditional: {
        stat: "12% Conversions",
        desc: "Leads sit cold for hours. Manual counselor follow-up results in 88% lead leakage and high acquisition wastage.",
        progress: 12,
      },
      system: {
        stat: "34% Conversions (+22%)",
        desc: "Automated instant replies engage inquiries within 30 seconds, capturing high intent before attention drops.",
        progress: 34,
      },
    },
    {
      title: "Lead Response Time",
      traditional: {
        stat: "15+ Minutes Delay",
        desc: "No central inbox. Counselors handle private WhatsApp chats in batches, losing critical instant conversion context.",
        progress: 5,
      },
      system: {
        stat: "Under 15 Seconds",
        desc: "Universal webhooks capture inbound clicks and route them instantly to team boards with auto-responses.",
        progress: 95,
      },
    },
    {
      title: "Weekly Admin Workload",
      traditional: {
        stat: "20+ Hours Lost",
        desc: "Staff spending hours manually copy-pasting data between WhatsApp, spreadsheets, and billing software.",
        progress: 15,
      },
      system: {
        stat: "Near 0 Hours",
        desc: "Automated API database pipelines sync contacts, attendance logs, and schedules silently behind scenes.",
        progress: 100,
      },
    },
    {
      title: "Outstanding Collections",
      traditional: {
        stat: "18% Revenue Leaked",
        desc: "Awkward manual collection calls and payment reconciliation delays lead to high delinquency rates.",
        progress: 82,
      },
      system: {
        stat: "<2% Delinquency",
        desc: "System sends stateful payment reminders on WhatsApp with integrated 1-click Razorpay payment flows.",
        progress: 98,
      },
    },
    {
      title: "Management Reporting",
      traditional: {
        stat: "Blind Operations",
        desc: "Owner parses multiple Excel spreadsheets and paper logs to guess capacity and monthly margins.",
        progress: 20,
      },
      system: {
        stat: "Real-time BI Dashboard",
        desc: "One unified screen showing daily active enquiries, class capacity, and collection reconciliation.",
        progress: 100,
      },
    },
    {
      title: "Founder Time Dependency",
      traditional: {
        stat: "100% Owner Bottleneck",
        desc: "No business autonomy. Staff cannot operate without owner validation for daily tasks and schedules.",
        progress: 10,
      },
      system: {
        stat: "System-led Autonomy",
        desc: "Software triggers dictate daily team routines, letting the founder step out of daily fire fighting.",
        progress: 95,
      },
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-12">
        <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Deliverables</span>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-vivid-royal-950 mt-2 mb-4 tracking-tight leading-tight">
          Measurable Outcomes. Not Story Points.
        </h2>
        <p className="text-lg sm:text-xl text-glaucous-800 max-w-xl mx-auto">
          We measure success in hours reclaimed and revenue recovered, not arbitrary software tasks.
        </p>
      </div>

      {/* Control Switch Widget */}
      <div className="flex justify-center mb-16">
        <div className="bg-glaucous-100/70 border border-glaucous-200/80 rounded-full p-1.5 flex items-center justify-between shadow-inner max-w-md w-full relative">
          <button
            onClick={() => setIsOptimized(false)}
            className={`flex-1 py-2.5 px-5 rounded-full font-mono text-base font-bold uppercase transition-all duration-300 cursor-pointer select-none active:scale-95 ${
              !isOptimized
                ? "bg-scarlet-fire-600 text-ghost-white-50 shadow-[0_4px_12px_rgba(204,17,0,0.35)]"
                : "text-glaucous-800 hover:text-glaucous-950"
            }`}
          >
            Traditional Mess
          </button>
          <button
            onClick={() => setIsOptimized(true)}
            className={`flex-1 py-2.5 px-5 rounded-full font-mono text-base font-bold uppercase transition-all duration-300 cursor-pointer select-none active:scale-95 ${
              isOptimized
                ? "bg-vivid-royal-600 text-ghost-white-50 shadow-[0_4px_12px_rgba(66,47,208,0.35)]"
                : "text-glaucous-800 hover:text-glaucous-950"
            }`}
          >
            ADX Optimized
          </button>
        </div>
      </div>

      {/* Outcomes Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((item, index) => {
          const current = isOptimized ? item.system : item.traditional;
          return (
            <div
              key={index}
              className={`border p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[250px] relative overflow-hidden group ${
                isOptimized
                  ? "bg-gradient-to-b from-white to-vivid-royal-50/10 border-glaucous-200 hover:border-vivid-royal-300 hover:shadow-[0_8px_20px_rgba(66,47,208,0.04)]"
                  : "bg-gradient-to-b from-white to-scarlet-fire-50/10 border-scarlet-fire-200/50 hover:border-scarlet-fire-300 hover:shadow-[0_8px_20px_rgba(204,17,0,0.03)]"
              }`}
            >
              {/* Corner Ambient Glow */}
              <div
                className={`absolute -top-12 -right-12 w-24 h-24 rounded-full filter blur-xl transition-all duration-500 ${
                  isOptimized ? "bg-vivid-royal-300/10 group-hover:bg-vivid-royal-300/20" : "bg-scarlet-fire-300/10 group-hover:bg-scarlet-fire-300/20"
                }`}
              />

              <div>
                <div className="mb-6 flex justify-between items-center border-b border-glaucous-200/40 pb-3">
                  <span className="font-mono text-base uppercase tracking-widest text-glaucous-500 font-bold">
                    Diagnostic Score
                  </span>
                </div>

                <div className="mb-4 flex justify-between items-center border-b border-glaucous-200/40 pb-3">
                  <span className={`font-mono text-base font-extrabold tracking-wider ${isOptimized ? "text-vivid-royal-600" : "text-scarlet-fire-600"}`}>
                    EFFICIENCY: {current.progress}% {isOptimized && `(+${item.system.progress - item.traditional.progress}%)`}
                  </span>
                </div>

                <h3 className="text-xl font-mono font-bold text-glaucous-600 uppercase tracking-wider">
                  {item.title}
                </h3>
                
                {/* Metric Display */}
                <h4
                  className={`text-3xl font-extrabold mt-2 mb-3 font-mono tracking-tight transition-colors duration-300 ${
                    isOptimized ? "text-vivid-royal-950" : "text-scarlet-fire-600"
                  }`}
                >
                  {current.stat}
                </h4>

                <p className="text-base text-glaucous-800 leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
