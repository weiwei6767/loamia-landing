"use client";
import { motion } from "framer-motion";

export function Differentiation() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" />
      <div className="blob bg-accent-lime/10 w-[600px] h-[600px] top-1/2 -left-48 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">03 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">DIFFERENTIATION</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">/ 為何能贏</div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mb-20"
        >
          市場上沒有任何工具
          <br />
          同時做到<span className="text-accent-lime">這四件事</span>
        </motion.h2>

        {/* Comparison */}
        <div className="grid lg:grid-cols-12 gap-px bg-white/[0.06] mb-24">
          <div className="lg:col-span-3 p-6 bg-ink-950">
            <div className="text-xs font-display tracking-widest text-ink-100/40 mb-4">
              CAPABILITIES
            </div>
            <div className="space-y-3 text-sm">
              <div>跨平台資料整合</div>
              <div>品牌專屬 AI 對話</div>
              <div>社群海巡互動</div>
              <div>客戶歷史永久累積</div>
            </div>
          </div>

          {[
            { name: "Looker Studio", caps: ["✓", "—", "—", "—"] },
            { name: "ViralArc", caps: ["—", "—", "✓", "—"] },
            { name: "ChatGPT", caps: ["—", "△", "—", "—"] },
          ].map((tool, i) => (
            <div key={i} className="lg:col-span-2 p-6 bg-ink-950">
              <div className="text-xs font-display tracking-widest text-ink-100/40 mb-4">
                {tool.name}
              </div>
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
            className="lg:col-span-3 p-6 bg-accent-lime relative"
          >
            <div className="text-xs font-display tracking-widest text-ink-950/70 mb-4 font-bold">
              LOAMIA
            </div>
            <div className="space-y-3">
              {["✓", "✓", "✓", "✓"].map((c, j) => (
                <div key={j} className="text-2xl font-display text-ink-950 font-bold">
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3 Differentiation Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "i.",
              title: "對話查詢與海巡互動的整合",
              desc: "市面上做對話查詢的工具不接社群平台 API、做海巡的工具不做品牌資料庫。Loamia 將兩者整合於同一工作流程。",
            },
            {
              num: "ii.",
              title: "跨品牌資料綜整的洞察深度",
              desc: "一般 AI 工具僅基於單一品牌資料提供建議。Loamia 因服務代理商，可在去識別化前提下綜整所有客戶品牌的歷史資料。",
            },
            {
              num: "iii.",
              title: "資料黏性形成長期護城河",
              desc: "客戶累積使用半年後，將難以離開。隨資料累積，AI 對品牌理解愈深，產出愈精準，形成自我增強飛輪。",
            },
          ].map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-8 border border-white/[0.06] hover:border-accent-lime/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
            >
              <div className="font-serif italic text-3xl text-accent-lime mb-6">{d.num}</div>
              <div className="font-display font-bold text-xl mb-4 group-hover:text-accent-lime transition-colors">
                {d.title}
              </div>
              <p className="text-sm text-ink-100/70 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
