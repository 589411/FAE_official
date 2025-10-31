'use client';

import { useEffect, useState } from 'react';
import StarField from '@/components/3d/StarField';
import SpaceshipHUD from '@/components/ui/SpaceshipHUD';
import MissionLog from '@/components/ui/MissionLog';
import AIChat from '@/components/ui/AIChat';
import CrewInfo from '@/components/ui/CrewInfo';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 延遲顯示內容，製造進入效果
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* 3D 星空背景 */}
      <StarField />
      
      {/* 主要內容 */}
      <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Logo 和標題 */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="mb-6">
            <img 
              src="/images/fae_logo.png" 
              alt="FAE Logo" 
              className="w-64 h-auto mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                // 如果圖片載入失敗，隱藏圖片
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-glow">
            未來方舟探險隊
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-energy-cyan mb-8">
            用 <span className="font-bold">AI</span> 開啟多元宇宙的<span className="font-bold">無限可能</span>
          </h2>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/missions/basic" className="btn-primary">
              🚀 開始探險
            </a>
            <a href="/missions/advanced" className="btn-secondary">
              🌟 進階任務
            </a>
          </div>
        </div>

        {/* 太空船 HUD */}
        <SpaceshipHUD />
      </div>

      {/* 探險隊成員資訊 */}
      <CrewInfo />

      {/* 航行日誌通知 */}
      <MissionLog />
      
      {/* AI 聊天助手 */}
      <AIChat />
      
      {/* 版本資訊 */}
      <div className="absolute bottom-4 left-4 text-xs text-star-white/50 z-20">
        v2.0.0 | ARK-01 Mission | AI Enabled
      </div>
    </main>
  );
}
