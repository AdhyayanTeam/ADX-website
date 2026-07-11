import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-20 w-auto" }: LogoProps) {
  return (
    <img
      src="/logo-removebg-preview.png"
      alt="ADX Logo"
      // Added scale-[1.35] to trim the transparent whitespace around the PNG graphic programmatically
      className={`${className} scale-[1.35]`}
    />
  );
}
