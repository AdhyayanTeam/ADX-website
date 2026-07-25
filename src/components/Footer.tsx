import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-zinc-400 pt-20 pb-28 md:pt-24 md:pb-36 px-6 md:px-12 relative overflow-hidden border-t border-zinc-900/60 z-10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16">
          
          {/* Left Column (Brand info) - spans 5 columns on desktop */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800/80 p-1.5 overflow-hidden transition-colors group-hover:border-zinc-700">
                <Logo className="h-full w-auto brightness-0 invert" />
              </div>
              <span className="font-bold text-white tracking-wider text-lg uppercase font-sans">
                ADHYAYANX
              </span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-sm mt-2 leading-relaxed">
              © copyright ADHYAYANX {currentYear}. All rights reserved.
            </p>
          </div>

          {/* Right Columns (Links) - spans 7 columns on desktop */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-4">
            {/* Column 1: Pages */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Pages</h5>
              <ul className="space-y-3.5 text-sm">
                <li><Link href="/products" className="text-zinc-500 hover:text-white transition-colors duration-200">All Products</Link></li>
                <li><Link href="/services" className="text-zinc-500 hover:text-white transition-colors duration-200">Services</Link></li>
                <li><Link href="/pricing" className="text-zinc-500 hover:text-white transition-colors duration-200">Pricing</Link></li>
                <li><Link href="/about" className="text-zinc-500 hover:text-white transition-colors duration-200">About Us</Link></li>
                <li><Link href="/contact" className="text-zinc-500 hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2: Socials */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Socials</h5>
              <ul className="space-y-3.5 text-sm">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-200">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-200">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-200">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-200">LinkedIn</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Legal</h5>
              <ul className="space-y-3.5 text-sm">
                <li><Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-zinc-500 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="text-zinc-500 hover:text-white transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Register */}
            <div>
              <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Register</h5>
              <ul className="space-y-3.5 text-sm">
                <li><Link href="/book" className="text-zinc-500 hover:text-white transition-colors duration-200">Sign Up</Link></li>
                <li><Link href="/contact" className="text-zinc-500 hover:text-white transition-colors duration-200">Login</Link></li>
                <li><Link href="/contact" className="text-zinc-500 hover:text-white transition-colors duration-200">Forgot Password</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Large Faint Background Watermark - Centered and scaled to fit the viewport */}
      <div className="w-full select-none pointer-events-none overflow-hidden absolute bottom-0 left-0 leading-none z-0 flex justify-center">
        <h1 className="text-[11vw] font-black text-white/[0.03] tracking-tighter uppercase leading-[0.7] font-sans translate-y-[5%]">
          ADHYAYANX
        </h1>
      </div>
    </footer>
  );
}
