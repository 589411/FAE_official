'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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
    'mission.difficulty.intermediate': '中級',
    'mission.difficulty.advanced': '進階',
    'mission.difficulty.expert': '專家',
    
    // AI 聊天
    'chat.title': 'ARK-01 AI 助手',
    'chat.placeholder': '輸入訊息...',
    'chat.send': '發送',
    'chat.welcome1': '你好！我是 ARK-01 的 AI 助手',
    'chat.welcome2': '有什麼關於 AI 學習的問題嗎？',
    'chat.error': '抱歉，通訊暫時中斷。請稍後再試。',
  },
  en: {
    // Home
    'home.title': 'Future Ark Explorers',
    'home.subtitle': 'Unlock Infinite Possibilities with AI in the Multiverse',
    'home.startMission': 'Start Mission',
    'home.advancedMission': 'Advanced Missions',
    
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
    
    // AI Chat
    'chat.title': 'ARK-01 AI Assistant',
    'chat.placeholder': 'Type a message...',
    'chat.send': 'Send',
    'chat.welcome1': 'Hello! I\'m the ARK-01 AI Assistant',
    'chat.welcome2': 'Any questions about AI learning?',
    'chat.error': 'Sorry, communication temporarily interrupted. Please try again later.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
