import { useState } from "react";

type IndustryKey = "coaching" | "healthcare" | "salon" | "gym" | "professional";

export default function IndustriesSection() {
  const [activeInd, setActiveInd] = useState<IndustryKey>("coaching");

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

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80" id="industries">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Verticals</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Built for Indian SMB operations.</h2>
        <p className="text-glaucous-800 max-w-xl mx-auto">
          Every industry has distinct operational structures. We specialize in five core business verticals.
        </p>
      </div>

      <div className="flex justify-center gap-3 overflow-x-auto pb-4 mb-12 select-none">
        {(Object.keys(industryData) as IndustryKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveInd(key)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-150 active:translate-y-[1px] ${
              activeInd === key
                ? "bg-gradient-to-b from-coffee-bean-100 to-coffee-bean-50 border-t border-t-coffee-bean-300 border-x border-x-coffee-bean-200/80 border-b border-b-white/80 text-coffee-bean-800 shadow-[inset_0_2px_4px_rgba(95,7,44,0.12),0_1px_1.5px_rgba(255,255,255,0.7)] font-semibold"
                : "bg-gradient-to-b from-white to-glaucous-50/50 border-t border-t-white border-x border-x-glaucous-200/60 border-b-2 border-b-glaucous-300/80 text-glaucous-700 hover:from-white hover:to-glaucous-100 hover:border-glaucous-300 hover:text-vivid-royal-950 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
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
  );
}
