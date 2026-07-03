import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-20 w-auto" }: LogoProps) {
  return (
    <img
      src="/logo-removebg-preview.png"
      alt="ADX Logo"
      className={className}
    />
  );
}
