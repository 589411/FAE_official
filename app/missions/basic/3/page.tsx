'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const mission3Config: MissionConfig = {
  id: 3,
  title: { zh: '月球探索與研究：解碼與洞察的應用', en: 'Lunar Exploration: Decoding & Insight Applications' },
  icon: '🔍',
  sections: {
    zh: [
      { id: 'intro', title: 'AI 研究方法論', content: '在月球探索中，研究能力至關重要。AI 可以幫助你快速進行太空科技文獻回顧、探索任務分析和技術評估，大幅提升研究效率。', type: 'text' },
      { id: 'literature', title: '文獻研究與回顧', content: 'AI 可以幫你快速閱讀和總結大量太空探索文獻，提取關鍵技術資訊，找出研究趨勢和知識缺口。使用技巧：\n\n1. 提供明確的太空研究主題（如：月球基地建設）\n2. 要求總結關鍵技術發現\n3. 請 AI 比較不同太空任務的方法\n4. 生成太空探索文獻綜述大綱', type: 'text' },
      { id: 'market', title: '任務研究與分析', content: 'AI 能協助進行太空任務調查、技術分析和趨勢預測。關鍵步驟：\n\n• 定義探索任務目標和範圍\n• 收集相關太空數據和資訊\n• 使用 AI 分析不同任務方案\n• 識別技術機會和挑戰\n• 生成可執行的任務洞察', type: 'text' },
      { id: 'analysis', title: '多維度分析框架', content: 'AI 可以幫助你從多個角度分析問題：SWOT 分析、PEST 分析、波特五力分析等。透過 AI，你可以快速建立分析框架並填充內容。', type: 'text' },
      { id: 'report', title: '專業報告撰寫', content: '使用 AI 撰寫專業報告的技巧：\n\n1. 建立清晰的報告結構\n2. 使用數據支持論點\n3. 保持客觀和專業的語氣\n4. 添加視覺化元素\n5. 提供可執行的建議', type: 'text' },
      { id: 'quiz', title: '知識檢測', content: '測試你的研究分析能力', type: 'quiz' }
    ],
    en: [
      { id: 'intro', title: 'AI Research Methodology', content: 'In lunar exploration, research capability is crucial. AI can help you quickly conduct literature reviews, market surveys, and competitive analysis, greatly improving research efficiency.', type: 'text' },
      { id: 'literature', title: 'Literature Research & Review', content: 'AI can help you quickly read and summarize large amounts of literature, extract key information, and identify research trends and knowledge gaps. Usage tips:\n\n1. Provide clear research topics\n2. Request summaries of key findings\n3. Ask AI to compare different research perspectives\n4. Generate literature review outlines', type: 'text' },
      { id: 'market', title: 'Market Research & Analysis', content: 'AI can assist with market surveys, competitive analysis, and trend forecasting. Key steps:\n\n• Define research objectives and scope\n• Collect relevant data and information\n• Use AI to analyze competitive landscape\n• Identify market opportunities and threats\n• Generate actionable insights', type: 'text' },
      { id: 'analysis', title: 'Multi-dimensional Analysis Framework', content: 'AI can help you analyze problems from multiple angles: SWOT analysis, PEST analysis, Porter\'s Five Forces, etc. Through AI, you can quickly build analytical frameworks and populate content.', type: 'text' },
      { id: 'report', title: 'Professional Report Writing', content: 'Tips for writing professional reports with AI:\n\n1. Establish clear report structure\n2. Use data to support arguments\n3. Maintain objective and professional tone\n4. Add visual elements\n5. Provide actionable recommendations', type: 'text' },
      { id: 'quiz', title: 'Knowledge Check', content: 'Test your research and analysis skills', type: 'quiz' }
    ]
  },
  quiz: {
    zh: [
      { id: 'q1', question: 'AI 在文獻研究中最大的幫助是什麼？', options: ['取代研究者', '快速閱讀和總結大量文獻', '只能翻譯文獻', '不需要人類判斷'], correct: 1 },
      { id: 'q2', question: 'SWOT 分析包含哪些要素？', options: ['只有優勢和劣勢', '優勢、劣勢、機會、威脅', '只分析外部環境', '只分析內部因素'], correct: 1 },
      { id: 'q3', question: '撰寫專業報告時，最重要的是什麼？', options: ['使用複雜的詞彙', '清晰的結構和數據支持', '越長越好', '只有結論重要'], correct: 1 }
    ],
    en: [
      { id: 'q1', question: 'What is AI\'s biggest help in literature research?', options: ['Replacing researchers', 'Quickly reading and summarizing large amounts of literature', 'Only translating literature', 'No human judgment needed'], correct: 1 },
      { id: 'q2', question: 'What elements does SWOT analysis include?', options: ['Only strengths and weaknesses', 'Strengths, Weaknesses, Opportunities, Threats', 'Only external environment', 'Only internal factors'], correct: 1 },
      { id: 'q3', question: 'What is most important when writing professional reports?', options: ['Using complex vocabulary', 'Clear structure and data support', 'Longer is better', 'Only conclusions matter'], correct: 1 }
    ]
  },
  rewards: { zh: ['🎖️ 月球研究員徽章', '🔬 研究工具組'], en: ['🎖️ Lunar Researcher Badge', '🔬 Research Toolkit'] },
  points: 200
};

export default function Mission3Page() {
  return <MissionTemplate config={mission3Config} />;
}
