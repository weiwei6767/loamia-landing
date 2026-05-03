"use client";
import { motion } from "framer-motion";

export function DualState() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">04 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">CORE INNOVATION</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">/ 活躍／封存雙態系統</div>
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
              客戶曾服務過的<span className="text-accent-lime">每一個品牌</span>，都不會被遺忘。
            </h2>

            <p className="text-base md:text-lg text-ink-100/70 leading-relaxed mb-6">
              廣告代理商的客戶關係具有循環性——客戶可能今年投放、明年暫停、後年又回。傳統工具一旦客戶離開即遺忘所有歷史。
            </p>

            <p className="text-base md:text-lg text-ink-100/70 leading-relaxed">
              Loamia 為每個客戶帳號設計兩種狀態，讓歷史資料永久保存並可隨時喚醒。
            </p>
          </motion.div>

          <div className="lg:col-span-7 relative">
            {/* Active State Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative p-6 md:p-8 bg-gradient-to-br from-accent-lime/15 to-transparent border border-accent-lime/40 mb-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-display text-xs tracking-widest text-accent-lime mb-2">
                    STATE · 01
                  </div>
                  <div className="font-display font-bold text-2xl md:text-3xl">活躍 ACTIVE</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
                  <span className="font-display text-xs text-accent-lime">RUNNING</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-accent-lime">→</span>
                  <span className="text-ink-100/70">每日自動抓取資料</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-lime">→</span>
                  <span className="text-ink-100/70">AI 對話即時可用</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-lime">→</span>
                  <span className="text-ink-100/70">計入計費上限</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-lime">→</span>
                  <span className="text-ink-100/70">月度報告自動生成</span>
                </div>
              </div>
            </motion.div>

            {/* Connection Line */}
            <div className="flex items-center gap-4 my-8 px-6">
              <div className="flex-1 h-px bg-gradient-to-r from-accent-lime/40 via-white/10 to-white/10" />
              <span className="font-display text-xs tracking-widest text-ink-100/40">客戶暫停廣告 →</span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-white/[0.04]" />
            </div>

            {/* Archived State Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative p-6 md:p-8 bg-white/[0.02] border border-white/[0.08]"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-display text-xs tracking-widest text-ink-100/40 mb-2">
                    STATE · 02
                  </div>
                  <div className="font-display font-bold text-2xl md:text-3xl text-ink-100/80">封存 ARCHIVED</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-ink-100/30 rounded-full" />
                  <span className="font-display text-xs text-ink-100/50">DORMANT</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-ink-100/40">→</span>
                  <span className="text-ink-100/60">停止抓取新資料</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-lime">★</span>
                  <span className="text-ink-100/80 font-medium">歷史資料永久保存</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ink-100/40">→</span>
                  <span className="text-ink-100/60">不計入活躍上限</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-lime">★</span>
                  <span className="text-ink-100/80 font-medium">可隨時喚醒</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <div className="text-xs font-display tracking-widest text-ink-100/40 mb-3">
                  WAKE UP →
                </div>
                <p className="text-sm text-ink-100/70 italic">
                  「兩年前服務的飲料品牌今年想重啟廣告，AE 一鍵喚醒，過去所有檔期、KOL 合作、效果數據完整重現。」
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
