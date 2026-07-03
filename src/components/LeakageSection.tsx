import { useState } from "react";

type LeakageStage = "intake" | "followup" | "booking" | "payment";

export default function LeakageSection() {
  const [activeNode, setActiveNode] = useState<LeakageStage>("intake");

  const leakageData = {
    intake: {
      title: "1. Lead Intake Stage",
      bottleneck: "Delayed responses. Leading coaching institutes, clinics, and salons lose hot leads to competitors within 15 minutes of inaction.",
      impact: "Up to 30% of advertising budget is wasted on unresponsive channels.",
      fix: "Instant multi-channel notifications and automated interactive WhatsApp conversational routes.",
    },
    followup: {
      title: "2. First Follow-up Stage",
      bottleneck: "Excel tracking delays. Staff forgets to follow up, or does so via unmonitored personal accounts with no standardized script.",
      impact: "45% of captured enquiries never get a second touchpoint.",
      fix: "Automated queue assignment, instant follow-up alerts, and dashboard tracking of response metrics.",
    },
    booking: {
      title: "3. Booking / Visit Stage",
      bottleneck: "Friction in booking appointments. Receptionists playing phone-tag to confirm slots or manually typing schedules.",
      impact: "30% cancellation/no-show rate due to lack of confirmation triggers.",
      fix: "WhatsApp self-booking flows with instant confirmation, calendar blockades, and automated 2-hour-prior recalls.",
    },
    payment: {
      title: "4. Payment Collection Stage",
      bottleneck: "Manual invoicing, manual ledger entries, and calling parents/clients for outstanding balances.",
      impact: "Accounts receivable takes 15+ days to settle; significant leakage due to forgotten collections.",
      fix: "Stateful automated payment reminders with 1-click Razorpay checkout and automated Tally ledger reconciliation.",
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">The Leakage Pipeline</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">How Indian businesses lose money.</h2>
        <p className="text-glaucous-800 max-w-xl mx-auto">
          Software agencies focus on lines of code. We focus on where your revenue slips through the cracks.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-stretch bg-ghost-white-50 border border-glaucous-200 rounded-lg p-6 sm:p-10">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setActiveNode("intake")}
            className={`w-full text-left p-5 rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer select-none active:translate-y-[1px] ${
              activeNode === "intake"
                ? "bg-gradient-to-b from-vivid-royal-100 to-vivid-royal-50 border-t border-t-vivid-royal-300 border-x border-x-vivid-royal-200/80 border-b-[3px] border-b-vivid-royal-300/90 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.75),0_4px_8px_rgba(66,47,208,0.08)]"
                : "bg-gradient-to-b from-white to-glaucous-50 border-t border-t-white border-x border-x-glaucous-200/60 border-b-2 border-b-glaucous-300/80 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:from-white hover:to-glaucous-100/50 hover:border-glaucous-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">📥</span>
              <span className="font-semibold text-vivid-royal-950">1. Lead Intake Stage</span>
            </div>
            <span className="font-mono text-xs text-glaucous-600 bg-glaucous-100/70 border border-glaucous-200/60 px-2.5 py-1 rounded">100% Volume</span>
          </button>
          <div className="h-6 w-0.5 bg-gradient-to-b from-glaucous-200 to-scarlet-fire-500/80 ml-8 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-scarlet-fire-600 whitespace-nowrap font-bold">-45% drop-off</span>
          </div>
          <button
            onClick={() => setActiveNode("followup")}
            className={`w-full text-left p-5 rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer select-none active:translate-y-[1px] ${
              activeNode === "followup"
                ? "bg-gradient-to-b from-vivid-royal-100 to-vivid-royal-50 border-t border-t-vivid-royal-300 border-x border-x-vivid-royal-200/80 border-b-[3px] border-b-vivid-royal-300/90 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.75),0_4px_8px_rgba(66,47,208,0.08)]"
                : "bg-gradient-to-b from-white to-glaucous-50 border-t border-t-white border-x border-x-glaucous-200/60 border-b-2 border-b-glaucous-300/80 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:from-white hover:to-glaucous-100/50 hover:border-glaucous-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <span className="font-semibold text-vivid-royal-950">2. First Follow-up Stage</span>
            </div>
            <span className="font-mono text-xs text-glaucous-600 bg-glaucous-100/70 border border-glaucous-200/60 px-2.5 py-1 rounded">55% Retained</span>
          </button>
          <div className="h-6 w-0.5 bg-gradient-to-b from-glaucous-200 to-scarlet-fire-500/80 ml-8 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-scarlet-fire-600 whitespace-nowrap font-bold">-30% drop-off</span>
          </div>
          <button
            onClick={() => setActiveNode("booking")}
            className={`w-full text-left p-5 rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer select-none active:translate-y-[1px] ${
              activeNode === "booking"
                ? "bg-gradient-to-b from-vivid-royal-100 to-vivid-royal-50 border-t border-t-vivid-royal-300 border-x border-x-vivid-royal-200/80 border-b-[3px] border-b-vivid-royal-300/90 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.75),0_4px_8px_rgba(66,47,208,0.08)]"
                : "bg-gradient-to-b from-white to-glaucous-50/50 border-t border-t-white border-x border-x-glaucous-200/60 border-b-2 border-b-glaucous-300/80 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:from-white hover:to-glaucous-100/50 hover:border-glaucous-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">🗓️</span>
              <span className="font-semibold text-vivid-royal-950">3. Booking / Visit Stage</span>
            </div>
            <span className="font-mono text-xs text-glaucous-600 bg-glaucous-100/70 border border-glaucous-200/60 px-2.5 py-1 rounded">25% Retained</span>
          </button>
          <div className="h-6 w-0.5 bg-gradient-to-b from-glaucous-200 to-scarlet-fire-500/80 ml-8 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-scarlet-fire-600 whitespace-nowrap font-bold">-15% drop-off</span>
          </div>
          <button
            onClick={() => setActiveNode("payment")}
            className={`w-full text-left p-5 rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer select-none active:translate-y-[1px] ${
              activeNode === "payment"
                ? "bg-gradient-to-b from-vivid-royal-100 to-vivid-royal-50 border-t border-t-vivid-royal-300 border-x border-x-vivid-royal-200/80 border-b-[3px] border-b-vivid-royal-300/90 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.75),0_4px_8px_rgba(66,47,208,0.08)]"
                : "bg-gradient-to-b from-white to-glaucous-50 border-t border-t-white border-x border-x-glaucous-200/60 border-b-2 border-b-glaucous-300/80 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:from-white hover:to-glaucous-100/50 hover:border-glaucous-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.05)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">💳</span>
              <span className="font-semibold text-vivid-royal-950">4. Payment Collection Stage</span>
            </div>
            <span className="font-mono text-xs text-glaucous-600 bg-glaucous-100/70 border border-glaucous-200/60 px-2.5 py-1 rounded font-bold">10% Yield</span>
          </button>
        </div>

        <div className="bg-glaucous-50 border border-glaucous-200 rounded-md p-8 flex flex-col justify-center shadow-inner">
          <h4 className="text-xl font-bold text-vivid-royal-950 mb-6 pb-3 border-b border-glaucous-200">
            {leakageData[activeNode].title}
          </h4>
          <div className="mb-6">
            <span className="block font-mono text-[10px] text-glaucous-600 tracking-widest uppercase mb-1">Primary Bottleneck</span>
            <p className="text-sm text-glaucous-950 leading-relaxed">{leakageData[activeNode].bottleneck}</p>
          </div>
          <div className="mb-6">
            <span className="block font-mono text-[10px] text-glaucous-600 tracking-widest uppercase mb-1">Financial Impact</span>
            <p className="text-sm text-scarlet-fire-600 font-bold">{leakageData[activeNode].impact}</p>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-glaucous-600 tracking-widest uppercase mb-1">The ADX Fix</span>
            <p className="text-sm text-vivid-royal-950 bg-ghost-white-50 border border-glaucous-200 p-3 rounded mt-1">
              {leakageData[activeNode].fix}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
