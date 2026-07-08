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
    <section className="relative w-full border-b border-glaucous-200/80 bg-glaucous-950 overflow-hidden py-20 lg:py-32 flex items-center justify-center">
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
          colors={["#242423", "#333333", "#CFDBD5", "#F5CB5C"]}
        />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 text-center z-[10] relative flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight max-w-3xl relative z-[10] mb-6">
            Your business isn&apos;t slowing down because you need more customers.{" "}
            <span className="text-coffee-bean-400">
              It&apos;s slowing down because your team is trying to remember everything.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-glaucous-100 mb-6 max-w-2xl drop-shadow-md">
            Follow-ups get missed. Payments need reminders. Customer details are scattered across WhatsApp, spreadsheets and people&apos;s heads.
          </p>

          <p className="text-base sm:text-lg text-coffee-bean-300 mb-8 max-w-2xl drop-shadow-md font-semibold">
            ADX helps you build simple systems so your business runs smoothly — even as it grows.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/book"
              data-track-cta="hero"
              className="px-6 py-3.5 text-sm font-bold rounded-lg bg-coffee-bean-600 bg-gradient-to-b from-white/30 via-white/5 to-black/25 text-ghost-white-50 border-t border-t-white/45 border-x border-x-coffee-bean-700/60 border-b-[4px] border-b-coffee-bean-900 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-1.5px_0_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.4)] hover:brightness-110 hover:border-b-coffee-bean-950 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            >
              Book an Operational Discovery
            </Link>
            <Link
              href="/platform"
              data-track-cta="hero"
              className="px-6 py-3.5 text-sm font-bold rounded-lg bg-glaucous-50 bg-gradient-to-b from-white/80 via-white/10 to-glaucous-200/40 text-glaucous-950 border-t border-t-white border-x border-x-glaucous-300/80 border-b-[4px] border-b-glaucous-400 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.9),inset_0_-1.5px_0_rgba(0,0,0,0.08),0_6px_12px_rgba(0,0,0,0.2)] hover:brightness-105 hover:border-b-glaucous-500 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]"
            >
              See What We Build
            </Link>
          </div>

          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-glaucous-300/30">
            {reasons.map((item) => (
              <div key={item.title} className="flex flex-col items-start text-left">
                <span className="text-sm font-bold text-coffee-bean-400 drop-shadow-sm mb-1">
                  {item.title}
                </span>
                <span className="text-xs text-glaucous-300 leading-relaxed">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
