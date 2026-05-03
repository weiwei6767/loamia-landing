"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden noise">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob bg-accent-lime/30 w-[500px] h-[500px] -top-32 -left-32 animate-blob-1" />
        <div className="blob bg-accent-glow/20 w-[600px] h-[600px] top-1/3 -right-48 animate-blob-2" />
        <div className="blob bg-emerald-500/15 w-[400px] h-[400px] bottom-0 left-1/3 animate-blob-3" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />

      {/* Edge fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/[0.08] bg-white/[0.02] backdrop-blur"
          >
            <span className="w-1.5 h-1.5 bg-accent-lime rounded-full animate-shimmer" />
            <span className="text-xs font-display tracking-[0.2em] text-ink-100/70">
              EARLY ACCESS · 2026 Q3
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight"
          >
            <span className="block">行銷團隊的</span>
            <span className="block">
              <span className="text-stroke">AI 作業系統</span>
            </span>
            <span className="block text-accent-lime">
              重新定義
            </span>
            <span className="block">廣告代理流程</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-xl text-ink-100/70 max-w-xl leading-relaxed"
          >
            Loamia 整合跨平台數據、品牌專屬對話介面、社群海巡互動與 AI 結案報表，讓行銷團隊用一個對話介面，操作品牌所有平台、資料與決策。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-accent-lime text-ink-950 font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] text-sm sm:text-base"
            >
              加入 FOUNDING MEMBERS
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#modules"
              className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 border border-white/[0.12] hover:border-accent-lime/50 text-ink-50 font-display font-semibold tracking-wide transition-all text-sm sm:text-base"
            >
              了解產品
              <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↓</span>
            </a>
          </motion.div>

        </div>

        {/* Right Visual - Asymmetric Card Stack */}
        <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
          {/* Background Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute top-12 right-0 w-80 h-96 border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6"
          >
            <div className="text-xs font-display tracking-widest text-ink-100/40 mb-4">// 02_BRAND_GPT</div>
            <div className="space-y-3 font-display text-sm">
              <div className="text-ink-100/60">{"> 詢問品牌歷史資料"}</div>
              <div className="text-ink-100/30 italic text-xs">{"// 過去半年互動率最高的 5 篇貼文有什麼共通點？"}</div>
              <div className="text-accent-lime mt-4">{"→ 分析中..."}</div>
            </div>
          </motion.div>

          {/* Middle Card - Tilted */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="absolute top-32 right-12 w-80 bg-ink-900 border border-white/[0.08] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-display tracking-widest text-accent-lime">// 結案報告 · 11 月</div>
              <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/10 w-full rounded-sm" />
              <div className="h-2 bg-white/10 w-4/5 rounded-sm" />
              <div className="h-2 bg-white/10 w-3/5 rounded-sm" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="aspect-square bg-accent-lime/20 border border-accent-lime/40 flex items-end p-2">
                <div className="text-xs font-display text-accent-lime tabular">+32%</div>
              </div>
              <div className="aspect-square bg-white/[0.04] border border-white/10 flex items-end p-2">
                <div className="text-xs font-display text-ink-100/60 tabular">5.7%</div>
              </div>
              <div className="aspect-square bg-white/[0.04] border border-white/10 flex items-end p-2">
                <div className="text-xs font-display text-ink-100/60 tabular">¥1.2M</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-ink-100/50 font-body leading-relaxed">
              本月 IG 互動率提升至 5.7%，超越產業均值 3.2%。建議延續...
            </div>
          </motion.div>

          {/* Front Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="absolute bottom-0 left-0 w-72 bg-gradient-to-br from-accent-lime/20 to-accent-lime/5 border border-accent-lime/30 backdrop-blur-xl p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
              <div className="text-xs font-display tracking-widest text-accent-lime">海巡 · 監測中</div>
            </div>
            <div className="font-body text-sm text-ink-50 leading-relaxed">
              偵測到 3 則高意圖貼文，AI 已草擬回覆建議
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-ink-100/40 font-display">QUEUE: 3</span>
              <span className="text-xs font-display text-accent-lime">REVIEW →</span>
            </div>
          </motion.div>

          {/* Floating Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="absolute top-0 right-32 px-3 py-1 bg-accent-lime text-ink-950 text-xs font-display font-bold tracking-widest -rotate-6"
          >
            BETA · 2026
          </motion.div>
        </div>
      </div>
    </section>
  );
}
