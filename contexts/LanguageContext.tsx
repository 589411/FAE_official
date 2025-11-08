'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻譯字典
const translations = {
  zh: {
    // 首頁
    'home.title': '未來方舟探險隊',
    'home.subtitle': '用 AI 開啟多元宇宙的無限可能',
    'home.startMission': '開始探險',
    'home.advancedMission': '進階任務',
    'home.curriculum': '完整課程',
    
    // 導航
    'nav.home': '首頁',
    'nav.basic': '基礎任務',
    'nav.advanced': '進階任務',
    
    // 指揮官資訊
    'crew.title': '任務指揮官',
    'crew.joseph.title': 'Joseph',
    'crew.joseph.role': '指揮官',
    'crew.joseph.desc': '你的任務指揮官，將帶領你完成所有太空探險任務，掌握 AI 技術',
    'crew.joy.title': 'Joy',
    'crew.joy.role': '特別來賓',
    'crew.joy.desc': '11 歲的年輕探險家，會在特定任務中以特別來賓身份出現，分享她的學習心得',
    'crew.motto': '跟著 Joseph 指揮官，探索 AI 的無限可能',
    
    // 基礎任務
    'basic.title': '基礎任務與挑戰',
    'basic.subtitle': '開啟你的 AI 探險之旅，掌握基礎技能',
    'basic.welcome': '歡迎加入未來方舟探險隊！我是你的任務指揮官 Joseph，將帶領你從月球基地開始，一步步掌握 AI 技術。準備好開始你的探險之旅了嗎？',
    'basic.missions': '個任務',
    'basic.hours': '小時',
    'basic.points': '點數',
    
    // 進階任務
    'advanced.title': '進階任務與專業挑戰',
    'advanced.subtitle': '征服太陽系，成為 AI 領域的專家',
    'advanced.welcome': '恭喜完成月球基地的訓練！現在是時候挑戰更遠的星球了。跟著我，我們將征服整個太陽系，成為真正的 AI 專家！',
    'advanced.planets': '個星球',
    
    // 任務卡片
    'mission.duration': '時長',
    'mission.difficulty': '難度',
    'mission.points': '點數',
    'mission.skills': '技能',
    'mission.objectives': '學習目標',
    'mission.rewards': '獎勵',
    'mission.startMission': '開始任務',
    'mission.difficulty.beginner': '入門',
    'mission.difficulty.intermediate': '進階',
    'mission.difficulty.advanced': '高級',
    'mission.difficulty.expert': '專家',
    'mission.clickDetails': '點擊查看詳情',
    'mission.learningSkills': '學習技能',
    'mission.learningObjectives': '學習目標',
    'mission.missionRewards': '任務獎勵',
    'mission.startMissionBtn': '開始任務',
    
    // 基礎任務頁面
    'basic.completeTitle': '完成所有任務，解鎖進階挑戰',
    'basic.badgeRewards': '徽章獎勵',
    'basic.totalPoints': '總探險點數',
    'basic.advancedPass': '進階通行證',
    'basic.completeDesc': '完成基礎任務後，你將獲得',
    'basic.conquerorTitle': '「月球征服者」',
    'basic.completeDesc2': '稱號，並解鎖通往太陽系的進階探險之旅！',
    'basic.previewAdvanced': '預覽進階任務',
    
    // 進階任務頁面
    'advanced.prerequisites': '先決條件',
    'advanced.useCases': '實戰應用',
    
    // AI 聊天
    'chat.title': 'ARK-01 AI 助手',
    'chat.placeholder': '輸入訊息...',
    'chat.send': '發送',
    'chat.welcome1': '你好！我是 ARK-01 的 AI 助手',
    'chat.welcome2': '有什麼關於 AI 學習的問題嗎？',
    'chat.error': '抱歉，通訊暫時中斷。請稍後再試。',
    
    // HUD 系統
    'hud.online': 'ARK-01 在線',
    'hud.missionDays': '任務天數',
    'hud.systemTime': '系統時間',
    'hud.status': '狀態',
    'hud.operational': '正常運行',
    'hud.days': '天',
    
    // 課程頁面
    'curriculum.title': '完整課程大綱',
    'curriculum.subtitle': '系統化學習 AI，從基礎到進階的完整學習路徑',
    'curriculum.missions': '個任務',
    'curriculum.hours': '小時',
    'curriculum.certification': '完整認證',
    'curriculum.contact': '聯絡 Joseph 指揮官報名',
    'curriculum.all': '完整課程',
    'curriculum.basic': '基礎課程',
    'curriculum.advanced': '進階課程',
    
    // 任務日誌
    'log.001.title': '月球軌道進入成功',
    'log.001.content': '太空船 ARK-01 成功進入月球軌道。開始進行 AI 基礎能力訓練任務。',
    'log.002.title': 'Prompt Engineering 實戰完成',
    'log.002.content': '完成了 AI 對話技巧訓練。學員們成功掌握了如何與 AI 進行有效溝通。',
    'log.003.title': '數據分析任務達成',
    'log.003.content': '利用 AI 工具成功分析了月球表面數據，發現了新的學習模式。',
    'log.004.title': '火星航道規劃中',
    'log.004.content': '準備進入火星任務階段，將開始 AI 行銷與自動化應用的學習。',
  },
  en: {
    // Home
    'home.title': 'Future Ark Explorers',
    'home.subtitle': 'Unlock Infinite Possibilities with AI in the Multiverse',
    'home.startMission': 'Start Mission',
    'home.advancedMission': 'Advanced Missions',
    'home.curriculum': 'Full Curriculum',
    
    // Navigation
    'nav.home': 'Home',
    'nav.basic': 'Basic Missions',
    'nav.advanced': 'Advanced Missions',
    
    // Crew Info
    'crew.title': 'Mission Commander',
    'crew.joseph.title': 'Joseph',
    'crew.joseph.role': 'Commander',
    'crew.joseph.desc': 'Your mission commander who will guide you through all space exploration missions and master AI technology',
    'crew.joy.title': 'Joy',
    'crew.joy.role': 'Special Guest',
    'crew.joy.desc': '11-year-old young explorer who will appear as a special guest in specific missions to share her learning insights',
    'crew.motto': 'Follow Commander Joseph to explore infinite AI possibilities',
    
    // Basic Missions
    'basic.title': 'Basic Missions & Challenges',
    'basic.subtitle': 'Begin your AI exploration journey and master fundamental skills',
    'basic.welcome': 'Welcome to Future Ark Explorers! I\'m Commander Joseph, your mission commander. I will guide you from the Lunar Base to master AI technology step by step. Ready to start your exploration journey?',
    'basic.missions': 'Missions',
    'basic.hours': 'Hours',
    'basic.points': 'Points',
    
    // Advanced Missions
    'advanced.title': 'Advanced Missions & Professional Challenges',
    'advanced.subtitle': 'Conquer the Solar System and become an AI expert',
    'advanced.welcome': 'Congratulations on completing the Lunar Base training! Now it\'s time to challenge more distant planets. Follow me, and we\'ll conquer the entire Solar System to become true AI experts!',
    'advanced.planets': 'Planets',
    
    // Mission Cards
    'mission.duration': 'Duration',
    'mission.difficulty': 'Difficulty',
    'mission.points': 'Points',
    'mission.skills': 'Skills',
    'mission.objectives': 'Learning Objectives',
    'mission.rewards': 'Rewards',
    'mission.startMission': 'Start Mission',
    'mission.difficulty.beginner': 'Beginner',
    'mission.difficulty.intermediate': 'Intermediate',
    'mission.difficulty.advanced': 'Advanced',
    'mission.difficulty.expert': 'Expert',
    'mission.clickDetails': 'Click for details',
    'mission.learningSkills': 'Learning Skills',
    'mission.learningObjectives': 'Learning Objectives',
    'mission.missionRewards': 'Mission Rewards',
    'mission.startMissionBtn': 'Start Mission',
    
    // Basic Missions Page
    'basic.completeTitle': 'Complete All Missions to Unlock Advanced Challenges',
    'basic.badgeRewards': 'Badge Rewards',
    'basic.totalPoints': 'Total Explorer Points',
    'basic.advancedPass': 'Advanced Pass',
    'basic.completeDesc': 'After completing basic missions, you will earn the',
    'basic.conquerorTitle': '"Lunar Conqueror"',
    'basic.completeDesc2': 'title and unlock the advanced exploration journey to the Solar System!',
    'basic.previewAdvanced': 'Preview Advanced Missions',
    
    // Advanced Missions Page
    'advanced.prerequisites': 'Prerequisites',
    'advanced.useCases': 'Use Cases',
    
    // AI Chat
    'chat.title': 'ARK-01 AI Assistant',
    'chat.placeholder': 'Type a message...',
    'chat.send': 'Send',
    'chat.welcome1': 'Hello! I\'m the ARK-01 AI Assistant',
    'chat.welcome2': 'Any questions about AI learning?',
    'chat.error': 'Sorry, communication temporarily interrupted. Please try again later.',
    
    // HUD System
    'hud.online': 'ARK-01 ONLINE',
    'hud.missionDays': 'Mission Days',
    'hud.systemTime': 'System Time',
    'hud.status': 'Status',
    'hud.operational': 'Operational',
    'hud.days': 'Days',
    
    // Curriculum Page
    'curriculum.title': 'Complete Curriculum',
    'curriculum.subtitle': 'Systematic AI learning path from fundamentals to advanced',
    'curriculum.missions': 'Missions',
    'curriculum.hours': 'Hours',
    'curriculum.certification': 'Full Certification',
    'curriculum.contact': 'Contact Commander Joseph to Enroll',
    'curriculum.all': 'Full Curriculum',
    'curriculum.basic': 'Basic Course',
    'curriculum.advanced': 'Advanced Course',
    
    // Mission Logs
    'log.001.title': 'Lunar Orbit Entry Successful',
    'log.001.content': 'Spaceship ARK-01 successfully entered lunar orbit. Beginning AI fundamentals training mission.',
    'log.002.title': 'Prompt Engineering Practice Completed',
    'log.002.content': 'Completed AI dialogue skills training. Cadets successfully mastered effective AI communication.',
    'log.003.title': 'Data Analysis Mission Achieved',
    'log.003.content': 'Successfully analyzed lunar surface data using AI tools, discovering new learning patterns.',
    'log.004.title': 'Mars Route Planning',
    'log.004.content': 'Preparing to enter Mars mission phase, will begin learning AI marketing and automation applications.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 初始化時總是使用默認語言，避免 hydration 錯誤
  const [language, setLanguage] = useState<Language>('zh');
  const [isClient, setIsClient] = useState(false);

  // 在客戶端掛載後讀取 localStorage
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('fae-language');
      if (savedLanguage === 'en' || savedLanguage === 'zh') {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // 當語言改變時，保存到 localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('fae-language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
