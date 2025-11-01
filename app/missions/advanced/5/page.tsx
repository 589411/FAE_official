'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const saturnMissionConfig: MissionConfig = {
  id: 5,
  title: { zh: '土星工坊：AI語音與多媒體應用', en: 'Saturn Workshop: AI Voice & Multimedia' },
  icon: '♄',
  sections: {
    zh: [
      { id: 'intro', title: '土星：多元媒體與豐富內容', content: '歡迎來到土星！擁有壯麗光環的土星象徵著多元媒體與豐富內容。在這個任務中，你將探索 AI 語音合成、音樂生成、影片製作與多媒體整合，打造沉浸式體驗。', type: 'text' },
      {
        id: 'voice-synthesis',
        title: 'AI 語音合成技術',
        content: `AI 語音技術應用：

🎙️ 文字轉語音 (TTS)
• 自然流暢的語音生成
• 多語言、多音色支持
• 情緒和語調控制
• 工具：ElevenLabs, Azure TTS, Google TTS

🎧 語音克隆
• 複製特定人聲
• 少量樣本即可訓練
• 應用：有聲書、配音、虛擬助理

🗣️ 語音轉文字 (STT)
• 會議記錄自動化
• 字幕生成
• 語音指令識別`,
        type: 'text'
      },
      {
        id: 'music-generation',
        title: 'AI 音樂與音效生成',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">AI 音樂創作工具：</p>
            <div className="grid gap-4">
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                <h5 className="text-purple-400 font-bold mb-2">🎵 背景音樂生成</h5>
                <p className="text-sm text-star-white/70">為影片、Podcast、遊戲創作配樂</p>
                <p className="text-xs text-star-white/50 mt-1">工具：Suno AI, AIVA, Soundraw</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                <h5 className="text-blue-400 font-bold mb-2">🎼 旋律創作</h5>
                <p className="text-sm text-star-white/70">生成原創旋律和和弦進行</p>
                <p className="text-xs text-star-white/50 mt-1">工具：MuseNet, Amper Music</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                <h5 className="text-green-400 font-bold mb-2">🔊 音效設計</h5>
                <p className="text-sm text-star-white/70">生成特定場景的音效</p>
                <p className="text-xs text-star-white/50 mt-1">工具：AudioCraft, Riffusion</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'video-production',
        title: 'AI 影片製作',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">AI 輔助影片製作流程：</p>
            <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-4">🎬 影片製作步驟</h4>
              <div className="space-y-3">
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">1. 腳本生成</div>
                  <div className="text-sm text-star-white/70">使用 ChatGPT 撰寫影片腳本和分鏡</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">2. 視覺素材</div>
                  <div className="text-sm text-star-white/70">AI 生成圖像、動畫、B-roll 素材</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">3. 配音與音樂</div>
                  <div className="text-sm text-star-white/70">AI 語音合成和背景音樂生成</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">4. 剪輯與特效</div>
                  <div className="text-sm text-star-white/70">AI 輔助剪輯、字幕生成、特效添加</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">5. 優化與發布</div>
                  <div className="text-sm text-star-white/70">標題、描述、標籤優化，多平台發布</div>
                </div>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'multimedia-integration',
        title: '多媒體整合專案',
        content: `打造完整的多媒體體驗：

📚 太空有聲書製作
• AI 語音朗讀太空探索故事
• 太空背景音效和音樂
• 太空任務章節管理和導航

🎙️ 太空 Podcast 製作
• 太空探索腳本生成和優化
• AI 太空專家主持人
• 太空任務自動剪輯和後製

🎥 太空影片內容
• 太空任務教學影片
• 太空設備介紹
• 太空探索短影音
• 太空站直播輔助

🎮 太空互動體驗
• 太空語音互動遊戲
• 太空 AR/VR 內容
• 互動式太空探索故事`,
        type: 'text'
      },
      {
        id: 'tools-platforms',
        title: 'AI 多媒體工具平台',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">推薦的 AI 多媒體工具：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🎙️ 語音工具</h5>
                <p className="text-sm text-star-white/70">ElevenLabs, Descript, Murf AI</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🎵 音樂工具</h5>
                <p className="text-sm text-star-white/70">Suno AI, AIVA, Soundraw</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🎬 影片工具</h5>
                <p className="text-sm text-star-white/70">Runway ML, Synthesia, Pictory</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🎨 整合平台</h5>
                <p className="text-sm text-star-white/70">Adobe Firefly, Canva AI</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      { id: 'quiz', title: '土星任務評估', content: '測試你對 AI 語音與多媒體的掌握', type: 'quiz' }
    ],
    en: [
      { id: 'intro', title: 'Saturn: Diverse Media and Rich Content', content: 'Welcome to Saturn! With its magnificent rings, Saturn symbolizes diverse media and rich content. Explore AI voice synthesis, music generation, video production, and multimedia integration.', type: 'text' },
      { id: 'voice-synthesis', title: 'AI Voice Synthesis Technology', content: 'AI voice applications: text-to-speech (TTS), voice cloning, and speech-to-text (STT).', type: 'text' },
      { id: 'music-generation', title: 'AI Music & Sound Generation', content: 'AI music creation tools: background music generation, melody creation, and sound design.', type: 'text' },
      { id: 'video-production', title: 'AI Video Production', content: 'AI-assisted video production: script generation, visual assets, voiceover and music, editing and effects, optimization and publishing.', type: 'text' },
      { id: 'multimedia-integration', title: 'Multimedia Integration Projects', content: 'Create complete multimedia experiences: audiobooks, podcasts, video content, and interactive experiences.', type: 'text' },
      { id: 'tools-platforms', title: 'AI Multimedia Tool Platforms', content: 'Recommended tools: voice tools, music tools, video tools, and integration platforms.', type: 'text' },
      { id: 'quiz', title: 'Saturn Mission Assessment', content: 'Test your mastery of AI voice and multimedia', type: 'quiz' }
    ]
  },
  quiz: {
    zh: [
      { id: 'q1', question: 'TTS 代表什麼？', options: ['Text To Sound', 'Text To Speech', 'Time To Start', 'Total Text System'], correct: 1 },
      { id: 'q2', question: 'AI 語音克隆技術最適合用於？', options: ['取代真人', '有聲書、配音、虛擬助理等應用', '只能用於娛樂', '沒有實際用途'], correct: 1 },
      { id: 'q3', question: 'AI 影片製作流程的第一步通常是？', options: ['直接開始剪輯', '腳本生成和分鏡規劃', '添加特效', '發布影片'], correct: 1 },
      { id: 'q4', question: 'Podcast 製作中，AI 可以幫助什麼？', options: ['只能生成音樂', '腳本生成、語音合成、自動剪輯等全流程', '只能做字幕', '無法應用'], correct: 1 }
    ],
    en: [
      { id: 'q1', question: 'What does TTS stand for?', options: ['Text To Sound', 'Text To Speech', 'Time To Start', 'Total Text System'], correct: 1 },
      { id: 'q2', question: 'What is AI voice cloning technology best used for?', options: ['Replacing real people', 'Audiobooks, dubbing, virtual assistants, etc.', 'Only for entertainment', 'No practical use'], correct: 1 },
      { id: 'q3', question: 'What is typically the first step in AI video production?', options: ['Start editing directly', 'Script generation and storyboard planning', 'Add effects', 'Publish video'], correct: 1 },
      { id: 'q4', question: 'How can AI help in podcast production?', options: ['Only generate music', 'Script generation, voice synthesis, auto-editing, etc.', 'Only subtitles', 'Cannot be applied'], correct: 1 }
    ]
  },
  rewards: { zh: ['🎖️ 土星創作者徽章', '🎧 多媒體創作套件', '🎵 AI 音樂庫'], en: ['🎖️ Saturn Creator Badge', '🎧 Multimedia Creation Suite', '🎵 AI Music Library'] },
  points: 500
};

export default function SaturnMissionPage() {
  return <MissionTemplate config={saturnMissionConfig} />;
}
