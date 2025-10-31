'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

type DifficultyLevel = 'intermediate' | 'advanced' | 'expert';

interface Mission {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  planet: string;
  planetInfo: string;
  difficulty: DifficultyLevel;
  status: string;
  duration: string;
  points: number;
  prerequisites: string[];
  skills: string[];
  objectives: string[];
  useCases: string[];
  rewards: string[];
}

const advancedMissions: Mission[] = [
  {
    id: 1,
    title: '水星行動：AI文字與對話應用',
    subtitle: 'Mercury Mission | Text & Dialogue',
    description: '掌握進階 Prompt 工程、對話系統設計、內容生成與文案優化，打造智能化的文字應用',
    icon: '☿️',
    planet: 'Mercury',
    planetInfo: '水星：距離太陽最近的行星，象徵快速溝通與訊息傳遞',
    difficulty: 'intermediate',
    status: 'available',
    duration: '6-8 小時',
    points: 300,
    prerequisites: ['完成所有基礎任務'],
    skills: ['進階 Prompt', '對話設計', '文案優化', 'API 整合'],
    objectives: [
      '掌握進階 Prompt Engineering 技巧',
      '設計與實作 AI 對話機器人',
      '學會使用 AI 進行內容創作與改寫',
      '整合 ChatGPT API 到應用程式'
    ],
    useCases: ['智能客服', '內容生成', '文案優化', '自動回覆'],
    rewards: ['🎖️ 水星使者徽章', '⭐ 300 探險點數', '🤖 AI 對話模板庫']
  },
  {
    id: 2,
    title: '金星探索：AI視覺與圖像生成',
    subtitle: 'Venus Mission | Visual & Image',
    description: '學習 AI 圖像生成、圖片編輯、視覺設計與品牌視覺應用，釋放視覺創意的無限可能',
    icon: '♀️',
    planet: 'Venus',
    planetInfo: '金星：太陽系最明亮的行星，象徵美學與視覺藝術',
    difficulty: 'intermediate',
    status: 'available',
    duration: '7-9 小時',
    points: 350,
    prerequisites: ['完成水星任務'],
    skills: ['AI 繪圖', '圖像編輯', '視覺設計', '風格轉換'],
    objectives: [
      '掌握 Midjourney, DALL-E, Stable Diffusion',
      '學會 AI 輔助視覺設計流程',
      '創作品牌視覺與行銷素材',
      '掌握圖像風格轉換技術'
    ],
    useCases: ['品牌設計', '行銷素材', '社群圖文', '產品視覺'],
    rewards: ['🎖️ 金星藝術家徽章', '⭐ 350 探險點數', '🎨 AI 視覺工具包']
  },
  {
    id: 3,
    title: '火星任務：AI行銷與自動化應用',
    subtitle: 'Mars Mission | Marketing & Automation',
    description: '運用 AI 優化行銷流程、內容策略、客戶經營與數據分析，打造智能行銷系統',
    icon: '♂️',
    planet: 'Mars',
    planetInfo: '火星：紅色行星，象徵行動力與執行力',
    difficulty: 'advanced',
    status: 'available',
    duration: '8-10 小時',
    points: 400,
    prerequisites: ['完成水星與金星任務'],
    skills: ['行銷自動化', 'SEO 優化', '客戶分析', '成效追蹤'],
    objectives: [
      '使用 AI 建立內容行銷系統',
      '自動化社群媒體管理與發文',
      '利用 AI 進行客戶分群與精準行銷',
      '建立數據驅動的行銷決策流程'
    ],
    useCases: ['內容行銷', '社群管理', 'Email 行銷', '客戶經營'],
    rewards: ['🎖️ 火星征服者徽章', '⭐ 400 探險點數', '📊 行銷自動化套件']
  },
  {
    id: 4,
    title: '木星航道：AI資料分析與洞察',
    subtitle: 'Jupiter Mission | Data & Insights',
    description: '深入大數據分析、預測模型、商業智能與決策支持，成為數據科學家',
    icon: '♃',
    planet: 'Jupiter',
    planetInfo: '木星：太陽系最大的行星，象徵幾大數據與深度洞察',
    difficulty: 'advanced',
    status: 'available',
    duration: '10-12 小時',
    points: 450,
    prerequisites: ['完成火星任務'],
    skills: ['數據挖掘', '預測分析', '商業智能', '視覺化報表'],
    objectives: [
      '使用 AI 進行進階數據分析',
      '建立預測模型與趨勢分析',
      '創建互動式數據儀表板',
      '產出可執行的商業洞察報告'
    ],
    useCases: ['業務分析', '趨勢預測', '風險評估', '決策支持'],
    rewards: ['🎖️ 木星分析師徽章', '⭐ 450 探險點數', '📊 數據科學工具箱']
  },
  {
    id: 5,
    title: '土星工坊：AI語音與多媒體應用',
    subtitle: 'Saturn Mission | Voice & Multimedia',
    description: '探索 AI 語音合成、音樂生成、影片製作與多媒體整合，打造沉浸式體驗',
    icon: '♄',
    planet: 'Saturn',
    planetInfo: '土星：擁有壯麗光環，象徵多元媒體與豐富內容',
    difficulty: 'expert',
    status: 'available',
    duration: '12-15 小時',
    points: 500,
    prerequisites: ['完成木星任務'],
    skills: ['AI 語音', '音樂生成', '影片製作', '多媒體整合'],
    objectives: [
      '掌握 AI 語音合成與識別技術',
      '使用 AI 生成音樂與音效',
      '創作 AI 輔助的影片內容',
      '整合多種 AI 工具打造完整專案'
    ],
    useCases: ['有聲書', 'Podcast', '影片配音', '多媒體創作'],
    rewards: ['🎖️ 土星創作者徽章', '⭐ 500 探險點數', '🎧多媒體創作套件']
  },
  {
    id: 6,
    title: '天王星與海王星：AI前沿應用前瞻',
    subtitle: 'Uranus & Neptune | Future Tech',
    description: '探索 AI 最前沿技術：AGI、多模態 AI、AI Agent、自主系統，成為 AI 領域先驅',
    icon: '⛢',
    planet: 'Uranus & Neptune',
    planetInfo: '外太陽系：神秘的遠方行星，象徵前沿探索與未來願景',
    difficulty: 'expert',
    status: 'available',
    duration: '15-20 小時',
    points: 600,
    prerequisites: ['完成所有前置任務'],
    skills: ['AGI 概念', '多模態 AI', 'AI Agent', '未來趨勢'],
    objectives: [
      '了解 AGI 與未來 AI 發展趨勢',
      '學習多模態 AI 模型的應用',
      '建立自主 AI Agent 系統',
      '探索 AI 在各領域的未來可能性'
    ],
    useCases: ['自主系統', '智能助理', '跨模態應用', '未來場景'],
    rewards: ['🏅 太陽系征服者徽章', '⭐ 600 探險點數', '🚀 AI 先驅證書', '🌟 終極獎勵包']
  }
];

const difficultyColors: Record<DifficultyLevel, string> = {
  intermediate: 'text-green-400 bg-green-400/20',
  advanced: 'text-yellow-400 bg-yellow-400/20',
  expert: 'text-red-400 bg-red-400/20'
};

const difficultyLabels: Record<DifficultyLevel, string> = {
  intermediate: '中階',
  advanced: '進階',
  expert: '專家'
};

export default function AdvancedMissionsPage() {
  const { t } = useLanguage();
  const [showContent, setShowContent] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const totalPoints = advancedMissions.reduce((sum, m) => sum + m.points, 0);
  const totalDuration = '58-74 小時';

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
              <span>{totalPoints} 點數</span>
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
                  <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[mission.difficulty]}`}>
                    {difficultyLabels[mission.difficulty]}
                  </span>
                  <span className="px-2 py-1 rounded bg-space-purple/30 text-star-white/70 text-xs">
                    ⏱️ {mission.duration}
                  </span>
                  <span className="px-2 py-1 rounded bg-energy-purple/20 text-energy-purple text-xs font-medium">
                    ⭐ {mission.points} 點
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
                      <h4 className="text-xs font-bold text-energy-purple mb-1">🔐 先決條件</h4>
                      <div className="space-y-1">
                        {mission.prerequisites.map((prereq, idx) => (
                          <div key={idx} className="text-xs text-star-white/70">• {prereq}</div>
                        ))}
                      </div>
                    </div>

                    {/* 學習技能 */}
                    <div>
                      <h4 className="text-xs font-bold text-energy-purple mb-1">🎯 學習技能</h4>
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
                      <h4 className="text-xs font-bold text-energy-purple mb-1">💼 實戰應用</h4>
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
                      <h4 className="text-xs font-bold text-energy-purple mb-1">📋 學習目標</h4>
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
                      <h4 className="text-xs font-bold text-energy-purple mb-1">🎁 任務獎勵</h4>
                      <div className="space-y-0.5">
                        {mission.rewards.map((reward, idx) => (
                          <div key={idx} className="text-xs text-star-white/80">
                            {reward}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 開始按鈕 */}
                    <button className="w-full mt-3 px-4 py-2 bg-energy-purple text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-purple/50 text-sm">
                      開始任務 →
                    </button>
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
