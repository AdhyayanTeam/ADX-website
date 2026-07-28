"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle cinematic loader sync
  useEffect(() => {
    if (pathname !== "/" || (window as any).__heroLoaderComplete) {
      setShouldShow(true);
      return;
    }
    const handleComplete = () => {
      setShouldShow(true);
    };
    window.addEventListener("hero-loader-complete", handleComplete);
    return () => window.removeEventListener("hero-loader-complete", handleComplete);
  }, [pathname]);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl h-14 backdrop-blur-md rounded-full z-50 flex items-center transition-all duration-500 px-4 md:px-6 ${
          isScrolled
            ? "border border-border/80 bg-background/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            : "border border-border/40 bg-background/40"
        } ${shouldShow ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="w-full flex justify-between items-center relative">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center group">
            <div className="h-9 w-auto flex items-center justify-center">
              <Logo className="h-9 w-auto group-hover:scale-105 transition-transform duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-1 items-center bg-muted/40 p-1 rounded-full border border-border/20">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium px-4 py-1.5 rounded-full relative transition-colors duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-accent rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Actions (desktop / mobile control) */}
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs font-bold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.97] transition-all duration-150 shadow-[0_4px_12px_rgba(255,93,115,0.15)]"
            >
              Book Call
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-background/50 text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <IconX className="w-5 h-5" />
              ) : (
                <IconMenu2 className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Mobile Dropdown Card */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed top-20 left-4 right-4 bg-background/95 backdrop-blur-lg border border-border/80 rounded-3xl z-40 p-5 shadow-2xl flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="border-t border-border/40 pt-4 flex flex-col gap-4">
              <Link
                href="/book"
                className="flex items-center justify-center w-full py-3.5 text-sm font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.98] transition-all duration-150 shadow-[0_4px_12px_rgba(255,93,115,0.15)]"
              >
                Book Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
