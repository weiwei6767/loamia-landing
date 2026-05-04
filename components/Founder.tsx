"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";
import type { DictKey } from "@/lib/i18n/dict";

export function Founder() {
  const { t } = useI18n();

  const projects: { name: string; tagKey: DictKey; descKey: DictKey }[] = [
    { name: "Funded Asia", tagKey: "founder.proj1.tag", descKey: "founder.proj1.desc" },
    { name: "Chila.online", tagKey: "founder.proj2.tag", descKey: "founder.proj2.desc" },
    { name: "votesnap", tagKey: "founder.proj3.tag", descKey: "founder.proj3.desc" },
  ];

  return (
    <section id="founder" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-line/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">06 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">{t("founder.section")}</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">{t("founder.subtitle")}</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative mb-8">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent-lime/10 via-line/[0.02] to-transparent border border-line/[0.08] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-fine opacity-30" />
                <div className="relative font-display font-bold text-8xl md:text-9xl text-accent-lime/80">
                  陳
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display text-xs tracking-widest text-ink-100/40 mb-1">{t("founder.label")}</div>
                  <div className="font-display font-bold text-2xl">{t("founder.name")}</div>
                  <div className="text-xs text-ink-100/50 mt-1">{t("founder.name.en")}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-6 md:mb-8">
              {t("founder.title.line1")}
              <br />
              <span className="text-accent-lime">{t("founder.title.lime")}</span>
            </h2>

            <div className="space-y-6 text-ink-100/70 leading-relaxed text-sm md:text-base">
              <p className="text-base md:text-lg">{t("founder.story1")}</p>
              <p>{t("founder.story2")}</p>
              <p>
                <span className="text-accent-lime font-semibold">{t("founder.story3")}</span>
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-line/[0.06]">
              <div className="text-xs font-display tracking-widest text-ink-100/40 mb-6">
                {t("founder.projects.label")}
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {projects.map((p, i) => (
                  <div key={i} className="p-4 border border-line/[0.06] hover:border-accent-lime/30 transition-colors group">
                    <div className="font-display font-bold mb-1 group-hover:text-accent-lime transition-colors">
                      {p.name}
                    </div>
                    <div className="text-xs font-display tracking-wide text-accent-lime/70 mb-2">{t(p.tagKey)}</div>
                    <div className="text-xs text-ink-100/50">{t(p.descKey)}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
