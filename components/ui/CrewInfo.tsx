'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CrewInfo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed top-20 left-4 z-30"
    >
      {/* 收起狀態：只顯示圖標 */}
      {!isExpanded && (
        <motion.button
          onClick={() => setIsExpanded(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-energy-cyan/20 to-energy-purple/20 backdrop-blur-md border border-energy-cyan/30 flex items-center justify-center cursor-pointer hover:border-energy-cyan transition-all duration-300 group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">👥</span>
        </motion.button>
      )}

      {/* 展開狀態：顯示完整資訊 */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: -20 }}
          className="bg-gradient-to-br from-space-dark/95 to-space-blue/95 backdrop-blur-md border border-energy-cyan/30 rounded-xl p-4 shadow-2xl max-w-xs"
        >
          {/* 標題和關閉按鈕 */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-energy-cyan flex items-center gap-2">
              <span>🚀</span>
              <span>{t('crew.title')}</span>
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-star-white/50 hover:text-star-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* 指揮官資訊 */}
          <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 border border-energy-cyan/20">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-energy-cyan/30 to-energy-purple/30 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-energy-cyan/50">
                👨‍🚀
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-star-white font-bold text-sm">{t('crew.joseph.title')}</h4>
                  <span className="px-2 py-0.5 bg-energy-cyan/20 text-energy-cyan text-xs rounded-full border border-energy-cyan/30">
                    {t('crew.joseph.role')}
                  </span>
                </div>
                <p className="text-star-white/70 text-xs leading-relaxed mb-2">
                  {t('crew.joseph.desc')}
                </p>
                <a 
                  href="mailto:future.ark.ai@gmail.com"
                  className="inline-flex items-center gap-1 text-xs text-energy-cyan hover:text-star-white transition-colors"
                >
                  <span>📧</span>
                  <span>future.ark.ai@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* 特別來賓提示 */}
          <div className="p-3 rounded-lg bg-gradient-to-r from-energy-purple/10 to-energy-cyan/10 border border-energy-purple/20">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-energy-purple/30 to-energy-cyan/30 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-energy-purple/50">
                👧
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-star-white font-bold text-sm">{t('crew.joy.title')}</h4>
                  <span className="px-2 py-0.5 bg-energy-purple/20 text-energy-purple text-xs rounded-full border border-energy-purple/30">
                    {t('crew.joy.role')}
                  </span>
                </div>
                <p className="text-star-white/70 text-xs leading-relaxed">
                  {t('crew.joy.desc')}
                </p>
              </div>
            </div>
          </div>

          {/* 底部標語 */}
          <div className="mt-4 pt-3 border-t border-energy-cyan/20">
            <p className="text-xs text-center text-star-white/50 italic">
              "{t('crew.motto')}"
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
