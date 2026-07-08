import { useState } from "react";

type IndustryKey = "coaching" | "healthcare" | "salon" | "gym" | "professional";

export default function IndustriesSection() {
  const [activeInd, setActiveInd] = useState<IndustryKey>("coaching");

  const industryData = {
    coaching: {
      title: "Coaching Institutes",
      intro: "300 students across 8 batches. Parents call to ask about fees. Counselors search through WhatsApp chats for old messages. Enrollment numbers live in someone's head.",
      bottlenecks: [
        "A parent asks about a batch. The counselor checks three different WhatsApp chats before finding the answer.",
        "Two students get booked for the same slot because the schedule is in an Excel file nobody updated.",
        "Fees are due next week. Someone needs to call each parent individually. Nobody has time.",
      ],
      solTitle: "Automated Batch & Fee Management",
      before: "Counselors copy registration links manually. Parents send bank screenshots. The admin types everything into Tally after class.",
      after: "A parent registers. The system creates their profile automatically. WhatsApp sends batch details. Payment is reconciled. Tally updates itself.",
    },
    healthcare: {
      title: "Clinics & Healthcare",
      intro: "50 patients a day. The receptionist calls each one to confirm. Half don't pick up. The other half show up at the wrong time.",
      bottlenecks: [
        "The receptionist spends two hours every morning calling patients. Most calls go unanswered.",
        "A patient who visited three months ago needs a follow-up. Nobody remembers to call them.",
        "A prescription is written on paper. The patient loses it. The next doctor has no record of what was prescribed.",
      ],
      solTitle: "Patient Scheduling That Works",
      before: "A patient calls the desk. The receptionist writes the appointment in a physical book. Someone tries to call and confirm. The patient doesn't pick up. The slot stays empty.",
      after: "A patient checks available slots on WhatsApp and picks a time. The system sends a reminder two hours before. The patient confirms or reschedules with one tap. The calendar updates automatically.",
    },
    salon: {
      title: "Salons & Spas",
      intro: "Empty chairs on Tuesday. A waitlist on Saturday. First-time customers come once and never return because nobody remembers to call them back.",
      bottlenecks: [
        "Technicians sit idle on slow days. There's no way to offer discounts and fill those empty slots.",
        "A customer visits for the first time, gets a great treatment, and never hears from the salon again.",
        "The owner doesn't know which technicians bring in the most repeat business.",
      ],
      solTitle: "Slot Management & Customer Recall",
      before: "A customer finishes their treatment, pays in cash, and leaves. Their details are written in a ledger book. Nobody contacts them again unless they walk in.",
      after: "The customer's details are saved. WhatsApp sends a thank you message with a feedback request. Exactly 28 days later, the system reminds them to book their next appointment.",
    },
    gym: {
      title: "Gyms & Fitness",
      intro: "Memberships expire but members keep walking in. There's no way to check who has paid and who hasn't.",
      bottlenecks: [
        "An expired member walks past the front desk. Nobody checks. They use the equipment without paying.",
        "Members don't know their renewal date. The staff mentions it verbally. Most members forget.",
        "Class schedules are posted on a noticeboard. Members show up and find the class is full.",
      ],
      solTitle: "Membership Lifecycle Automation",
      before: "A member walks in. The staff doesn't check their status. Their membership expired last month. The gym loses revenue every visit.",
      after: "The member checks in digitally. The system validates their status instantly. Seven days before expiry, WhatsApp sends a renewal link. The member pays and continues without interruption.",
    },
    professional: {
      title: "Professional Services",
      intro: "Every project starts with a custom proposal. Staff spends hours writing them. Clients take weeks to approve.",
      bottlenecks: [
        "Staff rewrites proposals from scratch for services they offer every single month.",
        "Project approvals are spread across email threads. Nobody knows if the client has seen the latest version.",
        "Invoices go out late. Clients pay late. The agency struggles with cash flow every quarter.",
      ],
      solTitle: "Structured Milestone Engine",
      before: "A milestone is completed. Someone emails the client. The client misses the email. Work stops for five days. The invoice goes out late.",
      after: "A milestone is completed. WhatsApp sends an approval request. The client taps approve. An invoice is generated automatically. Payment follows.",
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80" id="industries">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Industries</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">We work with Indian service businesses.</h2>
        <p className="text-glaucous-800 max-w-xl mx-auto">
          Every industry has different problems. We build different systems for each one.
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
            <h4 className="font-mono text-xs text-glaucous-600 uppercase tracking-widest mb-4">Where it breaks</h4>
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
            <span className="font-mono text-[9px] text-coffee-bean-600 uppercase tracking-widest font-bold block mb-4">What ADX Builds</span>
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
