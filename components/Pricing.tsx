"use client";
import { motion } from "framer-motion";

const plans = [
  { name: "Lite", price: "1,490", active: 5, archived: 10, target: "單人接案者、小型工作室", popular: false },
  { name: "Starter", price: "3,990", active: 10, archived: 30, target: "5–10 人小型代理商", popular: false },
  { name: "Pro", price: "9,990", active: 50, archived: 100, target: "10–30 人中型代理商", popular: true },
  { name: "Scale", price: "21,800", active: 80, archived: 200, target: "30 人以上大型代理商", popular: false },
  { name: "Brand", price: "5,990", active: "—", archived: "—", target: "品牌方直接使用", popular: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">05 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">PRICING</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">/ 訂閱方案</div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl mb-8"
        >
          依代理商規模，
          <br />
          <span className="text-accent-lime">五階方案</span>
        </motion.h2>

        <p className="text-ink-100/60 max-w-2xl mb-16 leading-relaxed">
          14 天免費試用、30 天退款保證、前 10 家 Founding Members 享 6 個月 5 折優惠。
        </p>

        <div className="grid lg:grid-cols-5 gap-4">
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
                  : "bg-white/[0.02] border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-lime text-ink-950 text-[10px] font-display font-bold tracking-widest">
                  MOST POPULAR
                </div>
              )}

              <div className={`font-display font-bold text-2xl mb-1 ${plan.popular ? "text-accent-lime" : ""}`}>
                {plan.name}
              </div>
              <div className="text-xs text-ink-100/50 mb-6 h-8 leading-snug">
                {plan.target}
              </div>

              <div className="mb-6 pb-6 border-b border-white/[0.08]">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-ink-100/50 font-display">NT$</span>
                  <span className="font-display font-bold text-3xl tabular">{plan.price}</span>
                </div>
                <div className="text-xs text-ink-100/40 mt-1 font-display">/ 月</div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-baseline justify-between">
                  <span className="text-ink-100/50 text-xs font-display tracking-wide">活躍客戶</span>
                  <span className={`font-display tabular font-semibold ${plan.popular ? "text-accent-lime" : ""}`}>
                    {plan.active}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-ink-100/50 text-xs font-display tracking-wide">封存客戶</span>
                  <span className="font-display tabular text-ink-100/70">{plan.archived}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 p-8 lg:p-12 border border-accent-lime/30 bg-gradient-to-br from-accent-lime/10 to-transparent relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-lime/10 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-display text-xs tracking-widest text-accent-lime mb-3">
                FOUNDING MEMBERS · LIMITED 10 SLOTS
              </div>
              <h3 className="font-display font-bold text-3xl mb-4 leading-tight">
                成為前 10 家種子客戶，<br />享 6 個月 <span className="text-accent-lime">5 折優惠</span>
              </h3>
              <p className="text-ink-100/70 leading-relaxed text-sm">
                換取 1 年合約 + 案例研究授權 + 每月 30 分鐘深度回饋訪談。專屬權益包含創辦人個人 LINE 直接聯繫、新功能優先體驗權、永久 9 折續約優惠。
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-accent-lime text-ink-950 font-display font-semibold tracking-wide hover:bg-accent-glow hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] transition-all"
              >
                報名 FOUNDING MEMBERS
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
