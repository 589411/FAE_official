# 🚀 Future Ark Education - 未來方舟探險隊

> 用 AI 開啟多元宇宙的無限可能

## 📖 專案簡介

這是未來方舟探險隊的官方網站，打造沉浸式太空探險體驗，將 AI 教學內容包裝成航行日誌和太空任務。

## 👥 任務指揮官

- **👨‍🚀 Joseph 指揮官** - 你的任務指揮官，將帶領你完成所有太空探險任務，掌握 AI 技術

**特別來賓：**
- **👧 Joy** - 11 歲的年輕探險家，會在特定任務中以特別來賓身份出現，分享她的學習心得

> "跟著 Joseph 指揮官，探索 AI 的無限可能"

## ✨ 特色功能

- 🌌 **3D 星空場景**：使用 Three.js 打造真實太空環境
- 🛸 **太空船 HUD 介面**：科幻風格的抬頭顯示器
- 📡 **航行日誌系統**：模擬太空船實時訊息推送
- 🎯 **任務系統**：基礎任務與進階任務頁面
- 🎮 **遊戲載入框架**：預留小遊戲整合接口
- 📱 **完全響應式**：支援桌面、平板、手機

## 🛠️ 技術棧

- **框架**: Next.js 14 (靜態導出)
- **語言**: TypeScript
- **3D 圖形**: React Three Fiber + Three.js
- **動畫**: Framer Motion
- **樣式**: Tailwind CSS
- **部署**: GitHub Pages

## 🚀 快速開始

### 安裝依賴

```bash
npm install
# 或
pnpm install
```

### 開發模式

```bash
npm run dev
# 或
pnpm dev
```

訪問 [http://localhost:3000](http://localhost:3000) 查看結果。

### 構建靜態網站

```bash
npm run build
# 或
pnpm build
```

輸出目錄：`out/`

## 📁 項目結構

```
FAE_official/
├── app/                    # Next.js App Router
│   ├── missions/          # 任務頁面
│   │   ├── basic/         # 基礎任務
│   │   │   └── page.tsx
│   │   └── advanced/      # 進階任務
│   │       └── page.tsx
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   └── globals.css        # 全局樣式
├── components/
│   ├── 3d/                # 3D 組件
│   │   └── StarField.tsx  # 星空場景
│   └── ui/                # UI 組件
│       ├── SpaceshipHUD.tsx   # 太空船 HUD
│       ├── MissionLog.tsx     # 航行日誌
│       └── AIChat.tsx         # AI 聊天助手
├── public/                # 靜態資源
│   └── images/           # 圖片資源
├── old_version/          # 舊版本備份
└── out/                  # 構建輸出 (自動生成)
```

## 🎯 開發計劃

- [x] 初始化 Next.js 項目
- [x] 建立 3D 星空場景
- [x] 實作航行日誌系統
- [x] 設計任務展示頁面（基礎任務 & 進階任務）
- [ ] 建立遊戲載入框架
- [ ] 配置自動部署到 Cloudflare Pages
- [ ] 測試與優化

## 📝 版本歷史

### v2.0.0 (2025-10-31)
- 🎉 全面重寫，使用 Next.js + React Three Fiber
- ✨ 新增 3D 星空場景
- ✨ 新增太空船 HUD 介面
- ✨ 新增航行日誌系統
- 🎯 新增基礎任務與進階任務頁面
- 🤖 新增 AI 聊天助手
- 🎨 全新視覺設計
- 🚀 部署到 Cloudflare Pages

### v1.0.6 (2025-01-10)
- 修復手機版滾動
- 調整 logo 大小
- 修復頁面顯示

## 📄 授權

Copyright © 2025 Future Ark Education. All rights reserved.
