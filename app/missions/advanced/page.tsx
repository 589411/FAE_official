'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { advancedMissionsData } from '@/data/missions';

type DifficultyLevel = 'intermediate' | 'advanced' | 'expert';

const difficultyColors: Record<DifficultyLevel, string> = {
  intermediate: 'text-green-400 bg-green-400/20',
  advanced: 'text-yellow-400 bg-yellow-400/20',
  expert: 'text-red-400 bg-red-400/20'
};


export default function AdvancedMissionsPage() {
  const { t, language } = useLanguage();
  
  // 根據語言獲取任務數據
  const advancedMissions = advancedMissionsData[language];
  const [showContent, setShowContent] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);
  const [selectedMission, setSelectedMission] = useState<number | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const totalPoints = advancedMissions.reduce((sum, m) => sum + m.points, 0);
  const totalDuration = language === 'zh' ? '58-74 小時' : '58-74 Hours';

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-space-dark via-space-purple/20 to-space-dark">
      {/* 背景圖片 */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/advanced_missions.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* 背景漸層覆蓋 */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-space-dark/80 via-space-purple/40 to-space-dark/90" />

      {/* 語言切換 */}
      <LanguageSwitcher />

      {/* 導航欄 */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 bg-space-dark/50 backdrop-blur-md border-b border-energy-purple/20">
        <Link href="/" className="text-2xl font-bold text-energy-purple hover:text-energy-cyan transition-colors">
          FAE
        </Link>
        <div className="flex gap-6">
          <Link href="/missions/basic" className="text-star-white/70 hover:text-energy-purple transition-colors">
            {t('nav.basic')}
          </Link>
          <Link href="/missions/advanced" className="text-star-white hover:text-energy-purple transition-colors">
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
          <div className="inline-block mb-4 px-4 py-2 bg-energy-purple/10 border border-energy-purple/30 rounded-full">
            <span className="text-energy-purple font-mono text-sm">🌙 LUNAR BASE → 🪐 SOLAR SYSTEM</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow-purple">
            {t('advanced.title')}
          </h1>
          <p className="text-xl text-energy-purple mb-4">
            {t('advanced.subtitle')}
          </p>
          
          {/* 指揮官進階訊息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto mt-8 mb-8 p-4 rounded-xl bg-gradient-to-r from-energy-purple/10 to-energy-cyan/10 border border-energy-purple/30 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-energy-purple/30 to-energy-cyan/30 flex items-center justify-center text-2xl border-2 border-energy-purple/50">
                  👨‍🚀
                </div>
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-energy-purple">{t('crew.joseph.title')} {t('crew.joseph.role')}</span>
                  <span className="px-2 py-0.5 bg-energy-purple/20 text-energy-purple text-xs rounded-full">
                    {t('crew.joseph.role')}
                  </span>
                </div>
                <p className="text-star-white/90 text-sm leading-relaxed">
                  {t('advanced.welcome')}
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-8 text-star-white/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪐</span>
              <span>6 {t('advanced.planets')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span>{totalDuration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>{totalPoints} {t('mission.points')}</span>
            </div>
          </div>
        </motion.div>

        {/* 任務卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advancedMissions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredPlanet(mission.id)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              <div 
                className={`mission-card p-6 rounded-xl bg-space-purple/20 backdrop-blur-sm border transition-all duration-300 cursor-pointer h-full flex flex-col ${
                  selectedMission === mission.id 
                    ? 'border-energy-purple shadow-glow-purple scale-105' 
                    : 'border-energy-purple/30 hover:border-energy-purple hover:shadow-glow-purple'
                }`}
                onClick={() => setSelectedMission(selectedMission === mission.id ? null : mission.id)}
              >
                {/* 任務編號標籤 */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-energy-purple text-space-dark font-bold flex items-center justify-center text-lg shadow-lg">
                  {mission.id}
                </div>

                {/* 任務圖標與星球資訊 */}
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {mission.icon}
                  </div>
                  <div className="text-xs text-energy-purple/70 font-mono mb-1">
                    {mission.subtitle}
                  </div>
                  <div className="text-sm text-energy-purple font-bold">
                    {mission.planet}
                  </div>
                </div>
                
                {/* 任務標題 */}
                <h3 className="text-lg font-bold mb-2 text-star-white group-hover:text-energy-purple transition-colors text-center">
                  {mission.title}
                </h3>
                
                {/* 星球資訊 */}
                <p className="text-xs text-star-white/50 mb-3 text-center italic">
                  {mission.planetInfo}
                </p>
                
                {/* 任務描述 */}
                <p className="text-star-white/70 text-sm mb-4 flex-grow leading-relaxed">
                  {mission.description}
                </p>
                
                {/* 任務資訊標籤 */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[mission.difficulty as DifficultyLevel]}`}>
                    {t(`mission.difficulty.${mission.difficulty}`)}
                  </span>
                  <span className="px-2 py-1 rounded bg-space-purple/30 text-star-white/70 text-xs">
                    ⏱️ {mission.duration}
                  </span>
                  <span className="px-2 py-1 rounded bg-energy-purple/20 text-energy-purple text-xs font-medium">
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
                  <div className="pt-4 border-t border-energy-purple/20 space-y-3">
                    {/* 先決條件 */}
                    <div>
                      <h4 className="text-xs font-bold text-energy-purple mb-1">🔐 {t('advanced.prerequisites')}</h4>
                      <div className="space-y-1">
                        {mission.prerequisites.map((prereq, idx) => (
                          <div key={idx} className="text-xs text-star-white/70">• {prereq}</div>
                        ))}
                      </div>
                    </div>

                    {/* 學習技能 */}
                    <div>
                      <h4 className="text-xs font-bold text-energy-purple mb-1">🎯 {t('mission.learningSkills')}</h4>
                      <div className="flex flex-wrap gap-1">
                        {mission.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-space-purple/40 text-star-white/80 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 實戰應用 */}
                    <div>
                      <h4 className="text-xs font-bold text-energy-purple mb-1">💼 {t('advanced.useCases')}</h4>
                      <div className="flex flex-wrap gap-1">
                        {mission.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-energy-purple/10 text-energy-purple text-xs rounded border border-energy-purple/30">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 學習目標 */}
                    <div>
                      <h4 className="text-xs font-bold text-energy-purple mb-1">📋 {t('mission.learningObjectives')}</h4>
                      <ul className="space-y-0.5">
                        {mission.objectives.map((obj, idx) => (
                          <li key={idx} className="text-xs text-star-white/70 flex items-start gap-1">
                            <span className="text-energy-purple mt-0.5 text-xs">▸</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 任務獎勵 */}
                    <div>
                      <h4 className="text-xs font-bold text-energy-purple mb-1">🎁 {t('mission.missionRewards')}</h4>
                      <div className="space-y-0.5">
                        {mission.rewards.map((reward, idx) => (
                          <div key={idx} className="text-xs text-star-white/80">
                            {reward}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 開始按鈕 */}
                    <Link href={`/missions/advanced/${mission.id}`}>
                      <button className="w-full mt-3 px-4 py-2 bg-energy-purple text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-purple/50 text-sm">
                        開始任務 →
                      </button>
                    </Link>
                  </div>
                </motion.div>

                {/* 點擊提示 */}
                {selectedMission !== mission.id && (
                  <div className="text-center mt-2 text-xs text-energy-purple/50 group-hover:text-energy-purple transition-colors">
                    點擊查看詳情 ↓
                  </div>
                )}

                {/* 懸浮效果光暈 */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-energy-purple/0 via-energy-purple/5 to-energy-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 太陽系探索成就總覽 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-5xl mx-auto mt-16 p-8 rounded-xl bg-gradient-to-r from-space-purple/30 via-space-purple/20 to-space-purple/30 backdrop-blur-sm border border-energy-purple/30"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-glow-purple">🌟 完成太陽系探索，成為 AI 領域專家</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 rounded-lg bg-space-dark/50 border border-energy-purple/20">
              <div className="text-3xl mb-2">🪐</div>
              <div className="text-2xl font-bold text-energy-purple mb-1">6</div>
              <div className="text-sm text-star-white/60">星球征服</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-space-dark/50 border border-energy-purple/20">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-energy-purple mb-1">6</div>
              <div className="text-sm text-star-white/60">專業徽章</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-space-dark/50 border border-energy-purple/20">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-energy-purple mb-1">{totalPoints}</div>
              <div className="text-sm text-star-white/60">總探險點數</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-space-dark/50 border border-energy-purple/20">
              <div className="text-3xl mb-2">🎓</div>
              <div className="text-2xl font-bold text-energy-purple mb-1">1</div>
              <div className="text-sm text-star-white/60">專家證書</div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-star-white/70 mb-4">
              完成所有進階任務後，你將獲得<span className="text-energy-purple font-bold">「太陽系征服者」</span>稱號，
              並解鎖<span className="text-energy-cyan font-bold"> AI 專家認證</span>！
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-energy-purple/20 to-energy-cyan/20 border border-energy-purple/50 rounded-lg">
              <div className="text-sm text-star-white/80 mb-1">🎁 終極獎勵包含</div>
              <div className="flex gap-4 justify-center text-xs text-energy-purple">
                <span>🏅 專家證書</span>
                <span>🚀 AI 先驅徽章</span>
                <span>📚 進階資源庫</span>
                <span>🌟 社群特權</span>
              </div>
            </div>
          </div>

          {/* 難度說明 */}
          <div className="border-t border-energy-purple/20 pt-6">
            <h4 className="text-sm font-bold text-center text-star-white mb-3">難度等級說明</h4>
            <div className="flex gap-6 justify-center flex-wrap text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-star-white/70">中階：適合有基礎的學習者</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="text-star-white/70">進階：需要實戰經驗</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="text-star-white/70">專家：挑戰前沿技術</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 學習路徑建議 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-space-dark/30 backdrop-blur-sm border border-energy-cyan/30 rounded-lg p-6 max-w-2xl">
            <h4 className="text-lg font-bold text-energy-cyan mb-3">💡 學習路徑建議</h4>
            <p className="text-star-white/70 text-sm mb-4">
              建議按照星球順序依次完成任務，每個任務都是下一個任務的基礎。
              如果你還沒有完成基礎任務，建議先從月球基地開始！
            </p>
            <Link href="/missions/basic" className="btn-secondary inline-block">
              ← 返回基礎任務
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 返回首頁按鈕 */}
      <Link 
        href="/"
        className="fixed bottom-8 right-8 z-30 w-14 h-14 rounded-full bg-energy-purple/20 backdrop-blur-md border border-energy-purple/50 flex items-center justify-center hover:bg-energy-purple/30 hover:scale-110 transition-all duration-300 group"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">🏠</span>
      </Link>
    </main>
  );
}
