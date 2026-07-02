"use client";

export default function About() {
  return (
    <main className="min-h-screen bg-glaucous-50 text-vivid-royal-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-glaucous-200 pb-12 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">
            Our Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-vivid-royal-950 mt-2 mb-4">
            The ADX Manifesto.
          </h1>
          <p className="text-lg text-glaucous-800 max-w-2xl">
            Why we build custom systems instead of selling off-the-shelf software packages.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-start">
          <div className="text-sm sm:text-base text-glaucous-800 leading-relaxed flex flex-col gap-6 max-w-2xl">
            <p className="text-lg font-medium text-vivid-royal-950 leading-relaxed">
              Most software agencies fail because they build features, not operations. They deliver lines of code while the business owner continues to struggle with manual Excel sheets and outstanding balances.
            </p>
            <p>
              We founded ADX to fix this model. We don't believe in software for the sake of software. We believe systems must serve business objectives first—reclaiming lost inquiries, decreasing response delays, and securing collections.
            </p>
            <p>
              We do not mention "AI" as a magic marketing cure-all. We build robust relational databases, secure API webhooks, and stateful automated WhatsApp scripts that run quietly in the background, allowing your staff to work without friction.
            </p>
            <p>
              When you partner with ADX, we act as your fractional Chief Technology and Operations Officer. We shadow your team, audit your pipelines, build custom engines, and tune them monthly based on live metrics.
            </p>
            <div className="pt-8 border-t border-glaucous-200 mt-4">
              <strong className="text-vivid-royal-950 block text-md">The ADX Team</strong>
              <span className="font-mono text-xs text-glaucous-600 block mt-1">AdhyayanX Operations Engineering</span>
            </div>
          </div>

          <div className="bg-ghost-white-50 border border-glaucous-200 rounded-lg p-8 shadow-md">
            <h4 className="font-mono text-xs text-glaucous-600 uppercase tracking-widest block mb-6">
              Our Core Beliefs
            </h4>
            <div className="flex flex-col gap-6">
              <div>
                <h5 className="text-sm font-bold text-vivid-royal-950 mb-1">Systems Over Features</h5>
                <p className="text-xs text-glaucous-800 leading-relaxed">
                  A feature is useless if your staff doesn't adopt it. We build systems that match your optimized daily routines.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-bold text-vivid-royal-950 mb-1">No Buzzwords</h5>
                <p className="text-xs text-glaucous-800 leading-relaxed">
                  We focus on standard, stable database triggers, payment APIs, and messaging flows instead of hype.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-bold text-vivid-royal-950 mb-1">Measurable Numbers</h5>
                <p className="text-xs text-glaucous-800 leading-relaxed">
                  We measure our contribution in hours saved, leaks plugged, and revenue reconciled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
