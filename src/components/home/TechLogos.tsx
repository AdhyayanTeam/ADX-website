"use client";

import { m } from "framer-motion";

export default function TechLogos() {
  const logos = [
    { name: "React", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )},
    { name: "Next.js", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="currentColor"/>
        <path d="M149.508 157.52L69.142 54H54v72h13.5V67.858l70.732 91.264c3.784-3.528 7.228-7.394 10.276-11.602zM112.5 126H126V54h-13.5v72z" fill="#FAFAFA"/>
      </svg>
    )},
    { name: "Node.js", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 256 294" fill="currentColor">
        <path d="M144.148 293.076c-9.92 5.76-26.376 5.76-36.296 0L10.372 236.756C3.96 233.02 0 223.364 0 215.228V102.584c0-8.136 3.96-17.792 10.372-21.528L107.852.74c9.92-5.76 26.376-5.76 36.296 0L245.628 81.056c6.412 3.736 10.372 13.392 10.372 21.528v112.644c0 8.136-3.96 17.792-10.372 21.528l-97.48 76.32z"/>
      </svg>
    )},
    { name: "OpenAI", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5-1.25-2.5-3-2.5-5 0-3.3 2.7-6 6-6 1.2 0 2.3.35 3.3 1L12 4c.95-.65 2.1-1 3.3-1 3.3 0 6 2.7 6 6 0 2-1 3.75-2.5 5M4.5 16.5l1.5-1m-1.5 1c.5 1.5 1.5 2.75 3 3.5m10.5-4.5l-1.5-1m1.5 1c-.5 1.5-1.5 2.75-3 3.5m-7.5 1c1.2.65 2.4 1 3.7 1 1.3 0 2.5-.35 3.7-1m-7.4-1l1.2-2.3m6.2 2.3l-1.2-2.3" />
      </svg>
    )},
    { name: "Meta", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 16c-2.5 0-5.5-2.5-5.5-5S9.5 6 12 6s5.5 2.5 5.5 5-3 5-5.5 5z" />
        <path d="M2 11c0-4 4.5-7 10-7s10 3 10 7-4.5 7-10 7-10-3-10-7z" />
      </svg>
    )},
    { name: "Google", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.94 5.94 0 018 12.6A5.94 5.94 0 0113.99 6.72c2.407 0 4.364 1.488 5.158 3.577l3.874-3.004C20.73 3.96 17.657 2 13.99 2 8.1 2 3.3 6.75 3.3 12.6s4.8 10.6 10.69 10.6c5.8 0 10.05-3.99 10.05-9.9 0-.675-.075-1.35-.216-2.015H12.24z"/>
      </svg>
    )},
    { name: "AWS", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 3-1 5 2 7 2 5-2 6-2M3 9l3-3 3 3M21 9l-3-3-3 3" />
      </svg>
    )},
    { name: "PostgreSQL", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8v-4a4 4 0 01-4-4c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4a4 4 0 01-4 4v4c4.418 0 8-3.582 8-8 0-5.523-4.417-10-10-10z"/>
      </svg>
    )},
    { name: "Razorpay", icon: (
      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 3.5L4.5 12l15 8.5V16L9.5 12l10-4z" />
      </svg>
    )}
  ];

  return (
    <section className="w-full py-8 border-y border-border bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-secondary text-center mb-6">
          ENGINEERED WITH INDUSTRY STANDARDS & SECURE INFRASTRUCTURE
        </p>
        
        {/* Logos Marquee/Flex Grid */}
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-8 md:gap-x-12 opacity-40 hover:opacity-75 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <m.div
              key={logo.name}
              className="flex items-center text-foreground font-mono text-xs font-semibold select-none cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {logo.icon}
              <span>{logo.name}</span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
