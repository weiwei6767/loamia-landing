"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";
import type { DictKey } from "@/lib/i18n/dict";

export function Problem() {
  const { t } = useI18n();

  const stats: { num: DictKey; label: DictKey; source: DictKey }[] = [
    { num: "problem.stat1.num", label: "problem.stat1.label", source: "problem.stat1.source" },
    { num: "problem.stat2.num", label: "problem.stat2.label", source: "problem.stat2.source" },
    { num: "problem.stat3.num", label: "problem.stat3.label", source: "problem.stat3.source" },
  ];

  return (
    <section id="problem" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-line/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-line/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">01 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">{t("problem.section")}</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">{t("problem.subtitle")}</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              {t("problem.title.line1")}
              <br />
              <span className="text-accent-lime">{t("problem.title.lime")}</span>
              <br />
              {t("problem.title.line3.before")}
              <span className="text-stroke">{t("problem.title.line3.stroke")}</span>
              {t("problem.title.line3.after")}
            </h2>

            <p className="mt-8 md:mt-10 text-base md:text-lg text-ink-100/70 leading-relaxed max-w-xl">
              {t("problem.desc1")}
            </p>

            <p className="mt-6 text-base md:text-lg text-ink-100/70 leading-relaxed max-w-xl">
              {t("problem.desc2.part1")}
              <span className="text-accent-lime font-semibold">{t("problem.desc2.lime1")}</span>
              {t("problem.desc2.part2")}
              <span className="text-accent-lime font-semibold">{t("problem.desc2.lime2")}</span>
              {t("problem.desc2.part3")}
            </p>
          </motion.div>

          <div className="lg:col-span-5 space-y-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="glow-card relative p-6 bg-line/[0.02] border border-line/[0.06] hover:bg-line/[0.04] transition-colors"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="font-display font-bold text-3xl text-accent-lime tabular">
                    {t(stat.num)}
                  </div>
                  <div className="font-display text-xs text-ink-100/30">0{i + 1}</div>
                </div>
                <div className="text-base text-ink-50 mb-1">{t(stat.label)}</div>
                <div className="text-xs text-ink-100/40 font-display tracking-wide">
                  {t(stat.source)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
