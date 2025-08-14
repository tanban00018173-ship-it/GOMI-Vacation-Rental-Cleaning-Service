# 狗米整理｜民宿整理服務網站

專業的民宿清潔服務靜態網站，專為宜蘭地區民宿主與管家設計。

## 🏠 專案介紹

狗米整理提供標準化的民宿清潔服務，包含：
- 室內房間清潔
- 公共區域整理
- 備品補充
- 照片驗收
- 每月督導抽查

**品牌標語：** 「民宿整理交給我們，你專心接待下一位旅客。」

## 🛠 技術規格

### 前端技術
- **框架：** Next.js 14 (App Router)
- **樣式：** Tailwind CSS + shadcn/ui (Radix based)
- **圖示：** lucide-react
- **動畫：** framer-motion
- **字體：** Noto Sans TC

### 功能特色
- ✅ 靜態網站生成 (SSG)
- ✅ 響應式設計 (Mobile-first RWD)
- ✅ 深色模式支援
- ✅ SEO 優化 (Metadata + JSON-LD)
- ✅ 無障礙設計 (AA 對比度)
- ✅ 檔案式 CMS (content/ 資料夾)

### 部署平台
- **平台：** Vercel
- **配置：** `vercel.json` 一鍵部署

## 📁 專案結構

```
狗米整理-民宿清潔/
├── app/                    # Next.js App Router 頁面
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   ├── about/             # 關於我們
│   ├── services/          # 服務內容
│   ├── pricing/           # 價格方案
│   ├── process/           # 服務流程
│   ├── cases/             # 成功案例
│   ├── reviews/           # 客戶評價
│   ├── faq/               # 常見問題
│   ├── contact/           # 聯絡我們
│   ├── join/              # 人才招募
│   └── legal/             # 法律條款
├── components/            # React 組件
│   ├── ui/               # shadcn/ui 基礎組件
│   ├── Header.tsx        # 導航列
│   ├── Footer.tsx        # 頁尾
│   ├── Hero.tsx          # 首頁橫幅
│   ├── ServiceCard.tsx   # 服務卡片
│   └── ProcessStepper.tsx # 流程步驟
├── content/              # 檔案式 CMS
│   ├── config.json       # 品牌配置
│   └── seed/             # 假資料
│       ├── cases.json    # 成功案例
│       ├── reviews.json  # 客戶評價
│       └── faq.json      # 常見問題
├── lib/                  # 工具函數
│   ├── utils.ts          # 通用工具
│   └── data.ts           # 資料讀取
└── public/               # 靜態資源
    ├── LOGO.png          # 品牌標誌
    └── 官方LINE帳號.png   # LINE QR Code
```

## 🚀 快速開始

### 環境需求
- Node.js 18+ 
- npm 或 yarn

### 安裝步驟

1. **克隆專案**
```bash
git clone <repository-url>
cd 狗米整理-民宿清潔
```

2. **安裝依賴**
```bash
npm install
# 或
yarn install
```

3. **環境變數設定**
```bash
cp env.example .env.local
```
編輯 `.env.local` 檔案，填入您的 Google Analytics ID 和其他設定。

4. **本地開發**
```bash
npm run dev
# 或
yarn dev
```

5. **建置專案**
```bash
npm run build
# 或
yarn build
```

## 🔗 外部連結修改

### 主要連結位置

#### 1. Google 預約表單
- **檔案：** `content/config.json`
- **欄位：** `googleForm`
- **目前連結：** `https://docs.google.com/forms/d/e/1FAIpQLSdi_EFL2uYap7FsUclIR5PZicay6m6LXtPyNWnauzmcg4ymqQ/viewform?usp=header`

#### 2. LINE 官方帳號
- **檔案：** `content/config.json`
- **欄位：** `line`
- **目前連結：** `https://lin.ee/E6WgviI`

#### 3. 人才招募表單
- **檔案：** `content/config.json`
- **欄位：** `recruitmentForm`
- **目前連結：** `https://forms.gle/your-recruitment-form-id`

### 修改步驟

1. **開啟 config.json**
```bash
nano content/config.json
```

2. **找到對應欄位並修改**
```json
{
  "googleForm": "您的新 Google 表單連結",
  "line": "您的新 LINE 官方帳號連結",
  "recruitmentForm": "您的新招募表單連結"
}
```

3. **重新建置專案**
```bash
npm run build
```

### 其他可修改內容

#### 品牌資訊
- 公司名稱、地址、電話
- 服務區域、價格方案
- 法律聲明、隱私政策

#### 內容資料
- 成功案例：`content/seed/cases.json`
- 客戶評價：`content/seed/reviews.json`
- 常見問題：`content/seed/faq.json`

## 📊 SEO 與分析

### Google Analytics 4 設定

1. **建立 GA4 屬性**
   - 前往 [Google Analytics](https://analytics.google.com/)
   - 建立新屬性
   - 複製測量 ID (格式：G-XXXXXXXXXX)

2. **設定環境變數**
```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### SEO 優化

- **Metadata：** 每個頁面都有完整的 SEO 標籤
- **JSON-LD：** 結構化資料標記
- **Sitemap：** 自動生成 `/sitemap.xml`
- **Robots：** 自動生成 `/robots.txt`

## 🎨 設計系統

### 品牌色彩
- **海軍藍：** `#1e3a8a` (brand-navy)
- **青綠色：** `#0f766e` (brand-teal)
- **淺色：** `#f8fafc` (brand-light)

### 組件樣式
- **圓角：** `rounded-2xl`
- **陰影：** 柔和陰影效果
- **間距：** 充足的 padding 和 margin
- **動畫：** 淡入效果和微妙的浮動動畫

## 📱 響應式設計

### 斷點設定
- **手機：** < 768px
- **平板：** 768px - 1024px
- **桌面：** > 1024px

### 無障礙設計
- **對比度：** AA 等級
- **鍵盤操作：** 完整的鍵盤導航支援
- **螢幕閱讀器：** ARIA 標籤支援

## 🚀 部署到 Vercel

### 自動部署

1. **連接 GitHub**
   - 將程式碼推送到 GitHub
   - 在 Vercel 中連接 GitHub 倉庫

2. **環境變數設定**
   - 在 Vercel 專案設定中新增環境變數
   - 複製 `.env.local` 中的變數

3. **部署設定**
   - 框架：Next.js
   - 建置指令：`npm run build`
   - 輸出目錄：`.next`

### 手動部署

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 登入 Vercel
vercel login

# 部署
vercel --prod
```

## 📞 聯絡資訊

**公司：** 瓏會算有限公司｜狗米整理  
**地址：** 宜蘭縣宜蘭市陽明三路65號  
**電話：** 0963350089 (陳經理)  
**LINE：** [官方帳號](https://lin.ee/E6WgviI)

## 📄 授權

本專案僅供狗米整理使用，未經授權不得複製或散布。

---

**開發者：** 資深全端工程師 + 轉化率導向的 UX 寫手  
**最後更新：** 2024年12月
