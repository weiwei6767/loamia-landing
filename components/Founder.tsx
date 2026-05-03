"use client";
import { motion } from "framer-motion";

export function Founder() {
  return (
    <section id="founder" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">06 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">FOUNDER</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">/ 創辦人故事</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            {/* Avatar Block */}
            <div className="relative mb-8">
              <div className="aspect-[4/5] bg-gradient-to-br from-accent-lime/10 via-white/[0.02] to-transparent border border-white/[0.08] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-fine opacity-30" />
                <div className="relative font-display font-bold text-8xl md:text-9xl text-accent-lime/80">
                  陳
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="font-display text-xs tracking-widest text-ink-100/40 mb-1">FOUNDER</div>
                    <div className="font-display font-bold text-2xl">陳聖凱</div>
                    <div className="text-xs text-ink-100/50 mt-1">Sheng-Kai Chen</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xs tracking-widest text-accent-lime">SCU</div>
                    <div className="text-xs text-ink-100/50 mt-1">資管系</div>
                  </div>
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
              一個學生<br />
              <span className="text-accent-lime">親身經歷的痛點</span>
            </h2>

            <div className="space-y-6 text-ink-100/70 leading-relaxed text-sm md:text-base">
              <p className="text-base md:text-lg">
                我曾於業界一家廣告代理商擔任實習生，參與日常運作的多項核心業務：為各廠商整理月度與檔期結案報表、研究社群話題風向與品牌議題操作、為廠商研究與提案合適的 KOL 名單、整合多平台廣告數據並撰寫成效分析報告。
              </p>

              <p>
                這段經驗讓我直接觀察到產業的結構性低效率——同樣的工作流程在每家代理商重複、每位 AE 重複、每個月重複，但累積出來的洞察、資料與經驗，缺乏系統化保存與再利用的工具。
              </p>

              <p>
                <span className="text-accent-lime font-semibold">這個觀察是 Loamia 的核心起點。</span>
              </p>
            </div>

            {/* Past Projects */}
            <div className="mt-10 pt-10 border-t border-white/[0.06]">
              <div className="text-xs font-display tracking-widest text-ink-100/40 mb-6">
                PRIOR PROJECTS · 既有作品
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Funded Asia", tag: "跨境品牌", desc: "WordPress + 綠界 ECPay" },
                  { name: "Chila.online", tag: "雙邊平台", desc: "F&B 創作者媒合" },
                  { name: "votesnap", tag: "獨立網站", desc: "Claude Code 開發" },
                ].map((p, i) => (
                  <div key={i} className="p-4 border border-white/[0.06] hover:border-accent-lime/30 transition-colors group">
                    <div className="font-display font-bold mb-1 group-hover:text-accent-lime transition-colors">
                      {p.name}
                    </div>
                    <div className="text-xs font-display tracking-wide text-accent-lime/70 mb-2">{p.tag}</div>
                    <div className="text-xs text-ink-100/50">{p.desc}</div>
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
