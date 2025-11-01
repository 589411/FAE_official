'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const jupiterMissionConfig: MissionConfig = {
  id: 4,
  title: { zh: '木星航道：AI資料分析與洞察', en: 'Jupiter Route: AI Data Analysis & Insights' },
  icon: '♃',
  sections: {
    zh: [
      { id: 'intro', title: '木星：龐大數據與深度洞察', content: '歡迎來到木星！作為太陽系最大的行星，木星象徵著龐大的數據和深度洞察。在這個任務中，你將深入學習大數據分析、預測模型、商業智能與決策支持，成為數據科學家。', type: 'text' },
      {
        id: 'advanced-analytics',
        title: '進階數據分析',
        content: `AI 驅動的數據分析技術：

🔍 探索性數據分析 (EDA)
• 使用 AI 快速識別太空遙測數據特徵
• 自動生成太空任務統計摘要
• 視覺化軌道數據分布和關聯

📊 多維度分析
• 太空任務時間序列分析
• 探索團隊群組分析
• 任務階段漏斗分析
• 太空站設備留存分析

🎯 因果推論
• 識別太空任務成功的真正因果關係
• 太空實驗 A/B 測試設計和分析
• 控制太空環境變量和混淆因子`,
        type: 'text'
      },
      {
        id: 'predictive-models',
        title: '預測模型與趨勢分析',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">建立 AI 預測模型：</p>
            <div className="grid gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                <h5 className="text-blue-400 font-bold mb-2">📈 需求預測</h5>
                <p className="text-sm text-star-white/70">預測太空物資、燃料、太空人需求</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                <h5 className="text-purple-400 font-bold mb-2">👥 太空人行為預測</h5>
                <p className="text-sm text-star-white/70">任務適應性預測、健康狀態、表現評估</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                <h5 className="text-green-400 font-bold mb-2">⚠️ 風險預測</h5>
                <p className="text-sm text-star-white/70">太空環境風險、設備故障風險、任務風險</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                <h5 className="text-orange-400 font-bold mb-2">🎯 推薦系統</h5>
                <p className="text-sm text-star-white/70">個人化太空任務推薦、訓練內容推薦</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'business-intelligence',
        title: '商業智能儀表板',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">打造互動式數據儀表板：</p>
            <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-4">📊 儀表板設計原則</h4>
              <ul className="space-y-3 text-star-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">1.</span>
                  <div><strong className="text-star-white">清晰的層次結構：</strong>從總覽到細節</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">2.</span>
                  <div><strong className="text-star-white">關鍵指標突出：</strong>KPI 一目了然</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">3.</span>
                  <div><strong className="text-star-white">互動式探索：</strong>支援篩選、鑽取</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">4.</span>
                  <div><strong className="text-star-white">即時更新：</strong>數據自動刷新</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">5.</span>
                  <div><strong className="text-star-white">行動友善：</strong>響應式設計</div>
                </li>
              </ul>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'actionable-insights',
        title: '可執行的商業洞察',
        content: `從數據到決策：

💡 洞察生成
• 使用 AI 自動發現異常和機會
• 生成自然語言洞察報告
• 提供可執行的建議

🎯 決策支持
• 情境模擬和假設分析
• 多方案比較和評估
• 風險評估和緩解策略

📈 持續優化
• 追蹤決策成效
• 學習和改進模型
• 建立反饋循環`,
        type: 'text'
      },
      {
        id: 'tools',
        title: 'AI 數據分析工具',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">常用的 AI 數據分析工具：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🐍 Python + AI</h5>
                <p className="text-sm text-star-white/70">Pandas, NumPy, scikit-learn, TensorFlow</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">📊 BI 工具</h5>
                <p className="text-sm text-star-white/70">Tableau, Power BI, Looker</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🤖 AutoML</h5>
                <p className="text-sm text-star-white/70">Google AutoML, H2O.ai, DataRobot</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">💬 AI 分析助手</h5>
                <p className="text-sm text-star-white/70">ChatGPT Code Interpreter, Claude</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      { id: 'quiz', title: '木星任務評估', content: '測試你對 AI 資料分析與洞察的掌握', type: 'quiz' }
    ],
    en: [
      { id: 'intro', title: 'Jupiter: Massive Data and Deep Insights', content: 'Welcome to Jupiter! As the largest planet, Jupiter symbolizes massive data and deep insights. Master big data analysis, predictive models, business intelligence, and decision support.', type: 'text' },
      { id: 'advanced-analytics', title: 'Advanced Data Analysis', content: 'AI-driven data analysis: exploratory data analysis, multi-dimensional analysis, and causal inference.', type: 'text' },
      { id: 'predictive-models', title: 'Predictive Models & Trend Analysis', content: 'Build AI predictive models: demand forecasting, customer behavior prediction, risk prediction, and recommendation systems.', type: 'text' },
      { id: 'business-intelligence', title: 'Business Intelligence Dashboard', content: 'Create interactive data dashboards with clear hierarchy, highlighted KPIs, interactive exploration, real-time updates, and mobile-friendly design.', type: 'text' },
      { id: 'actionable-insights', title: 'Actionable Business Insights', content: 'From data to decisions: insight generation, decision support, and continuous optimization.', type: 'text' },
      { id: 'tools', title: 'AI Data Analysis Tools', content: 'Common tools: Python + AI, BI tools, AutoML, and AI analysis assistants.', type: 'text' },
      { id: 'quiz', title: 'Jupiter Mission Assessment', content: 'Test your mastery of AI data analysis and insights', type: 'quiz' }
    ]
  },
  quiz: {
    zh: [
      { id: 'q1', question: '探索性數據分析 (EDA) 的主要目的是什麼？', options: ['建立預測模型', '快速了解數據特徵和分布', '清理數據', '生成報告'], correct: 1 },
      { id: 'q2', question: '客戶流失預測模型最適合用於？', options: ['事後分析', '提前識別高風險客戶並採取行動', '計算歷史流失率', '隨機選擇客戶'], correct: 1 },
      { id: 'q3', question: '商業智能儀表板設計時，最重要的是？', options: ['使用最多的圖表', '清晰的層次和突出的 KPI', '最炫的動畫效果', '包含所有數據'], correct: 1 },
      { id: 'q4', question: 'A/B 測試的核心目的是什麼？', options: ['比較兩個選項', '識別因果關係並做出數據驅動決策', '隨機測試', '節省成本'], correct: 1 }
    ],
    en: [
      { id: 'q1', question: 'What is the main purpose of Exploratory Data Analysis (EDA)?', options: ['Build predictive models', 'Quickly understand data characteristics and distribution', 'Clean data', 'Generate reports'], correct: 1 },
      { id: 'q2', question: 'What is customer churn prediction model best used for?', options: ['Post-hoc analysis', 'Proactively identify high-risk customers and take action', 'Calculate historical churn rate', 'Randomly select customers'], correct: 1 },
      { id: 'q3', question: 'What is most important when designing a business intelligence dashboard?', options: ['Using the most charts', 'Clear hierarchy and highlighted KPIs', 'Flashiest animations', 'Including all data'], correct: 1 },
      { id: 'q4', question: 'What is the core purpose of A/B testing?', options: ['Compare two options', 'Identify causal relationships and make data-driven decisions', 'Random testing', 'Save costs'], correct: 1 }
    ]
  },
  rewards: { zh: ['🎖️ 木星分析師徽章', '📊 數據科學工具箱', '🔮 預測模型模板'], en: ['🎖️ Jupiter Analyst Badge', '📊 Data Science Toolbox', '🔮 Predictive Model Templates'] },
  points: 450
};

export default function JupiterMissionPage() {
  return <MissionTemplate config={jupiterMissionConfig} />;
}
