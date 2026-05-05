import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme/provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { SettingsWidget } from "@/components/SettingsWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://loamia.xyz"),
  title: "Loamia — AI Marketing OS for Agencies & Brands",
  description: "為廣告代理商與品牌方打造的 AI 行銷作業系統。整合跨平台數據、品牌專屬對話、社群海巡與結案報表自動化於同一系統。",
  keywords: ["AI 行銷", "廣告代理商", "Marketing OS", "社群海巡", "結案報表", "Brand GPT", "Loamia"],
  authors: [{ name: "陳聖凱" }],
  openGraph: {
    title: "Loamia — AI Marketing OS",
    description: "讓行銷團隊用一個對話介面，操作品牌所有平台、資料與決策。",
    url: "https://loamia.xyz",
    siteName: "Loamia",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loamia — AI Marketing OS",
    description: "讓行銷團隊用一個對話介面，操作品牌所有平台、資料與決策。",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("loamia.theme")?.value;
  const localeCookie = cookieStore.get("loamia.locale")?.value;
  const theme = themeCookie === "light" ? "light" : "dark";
  const locale = localeCookie === "en" ? "en" : "zh";

  return (
    <html lang={locale === "zh" ? "zh-TW" : "en"} className={theme} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink-950 text-ink-50 font-body antialiased">
        <ThemeProvider initialTheme={theme}>
          <I18nProvider initialLocale={locale}>
            {children}
            <SettingsWidget />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
