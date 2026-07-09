import React from "react";

export default function LeakageSection() {
  return (
    <section className="w-full bg-white border-y border-glaucous-200/80 py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-vivid-royal-100/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-coffee-bean-100/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-vivid-royal-950 mt-2 mb-4 font-heading tracking-tight">
          Where does your business lose customers?
        </h2>
        <p className="text-sm sm:text-base text-glaucous-800 max-w-2xl mx-auto font-sans leading-relaxed">
          Every forgotten follow-up, every unanswered message, every late payment: small misses add up.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Stages 1 and 2 */}
        <div className="lg:col-span-3 space-y-8">
          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-[9px] font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 01
            </span>
            <h3 className="text-base font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              New Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              A customer sends a message. Nobody replies for hours. By evening, they&apos;ve already chosen someone else.
            </p>
          </div>

          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-[9px] font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 02
            </span>
            <h3 className="text-base font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              Follow-up
            </h3>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              Someone writes the enquiry in a personal chat. Later, another staff member needs that information. They can&apos;t find it.
            </p>
          </div>
        </div>

        {/* Center: Video Showcase */}
        <div className="lg:col-span-6 flex justify-center w-full px-2 sm:px-4">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-glaucous-200/80 shadow-[0_20px_50px_rgba(66,47,208,0.06),0_0_30px_rgba(66,47,208,0.02)] bg-neutral-950">
            <video
              src="/leakagesection.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Stages 3 and 4 */}
        <div className="lg:col-span-3 space-y-8">
          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-[9px] font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 03
            </span>
            <h3 className="text-base font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              Booking
            </h3>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              A customer wants to book. The person who manages the schedule is busy. The customer waits. Then they forget to call back.
            </p>
          </div>

          <div className="relative group p-5 border border-transparent hover:border-glaucous-200/60 hover:bg-glaucous-50/50 hover:shadow-[0_8px_30px_rgba(36,36,35,0.02)] transition-all duration-300 rounded-xl">
            <span className="font-mono text-[9px] font-bold text-glaucous-600 bg-glaucous-100/60 px-2 py-0.5 rounded-md tracking-wider inline-block mb-3">
              STAGE 04
            </span>
            <h3 className="text-base font-extrabold text-vivid-royal-950 font-heading tracking-tight mb-2 group-hover:text-vivid-royal-600 transition-colors duration-200">
              Payment
            </h3>
            <p className="text-xs sm:text-sm text-glaucous-800 leading-relaxed font-sans">
              A payment was due last week. Nobody sent a reminder. The customer didn&apos;t notice. The money doesn&apos;t come in.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
