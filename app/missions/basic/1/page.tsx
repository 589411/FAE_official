'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

interface Section {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'interactive' | 'quiz';
  completed: boolean;
}

export default function Mission1Page() {
  const { t, language } = useLanguage();
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const sections: Section[] = language === 'zh' ? [
    {
      id: 'intro',
      title: '歡迎來到 AI 世界',
      content: '在這個任務中，你將從零開始認識 AI，了解什麼是人工智慧、機器學習，以及它們如何改變我們的世界。',
      type: 'text',
      completed: false
    },
    {
      id: 'ai-basics',
      title: 'AI 基礎概念',
      content: '人工智慧（AI）是讓機器能夠模擬人類智慧的技術。機器學習是 AI 的一個分支，讓電腦能夠從數據中學習，而不需要明確編程。',
      type: 'text',
      completed: false
    },
    {
      id: 'chatgpt-intro',
      title: '認識 ChatGPT',
      content: 'ChatGPT 是一個強大的 AI 語言模型，能夠理解和生成人類語言。它可以幫助你寫作、編程、分析問題，甚至進行創意發想。',
      type: 'text',
      completed: false
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt 工程基礎',
      content: 'Prompt 是你給 AI 的指令。好的 Prompt 應該清晰、具體、有上下文。例如：「請用簡單的語言解釋火箭推進原理」比「解釋火箭」更有效。',
      type: 'interactive',
      completed: false
    },
    {
      id: 'practice',
      title: '實戰練習',
      content: '現在輪到你了！嘗試撰寫一個 Prompt，讓 AI 幫你規劃一次月球探險任務。',
      type: 'interactive',
      completed: false
    },
    {
      id: 'quiz',
      title: '知識檢測',
      content: '測試你對 AI 基礎概念的理解',
      type: 'quiz',
      completed: false
    }
  ] : [
    {
      id: 'intro',
      title: 'Welcome to the AI World',
      content: 'In this mission, you will learn about AI from scratch, understand what artificial intelligence and machine learning are, and how they are changing our world.',
      type: 'text',
      completed: false
    },
    {
      id: 'ai-basics',
      title: 'AI Fundamentals',
      content: 'Artificial Intelligence (AI) is technology that enables machines to simulate human intelligence. Machine Learning is a branch of AI that allows computers to learn from data without explicit programming.',
      type: 'text',
      completed: false
    },
    {
      id: 'chatgpt-intro',
      title: 'Meet ChatGPT',
      content: 'ChatGPT is a powerful AI language model that can understand and generate human language. It can help you write, code, analyze problems, and even brainstorm creative ideas.',
      type: 'text',
      completed: false
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering Basics',
      content: 'A prompt is the instruction you give to AI. Good prompts should be clear, specific, and contextual. For example: "Explain rocket propulsion principles in simple terms" is more effective than "Explain rockets".',
      type: 'interactive',
      completed: false
    },
    {
      id: 'practice',
      title: 'Hands-on Practice',
      content: 'Now it\'s your turn! Try writing a prompt to have AI help you plan a lunar expedition mission.',
      type: 'interactive',
      completed: false
    },
    {
      id: 'quiz',
      title: 'Knowledge Check',
      content: 'Test your understanding of AI fundamentals',
      type: 'quiz',
      completed: false
    }
  ];

  const quizQuestions = language === 'zh' ? [
    {
      id: 'q1',
      question: 'AI 和機器學習的關係是什麼？',
      options: [
        'AI 是機器學習的一部分',
        '機器學習是 AI 的一部分',
        '它們是完全不同的技術',
        '它們是相同的概念'
      ],
      correct: 1
    },
    {
      id: 'q2',
      question: '什麼是好的 Prompt？',
      options: [
        '越短越好',
        '越長越好',
        '清晰、具體、有上下文',
        '使用專業術語'
      ],
      correct: 2
    },
    {
      id: 'q3',
      question: 'ChatGPT 主要用於什麼？',
      options: [
        '只能用於編程',
        '只能用於寫作',
        '可以用於多種任務，包括寫作、編程、分析等',
        '只能用於翻譯'
      ],
      correct: 2
    }
  ] : [
    {
      id: 'q1',
      question: 'What is the relationship between AI and Machine Learning?',
      options: [
        'AI is part of Machine Learning',
        'Machine Learning is part of AI',
        'They are completely different technologies',
        'They are the same concept'
      ],
      correct: 1
    },
    {
      id: 'q2',
      question: 'What makes a good prompt?',
      options: [
        'The shorter the better',
        'The longer the better',
        'Clear, specific, and contextual',
        'Using technical jargon'
      ],
      correct: 2
    },
    {
      id: 'q3',
      question: 'What is ChatGPT mainly used for?',
      options: [
        'Only for programming',
        'Only for writing',
        'Multiple tasks including writing, coding, analysis, etc.',
        'Only for translation'
      ],
      correct: 2
    }
  ];

  const handleSectionComplete = () => {
    const newProgress = ((currentSection + 1) / sections.length) * 100;
    setProgress(newProgress);
    
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleQuizSubmit = () => {
    let correctCount = 0;
    quizQuestions.forEach((q, idx) => {
      if (parseInt(quizAnswers[q.id]) === q.correct) {
        correctCount++;
      }
    });
    
    setShowFeedback(true);
    
    if (correctCount === quizQuestions.length) {
      setTimeout(() => {
        setProgress(100);
      }, 2000);
    }
  };

  const renderSectionContent = (section: Section) => {
    switch (section.type) {
      case 'text':
        return (
          <div className="space-y-6">
            <p className="text-lg text-star-white/80 leading-relaxed">
              {section.content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleSectionComplete}
                className="px-6 py-3 bg-energy-cyan text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-cyan/50"
              >
                {language === 'zh' ? '繼續 →' : 'Continue →'}
              </button>
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-6">
            <p className="text-lg text-star-white/80 leading-relaxed mb-6">
              {section.content}
            </p>
            
            {section.id === 'prompt-engineering' && (
              <div className="space-y-4">
                <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                  <h4 className="text-energy-cyan font-bold mb-3">
                    {language === 'zh' ? '💡 Prompt 撰寫技巧' : '💡 Prompt Writing Tips'}
                  </h4>
                  <ul className="space-y-2 text-star-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-energy-cyan">▸</span>
                      <span>{language === 'zh' ? '明確說明你想要什麼' : 'Clearly state what you want'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-cyan">▸</span>
                      <span>{language === 'zh' ? '提供足夠的背景資訊' : 'Provide sufficient context'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-cyan">▸</span>
                      <span>{language === 'zh' ? '指定輸出格式或風格' : 'Specify output format or style'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-energy-cyan">▸</span>
                      <span>{language === 'zh' ? '使用範例來說明' : 'Use examples to illustrate'}</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
                  <h4 className="text-energy-cyan font-bold mb-3">
                    {language === 'zh' ? '✨ 範例對比' : '✨ Example Comparison'}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded">
                      <div className="text-red-400 font-bold mb-2">❌ {language === 'zh' ? '不好的 Prompt' : 'Bad Prompt'}</div>
                      <p className="text-sm text-star-white/70">{language === 'zh' ? '寫一篇文章' : 'Write an article'}</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded">
                      <div className="text-green-400 font-bold mb-2">✅ {language === 'zh' ? '好的 Prompt' : 'Good Prompt'}</div>
                      <p className="text-sm text-star-white/70">
                        {language === 'zh' 
                          ? '請寫一篇 500 字的文章，介紹 AI 在醫療領域的應用，目標讀者是高中生，使用淺顯易懂的語言' 
                          : 'Write a 500-word article introducing AI applications in healthcare, targeting high school students, using easy-to-understand language'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {section.id === 'practice' && (
              <div className="space-y-4">
                <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                  <h4 className="text-energy-cyan font-bold mb-3">
                    {language === 'zh' ? '🎯 練習任務' : '🎯 Practice Task'}
                  </h4>
                  <p className="text-star-white/80 mb-4">
                    {language === 'zh' 
                      ? '嘗試撰寫一個 Prompt，讓 AI 幫你規劃一個週末的學習計畫' 
                      : 'Try writing a prompt to have AI help you plan a weekend study schedule'}
                  </p>
                  <textarea
                    className="w-full h-32 p-4 bg-space-dark/50 border border-energy-cyan/30 rounded-lg text-star-white focus:border-energy-cyan focus:outline-none resize-none"
                    placeholder={language === 'zh' ? '在這裡輸入你的 Prompt...' : 'Enter your prompt here...'}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleSectionComplete}
                className="px-6 py-3 bg-energy-cyan text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-cyan/50"
              >
                {language === 'zh' ? '繼續 →' : 'Continue →'}
              </button>
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-6">
            <p className="text-lg text-star-white/80 leading-relaxed mb-6">
              {section.content}
            </p>

            <div className="space-y-6">
              {quizQuestions.map((q, qIdx) => (
                <div key={q.id} className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                  <h4 className="text-energy-cyan font-bold mb-4">
                    {language === 'zh' ? `問題 ${qIdx + 1}` : `Question ${qIdx + 1}`}: {q.question}
                  </h4>
                  <div className="space-y-3">
                    {q.options.map((option, oIdx) => (
                      <label
                        key={oIdx}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                          quizAnswers[q.id] === oIdx.toString()
                            ? 'bg-energy-cyan/20 border-2 border-energy-cyan'
                            : 'bg-space-dark/30 border-2 border-transparent hover:border-energy-cyan/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={oIdx}
                          checked={quizAnswers[q.id] === oIdx.toString()}
                          onChange={(e) => setQuizAnswers({ ...quizAnswers, [q.id]: e.target.value })}
                          className="w-4 h-4"
                        />
                        <span className="text-star-white/80">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-gradient-to-r from-green-500/20 to-energy-cyan/20 rounded-lg border border-green-500/50"
              >
                <h4 className="text-green-400 font-bold text-xl mb-2">
                  {language === 'zh' ? '🎉 太棒了！' : '🎉 Great Job!'}
                </h4>
                <p className="text-star-white/80">
                  {language === 'zh' 
                    ? '你已經完成了第一個任務！繼續保持這個學習熱情！' 
                    : 'You\'ve completed the first mission! Keep up the learning enthusiasm!'}
                </p>
              </motion.div>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentSection(currentSection - 1)}
                className="px-6 py-3 bg-space-blue/50 text-star-white font-bold rounded-lg hover:bg-space-blue transition-all duration-300"
              >
                {language === 'zh' ? '← 上一步' : '← Previous'}
              </button>
              <button
                onClick={handleQuizSubmit}
                disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                className="px-6 py-3 bg-energy-cyan text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {language === 'zh' ? '提交答案' : 'Submit Answers'}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-space-dark via-space-blue/20 to-space-dark">
      {/* 背景效果 */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-energy-cyan/10 via-transparent to-energy-purple/10" />
      </div>

      {/* 語言切換 */}
      <LanguageSwitcher />

      {/* 導航欄 */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 bg-space-dark/50 backdrop-blur-md border-b border-energy-cyan/20">
        <Link href="/" className="text-2xl font-bold text-energy-cyan hover:text-energy-purple transition-colors">
          FAE
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/missions/basic" className="text-star-white/70 hover:text-energy-cyan transition-colors">
            {language === 'zh' ? '← 返回任務列表' : '← Back to Missions'}
          </Link>
        </div>
      </nav>

      {/* 主要內容 */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* 任務標題 */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-energy-cyan/10 border border-energy-cyan/30 rounded-full">
            <span className="text-energy-cyan font-mono text-sm">
              {language === 'zh' ? '🚀 任務 01 | MISSION 01' : '🚀 MISSION 01'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            {language === 'zh' ? '太空船發射：AI基礎能力啟動' : 'Rocket Launch: AI Fundamentals Activation'}
          </h1>
          
          {/* 進度條 */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-star-white/60">
                {language === 'zh' ? '學習進度' : 'Progress'}
              </span>
              <span className="text-sm text-energy-cyan font-bold">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-space-blue/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-energy-cyan to-energy-purple"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* 內容區域 */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 側邊欄 - 章節導航 */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-2">
                <h3 className="text-sm font-bold text-energy-cyan mb-4">
                  {language === 'zh' ? '📚 課程章節' : '📚 Chapters'}
                </h3>
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(idx)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      currentSection === idx
                        ? 'bg-energy-cyan/20 text-energy-cyan border-l-4 border-energy-cyan'
                        : 'bg-space-blue/20 text-star-white/60 hover:bg-space-blue/30 hover:text-star-white'
                    }`}
                  >
                    <div className="text-xs mb-1">
                      {language === 'zh' ? `第 ${idx + 1} 節` : `Section ${idx + 1}`}
                    </div>
                    <div className="text-sm font-medium">{section.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 主要內容區 */}
            <div className="md:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 bg-space-blue/20 backdrop-blur-sm border border-energy-cyan/30 rounded-xl"
                >
                  <h2 className="text-3xl font-bold text-star-white mb-6">
                    {sections[currentSection].title}
                  </h2>
                  {renderSectionContent(sections[currentSection])}
                </motion.div>
              </AnimatePresence>

              {/* 完成任務卡片 */}
              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-8 bg-gradient-to-r from-energy-cyan/20 to-energy-purple/20 backdrop-blur-sm border border-energy-cyan/50 rounded-xl text-center"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-3xl font-bold text-energy-cyan mb-4">
                    {language === 'zh' ? '任務完成！' : 'Mission Complete!'}
                  </h3>
                  <p className="text-star-white/80 mb-6">
                    {language === 'zh' 
                      ? '恭喜你完成了第一個任務！你已經獲得：' 
                      : 'Congratulations on completing the first mission! You\'ve earned:'}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="px-6 py-3 bg-space-dark/50 rounded-lg">
                      <div className="text-2xl mb-1">🎖️</div>
                      <div className="text-sm text-star-white/80">
                        {language === 'zh' ? '太空探險者徽章' : 'Space Explorer Badge'}
                      </div>
                    </div>
                    <div className="px-6 py-3 bg-space-dark/50 rounded-lg">
                      <div className="text-2xl mb-1">⭐</div>
                      <div className="text-sm text-star-white/80">
                        {language === 'zh' ? '100 探險點數' : '100 Explorer Points'}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/missions/basic"
                    className="inline-block px-8 py-4 bg-energy-cyan text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-cyan/50"
                  >
                    {language === 'zh' ? '返回任務列表 →' : 'Back to Missions →'}
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
