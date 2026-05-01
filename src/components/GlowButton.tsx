"use client";

import { type ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  id?: string;
}

export default function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  id,
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 hover:scale-105 liquid-btn",
    outline:
      "border border-border text-foreground hover:border-accent-purple hover:text-accent-purple hover:shadow-lg hover:shadow-accent-purple/10 glow-border",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} id={id}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} id={id}>
      {children}
    </button>
  );
}
