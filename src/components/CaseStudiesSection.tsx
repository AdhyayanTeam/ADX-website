export default function CaseStudiesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-glaucous-200/80">
      <div className="mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest text-glaucous-600 uppercase">Results</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4">Real numbers. Verified operations.</h2>
        <p className="text-glaucous-800 max-w-xl">No corporate fluff. Standard operational case studies from real Indian businesses.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 sm:p-12 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-xs text-glaucous-600 uppercase tracking-widest font-bold block mb-4">Coaching</span>
          <h3 className="text-xl font-bold text-vivid-royal-950 mb-3">Delhi Coaching Academy</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed mb-8">
            Automated parent query updates and lead response cycles across 3 branches.
          </p>
          <div className="flex gap-10 pt-6 border-t border-glaucous-200">
            <div>
              <span className="text-3xl font-bold font-mono text-coffee-bean-600">+22%</span>
              <span className="block text-xs text-glaucous-600 uppercase font-mono mt-1">Admissions</span>
            </div>
            <div>
              <span className="text-3xl font-bold font-mono text-coffee-bean-600">45s</span>
              <span className="block text-xs text-glaucous-600 uppercase font-mono mt-1">Response Speed</span>
            </div>
          </div>
        </div>
        <div className="bg-ghost-white-50 border border-glaucous-200 p-8 sm:p-12 rounded-lg hover:border-glaucous-400 transition-all duration-300">
          <span className="font-mono text-xs text-glaucous-600 uppercase tracking-widest font-bold block mb-4">Healthcare</span>
          <h3 className="text-xl font-bold text-vivid-royal-950 mb-3">Dr. Mehta Ortho Clinics</h3>
          <p className="text-sm text-glaucous-800 leading-relaxed mb-8">
            Replaced manual calling with automated WhatsApp appointment scheduling and feedback tracking.
          </p>
          <div className="flex gap-10 pt-6 border-t border-glaucous-200">
            <div>
              <span className="text-3xl font-bold font-mono text-coffee-bean-600">-30%</span>
              <span className="block text-xs text-glaucous-600 uppercase font-mono mt-1">No-Shows</span>
            </div>
            <div>
              <span className="text-3xl font-bold font-mono text-coffee-bean-600">18 hrs/wk</span>
              <span className="block text-xs text-glaucous-600 uppercase font-mono mt-1">Saved Labor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
