"use client";
import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-ink-950/70 border-b border-white/[0.06]" : "py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-3">
        <a href="#top" onClick={close} className="flex items-center gap-2 group shrink-0">
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
          <a href="#founder" className="hover:text-accent-lime transition">FOUNDER</a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden sm:inline-flex group relative px-5 py-2.5 bg-accent-lime text-ink-950 font-display font-semibold text-sm tracking-wide hover:bg-accent-glow transition-colors"
          >
            <span className="relative z-10">JOIN WAITLIST →</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center border border-white/10 bg-white/[0.02]"
          >
            <span className={`absolute h-px w-5 bg-ink-50 transition-all ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-5 bg-ink-50 transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-ink-50 transition-all ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-ink-950/95 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-base font-display tracking-wide">
          <a href="#problem" onClick={close} className="text-ink-50 hover:text-accent-lime transition">PROBLEM</a>
          <a href="#modules" onClick={close} className="text-ink-50 hover:text-accent-lime transition">PRODUCT</a>
          <a href="#pricing" onClick={close} className="text-ink-50 hover:text-accent-lime transition">PRICING</a>
          <a href="#founder" onClick={close} className="text-ink-50 hover:text-accent-lime transition">FOUNDER</a>
          <a
            href="#waitlist"
            onClick={close}
            className="mt-2 inline-flex justify-center items-center px-5 py-3 bg-accent-lime text-ink-950 font-semibold"
          >
            JOIN WAITLIST →
          </a>
        </div>
      </div>
    </nav>
  );
}
