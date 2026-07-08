export default function About() {
  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            About ADX
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-vivid-royal-950 mt-2 mb-4 max-w-3xl">
            We build systems that make good work repeatable.
          </h1>
        </div>

        <div className="max-w-3xl flex flex-col gap-16">
          {/* The moment */}
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
              What Changed Our Mind
            </span>
            <div className="text-base sm:text-lg text-glaucous-900 leading-relaxed space-y-4">
              <p>
                We were working with a small business. They had a CRM, a website,
                and a billing system. Everything a modern business needs.
              </p>
              <p>
                But when a customer called to reschedule, the receptionist wrote
                it on a sticky note. When she was out the next day, no one knew
                the appointment had changed.
              </p>
              <p>
                The CRM had a calendar. The website had online booking. The
                billing system had reminders. None of them were connected.
              </p>
              <p>
                That&apos;s when we realized: the problem wasn&apos;t that businesses
                lacked software. It was that the work still depended on people
                remembering to keep everything moving.
              </p>
            </div>
          </div>

          {/* What we do about it */}
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
              What We Do Now
            </span>
            <div className="text-base sm:text-lg text-glaucous-900 leading-relaxed space-y-4">
              <p>
                We don&apos;t install software and leave. We study how work
                actually happens in your business&mdash;where information gets lost,
                where questions get asked repeatedly, where execution depends on a
                single person.
              </p>
              <p>
                Then we build systems that make those failure points unnecessary.
              </p>
              <p>
                The result isn&apos;t a dashboard you check every morning. It&apos;s
                operations that run consistently without anyone having to chase,
                remind, or follow up manually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
