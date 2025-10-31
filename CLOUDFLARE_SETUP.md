# 🚀 Cloudflare Pages 動態功能設定指南

## 📋 基本設定

### **Build Settings**
```yaml
Framework preset: Next.js
Build command: pnpm build
Build output directory: out
```

---

## 🔑 環境變數設定

### **必要設定**

在 Cloudflare Pages Dashboard：

1. 進入你的專案
2. 點擊 **Settings** > **Environment variables**
3. 添加以下變數：

#### **OpenAI API Key**
```
變數名稱: OPENAI_API_KEY
值: sk-proj-xxxxxxxxxx
環境: Production 和 Preview 都要設定
類型: Encrypted（加密）
```

### **取得 OpenAI API Key**

1. 前往 https://platform.openai.com/api-keys
2. 登入或註冊帳號
3. 點擊 "Create new secret key"
4. 複製 API Key（只會顯示一次！）
5. 貼到 Cloudflare Pages 環境變數

---

## 🎯 可用的 API 端點

### **1. AI 聊天 API**
```
POST /api/chat

Request:
{
  "message": "什麼是 Prompt Engineering？"
}

Response:
{
  "message": "AI 的回答...",
  "timestamp": "2025-10-31T15:00:00.000Z"
}
```

### **2. 航行日誌 API**
```
GET /api/logs?limit=5&type=exploration

Response:
{
  "logs": [...],
  "total": 5,
  "timestamp": "2025-10-31T15:00:00.000Z"
}
```

### **3. 用戶進度 API**
```
GET /api/progress?userId=user123
POST /api/progress

Request:
{
  "userId": "user123",
  "completedMissions": ["moon-landing"],
  "currentMission": "mars-mission",
  "achievements": ["first-step"]
}
```

---

## 🔧 進階設定（可選）

### **綁定 KV Namespace（用戶進度存儲）**

1. 在 Cloudflare Dashboard 建立 KV Namespace：
   - Workers & Pages > KV
   - Create namespace
   - 名稱：`FAE_PROGRESS`

2. 綁定到 Pages 專案：
   - Settings > Functions
   - KV namespace bindings
   - Variable name: `PROGRESS_KV`
   - KV namespace: `FAE_PROGRESS`

### **綁定 D1 Database（排行榜、日誌存儲）**

1. 建立 D1 數據庫：
   ```bash
   wrangler d1 create fae-database
   ```

2. 綁定到 Pages 專案：
   - Settings > Functions
   - D1 database bindings
   - Variable name: `DB`
   - D1 database: `fae-database`

---

## 💰 成本預估

### **OpenAI API**
```
模型: GPT-3.5 Turbo
費用: $0.002 / 1K tokens

預估使用：
- 100 次對話/天
- 每次 500 tokens
- = 50,000 tokens/天
- = $0.1 / 天
- = $3 / 月
```

### **Cloudflare Services**
```
✅ Pages: 免費
✅ Functions: 100,000 次/天（免費）
✅ KV: 1GB 存儲（免費）
✅ D1: 5GB 存儲（免費）
```

**總成本：約 $3-5 / 月**（主要是 OpenAI API）

---

## 🧪 本地測試

### **1. 安裝 Wrangler CLI**
```bash
npm install -g wrangler
```

### **2. 建立 .dev.vars 文件**
```bash
# .dev.vars（不要提交到 Git）
OPENAI_API_KEY=sk-proj-xxxxxxxxxx
```

### **3. 本地運行**
```bash
# 開發模式（Next.js）
pnpm dev

# 測試 Functions（Cloudflare Pages 模擬）
wrangler pages dev out
```

---

## 📝 部署檢查清單

- [ ] OpenAI API Key 已設定
- [ ] 環境變數已加入 Cloudflare Pages
- [ ] Functions 目錄已推送到 GitHub
- [ ] 本地測試通過
- [ ] 推送代碼到 GitHub
- [ ] Cloudflare Pages 自動部署
- [ ] 測試 API 端點
- [ ] AI 聊天功能正常

---

## 🐛 常見問題

### **Q: AI 聊天沒有回應**
A: 檢查 OpenAI API Key 是否正確設定，並確認有餘額。

### **Q: CORS 錯誤**
A: Functions 已包含 CORS 標頭，如果還有問題，檢查瀏覽器控制台。

### **Q: 用戶進度無法保存**
A: 如果沒有綁定 KV，進度會在每次刷新後重置。綁定 KV 後即可持久化。

### **Q: 部署失敗**
A: 檢查 Build command 和 Output directory 是否正確。

---

## 📚 相關文件

- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [Cloudflare KV](https://developers.cloudflare.com/kv/)
- [Cloudflare D1](https://developers.cloudflare.com/d1/)
- [OpenAI API](https://platform.openai.com/docs)

---

## 🎉 完成！

設定完成後，你的網站將擁有：
- ✅ 3D 星空場景
- ✅ 動態航行日誌
- ✅ AI 聊天助手
- ✅ 用戶進度保存
- ✅ 全球 CDN 加速

**享受你的沉浸式太空探險網站！** 🚀
