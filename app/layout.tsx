import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink-950 text-ink-50 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
