"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "3e6de9fc-57a1-496f-b622-5cf5660f5766",
          subject: "Loamia Waitlist 新註冊",
          from_name: "Loamia Landing",
          email,
          company: company || "(未填)",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("送出失敗，請稍後再試");
      }
    } catch {
      setError("網路錯誤，請稍後再試");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background blob */}
      <div className="blob bg-accent-lime/20 w-[800px] h-[800px] -top-1/2 left-1/2 -translate-x-1/2 animate-blob-1" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-lime">07 ──</span>
          <span className="font-display text-sm tracking-widest text-ink-100/40">JOIN WAITLIST</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight mb-6 md:mb-8"
        >
          現在加入
          <br />
          <span className="text-accent-lime">Founding Members</span>
        </motion.h2>

        <p className="text-base md:text-lg text-ink-100/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
          Loamia 預計 2026 年 Q3 上線。前 10 家簽約客戶享 6 個月 5 折優惠、創辦人個人 LINE 直接聯繫、新功能優先體驗權。
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
              disabled={loading}
              className="w-full px-8 py-4 bg-accent-lime text-ink-950 font-display font-bold tracking-wide hover:bg-accent-glow hover:shadow-[0_0_60px_rgba(212,255,0,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "送出中..." : "加入等候名單 →"}
            </button>

            {error && (
              <p className="mt-4 text-sm text-red-400 font-display tracking-wide">
                {error}
              </p>
            )}

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
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-accent-lime tabular">14</div>
            <div className="text-[10px] sm:text-xs text-ink-100/50 mt-1 font-display tracking-widest">DAY TRIAL</div>
          </div>
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-accent-lime tabular">30</div>
            <div className="text-[10px] sm:text-xs text-ink-100/50 mt-1 font-display tracking-widest">DAY REFUND</div>
          </div>
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-accent-lime tabular">10</div>
            <div className="text-[10px] sm:text-xs text-ink-100/50 mt-1 font-display tracking-widest">FOUNDING SLOTS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
