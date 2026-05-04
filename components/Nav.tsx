"use client";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/provider";

export function Nav() {
  const { t } = useI18n();
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
        scrolled ? "py-3 backdrop-blur-xl bg-ink-950/70 border-b border-line/[0.06]" : "py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-3">
        <a href="#top" onClick={close} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="LOAMIA" className="h-8 md:h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-display tracking-wide text-ink-100/70">
          <a href="#problem" className="hover:text-accent-lime transition">{t("nav.problem")}</a>
          <a href="#modules" className="hover:text-accent-lime transition">{t("nav.product")}</a>
          <a href="#pricing" className="hover:text-accent-lime transition">{t("nav.pricing")}</a>
          <a href="#founder" className="hover:text-accent-lime transition">{t("nav.founder")}</a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://app.loamia.xyz/login"
            className="hidden sm:inline-flex group relative px-5 py-2.5 bg-accent-lime text-ink-950 font-display font-semibold text-sm tracking-wide hover:bg-accent-glow transition-colors"
          >
            <span className="relative z-10">{t("nav.cta")}</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center border border-line/10 bg-line/[0.02]"
          >
            <span className={`absolute h-px w-5 bg-ink-50 transition-all ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-5 bg-ink-50 transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-ink-50 transition-all ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-ink-950/95 backdrop-blur-xl border-b border-line/[0.06] transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-base font-display tracking-wide">
          <a href="#problem" onClick={close} className="text-ink-50 hover:text-accent-lime transition">{t("nav.problem")}</a>
          <a href="#modules" onClick={close} className="text-ink-50 hover:text-accent-lime transition">{t("nav.product")}</a>
          <a href="#pricing" onClick={close} className="text-ink-50 hover:text-accent-lime transition">{t("nav.pricing")}</a>
          <a href="#founder" onClick={close} className="text-ink-50 hover:text-accent-lime transition">{t("nav.founder")}</a>
          <a
            href="https://app.loamia.xyz/login"
            onClick={close}
            className="mt-2 inline-flex justify-center items-center px-5 py-3 bg-accent-lime text-ink-950 font-semibold"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}
