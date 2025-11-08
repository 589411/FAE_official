'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LogEntry {
  id: string;
  logKey: string; // 用於翻譯的鍵
  timestamp: string;
  type: 'exploration' | 'learning' | 'achievement';
}

// 模擬航行日誌數據（不包含文字內容，使用翻譯鍵）
const sampleLogs: LogEntry[] = [
  {
    id: 'log-001',
    logKey: '001',
    timestamp: '2025-10-31T14:23:00Z',
    type: 'exploration'
  },
  {
    id: 'log-002',
    logKey: '002',
    timestamp: '2025-10-30T09:15:00Z',
    type: 'learning'
  },
  {
    id: 'log-003',
    logKey: '003',
    timestamp: '2025-10-29T16:45:00Z',
    type: 'achievement'
  },
  {
    id: 'log-004',
    logKey: '004',
    timestamp: '2025-10-28T11:30:00Z',
    type: 'exploration'
  },
];

export default function MissionLog() {
  const { t, language } = useLanguage();
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
            <h3 className="text-energy-cyan font-bold">{t(`log.${currentLog.logKey}.title`)}</h3>
            <button
              onClick={() => setShowLog(false)}
              className="text-star-white/50 hover:text-star-white transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-star-white/80 mb-2">{t(`log.${currentLog.logKey}.content`)}</p>
          <div className="text-xs text-star-white/50">
            {new Date(currentLog.timestamp).toLocaleString(language === 'zh' ? 'zh-TW' : 'en-US')}
          </div>
        </div>
      </div>
    </div>
  );
}
