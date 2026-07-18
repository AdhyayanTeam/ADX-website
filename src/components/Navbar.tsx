"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`fixed top-0 left-0 w-full h-18 backdrop-blur-md border-b z-50 flex items-center transition-all duration-300 ${
          isScrolled
            ? "border-border/80 bg-background/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            : "border-transparent bg-background/70"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center group">
            <div className="h-11 w-auto flex items-center justify-center">
              <Logo className="h-11 w-auto group-hover:scale-[1.42] transition-transform duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              // Exact match or matches subpages (e.g. /products/...)
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-accent"
                      : "text-secondary hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions (desktop) */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full neumorphic-button-accent"
            >
              Book Strategy Call
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border bg-white text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer"
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

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-18 left-0 w-full h-[calc(100vh-4.5rem)] bg-background border-t border-border z-40 px-6 py-8 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-semibold py-1 transition-colors ${
                    isActive ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 mb-8">
            <Link
              href="/book"
              className="flex items-center justify-center w-full py-3.5 text-sm font-semibold rounded-full bg-accent text-white hover:bg-brand-blue-dark active:scale-[0.98] transition-all duration-150 shadow-[0_4px_12px_rgba(0,82,255,0.15)]"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
