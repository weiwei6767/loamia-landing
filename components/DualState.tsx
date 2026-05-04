"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";
import type { DictKey } from "@/lib/i18n/dict";

export function DualState() {
  const { t } = useI18n();

  const activeBullets: DictKey[] = ["dual.active.b1", "dual.active.b2", "dual.active.b3", "dual.active.b4"];
  const archivedBullets: { key: DictKey; star: boolean }[] = [
    { key: "dual.archived.b1", star: false },
    { key: "dual.archived.b2", star: true },
    { key: "dual.archived.b3", star: false },
    { key: "dual.archived.b4", star: true },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">04 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">{t("dual.section")}</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">{t("dual.subtitle")}</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-6 md:mb-8">
              {t("dual.title.before")}
              <span className="text-accent-lime">{t("dual.title.lime")}</span>
              {t("dual.title.after")}
            </h2>

            <p className="text-base md:text-lg text-ink-100/70 leading-relaxed mb-6">{t("dual.desc1")}</p>
            <p className="text-base md:text-lg text-ink-100/70 leading-relaxed">{t("dual.desc2")}</p>
          </motion.div>

          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative p-6 md:p-8 bg-gradient-to-br from-accent-lime/15 to-transparent border border-accent-lime/40 mb-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-display text-xs tracking-widest text-accent-lime mb-2">STATE · 01</div>
                  <div className="font-display font-bold text-2xl md:text-3xl">{t("dual.active.title")}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
                  <span className="font-display text-xs text-accent-lime">RUNNING</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {activeBullets.map((k) => (
                  <div key={k} className="flex items-start gap-2">
                    <span className="text-accent-lime">→</span>
                    <span className="text-ink-100/70">{t(k)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex items-center gap-4 my-8 px-6">
              <div className="flex-1 h-px bg-gradient-to-r from-accent-lime/40 via-line/10 to-line/10" />
              <span className="font-display text-xs tracking-widest text-ink-100/40">{t("dual.transition")}</span>
              <div className="flex-1 h-px bg-gradient-to-r from-line/10 to-line/[0.04]" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative p-6 md:p-8 bg-line/[0.02] border border-line/[0.08]"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-display text-xs tracking-widest text-ink-100/40 mb-2">STATE · 02</div>
                  <div className="font-display font-bold text-2xl md:text-3xl text-ink-100/80">{t("dual.archived.title")}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ink-100/30 rounded-full" />
                  <span className="font-display text-xs text-ink-100/50">DORMANT</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {archivedBullets.map((b) => (
                  <div key={b.key} className="flex items-start gap-2">
                    <span className={b.star ? "text-accent-lime" : "text-ink-100/40"}>{b.star ? "★" : "→"}</span>
                    <span className={b.star ? "text-ink-100/80 font-medium" : "text-ink-100/60"}>{t(b.key)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-line/[0.06]">
                <div className="text-xs font-display tracking-widest text-ink-100/40 mb-3">{t("dual.wakeup.label")}</div>
                <p className="text-sm text-ink-100/70 italic">{t("dual.wakeup.body")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
