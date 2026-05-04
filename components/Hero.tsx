"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden noise">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob bg-accent-lime/30 w-[500px] h-[500px] -top-32 -left-32 animate-blob-1" />
        <div className="blob bg-accent-glow/20 w-[600px] h-[600px] top-1/3 -right-48 animate-blob-2" />
        <div className="blob bg-emerald-500/15 w-[400px] h-[400px] bottom-0 left-1/3 animate-blob-3" />
      </div>

      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-line/[0.08] bg-line/[0.02] backdrop-blur"
          >
            <span className="w-1.5 h-1.5 bg-accent-lime rounded-full animate-shimmer" />
            <span className="text-xs font-display tracking-[0.2em] text-ink-100/70">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight"
          >
            <span className="block">{t("hero.title.line1")}</span>
            <span className="block">
              <span className="text-stroke">{t("hero.title.line2")}</span>
            </span>
            <span className="block text-accent-lime">{t("hero.title.line3")}</span>
            <span className="block">{t("hero.title.line4")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-xl text-ink-100/70 max-w-xl leading-relaxed"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-accent-lime text-ink-950 font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] text-sm sm:text-base"
            >
              {t("hero.cta1")}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#modules"
              className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 border border-line/[0.12] hover:border-accent-lime/50 text-ink-50 font-display font-semibold tracking-wide transition-all text-sm sm:text-base"
            >
              {t("hero.cta2")}
              <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↓</span>
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute top-12 right-0 w-80 h-96 border border-line/10 bg-line/[0.02] backdrop-blur-xl p-6"
          >
            <div className="text-xs font-display tracking-widest text-ink-100/40 mb-4">{t("hero.demo.label")}</div>
            <div className="space-y-3 font-display text-sm">
              <div className="text-ink-100/60">{t("hero.demo.line1")}</div>
              <div className="text-ink-100/30 italic text-xs">{t("hero.demo.line2")}</div>
              <div className="text-accent-lime mt-4">{t("hero.demo.analyzing")}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="absolute top-32 right-12 w-80 bg-ink-900 border border-line/[0.08] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-display tracking-widest text-accent-lime">{t("hero.demo.report.title")}</div>
              <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-line/10 w-full rounded-sm" />
              <div className="h-2 bg-line/10 w-4/5 rounded-sm" />
              <div className="h-2 bg-line/10 w-3/5 rounded-sm" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="aspect-square bg-accent-lime/20 border border-accent-lime/40 flex items-end p-2">
                <div className="text-xs font-display text-accent-lime tabular">+32%</div>
              </div>
              <div className="aspect-square bg-line/[0.04] border border-line/10 flex items-end p-2">
                <div className="text-xs font-display text-ink-100/60 tabular">5.7%</div>
              </div>
              <div className="aspect-square bg-line/[0.04] border border-line/10 flex items-end p-2">
                <div className="text-xs font-display text-ink-100/60 tabular">¥1.2M</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-line/[0.06] text-xs text-ink-100/50 font-body leading-relaxed">
              {t("hero.demo.report.body")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="absolute bottom-0 left-0 w-72 bg-gradient-to-br from-accent-lime/20 to-accent-lime/5 border border-accent-lime/30 backdrop-blur-xl p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
              <div className="text-xs font-display tracking-widest text-accent-lime">{t("hero.demo.coastguard.label")}</div>
            </div>
            <div className="font-body text-sm text-ink-50 leading-relaxed">
              {t("hero.demo.coastguard.body")}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-ink-100/40 font-display">{t("hero.demo.coastguard.queue")}</span>
              <span className="text-xs font-display text-accent-lime">{t("hero.demo.coastguard.review")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="absolute top-0 right-32 px-3 py-1 bg-accent-lime text-ink-950 text-xs font-display font-bold tracking-widest -rotate-6"
          >
            {t("hero.demo.beta")}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
