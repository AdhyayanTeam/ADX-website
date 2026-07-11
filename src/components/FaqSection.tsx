import { useState } from "react";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Why can't I just use regular WhatsApp Business?",
      a: "You can. But as your business grows, WhatsApp becomes harder to manage. Messages get buried. Different staff members reply differently. Follow-ups depend on someone remembering. ADX keeps WhatsApp as the front door. Behind it, everything is organized — messages, payments, appointments, and customer history.",
    },
    {
      q: "Why custom software instead of a CRM?",
      a: "Most CRMs ask your team to change how they work. Your staff has to learn new screens, new buttons, new habits. Most teams don't end up using them properly. We build software that matches how your team already works. Your staff uses WhatsApp and simple screens. The system handles the rest.",
    },
    {
      q: "How long does implementation take?",
      a: "We solve your biggest problem in 14 days. A complete system — including payments, WhatsApp automation, and team dashboards — takes 4 to 8 weeks.",
    },
    {
      q: "Do we need to hire technical staff?",
      a: "No. We build everything. We host it. We maintain it. Your team uses WhatsApp and simple web screens. We act as your technology team — without you having to hire one.",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="text-center mb-16">
        <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">FAQ</span>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-vivid-royal-950 mt-2 tracking-tight leading-tight">Questions owners ask us.</h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqData.map((item, idx) => {
          const isOpen = activeFaq === idx;
          return (
            <div key={idx} className="bg-ghost-white-50 border border-glaucous-200 rounded-xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => setActiveFaq(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center text-vivid-royal-950 hover:text-coffee-bean-600 transition-all duration-300 font-semibold cursor-pointer text-lg sm:text-xl"
              >
                <span>{item.q}</span>
                <span className={`text-xl font-mono transition-transform duration-300 ${isOpen ? "rotate-45 text-coffee-bean-600" : ""}`}>+</span>
              </button>
              <div
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{ maxHeight: isOpen ? "250px" : "0px" }}
              >
                <p className="px-6 pb-6 text-base text-glaucous-800 leading-relaxed border-t border-glaucous-200/40 pt-4">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
