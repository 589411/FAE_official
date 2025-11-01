# 🤖 Cloudflare AI 助手設定指南

## 📋 當前配置

### 環境分離
- **Cloudflare Pages (dev/update-2025)**: AI 助手啟用 ✅
- **Netlify (main - futurearkexp.com)**: AI 助手禁用 ❌

### 為什麼這樣設計？
- Netlify 使用靜態導出 (`output: 'export'`)，不支援 serverless functions
- Cloudflare Pages 支援 Functions，可以運行 AI API

---

## 🔧 Cloudflare Pages 設定步驟

### 步驟 1：獲取 OpenAI API Key

1. 前往 [OpenAI Platform](https://platform.openai.com/)
2. 登入你的帳號
3. 進入 **API Keys** 頁面
4. 點擊 **Create new secret key**
5. 複製並保存你的 API Key（只會顯示一次）

### 步驟 2：在 Cloudflare 設定環境變數

1. 前往 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 選擇 **Pages** → 你的專案
3. 進入 **Settings** → **Environment variables**
4. 點擊 **Add variable**
5. 設定：
   - **Variable name**: `OPENAI_API_KEY`
   - **Value**: 貼上你的 OpenAI API Key
   - **Environment**: 選擇 `Production` 和 `Preview`
6. 點擊 **Save**

### 步驟 3：重新部署

設定完環境變數後，需要重新部署：

**方法 1：自動觸發**
```bash
# 推送任何更改到 dev/update-2025
git push origin dev/update-2025
```

**方法 2：手動觸發**
1. 在 Cloudflare Dashboard
2. 進入你的 Pages 專案
3. 點擊 **Deployments**
4. 點擊 **Retry deployment** 或 **Create deployment**

### 步驟 4：測試 AI 助手

1. 前往你的 Cloudflare Pages 網站
2. 點擊右下角的 🤖 按鈕
3. 輸入訊息測試
4. 應該會收到 AI 回覆

---

## 🐛 故障排除

### 問題 1：AI 助手按鈕沒有出現
**可能原因：**
- 你在 Netlify 網站 (futurearkexp.com) 上
- AI 助手在 Netlify 環境被禁用

**解決方法：**
- 前往 Cloudflare Pages 的網站測試

### 問題 2：AI 回覆錯誤訊息
**可能原因：**
- OpenAI API Key 未設定或錯誤
- API Key 額度用完
- OpenAI API 服務問題

**解決方法：**
1. 檢查 Cloudflare 環境變數是否正確設定
2. 檢查 OpenAI 帳號額度
3. 查看 Cloudflare Functions 日誌

### 問題 3：如何查看 Functions 日誌
1. Cloudflare Dashboard → Pages → 你的專案
2. 點擊 **Functions**
3. 查看 **Logs** 或 **Real-time logs**

---

## 💰 費用說明

### OpenAI API 費用
- **模型**: GPT-3.5-turbo
- **費用**: 約 $0.002 / 1K tokens
- **估算**: 一次對話約 500 tokens = $0.001
- **建議**: 設定使用限額避免超支

### Cloudflare Pages
- **Functions**: 免費額度 100,000 次請求/天
- **超過免費額度**: $0.50 / 百萬次請求

---

## 🔒 安全建議

1. **不要將 API Key 提交到 Git**
   - API Key 只存在 Cloudflare 環境變數
   - 已在 `.gitignore` 中排除 `.env` 檔案

2. **定期輪換 API Key**
   - 建議每 3-6 個月更換一次

3. **設定使用限額**
   - 在 OpenAI Dashboard 設定每月使用上限

4. **監控使用量**
   - 定期檢查 OpenAI 使用量
   - 注意異常流量

---

## 📚 相關文件

- [OpenAI API 文檔](https://platform.openai.com/docs)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [Cloudflare 環境變數](https://developers.cloudflare.com/pages/configuration/build-configuration/)

---

## 🎯 快速檢查清單

- [ ] 已獲取 OpenAI API Key
- [ ] 已在 Cloudflare 設定 `OPENAI_API_KEY` 環境變數
- [ ] 已重新部署 Cloudflare Pages
- [ ] 已測試 AI 助手功能
- [ ] 已設定 OpenAI 使用限額
- [ ] 已確認 Netlify 網站 AI 助手已禁用

---

## 💡 未來改進

可以考慮的改進方向：

1. **改用 Cloudflare Workers AI**
   - 完全免費
   - 無需 OpenAI API Key
   - 但功能可能較受限

2. **添加使用限制**
   - 限制每個用戶的請求次數
   - 添加 rate limiting

3. **改進 UI**
   - 添加打字機效果
   - 支援 Markdown 渲染
   - 添加對話歷史保存

4. **多模型支援**
   - 讓用戶選擇不同的 AI 模型
   - GPT-4 for premium users
