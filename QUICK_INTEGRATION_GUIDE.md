# ⚡ 快速整合指南

## 🎯 5 分鐘快速開始

### 步驟 1：複製組件（1 分鐘）

組件已經創建在：
```
/components/missions/InteractiveMission.tsx
```

### 步驟 2：創建任務頁面（2 分鐘）

創建新文件：`/app/missions/interactive/page.tsx`

```typescript
'use client';

import { useState } from 'react';
import InteractiveMission from '@/components/missions/InteractiveMission';
import missionData from '@/public/sample_mission_data.json';

export default function InteractiveMissionPage() {
  const [currentMission, setCurrentMission] = useState(0);
  const mission = missionData.missions[currentMission];

  const handleComplete = (result: any) => {
    console.log('任務完成！', result);
    // 這裡可以處理任務完成後的邏輯
    // 例如：保存進度、解鎖新任務、顯示獎勵等
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-space-dark via-space-blue/20 to-space-dark py-16">
      <div className="container mx-auto px-4">
        {/* 任務選擇器 */}
        <div className="mb-8 flex gap-4 justify-center">
          {missionData.missions.map((m, index) => (
            <button
              key={m.id}
              onClick={() => setCurrentMission(index)}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentMission === index
                  ? 'bg-energy-cyan text-space-dark'
                  : 'bg-space-blue/30 text-star-white hover:bg-space-blue/50'
              }`}
            >
              任務 {index + 1}
            </button>
          ))}
        </div>

        {/* 互動任務 */}
        <InteractiveMission
          missionId={mission.id}
          title={mission.title}
          story={mission.story}
          data={mission.data}
          onComplete={handleComplete}
        />
      </div>
    </main>
  );
}
```

### 步驟 3：測試（2 分鐘）

訪問：`http://localhost:3001/missions/interactive`

測試流程：
1. ✅ 看到 FAE Bot 對話
2. ✅ 點擊「開始任務」
3. ✅ 點擊「複製數據」
4. ✅ 打開 ChatGPT 貼上數據
5. ✅ 回來提交答案

---

## 🔧 整合到現有頁面

### 方案 A：在基礎任務頁面添加

編輯：`/app/missions/basic/page.tsx`

```typescript
// 在現有的任務卡片中添加「開始互動任務」按鈕

<div className="mission-card ...">
  {/* 現有內容 */}
  
  {/* 新增：互動任務入口 */}
  {mission.hasInteractive && (
    <Link 
      href={`/missions/interactive/${mission.id}`}
      className="mt-4 btn-primary w-full text-center"
    >
      🎮 開始互動任務
    </Link>
  )}
</div>
```

### 方案 B：創建獨立的互動任務區

在首頁添加新入口：

```typescript
// /app/page.tsx

<div className="flex gap-4 justify-center flex-wrap">
  <a href="/missions/basic" className="btn-primary">
    🚀 開始探險
  </a>
  <a href="/missions/advanced" className="btn-secondary">
    🌟 進階任務
  </a>
  {/* 新增 */}
  <a href="/missions/interactive" className="btn-primary">
    🎮 互動挑戰
  </a>
</div>
```

---

## 📝 自定義任務數據

### 創建新任務

編輯：`/public/sample_mission_data.json`

```json
{
  "missions": [
    {
      "id": "your_mission_id",
      "title": "你的任務標題",
      "category": "data_analysis",
      "difficulty": 2,
      "estimatedTime": "10-15 分鐘",
      "points": 150,
      "story": {
        "intro": "FAE Bot 說的話...",
        "fabotAvatar": "/images/faebot_happy.png",
        "fabotVoice": "excited"
      },
      "data": {
        "title": "數據標題",
        "type": "structured",
        "copyable": true,
        "content": "這裡放你的數據內容...",
        "hints": [
          {
            "level": 1,
            "text": "💡 提示文字",
            "fabotSays": "FAE Bot 的提示"
          }
        ]
      },
      "questions": [
        {
          "type": "multiple_choice",
          "question": "你的問題？",
          "options": [
            {
              "id": "A",
              "text": "選項 A",
              "correct": true,
              "feedback": "正確的反饋"
            }
          ]
        }
      ],
      "rewards": {
        "points": 150,
        "badges": ["badge_id"],
        "unlocks": ["next_mission_id"],
        "fabotPraise": "FAE Bot 的讚美"
      }
    }
  ]
}
```

---

## 🎨 自定義樣式

### 修改 FAE Bot 外觀

在 `/components/missions/InteractiveMission.tsx` 中：

```typescript
// 修改 FAE Bot 頭像
<div className="w-16 h-16 rounded-full bg-energy-cyan/30 flex items-center justify-center text-3xl">
  {/* 可以改成圖片 */}
  <img src="/images/faebot.png" alt="FAE Bot" />
</div>

// 修改對話框顏色
<div className="... bg-gradient-to-r from-energy-cyan/20 to-energy-purple/20">
  {/* 對話內容 */}
</div>
```

### 修改數據卡片樣式

```typescript
// 修改背景色
<div className="p-6 rounded-xl bg-space-blue/20 ...">

// 修改邊框
<div className="... border border-energy-cyan/30">

// 修改文字顏色
<pre className="text-star-white/90 ...">
```

---

## 🔌 添加功能

### 1. 保存進度

```typescript
// 使用 localStorage
const saveProgress = (missionId: string, result: any) => {
  const progress = JSON.parse(localStorage.getItem('fae_progress') || '{}');
  progress[missionId] = {
    completed: true,
    score: result.score,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem('fae_progress', JSON.stringify(progress));
};

// 在 handleComplete 中使用
const handleComplete = (result: any) => {
  saveProgress(mission.id, result);
  // ... 其他邏輯
};
```

### 2. 顯示獎勵動畫

```typescript
import { motion } from 'framer-motion';

const RewardAnimation = ({ rewards }: { rewards: any }) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: 'spring', duration: 0.8 }}
    className="text-center p-8 rounded-xl bg-gradient-to-r from-energy-cyan/20 to-energy-purple/20"
  >
    <div className="text-6xl mb-4">🎉</div>
    <h3 className="text-2xl font-bold text-glow mb-4">任務完成！</h3>
    <div className="space-y-2">
      <p className="text-energy-cyan">+ {rewards.points} 探險點數</p>
      {rewards.badges.map((badge: string) => (
        <p key={badge} className="text-energy-purple">🏆 獲得徽章：{badge}</p>
      ))}
    </div>
  </motion.div>
);
```

### 3. 添加計時器

```typescript
const [timeSpent, setTimeSpent] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setTimeSpent(prev => prev + 1);
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

// 顯示時間
<div className="text-star-white/60 text-sm">
  ⏱️ 已用時間：{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
</div>
```

---

## 🐛 常見問題

### Q: 複製功能不工作？

A: 確保使用 HTTPS 或 localhost。某些瀏覽器在 HTTP 下不允許複製。

```typescript
// 添加錯誤處理
const handleCopyData = async () => {
  try {
    await navigator.clipboard.writeText(data.content);
    setCopied(true);
  } catch (err) {
    // 降級方案
    const textArea = document.createElement('textarea');
    textArea.value = data.content;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true);
  }
};
```

### Q: 手機上體驗不好？

A: 添加響應式樣式：

```typescript
<div className="
  max-w-4xl mx-auto 
  p-6 md:p-8 lg:p-12
  text-sm md:text-base
">
  {/* 內容 */}
</div>
```

### Q: 想要添加音效？

A: 使用 Web Audio API：

```typescript
const playSound = (soundName: string) => {
  const audio = new Audio(`/sounds/${soundName}.mp3`);
  audio.play();
};

// 在適當的時機播放
<button onClick={() => {
  handleCopyData();
  playSound('copy');
}}>
  複製數據
</button>
```

---

## 📊 追蹤用戶行為

### 基礎分析

```typescript
// 追蹤任務開始
const trackMissionStart = (missionId: string) => {
  console.log('Mission Started:', missionId, new Date());
  // 可以發送到分析服務
};

// 追蹤數據複製
const trackDataCopy = (missionId: string) => {
  console.log('Data Copied:', missionId);
};

// 追蹤任務完成
const trackMissionComplete = (missionId: string, timeSpent: number, score: number) => {
  console.log('Mission Completed:', {
    missionId,
    timeSpent,
    score,
    timestamp: new Date(),
  });
};
```

---

## 🚀 部署到 Cloudflare Pages

### 確保構建成功

```bash
# 測試構建
pnpm build

# 檢查輸出
ls -la .next/
```

### 推送到 Git

```bash
git add .
git commit -m "feat: 添加互動任務系統"
git push origin dev/update-2025
```

Cloudflare Pages 會自動部署！

---

## 📚 更多資源

### 文檔
- `GAME_EXPERIENCE_DESIGN.md` - 完整設計文檔
- `IMPLEMENTATION_PLAN.md` - 實施計劃
- `GAME_DESIGN_SUMMARY.md` - 設計總結

### 組件
- `/components/missions/InteractiveMission.tsx` - 互動任務組件

### 數據
- `/public/sample_mission_data.json` - 任務數據範例

---

## ✅ 檢查清單

開始前：
- [ ] 已閱讀 `GAME_DESIGN_SUMMARY.md`
- [ ] 理解核心概念
- [ ] 準備好測試環境

實施中：
- [ ] 複製組件到項目
- [ ] 創建任務頁面
- [ ] 測試數據複製功能
- [ ] 測試完整流程

完成後：
- [ ] 手機端測試
- [ ] 不同瀏覽器測試
- [ ] 收集用戶反饋
- [ ] 迭代優化

---

## 💬 需要幫助？

如果遇到問題：
1. 檢查瀏覽器控制台錯誤
2. 確認文件路徑正確
3. 查看相關文檔
4. 隨時問我！

**祝你整合順利！🎉**
