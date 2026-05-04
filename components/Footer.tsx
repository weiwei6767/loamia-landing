"use client";

import { useI18n } from "@/lib/i18n/provider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative pt-16 md:pt-20 pb-8 md:pb-10 border-t border-line/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="LOAMIA" className="h-10 w-auto" />
            </div>
            <p className="text-ink-100/60 text-sm leading-relaxed max-w-sm mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3 text-xs text-ink-100/40 font-display tracking-wide">
              <span>{t("footer.early")}</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="font-display text-xs tracking-widest text-ink-100/40 mb-4">
              {t("footer.product")}
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="#modules" className="text-ink-100/70 hover:text-accent-lime transition">{t("footer.product.modules")}</a></li>
              <li><a href="#pricing" className="text-ink-100/70 hover:text-accent-lime transition">{t("footer.product.pricing")}</a></li>
              <li><a href="#waitlist" className="text-ink-100/70 hover:text-accent-lime transition">{t("footer.product.waitlist")}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-display text-xs tracking-widest text-ink-100/40 mb-4">
              {t("footer.company")}
            </div>
            <ul className="space-y-3 text-sm">
              <li><a href="#founder" className="text-ink-100/70 hover:text-accent-lime transition">{t("footer.company.founder")}</a></li>
              <li><a href="#problem" className="text-ink-100/70 hover:text-accent-lime transition">{t("footer.company.problem")}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display text-xs tracking-widest text-ink-100/40 mb-4">
              {t("footer.contact")}
            </div>
            <ul className="space-y-3 text-sm">
              <li className="text-ink-100/60">{t("founder.name")}</li>
              <li className="text-ink-100/60">{t("footer.contact.school")}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-ink-100/40 font-display tracking-wide">
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}
