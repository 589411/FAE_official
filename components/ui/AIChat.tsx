'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export default function AIChat() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input, language })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const aiMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: data.timestamp
      };

      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: t('chat.error'),
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 浮動按鈕 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-16 h-16 bg-energy-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
      >
        <span className="text-2xl">🤖</span>
      </button>

      {/* 聊天視窗 */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-96 h-[500px] glass rounded-lg shadow-2xl z-50 flex flex-col">
          {/* 標題欄 */}
          <div className="flex items-center justify-between p-4 border-b border-energy-cyan/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
              <h3 className="font-bold text-energy-cyan">{t('chat.title')}</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-star-white/50 hover:text-star-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* 訊息區域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-star-white/60 mt-8">
                <p className="mb-2">👋 {t('chat.welcome1')}</p>
                <p className="text-sm">{t('chat.welcome2')}</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-energy-cyan text-space-black'
                        : 'bg-deep-space text-star-white border border-energy-cyan/30'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-deep-space text-star-white border border-energy-cyan/30 p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-energy-cyan rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-energy-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-energy-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 輸入區域 */}
          <div className="p-4 border-t border-energy-cyan/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t('chat.placeholder')}
                disabled={loading}
                className="flex-1 bg-deep-space border border-energy-cyan/30 rounded-lg px-4 py-2 text-star-white placeholder-star-white/50 focus:outline-none focus:border-energy-cyan transition-colors disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="px-4 py-2 bg-energy-cyan text-space-black rounded-lg font-bold hover:bg-star-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('chat.send')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
