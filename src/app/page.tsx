"use client";

import Link from "next/link";
import { useState } from "react";

type LeakageStage = "intake" | "followup" | "booking" | "payment";
type IndustryKey = "coaching" | "healthcare" | "salon" | "gym" | "professional";

export default function Home() {
  const [activeNode, setActiveNode] = useState<LeakageStage>("intake");
  const [activeInd, setActiveInd] = useState<IndustryKey>("coaching");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  const industryData = {
    coaching: {
      title: "Coaching Institutes",
      intro: "Managing hundreds of students across multiple batches while chasing outstanding fees is an operational nightmare.",
      bottlenecks: [
        "Inquiries lost in paper logs and personal WhatsApp of counselors.",
        "Manual Excel sheets causing mismatched scheduling and double-booking.",
        "Outstanding fees require manual phone chase, leading to awkward client friction.",
      ],
      solTitle: "Automated Batch & Fee Management",
      before: "Counselors copy-paste registration links, parents send manual bank transfer screenshots, admin manually enters data in Tally.",
      after: "Lead registers → Webhook creates profile → WhatsApp sends automated onboarding details → Razorpay reconciles fees → Tally ledger updates via API.",
    },
    healthcare: {
      title: "Clinics & Healthcare",
      intro: "Patient no-shows and chaotic telephone schedules waste high-value practitioner hours.",
      bottlenecks: [
        "Receptionist spends hours calling patients to confirm slots, half of whom don't pick up.",
        "Chronic patients fail to book follow-up visits due to lack of systematic recall systems.",
        "Prescriptions and treatment guidelines get lost, leading to poor care compliance.",
      ],
      solTitle: "Stateful Patient Scheduling Engine",
      before: "Patients call desk → Secretary records slot in physical logbook → Staff attempts manually calling to confirm → Slots remain empty on short-notice cancel.",
      after: "Patient checks slots on WhatsApp → Selects time → Automated WhatsApp reminder sent 2 hours before with quick Confirm/Reschedule button → Dynamic calendar updates.",
    },
    salon: {
      title: "Salons & Spas",
      intro: "Idle technicians during weekdays and zero systematic customer retention programs.",
      bottlenecks: [
        "No way to drive traffic to specific empty weekday slots dynamically.",
        "High customer drop-off after the first treatment, as staff fails to follow up.",
        "Owner has zero visibility into individual technician performance and tips.",
      ],
      solTitle: "Slot Optimization & Recall System",
      before: "Client receives treatment → Pays cash → Details written in ledger → Customer never contacted again unless they walk in organically.",
      after: "Customer details logged → Post-visit WhatsApp thank you sent with feedback rating → System schedules auto-grooming recall reminder exactly 28 days later.",
    },
    gym: {
      title: "Gyms & Fitness",
      intro: "Lapsed memberships and manual ID gatekeeping leak recurring subscription revenues.",
      bottlenecks: [
        "Expired members check in without front desk noticing, consuming trainer time.",
        "No system for notifying members of upcoming renewals except verbal warnings at the desk.",
        "Class scheduling for batches is managed on noticeboards, causing over-crowding.",
      ],
      solTitle: "Membership Lifecycle Automation",
      before: "Members walk past front desk → Staff doesn't check database status → Membership expires silently → Gym owner loses recurring fee collection.",
      after: "Digital check-in validates database status instantly → Automated reminder sent via WhatsApp 7 days before expiry with Razorpay renewal link.",
    },
    professional: {
      title: "Professional Services",
      intro: "Drawn-out proposal cycles, milestone confusion, and late payment reconciliation stall agency cash flow.",
      bottlenecks: [
        "Staff spends hours drafting custom proposals for basic recurring packages.",
        "Project deliverables slip because approval threads are scattered across emails.",
        "Late payment collections cause vendor delays and strain business liquidity.",
      ],
      solTitle: "Structured Milestone Engine",
      before: "Milestone finished → Staff emails client → Client misses email → Project halts for 5 days → Delayed invoice creation and collection.",
      after: "Milestone complete → System triggers WhatsApp approval check to client → Client clicks approve → Automated GST invoice issued → Auto-reconciliation.",
    },
  };

  const faqData = [
    {
      q: "Why not just use regular WhatsApp Business?",
      a: "Regular WhatsApp Business has no conditional logic, database integrations, or automated custom API routes. We build full relational databases, custom backends, and logical triggers that communicate through the WhatsApp Cloud API. This allows automated payments, custom routing, and instant status updates that basic business apps cannot handle.",
    },
    {
      q: "Why custom systems instead of an ERP or CRM?",
      a: "Off-the-shelf CRMs require your team to adapt their natural workflow to match the software. This leads to poor adoption and incomplete data. We build software to match your optimized business process. Your team uses familiar interfaces, while the backend organizes everything smoothly, yielding 100% staff compliance.",
    },
    {
      q: "How long does implementation take?",
      a: "A pilot program addressing your main operational bottleneck is deployed within 14 days. Full custom systems, including unified databases, automated alerts, and staff dashboards, take 4 to 8 weeks to build and launch.",
    },
    {
      q: "Do we need to hire tech staff to manage this?",
      a: "No. We build, host, monitor, and scale the infrastructure. Your staff uses clean, web-based control interfaces and automated WhatsApp channels. We act as your fractional Chief Technology and Operations Officer.",
    },
  ];

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 selection:bg-coffee-bean-200 selection:text-coffee-bean-900 pt-16">
      {/* Hero Section */}
      <section className="relative w-full border-b border-glaucous-200/80 bg-glaucous-50 overflow-hidden py-20 lg:py-32 flex items-center justify-center">
        {/* Grid Background */}
        <div
          className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(66,47,208,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,47,208,0.03)_1px,transparent_1px)] bg-[length:50px_50px] animate-grid-move z-0"
        />

        {/* Animated Background Lines */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-[1] pointer-events-none">
          {["top-[10%]", "top-[30%]", "top-[50%]", "top-[70%]", "top-[90%]"].map((topClass, index) => (
            <div key={index} className={`absolute w-full h-[100px] ${topClass}`}>
              <div className="w-full h-0.5 relative overflow-hidden">
                <div
                  className={`absolute top-0 w-full h-full animate-line-move ${
                    index % 2 !== 0 ? '[animation-direction:reverse] [animation-delay:3s]' : ''
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, var(--color-coffee-bean-500) 20%, var(--color-vivid-royal-500) 50%, var(--color-coffee-bean-500) 80%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Hero Content Centered */}
        <div className="w-full max-w-4xl mx-auto px-6 text-center z-[10] relative flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center w-full">
            <div className="inline-flex items-center px-3 py-1.5 rounded text-xs font-mono font-semibold tracking-wider text-coffee-bean-750 bg-coffee-bean-100/70 border border-coffee-bean-200/80 mb-6 uppercase">
              Operations over software
            </div>

            <div className="relative px-8 py-4 mb-6 w-full max-w-3xl">
              {/* Corner Lines wrapping h1 */}
              <div className="hidden lg:block absolute inset-0 z-[5] pointer-events-none">
                <svg
                  className="absolute top-0 left-0 w-[80px] h-[40px] animate-corner-line"
                  viewBox="0 0 120 60"
                  stroke="var(--color-coffee-bean-500)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="50"
                >
                  <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
                </svg>
                <svg
                  className="absolute bottom-0 right-0 w-[80px] h-[40px] transform scale-x-[-1] scale-y-[-1] animate-corner-line [animation-delay:3s]"
                  viewBox="0 0 120 60"
                  stroke="var(--color-vivid-royal-500)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="50"
                >
                  <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
                </svg>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-vivid-royal-950 leading-tight max-w-3xl relative z-[10]">
                We help Indian businesses grow by fixing the{" "}
                <span
                  className="inline-block animate-gradient-shift"
                  style={{
                    backgroundImage: 'linear-gradient(45deg, var(--color-coffee-bean-500), var(--color-coffee-bean-600), var(--color-vivid-royal-500))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  operations behind the revenue.
                </span>
              </h1>
            </div>

            <p className="text-lg text-glaucous-800 mb-8 max-w-2xl">
              No marketing campaigns. No boilerplate AI. We audit your lead cycles, build custom software engines, and automate your workflows to recover lost revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/book"
                className="px-6 py-3.5 text-sm font-semibold rounded bg-coffee-bean-600 hover:bg-coffee-bean-700 text-ghost-white-50 border border-coffee-bean-500/20 shadow-[0_0_20px_rgba(237,18,109,0.15)] transition-all duration-300"
              >
                Book Discovery Call
              </Link>
              <Link
                href="/platform"
                className="px-6 py-3.5 text-sm font-semibold rounded bg-ghost-white-50 hover:bg-glaucous-100 text-glaucous-900 border border-glaucous-200 transition-all duration-300"
              >
                Explore Platform
              </Link>
            </div>
            <div className="w-full max-w-2xl grid grid-cols-3 gap-6 pt-8 border-t border-glaucous-200/80">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold font-mono text-vivid-royal-950">₹4.2Cr+</span>
                <span className="text-xs text-glaucous-600 mt-1">Revenue Recovered</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold font-mono text-vivid-royal-950">80k+</span>
                <span className="text-xs text-glaucous-600 mt-1">Hours Saved</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold font-mono text-vivid-royal-950">14 Days</span>
                <span className="text-xs text-glaucous-600 mt-1">Average Pilot Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leakage Section */}
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
              className={`w-full text-left p-5 rounded-md border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                activeNode === "intake"
                  ? "bg-vivid-royal-50 border-coffee-bean-500 shadow-[0_0_15px_rgba(237,18,109,0.08)]"
                  : "bg-glaucous-50/50 border-glaucous-200/60 hover:border-glaucous-400 hover:translate-x-1"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">📥</span>
                <span className="font-semibold text-vivid-royal-950">1. Lead Intake Stage</span>
              </div>
              <span className="font-mono text-xs text-glaucous-600 bg-glaucous-50 px-2.5 py-1 rounded">100% Volume</span>
            </button>
            <div className="h-6 w-0.5 bg-gradient-to-b from-glaucous-200 to-scarlet-fire-500/80 ml-8 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-scarlet-fire-600 whitespace-nowrap font-bold">-45% drop-off</span>
            </div>
            <button
              onClick={() => setActiveNode("followup")}
              className={`w-full text-left p-5 rounded-md border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                activeNode === "followup"
                  ? "bg-vivid-royal-50 border-coffee-bean-500 shadow-[0_0_15px_rgba(237,18,109,0.08)]"
                  : "bg-glaucous-50/50 border-glaucous-200/60 hover:border-glaucous-400 hover:translate-x-1"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <span className="font-semibold text-vivid-royal-950">2. First Follow-up Stage</span>
              </div>
              <span className="font-mono text-xs text-glaucous-600 bg-glaucous-50 px-2.5 py-1 rounded">55% Retained</span>
            </button>
            <div className="h-6 w-0.5 bg-gradient-to-b from-glaucous-200 to-scarlet-fire-500/80 ml-8 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-scarlet-fire-600 whitespace-nowrap font-bold">-30% drop-off</span>
            </div>
            <button
              onClick={() => setActiveNode("booking")}
              className={`w-full text-left p-5 rounded-md border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                activeNode === "booking"
                  ? "bg-vivid-royal-50 border-coffee-bean-500 shadow-[0_0_15px_rgba(237,18,109,0.08)]"
                  : "bg-glaucous-50/50 border-glaucous-200/60 hover:border-glaucous-400 hover:translate-x-1"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">🗓️</span>
                <span className="font-semibold text-vivid-royal-950">3. Booking / Visit Stage</span>
              </div>
              <span className="font-mono text-xs text-glaucous-600 bg-glaucous-50 px-2.5 py-1 rounded">25% Retained</span>
            </button>
            <div className="h-6 w-0.5 bg-gradient-to-b from-glaucous-200 to-scarlet-fire-500/80 ml-8 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-scarlet-fire-600 whitespace-nowrap font-bold">-15% drop-off</span>
            </div>
            <button
              onClick={() => setActiveNode("payment")}
              className={`w-full text-left p-5 rounded-md border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                activeNode === "payment"
                  ? "bg-vivid-royal-50 border-coffee-bean-500 shadow-[0_0_15px_rgba(237,18,109,0.08)]"
                  : "bg-glaucous-50/50 border-glaucous-200/60 hover:border-glaucous-400 hover:translate-x-1"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">💳</span>
                <span className="font-semibold text-vivid-royal-950">4. Payment Collection Stage</span>
              </div>
              <span className="font-mono text-xs text-glaucous-600 bg-glaucous-50 px-2.5 py-1 rounded font-bold">10% Yield</span>
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

      {/* Methodology Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Methodology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">The Operational Blueprint.</h2>
          <p className="text-glaucous-800 max-w-xl mx-auto">
            Six continuous phases designed to optimize systems first, and only write code that moves numbers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-sm text-coffee-bean-600 font-bold">01</span>
            <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Observe</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              We shadow your staff. We map every manual handoff, WhatsApp chat, and Google Sheet edit.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-sm text-coffee-bean-600 font-bold">02</span>
            <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Understand</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              We define the bottlenecks—where staff spend hours doing copy-paste work.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-sm text-coffee-bean-600 font-bold">03</span>
            <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Measure</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              We attach metrics. What is the current average lead response time? Where are fee collections failing?
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-sm text-coffee-bean-600 font-bold">04</span>
            <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Improve</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              We redesign the operational flows, stripping away manual checks and unnecessary reports.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-sm text-coffee-bean-600 font-bold">05</span>
            <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Build</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              We write custom internal software, WhatsApp automation sequences, and custom BI dashboards.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-sm text-coffee-bean-600 font-bold">06</span>
            <h3 className="text-lg font-bold text-vivid-royal-950 mt-3 mb-2">Scale</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              Continuous refinement based on real business intelligence dashboards. Systems adapt as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
        <div className="mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Deliverables</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Measurable outcomes. Not custom features.</h2>
          <p className="text-glaucous-800 max-w-xl">
            We measure success in saved hours and reclaimed revenue, not story points.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Increase Admissions</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              Automatically follow up with inquiries within 30 seconds. Enable prospects to book batches directly. Reclaim 22% of cold leads.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Recover Missed Enquiries</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              Escalation channels trigger automatically when inquiries are left unaddressed by staff for more than 10 minutes.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Reduce Manual Operations</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              Eliminate human data entry between WhatsApp, Excel, and Razorpay. Automate fee updates and attendance logs.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Improve Fee Collection</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              Send stateful automated WhatsApp payment reminders with integrated 1-click Razorpay payment flows and auto-reconciliation.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Operational Visibility</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              One unified screen showing daily active enquiries, technician bookings, and outstanding payments. No guessing.
            </p>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg hover:border-coffee-bean-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-lg font-bold text-vivid-royal-950 mb-2">Reduce Owner Dependency</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed">
              Operations run on predefined triggers. Staff follow the software, leaving the founder to focus on strategic scale.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Selection */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Verticals</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Built for Indian SMB operations.</h2>
          <p className="text-glaucous-800 max-w-xl mx-auto">
            Every industry has distinct operational structures. We specialize in five core business verticals.
          </p>
        </div>

        <div className="flex justify-center gap-3 overflow-x-auto pb-4 mb-12">
          {(Object.keys(industryData) as IndustryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveInd(key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap cursor-pointer transition-all duration-300 ${
                activeInd === key
                  ? "bg-coffee-bean-50 border-coffee-bean-500 text-coffee-bean-750 shadow-[0_0_10px_rgba(237,18,109,0.1)]"
                  : "bg-transparent border-glaucous-200 text-glaucous-700 hover:border-glaucous-400 hover:text-vivid-royal-950"
              }`}
            >
              {industryData[key].title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-ghost-white-50 border border-glaucous-200 rounded-lg p-8 sm:p-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-vivid-royal-950 mb-3">{industryData[activeInd].title}</h3>
            <p className="text-base text-glaucous-900 mb-8 leading-relaxed">{industryData[activeInd].intro}</p>
            
            <div>
              <h4 className="font-mono text-xs text-glaucous-600 uppercase tracking-widest mb-4">Core Bottlenecks</h4>
              <ul className="flex flex-col gap-3">
                {industryData[activeInd].bottlenecks.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-glaucous-800 leading-relaxed">
                    <span className="text-scarlet-fire-600 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-glaucous-50 border border-glaucous-200 p-8 rounded-lg shadow-inner">
              <span className="font-mono text-[9px] text-coffee-bean-600 uppercase tracking-widest font-bold block mb-4">The ADX Engine</span>
              <h4 className="text-lg font-bold text-vivid-royal-950 mb-6">{industryData[activeInd].solTitle}</h4>
              <div className="flex flex-col gap-6">
                <div className="border-l-2 border-scarlet-fire-600 pl-4">
                  <span className="block font-mono text-[9px] text-glaucous-600 uppercase mb-1">Before ADX</span>
                  <p className="text-xs text-glaucous-800 leading-relaxed">{industryData[activeInd].before}</p>
                </div>
                <div className="border-l-2 border-coffee-bean-600 pl-4">
                  <span className="block font-mono text-[9px] text-coffee-bean-600 uppercase mb-1">With ADX</span>
                  <p className="text-xs text-glaucous-950 leading-relaxed font-medium">{industryData[activeInd].after}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Execution</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Our Process.</h2>
          <p className="text-glaucous-800 max-w-xl mx-auto">
            From diagnostic audit to continuous operations tuning. We build fast, iterate, and deploy stably.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative before:absolute before:top-8 before:left-0 before:w-full before:h-[1px] before:bg-glaucous-200 before:hidden md:before:block">
          {[
            { step: "1", title: "Discovery", desc: "30-minute review. We map your current software stack and main administrative bottlenecks." },
            { step: "2", title: "Operational Audit", desc: "Deep-dive review of staff routines, spreadsheet layouts, and lead response pipelines." },
            { step: "3", title: "14-Day Pilot", desc: "We deploy a simple working prototype targeting your single most critical operational leak." },
            { step: "4", title: "Full Build", desc: "Custom build of your unified platform, database architecture, and team onboarding support." },
            { step: "5", title: "Continuous Tuning", desc: "Monthly operational review calls. We adjust automation triggers based on live dashboard feedback." },
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-start md:items-center text-left md:text-center">
              <div className="w-12 h-12 rounded-full bg-ghost-white-50 border border-glaucous-200 text-vivid-royal-950 hover:border-coffee-bean-500 hover:text-coffee-bean-600 flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(66,47,208,0.05)] transition-all duration-300 z-10 mb-6">
                {item.step}
              </div>
              <h3 className="text-md font-bold text-vivid-royal-950 mb-2">{item.title}</h3>
              <p className="text-xs text-glaucous-800 leading-relaxed md:max-w-[180px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
        <div className="mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Results</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Real numbers. Verified operations.</h2>
          <p className="text-glaucous-800 max-w-xl">No corporate fluff. Standard operational case studies from real Indian businesses.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 sm:p-12 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-[9px] text-glaucous-600 uppercase tracking-widest font-bold block mb-4">Coaching</span>
            <h3 className="text-xl font-bold text-vivid-royal-950 mb-3">Delhi Coaching Academy</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed mb-8">
              Automated parent query updates and lead response cycles across 3 branches.
            </p>
            <div className="flex gap-10 pt-6 border-t border-glaucous-200">
              <div>
                <span className="text-3xl font-bold font-mono text-coffee-bean-600">+22%</span>
                <span className="block text-[10px] text-glaucous-600 uppercase font-mono mt-1">Admissions</span>
              </div>
              <div>
                <span className="text-3xl font-bold font-mono text-coffee-bean-600">45s</span>
                <span className="block text-[10px] text-glaucous-600 uppercase font-mono mt-1">Response Speed</span>
              </div>
            </div>
          </div>
          <div className="bg-ghost-white-50 border border-glaucous-200 p-8 sm:p-12 rounded-lg hover:border-glaucous-400 transition-all duration-300">
            <span className="font-mono text-[9px] text-glaucous-600 uppercase tracking-widest font-bold block mb-4">Healthcare</span>
            <h3 className="text-xl font-bold text-vivid-royal-950 mb-3">Dr. Mehta Ortho Clinics</h3>
            <p className="text-sm text-glaucous-800 leading-relaxed mb-8">
              Replaced manual calling with automated WhatsApp appointment scheduling and feedback tracking.
            </p>
            <div className="flex gap-10 pt-6 border-t border-glaucous-200">
              <div>
                <span className="text-3xl font-bold font-mono text-coffee-bean-600">-30%</span>
                <span className="block text-[10px] text-glaucous-600 uppercase font-mono mt-1">No-Shows</span>
              </div>
              <div>
                <span className="text-3xl font-bold font-mono text-coffee-bean-600">18 hrs/wk</span>
                <span className="block text-[10px] text-glaucous-600 uppercase font-mono mt-1">Saved Labor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">FAQ</span>
          <h2 className="text-3xl font-extrabold text-vivid-royal-950 mt-2">Answering hard objections.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="bg-ghost-white-50 border border-glaucous-200 rounded-lg overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-vivid-royal-950 hover:text-coffee-bean-600 transition-all duration-300 font-semibold cursor-pointer"
                >
                  <span>{item.q}</span>
                  <span className={`text-xl font-mono transition-transform duration-300 ${isOpen ? "rotate-45 text-coffee-bean-600" : ""}`}>+</span>
                </button>
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="px-6 pb-6 text-sm text-glaucous-800 leading-relaxed border-t border-glaucous-200/40 pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
