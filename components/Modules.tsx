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
    desc: "",
    bullets: [
      "AI 24 小時不停運轉——自動監測數據、發想文案、排程發文，全程支援 Threads 與 Instagram。",
      "一旦在社群上發現值得介入的對話，AI 立即產出符合品牌語氣的海巡回覆，你只需審核後一鍵送出。",
    ],
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
    desc: "OAuth 串接 FB、IG、Threads、Google Ads、YouTube。",
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
    <section id="modules" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-20">
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
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl mb-16"
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
              className={`group relative p-8 lg:p-10 transition-all duration-500 ${m.span} ${
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

              <div className="flex items-start justify-between mb-8">
                <div className={`font-display text-xs tracking-widest ${m.accent ? "text-accent-lime" : "text-ink-100/40"}`}>
                  {m.tag}
                </div>
                <div className={`font-display font-bold text-3xl tabular ${m.accent ? "text-accent-lime/30" : "text-white/10"} group-hover:text-accent-lime/60 transition-colors`}>
                  {m.num}
                </div>
              </div>

              <div className={`font-display font-bold mb-2 ${m.feature ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"} tracking-tight ${m.accent ? "text-accent-lime" : "text-ink-50"}`}>
                {m.title}
              </div>

              <div className="text-sm font-display tracking-wide text-ink-100/60 mb-4">
                {m.subtitle}
              </div>

              {m.bullets ? (
                <ol className="space-y-3 text-sm text-ink-100/70 leading-relaxed list-decimal pl-5 marker:text-accent-lime/70">
                  {m.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ol>
              ) : (
                <p className={`text-ink-100/70 leading-relaxed ${m.feature ? "text-base md:text-lg max-w-md" : "text-sm"}`}>
                  {m.desc}
                </p>
              )}

              {m.feature && (
                <div className="mt-8 pt-6 border-t border-accent-lime/20 space-y-4">
                  <div className="text-xs font-display tracking-widest text-accent-lime/60">EXAMPLE CONVERSATION</div>
                  <div>
                    <div className="text-xs font-display tracking-widest text-ink-100/40 mb-2">使用者</div>
                    <div className="text-sm text-ink-50/80 leading-relaxed">
                      我們春季新品發表會預算 30 萬，目標邀 80 位 KOL，怎麼規劃？
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-display tracking-widest text-accent-lime/70 mb-2">Brand GPT</div>
                    <div className="text-sm text-ink-50/80 leading-relaxed space-y-2">
                      <p>在規劃之前，有件事你可能沒注意到——</p>
                      <p>你們過去三場活動都辦在春季，到場率分別是 87%、64%、41%，明顯遞減。原因是邀請名單高度重疊，KOL 已經來過第二次就不太想再來。</p>
                      <p>與其再辦一場新品發表會，我建議改成「老朋友 30 位 + 全新 50 位」的混合策略。新邀的 50 位可從你們近半年互動過、但還沒合作的帳號裡挑——我手上有 127 位符合條件，要看名單嗎？</p>
                    </div>
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
