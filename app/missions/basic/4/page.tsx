'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const mission4Config: MissionConfig = {
  id: 4,
  title: { zh: '月球宣示：完成成就與獎勵解鎖', en: 'Lunar Declaration: Achievement & Reward Unlock' },
  icon: '🏆',
  sections: {
    zh: [
      { id: 'intro', title: '綜合專案挑戰', content: '恭喜你來到最後一個基礎任務！在這裡，你將整合前三個任務所學的所有技能，完成一個月球基地建設的綜合性 AI 應用專案。', type: 'text' },
      { id: 'project-planning', title: '專案規劃', content: '成功的太空任務始於良好的規劃。使用 AI 幫助你：\n\n1. 定義月球基地建設目標和範圍\n2. 分解太空任務和里程碑\n3. 評估所需太空資源（燃料、物資、人力）\n4. 制定探索時間表\n5. 識別太空環境的潛在風險', type: 'text' },
      { id: 'integration', title: '技能整合', content: '回顧你學到的技能：\n\n✓ Prompt 工程和 AI 工具使用\n✓ 數據分析和視覺化\n✓ 研究方法和洞察分析\n\n現在，將這些技能結合起來，創造出更強大的應用。', type: 'text' },
      { id: 'execution', title: '專案執行', content: '執行專案的關鍵步驟：\n\n• 收集和準備數據\n• 使用 AI 進行分析\n• 生成洞察和建議\n• 創建視覺化呈現\n• 撰寫專案報告', type: 'text' },
      { id: 'presentation', title: '成果展示', content: '如何展示你的專案成果：\n\n1. 清晰的問題陳述\n2. 方法論說明\n3. 關鍵發現展示\n4. 數據視覺化\n5. 結論和建議\n6. 未來展望', type: 'text' },
      { id: 'quiz', title: '最終評估', content: '完成最終評估，證明你的能力', type: 'quiz' }
    ],
    en: [
      { id: 'intro', title: 'Comprehensive Project Challenge', content: 'Congratulations on reaching the final basic mission! Here, you will integrate all the skills learned from the first three missions to complete a comprehensive AI application project.', type: 'text' },
      { id: 'project-planning', title: 'Project Planning', content: 'Successful projects start with good planning. Use AI to help you:\n\n1. Define project goals and scope\n2. Break down tasks and milestones\n3. Assess required resources\n4. Create timeline\n5. Identify potential risks', type: 'text' },
      { id: 'integration', title: 'Skill Integration', content: 'Review the skills you\'ve learned:\n\n✓ Prompt engineering and AI tool usage\n✓ Data analysis and visualization\n✓ Research methods and insight analysis\n\nNow, combine these skills to create more powerful applications.', type: 'text' },
      { id: 'execution', title: 'Project Execution', content: 'Key steps in project execution:\n\n• Collect and prepare data\n• Use AI for analysis\n• Generate insights and recommendations\n• Create visualizations\n• Write project report', type: 'text' },
      { id: 'presentation', title: 'Results Presentation', content: 'How to present your project results:\n\n1. Clear problem statement\n2. Methodology explanation\n3. Key findings display\n4. Data visualization\n5. Conclusions and recommendations\n6. Future outlook', type: 'text' },
      { id: 'quiz', title: 'Final Assessment', content: 'Complete the final assessment to prove your abilities', type: 'quiz' }
    ]
  },
  quiz: {
    zh: [
      { id: 'q1', question: '專案規劃的第一步是什麼？', options: ['立即開始執行', '定義專案目標和範圍', '招募團隊', '購買工具'], correct: 1 },
      { id: 'q2', question: '整合多種 AI 技能的好處是什麼？', options: ['沒有好處', '創造更強大和全面的解決方案', '只會讓事情變複雜', '浪費時間'], correct: 1 },
      { id: 'q3', question: '展示專案成果時，最重要的是什麼？', options: ['使用華麗的動畫', '清晰地傳達問題、方法和發現', '展示時間越長越好', '只展示成功的部分'], correct: 1 },
      { id: 'q4', question: '完成基礎任務後，下一步應該做什麼？', options: ['停止學習', '挑戰進階任務，持續成長', '重複相同的任務', '放棄 AI 學習'], correct: 1 }
    ],
    en: [
      { id: 'q1', question: 'What is the first step in project planning?', options: ['Start execution immediately', 'Define project goals and scope', 'Recruit team', 'Purchase tools'], correct: 1 },
      { id: 'q2', question: 'What is the benefit of integrating multiple AI skills?', options: ['No benefits', 'Create more powerful and comprehensive solutions', 'Only makes things complicated', 'Waste of time'], correct: 1 },
      { id: 'q3', question: 'What is most important when presenting project results?', options: ['Using fancy animations', 'Clearly communicate problem, method, and findings', 'Longer presentation is better', 'Only show successful parts'], correct: 1 },
      { id: 'q4', question: 'After completing basic missions, what should you do next?', options: ['Stop learning', 'Challenge advanced missions and continue growing', 'Repeat same missions', 'Give up AI learning'], correct: 1 }
    ]
  },
  rewards: { zh: ['🏅 月球征服者徽章', '🚀 進階任務通行證', '🎁 神秘獎勵包'], en: ['🏅 Lunar Conqueror Badge', '🚀 Advanced Mission Pass', '🎁 Mystery Reward Pack'] },
  points: 250
};

export default function Mission4Page() {
  return <MissionTemplate config={mission4Config} />;
}
