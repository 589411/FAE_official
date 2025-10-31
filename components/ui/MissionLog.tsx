'use client';

import { useEffect, useState } from 'react';

interface LogEntry {
  id: string;
  timestamp: string;
  title: string;
  content: string;
  type: 'exploration' | 'learning' | 'achievement';
}

// 模擬航行日誌數據
const sampleLogs: LogEntry[] = [
  {
    id: 'log-001',
    timestamp: '2025-10-31T14:23:00Z',
    title: '月球軌道進入成功',
    content: '太空船 ARK-01 成功進入月球軌道。開始進行 AI 基礎能力訓練任務。',
    type: 'exploration'
  },
  {
    id: 'log-002',
    timestamp: '2025-10-30T09:15:00Z',
    title: 'Prompt Engineering 實戰完成',
    content: '完成了 AI 對話技巧訓練。學員們成功掌握了如何與 AI 進行有效溝通。',
    type: 'learning'
  },
  {
    id: 'log-003',
    timestamp: '2025-10-29T16:45:00Z',
    title: '數據分析任務達成',
    content: '利用 AI 工具成功分析了月球表面數據，發現了新的學習模式。',
    type: 'achievement'
  },
  {
    id: 'log-004',
    timestamp: '2025-10-28T11:30:00Z',
    title: '火星航道規劃中',
    content: '準備進入火星任務階段，將開始 AI 行銷與自動化應用的學習。',
    type: 'exploration'
  },
];

export default function MissionLog() {
  const [showLog, setShowLog] = useState(false);
  const [currentLog, setCurrentLog] = useState<LogEntry | null>(null);

  useEffect(() => {
    // 模擬隨機推送訊息（每 10-30 秒）
    const showRandomLog = () => {
      const randomLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
      setCurrentLog(randomLog);
      setShowLog(true);

      // 5 秒後自動隱藏
      setTimeout(() => {
        setShowLog(false);
      }, 5000);
    };

    // 首次延遲 3 秒顯示
    const initialTimer = setTimeout(showRandomLog, 3000);

    // 之後每 20 秒顯示一次
    const interval = setInterval(showRandomLog, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!currentLog) return null;

  const typeColors = {
    exploration: 'border-energy-cyan',
    learning: 'border-warning-amber',
    achievement: 'border-success-green',
  };

  const typeIcons = {
    exploration: '🚀',
    learning: '📚',
    achievement: '🏆',
  };

  return (
    <div
      className={`fixed bottom-4 left-4 max-w-md glass rounded-lg p-4 border-l-4 ${typeColors[currentLog.type]} z-30 transition-all duration-500 ${
        showLog ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">{typeIcons[currentLog.type]}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-energy-cyan font-bold">{currentLog.title}</h3>
            <button
              onClick={() => setShowLog(false)}
              className="text-star-white/50 hover:text-star-white transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-star-white/80 mb-2">{currentLog.content}</p>
          <div className="text-xs text-star-white/50">
            {new Date(currentLog.timestamp).toLocaleString('zh-TW')}
          </div>
        </div>
      </div>
    </div>
  );
}
