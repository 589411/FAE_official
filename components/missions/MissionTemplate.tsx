'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export interface MissionSection {
  id: string;
  title: string;
  content: string | React.ReactNode;
  type: 'text' | 'interactive' | 'quiz' | 'video';
  completed?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface MissionConfig {
  id: number;
  title: { zh: string; en: string };
  icon: string;
  sections: { zh: MissionSection[]; en: MissionSection[] };
  quiz?: { zh: QuizQuestion[]; en: QuizQuestion[] };
  rewards: { zh: string[]; en: string[] };
  points: number;
}

interface MissionTemplateProps {
  config: MissionConfig;
}

export default function MissionTemplate({ config }: MissionTemplateProps) {
  const { t, language } = useLanguage();
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const sections = config.sections[language];
  const quizQuestions = config.quiz?.[language] || [];
  const rewards = config.rewards[language];

  const handleSectionComplete = () => {
    const newProgress = ((currentSection + 1) / sections.length) * 100;
    setProgress(newProgress);
    
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleQuizSubmit = () => {
    let correctCount = 0;
    quizQuestions.forEach((q) => {
      if (parseInt(quizAnswers[q.id]) === q.correct) {
        correctCount++;
      }
    });
    
    setQuizScore(correctCount);
    setShowFeedback(true);
    
    if (correctCount >= quizQuestions.length * 0.7) {
      setTimeout(() => {
        setProgress(100);
      }, 2000);
    }
  };

  const renderSectionContent = (section: MissionSection) => {
    if (typeof section.content === 'string') {
      return (
        <div className="space-y-6">
          <p className="text-lg text-star-white/80 leading-relaxed whitespace-pre-line">
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
    }

    return (
      <div className="space-y-6">
        {section.content}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSectionComplete}
            className="px-6 py-3 bg-energy-cyan text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-cyan/50"
          >
            {language === 'zh' ? '繼續 →' : 'Continue →'}
          </button>
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    return (
      <div className="space-y-6">
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
                    } ${
                      showFeedback && parseInt(quizAnswers[q.id]) === oIdx
                        ? oIdx === q.correct
                          ? 'border-green-500 bg-green-500/20'
                          : 'border-red-500 bg-red-500/20'
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={oIdx}
                      checked={quizAnswers[q.id] === oIdx.toString()}
                      onChange={(e) => setQuizAnswers({ ...quizAnswers, [q.id]: e.target.value })}
                      className="w-4 h-4"
                      disabled={showFeedback}
                    />
                    <span className="text-star-white/80">{option}</span>
                    {showFeedback && oIdx === q.correct && (
                      <span className="ml-auto text-green-400">✓</span>
                    )}
                  </label>
                ))}
              </div>
              {showFeedback && q.explanation && (
                <div className="mt-4 p-3 bg-energy-cyan/10 rounded-lg border border-energy-cyan/30">
                  <p className="text-sm text-star-white/70">
                    <span className="text-energy-cyan font-bold">💡 </span>
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-lg border ${
              quizScore >= quizQuestions.length * 0.7
                ? 'bg-gradient-to-r from-green-500/20 to-energy-cyan/20 border-green-500/50'
                : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50'
            }`}
          >
            <h4 className={`font-bold text-xl mb-2 ${
              quizScore >= quizQuestions.length * 0.7 ? 'text-green-400' : 'text-yellow-400'
            }`}>
              {quizScore >= quizQuestions.length * 0.7
                ? (language === 'zh' ? '🎉 太棒了！' : '🎉 Great Job!')
                : (language === 'zh' ? '💪 繼續加油！' : '💪 Keep Trying!')
              }
            </h4>
            <p className="text-star-white/80">
              {language === 'zh' 
                ? `你答對了 ${quizScore} / ${quizQuestions.length} 題` 
                : `You got ${quizScore} / ${quizQuestions.length} correct`}
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
          {!showFeedback ? (
            <button
              onClick={handleQuizSubmit}
              disabled={Object.keys(quizAnswers).length < quizQuestions.length}
              className="px-6 py-3 bg-energy-cyan text-space-dark font-bold rounded-lg hover:bg-star-white transition-all duration-300 hover:shadow-lg hover:shadow-energy-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {language === 'zh' ? '提交答案' : 'Submit Answers'}
            </button>
          ) : quizScore >= quizQuestions.length * 0.7 ? (
            <button
              onClick={() => setProgress(100)}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-400 transition-all duration-300"
            >
              {language === 'zh' ? '完成任務 ✓' : 'Complete Mission ✓'}
            </button>
          ) : (
            <button
              onClick={() => {
                setShowFeedback(false);
                setQuizAnswers({});
              }}
              className="px-6 py-3 bg-yellow-500 text-space-dark font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300"
            >
              {language === 'zh' ? '重新測驗' : 'Retry Quiz'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-space-dark via-space-blue/20 to-space-dark">
      {/* 背景效果 */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-energy-cyan/10 via-transparent to-energy-purple/10" />
      </div>

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
              {config.icon} {language === 'zh' ? `任務 ${String(config.id).padStart(2, '0')}` : `MISSION ${String(config.id).padStart(2, '0')}`}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            {config.title[language]}
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
                    onClick={() => idx <= currentSection && setCurrentSection(idx)}
                    disabled={idx > currentSection}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      currentSection === idx
                        ? 'bg-energy-cyan/20 text-energy-cyan border-l-4 border-energy-cyan'
                        : idx < currentSection
                        ? 'bg-space-blue/20 text-star-white/80 hover:bg-space-blue/30'
                        : 'bg-space-blue/10 text-star-white/40 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-xs mb-1">
                      {language === 'zh' ? `第 ${idx + 1} 節` : `Section ${idx + 1}`}
                    </div>
                    <div className="text-sm font-medium">{section.title}</div>
                    {idx < currentSection && (
                      <div className="text-xs text-green-400 mt-1">✓ {language === 'zh' ? '已完成' : 'Completed'}</div>
                    )}
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
                  {sections[currentSection].type === 'quiz' 
                    ? renderQuiz() 
                    : renderSectionContent(sections[currentSection])}
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
                      ? '恭喜你完成了這個任務！你已經獲得：' 
                      : 'Congratulations on completing this mission! You\'ve earned:'}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {rewards.map((reward, idx) => (
                      <div key={idx} className="px-6 py-3 bg-space-dark/50 rounded-lg">
                        <div className="text-sm text-star-white/80">{reward}</div>
                      </div>
                    ))}
                    <div className="px-6 py-3 bg-space-dark/50 rounded-lg">
                      <div className="text-2xl mb-1">⭐</div>
                      <div className="text-sm text-star-white/80">
                        {config.points} {language === 'zh' ? '探險點數' : 'Explorer Points'}
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
