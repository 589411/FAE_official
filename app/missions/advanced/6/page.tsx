'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const uranusNeptuneMissionConfig: MissionConfig = {
  id: 6,
  title: { zh: '天王星與海王星：AI前沿應用前瞻', en: 'Uranus & Neptune: AI Frontier Applications' },
  icon: '⛢',
  sections: {
    zh: [
      { id: 'intro', title: '外太陽系：前沿探索與未來願景', content: '歡迎來到外太陽系！神秘的天王星和海王星象徵著前沿探索與未來願景。在這個終極任務中，你將探索 AI 最前沿技術：AGI、多模態 AI、AI Agent、自主系統，成為 AI 領域先驅。', type: 'text' },
      { id: 'agi', title: 'AGI 與未來 AI 發展', content: '通用人工智慧 (AGI) 是能夠執行任何人類智力任務的 AI 系統。了解 AGI 的發展趨勢、技術挑戰和潛在影響，為未來做好準備。', type: 'text' },
      { id: 'multimodal', title: '多模態 AI 應用', content: '多模態 AI 能夠處理文字、圖像、語音、影片等多種數據類型。學習如何整合不同模態，創造更智能的應用。工具：GPT-4V, Gemini, Claude 3。', type: 'text' },
      { id: 'ai-agents', title: 'AI Agent 系統', content: 'AI Agent 是能夠自主執行任務、做出決策的智能系統。學習設計和部署 AI Agent，實現自動化工作流程。', type: 'text' },
      { id: 'future-trends', title: 'AI 未來趨勢', content: '探索 AI 在各領域的未來可能性：醫療、教育、科研、創意產業。了解倫理考量和負責任的 AI 開發。', type: 'text' },
      { id: 'quiz', title: '終極評估', content: '測試你對 AI 前沿技術的理解', type: 'quiz' }
    ],
    en: [
      { id: 'intro', title: 'Outer Solar System: Frontier Exploration', content: 'Welcome to the outer solar system! Mysterious Uranus and Neptune symbolize frontier exploration. Explore cutting-edge AI: AGI, multimodal AI, AI Agents, and autonomous systems.', type: 'text' },
      { id: 'agi', title: 'AGI & Future AI Development', content: 'Artificial General Intelligence (AGI) can perform any human intellectual task. Understand AGI trends, challenges, and potential impacts.', type: 'text' },
      { id: 'multimodal', title: 'Multimodal AI Applications', content: 'Multimodal AI processes text, images, voice, video, etc. Learn to integrate different modalities. Tools: GPT-4V, Gemini, Claude 3.', type: 'text' },
      { id: 'ai-agents', title: 'AI Agent Systems', content: 'AI Agents autonomously execute tasks and make decisions. Learn to design and deploy AI Agents for automated workflows.', type: 'text' },
      { id: 'future-trends', title: 'AI Future Trends', content: 'Explore AI possibilities in healthcare, education, research, creative industries. Understand ethical considerations and responsible AI development.', type: 'text' },
      { id: 'quiz', title: 'Ultimate Assessment', content: 'Test your understanding of cutting-edge AI', type: 'quiz' }
    ]
  },
  quiz: {
    zh: [
      { id: 'q1', question: 'AGI 與當前 AI 的主要區別是？', options: ['速度更快', '能執行任何人類智力任務', '只是名稱不同', '成本更低'], correct: 1 },
      { id: 'q2', question: '多模態 AI 的優勢是什麼？', options: ['只處理文字', '整合多種數據類型，理解更全面', '速度最快', '最便宜'], correct: 1 },
      { id: 'q3', question: 'AI Agent 的核心特徵是？', options: ['被動響應', '自主執行任務和決策', '只能聊天', '需要持續監督'], correct: 1 }
    ],
    en: [
      { id: 'q1', question: 'What is the main difference between AGI and current AI?', options: ['Faster speed', 'Can perform any human intellectual task', 'Just a different name', 'Lower cost'], correct: 1 },
      { id: 'q2', question: 'What is the advantage of multimodal AI?', options: ['Only processes text', 'Integrates multiple data types for comprehensive understanding', 'Fastest speed', 'Cheapest'], correct: 1 },
      { id: 'q3', question: 'What is the core characteristic of AI Agents?', options: ['Passive response', 'Autonomous task execution and decision-making', 'Only chatting', 'Requires constant supervision'], correct: 1 }
    ]
  },
  rewards: { zh: ['🏅 太陽系征服者徽章', '🚀 AI 先驅證書', '🌟 終極獎勵包'], en: ['🏅 Solar System Conqueror Badge', '🚀 AI Pioneer Certificate', '🌟 Ultimate Reward Pack'] },
  points: 600
};

export default function UranusNeptuneMissionPage() {
  return <MissionTemplate config={uranusNeptuneMissionConfig} />;
}
