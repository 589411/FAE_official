'use client';

import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const mission2Config: MissionConfig = {
  id: 2,
  title: {
    zh: '月球登陸準備：數據分析與決策演練',
    en: 'Lunar Landing Prep: Data Analysis & Decision Making'
  },
  icon: '🌙',
  sections: {
    zh: [
      {
        id: 'intro',
        title: '數據分析的重要性',
        content: '在太空探索中，數據分析是做出正確決策的關鍵。從軌道計算到資源管理，每一個決策都需要基於準確的數據分析。在這個任務中，你將學習如何使用 AI 工具進行數據分析。',
        type: 'text'
      },
      {
        id: 'data-basics',
        title: 'AI 數據分析基礎',
        content: `AI 可以幫助我們：
• 快速處理大量數據
• 發現隱藏的模式和趨勢
• 自動化重複性的分析工作
• 生成視覺化報表

常用的 AI 數據分析工具包括：ChatGPT（數據解讀）、Claude（深度分析）、以及各種專業的數據分析平台。`,
        type: 'text'
      },
      {
        id: 'data-cleaning',
        title: '數據清理與整理',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">數據清理是分析的第一步。使用 AI 可以幫助你：</p>
            <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-3">🔧 數據清理技巧</h4>
              <ul className="space-y-2 text-star-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">1.</span>
                  <span>識別並處理太空船遙測數據的缺失值</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">2.</span>
                  <span>移除重複的軌道追蹤數據</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">3.</span>
                  <span>標準化不同感測器的數據格式</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">4.</span>
                  <span>處理太空環境監測的異常值</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <p className="text-sm text-star-white/70">
                <span className="text-energy-cyan font-bold">💡 提示：</span>
                使用 ChatGPT 時，可以直接貼上你的數據，要求它幫你清理和整理。
              </p>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'pattern-discovery',
        title: '發現趨勢與模式',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">AI 擅長從數據中發現人類難以察覺的模式：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">📈</div>
                <h5 className="text-energy-cyan font-bold mb-2">趨勢分析</h5>
                <p className="text-sm text-star-white/70">識別數據隨時間的變化趨勢</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">🔍</div>
                <h5 className="text-energy-cyan font-bold mb-2">異常檢測</h5>
                <p className="text-sm text-star-white/70">發現不符合常規的數據點</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="text-energy-cyan font-bold mb-2">相關性分析</h5>
                <p className="text-sm text-star-white/70">找出變量之間的關聯</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="text-energy-cyan font-bold mb-2">分群分析</h5>
                <p className="text-sm text-star-white/70">將相似的數據分組</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'visualization',
        title: '數據視覺化',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">好的視覺化能讓數據說話。AI 可以幫你：</p>
            <div className="p-6 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-3">📊 視覺化最佳實踐</h4>
              <ul className="space-y-3 text-star-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span>識別太空任務成功的真正因果關係</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>選擇合適的圖表類型：</strong>折線圖顯示軌道變化、長條圖比較燃料消耗、圓餅圖展示資源分配</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>保持簡潔：</strong>避免過多的裝飾，讓太空數據清晰呈現</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>使用顏色：</strong>用顏色區分類別，但要考慮色盲友善</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>添加標籤：</strong>清楚標示軸線、單位和數據來源</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <p className="text-sm text-star-white/70">
                <span className="text-energy-cyan font-bold">🎯 實戰技巧：</span>
                可以要求 ChatGPT 生成 Python 或 JavaScript 的視覺化程式碼，使用 Matplotlib、Plotly 或 Chart.js 等工具。
              </p>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'quiz',
        title: '知識檢測',
        content: '測試你對數據分析的理解',
        type: 'quiz'
      }
    ],
    en: [
      {
        id: 'intro',
        title: 'Importance of Data Analysis',
        content: 'In space exploration, data analysis is key to making correct decisions. From orbit calculations to resource management, every decision needs to be based on accurate data analysis. In this mission, you will learn how to use AI tools for data analysis.',
        type: 'text'
      },
      {
        id: 'data-basics',
        title: 'AI Data Analysis Fundamentals',
        content: `AI can help us:
• Quickly process large amounts of data
• Discover hidden patterns and trends
• Automate repetitive analysis tasks
• Generate visualization reports

Common AI data analysis tools include: ChatGPT (data interpretation), Claude (deep analysis), and various professional data analysis platforms.`,
        type: 'text'
      },
      {
        id: 'data-cleaning',
        title: 'Data Cleaning & Organization',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">Data cleaning is the first step in analysis. AI can help you:</p>
            <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-3">🔧 Data Cleaning Tips</h4>
              <ul className="space-y-2 text-star-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">1.</span>
                  <span>Identify and handle missing values</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">2.</span>
                  <span>Remove duplicate data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">3.</span>
                  <span>Standardize data formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">4.</span>
                  <span>Handle outliers</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <p className="text-sm text-star-white/70">
                <span className="text-energy-cyan font-bold">💡 Tip:</span>
                When using ChatGPT, you can directly paste your data and ask it to help clean and organize.
              </p>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'pattern-discovery',
        title: 'Discovering Trends & Patterns',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">AI excels at discovering patterns that humans might miss:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">📈</div>
                <h5 className="text-energy-cyan font-bold mb-2">Trend Analysis</h5>
                <p className="text-sm text-star-white/70">Identify how data changes over time</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">🔍</div>
                <h5 className="text-energy-cyan font-bold mb-2">Anomaly Detection</h5>
                <p className="text-sm text-star-white/70">Find data points that don't fit the norm</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="text-energy-cyan font-bold mb-2">Correlation Analysis</h5>
                <p className="text-sm text-star-white/70">Find relationships between variables</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="text-energy-cyan font-bold mb-2">Clustering Analysis</h5>
                <p className="text-sm text-star-white/70">Group similar data together</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'visualization',
        title: 'Data Visualization',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">Good visualization makes data speak. AI can help you:</p>
            <div className="p-6 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-3">📊 Visualization Best Practices</h4>
              <ul className="space-y-3 text-star-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>Choose the right chart type:</strong> Line charts for trends, bar charts for comparisons, pie charts for proportions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>Keep it simple:</strong> Avoid excessive decoration, focus on the data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>Use color:</strong> Use colors to distinguish categories, but consider color-blind friendly palettes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy-cyan">▸</span>
                  <span><strong>Add labels:</strong> Clearly label axes, units, and data sources</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <p className="text-sm text-star-white/70">
                <span className="text-energy-cyan font-bold">🎯 Pro Tip:</span>
                Ask ChatGPT to generate Python or JavaScript visualization code using Matplotlib, Plotly, or Chart.js.
              </p>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'quiz',
        title: 'Knowledge Check',
        content: 'Test your understanding of data analysis',
        type: 'quiz'
      }
    ]
  },
  quiz: {
    zh: [
      {
        id: 'q1',
        question: '數據清理的第一步通常是什麼？',
        options: [
          '立即開始分析',
          '識別並處理缺失值和異常值',
          '製作視覺化圖表',
          '撰寫報告'
        ],
        correct: 1,
        explanation: '數據清理是分析的基礎，必須先處理缺失值和異常值，才能確保分析結果的準確性。'
      },
      {
        id: 'q2',
        question: 'AI 在數據分析中最大的優勢是什麼？',
        options: [
          '完全取代人類分析師',
          '快速處理大量數據並發現模式',
          '只能做簡單的計算',
          '不需要任何人類監督'
        ],
        correct: 1,
        explanation: 'AI 的優勢在於能快速處理大量數據並發現隱藏的模式，但仍需要人類的判斷和監督。'
      },
      {
        id: 'q3',
        question: '選擇視覺化圖表類型時，最重要的考量是什麼？',
        options: [
          '圖表看起來最漂亮',
          '使用最複雜的圖表',
          '根據數據類型和想傳達的訊息選擇',
          '隨機選擇'
        ],
        correct: 2,
        explanation: '選擇圖表類型應該基於數據的性質和你想傳達的訊息，而不是外觀或複雜度。'
      },
      {
        id: 'q4',
        question: '在數據分析中，「相關性」代表什麼？',
        options: [
          '兩個變量之間的因果關係',
          '兩個變量之間的統計關聯',
          '數據的準確度',
          '分析的速度'
        ],
        correct: 1,
        explanation: '相關性表示兩個變量之間的統計關聯，但不一定代表因果關係。這是數據分析中的重要概念。'
      }
    ],
    en: [
      {
        id: 'q1',
        question: 'What is typically the first step in data cleaning?',
        options: [
          'Start analysis immediately',
          'Identify and handle missing values and outliers',
          'Create visualization charts',
          'Write reports'
        ],
        correct: 1,
        explanation: 'Data cleaning is the foundation of analysis. You must first handle missing values and outliers to ensure accurate analysis results.'
      },
      {
        id: 'q2',
        question: 'What is AI\'s biggest advantage in data analysis?',
        options: [
          'Completely replacing human analysts',
          'Quickly processing large amounts of data and discovering patterns',
          'Only doing simple calculations',
          'Not needing any human supervision'
        ],
        correct: 1,
        explanation: 'AI\'s advantage lies in quickly processing large amounts of data and discovering hidden patterns, but it still requires human judgment and supervision.'
      },
      {
        id: 'q3',
        question: 'What is the most important consideration when choosing a visualization chart type?',
        options: [
          'The chart looks prettiest',
          'Using the most complex chart',
          'Choosing based on data type and message to convey',
          'Random selection'
        ],
        correct: 2,
        explanation: 'Chart type selection should be based on the nature of the data and the message you want to convey, not appearance or complexity.'
      },
      {
        id: 'q4',
        question: 'In data analysis, what does "correlation" represent?',
        options: [
          'Causal relationship between two variables',
          'Statistical association between two variables',
          'Data accuracy',
          'Analysis speed'
        ],
        correct: 1,
        explanation: 'Correlation indicates a statistical association between two variables, but does not necessarily represent causation. This is an important concept in data analysis.'
      }
    ]
  },
  rewards: {
    zh: ['🎖️ 數據探索者徽章', '📊 數據分析工具包'],
    en: ['🎖️ Data Explorer Badge', '📊 Data Analysis Toolkit']
  },
  points: 150
};

export default function Mission2Page() {
  return <MissionTemplate config={mission2Config} />;
}
