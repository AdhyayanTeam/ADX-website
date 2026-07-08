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
          <p className="text-lg text-glaucous-800 max-w-2xl leading-relaxed">
            Most businesses don&apos;t struggle because they lack software. They struggle because the work still depends on people remembering what happens next.
          </p>
        </div>

        <div className="max-w-3xl flex flex-col gap-16">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
              What Changed Our Mind
            </span>
            <div className="text-base sm:text-lg text-glaucous-900 leading-relaxed space-y-4">
              <p>
                During one client visit, we watched something that changed how we think about business software.
              </p>
              <p>
                The business had a CRM. They had a website. They had billing software. Everything a modern business needs.
              </p>
              <p>
                But when a customer called to reschedule an appointment, the receptionist wrote the new time on a sticky note.
              </p>
              <p>
                The next day the receptionist was off. The patient arrived at the new time. The clinic wasn&apos;t expecting them.
              </p>
              <p className="font-semibold text-vivid-royal-950">
                Nothing was actually missing. The business already had the tools. Yet the work still depended on one person remembering to tell everyone else.
              </p>
              <p>
                That&apos;s when we realized: the problem wasn&apos;t that businesses lacked software. It was that the work still depended on people remembering to keep everything moving.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
              So We Started Asking Different Questions
            </span>
            <div className="text-base sm:text-lg text-glaucous-900 leading-relaxed space-y-4">
              <p>
                We stopped asking, &ldquo;What software do you need?&rdquo;
              </p>
              <p>
                We started asking, &ldquo;How does work actually happen here?&rdquo;
              </p>
              <p>
                We spend time with your team. We watch how work moves through your business. We see where things slow down. We notice where people get interrupted. We find where information disappears.
              </p>
              <p>
                Then we build systems that make those failure points unnecessary.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-glaucous-600 uppercase block mb-4">
              Why ADX
            </span>
            <div className="text-base sm:text-lg text-glaucous-900 leading-relaxed space-y-4">
              <p>
                We believe businesses shouldn&apos;t become harder to run as they grow.
              </p>
              <p>
                Growth should make a business stronger, not more dependent on its founder.
              </p>
              <p>
                That&apos;s why ADX exists.
              </p>
            </div>
          </div>

          <div className="border-t border-glaucous-200 pt-12">
            <p className="text-base sm:text-lg text-vivid-royal-950 font-semibold leading-relaxed">
              The goal isn&apos;t another dashboard. It&apos;s a business that keeps moving — even when someone is on leave, a customer calls unexpectedly, or the owner isn&apos;t around.
            </p>
            <p className="text-base sm:text-lg text-vivid-royal-950 font-semibold leading-relaxed mt-6">
              Good businesses aren&apos;t built on people remembering everything. They&apos;re built on systems that help ordinary people do great work consistently. That&apos;s the kind of business we&apos;re trying to help build.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
