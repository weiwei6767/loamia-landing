"use client";
import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-ink-950/70 border-b border-white/[0.06]" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 bg-accent-lime rounded-sm rotate-45 group-hover:rotate-[60deg] transition-transform duration-700" />
            <div className="absolute inset-1 bg-ink-950 rounded-sm rotate-45" />
            <div className="absolute inset-2 bg-accent-lime rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">LOAMIA</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-display tracking-wide text-ink-100/70">
          <a href="#problem" className="hover:text-accent-lime transition">PROBLEM</a>
          <a href="#modules" className="hover:text-accent-lime transition">PRODUCT</a>
          <a href="#pricing" className="hover:text-accent-lime transition">PRICING</a>
        </div>
      </div>
    </nav>
  );
}
