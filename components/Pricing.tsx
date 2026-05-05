"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";
import type { DictKey } from "@/lib/i18n/dict";

type Plan = {
  name: string;
  price: string;
  active: number | string;
  archived: number | string;
  targetKey: DictKey;
  popular?: boolean;
};

const plans: Plan[] = [
  { name: "Lite", price: "1,490", active: 5, archived: 10, targetKey: "pricing.plan.lite" },
  { name: "Starter", price: "3,990", active: 10, archived: 30, targetKey: "pricing.plan.starter" },
  { name: "Pro", price: "9,990", active: 50, archived: 100, targetKey: "pricing.plan.pro", popular: true },
  { name: "Scale", price: "21,800", active: 80, archived: 200, targetKey: "pricing.plan.scale" },
];

export function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">05 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">{t("pricing.section")}</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">{t("pricing.subtitle")}</div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl mb-6 md:mb-8"
        >
          {t("pricing.title.line1")}
          <br />
          <span className="text-accent-lime">{t("pricing.title.lime")}</span>
        </motion.h2>

        <p className="text-sm md:text-base text-ink-100/60 max-w-2xl mb-10 md:mb-16 leading-relaxed">
          {t("pricing.terms")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative p-6 transition-all ${
                plan.popular
                  ? "bg-gradient-to-b from-accent-lime/15 to-accent-lime/5 border-2 border-accent-lime"
                  : "bg-line/[0.02] border border-line/[0.08] hover:border-line/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-lime text-ink-950 text-[10px] font-display font-bold tracking-widest">
                  {t("pricing.popular")}
                </div>
              )}

              <div className={`font-display font-bold text-2xl mb-1 ${plan.popular ? "text-accent-lime" : ""}`}>
                {plan.name}
              </div>
              <div className="text-xs text-ink-100/50 mb-6 h-8 leading-snug">
                {t(plan.targetKey)}
              </div>

              <div className="mb-6 pb-6 border-b border-line/[0.08]">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-ink-100/50 font-display">NT$</span>
                  <span className="font-display font-bold text-3xl tabular">{plan.price}</span>
                </div>
                <div className="text-xs text-ink-100/40 mt-1 font-display">{t("pricing.month")}</div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-baseline justify-between">
                  <span className="text-ink-100/50 text-xs font-display tracking-wide">{t("pricing.activeClients")}</span>
                  <span className={`font-display tabular font-semibold ${plan.popular ? "text-accent-lime" : ""}`}>
                    {plan.active}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-ink-100/50 text-xs font-display tracking-wide">{t("pricing.archivedClients")}</span>
                  <span className="font-display tabular text-ink-100/70">{plan.archived}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 p-6 sm:p-8 lg:p-12 border border-accent-lime/30 bg-gradient-to-br from-accent-lime/10 to-transparent relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-lime/10 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-display text-xs tracking-widest text-accent-lime mb-3">
                {t("pricing.bonus.label")}
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4 leading-tight">
                {t("pricing.bonus.title.line1")}
                <br />
                {t("pricing.bonus.title.line2.before")}
                <span className="text-accent-lime">{t("pricing.bonus.title.lime")}</span>
              </h3>
              <p className="text-ink-100/70 leading-relaxed text-sm">{t("pricing.bonus.body")}</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-accent-lime text-ink-950 font-display font-semibold tracking-wide hover:bg-accent-glow hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] transition-all text-sm sm:text-base"
              >
                {t("pricing.bonus.cta")}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
