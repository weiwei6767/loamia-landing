export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-accent-lime rotate-45" />
                <div className="absolute inset-1 bg-ink-950 rotate-45" />
                <div className="absolute inset-2 bg-accent-lime rotate-45" />
              </div>
              <span className="font-display font-bold text-lg">LOAMIA</span>
            </div>
            <p className="text-ink-100/60 text-sm leading-relaxed max-w-sm mb-6">
              廣告代理商與品牌方的 AI 行銷作業系統。讓行銷團隊用一個對話介面，操作品牌所有平台、資料與決策。
            </p>
            <div className="flex items-center gap-3 text-xs text-ink-100/40 font-display tracking-wide">
              <span>EARLY ACCESS · 2026 Q3</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="font-display text-xs tracking-widest text-ink-100/40 mb-4">
              PRODUCT
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="#modules" className="text-ink-100/70 hover:text-accent-lime transition">功能模組</a></li>
              <li><a href="#pricing" className="text-ink-100/70 hover:text-accent-lime transition">訂閱方案</a></li>
              <li><a href="#waitlist" className="text-ink-100/70 hover:text-accent-lime transition">加入等候</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-display text-xs tracking-widest text-ink-100/40 mb-4">
              COMPANY
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="#founder" className="text-ink-100/70 hover:text-accent-lime transition">創辦人</a></li>
              <li><a href="#problem" className="text-ink-100/70 hover:text-accent-lime transition">產業洞察</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display text-xs tracking-widest text-ink-100/40 mb-4">
              CONTACT
            </div>
            <ul className="space-y-3 text-sm">
              <li className="text-ink-100/60">陳聖凱</li>
              <li className="text-ink-100/60">東吳大學 資訊管理學系</li>
              <li className="text-ink-100/60">指導：許哲銓 副教授</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-ink-100/40 font-display tracking-wide">
            © 2026 LOAMIA · ALL RIGHTS RESERVED
          </div>
          <div className="text-xs text-ink-100/30 font-display tracking-wide">
            BUILT WITH VIBE CODING · CLAUDE CODE
          </div>
        </div>
      </div>
    </footer>
  );
}
