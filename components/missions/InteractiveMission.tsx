'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MissionData {
  title: string;
  content: string;
  copyable: boolean;
  hints: Array<{
    level: number;
    text: string;
    fabotSays: string;
  }>;
}

interface MissionProps {
  missionId: string;
  title: string;
  story: {
    intro: string;
    fabotAvatar?: string;
  };
  data: MissionData;
  onComplete: (result: any) => void;
}

export default function InteractiveMission({ missionId, title, story, data, onComplete }: MissionProps) {
  const [currentStep, setCurrentStep] = useState<'intro' | 'data' | 'analysis' | 'submit'>('intro');
  const [showHint, setShowHint] = useState(0);
  const [copied, setCopied] = useState(false);
  const [fabotMessage, setFabotMessage] = useState(story.intro);

  // 複製數據到剪貼板
  const handleCopyData = async () => {
    try {
      await navigator.clipboard.writeText(data.content);
      setCopied(true);
      setFabotMessage('太好了！數據已複製！現在去你的 AI 工具分析吧！');
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('複製失敗:', err);
    }
  };

  // 顯示提示
  const handleShowHint = () => {
    if (showHint < data.hints.length) {
      const hint = data.hints[showHint];
      setFabotMessage(hint.fabotSays);
      setShowHint(showHint + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* FAE Bot 對話框 */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 p-6 rounded-xl bg-gradient-to-r from-energy-cyan/20 to-energy-purple/20 border border-energy-cyan/30 backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-energy-cyan/30 flex items-center justify-center text-3xl flex-shrink-0">
            🤖
          </div>
          <div className="flex-1">
            <div className="text-sm text-energy-cyan font-bold mb-1">FAE Bot</div>
            <motion.p
              key={fabotMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-star-white leading-relaxed"
            >
              {fabotMessage}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* 任務步驟 */}
      <AnimatePresence mode="wait">
        {currentStep === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-glow mb-4">{title}</h2>
            <p className="text-star-white/80 text-lg leading-relaxed">
              {story.intro}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setCurrentStep('data');
                  setFabotMessage('讓我們看看數據！準備好你的 AI 工具了嗎？');
                }}
                className="btn-primary"
              >
                開始任務 →
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === 'data' && (
          <motion.div
            key="data"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* 數據卡片 */}
            <div className="p-6 rounded-xl bg-space-blue/20 border border-energy-cyan/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-energy-cyan">📊 {data.title}</h3>
                {data.copyable && (
                  <button
                    onClick={handleCopyData}
                    className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
                      copied
                        ? 'bg-success-green text-space-dark'
                        : 'bg-energy-cyan text-space-dark hover:bg-star-white'
                    }`}
                  >
                    {copied ? '✓ 已複製' : '📋 複製數據'}
                  </button>
                )}
              </div>
              
              <pre className="text-star-white/90 whitespace-pre-wrap font-mono text-sm leading-relaxed bg-space-dark/50 p-4 rounded-lg overflow-x-auto">
                {data.content}
              </pre>
            </div>

            {/* AI 工具建議 */}
            <div className="p-6 rounded-xl bg-energy-purple/10 border border-energy-purple/30">
              <h4 className="text-lg font-bold text-energy-purple mb-3">💡 AI 工具使用建議</h4>
              <div className="space-y-2 text-star-white/80">
                <p>• 打開 ChatGPT、Claude 或其他 AI 工具</p>
                <p>• 貼上剛才複製的數據</p>
                <p>• 詢問 AI 幫你分析數據</p>
                <p>• 根據 AI 的分析，形成你自己的見解</p>
              </div>
            </div>

            {/* 提示系統 */}
            {showHint < data.hints.length && (
              <div className="flex justify-center">
                <button
                  onClick={handleShowHint}
                  className="px-6 py-3 rounded-lg bg-warning-amber/20 text-warning-amber border border-warning-amber/50 hover:bg-warning-amber/30 transition-all duration-300"
                >
                  💡 需要提示？ ({showHint + 1}/{data.hints.length})
                </button>
              </div>
            )}

            {/* 顯示的提示 */}
            {showHint > 0 && (
              <div className="space-y-3">
                {data.hints.slice(0, showHint).map((hint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-warning-amber/10 border border-warning-amber/30 text-star-white/80"
                  >
                    {hint.text}
                  </motion.div>
                ))}
              </div>
            )}

            {/* 操作按鈕 */}
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep('intro')}
                className="btn-secondary"
              >
                ← 返回
              </button>
              <button
                onClick={() => {
                  setCurrentStep('submit');
                  setFabotMessage('完成分析了嗎？讓我看看你的答案！');
                }}
                className="btn-primary flex-1"
              >
                我已完成分析 →
              </button>
            </div>
          </motion.div>
        )}

        {currentStep === 'submit' && (
          <motion.div
            key="submit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-glow mb-4">提交你的分析</h3>
            
            {/* 這裡會根據任務類型顯示不同的問題 */}
            <div className="p-6 rounded-xl bg-space-blue/20 border border-energy-cyan/30">
              <p className="text-star-white/80 mb-4">
                根據你的分析，請回答以下問題：
              </p>
              
              {/* 示例：選擇題 */}
              <div className="space-y-3">
                <label className="block text-star-white font-bold mb-2">
                  你推薦哪個座標作為著陸點？
                </label>
                <div className="space-y-2">
                  {['座標 A', '座標 B', '座標 C'].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 p-3 rounded-lg bg-space-dark/50 hover:bg-space-dark/70 cursor-pointer transition-all"
                    >
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        className="w-4 h-4"
                      />
                      <span className="text-star-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 文字說明 */}
              <div className="mt-6">
                <label className="block text-star-white font-bold mb-2">
                  請簡述你的理由：
                </label>
                <textarea
                  className="w-full p-4 rounded-lg bg-space-dark/50 text-star-white border border-energy-cyan/30 focus:border-energy-cyan focus:outline-none min-h-[120px]"
                  placeholder="說明你選擇這個答案的原因..."
                />
              </div>
            </div>

            {/* 操作按鈕 */}
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep('data')}
                className="btn-secondary"
              >
                ← 重新查看數據
              </button>
              <button
                onClick={() => {
                  // 這裡會處理提交邏輯
                  onComplete({ success: true });
                }}
                className="btn-primary flex-1"
              >
                提交答案 →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 進度指示器 */}
      <div className="mt-8 flex justify-center gap-2">
        {['intro', 'data', 'submit'].map((step, index) => (
          <div
            key={step}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentStep === step
                ? 'bg-energy-cyan w-8'
                : index < ['intro', 'data', 'submit'].indexOf(currentStep)
                ? 'bg-energy-cyan/50'
                : 'bg-star-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
