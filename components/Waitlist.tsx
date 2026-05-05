"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/provider";

export function Waitlist() {
  const { t } = useI18n();
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
          access_key: "1e4bbac5-5f51-4214-8ea3-21140a410409",
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
        setError(t("waitlist.error.submit"));
      }
    } catch {
      setError(t("waitlist.error.network"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-20 md:py-32 overflow-hidden">
      <div className="blob bg-accent-lime/20 w-[800px] h-[800px] -top-1/2 left-1/2 -translate-x-1/2 animate-blob-1" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="font-display text-sm tracking-[0.3em] text-accent-lime">07 ──</span>
          <span className="font-display text-sm tracking-widest text-ink-100/40">{t("waitlist.section")}</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight mb-6 md:mb-8"
        >
          {t("waitlist.title.line1")}
          <br />
          <span className="text-accent-lime">{t("waitlist.title.lime")}</span>
        </motion.h2>

        <p className="text-base md:text-lg text-ink-100/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
          {t("waitlist.desc")}
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
                placeholder={t("waitlist.email.placeholder")}
                className="w-full px-5 py-4 bg-line/[0.04] border border-line/[0.12] focus:border-accent-lime focus:outline-none text-ink-50 placeholder:text-ink-100/30 font-body transition-colors"
              />
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={t("waitlist.company.placeholder")}
                className="w-full px-5 py-4 bg-line/[0.04] border border-line/[0.12] focus:border-accent-lime focus:outline-none text-ink-50 placeholder:text-ink-100/30 font-body transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-accent-lime text-ink-950 font-display font-bold tracking-wide hover:bg-accent-glow hover:shadow-[0_0_60px_rgba(212,255,0,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? t("waitlist.submitting") : t("waitlist.submit")}
            </button>

            {error && (
              <p className="mt-4 text-sm text-red-400 font-display tracking-wide">
                {error}
              </p>
            )}

            <p className="mt-6 text-xs text-ink-100/40 font-display tracking-wide">
              {t("waitlist.fineprint")}
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
            <div className="font-display font-bold text-2xl mb-2">{t("waitlist.success.title")}</div>
            <p className="text-ink-100/70">{t("waitlist.success.body")}</p>
          </motion.div>
        )}

        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-accent-lime tabular">14</div>
            <div className="text-[10px] sm:text-xs text-ink-100/50 mt-1 font-display tracking-widest">{t("waitlist.trust.trial")}</div>
          </div>
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-accent-lime tabular">30</div>
            <div className="text-[10px] sm:text-xs text-ink-100/50 mt-1 font-display tracking-widest">{t("waitlist.trust.refund")}</div>
          </div>
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-accent-lime tabular">10</div>
            <div className="text-[10px] sm:text-xs text-ink-100/50 mt-1 font-display tracking-widest">{t("waitlist.trust.slots")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
