"use client";
import { motion } from "framer-motion";

export function Problem() {
  return (
    <section id="problem" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Label */}
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">01 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">THE PROBLEM</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">/ 產業真實樣貌</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Left - Big Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              廣告代理商每月花費
              <br />
              <span className="text-accent-lime">大量工時</span>
              <br />
              在做<span className="text-stroke">無法累積</span>的事
            </h2>

            <p className="mt-8 md:mt-10 text-base md:text-lg text-ink-100/70 leading-relaxed max-w-xl">
              月度結案報告、KOL 名單研究、社群風向監測、跨平台數據整合——這些工作技術門檻不高、極度耗時、產出多為一次性使用，且不同 AE、不同月份重複執行相同流程。
            </p>

            <p className="mt-6 text-base md:text-lg text-ink-100/70 leading-relaxed max-w-xl">
              代理商累積的是<span className="text-accent-lime font-semibold">工時</span>，不是<span className="text-accent-lime font-semibold">資產</span>。
            </p>
          </motion.div>

          {/* Right - Pain Stats Stack */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { num: "50–70%", label: "AE 工時投入低附加價值任務", source: "業界實務觀察" },
              { num: "636.83 億", label: "2024 年台灣數位廣告市場規模", source: "DMA 2024 年度統計報告" },
              { num: "98%+", label: "企業已進入 AI 探索或實驗階段", source: "DMA 產業調查" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="glow-card relative p-6 bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="font-display font-bold text-3xl text-accent-lime tabular">
                    {stat.num}
                  </div>
                  <div className="font-display text-xs text-ink-100/30">
                    0{i + 1}
                  </div>
                </div>
                <div className="text-base text-ink-50 mb-1">{stat.label}</div>
                <div className="text-xs text-ink-100/40 font-display tracking-wide">
                  {stat.source}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pain Point List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]"
        >
          {[
            { ord: "01", title: "結案報表", desc: "跨平台拉數據、整合表格、撰寫文字分析" },
            { ord: "02", title: "KOL 名單研究", desc: "依品牌調性蒐集合適 KOL 並評估" },
            { ord: "03", title: "社群風向監測", desc: "追蹤產業話題、競品動向、品牌討論" },
            { ord: "04", title: "跨平台整合", desc: "FB、IG、Google Ads、YouTube 數據彙整" },
          ].map((item, i) => (
            <div key={i} className="bg-ink-950 p-6 md:p-8 group hover:bg-ink-900 transition-colors">
              <div className="font-display text-xs tracking-widest text-accent-lime mb-4">
                {item.ord}
              </div>
              <div className="font-display text-xl mb-2 group-hover:text-accent-lime transition-colors">
                {item.title}
              </div>
              <div className="text-sm text-ink-100/50 leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
