"use client";

import { useState } from "react";
import { m } from "framer-motion";

type IndustryKey = "coaching" | "healthcare" | "salon" | "gym" | "professional";

export default function IndustriesSection() {
  const [activeInd, setActiveInd] = useState<IndustryKey>("coaching");
  const [interactiveState, setInteractiveState] = useState({
    coaching: "pending",
    healthcare: "pending",
    salon: "pending",
    gym: "expired",
    professional: "pending",
  });

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

  const renderCoachingWidget = () => {
    const isSent = interactiveState.coaching === "sent";
    return (
      <div className="bg-white border border-glaucous-200 rounded-xl p-4 shadow-sm space-y-3 font-sans text-base">
        <div className="flex items-center justify-between border-b border-glaucous-100 pb-2">
          <span className="font-mono text-sm font-bold text-glaucous-600">FEE MANAGEMENT PANEL</span>
          <span className="px-1.5 py-0.5 bg-scarlet-fire-50 text-scarlet-fire-600 rounded text-sm font-bold">1 Pending</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-glaucous-50/50 rounded border border-glaucous-100">
            <div>
              <div className="font-bold text-vivid-royal-950">Ananya Verma</div>
              <div className="text-sm text-glaucous-600">Grade 12 Batch A</div>
            </div>
            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-sm font-bold">Paid</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-glaucous-50/50 rounded border border-glaucous-100">
            <div>
              <div className="font-bold text-vivid-royal-950">Kabir Sharma</div>
              <div className="text-sm text-glaucous-600">Grade 11 Batch B</div>
            </div>
            {isSent ? (
              <m.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-full text-sm font-bold"
              >
                WhatsApp Sent
              </m.span>
            ) : (
              <button
                onClick={() => setInteractiveState({ ...interactiveState, coaching: "sent" })}
                className="px-2.5 py-1 bg-coffee-bean-500 hover:bg-coffee-bean-600 text-coffee-bean-950 font-bold rounded text-sm transition-colors cursor-pointer"
              >
                Remind on WhatsApp
              </button>
            )}
          </div>
        </div>
        {isSent && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2.5 bg-[#d9fdd3] text-neutral-800 rounded-lg rounded-tr-none border border-[#c2f3ba] text-base leading-snug space-y-1"
          >
            <div className="font-bold text-sm text-emerald-850 flex justify-between">
              <span>ADX AUTOMATION</span>
              <span>Just Now</span>
            </div>
            <p>Dear Parent, Kabir&apos;s fees for July are due. Tap here to pay securely via UPI: adx.pay/kabir-sharma</p>
          </m.div>
        )}
      </div>
    );
  };

  const renderHealthcareWidget = () => {
    const isConfirmed = interactiveState.healthcare === "confirmed";
    return (
      <div className="bg-white border border-glaucous-200 rounded-xl p-4 shadow-sm space-y-3 font-sans text-base">
        <div className="flex items-center justify-between border-b border-glaucous-100 pb-2">
          <span className="font-mono text-sm font-bold text-glaucous-600">CALENDAR AUTOMATION</span>
          <span className="px-1.5 py-0.5 bg-vivid-royal-50 text-vivid-royal-600 rounded text-sm font-bold">Today</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-glaucous-50/50 rounded border border-glaucous-100">
            <div>
              <div className="font-bold text-vivid-royal-950">Dr. Mehta - 11:30 AM Slot</div>
              <div className="text-sm text-glaucous-600">Patient: Rahul Verma</div>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-sm font-bold border transition-colors duration-350 ${
              isConfirmed
                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                : "bg-amber-50 text-amber-700 border-amber-100 animate-pulse"
            }`}>
              {isConfirmed ? "Confirmed" : "Pending Confirmation"}
            </span>
          </div>
        </div>
        
        {!isConfirmed ? (
          <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-lg space-y-2">
            <div className="font-semibold text-neutral-500 text-sm uppercase">Automated Patient Alert</div>
            <p className="text-base text-neutral-800 leading-snug">Hi Rahul! Please confirm your appointment with Dr. Mehta today at 11:30 AM.</p>
            <button
              onClick={() => setInteractiveState({ ...interactiveState, healthcare: "confirmed" })}
              className="w-full py-1.5 bg-vivid-royal-600 hover:bg-vivid-royal-700 text-white font-bold rounded text-sm transition-colors cursor-pointer"
            >
              Confirm Patient Booking (Simulate Reply)
            </button>
          </div>
        ) : (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-lg text-base leading-snug"
          >
            <div className="font-bold text-sm mb-1">✓ APPOINTMENT CONFIRMED</div>
            <p>Calendar updated. Notification sent to Dr. Mehta&apos;s dashboard. Automated reminder scheduled 2 hours before visit.</p>
          </m.div>
        )}
      </div>
    );
  };

  const renderSalonWidget = () => {
    const isSent = interactiveState.salon === "sent";
    return (
      <div className="bg-white border border-glaucous-200 rounded-xl p-4 shadow-sm space-y-3 font-sans text-base">
        <div className="flex items-center justify-between border-b border-glaucous-100 pb-2">
          <span className="font-mono text-sm font-bold text-glaucous-600">RECALL TIMELINE</span>
          <span className="text-sm text-glaucous-500 font-bold">28-Day Cycle</span>
        </div>
        <div className="space-y-3 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[1px] before:bg-glaucous-200">
          <div className="flex gap-3 items-start relative pl-6">
            <div className="absolute left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" />
            <div>
              <div className="font-bold text-vivid-royal-950">Day 0: Hair Spa Completed</div>
              <p className="text-sm text-glaucous-600">Client: Ritu Sen</p>
            </div>
          </div>
          <div className="flex gap-3 items-start relative pl-6">
            <div className="absolute left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" />
            <div>
              <div className="font-bold text-vivid-royal-950">Day 7: Feedback WhatsApp</div>
              <p className="text-sm text-glaucous-600">Sent. Received 5★ rating.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start relative pl-6">
            <div className={`absolute left-[6px] top-1 w-2.5 h-2.5 rounded-full border border-white transition-colors duration-300 ${
              isSent ? "bg-emerald-500" : "bg-amber-500 animate-pulse"
            }`} />
            <div className="w-full">
              <div className="font-bold text-vivid-royal-950">Day 28: Recall Campaign</div>
              <p className="text-sm text-glaucous-600 mb-2">Automated rebooking offer.</p>
              {!isSent ? (
                <button
                  onClick={() => setInteractiveState({ ...interactiveState, salon: "sent" })}
                  className="px-2.5 py-1 bg-coffee-bean-500 hover:bg-coffee-bean-600 text-coffee-bean-950 font-bold rounded text-sm transition-colors cursor-pointer"
                >
                  Send 28-Day Recall WhatsApp
                </button>
              ) : (
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-2 bg-[#d9fdd3] text-neutral-800 rounded-lg rounded-tr-none border border-[#c2f3ba] text-sm"
                >
                  &quot;Hi Ritu! It&apos;s been 4 weeks since your hair treatment. Book this Tuesday and get 15% off: adx.salon/book-ritu&quot;
                </m.div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderGymWidget = () => {
    const isActive = interactiveState.gym === "active";
    return (
      <div className="bg-white border border-glaucous-200 rounded-xl p-4 shadow-sm space-y-3 font-sans text-base">
        <div className="flex items-center justify-between border-b border-glaucous-100 pb-2">
          <span className="font-mono text-sm font-bold text-glaucous-600">CHECK-IN VALIDATOR</span>
          <span className="px-1.5 py-0.5 bg-scarlet-fire-50 text-scarlet-fire-600 rounded text-sm font-bold">FRONT DESK</span>
        </div>
        <div className="p-3 rounded-lg border flex items-center justify-between gap-4 transition-colors duration-305 bg-neutral-50">
          <div>
            <div className="font-bold text-vivid-royal-950 text-lg">Member: Rohan Malhotra</div>
            <div className="text-sm text-neutral-500 mt-0.5">Membership ID: #4092</div>
          </div>
          <span className={`px-2 py-1 rounded text-sm font-bold border transition-all duration-300 ${
            isActive
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : "bg-red-50 text-red-700 border-red-100"
          }`}>
            {isActive ? "✓ ACCESS GRANTED" : "✗ ACCESS DENIED: EXPIRED"}
          </span>
        </div>

        {!isActive ? (
          <div className="p-2.5 bg-red-50/50 border border-red-100 rounded-lg space-y-2">
            <p className="text-sm text-red-900 leading-snug">Membership expired 5 days ago. Click below to simulate WhatsApp renewal link payment.</p>
            <button
              onClick={() => setInteractiveState({ ...interactiveState, gym: "active" })}
              className="w-full py-1.5 bg-coffee-bean-500 hover:bg-coffee-bean-600 text-coffee-bean-950 font-bold rounded text-sm transition-colors cursor-pointer"
            >
              Simulate Member Payment (₹2,000)
            </button>
          </div>
        ) : (
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-lg text-base leading-snug"
          >
            <div className="font-bold text-sm mb-1">✓ PAYMENT RECONCILED</div>
            <p>UPI reference checked. Account status set to Active. WhatsApp receipt sent automatically to Rohan.</p>
          </m.div>
        )}
      </div>
    );
  };

  const renderProfessionalWidget = () => {
    const isApproved = interactiveState.professional === "approved";
    return (
      <div className="bg-white border border-glaucous-200 rounded-xl p-4 shadow-sm space-y-3 font-sans text-base">
        <div className="flex items-center justify-between border-b border-glaucous-100 pb-2">
          <span className="font-mono text-sm font-bold text-glaucous-600">MILESTONE TRACKER</span>
          <span className="text-sm text-glaucous-500 font-bold">Agency Flow</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-emerald-50 border border-emerald-100 rounded">
            <span className="font-bold text-emerald-900">Milestone 01: Project Kickoff</span>
            <span className="text-sm text-emerald-700 font-bold">Done</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-emerald-50 border border-emerald-100 rounded">
            <span className="font-bold text-emerald-900">Milestone 02: Design Complete</span>
            <span className="text-sm text-emerald-700 font-bold">Done</span>
          </div>
          <div className={`flex items-center justify-between p-2 rounded border transition-colors duration-300 ${
            isApproved
              ? "bg-emerald-50 border-emerald-100 text-emerald-900"
              : "bg-amber-50 border-amber-100 text-amber-900 animate-pulse"
          }`}>
            <span className="font-bold">Milestone 03: Alpha Delivery</span>
            <span className="text-sm font-bold">{isApproved ? "Approved" : "Awaiting Signoff"}</span>
          </div>
        </div>

        {!isApproved ? (
          <div className="p-2.5 bg-neutral-50 border border-neutral-100 rounded-lg space-y-2">
            <p className="text-sm text-neutral-800 leading-snug">Client gets a WhatsApp message to tap and approve the milestone.</p>
            <button
              onClick={() => setInteractiveState({ ...interactiveState, professional: "approved" })}
              className="w-full py-1.5 bg-vivid-royal-600 hover:bg-vivid-royal-700 text-white font-bold rounded text-sm transition-colors cursor-pointer"
            >
              Click to Approve Milestone as Client
            </button>
          </div>
        ) : (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-lg text-base leading-snug space-y-1.5"
          >
            <div className="font-bold text-sm text-emerald-900">✓ MILESTONE SIGNED OFF</div>
            <p>Invoice #1042 generated automatically. Sent to client on WhatsApp. Integrated with Tally.</p>
          </m.div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-white border-t border-glaucous-200/80 py-20 px-6" id="industries">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-vivid-royal-950 mt-2 mb-4 tracking-tight leading-tight">
          We work with Indian service businesses.
        </h2>
        <p className="text-lg sm:text-xl text-glaucous-800 max-w-xl mx-auto leading-relaxed">
          Every industry has different problems. We build different systems for each one.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex justify-center gap-3 overflow-x-auto pb-4 mb-12 select-none">
        {(Object.keys(industryData) as IndustryKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveInd(key)}
            className={`px-5 py-2.5 rounded-full text-base font-medium whitespace-nowrap cursor-pointer transition-all duration-150 active:translate-y-[1px] ${
              activeInd === key
                ? "bg-gradient-to-b from-coffee-bean-100 to-coffee-bean-50 border-t border-t-coffee-bean-300 border-x border-x-coffee-bean-200/80 border-b border-b-white/80 text-coffee-bean-800 shadow-[inset_0_2px_4px_rgba(95,7,44,0.12),0_1px_1.5px_rgba(255,255,255,0.7)] font-semibold"
                : "bg-gradient-to-b from-white to-glaucous-50/50 border-t border-t-white border-x border-x-glaucous-200/60 border-b-2 border-b-glaucous-300/80 text-glaucous-700 hover:from-white hover:to-glaucous-100 hover:border-glaucous-300 hover:text-vivid-royal-950 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            }`}
          >
            {industryData[key].title}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-ghost-white-50 border border-glaucous-200 rounded-2xl p-8 sm:p-12 items-center">
        <div>
          <h3 className="text-4xl font-bold text-vivid-royal-950 mb-3">{industryData[activeInd].title}</h3>
          <p className="text-lg text-glaucous-900 mb-8 leading-relaxed">{industryData[activeInd].intro}</p>
          
          <div>
            <h4 className="font-mono text-base text-glaucous-600 uppercase tracking-widest mb-4">Where it breaks</h4>
            <ul className="flex flex-col gap-3">
              {industryData[activeInd].bottlenecks.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-lg text-glaucous-800 leading-relaxed">
                  <span className="text-scarlet-fire-600 font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          {/* Interactive Live Simulation Widget */}
          <div className="bg-glaucous-100/50 border border-glaucous-200/80 p-5 rounded-2xl">
            <span className="font-mono text-sm text-glaucous-600 uppercase tracking-widest font-bold block mb-3">
              Live Pipeline Simulation (Click to Interact)
            </span>
            {activeInd === "coaching" && renderCoachingWidget()}
            {activeInd === "healthcare" && renderHealthcareWidget()}
            {activeInd === "salon" && renderSalonWidget()}
            {activeInd === "gym" && renderGymWidget()}
            {activeInd === "professional" && renderProfessionalWidget()}
          </div>

          {/* Comparison Panels */}
          <div className="bg-glaucous-50 border border-glaucous-200 p-6 rounded-2xl shadow-inner">
            <span className="font-mono text-sm text-coffee-bean-600 uppercase tracking-widest font-bold block mb-4">
              What ADX Builds
            </span>
            <h4 className="text-xl font-bold text-vivid-royal-950 mb-4">{industryData[activeInd].solTitle}</h4>
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-scarlet-fire-400 pl-4">
                <span className="block font-mono text-base text-glaucous-600 uppercase mb-1">Before ADX</span>
                <p className="text-base text-glaucous-800 leading-relaxed">{industryData[activeInd].before}</p>
              </div>
              <div className="border-l-2 border-coffee-bean-600 pl-4">
                <span className="block font-mono text-base text-coffee-bean-600 uppercase mb-1">With ADX</span>
                <p className="text-base text-glaucous-950 leading-relaxed font-medium">{industryData[activeInd].after}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
