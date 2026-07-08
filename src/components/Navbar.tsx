"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: "Platform", href: "/platform" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-18 bg-glaucous-50/85 backdrop-blur-md border-b border-glaucous-200/80 z-50 flex items-center transition-all duration-300 translate-y-0">
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo className="h-24 w-auto" />
        </Link>
        
        <nav className={`hidden md:flex gap-8 items-center`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-all duration-300 relative py-2 ${
                  isActive
                    ? "text-vivid-royal-950 font-medium after:w-full"
                    : "text-glaucous-700 hover:text-vivid-royal-950 after:w-0"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-coffee-bean-500 after:transition-all after:duration-300`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-4">
          <Link
            href="/book"
            data-track-cta="navbar"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-md bg-vivid-royal-600 bg-gradient-to-b from-white/30 via-white/5 to-black/25 text-ghost-white-50 border-t border-t-white/40 border-x border-x-vivid-royal-700/60 border-b-[4px] border-b-vivid-royal-900 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-1.5px_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.35)] hover:brightness-110 hover:border-b-vivid-royal-950 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          >
            Book Discovery Call
          </Link>
          
          <button
            className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 rounded border border-glaucous-200 bg-ghost-white-50 text-vivid-royal-950 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-vivid-royal-950 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-vivid-royal-950 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-5 h-0.5 bg-vivid-royal-950 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {mobileOpen && <MobileMenu key={pathname} navLinks={navLinks} />}
    </header>
  );
}

function MobileMenu({ navLinks }: { navLinks: { name: string; href: string }[] }) {
  return (
    <div className="md:hidden fixed top-18 left-0 w-full bg-glaucous-50 border-b border-glaucous-200 px-6 py-8 flex flex-col gap-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-base text-glaucous-700 hover:text-vivid-royal-950 py-1 transition-colors"
        >
          {link.name}
        </Link>
      ))}
      <Link
        href="/book"
        data-track-cta="mobile-nav"
        className="mt-4 flex items-center justify-center w-full py-3 text-sm font-bold rounded-lg bg-coffee-bean-600 bg-gradient-to-b from-white/30 via-white/5 to-black/25 text-ghost-white-50 border-t border-t-white/45 border-x border-x-coffee-bean-700/60 border-b-[4px] border-b-coffee-bean-900 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-1.5px_0_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.4)] hover:brightness-110 hover:border-b-coffee-bean-950 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
      >
        Book Discovery Call
      </Link>
    </div>
  );
}
