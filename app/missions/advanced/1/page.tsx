'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const mercuryMissionConfig: MissionConfig = {
  id: 1,
  title: { zh: '水星行動：AI文字與對話應用', en: 'Mercury Mission: AI Text & Dialogue Applications' },
  icon: '☿️',
  sections: {
    zh: [
      {
        id: 'intro',
        title: '水星：快速溝通的藝術',
        content: '歡迎來到水星！作為距離太陽最近的行星，水星象徵著快速、精準的溝通。在這個任務中，你將掌握進階的 Prompt 工程技巧，學會設計智能對話系統。',
        type: 'text'
      },
      {
        id: 'advanced-prompts',
        title: '進階 Prompt Engineering',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">進階 Prompt 技巧讓你的 AI 輸出更精準、更專業：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🎯 角色設定</h5>
                <p className="text-sm text-star-white/70">讓 AI 扮演特定角色，如專家、顧問、教師</p>
                <div className="mt-2 p-2 bg-space-dark/50 rounded text-xs text-energy-cyan">
                  "你是一位資深的太空探索專家..."
                </div>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">📝 Few-Shot Learning</h5>
                <p className="text-sm text-star-white/70">提供範例讓 AI 學習你想要的格式</p>
                <div className="mt-2 p-2 bg-space-dark/50 rounded text-xs text-energy-cyan">
                  "範例1: ... 範例2: ..."
                </div>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🔗 Chain of Thought</h5>
                <p className="text-sm text-star-white/70">引導 AI 逐步思考，提高推理品質</p>
                <div className="mt-2 p-2 bg-space-dark/50 rounded text-xs text-energy-cyan">
                  "讓我們一步步分析..."
                </div>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">⚙️ 參數控制</h5>
                <p className="text-sm text-star-white/70">調整溫度、長度等參數優化輸出</p>
                <div className="mt-2 p-2 bg-space-dark/50 rounded text-xs text-energy-cyan">
                  "temperature=0.7, max_tokens=500"
                </div>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'dialogue-design',
        title: '對話系統設計',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">設計優秀的 AI 對話系統需要考慮：</p>
            <div className="p-6 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-4">🤖 對話設計原則</h4>
              <ul className="space-y-3 text-star-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">1.</span>
                  <div>
                    <strong className="text-star-white">清晰的目標：</strong>
                    <span className="ml-2">明確對話機器人的用途和能力範圍</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">2.</span>
                  <div>
                    <strong className="text-star-white">個性化：</strong>
                    <span className="ml-2">賦予機器人獨特的語氣和風格</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">3.</span>
                  <div>
                    <strong className="text-star-white">上下文記憶：</strong>
                    <span className="ml-2">維持對話的連貫性和記憶</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">4.</span>
                  <div>
                    <strong className="text-star-white">錯誤處理：</strong>
                    <span className="ml-2">優雅地處理無法理解的輸入</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">5.</span>
                  <div>
                    <strong className="text-star-white">引導式對話：</strong>
                    <span className="ml-2">主動引導用戶完成任務</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'content-generation',
        title: '內容創作與改寫',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">AI 在內容創作中的應用場景：</p>
            <div className="grid gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">✍️</span>
                  <h5 className="text-energy-cyan font-bold">文案撰寫</h5>
                </div>
                <p className="text-sm text-star-white/70">廣告文案、產品描述、社群貼文</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔄</span>
                  <h5 className="text-energy-cyan font-bold">內容改寫</h5>
                </div>
                <p className="text-sm text-star-white/70">調整語氣、簡化複雜內容、擴充文章</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📧</span>
                  <h5 className="text-energy-cyan font-bold">郵件撰寫</h5>
                </div>
                <p className="text-sm text-star-white/70">商業郵件、客戶溝通、自動回覆</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📝</span>
                  <h5 className="text-energy-cyan font-bold">摘要生成</h5>
                </div>
                <p className="text-sm text-star-white/70">會議記錄、文章摘要、重點提取</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'api-integration',
        title: 'ChatGPT API 整合',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">將 AI 整合到你的應用程式中：</p>
            <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-3">🔌 API 整合步驟</h4>
              <ol className="space-y-3 text-star-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">Step 1:</span>
                  <span>取得 API Key（從 OpenAI 平台）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">Step 2:</span>
                  <span>選擇合適的模型（GPT-4, GPT-3.5-turbo）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">Step 3:</span>
                  <span>設計 System Prompt 定義行為</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">Step 4:</span>
                  <span>實作對話歷史管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan font-bold">Step 5:</span>
                  <span>處理錯誤和限流</span>
                </li>
              </ol>
            </div>
            <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <p className="text-sm text-star-white/70">
                <span className="text-energy-cyan font-bold">💡 最佳實踐：</span>
                使用環境變數儲存 API Key，實作快取機制降低成本，設定合理的 timeout 和 retry 策略。
              </p>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'use-cases',
        title: '實際應用場景',
        content: `探索 AI 對話系統的實際應用：

🎯 太空任務智能助手
• 24/7 自動回答太空探索問題
• 多語言太空術語支援
• 任務狀態識別和適當回應
• 緊急情況轉接任務控制中心

📱 太空內容生成助手
• 太空探索報告生成
• 任務日誌草稿
• 太空設備描述自動化
• 探索發現優化建議

💼 太空任務應用
• 任務簡報記錄整理
• 太空站通訊自動回覆
• 探索數據摘要生成
• 星際通訊翻譯`,
        type: 'text'
      },
      {
        id: 'quiz',
        title: '水星任務評估',
        content: '測試你對 AI 文字與對話應用的掌握',
        type: 'quiz'
      }
    ],
    en: [
      {
        id: 'intro',
        title: 'Mercury: The Art of Rapid Communication',
        content: 'Welcome to Mercury! As the closest planet to the Sun, Mercury symbolizes fast and precise communication. In this mission, you will master advanced Prompt Engineering techniques and learn to design intelligent dialogue systems.',
        type: 'text'
      },
      {
        id: 'advanced-prompts',
        title: 'Advanced Prompt Engineering',
        content: 'Advanced prompt techniques make your AI output more precise and professional. Learn role-setting, few-shot learning, chain of thought, and parameter control.',
        type: 'text'
      },
      {
        id: 'dialogue-design',
        title: 'Dialogue System Design',
        content: 'Design excellent AI dialogue systems by considering clear goals, personalization, context memory, error handling, and guided conversations.',
        type: 'text'
      },
      {
        id: 'content-generation',
        title: 'Content Creation & Rewriting',
        content: 'AI applications in content creation: copywriting, content rewriting, email writing, and summary generation.',
        type: 'text'
      },
      {
        id: 'api-integration',
        title: 'ChatGPT API Integration',
        content: 'Integrate AI into your applications: get API key, choose model, design system prompt, implement conversation history, and handle errors.',
        type: 'text'
      },
      {
        id: 'use-cases',
        title: 'Real-world Applications',
        content: 'Explore practical applications: smart customer service, content generation assistant, and business applications.',
        type: 'text'
      },
      {
        id: 'quiz',
        title: 'Mercury Mission Assessment',
        content: 'Test your mastery of AI text and dialogue applications',
        type: 'quiz'
      }
    ]
  },
  quiz: {
    zh: [
      {
        id: 'q1',
        question: '什麼是 Few-Shot Learning？',
        options: [
          '只使用很少的數據訓練模型',
          '提供範例讓 AI 學習特定格式或風格',
          '限制 AI 的回答長度',
          '快速生成內容的技巧'
        ],
        correct: 1,
        explanation: 'Few-Shot Learning 是透過提供少量範例，讓 AI 理解並模仿特定的格式、風格或模式。'
      },
      {
        id: 'q2',
        question: '設計對話機器人時，最重要的是什麼？',
        options: [
          '使用最複雜的技術',
          '讓它能回答所有問題',
          '明確定義目標和能力範圍',
          '使用最多的訓練數據'
        ],
        correct: 2,
        explanation: '明確定義對話機器人的目標和能力範圍，可以避免用戶期望過高，並提供更好的使用體驗。'
      },
      {
        id: 'q3',
        question: 'Chain of Thought 提示技巧的作用是什麼？',
        options: [
          '讓 AI 回答更快',
          '引導 AI 逐步思考，提高推理品質',
          '減少 API 調用次數',
          '讓回答更簡短'
        ],
        correct: 1,
        explanation: 'Chain of Thought 透過引導 AI 展示思考過程，可以提高複雜問題的推理品質和準確性。'
      },
      {
        id: 'q4',
        question: '整合 ChatGPT API 時，API Key 應該如何儲存？',
        options: [
          '直接寫在程式碼中',
          '儲存在前端 JavaScript 中',
          '使用環境變數安全儲存',
          '分享給所有團隊成員'
        ],
        correct: 2,
        explanation: 'API Key 應該使用環境變數儲存，避免暴露在程式碼中，確保安全性。'
      },
      {
        id: 'q5',
        question: 'AI 內容生成的最佳應用場景是？',
        options: [
          '完全取代人類創作',
          '作為輔助工具，提供草稿和靈感',
          '只用於翻譯',
          '只用於摘要'
        ],
        correct: 1,
        explanation: 'AI 最適合作為輔助工具，幫助生成草稿、提供靈感，最終仍需要人類的判斷和編輯。'
      }
    ],
    en: [
      {
        id: 'q1',
        question: 'What is Few-Shot Learning?',
        options: [
          'Training models with very little data',
          'Providing examples for AI to learn specific formats or styles',
          'Limiting AI response length',
          'A technique for fast content generation'
        ],
        correct: 1,
        explanation: 'Few-Shot Learning involves providing a few examples to help AI understand and mimic specific formats, styles, or patterns.'
      },
      {
        id: 'q2',
        question: 'What is most important when designing a chatbot?',
        options: [
          'Using the most complex technology',
          'Making it answer all questions',
          'Clearly defining goals and capability scope',
          'Using the most training data'
        ],
        correct: 2,
        explanation: 'Clearly defining the chatbot\'s goals and capabilities helps manage user expectations and provides a better experience.'
      },
      {
        id: 'q3',
        question: 'What is the purpose of Chain of Thought prompting?',
        options: [
          'Making AI respond faster',
          'Guiding AI to think step-by-step, improving reasoning quality',
          'Reducing API calls',
          'Making responses shorter'
        ],
        correct: 1,
        explanation: 'Chain of Thought improves reasoning quality for complex problems by guiding AI to show its thinking process.'
      },
      {
        id: 'q4',
        question: 'How should API Keys be stored when integrating ChatGPT API?',
        options: [
          'Directly in the code',
          'In frontend JavaScript',
          'Securely using environment variables',
          'Shared with all team members'
        ],
        correct: 2,
        explanation: 'API Keys should be stored using environment variables to avoid exposure in code and ensure security.'
      },
      {
        id: 'q5',
        question: 'What is the best use case for AI content generation?',
        options: [
          'Completely replacing human creators',
          'As an assistant tool providing drafts and inspiration',
          'Only for translation',
          'Only for summarization'
        ],
        correct: 1,
        explanation: 'AI works best as an assistant tool to generate drafts and provide inspiration, with final human judgment and editing.'
      }
    ]
  },
  rewards: {
    zh: ['🎖️ 水星使者徽章', '🤖 AI 對話模板庫', '📚 進階 Prompt 手冊'],
    en: ['🎖️ Mercury Messenger Badge', '🤖 AI Dialogue Template Library', '📚 Advanced Prompt Handbook']
  },
  points: 300
};

export default function MercuryMissionPage() {
  return <MissionTemplate config={mercuryMissionConfig} />;
}
