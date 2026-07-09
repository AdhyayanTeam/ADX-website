"use client";

import Link from "next/link";

export default function Insights() {
  const articles = [
    {
      date: "JULY 2026",
      readTime: "5 MIN READ",
      title: "The 15-Minute Rule: How Delayed Follow-ups Kill B2C Conversion Rates.",
      desc: "An analysis of lead intake delays in coaching academies and healthcare clinics, detailing how response speed determines conversion success.",
    },
    {
      date: "JUNE 2026",
      readTime: "7 MIN READ",
      title: "Stateful Reminders vs. Static Spams: Reclaiming 30% Missed Payments.",
      desc: "Why static payment reminders fail. How stateful, conversational scripts combined with Razorpay webhooks reconcile ledgers automatically.",
    },
    {
      date: "MAY 2026",
      readTime: "6 MIN READ",
      title: "Why CRM Customization Fails: Designing Software Around Human Routines.",
      desc: "Most staff bypass CRMs because of bloated data requirements. We detail how to design simple, high-adoption interfaces for team compliance.",
    },
  ];

  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-sm font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            Operational Insights
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-vivid-royal-950 mt-2 mb-4 tracking-tight leading-tight">
            ADX Essays & Case Studies.
          </h1>
          <p className="text-lg text-glaucous-800 max-w-2xl">
            Data-driven analyses of administrative leaks, conversion bottlenecks, and database architectures in growing businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="bg-ghost-white-50 border border-glaucous-200 p-8 rounded-lg flex flex-col justify-between hover:border-glaucous-400 transition-all duration-300 shadow-sm"
            >
              <div>
                <span className="font-mono text-sm text-glaucous-600 tracking-widest block mb-4 uppercase">
                  {art.date} // {art.readTime}
                </span>
                <h3 className="text-xl font-bold text-vivid-royal-950 mb-3 leading-snug">{art.title}</h3>
                <p className="text-base text-glaucous-800 leading-relaxed mb-6">{art.desc}</p>
              </div>
              <div>
                <Link
                  href="/book"
                  className="text-sm font-semibold text-coffee-bean-600 hover:text-coffee-bean-700 transition-all duration-300 inline-flex items-center gap-1.5"
                >
                  Discuss operations <span className="font-sans">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
