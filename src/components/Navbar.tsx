"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroCoords, setHeroCoords] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const [navCoords, setNavCoords] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const updateCoordinates = () => {
    // 1. Measure navbar placeholder
    const navEl = document.getElementById("nav-logo-placeholder");
    if (navEl) {
      const rect = navEl.getBoundingClientRect();
      if (rect.width > 0) {
        setNavCoords({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    }

    // 2. Measure hero placeholder only if we are at the top and it is expanded
    const heroEl = document.getElementById("hero-logo-placeholder");
    if (heroEl) {
      const rect = heroEl.getBoundingClientRect();
      if (rect.width > 50) {
        setHeroCoords({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    }
  };

  useEffect(() => {
    updateCoordinates();
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      // Re-measure hero position if we return to the top to ensure accuracy
      if (window.scrollY < 5) {
        updateCoordinates();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateCoordinates);
    
    // Multiple deferred measurements to ensure hydration and layout settle
    const timer1 = setTimeout(updateCoordinates, 50);
    const timer2 = setTimeout(updateCoordinates, 150);
    const timer3 = setTimeout(updateCoordinates, 500);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCoordinates);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  const activeCoords = (isScrolled || pathname !== "/") ? navCoords : (heroCoords || navCoords);

  const logoStyle = activeCoords
    ? {
        position: "fixed" as const,
        left: `${activeCoords.left}px`,
        top: `${activeCoords.top}px`,
        width: `${activeCoords.width}px`,
        height: `${activeCoords.height}px`,
        zIndex: 100,
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }
    : {
        opacity: 0,
      };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: "Platform", href: "/platform" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full h-18 backdrop-blur-md border-b border-glaucous-200/80 z-50 flex items-center transition-all duration-300 translate-y-0 ${
        isScrolled || pathname !== "/" ? "shadow-[0_4px_24px_rgba(36,36,35,0.06)] bg-glaucous-50/95" : "shadow-none bg-glaucous-50/75"
      }`}>
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <div id="nav-logo-placeholder" className="h-16 w-16 md:h-20 md:w-20 opacity-0 pointer-events-none" />
          
          <nav className={`hidden md:flex gap-8 items-center`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base transition-all duration-300 relative py-2 ${
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
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-base font-bold rounded-md bg-vivid-royal-600 bg-gradient-to-b from-white/30 via-white/5 to-black/25 text-ghost-white-50 border-t border-t-white/40 border-x border-x-vivid-royal-700/60 border-b-[4px] border-b-vivid-royal-900 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-1.5px_0_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.35)] hover:brightness-110 hover:border-b-vivid-royal-950 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            >
              Book a Discovery Call
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

      {/* Floating Logo rendered outside header to avoid backdrop-filter coordinate containment issues in Chrome/Safari */}
      <Link
        href="/"
        style={logoStyle}
        className={`flex items-center justify-center select-none rounded-2xl transition-all duration-500 ease-out z-[100] ${
          !isScrolled && pathname === "/"
            ? "p-2.5 bg-white/5 backdrop-blur-md border border-white/15 border-t-white/30 border-b-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)]"
            : "p-0 bg-transparent backdrop-blur-none border-none shadow-none"
        }`}
      >
        <Logo className="h-full w-full object-contain" />
      </Link>
    </>
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
        className="mt-4 flex items-center justify-center w-full py-3 text-base font-bold rounded-lg bg-coffee-bean-600 bg-gradient-to-b from-white/30 via-white/5 to-black/25 text-ghost-white-50 border-t border-t-white/45 border-x border-x-coffee-bean-700/60 border-b-[4px] border-b-coffee-bean-900 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.4),inset_0_-1.5px_0_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.4)] hover:brightness-110 hover:border-b-coffee-bean-950 active:translate-y-[3px] active:border-b-[1px] active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-100 ease-out select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
      >
        Book a Discovery Call
      </Link>
    </div>
  );
}
