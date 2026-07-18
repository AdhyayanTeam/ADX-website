"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { 
  IconCheck, 
  IconUsers, 
  IconCalendar, 
  IconReceipt, 
  IconBolt, 
  IconShield, 
  IconChevronDown,
  IconAlertCircle,
  IconCircleCheck
} from "@tabler/icons-react";

export default function IndustriesPage() {
  const verticals = [
    {
      id: "ind-coaching",
      tabName: "Coaching",
      title: "Coaching & Test Prep",
      tagline: "300 students. 8 batches. Stop tracking on spreadsheets.",
      description: "Automate fee collections, student enrollments, and parent notifications. We connect Meta Ads directly to your CRM database, letting counselors allocate batches and send Razorpay payment links on WhatsApp in 1 click.",
      observations: [
        "Counselors spend hours typing payment reminders to parents on WhatsApp.",
        "Spreadsheet versions get out of sync, leading to double-booked student batches.",
        "Average outstanding accounts receivable runs at 15-20% of monthly revenue."
      ],
      howWeHelp: [
        {
          title: "Automated WhatsApp Collections",
          desc: "Triggers personalized installment alerts with embedded Razorpay payment links."
        },
        {
          title: "Intelligent Batch Rosters",
          desc: "Closes enrollment pipelines automatically when batch capacity reaches 100%."
        },
        {
          title: "Lead Distribution Engine",
          desc: "Allocates inbound Meta/Google ad leads to available counselors in under 5 seconds."
        }
      ],
      typicalDayBefore: [
        { time: "9:00 AM", text: "Parent asks about fee receipts. Counselor digs through bank statements and WhatsApp logs to verify." },
        { time: "11:30 AM", text: "Two counselors register students to the same morning Dropper batch. Excel sheet gets double-booked." },
        { time: "3:00 PM", text: "Counselors spend the afternoon calling parents about overdue fees. 60% of calls go unanswered." }
      ],
      typicalDayAfter: [
        { time: "9:00 AM", text: "Receipt is generated and sent via WhatsApp instantly upon student check-in." },
        { time: "11:30 AM", text: "Batch rosters update in real time. System closes admissions automatically at limit." },
        { time: "3:00 PM", text: "Overdue balances trigger automated WhatsApp reminder cycles. Payments clear without calls." }
      ],
      widget: (
        <div className="bg-[#FAFAFA] border border-border rounded-xl p-6 font-mono space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="font-bold text-foreground">Institute Roster Status</span>
            <span className="text-[10px] text-accent font-bold">LIVE METRICS</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>JEE Dropper Batch A</span>
                <span className="font-bold">40/40 (Full)</span>
              </div>
              <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>NEET Target Batch B</span>
                <span className="font-bold">28/35 (80%)</span>
              </div>
              <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-[80%]" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-border p-3 rounded-lg space-y-2">
            <div className="flex items-center text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping mr-2" />
              <span className="font-bold text-[10px] uppercase">Auto WhatsApp Queue</span>
            </div>
            <p className="text-[10px] text-secondary">To: Rajesh Kumar (Parent)</p>
            <p className="text-[10px] text-foreground font-bold">"Dear Rajesh, installment for Kabir is due. Pay via: adx.pay/kabir-sh"</p>
          </div>
        </div>
      )
    },
    {
      id: "ind-healthcare",
      tabName: "Clinics",
      title: "Clinics & Practices",
      tagline: "Receptionists waste half the morning answering basic booking queries.",
      description: "Patients book appointments directly via WhatsApp without waiting on hold. The system syncs with the doctor's calendar, triggers check-in forms, and sends automatic recall follow-ups for chronic cases.",
      observations: [
        "Receptionists spend 60% of their day answering calls to confirm or reschedule bookings.",
        "No-show rates sit at 15-20%, leaving expensive practitioner slots empty.",
        "Chronic care patients are forgotten after initial checkout due to paper-based filing systems."
      ],
      howWeHelp: [
        {
          title: "Self-Service Booking",
          desc: "Patients check live calendars and book slots directly inside WhatsApp."
        },
        {
          title: "Confirmation Loops",
          desc: "Triggers WhatsApp confirmation prompts, reducing practitioner no-shows to under 3%."
        },
        {
          title: "Systematic Recalls",
          desc: "Auto-schedules checkups for chronic patients exactly 90 days after discharge."
        }
      ],
      typicalDayBefore: [
        { time: "9:30 AM", text: "Reception phone rings continuously. Two walk-ins wait at the desk while the receptionist handles bookings." },
        { time: "11:00 AM", text: "A patient misses their dental implant slot. The slot remains empty as there was no reminder." },
        { time: "2:00 PM", text: "Receptionist calls tomorrow's appointments to verify. Most calls go straight to voicemail." }
      ],
      typicalDayAfter: [
        { time: "9:30 AM", text: "Patients book themselves via WhatsApp. Receptionist focuses entirely on in-clinic hospitality." },
        { time: "11:00 AM", text: "Reminders confirm all slots. A patient rescheduling frees a slot that gets filled instantly by the queue." },
        { time: "2:00 PM", text: "All confirmations are automated. Receptionist logs zero manual reminder calls." }
      ],
      widget: (
        <div className="bg-[#FAFAFA] border border-border rounded-xl p-6 font-mono space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="font-bold text-foreground">Doctor's Schedule Queue</span>
            <span className="text-[10px] text-accent font-bold">DR. MEHTA</span>
          </div>

          <div className="space-y-2">
            <div className="bg-white border border-border p-2.5 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-bold text-foreground">10:00 AM - Rohan Shah</p>
                <p className="text-[9px] text-secondary">General Consultation</p>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded font-bold">CONFIRMED</span>
            </div>
            <div className="bg-white border border-border p-2.5 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-bold text-foreground">11:00 AM - Priya Sen</p>
                <p className="text-[9px] text-secondary">Orthodontic Review</p>
              </div>
              <span className="text-[9px] bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded font-bold">PENDING SMS</span>
            </div>
          </div>

          <div className="bg-white border border-border p-3 rounded-lg space-y-2">
            <div className="flex items-center text-accent">
              <IconCircleCheck className="w-4 h-4 mr-2" />
              <span className="font-bold text-[10px]">RECALL ASSISTANT TRIGGERED</span>
            </div>
            <p className="text-[10px] text-secondary">Chronic Patient: S. Sharma (Diabetes)</p>
            <p className="text-[9px] text-foreground">"90-Day checkup schedule alert queued for WhatsApp dispatch."</p>
          </div>
        </div>
      )
    },
    {
      id: "ind-salon",
      tabName: "Salons",
      title: "Salons & Wellness",
      tagline: "Tuesdays are empty. Saturdays are chaos. Stop losing repeat clients.",
      description: "Optimize empty calendar slots and build loyalty. We set up systems that trigger off-peak discounts, auto-calculate therapist commissions, and send regular recall sequences to previous clients.",
      observations: [
        "weekday seat utilization stays below 30%, while weekends result in long customer wait times.",
        "First-time walk-ins are never recorded, leaking valuable client details.",
        "Commission reports are calculated from manual memory registers, causing staff disputes."
      ],
      howWeHelp: [
        {
          title: "Off-Peak Optimizers",
          desc: "Sends automated Tuesday/Wednesday discount packages to inactive clients."
        },
        {
          title: "Loyalty Recalls",
          desc: "Triggers return booking offers exactly 28 days after their last hair or spa session."
        },
        {
          title: "Commission Logs",
          desc: "Calculates technician payouts transparently based on POS checkouts."
        }
      ],
      typicalDayBefore: [
        { time: "10:30 AM", text: "Three therapists sit idle. Rent and utilities accrue while chairs remain empty." },
        { time: "2:00 PM", text: "A client pays cash for a hair coloring service. No record is saved, losing their number." },
        { time: "7:00 PM", text: "Owner struggles with spreadsheets to calculate commissions for 5 stylists." }
      ],
      typicalDayAfter: [
        { time: "10:30 AM", text: "Weekday discount campaigns fill empty seats. 80% chair utilization." },
        { time: "2:00 PM", text: "Customer details are saved instantly upon check-in. Loyalty reminder queued." },
        { time: "7:00 PM", text: "POS synchronization logs stylist commissions automatically. Transparent payouts." }
      ],
      widget: (
        <div className="bg-[#FAFAFA] border border-border rounded-xl p-6 font-mono space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="font-bold text-foreground">Off-Peak Campaign</span>
            <span className="text-[10px] text-accent font-bold">STATUS: RUNNING</span>
          </div>

          <div className="bg-white border border-border p-3 rounded-lg space-y-3">
            <div className="flex justify-between text-[10px]">
              <span>Target: Inactive (30 Days)</span>
              <span className="font-bold text-accent">142 Clients</span>
            </div>
            <div className="bg-[#FAFAFA] p-2 rounded text-[10px] text-secondary">
              "Hi, we missed you! Book a slot this Tuesday and get 20% off. Code: TUES20"
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-[9px] text-secondary">Redemptions: 18 (12.6%)</span>
              <span className="text-[9px] font-bold text-emerald-600">Active</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ind-gym",
      tabName: "Gyms",
      title: "Gyms & Studios",
      tagline: "Expired memberships bypass your front desk silently every day.",
      description: "Connect entry gates or tablets to a centralized database. Expired memberships trigger instant alerts at reception, renewals are handled automatically on WhatsApp, and class capacities are capped.",
      observations: [
        "Lapsed members continue using facilities because front-desk staff fails to verify dates.",
        "Members claim they did not receive renewal notices, causing payment friction.",
        "Peak-hour classes are overcrowded, leading to poor member satisfaction."
      ],
      howWeHelp: [
        {
          title: "Access Control Integration",
          desc: "Validates membership status instantly upon check-in scan, highlighting issues in red."
        },
        {
          title: "WhatsApp Renewals",
          desc: "Sends renewal warning links 7 days before membership expirations."
        },
        {
          title: "Class Bookings",
          desc: "Caps class bookings via a simple WhatsApp slot booking portal."
        }
      ],
      typicalDayBefore: [
        { time: "7:00 AM", text: "Peak check-in rush. Two members with expired passes walk in unnoticed." },
        { time: "12:00 PM", text: "Staff checks records and finds 15 members active without paying dues." },
        { time: "6:30 PM", text: "Evening yoga class is overcrowded. Five members leave frustrated." }
      ],
      typicalDayAfter: [
        { time: "7:00 AM", text: "Scan highlights expired status. Receptionist collects renewal on the spot." },
        { time: "12:00 PM", text: "Database sends automated WhatsApp reminders. 95% renewal collection rate." },
        { time: "6:30 PM", text: "Class bookings are locked at capacity. Roster is balanced and confirmed." }
      ],
      widget: (
        <div className="bg-[#FAFAFA] border border-border rounded-xl p-6 font-mono space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="font-bold text-foreground">Reception Check-in Scanner</span>
            <span className="text-[10px] text-accent font-bold">GATE A</span>
          </div>

          <div className="space-y-2">
            <div className="bg-white border border-border p-2.5 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-bold text-foreground">Aman Verma</p>
                <p className="text-[9px] text-secondary">Card ID: #9832</p>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded font-bold">ACTIVE</span>
            </div>
            <div className="bg-white border border-border p-2.5 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-bold text-foreground">Vikram Lal</p>
                <p className="text-[9px] text-secondary">Expired 3 days ago</p>
              </div>
              <span className="text-[9px] bg-red-500/10 text-red-600 px-2 py-0.5 rounded font-bold">EXPIRED</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ind-professional",
      tabName: "Services",
      title: "Professional Services",
      tagline: "Late project approvals delay invoices, hurting your cash flow.",
      description: "Speed up project signs and billing. We build approval workflows directly on WhatsApp, triggering automatic GST invoicing and updating Tally ledgers instantly.",
      observations: [
        "Project deliverables stall in email inboxes waiting for customer feedback.",
        "Finance teams invoice late because they are not notified when milestones are met.",
        "Team members waste hours looking for communication logs across personal emails."
      ],
      howWeHelp: [
        {
          title: "WhatsApp Approvals",
          desc: "Sends 1-click approval button alerts directly to clients' WhatsApp chats."
        },
        {
          title: "Automated GST Billing",
          desc: "Triggers invoices automatically upon milestone approval, syncing with ERPs."
        },
        {
          title: "Central Client Profiles",
          desc: "Saves communication records, billing history, and deliverables centrally."
        }
      ],
      typicalDayBefore: [
        { time: "9:00 AM", text: "Designer sends a proposal draft via email. Client misses it in their inbox." },
        { time: "3:00 PM", text: "Designer stops work because approval is pending. Project delivery is delayed." },
        { time: "5:00 PM", text: "Milestone was met two days ago, but accounting hasn't sent the invoice." }
      ],
      typicalDayAfter: [
        { time: "9:00 AM", text: "Designer updates status. System requests approval on WhatsApp." },
        { time: "10:30 AM", text: "Client approves on WhatsApp with one tap. Next milestone unlocks." },
        { time: "11:00 AM", text: "Invoice is generated and synced with Tally Prime automatically." }
      ],
      widget: (
        <div className="bg-[#FAFAFA] border border-border rounded-xl p-6 font-mono space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <span className="font-bold text-foreground">Milestone Tracker</span>
            <span className="text-[10px] text-accent font-bold">ADX-92</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-secondary">
              <span>Phase 1: Design Draft</span>
              <span className="text-emerald-600 font-bold">Approved ✓</span>
            </div>
            
            <div className="bg-white border border-border p-3 rounded-lg space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-bold">Phase 2: Database Setup</span>
                <span className="bg-accent/5 text-accent px-1.5 py-0.5 rounded text-[9px]">PENDING SIGN</span>
              </div>
              <p className="text-[9px] text-secondary">WhatsApp approval sent to client.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const [activeTab, setActiveTab] = useState("ind-coaching");
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const activeVertical = verticals.find((v) => v.id === activeTab) || verticals[0];

  return (
    <main className="w-full bg-background text-foreground selection:bg-accent/15 selection:text-accent pb-20">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 lg:py-24 border-b border-border bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAFAFA_1px,transparent_1px),linear-gradient(to_bottom,#FAFAFA_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 bg-accent/5 rounded-full">
            Verticals
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-foreground">
            Custom Operations Software
          </h1>
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            Choose your vertical to see how ADX solves manual leaks, automates customer messaging, and replaces Excel files.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 mt-12 lg:mt-16">
        
        {/* Segmented Tab Control */}
        <div className="flex flex-wrap justify-center gap-1 mb-16 bg-white border border-border p-1 rounded-full max-w-2xl mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.015)]">
          {verticals.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setActiveTab(v.id);
                setIsTimelineExpanded(false);
              }}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === v.id
                  ? "text-white bg-accent"
                  : "text-secondary hover:text-foreground"
              }`}
            >
              <span className="relative z-10">{v.tabName}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="relative">
          {verticals.map((v) => {
            const isActive = v.id === activeTab;
            return (
              <div
                key={v.id}
                className={`transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 relative pointer-events-auto block"
                    : "opacity-0 translate-y-8 scale-[0.98] absolute inset-x-0 top-0 pointer-events-none hidden"
                }`}
              >
                {/* 50/50 Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block">
                      {v.tagline}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-none">
                      {v.title}
                    </h2>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl">
                      {v.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-border">
                      {/* Observations */}
                      <div className="space-y-4">
                        <h4 className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-bold pb-2 border-b border-border">
                          Common Bottlenecks
                        </h4>
                        <ul className="space-y-3">
                          {v.observations.map((item, idx) => (
                            <li key={idx} className="flex items-start text-xs text-secondary leading-relaxed">
                              <span className="text-red-500 mr-2 font-bold">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* How we help */}
                      <div className="space-y-4">
                        <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold pb-2 border-b border-border">
                          ADX Solutions
                        </h4>
                        <ul className="space-y-4">
                          {v.howWeHelp.map((item, idx) => (
                            <li key={idx} className="space-y-1">
                              <strong className="text-xs font-bold text-foreground block">{item.title}</strong>
                              <p className="text-[11px] text-secondary leading-normal">{item.desc}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Custom CSS widget preview */}
                  <div className="lg:col-span-5 bg-white border border-border rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
                    <div className="border border-border rounded-xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                      <div className="bg-[#FAFAFA] border-b border-border px-4 py-2 flex items-center space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                      </div>
                      <div className="p-4">
                        {v.widget}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Day in the Life comparison section */}
                <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)] space-y-6">
                  <h3 className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold text-center">
                    Workflow Timelines Comparison
                  </h3>

                  <div className={`transition-all duration-300 overflow-hidden ${
                    isTimelineExpanded ? "max-h-[1000px] pb-4" : "max-h-[160px] relative"
                  }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                      {/* Before */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 border-b border-border pb-3">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <h4 className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">
                            Before ADX (Manual Leaks)
                          </h4>
                        </div>
                        <div className="border-l border-border pl-4 space-y-6 ml-1">
                          {v.typicalDayBefore.map((item, idx) => (
                            <div key={idx} className="relative text-xs text-secondary space-y-1">
                              <div className="absolute -left-[21px] top-1 w-1.5 h-1.5 rounded-full bg-red-500 border border-white" />
                              <span className="font-mono font-bold text-red-500 block text-[9px]">{item.time}</span>
                              <p className="leading-relaxed">{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2 border-b border-border pb-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <h4 className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">
                            With ADX (Automated Systems)
                          </h4>
                        </div>
                        <div className="border-l border-border pl-4 space-y-6 ml-1">
                          {v.typicalDayAfter.map((item, idx) => (
                            <div key={idx} className="relative text-xs text-secondary space-y-1">
                              <div className="absolute -left-[21px] top-1 w-1.5 h-1.5 rounded-full bg-emerald-500 border border-white" />
                              <span className="font-mono font-bold text-emerald-600 block text-[9px]">{item.time}</span>
                              <p className="leading-relaxed">{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {!isTimelineExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    )}
                  </div>

                  <div className="border-t border-border pt-4 text-center">
                    <button
                      onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-border bg-[#FAFAFA] text-[10px] font-mono font-bold uppercase text-secondary hover:text-foreground cursor-pointer transition-colors"
                    >
                      {isTimelineExpanded ? "Collapse Timeline" : "Expand Full Comparison"}
                    </button>
                  </div>
                </div>

                {/* Bottom Callout */}
                <div className="mt-16 text-center">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(0,82,255,0.15)]"
                  >
                    Initiate {v.tabName} Audit
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </section>

    </main>
  );
}
