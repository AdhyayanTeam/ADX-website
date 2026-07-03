import Link from "next/link";
import { MeshGradient } from "@paper-design/shaders-react";

export default function HeroSection() {
  return (
    <section className="relative w-full border-b border-glaucous-200/80 bg-glaucous-950 overflow-hidden py-20 lg:py-32 flex items-center justify-center">
      {/* Mesh Gradient Background */}
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
          colors={["hsl(216, 90%, 27%)", "hsl(243, 68%, 36%)", "hsl(205, 91%, 64%)", "hsl(211, 61%, 57%)"]}
        />
      </div>

      {/* Hero Content Centered */}
      <div className="w-full max-w-4xl mx-auto px-6 text-center z-[10] relative flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center w-full">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest bg-white/[0.04] bg-gradient-to-b from-white/15 to-transparent border-t border-t-white/35 border-x border-x-white/10 border-b border-b-white/5 backdrop-blur-md mb-6 uppercase shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.25),inset_0_-1.5px_2px_rgba(0,0,0,0.4),0_6px_16px_rgba(0,0,0,0.5)] hover:from-white/20 hover:border-t-white/45 hover:shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.35),inset_0_-1.5px_2px_rgba(0,0,0,0.4),0_8px_20px_rgba(0,0,0,0.6)] active:translate-y-[1px] active:shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.8)] transition-all duration-200 select-none cursor-default">
            <span className="bg-gradient-to-r from-coffee-bean-300 to-glaucous-200 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Operations over software
            </span>
          </div>

          <div className="relative px-4 sm:px-8 py-4 mb-6 w-full max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight max-w-3xl relative z-[10]">
              We help Indian businesses grow by fixing the{" "}
              <span
                className="inline-block animate-gradient-shift text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(45deg, var(--color-coffee-bean-400), #ff8aba, var(--color-glaucous-300))',
                }}
              >
                operations behind the revenue.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-glaucous-100 mb-8 max-w-2xl drop-shadow-md">
            No marketing campaigns. No boilerplate AI. We audit your lead cycles, build custom software engines, and automate your workflows to recover lost revenue.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/book"
              className="px-6 py-3.5 text-sm font-bold rounded-lg bg-coffee-bean-600 bg-gradient-to-b from-white/30 via-white/5 to-black/25 text-ghost-white-50 border-t border-t-white/45 border-x border-x-coffee-bean-700/60 border-b-[4px] border-b-coffee-bean-900 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-1.5px_0_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.4)] hover:brightness-110 hover:border-b-coffee-bean-950 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/platform"
              className="px-6 py-3.5 text-sm font-bold rounded-lg bg-glaucous-50 bg-gradient-to-b from-white/80 via-white/10 to-glaucous-200/40 text-glaucous-950 border-t border-t-white border-x border-x-glaucous-300/80 border-b-[4px] border-b-glaucous-400 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.9),inset_0_-1.5px_0_rgba(0,0,0,0.08),0_6px_12px_rgba(0,0,0,0.2)] hover:brightness-105 hover:border-b-glaucous-500 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]"
            >
              Explore Platform
            </Link>
          </div>
          <div className="w-full max-w-2xl grid grid-cols-3 gap-2 sm:gap-6 pt-8 border-t border-glaucous-300/30">
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold font-mono text-white drop-shadow-sm">₹4.2Cr+</span>
              <span className="text-[10px] sm:text-xs text-glaucous-200 mt-1 text-center">Revenue Recovered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold font-mono text-white drop-shadow-sm">80k+</span>
              <span className="text-[10px] sm:text-xs text-glaucous-200 mt-1 text-center">Hours Saved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold font-mono text-white drop-shadow-sm">14 Days</span>
              <span className="text-[10px] sm:text-xs text-glaucous-200 mt-1 text-center">Avg Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
