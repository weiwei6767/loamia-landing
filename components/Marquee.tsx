"use client";

const platforms = [
  "Facebook", "Instagram", "Threads", "Google Ads", "YouTube",
  "LINE OA", "Meta Ads Library", "Claude API", "OpenAI", "Supabase"
];

export function Marquee() {
  const items = [...platforms, ...platforms];
  return (
    <section className="relative py-12 border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent z-10" />

      <div className="text-center mb-8">
        <p className="text-xs font-display tracking-[0.3em] text-ink-100/40">
          INTEGRATED WITH · 整合主流平台
        </p>
      </div>

      <div className="marquee-track gap-8 md:gap-16 items-center">
        {items.map((platform, i) => (
          <div
            key={i}
            className="font-display text-xl md:text-2xl tracking-tight text-ink-100/40 hover:text-accent-lime transition-colors whitespace-nowrap shrink-0"
          >
            {platform}
            <span className="ml-8 md:ml-16 text-ink-100/10">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}
