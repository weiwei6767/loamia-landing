"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";
import type { DictKey } from "@/lib/i18n/dict";

type Mod = {
  num: string;
  title: string;
  subtitleKey: DictKey;
  descKey: DictKey;
  span: string;
  feature?: boolean;
  accent?: boolean;
  future?: boolean;
};

const modules: Mod[] = [
  { num: "01", title: "Brand GPT", subtitleKey: "modules.01.subtitle", descKey: "modules.01.desc", span: "lg:col-span-7 lg:row-span-2", feature: true, accent: true },
  { num: "02", title: "Coast Guard", subtitleKey: "modules.02.subtitle", descKey: "modules.02.desc", span: "lg:col-span-5" },
  { num: "03", title: "Auto Report", subtitleKey: "modules.03.subtitle", descKey: "modules.03.desc", span: "lg:col-span-5" },
  { num: "04", title: "Data Hub", subtitleKey: "modules.04.subtitle", descKey: "modules.04.desc", span: "lg:col-span-4" },
  { num: "05", title: "Content Studio", subtitleKey: "modules.05.subtitle", descKey: "modules.05.desc", span: "lg:col-span-4" },
  { num: "06", title: "KOL Network", subtitleKey: "modules.06.subtitle", descKey: "modules.06.desc", span: "lg:col-span-4", future: true },
];

export function Modules() {
  const { t } = useI18n();
  return (
    <section id="modules" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">02 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">{t("modules.section")}</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">{t("modules.subtitle")}</div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl mb-10 md:mb-16"
        >
          {t("modules.title.line1")}
          <br />
          <span className="text-accent-lime">{t("modules.title.lime")}</span>
          {t("modules.title.line3")}
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative p-6 sm:p-8 lg:p-10 transition-all duration-500 ${m.span} ${
                m.accent
                  ? "bg-gradient-to-br from-accent-lime/15 via-accent-lime/5 to-transparent border border-accent-lime/30 hover:border-accent-lime/60"
                  : "bg-line/[0.02] border border-line/[0.06] hover:bg-line/[0.04] hover:border-line/[0.12]"
              }`}
            >
              {m.future && (
                <div className="absolute top-6 right-6 px-2 py-0.5 border border-line/20 text-[10px] font-display tracking-widest text-ink-100/50">
                  {t("modules.future")}
                </div>
              )}

              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div className={`font-display text-xs tracking-widest ${m.accent ? "text-accent-lime" : "text-ink-100/40"}`}>
                  {m.future ? t("modules.future") : `${t("modules.priority")} ${m.num}`}
                </div>
                <div className={`font-display font-bold text-3xl tabular ${m.accent ? "text-accent-lime/30" : "text-line/10"} group-hover:text-accent-lime/60 transition-colors`}>
                  {m.num}
                </div>
              </div>

              <div className={`font-display font-bold mb-2 ${m.feature ? "text-3xl sm:text-4xl md:text-5xl" : "text-xl sm:text-2xl md:text-3xl"} tracking-tight ${m.accent ? "text-accent-lime" : "text-ink-50"}`}>
                {m.title}
              </div>

              <div className="text-sm font-display tracking-wide text-ink-100/60 mb-4">
                {t(m.subtitleKey)}
              </div>

              <p className={`text-ink-100/70 leading-relaxed ${m.feature ? "text-base md:text-lg max-w-md" : "text-sm"}`}>
                {t(m.descKey)}
              </p>

              {m.feature && (
                <div className="mt-8 pt-6 border-t border-accent-lime/20">
                  <div className="text-xs font-display tracking-widest text-accent-lime/60 mb-2">{t("modules.example.label")}</div>
                  <div className="font-display text-sm text-ink-50/80 italic">
                    {t("modules.example.body")}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
