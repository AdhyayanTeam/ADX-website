"use client";

import Link from "next/link";

export default function Industries() {
  const verticals = [
    {
      id: "ind-coaching-block",
      title: "Coaching & Test Prep Institutes",
      tagline: "300 students. 8 batches. No system to keep track.",
      description:
        "It's the first week of the month. Parents start calling about fees. Counselors search old WhatsApp chats for payment details. Someone opens an Excel file. Someone else says, \"Ask accounting.\"",
      observations: [
        "Parents ask the same questions every week. Counselors answer them every week. The answers already exist, but nobody can find them quickly.",
        "Two students get booked for the same batch. The Excel file has two different versions. Nobody knows which one is correct.",
        "Fees are due. Someone needs to call each parent. Nobody has time. The fees don't come in until someone chases — sometimes weeks late.",
      ],
      typicalDayBefore: [
        { time: "9:00 AM", text: "A parent messages about fees. A counselor searches three WhatsApp chats for their payment history." },
        { time: "10:30 AM", text: "Two students register for the same batch. The Excel file has conflicting data." },
        { time: "12:00 PM", text: "Fees were due today. Nobody has called the parents yet." },
        { time: "3:00 PM", text: "Someone starts calling. Half the calls go to voicemail." },
      ],
      typicalDayAfter: [
        { time: "9:00 AM", text: "A parent messages about fees. The system shows their payment status instantly." },
        { time: "10:30 AM", text: "The batch reaches its limit. Registrations close automatically." },
        { time: "12:00 PM", text: "Payment reminders were already sent this morning. Three parents have already paid." },
        { time: "3:00 PM", text: "No chasing needed. Payments are reconciled automatically." },
      ],
      howWeHelp: [
        {
          title: "Payment reminders that work",
          desc: "WhatsApp sends a payment link automatically. Parents tap and pay. No awkward phone calls, no chasing.",
        },
        {
          title: "One place for every student",
          desc: "Every enquiry, payment, and batch assignment lives in one system. Any counselor can pick up where another left off.",
        },
        {
          title: "Never overfill another batch",
          desc: "Registration closes automatically when a batch is full. No double-bookings. No angry parents.",
        },
      ],
      cta: "See how this works in your institute",
    },
    {
      id: "ind-healthcare-block",
      title: "Clinics & Healthcare Practices",
      tagline: "Your receptionist spends half the morning answering the same booking calls.",
      description:
        "The phone rings before the doors open. A patient wants to book. Another wants to reschedule. Someone asks if the doctor is available. By 11 AM, your receptionist has answered 30 calls and confirmed 5 appointments. The rest didn't pick up when she called back.",
      observations: [
        "Receptionists spend more time on the phone confirming appointments than helping patients at the front desk.",
        "Patients forget their appointments. Nobody reminds them. A 30-minute slot stays empty. Another patient who needed it never got called.",
        "A chronic patient who visited three months ago needs a follow-up. Their file is in a cabinet. Nobody opens it.",
      ],
      typicalDayBefore: [
        { time: "9:00 AM", text: "The receptionist answers booking calls. A patient forgets their appointment. Nobody notices until they're 15 minutes late." },
        { time: "10:15 AM", text: "A dentist asks where a patient's X-ray is. Nobody can find it. The patient waits." },
        { time: "11:30 AM", text: "Someone starts calling tomorrow's patients to confirm. Half don't pick up." },
        { time: "2:00 PM", text: "A patient who needed a follow-up three months ago walks in. No one has their records ready." },
      ],
      typicalDayAfter: [
        { time: "9:00 AM", text: "Patients book on WhatsApp. The first appointment reminder was already delivered." },
        { time: "10:15 AM", text: "Patient history opens with one tap. X-rays and prescriptions are already uploaded." },
        { time: "11:30 AM", text: "Tomorrow's patients have already confirmed via WhatsApp. No calls needed." },
        { time: "2:00 PM", text: "The follow-up was scheduled automatically. Patient history is ready before they walk in." },
      ],
      howWeHelp: [
        {
          title: "Patients book themselves",
          desc: "They check available slots on WhatsApp and pick their own time. No phone tag, no back-and-forth.",
        },
        {
          title: "Reminders that actually arrive",
          desc: "The system sends a reminder before every appointment. Patients confirm or reschedule with one tap.",
        },
        {
          title: "Patients who need another visit don't get forgotten",
          desc: "Follow-ups are scheduled automatically. Chronic patients never fall through the cracks.",
        },
      ],
      cta: "See how this works in your clinic",
    },
    {
      id: "ind-salon-block",
      title: "Salons, Spas & Wellness Centres",
      tagline: "Tuesdays are empty. Saturdays are chaos. Good customers come once and never return.",
      description:
        "Three technicians sit idle on Tuesday morning. Saturday has been fully booked for a week. A customer gets a great haircut, pays in cash, and leaves. Nobody takes their number. Nobody calls them back. They find a new salon closer to home.",
      observations: [
        "Slow days are predictable. You know Tuesday will be empty. But there's no easy way to fill those chairs.",
        "First-time customers don't come back. The service was great. But nobody followed up. They forgot about you.",
        "The owner doesn't know which staff bring repeat business. Commission is calculated from memory, not data.",
      ],
      typicalDayBefore: [
        { time: "10:00 AM", text: "Two technicians are free. No appointments until 2 PM. They're getting paid to wait." },
        { time: "11:30 AM", text: "A walk-in gets a haircut. Pays cash. Leaves. No record of their visit." },
        { time: "2:00 PM", text: "All chairs are full. Three walk-ins are turned away." },
        { time: "6:00 PM", text: "Close. Nobody scheduled any follow-ups. Tomorrow will be the same." },
      ],
      typicalDayAfter: [
        { time: "10:00 AM", text: "A discount offer filled both empty slots. Both technicians are working." },
        { time: "11:30 AM", text: "The walk-in's details are saved. A thank-you message was sent automatically." },
        { time: "2:00 PM", text: "Appointments are already scheduled. No walk-ins are turned away." },
        { time: "6:00 PM", text: "The system schedules recall reminders for every first-time customer from today." },
      ],
      howWeHelp: [
        {
          title: "Fill empty weekday slots automatically",
          desc: "Send discount offers for empty Tuesday and Wednesday slots via WhatsApp. Slow days become productive.",
        },
        {
          title: "Bring customers back",
          desc: "Exactly 28 days after each visit, the system sends a reminder. Customers rebook before they forget.",
        },
        {
          title: "See which staff bring customers back",
          desc: "Track who generates repeat business. Know your best performers without guessing.",
        },
      ],
      cta: "See how this works in your salon",
    },
    {
      id: "ind-gym-block",
      title: "Gyms & Fitness Studios",
      tagline: "Every month, a few members keep using the gym after their membership has expired.",
      description:
        "The membership lapsed last week. The member walks past the front desk. The staff is busy. Nobody checks. The member uses the equipment, leaves, and does the same thing tomorrow. This happens with multiple members every month.",
      observations: [
        "Expired members keep showing up. The front desk doesn't check. Revenue leaks every single day.",
        "Members don't know their renewal date. Staff mentions it verbally. Most members forget. The renewal doesn't happen.",
        "Popular classes are overcrowded. Members show up excited and can't get in. They go somewhere else next time.",
      ],
      typicalDayBefore: [
        { time: "7:00 AM", text: "Peak hour. Three expired members check in. Nobody notices." },
        { time: "9:00 AM", text: "A member asks about their renewal date. The staff doesn't have the information." },
        { time: "5:00 PM", text: "Evening class is full. Five members are turned away at the door." },
        { time: "7:00 PM", text: "Close. No renewal reminders were sent today. Another day of silent churn." },
      ],
      typicalDayAfter: [
        { time: "7:00 AM", text: "Digital check-in. One expired member is alerted at the door. They renew on the spot." },
        { time: "9:00 AM", text: "That member's renewal was reminded via WhatsApp last week. They already paid yesterday." },
        { time: "5:00 PM", text: "Class was fully booked via WhatsApp in advance. No one is turned away." },
        { time: "7:00 PM", text: "The system sends renewal reminders for members expiring in 7 days." },
      ],
      howWeHelp: [
        {
          title: "Stop free access",
          desc: "Digital check-in validates every member's status at the door. Expired members get an instant alert.",
        },
        {
          title: "Renewals that happen automatically",
          desc: "WhatsApp sends a renewal link 7 days before expiry. Members pay and continue without interruption.",
        },
        {
          title: "No more overcrowded classes",
          desc: "Members book their spot on WhatsApp before coming. Classes never exceed capacity.",
        },
      ],
      cta: "See how this works in your gym",
    },
    {
      id: "ind-professional-block",
      title: "Professional & SME Services",
      tagline: "A project finishes. The client doesn't approve it for a week. The invoice waits. The next project starts without the previous one being paid.",
      description:
        "The team finishes a piece of work. Someone emails the client. The client is busy. The email sits unread for five days. Work on the next phase can't start. The invoice can't go out. Payment gets delayed by two weeks. This happens on every project.",
      observations: [
        "Projects stall because approvals get buried in email inboxes. Nobody knows if the client has seen the latest version.",
        "Invoices go out late because finance doesn't know a milestone was completed. Late invoices mean late payments.",
        "New team members spend weeks catching up because client history is scattered across personal email threads.",
      ],
      typicalDayBefore: [
        { time: "9:00 AM", text: "A piece of work is complete. Someone emails the client for approval." },
        { time: "11:00 AM", text: "The client hasn't replied. Someone follows up." },
        { time: "2:00 PM", text: "Still no reply. Work on the next part can't start." },
        { time: "4:00 PM", text: "The client finally approves. The invoice goes out tomorrow. Payment arrives in 30 days." },
      ],
      typicalDayAfter: [
        { time: "9:00 AM", text: "Work is complete. WhatsApp sends an approval request to the client." },
        { time: "10:00 AM", text: "The client approves with one tap. An invoice is generated automatically." },
        { time: "11:00 AM", text: "Work on the next part starts immediately. Payment is already scheduled." },
        { time: "2:00 PM", text: "No delays. No chasing. The project moves forward." },
      ],
      howWeHelp: [
        {
          title: "Approvals in minutes, not days",
          desc: "WhatsApp sends an approval request the moment work is done. The client taps yes. Work continues.",
        },
        {
          title: "Invoices that send themselves",
          desc: "The moment a client approves, the system generates an invoice. Your ledger updates automatically.",
        },
        {
          title: "Every client detail in one place",
          desc: "All project history, communications, and payments are saved centrally. No more digging through email chains.",
        },
      ],
      cta: "See how this works in your agency",
    },
  ];

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            Industries
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-vivid-royal-950 mt-2 mb-4">
            How we work with different businesses.
          </h1>
          <p className="text-lg text-glaucous-800 max-w-2xl">
            Every industry has different problems. Here&apos;s how we solve them.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {verticals.map((v, index) => (
            <div
              key={v.id}
              id={v.id}
              className={`py-12 ${index !== verticals.length - 1 ? "border-b border-glaucous-200" : ""}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <span className="font-mono text-sm text-coffee-bean-600 font-bold tracking-widest block mb-2 uppercase">
                    {v.tagline}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mb-4">
                    {v.title}
                  </h2>
                  <p className="text-base text-glaucous-800 leading-relaxed mb-8 max-w-xl">
                    {v.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-mono text-sm text-glaucous-600 uppercase tracking-widest mb-4">
                      What we keep seeing
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {v.observations.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-base text-glaucous-800 leading-relaxed">
                          <span className="text-scarlet-fire-600 font-bold mt-0.5">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-scarlet-fire-50/30 border border-scarlet-fire-200/40 rounded-lg p-5">
                    <h4 className="font-mono text-sm text-scarlet-fire-600 uppercase tracking-widest font-bold mb-3">
                      A typical day — Before ADX
                    </h4>
                    <div className="flex flex-col gap-2">
                      {v.typicalDayBefore.map((item, idx) => (
                        <div key={idx} className="flex gap-3 text-sm text-glaucous-800 leading-relaxed">
                          <span className="font-mono font-bold text-scarlet-fire-600 whitespace-nowrap w-18 flex-shrink-0">
                            {item.time}
                          </span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-sm text-coffee-bean-600 uppercase tracking-widest mb-4">
                    How we help
                  </h3>
                  <div className="flex flex-col gap-4 mb-8">
                    {v.howWeHelp.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-coffee-bean-500 pl-4">
                        <h4 className="text-base font-bold text-vivid-royal-950">{item.title}</h4>
                        <p className="text-sm text-glaucous-800 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-coffee-bean-50/30 border border-coffee-bean-200/40 rounded-lg p-5 mb-8">
                    <h4 className="font-mono text-sm text-coffee-bean-600 uppercase tracking-widest font-bold mb-3">
                      A typical day — With ADX
                    </h4>
                    <div className="flex flex-col gap-2">
                      {v.typicalDayAfter.map((item, idx) => (
                        <div key={idx} className="flex gap-3 text-sm text-glaucous-800 leading-relaxed">
                          <span className="font-mono font-bold text-coffee-bean-600 whitespace-nowrap w-18 flex-shrink-0">
                            {item.time}
                          </span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/book?vertical=${v.title}`}
                    className="inline-flex items-center gap-2 text-base font-semibold text-coffee-bean-600 hover:text-coffee-bean-700 transition-all duration-300"
                  >
                    {v.cta} <span className="font-sans">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
