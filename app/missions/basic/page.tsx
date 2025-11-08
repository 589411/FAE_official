'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { basicMissionsData } from '@/data/missions';


const difficultyConfig = {
  beginner: { color: 'text-green-400 bg-green-400/20' },
  intermediate: { color: 'text-yellow-400 bg-yellow-400/20' },
  advanced: { color: 'text-red-400 bg-red-400/20' },
  expert: { color: 'text-purple-400 bg-purple-400/20' }
};

export default function BasicMissionsPage() {
  const { t, language } = useLanguage();
  const [showContent, setShowContent] = useState(false);
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const [hoveredMission, setHoveredMission] = useState<number | null>(null);
  
  // 根據語言獲取任務數據
  const basicMissions = basicMissionsData[language];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-space-dark via-space-blue/20 to-space-dark">
      {/* 背景圖片 */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/basic_missions.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* 背景漸層覆蓋 */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-space-dark/80 via-space-blue/40 to-space-dark/90" />

      {/* 語言切換 */}
      <LanguageSwitcher />

      {/* 導航欄 */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 bg-space-dark/50 backdrop-blur-md border-b border-energy-cyan/20">
        <Link href="/" className="text-2xl font-bold text-energy-cyan hover:text-energy-purple transition-colors">
          FAE
        </Link>
        <div className="flex gap-6">
          <Link href="/missions/basic" className="text-star-white hover:text-energy-cyan transition-colors">
            {t('nav.basic')}
          </Link>
          <Link href="/missions/advanced" className="text-star-white/70 hover:text-energy-cyan transition-colors">
            {t('nav.advanced')}
          </Link>
        </div>
      </nav>

      {/* 主要內容 */}
      <div className={`relative z-10 container mx-auto px-6 py-16 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* 標題區 */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-energy-cyan/10 border border-energy-cyan/30 rounded-full">
            <span className="text-energy-cyan font-mono text-sm">🌍 EARTH ORBIT → 🌙 LUNAR BASE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow">
            {t('basic.title')}
          </h1>
          <p className="text-xl text-energy-cyan mb-4">
            {t('basic.subtitle')}
          </p>
          
          {/* 指揮官歡迎訊息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto mt-8 p-4 rounded-xl bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 border border-energy-cyan/30 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-energy-cyan/30 to-energy-purple/30 flex items-center justify-center text-2xl border-2 border-energy-cyan/50">
                  👨‍🚀
                </div>
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-energy-cyan">{t('crew.joseph.title')} {t('crew.joseph.role')}</span>
                  <span className="px-2 py-0.5 bg-energy-cyan/20 text-energy-cyan text-xs rounded-full">
                    {t('crew.joseph.role')}
                  </span>
                </div>
                <p className="text-star-white/90 text-sm leading-relaxed">
                  {t('basic.welcome')}
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex items-center justify-center gap-8 text-star-white/60 text-sm mt-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>4 {t('basic.missions')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span>14-18 {t('basic.hours')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>700 {t('basic.points')}</span>
            </div>
          </div>
        </motion.div>

        {/* 任務路徑視覺化 */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {basicMissions.map((mission, index) => (
              <div key={mission.id} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    hoveredMission === mission.id ? 'bg-energy-cyan/30 scale-125' : 'bg-space-blue/30'
                  } border-2 border-energy-cyan/50 transition-all duration-300 cursor-pointer`}
                  onMouseEnter={() => setHoveredMission(mission.id)}
                  onMouseLeave={() => setHoveredMission(null)}
                >
                  {mission.icon}
                </motion.div>
                {index < basicMissions.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-energy-cyan/50 to-energy-cyan/20 origin-left"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 任務卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {basicMissions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredMission(mission.id)}
              onMouseLeave={() => setHoveredMission(null)}
            >
              <div 
                className={`mission-card p-6 rounded-xl bg-space-blue/20 backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
                  selectedMission === mission.id 
                    ? 'border-energy-cyan shadow-glow scale-105' 
                    : 'border-energy-cyan/30 hover:border-energy-cyan hover:shadow-glow'
                }`}
                onClick={() => setSelectedMission(selectedMission === mission.id ? null : mission.id)}
              >
                {/* 任務編號標籤 */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-energy-cyan text-space-dark font-bold flex items-center justify-center text-lg shadow-lg">
                  {mission.id}
                </div>

                {/* 任務圖標與標題區 */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {mission.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-energy-cyan/70 font-mono mb-1">
                      {mission.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-star-white group-hover:text-energy-cyan transition-colors">
                      {mission.title}
                    </h3>
                  </div>
                </div>
                
                {/* 任務描述 */}
                <p className="text-star-white/70 text-sm mb-4 leading-relaxed">
                  {mission.description}
                </p>
                
                {/* 任務資訊標籤 */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyConfig[mission.difficulty as keyof typeof difficultyConfig].color}`}>
                    {t(`mission.difficulty.${mission.difficulty}`)}
                  </span>
                  <span className="px-2 py-1 rounded bg-space-blue/30 text-star-white/70 text-xs">
                    ⏱️ {mission.duration}
                  </span>
                  <span className="px-2 py-1 rounded bg-energy-cyan/20 text-energy-cyan text-xs font-medium">
                    ⭐ {mission.points} {t('mission.points')}
                  </span>
                </div>

                {/* 展開的詳細資訊 */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: selectedMission === mission.id ? 'auto' : 0,
                    opacity: selectedMission === mission.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-energy-cyan/20 space-y-4">
                    {/* 學習技能 */}
                    <div>
                      <h4 className="text-sm font-bold text-energy-cyan mb-2">🎯 {t('mission.learningSkills')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {mission.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-space-blue/40 text-star-white/80 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 學習目標 */}
                    <div>
                      <h4 className="text-sm font-bold text-energy-cyan mb-2">📋 {t('mission.learningObjectives')}</h4>
                      <ul className="space-y-1">
                        {mission.objectives.map((obj, idx) => (
                          <li key={idx} className="text-xs text-star-white/70 flex items-start gap-2">
                            <span className="text-energy-cyan mt-0.5">▸</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 任務獎勵 */}
                    <div>
                      <h4 className="text-sm font-bold text-energy-cyan mb-2">🎁 {t('mission.missionRewards')}</h4>
                      <div className="space-y-1">
                        {mission.rewards.map((reward, idx) => (
                          <div key={idx} className="text-xs text-star-white/80">
                            {reward}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 開始按鈕 */}
                    <Link href={`/missions/basic/${mission.id}`}>
                      <button className="w-full mt-4 px-4 py-2 bg-energy-cyan text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-cyan/50">
                        {t('mission.startMissionBtn')} →
                      </button>
                    </Link>
                  </div>
                </motion.div>

                {/* 點擊提示 */}
                {selectedMission !== mission.id && (
                  <div className="text-center mt-2 text-xs text-energy-cyan/50 group-hover:text-energy-cyan transition-colors">
                    {t('mission.clickDetails')} ↓
                  </div>
                )}

                {/* 懸浮效果光暈 */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-energy-cyan/0 via-energy-cyan/5 to-energy-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 進度總覽 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 p-8 rounded-xl bg-gradient-to-r from-space-blue/30 via-space-blue/20 to-space-blue/30 backdrop-blur-sm border border-energy-cyan/30"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-glow">🎯 {t('basic.completeTitle')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded-lg bg-space-dark/50">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-energy-cyan mb-1">4</div>
              <div className="text-sm text-star-white/60">{t('basic.badgeRewards')}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-space-dark/50">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-energy-cyan mb-1">700</div>
              <div className="text-sm text-star-white/60">{t('basic.totalPoints')}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-space-dark/50">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-energy-cyan mb-1">1</div>
              <div className="text-sm text-star-white/60">{t('basic.advancedPass')}</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-star-white/70 mb-6">
              {t('basic.completeDesc')}<span className="text-energy-cyan font-bold">{t('basic.conquerorTitle')}</span>{t('basic.completeDesc2')}
            </p>
            <Link href="/missions/advanced" className="btn-secondary inline-block">
              {t('basic.previewAdvanced')} →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 返回首頁按鈕 */}
      <Link 
        href="/"
        className="fixed bottom-8 right-8 z-30 w-14 h-14 rounded-full bg-energy-cyan/20 backdrop-blur-md border border-energy-cyan/50 flex items-center justify-center hover:bg-energy-cyan/30 hover:scale-110 transition-all duration-300 group"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">🏠</span>
      </Link>
    </main>
  );
}
