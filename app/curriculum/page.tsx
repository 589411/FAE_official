'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { basicMissionsData, advancedMissionsData } from '@/data/missions';

export default function CurriculumPage() {
  const { t, language } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<'basic' | 'advanced' | 'all'>('all');

  const basicMissions = basicMissionsData[language] as any[];
  const advancedMissions = advancedMissionsData[language] as any[];

  const allMissions = selectedLevel === 'all' 
    ? [...basicMissions, ...advancedMissions]
    : selectedLevel === 'basic' 
    ? basicMissions 
    : advancedMissions;

  const totalHours = selectedLevel === 'all' ? '72-92' : selectedLevel === 'basic' ? '14-18' : '58-74';
  const totalMissions = allMissions.length;

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-space-dark via-space-blue/20 to-space-dark">
      {/* 背景 */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
      </div>

      {/* 語言切換 */}
      <LanguageSwitcher />

      {/* 導航欄 */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 bg-space-dark/50 backdrop-blur-md border-b border-energy-cyan/20">
        <Link href="/" className="text-2xl font-bold text-energy-cyan hover:text-energy-purple transition-colors">
          FAE
        </Link>
        <div className="flex gap-6">
          <Link href="/missions/basic" className="text-star-white/70 hover:text-energy-cyan transition-colors">
            {t('nav.basic')}
          </Link>
          <Link href="/missions/advanced" className="text-star-white/70 hover:text-energy-cyan transition-colors">
            {t('nav.advanced')}
          </Link>
          <Link href="/curriculum" className="text-star-white hover:text-energy-cyan transition-colors">
            課程大綱
          </Link>
        </div>
      </nav>

      {/* 主要內容 */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* 標題區 */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-energy-cyan/10 border border-energy-cyan/30 rounded-full">
            <span className="text-energy-cyan font-mono text-sm">📚 COMPLETE CURRICULUM</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow">
            {t('curriculum.title')}
          </h1>
          <p className="text-xl text-energy-cyan mb-4">
            {t('curriculum.subtitle')}
          </p>
          
          {/* 課程統計 */}
          <div className="flex items-center justify-center gap-8 text-star-white/60 text-sm mt-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>{totalMissions} {t('curriculum.missions')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span>{totalHours} {t('curriculum.hours')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span>{t('curriculum.certification')}</span>
            </div>
          </div>

          {/* 聯絡按鈕 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <a
              href="mailto:future.ark.ai@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-energy-cyan to-energy-purple text-space-dark font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <span>📧</span>
              <span>{t('curriculum.contact')}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* 課程篩選 */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedLevel === 'all'
                ? 'bg-energy-cyan text-space-dark shadow-glow'
                : 'bg-space-blue/20 text-star-white/70 hover:bg-space-blue/30'
            }`}
          >
            {t('curriculum.all')}
          </button>
          <button
            onClick={() => setSelectedLevel('basic')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedLevel === 'basic'
                ? 'bg-energy-cyan text-space-dark shadow-glow'
                : 'bg-space-blue/20 text-star-white/70 hover:bg-space-blue/30'
            }`}
          >
            {t('curriculum.basic')}
          </button>
          <button
            onClick={() => setSelectedLevel('advanced')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedLevel === 'advanced'
                ? 'bg-energy-purple text-space-dark shadow-glow'
                : 'bg-space-blue/20 text-star-white/70 hover:bg-space-blue/30'
            }`}
          >
            {t('curriculum.advanced')}
          </button>
        </div>

        {/* 課程列表 */}
        <div className="max-w-6xl mx-auto space-y-6">
          {allMissions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl bg-space-blue/20 backdrop-blur-sm border border-energy-cyan/30 hover:border-energy-cyan hover:shadow-glow transition-all duration-300">
                {/* 任務編號 */}
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-gradient-to-br from-energy-cyan to-energy-purple flex items-center justify-center text-space-dark font-bold text-lg shadow-lg">
                  {mission.id}
                </div>

                <div className="flex items-start gap-6">
                  {/* 圖標 */}
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {mission.icon}
                  </div>

                  {/* 內容 */}
                  <div className="flex-1">
                    {/* 標題 */}
                    <div className="mb-3">
                      <div className="text-xs text-energy-cyan/70 font-mono mb-1">
                        {mission.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-star-white group-hover:text-energy-cyan transition-colors">
                        {mission.title}
                      </h3>
                    </div>

                    {/* 描述 */}
                    <p className="text-star-white/70 mb-4 leading-relaxed">
                      {mission.description}
                    </p>

                    {/* 標籤 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-energy-cyan/20 text-energy-cyan text-sm rounded-full">
                        ⏱️ {mission.duration}
                      </span>
                      <span className="px-3 py-1 bg-energy-purple/20 text-energy-purple text-sm rounded-full">
                        ⭐ {mission.points} 點數
                      </span>
                      {'planet' in mission && mission.planet && (
                        <span className="px-3 py-1 bg-space-blue/40 text-star-white text-sm rounded-full">
                          🪐 {mission.planet}
                        </span>
                      )}
                    </div>

                    {/* 學習技能 */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-energy-cyan mb-2">🎯 學習技能</h4>
                      <div className="flex flex-wrap gap-2">
                        {mission.skills.map((skill: string, idx: number) => (
                          <span key={idx} className="px-2 py-1 bg-space-blue/40 text-star-white/80 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 學習目標 */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold text-energy-cyan mb-2">📋 學習目標</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {mission.objectives.map((obj: string, idx: number) => (
                          <li key={idx} className="text-xs text-star-white/70 flex items-start gap-2">
                            <span className="text-energy-cyan mt-0.5">▸</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 實際應用 */}
                    {'useCases' in mission && mission.useCases && mission.useCases.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-energy-cyan mb-2">💼 實際應用</h4>
                        <div className="flex flex-wrap gap-2">
                          {mission.useCases.map((useCase: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-energy-purple/20 text-energy-purple text-xs rounded">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 獎勵 */}
                    <div>
                      <h4 className="text-sm font-bold text-energy-cyan mb-2">🎁 完成獎勵</h4>
                      <div className="flex flex-wrap gap-2">
                        {mission.rewards.map((reward: string, idx: number) => (
                          <span key={idx} className="text-xs text-star-white/80">
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 p-8 rounded-xl bg-gradient-to-r from-energy-cyan/10 via-energy-purple/10 to-energy-cyan/10 backdrop-blur-sm border border-energy-cyan/30"
        >
          <h3 className="text-3xl font-bold text-center mb-6 text-glow">準備開始你的 AI 探險之旅？</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded-lg bg-space-dark/50">
              <div className="text-3xl mb-2">🎓</div>
              <div className="text-2xl font-bold text-energy-cyan mb-1">10</div>
              <div className="text-sm text-star-white/60">完整任務</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-space-dark/50">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="text-2xl font-bold text-energy-cyan mb-1">72-92</div>
              <div className="text-sm text-star-white/60">學習時數</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-space-dark/50">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-energy-cyan mb-1">2,700</div>
              <div className="text-sm text-star-white/60">總探險點數</div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-star-white/70 mb-6">
              跟著 Joseph 指揮官，從月球基地到太陽系，系統化掌握 AI 技術！
            </p>
            <a
              href="mailto:future.ark.ai@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-energy-cyan to-energy-purple text-space-dark font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <span>📧</span>
              <span>立即聯絡報名</span>
            </a>
            <p className="text-sm text-star-white/50 mt-4">
              📧 Email: future.ark.ai@gmail.com | 👨‍🚀 指揮官：Joseph
            </p>
          </div>
        </motion.div>
      </div>

      {/* 返回首頁 */}
      <Link 
        href="/"
        className="fixed bottom-8 right-8 z-30 w-14 h-14 rounded-full bg-energy-cyan/20 backdrop-blur-md border border-energy-cyan/50 flex items-center justify-center hover:bg-energy-cyan/30 hover:scale-110 transition-all duration-300 group"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">🏠</span>
      </Link>
    </main>
  );
}
