"use client";

import Link from "next/link";

export default function Discovery() {
  const steps = [
    {
      num: "01",
      title: "Pre-Call Setup",
      desc: "Tell us about your industry vertical, student/client volumes, and current software tools (e.g. Sheets, Tally, custom CRM) before the call so we can prepare.",
    },
    {
      num: "02",
      title: "Operational Walkthrough",
      desc: "We schedule a 30-minute Zoom session to watch how your staff manually performs intake, tracks followups, schedules slots, and triggers bills.",
    },
    {
      num: "03",
      title: "Diagnostic Report",
      desc: "Within 48 hours of our call, you receive a complete blueprint showing exactly where manual operations are leaking hours and revenue, along with a firm implementation estimate.",
    },
  ];

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            Consultation Blueprint
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-vivid-royal-950 mt-2 mb-4 tracking-tight leading-tight">
            The Operational Discovery Process.
          </h1>
          <p className="text-lg sm:text-xl text-glaucous-800 max-w-2xl">
            We don't sell software templates. We analyze your team's workflow and design custom engines built around your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="flex flex-col gap-10">
            {steps.map((item) => (
              <div key={item.num} className="border-l-2 border-glaucous-200 hover:border-coffee-bean-500 pl-6 transition-all duration-300">
                <span className="font-mono text-base text-glaucous-600 tracking-wider block mb-1">
                  STAGE {item.num}
                </span>
                <h3 className="text-2xl font-bold text-vivid-royal-950 mb-2">{item.title}</h3>
                <p className="text-base text-glaucous-800 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-glaucous-100 px-6 py-4 border-b border-glaucous-200 flex justify-between items-center">
              <span className="font-mono text-base text-glaucous-600 uppercase tracking-widest font-bold">
                Mock Diagnostic Report
              </span>
              <span className="font-mono text-base px-2 py-0.5 rounded bg-coffee-bean-50 text-coffee-bean-600 border border-coffee-bean-200 uppercase font-bold">
                Leaks Identified
              </span>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-vivid-royal-950 mb-4">Operational Status Audit</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-glaucous-50 border border-glaucous-200 p-4 rounded">
                  <span className="font-mono text-base text-glaucous-600 uppercase block mb-1">Response Latency</span>
                  <span className="text-xl font-bold text-scarlet-fire-600">12 mins (Avg)</span>
                </div>
                <div className="bg-glaucous-50 border border-glaucous-200 p-4 rounded">
                  <span className="font-mono text-base text-glaucous-600 uppercase block mb-1">Unmatched Leads</span>
                  <span className="text-xl font-bold text-scarlet-fire-600">32% leakage</span>
                </div>
              </div>
 
              <div className="bg-glaucous-50 border border-glaucous-200 p-4 rounded font-mono text-base text-glaucous-800 mb-6">
                <div className="text-glaucous-600 font-semibold mb-2 uppercase text-xs tracking-widest">Target Solution Spec</div>
                <div className="flex gap-2 items-center justify-center py-2 border-b border-glaucous-200/55">
                  <span className="bg-glaucous-100 px-2 py-0.5 rounded text-sm">Lead Intake</span>
                  <span className="text-glaucous-600">→</span>
                  <span className="bg-coffee-bean-50 border border-coffee-bean-200 text-coffee-bean-600 px-2 py-0.5 rounded text-sm">Auto-Reply API</span>
                  <span className="text-glaucous-600">→</span>
                  <span className="bg-glaucous-100 px-2 py-0.5 rounded text-sm">Tally DB</span>
                </div>
              </div>

              <p className="text-base text-glaucous-800 leading-relaxed mb-6">
                Based on our observations, we recommend replacing manual data entry with webhook listeners, reducing counselor response delays to under 15 seconds.
              </p>

              <Link
                href="/book"
                className="w-full text-center py-3.5 rounded text-base font-semibold uppercase tracking-wider text-ghost-white-50 bg-coffee-bean-600 hover:bg-coffee-bean-700 transition-all duration-300 block shadow-[0_0_15px_rgba(237,18,109,0.15)]"
              >
                Schedule Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
