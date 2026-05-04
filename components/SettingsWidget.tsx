"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";
import { useTheme } from "@/lib/theme/provider";

export function SettingsWidget() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[100] font-display">
      {/* Panel */}
      {open && (
        <div
          className="mb-3 w-56 border border-line bg-ink-900/85 backdrop-blur-xl shadow-2xl"
          style={{ animation: "widget-pop 0.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <div className="px-4 py-3 border-b border-line">
            <div className="text-[10px] tracking-[0.3em] text-accent-lime">SETTINGS</div>
          </div>

          {/* Theme toggle */}
          <div className="px-4 py-3 border-b border-line">
            <div className="text-xs text-ink-100/60 mb-2">{t("settings.theme")}</div>
            <div className="grid grid-cols-2 gap-1 p-1 border border-line bg-ink-950/50">
              <button
                onClick={() => setTheme("dark")}
                className={`text-xs py-1.5 transition-all ${
                  theme === "dark"
                    ? "bg-accent-lime text-ink-950 font-bold"
                    : "text-ink-100/60 hover:text-ink-50"
                }`}
              >
                {t("settings.theme.dark")}
              </button>
              <button
                onClick={() => setTheme("light")}
                className={`text-xs py-1.5 transition-all ${
                  theme === "light"
                    ? "bg-accent-lime text-ink-950 font-bold"
                    : "text-ink-100/60 hover:text-ink-50"
                }`}
              >
                {t("settings.theme.light")}
              </button>
            </div>
          </div>

          {/* Lang toggle */}
          <div className="px-4 py-3">
            <div className="text-xs text-ink-100/60 mb-2">{t("settings.lang")}</div>
            <div className="grid grid-cols-2 gap-1 p-1 border border-line bg-ink-950/50">
              <button
                onClick={() => setLocale("zh")}
                className={`text-xs py-1.5 transition-all ${
                  locale === "zh"
                    ? "bg-accent-lime text-ink-950 font-bold"
                    : "text-ink-100/60 hover:text-ink-50"
                }`}
              >
                {t("settings.lang.zh")}
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`text-xs py-1.5 transition-all ${
                  locale === "en"
                    ? "bg-accent-lime text-ink-950 font-bold"
                    : "text-ink-100/60 hover:text-ink-50"
                }`}
              >
                {t("settings.lang.en")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("settings.label")}
        aria-expanded={open}
        className={`widget-glow group relative w-12 h-12 flex items-center justify-center border border-line bg-ink-900/80 backdrop-blur-xl transition-all duration-300 ${
          open ? "rotate-90 border-accent-lime/60" : "hover:border-accent-lime/40"
        }`}
        style={{ animation: open ? "none" : "widget-pulse 2.4s ease-in-out infinite" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-lime">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
    </div>
  );
}
