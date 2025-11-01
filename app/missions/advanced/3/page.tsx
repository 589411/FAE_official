'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const marsMissionConfig: MissionConfig = {
  id: 3,
  title: { zh: '火星任務：AI行銷與自動化應用', en: 'Mars Mission: AI Marketing & Automation' },
  icon: '♂️',
  sections: {
    zh: [
      { id: 'intro', title: '火星：行動力與執行力', content: '歡迎來到火星！紅色行星象徵著行動力與執行力。在這個任務中，你將學習如何運用 AI 優化行銷流程、內容策略、客戶經營與數據分析，打造智能行銷系統。', type: 'text' },
      {
        id: 'content-marketing',
        title: '內容行銷自動化',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">AI 驅動的內容行銷系統：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">📝</div>
                <h5 className="text-energy-cyan font-bold mb-2">內容規劃</h5>
                <p className="text-sm text-star-white/70">使用 AI 分析趨勢，規劃內容日曆和主題</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">✍️</div>
                <h5 className="text-energy-cyan font-bold mb-2">內容生成</h5>
                <p className="text-sm text-star-white/70">自動生成部落格、社群貼文、電子報</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="text-energy-cyan font-bold mb-2">SEO 優化</h5>
                <p className="text-sm text-star-white/70">關鍵字研究、標題優化、meta 描述生成</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="text-energy-cyan font-bold mb-2">成效追蹤</h5>
                <p className="text-sm text-star-white/70">分析內容表現，持續優化策略</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'social-automation',
        title: '社群媒體自動化',
        content: `AI 社群管理系統：

📱 多平台管理
• 統一管理太空探索社群平台
• 自動排程太空任務更新
• 跨平台太空內容調整

💬 互動自動化
• 自動回覆太空探索問題
• 任務情緒分析和適當回應
• 太空危機預警和處理

📈 數據分析
• 追蹤太空內容互動率、觸及率
• 最佳太空新聞發布時間分析
• 太空愛好者洞察報告`,
        type: 'text'
      },
      {
        id: 'customer-segmentation',
        title: '客戶分群與精準行銷',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">使用 AI 進行智能客戶分群：</p>
            <div className="p-6 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-4">🎯 分群策略</h4>
              <div className="space-y-3">
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">行為分群</div>
                  <div className="text-sm text-star-white/70">根據購買行為、瀏覽記錄、互動模式分類</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">價值分群</div>
                  <div className="text-sm text-star-white/70">RFM 分析：最近購買、頻率、金額</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">興趣分群</div>
                  <div className="text-sm text-star-white/70">基於內容偏好和興趣標籤</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">生命週期分群</div>
                  <div className="text-sm text-star-white/70">新客、活躍客、沉睡客、流失客</div>
                </div>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'email-marketing',
        title: 'Email 行銷自動化',
        content: `AI 驅動的 Email 行銷：

✉️ 個人化內容
• 根據太空愛好者資料自動調整內容
• 動態太空任務推薦
• 個人化太空主旨和問候語

⏰ 智能發送時機
• 分析最佳太空新聞發送時間
• 根據全球時區自動調整
• 太空事件觸發式通知

📊 A/B 測試自動化
• 自動測試不同太空內容版本
• AI 分析最佳太空主題方案
• 持續優化太空內容參與率`,
        type: 'text'
      },
      {
        id: 'performance-tracking',
        title: '行銷成效追蹤',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">建立數據驅動的行銷決策流程：</p>
            <div className="grid gap-3">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">📊 關鍵指標追蹤</h5>
                <p className="text-sm text-star-white/70">CAC、LTV、ROI、轉換率等核心指標</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🔍 歸因分析</h5>
                <p className="text-sm text-star-white/70">了解哪些渠道和活動帶來轉換</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">📈 預測分析</h5>
                <p className="text-sm text-star-white/70">預測趨勢、預算分配建議</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      { id: 'quiz', title: '火星任務評估', content: '測試你對 AI 行銷與自動化的掌握', type: 'quiz' }
    ],
    en: [
      { id: 'intro', title: 'Mars: Action and Execution', content: 'Welcome to Mars! The Red Planet symbolizes action and execution. Learn to optimize marketing processes, content strategy, customer management, and data analysis with AI.', type: 'text' },
      { id: 'content-marketing', title: 'Content Marketing Automation', content: 'AI-driven content marketing: planning, generation, SEO optimization, and performance tracking.', type: 'text' },
      { id: 'social-automation', title: 'Social Media Automation', content: 'AI social management: multi-platform management, interaction automation, and data analysis.', type: 'text' },
      { id: 'customer-segmentation', title: 'Customer Segmentation & Precision Marketing', content: 'Smart customer segmentation: behavioral, value, interest, and lifecycle segmentation.', type: 'text' },
      { id: 'email-marketing', title: 'Email Marketing Automation', content: 'AI-driven email marketing: personalized content, smart timing, and A/B testing automation.', type: 'text' },
      { id: 'performance-tracking', title: 'Marketing Performance Tracking', content: 'Data-driven marketing decisions: KPI tracking, attribution analysis, and predictive analytics.', type: 'text' },
      { id: 'quiz', title: 'Mars Mission Assessment', content: 'Test your mastery of AI marketing and automation', type: 'quiz' }
    ]
  },
  quiz: {
    zh: [
      { id: 'q1', question: 'RFM 分析中的三個維度是什麼？', options: ['收入、頻率、市場', '最近購買、頻率、金額', '範圍、功能、方法', '風險、回報、管理'], correct: 1, explanation: 'RFM 代表 Recency（最近購買）、Frequency（頻率）、Monetary（金額），是客戶價值分析的重要方法。' },
      { id: 'q2', question: 'AI 在 SEO 優化中最有幫助的是？', options: ['完全取代 SEO 專家', '關鍵字研究和內容優化建議', '保證排名第一', '自動購買廣告'], correct: 1 },
      { id: 'q3', question: '行為觸發式郵件的優勢是什麼？', options: ['發送成本最低', '在最相關的時機發送個人化內容', '可以發送給所有人', '不需要任何設定'], correct: 1 },
      { id: 'q4', question: '客戶生命週期分群通常包含哪些階段？', options: ['只有新客和老客', '新客、活躍客、沉睡客、流失客', '只按購買金額分', '隨機分組'], correct: 1 }
    ],
    en: [
      { id: 'q1', question: 'What are the three dimensions in RFM analysis?', options: ['Revenue, Frequency, Market', 'Recency, Frequency, Monetary', 'Range, Function, Method', 'Risk, Return, Management'], correct: 1, explanation: 'RFM stands for Recency, Frequency, and Monetary value, an important method for customer value analysis.' },
      { id: 'q2', question: 'How is AI most helpful in SEO optimization?', options: ['Completely replacing SEO experts', 'Keyword research and content optimization suggestions', 'Guaranteeing first place ranking', 'Automatically buying ads'], correct: 1 },
      { id: 'q3', question: 'What is the advantage of behavior-triggered emails?', options: ['Lowest sending cost', 'Sending personalized content at the most relevant time', 'Can send to everyone', 'No setup required'], correct: 1 },
      { id: 'q4', question: 'What stages are typically included in customer lifecycle segmentation?', options: ['Only new and old customers', 'New, active, dormant, churned customers', 'Only by purchase amount', 'Random grouping'], correct: 1 }
    ]
  },
  rewards: { zh: ['🎖️ 火星征服者徽章', '📊 行銷自動化套件', '🎯 客戶分群工具'], en: ['🎖️ Mars Conqueror Badge', '📊 Marketing Automation Suite', '🎯 Customer Segmentation Tool'] },
  points: 400
};

export default function MarsMissionPage() {
  return <MissionTemplate config={marsMissionConfig} />;
}
