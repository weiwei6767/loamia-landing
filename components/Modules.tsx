"use client";
import { motion } from "framer-motion";

const modules = [
  {
    num: "01",
    title: "Brand GPT",
    subtitle: "品牌專屬對話介面",
    desc: "為每個品牌建立獨立資料庫，支援自然語言查詢，並跨品牌綜整代理商所有歷史資料以提供深度洞察。",
    tag: "PRIORITY 01",
    feature: true,
    span: "lg:col-span-7 lg:row-span-2",
    accent: true,
  },
  {
    num: "02",
    title: "Coast Guard",
    subtitle: "社群海巡與互動管理",
    desc: "AI 24 小時自動監測 Threads、IG 上相關話題，產出符合品牌語氣的回覆建議，採 Human-in-the-Loop 審核機制。",
    tag: "PRIORITY 02",
    span: "lg:col-span-5",
  },
  {
    num: "03",
    title: "Auto Report",
    subtitle: "AI 結案報表自動化",
    desc: "一鍵生成跨平台月度報告，數字類資訊強制走資料庫查詢避免幻覺。",
    tag: "PRIORITY 03",
    span: "lg:col-span-5",
  },
  {
    num: "04",
    title: "Data Hub",
    subtitle: "跨平台數據整合中樞",
    desc: "OAuth 串接 FB、IG、Threads、Google Ads、YouTube、LINE OA。",
    tag: "PRIORITY 04",
    span: "lg:col-span-4",
  },
  {
    num: "05",
    title: "Content Studio",
    subtitle: "活動發想與 AI 文案",
    desc: "基於品牌歷史高互動內容反推風格，產出活動企劃與多版本文案。",
    tag: "PRIORITY 05",
    span: "lg:col-span-4",
  },
  {
    num: "06",
    title: "KOL Network",
    subtitle: "KOL 推薦與管理",
    desc: "代理商累積自身 KOL 合作資產，未來與 Chila.online 整合形成生態系。",
    tag: "FUTURE",
    span: "lg:col-span-4",
    future: true,
  },
];

export function Modules() {
  return (
    <section id="modules" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.3em] text-accent-lime">02 ──</span>
            <span className="font-display text-sm tracking-widest text-ink-100/40">PRODUCT MODULES</span>
          </div>
          <div className="hidden md:block font-display text-xs tracking-widest text-ink-100/30">/ 六大功能模組</div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl mb-10 md:mb-16"
        >
          六大模組，
          <br />
          <span className="text-accent-lime">統一</span>於同一系統
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative p-6 sm:p-8 lg:p-10 transition-all duration-500 ${m.span} ${
                m.accent
                  ? "bg-gradient-to-br from-accent-lime/15 via-accent-lime/5 to-transparent border border-accent-lime/30 hover:border-accent-lime/60"
                  : "bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
              }`}
            >
              {m.future && (
                <div className="absolute top-6 right-6 px-2 py-0.5 border border-white/20 text-[10px] font-display tracking-widest text-ink-100/50">
                  FUTURE
                </div>
              )}

              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div className={`font-display text-xs tracking-widest ${m.accent ? "text-accent-lime" : "text-ink-100/40"}`}>
                  {m.tag}
                </div>
                <div className={`font-display font-bold text-3xl tabular ${m.accent ? "text-accent-lime/30" : "text-white/10"} group-hover:text-accent-lime/60 transition-colors`}>
                  {m.num}
                </div>
              </div>

              <div className={`font-display font-bold mb-2 ${m.feature ? "text-3xl sm:text-4xl md:text-5xl" : "text-xl sm:text-2xl md:text-3xl"} tracking-tight ${m.accent ? "text-accent-lime" : "text-ink-50"}`}>
                {m.title}
              </div>

              <div className="text-sm font-display tracking-wide text-ink-100/60 mb-4">
                {m.subtitle}
              </div>

              <p className={`text-ink-100/70 leading-relaxed ${m.feature ? "text-base md:text-lg max-w-md" : "text-sm"}`}>
                {m.desc}
              </p>

              {m.feature && (
                <div className="mt-8 pt-6 border-t border-accent-lime/20">
                  <div className="text-xs font-display tracking-widest text-accent-lime/60 mb-2">EXAMPLE QUERY</div>
                  <div className="font-display text-sm text-ink-50/80 italic">
                    {"「過去服務的飲料品牌中，雙十一檔期最佳發文時段為週五晚 8 點，搭配限時優惠圖卡互動率較一般貼文高 47%」"}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
