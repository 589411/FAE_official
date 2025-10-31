# 🔧 AI 聊天機器人故障排除

## 🎯 快速診斷（3 步驟）

### 步驟 1：測試 API 是否可訪問

部署後，在瀏覽器訪問：
```
https://你的網域.pages.dev/api/chat-test
```

**預期結果：**
```json
{
  "status": "online",
  "message": "✅ Cloudflare Functions API 運作正常！",
  ...
}
```

- ✅ 如果看到這個 → API 運作正常，繼續步驟 2
- ❌ 如果看到 404 → Functions 沒有部署，查看下方「問題 A」

---

### 步驟 2：測試模擬聊天

在瀏覽器控制台（F12）執行：
```javascript
fetch('/api/chat-test', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: '測試' })
})
.then(r => r.json())
.then(data => {
  console.log('✅ 成功:', data);
  alert('API 測試成功！\n' + data.message);
})
.catch(err => {
  console.error('❌ 失敗:', err);
  alert('API 測試失敗：' + err);
});
```

**預期結果：**
- ✅ 看到成功訊息和模擬回應 → API 完全正常，繼續步驟 3
- ❌ 看到錯誤 → 查看下方「問題 B」

---

### 步驟 3：檢查 OpenAI API Key

在 Cloudflare Pages Dashboard：

1. **Settings** → **Environment variables**
2. 確認有 `OPENAI_API_KEY` 變數
3. 確認應用到 **Production** 環境
4. **重新部署**（環境變數更改後必須重新部署）

---

## 🐛 常見問題解決

### 問題 A：404 Not Found - Functions 沒有部署

**症狀：**
```
訪問 /api/chat-test 顯示 404
```

**原因：**
- `functions` 資料夾沒有正確上傳
- Cloudflare 沒有識別到 Functions

**解決方法：**

1. **確認文件結構：**
```
FAE_official/
├── functions/
│   └── api/
│       ├── chat.ts ✅
│       ├── chat-test.ts ✅
│       ├── logs.ts
│       └── progress.ts
```

2. **檢查 .gitignore：**
確保 `functions/` 沒有被忽略

3. **重新提交並推送：**
```bash
git add functions/
git commit -m "fix: 確保 Functions 正確部署"
git push origin dev/update-2025
```

4. **查看 Cloudflare 部署日誌：**
應該看到：
```
✓ Functions found in /functions
  - /api/chat
  - /api/chat-test
  - /api/logs
  - /api/progress
```

---

### 問題 B：CORS 或網路錯誤

**症狀：**
```
CORS policy: No 'Access-Control-Allow-Origin' header
或
Failed to fetch
```

**解決方法：**

1. **確認 CORS 設置：**
所有 API 文件都已包含 CORS headers ✅

2. **清除瀏覽器快取：**
- Chrome: Ctrl+Shift+Delete
- 選擇「快取的圖片和文件」
- 清除

3. **使用無痕模式測試：**
排除快取問題

---

### 問題 C：OpenAI API 錯誤

**症狀：**
```
OpenAI API 錯誤
或
500 Internal Server Error
```

**解決方法：**

1. **檢查環境變數名稱：**
必須是 `OPENAI_API_KEY`（完全一致）

2. **檢查 API Key 格式：**
- 應該以 `sk-` 開頭
- 長度約 51 字符
- 沒有多餘的空格

3. **測試 API Key：**
在終端執行：
```bash
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer 你的API_KEY"
```

4. **檢查 OpenAI 帳戶：**
- 登入 https://platform.openai.com/
- 檢查 API Key 是否有效
- 檢查使用額度是否足夠

5. **重新部署：**
環境變數更改後必須重新部署！

---

## 🔄 臨時解決方案：使用測試 API

如果 OpenAI API 暫時無法使用，可以先讓聊天機器人使用測試 API：

修改 `components/ui/AIChat.tsx` 第 31 行：
```typescript
// 原本
const response = await fetch('/api/chat', {

// 改為（臨時）
const response = await fetch('/api/chat-test', {
```

這樣可以先測試 UI 功能，等 OpenAI API 設置好後再改回來。

---

## 📊 完整診斷流程圖

```
開始
  ↓
訪問 /api/chat-test
  ↓
404? ──YES→ 問題 A：Functions 沒部署
  ↓ NO
測試 POST 請求
  ↓
失敗? ──YES→ 問題 B：CORS 或網路錯誤
  ↓ NO
測試成功！✅
  ↓
切換到 /api/chat
  ↓
500? ──YES→ 問題 C：OpenAI API 錯誤
  ↓ NO
完全成功！🎉
```

---

## ✅ 成功檢查清單

部署前：
- [ ] `functions/api/chat.ts` 存在
- [ ] `functions/api/chat-test.ts` 存在
- [ ] 文件已 commit 並 push

Cloudflare 設置：
- [ ] 環境變數 `OPENAI_API_KEY` 已設置
- [ ] 應用到 Production 環境
- [ ] 已重新部署

測試：
- [ ] `/api/chat-test` 可訪問（GET）
- [ ] `/api/chat-test` POST 測試成功
- [ ] 聊天機器人 UI 可打開
- [ ] 可以發送訊息並收到回應

---

## 🎯 推薦測試順序

1. **先測試 chat-test API**（不需要 API Key）
   - 確認 Functions 部署成功
   - 確認網路連接正常

2. **再測試真實 chat API**（需要 API Key）
   - 確認環境變數設置正確
   - 確認 OpenAI API 正常

3. **最後測試完整流程**
   - UI → API → OpenAI → 回應

---

## 📞 還是不行？

提供以下資訊以便進一步診斷：

1. **Cloudflare 部署日誌截圖**
   - 特別是 Functions 部分

2. **瀏覽器控制台錯誤**
   - Console 標籤的完整錯誤訊息
   - Network 標籤的請求詳情

3. **環境變數設置截圖**
   - 變數名稱（可以遮蔽值）
   - 應用的環境

4. **測試結果**
   - `/api/chat-test` GET 的回應
   - POST 測試的結果

---

**祝你順利解決問題！** 🚀
