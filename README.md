# Loamia Landing Page

> 廣告代理商與品牌方的 AI 行銷作業系統 · Landing Page

## 技術棧

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## 本地開發

```bash
# 安裝依賴
pnpm install
# 或
npm install

# 啟動開發伺服器
pnpm dev
# 或
npm run dev

# 開啟 http://localhost:3000
```

## 部署到 Vercel

### 方法 1：透過 Vercel CLI（最快）

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 在專案根目錄執行
vercel

# 跟著提示完成部署
```

### 方法 2：透過 GitHub + Vercel（推薦，方便後續持續部署）

1. 將此專案 push 到 GitHub repo
2. 到 [vercel.com](https://vercel.com) 註冊／登入
3. 點 "Add New Project"，連接你的 GitHub repo
4. Framework 自動偵測為 Next.js，直接 Deploy
5. 部署完成後到 Settings → Domains 連接 `loamia.ai` 網域

### 連接 loamia.ai 網域

1. 先到 [Namecheap](https://www.namecheap.com) 或 [Porkbun](https://porkbun.com) 購買 `loamia.ai`（約 US$70–100/年）
2. 在 Vercel 專案 → Settings → Domains 新增 `loamia.ai`
3. 依 Vercel 提示在註冊商設定 DNS 紀錄（A record 或 CNAME）
4. 等 DNS 傳播（通常 5–30 分鐘）完成

## 等候名單收集（Email 收集）

目前 `Waitlist.tsx` 元件只做前端展示。實際儲存 email 你可以選一個方案：

### 方案 A：Vercel KV（最簡單）
- 在 Vercel 專案啟用 KV Storage（免費 tier 足夠）
- 在 `app/api/waitlist/route.ts` 寫一個 POST endpoint 儲存 email

### 方案 B：Supabase（推薦，未來可延伸到產品本體）
- 建立 Supabase 專案
- 建一個 `waitlist` table
- 用 Supabase JS client 寫入

### 方案 C：第三方表單服務（最快）
- 用 [Formspree](https://formspree.io) 或 [Tally](https://tally.so)
- 表單送到他們的 endpoint，不用寫後端

## 專案結構

```
loamia-landing/
├── app/
│   ├── layout.tsx          # 全站 layout，引入字體
│   ├── page.tsx            # 主頁面（組合所有 sections）
│   └── globals.css         # Tailwind + 自訂樣式
├── components/
│   ├── Nav.tsx             # 頂部導覽列
│   ├── Hero.tsx            # 首屏（含產品卡片堆疊）
│   ├── Marquee.tsx         # 平台跑馬燈
│   ├── Problem.tsx         # 產業痛點
│   ├── Modules.tsx         # 六大功能模組
│   ├── Differentiation.tsx # 競爭優勢與對照表
│   ├── DualState.tsx       # 活躍／封存雙態系統
│   ├── Pricing.tsx         # 訂閱方案
│   ├── Founder.tsx         # 創辦人故事
│   ├── Waitlist.tsx        # Email 收集
│   └── Footer.tsx          # 頁尾
├── public/                 # 靜態資源（logo、og image 等）
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 設計風格

**深色基調 + 螢光綠（#D4FF00）強調色**

- 主色：Ink Black `#050504`
- 強調色：Lime `#D4FF00`
- 字體：JetBrains Mono（標題）+ Noto Sans TC（中文）+ Playfair Display（裝飾）
- 動畫：Framer Motion stagger 進場、blob 浮動、scroll trigger

## 後續擴充建議

當 Loamia MVP 開始開發時，這個 Next.js 專案可以直接延伸：

1. 在 `app/(marketing)/` 移動現有 Landing Page
2. 新增 `app/(app)/` 放實際產品
3. 共用 `components/`、`lib/` 工具函式
4. 加入 Supabase Auth、Database、Storage

---

**Built by 陳聖凱 · 2026**
