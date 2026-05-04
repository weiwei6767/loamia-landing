export function Footer() {
  return (
    <footer className="relative pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="LOAMIA" className="h-10 w-auto" />
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
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-ink-100/40 font-display tracking-wide">
            © 2026 LOAMIA · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
