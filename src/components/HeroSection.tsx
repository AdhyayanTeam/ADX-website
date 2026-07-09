import Link from "next/link";
import { MeshGradient } from "@paper-design/shaders-react";

const reasons = [
  {
    title: "We spend time in your business first",
    desc: "We don't recommend anything until we understand how your business actually runs.",
  },
  {
    title: "Built around your team",
    desc: "We don't ask your staff to learn new habits. We build around the way your business already works.",
  },
  {
    title: "Start with what hurts most",
    desc: "We find your biggest problem and build a working solution in 14 days.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-glaucous-200/80 bg-glaucous-950 overflow-hidden py-20 lg:py-32 flex items-center justify-center min-h-[90dvh]">
      <div className="absolute inset-0 z-0">
        <MeshGradient
          style={{ height: "100%", width: "100%" }}
          distortion={0.8}
          swirl={0.1}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={["#242423", "#333333", "#4a5551", "#bf9525"]}
        />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 text-center z-[10] relative flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md leading-tight max-w-3xl relative z-[10] mb-6">
            Your business isn&apos;t slowing down because you need more customers.{" "}
            <span className="text-coffee-bean-300">
              It&apos;s slowing down because your team is trying to remember everything.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-glaucous-100 mb-8 max-w-2xl drop-shadow-sm leading-relaxed">
            Follow-ups get missed and customer details get lost. ADX builds simple systems so your business runs smoothly as it grows.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/book"
              data-track-cta="hero"
              className="px-6 py-3.5 text-sm font-bold rounded-lg bg-coffee-bean-400 bg-gradient-to-b from-white/35 via-white/5 to-black/20 text-coffee-bean-950 border-t border-t-white/50 border-x border-x-coffee-bean-500/60 border-b-[4px] border-b-coffee-bean-700 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.45),inset_0_-1.5px_0_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.4)] hover:brightness-110 hover:border-b-coffee-bean-800 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none"
            >
              Book an Operational Discovery
            </Link>
            <Link
              href="/platform"
              data-track-cta="hero"
              className="px-6 py-3.5 text-sm font-bold rounded-lg bg-glaucous-50 bg-gradient-to-b from-white/80 via-white/10 to-glaucous-200/40 text-glaucous-950 border-t border-t-white border-x border-x-glaucous-300/80 border-b-[4px] border-b-glaucous-400 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.9),inset_0_-1.5px_0_rgba(0,0,0,0.08),0_6px_12px_rgba(0,0,0,0.2)] hover:brightness-105 hover:border-b-glaucous-500 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-100 ease-out select-none"
            >
              See What We Build
            </Link>
          </div>

          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-glaucous-300/10 mt-4">
            {reasons.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col items-start text-left p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 group"
              >
                <span className="text-xs font-mono font-bold text-coffee-bean-400 mb-2.5 tracking-wider block">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-coffee-bean-200 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-glaucous-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
