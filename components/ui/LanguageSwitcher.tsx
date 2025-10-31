'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-4 right-4 z-30"
    >
      <div className="flex gap-2 bg-space-dark/80 backdrop-blur-md border border-energy-cyan/30 rounded-full p-1">
        <button
          onClick={() => setLanguage('zh')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'zh'
              ? 'bg-energy-cyan text-space-dark'
              : 'text-star-white/60 hover:text-star-white'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-energy-cyan text-space-dark'
              : 'text-star-white/60 hover:text-star-white'
          }`}
        >
          English
        </button>
      </div>
    </motion.div>
  );
}
