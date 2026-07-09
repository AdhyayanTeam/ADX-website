export default function WhatWeObservedSection() {
  return (
    <section className="w-full bg-white border-y border-glaucous-200/80 py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-vivid-royal-100/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-coffee-bean-100/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <span className="text-sm font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
          What We&apos;ve Observed
        </span>

        <p className="text-xl lg:text-2xl text-glaucous-900 leading-relaxed mb-6 font-sans">
          We kept seeing the same thing.
        </p>

        <p className="text-xl lg:text-2xl text-glaucous-900 leading-relaxed mb-6 font-sans">
          A customer calls. One staff member knows the answer. Another staff member asks the same question later — because there&apos;s nowhere to look it up.
        </p>

        <p className="text-xl lg:text-2xl text-glaucous-900 leading-relaxed mb-12 font-sans">
          Businesses buy software. But they still depend on WhatsApp, spreadsheets, and the owner to keep everything moving.
        </p>

        <div className="border-t border-glaucous-200 pt-12 mt-12">
          <p className="text-xl lg:text-2xl text-vivid-royal-950 font-semibold leading-relaxed mb-4">
            A customer should get the same answer no matter who picks up the phone.
          </p>
          <p className="text-lg sm:text-xl text-glaucous-700 leading-relaxed max-w-2xl mx-auto">
            We believe good work should be repeatable. So we build systems that help your team do their best work every day — without having to remember everything.
          </p>
        </div>
      </div>
    </section>
  );
}
