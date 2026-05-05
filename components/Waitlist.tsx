"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Note: 實際部署時需接 API 端點儲存到 Supabase / Vercel KV
    // 目前只做前端展示
    if (email) {
      console.log("Waitlist signup:", { email, company });
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      {/* Background blob */}
      <div className="blob bg-accent-lime/20 w-[800px] h-[800px] -top-1/2 left-1/2 -translate-x-1/2 animate-blob-1" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-lime">07 ──</span>
          <span className="font-display text-sm tracking-widest text-ink-100/40">JOIN WAITLIST</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-8"
        >
          現在加入
          <br />
          <span className="text-accent-lime">Founding Members</span>
        </motion.h2>

        <p className="text-lg text-ink-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Loamia 預計 2026 年 Q3 上線。前 10 家簽約客戶享 6 個月 5 折優惠、新功能優先體驗權。
        </p>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto"
          >
            <div className="space-y-3 mb-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="你的 Email"
                className="w-full px-5 py-4 bg-white/[0.04] border border-white/[0.12] focus:border-accent-lime focus:outline-none text-ink-50 placeholder:text-ink-100/30 font-body transition-colors"
              />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="公司或代理商名稱（選填）"
                className="w-full px-5 py-4 bg-white/[0.04] border border-white/[0.12] focus:border-accent-lime focus:outline-none text-ink-50 placeholder:text-ink-100/30 font-body transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent-lime text-ink-950 font-display font-bold tracking-wide hover:bg-accent-glow hover:shadow-[0_0_60px_rgba(212,255,0,0.5)] transition-all"
            >
              加入等候名單 →
            </button>

            <p className="mt-6 text-xs text-ink-100/40 font-display tracking-wide">
              我們會在產品上線前一週通知您。不會發送任何垃圾訊息。
            </p>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto p-12 border border-accent-lime/40 bg-gradient-to-br from-accent-lime/10 to-transparent"
          >
            <div className="text-6xl text-accent-lime mb-4">✓</div>
            <div className="font-display font-bold text-2xl mb-2">已收到！</div>
            <p className="text-ink-100/70">
              您已成功加入 Loamia 等候名單。我們會在 2026 Q3 產品上線前主動聯繫您，提供 Founding Members 專屬優惠詳情。
            </p>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="font-display font-bold text-3xl text-accent-lime tabular">14</div>
            <div className="text-xs text-ink-100/50 mt-1 font-display tracking-widest">DAY TRIAL</div>
          </div>
          <div>
            <div className="font-display font-bold text-3xl text-accent-lime tabular">30</div>
            <div className="text-xs text-ink-100/50 mt-1 font-display tracking-widest">DAY REFUND</div>
          </div>
          <div>
            <div className="font-display font-bold text-3xl text-accent-lime tabular">10</div>
            <div className="text-xs text-ink-100/50 mt-1 font-display tracking-widest">FOUNDING SLOTS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
