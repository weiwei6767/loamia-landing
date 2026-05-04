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

  const pains: { ord: string; title: DictKey; desc: DictKey }[] = [
    { ord: "01", title: "problem.pain1.title", desc: "problem.pain1.desc" },
    { ord: "02", title: "problem.pain2.title", desc: "problem.pain2.desc" },
    { ord: "03", title: "problem.pain3.title", desc: "problem.pain3.desc" },
    { ord: "04", title: "problem.pain4.title", desc: "problem.pain4.desc" },
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line/[0.06]"
        >
          {pains.map((item, i) => (
            <div key={i} className="bg-ink-950 p-6 md:p-8 group hover:bg-ink-900 transition-colors">
              <div className="font-display text-xs tracking-widest text-accent-lime mb-4">{item.ord}</div>
              <div className="font-display text-xl mb-2 group-hover:text-accent-lime transition-colors">
                {t(item.title)}
              </div>
              <div className="text-sm text-ink-100/50 leading-relaxed">{t(item.desc)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
