"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";
import type { DictKey } from "@/lib/i18n/dict";

export function Differentiation() {
  const { t } = useI18n();

  const capKeys: DictKey[] = ["diff.cap1", "diff.cap2", "diff.cap3", "diff.cap4"];
  const tools = [
    { name: "Looker Studio", caps: ["✓", "—", "—", "—"], brand: false },
    { name: "ChatGPT", caps: ["—", "△", "—", "—"], brand: false },
    { name: "LOAMIA", caps: ["✓", "✓", "✓", "✓"], brand: true },
  ];

  const diffCards: { num: string; titleKey: DictKey; descKey: DictKey }[] = [
    { num: "i.", titleKey: "diff.card1.title", descKey: "diff.card1.desc" },
    { num: "ii.", titleKey: "diff.card2.title", descKey: "diff.card2.desc" },
    { num: "iii.", titleKey: "diff.card3.title", descKey: "diff.card3.desc" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />
      <div className="blob bg-accent-lime/10 w-[600px] h-[600px] top-1/2 -left-48 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">03 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">{t("diff.section")}</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">{t("diff.subtitle")}</div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mb-12 md:mb-20"
        >
          {t("diff.title.line1")}
          <br />
          {t("diff.title.line2.before")}
          <span className="text-accent-lime">{t("diff.title.lime")}</span>
        </motion.h2>

        {/* Mobile */}
        <div className="lg:hidden space-y-3 mb-16">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`p-5 ${tool.brand ? "bg-accent-lime" : "bg-line/[0.02] border border-line/[0.08]"}`}
            >
              <div className={`text-xs font-display tracking-widest mb-4 ${tool.brand ? "text-ink-950 font-bold" : "text-ink-100/50"}`}>
                {tool.name}
              </div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 text-sm">
                {capKeys.map((capKey, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span
                      className={`w-5 text-center text-lg font-display shrink-0 ${
                        tool.brand
                          ? "text-ink-950 font-bold"
                          : tool.caps[j] === "✓"
                            ? "text-accent-lime"
                            : "text-ink-100/20"
                      }`}
                    >
                      {tool.caps[j]}
                    </span>
                    <span className={`text-xs ${tool.brand ? "text-ink-950/80 font-medium" : "text-ink-100/60"}`}>
                      {t(capKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-12 gap-px bg-line/[0.06] mb-24">
          <div className="col-span-3 p-6 bg-ink-950">
            <div className="text-xs font-display tracking-widest text-ink-100/40 mb-4">
              {t("diff.cap.header")}
            </div>
            <div className="space-y-3 text-sm">
              {capKeys.map((k) => (
                <div key={k}>{t(k)}</div>
              ))}
            </div>
          </div>

          {tools.slice(0, 2).map((tool, i) => (
            <div key={i} className="col-span-3 p-6 bg-ink-950">
              <div className="text-xs font-display tracking-widest text-ink-100/40 mb-4">{tool.name}</div>
              <div className="space-y-3">
                {tool.caps.map((c, j) => (
                  <div key={j} className={`text-2xl font-display ${c === "✓" ? "text-accent-lime" : "text-ink-100/20"}`}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-3 p-6 bg-accent-lime relative"
          >
            <div className="text-xs font-display tracking-widest text-ink-950/70 mb-4 font-bold">LOAMIA</div>
            <div className="space-y-3">
              {["✓", "✓", "✓", "✓"].map((c, j) => (
                <div key={j} className="text-2xl font-display text-ink-950 font-bold">
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {diffCards.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-6 sm:p-8 border border-line/[0.06] hover:border-accent-lime/40 bg-line/[0.02] hover:bg-line/[0.04] transition-all"
            >
              <div className="font-serif italic text-3xl text-accent-lime mb-6">{d.num}</div>
              <div className="font-display font-bold text-xl mb-4 group-hover:text-accent-lime transition-colors">
                {t(d.titleKey)}
              </div>
              <p className="text-sm text-ink-100/70 leading-relaxed">{t(d.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
