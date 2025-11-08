'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SpaceshipHUD() {
  const { t } = useLanguage();
  const [missionDays, setMissionDays] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // 計算任務天數（從 2025-01-01 開始）
    const startDate = new Date('2025-01-01');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setMissionDays(diffDays);

    // 更新時間
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('zh-TW', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 left-4 glass rounded-lg p-4 text-sm z-20">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
          <span className="text-success-green font-bold">{t('hud.online')}</span>
        </div>
        
        <div className="border-t border-energy-cyan/30 pt-2 space-y-1">
          <div className="flex justify-between gap-4">
            <span className="text-star-white/60">{t('hud.missionDays')}:</span>
            <span className="text-energy-cyan font-mono">{missionDays} {t('hud.days')}</span>
          </div>
          
          <div className="flex justify-between gap-4">
            <span className="text-star-white/60">{t('hud.systemTime')}:</span>
            <span className="text-energy-cyan font-mono">{currentTime}</span>
          </div>
          
          <div className="flex justify-between gap-4">
            <span className="text-star-white/60">{t('hud.status')}:</span>
            <span className="text-success-green">{t('hud.operational')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
