# 🤖 Cloudflare AI 聊天機器人設置指南

## 🔍 問題診斷

你的網站目前使用 Next.js 靜態導出 (`output: 'export'`)，這會導致 API 路由無法運作。

### 當前配置問題
```javascript
// next.config.js
output: 'export'  // ❌ 靜態導出不支援 API 路由
```

---

## ✅ 解決方案

有兩種方案可以選擇：

### 方案 A：使用 Cloudflare Pages Functions（推薦）

這是最適合 Cloudflare Pages 的方案，無需修改 Next.js 配置。

#### 步驟 1：確認 Functions 文件結構

你的 `functions/api/chat.ts` 已經存在且正確 ✅

#### 步驟 2：在 Cloudflare 設置環境變數

1. 前往 Cloudflare Pages Dashboard
2. 選擇你的專案
3. 進入 **Settings** → **Environment variables**
4. 添加環境變數：
   - **變數名稱**：`OPENAI_API_KEY`
   - **變數值**：你的 OpenAI API Key
   - **環境**：選擇 `Production` 和 `Preview`

#### 步驟 3：修改前端調用路徑

前端需要直接調用 Cloudflare Functions，而不是 Next.js API 路由。

**目前的問題：**
```typescript
// components/ui/AIChat.tsx (第 31 行)
const response = await fetch('/api/chat', {  // ❌ 這會找 Next.js API 路由
```

**需要改為：**
```typescript
const response = await fetch('/api/chat', {  // ✅ Cloudflare Functions 會處理
```

實際上路徑是對的！問題可能是：

1. **環境變數名稱不一致**
2. **Functions 沒有正確部署**
3. **需要重新部署**

---

### 方案 B：改用客戶端直接調用（不推薦）

直接在客戶端調用 OpenAI API（需要暴露 API Key，不安全）

---

## 🔧 推薦操作步驟

### 1. 檢查 Cloudflare 環境變數

確認你在 Cloudflare 設置的環境變數名稱是：
```
OPENAI_API_KEY
```

**不是：**
- ❌ `OPENAI_KEY`
- ❌ `API_KEY`
- ❌ `OPEN_AI_KEY`

### 2. 檢查 Functions 部署

在 Cloudflare Pages 的部署日誌中，應該看到：
```
✓ Functions found in /functions
  - /api/chat
  - /api/logs
  - /api/progress
```

### 3. 測試 API 端點

部署完成後，直接訪問：
```
https://你的網域.pages.dev/api/chat
```

應該返回錯誤訊息（因為是 POST 請求），但不應該是 404。

### 4. 查看瀏覽器控制台

打開網站，按 F12 開啟開發者工具，查看：
- **Console** 標籤：是否有錯誤訊息
- **Network** 標籤：查看 `/api/chat` 請求的狀態

---

## 🐛 常見問題排查

### 問題 1：404 Not Found
**原因：** Functions 沒有正確部署
**解決：**
1. 確認 `functions/api/chat.ts` 存在
2. 重新部署網站
3. 檢查部署日誌

### 問題 2：500 Internal Server Error
**原因：** API Key 未設置或錯誤
**解決：**
1. 檢查環境變數名稱是否為 `OPENAI_API_KEY`
2. 檢查 API Key 是否有效
3. 重新部署（環境變數更改後需要重新部署）

### 問題 3：CORS 錯誤
**原因：** 跨域請求被阻擋
**解決：** 已在 `chat.ts` 中處理 CORS，應該不會有此問題

### 問題 4：OpenAI API 錯誤
**原因：** API Key 無效或額度不足
**解決：**
1. 檢查 OpenAI 帳戶狀態
2. 確認 API Key 有效
3. 檢查使用額度

---

## 📋 快速檢查清單

在 Cloudflare Pages Dashboard 確認：

- [ ] 環境變數 `OPENAI_API_KEY` 已設置
- [ ] 環境變數應用到 Production 和 Preview
- [ ] 最新的 commit 包含 `functions/api/chat.ts`
- [ ] 部署成功且沒有錯誤
- [ ] 部署日誌顯示 Functions 已找到

在網站上測試：

- [ ] 點擊右下角的 🤖 按鈕
- [ ] 聊天視窗正常打開
- [ ] 輸入訊息並發送
- [ ] 檢查瀏覽器控制台是否有錯誤

---

## 🔍 調試步驟

### 1. 檢查 API 是否可訪問

在瀏覽器控制台執行：
```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'test' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

### 2. 查看完整錯誤訊息

修改 `AIChat.tsx` 暫時顯示詳細錯誤：
```typescript
catch (error) {
  console.error('Chat error:', error);
  alert(JSON.stringify(error)); // 暫時用 alert 顯示錯誤
  // ...
}
```

---

## 💡 替代方案：使用模擬回應（測試用）

如果暫時無法使用 OpenAI API，可以先用模擬回應測試 UI：

修改 `functions/api/chat.ts`：
```typescript
export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { message } = await context.request.json();

    // 暫時使用模擬回應
    const mockResponses = [
      '🚀 太好了！讓我們一起探索 AI 的世界！',
      '📊 這是個很棒的問題！AI 就像太空探險一樣充滿驚喜。',
      '💡 我建議你可以從基礎任務開始，循序漸進地學習。',
      '🌟 繼續保持好奇心，你會成為優秀的 AI 探險家！'
    ];

    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];

    return new Response(JSON.stringify({
      message: randomResponse,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    // ... 錯誤處理
  }
}
```

---

## 📞 需要幫助？

如果問題仍然存在，請提供：

1. Cloudflare 部署日誌截圖
2. 瀏覽器控制台的錯誤訊息
3. Network 標籤中 `/api/chat` 請求的詳細資訊

我會幫你進一步診斷問題！

---

## ✅ 成功標誌

當一切正常時，你應該看到：

1. ✅ 點擊 🤖 按鈕，聊天視窗打開
2. ✅ 輸入訊息後，看到「思考中」的動畫
3. ✅ 幾秒後收到 AI 的回應
4. ✅ 可以持續對話

**祝你設置順利！** 🎉
