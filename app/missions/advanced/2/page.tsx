'use client';
import MissionTemplate, { MissionConfig } from '@/components/missions/MissionTemplate';

const venusMissionConfig: MissionConfig = {
  id: 2,
  title: { zh: '金星探索：AI視覺與圖像生成', en: 'Venus Exploration: AI Visual & Image Generation' },
  icon: '♀️',
  sections: {
    zh: [
      {
        id: 'intro',
        title: '金星：美學與視覺藝術',
        content: '歡迎來到金星！作為太陽系最明亮的行星，金星象徵著美學與視覺藝術。在這個任務中，你將學習 AI 圖像生成技術，掌握 Midjourney、DALL-E、Stable Diffusion 等工具，創造令人驚艷的視覺作品。',
        type: 'text'
      },
      {
        id: 'ai-art-tools',
        title: 'AI 繪圖工具概覽',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">三大主流 AI 繪圖工具各有特色：</p>
            <div className="grid gap-4">
              <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🎨</span>
                  <h5 className="text-purple-400 font-bold text-lg">Midjourney</h5>
                </div>
                <p className="text-star-white/80 mb-2">藝術性最強，適合創意設計</p>
                <ul className="space-y-1 text-sm text-star-white/70">
                  <li>• 風格多樣，藝術感強</li>
                  <li>• 透過 Discord 操作</li>
                  <li>• 適合：概念藝術、插畫、海報</li>
                </ul>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🖼️</span>
                  <h5 className="text-blue-400 font-bold text-lg">DALL-E 3</h5>
                </div>
                <p className="text-star-white/80 mb-2">最易用，與 ChatGPT 整合</p>
                <ul className="space-y-1 text-sm text-star-white/70">
                  <li>• 文字理解能力強</li>
                  <li>• 操作簡單直觀</li>
                  <li>• 適合：快速原型、產品圖、社群圖文</li>
                </ul>
              </div>
              <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚡</span>
                  <h5 className="text-green-400 font-bold text-lg">Stable Diffusion</h5>
                </div>
                <p className="text-star-white/80 mb-2">開源免費，可自行部署</p>
                <ul className="space-y-1 text-sm text-star-white/70">
                  <li>• 完全可控，可微調模型</li>
                  <li>• 社群資源豐富</li>
                  <li>• 適合：專業創作、批量生成、特定風格</li>
                </ul>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'prompt-techniques',
        title: '圖像 Prompt 撰寫技巧',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">優秀的圖像 Prompt 結構：</p>
            <div className="p-6 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
              <h4 className="text-energy-cyan font-bold mb-4">📝 Prompt 組成要素</h4>
              <div className="space-y-3">
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">1. 主體 (Subject)</div>
                  <div className="text-sm text-star-white/70">描述畫面的主要內容</div>
                  <div className="text-xs text-energy-cyan/70 mt-1">例：a lunar base on the moon surface</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">2. 風格 (Style)</div>
                  <div className="text-sm text-star-white/70">藝術風格或參考藝術家</div>
                  <div className="text-xs text-energy-cyan/70 mt-1">例：sci-fi realistic style, NASA concept art</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">3. 細節 (Details)</div>
                  <div className="text-sm text-star-white/70">顏色、材質、光線等</div>
                  <div className="text-xs text-energy-cyan/70 mt-1">例：starlight, metallic spacecraft, Earth in background</div>
                </div>
                <div className="p-3 bg-space-dark/50 rounded">
                  <div className="text-energy-cyan font-bold mb-1">4. 構圖 (Composition)</div>
                  <div className="text-sm text-star-white/70">視角、景深、比例</div>
                  <div className="text-xs text-energy-cyan/70 mt-1">例：wide angle, cinematic, 8k resolution</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
              <p className="text-sm text-star-white/70">
                <span className="text-energy-cyan font-bold">💡 進階技巧：</span>
                使用權重調整 (weight)、負面提示 (negative prompt)、以及參數調整來精確控制生成結果。
              </p>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'design-workflow',
        title: 'AI 輔助設計流程',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">將 AI 整合到設計工作流程：</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">💭</div>
                <h5 className="text-energy-cyan font-bold mb-2">1. 概念發想</h5>
                <p className="text-sm text-star-white/70">使用 AI 快速生成多個設計概念和方向</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">🎨</div>
                <h5 className="text-energy-cyan font-bold mb-2">2. 風格探索</h5>
                <p className="text-sm text-star-white/70">測試不同風格、配色和構圖方案</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">✨</div>
                <h5 className="text-energy-cyan font-bold mb-2">3. 細節優化</h5>
                <p className="text-sm text-star-white/70">使用 AI 工具進行局部修改和優化</p>
              </div>
              <div className="p-4 bg-space-blue/30 rounded-lg border border-energy-cyan/30">
                <div className="text-2xl mb-2">🖌️</div>
                <h5 className="text-energy-cyan font-bold mb-2">4. 後期處理</h5>
                <p className="text-sm text-star-white/70">結合傳統工具進行最終調整</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'brand-visual',
        title: '品牌視覺應用',
        content: (
          <div className="space-y-4">
            <p className="text-star-white/80">AI 在品牌視覺設計中的應用：</p>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🎯 Logo 設計</h5>
                <p className="text-sm text-star-white/70">快速生成 logo 概念，探索不同設計方向</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">📱 社群素材</h5>
                <p className="text-sm text-star-white/70">批量生成 Instagram、Facebook 等平台的視覺內容</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">📦 產品視覺</h5>
                <p className="text-sm text-star-white/70">產品包裝、型錄、電商主視覺設計</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-energy-cyan/10 to-energy-purple/10 rounded-lg border border-energy-cyan/30">
                <h5 className="text-energy-cyan font-bold mb-2">🎪 活動視覺</h5>
                <p className="text-sm text-star-white/70">海報、Banner、邀請函等活動素材</p>
              </div>
            </div>
          </div>
        ),
        type: 'interactive'
      },
      {
        id: 'style-transfer',
        title: '風格轉換與圖像編輯',
        content: `進階圖像處理技術：

🎭 風格轉換
• 將照片轉換成特定藝術風格
• 保持內容結構，改變視覺風格
• 應用：藝術創作、品牌風格統一

✂️ 圖像編輯
• Inpainting：修復或替換圖像部分
• Outpainting：擴展圖像邊界
• 背景移除和替換
• 圖像放大和增強

🔄 變體生成
• 基於原圖生成多個變體
• 保持主題，探索不同可能性
• 快速迭代設計方案`,
        type: 'text'
      },
      {
        id: 'quiz',
        title: '金星任務評估',
        content: '測試你對 AI 視覺與圖像生成的掌握',
        type: 'quiz'
      }
    ],
    en: [
      {
        id: 'intro',
        title: 'Venus: Aesthetics and Visual Arts',
        content: 'Welcome to Venus! As the brightest planet in the solar system, Venus symbolizes aesthetics and visual arts. Learn AI image generation with Midjourney, DALL-E, and Stable Diffusion.',
        type: 'text'
      },
      {
        id: 'ai-art-tools',
        title: 'AI Art Tools Overview',
        content: 'Three major AI art tools: Midjourney (artistic), DALL-E 3 (user-friendly), and Stable Diffusion (open-source).',
        type: 'text'
      },
      {
        id: 'prompt-techniques',
        title: 'Image Prompt Writing Techniques',
        content: 'Excellent image prompt structure: subject, style, details, and composition.',
        type: 'text'
      },
      {
        id: 'design-workflow',
        title: 'AI-Assisted Design Workflow',
        content: 'Integrate AI into design: concept generation, style exploration, detail optimization, and post-processing.',
        type: 'text'
      },
      {
        id: 'brand-visual',
        title: 'Brand Visual Applications',
        content: 'AI in brand visual design: logo design, social media assets, product visuals, and event graphics.',
        type: 'text'
      },
      {
        id: 'style-transfer',
        title: 'Style Transfer & Image Editing',
        content: 'Advanced image processing: style transfer, image editing (inpainting, outpainting), and variant generation.',
        type: 'text'
      },
      {
        id: 'quiz',
        title: 'Venus Mission Assessment',
        content: 'Test your mastery of AI visual and image generation',
        type: 'quiz'
      }
    ]
  },
  quiz: {
    zh: [
      {
        id: 'q1',
        question: '三大 AI 繪圖工具中，哪個最適合快速原型和產品圖？',
        options: ['Midjourney', 'DALL-E 3', 'Stable Diffusion', '都一樣'],
        correct: 1,
        explanation: 'DALL-E 3 與 ChatGPT 整合，操作簡單直觀，最適合快速原型和產品圖的生成。'
      },
      {
        id: 'q2',
        question: '圖像 Prompt 的四大組成要素是什麼？',
        options: [
          '顏色、大小、位置、時間',
          '主體、風格、細節、構圖',
          '人物、場景、動作、情緒',
          '前景、中景、後景、天空'
        ],
        correct: 1,
        explanation: '優秀的圖像 Prompt 應包含主體(Subject)、風格(Style)、細節(Details)和構圖(Composition)。'
      },
      {
        id: 'q3',
        question: 'Stable Diffusion 相比其他工具的最大優勢是什麼？',
        options: [
          '生成速度最快',
          '圖像質量最好',
          '開源免費，可自行部署和微調',
          '最容易使用'
        ],
        correct: 2,
        explanation: 'Stable Diffusion 是開源的，可以自行部署、微調模型，提供最大的靈活性和控制力。'
      },
      {
        id: 'q4',
        question: 'Inpainting 技術的主要用途是什麼？',
        options: [
          '生成全新圖像',
          '修復或替換圖像的特定部分',
          '改變整體風格',
          '放大圖像'
        ],
        correct: 1,
        explanation: 'Inpainting 用於修復或替換圖像的特定部分，保持其他區域不變。'
      },
      {
        id: 'q5',
        question: 'AI 在品牌視覺設計中的最佳應用方式是？',
        options: [
          '完全取代設計師',
          '只用於生成最終成品',
          '輔助概念發想和快速迭代',
          '只用於簡單的圖像處理'
        ],
        correct: 2,
        explanation: 'AI 最適合輔助概念發想、快速生成多個方案，讓設計師可以更快速地迭代和優化設計。'
      }
    ],
    en: [
      {
        id: 'q1',
        question: 'Among the three major AI art tools, which is best for quick prototypes and product images?',
        options: ['Midjourney', 'DALL-E 3', 'Stable Diffusion', 'All the same'],
        correct: 1,
        explanation: 'DALL-E 3 integrates with ChatGPT, is simple and intuitive, making it ideal for quick prototypes and product images.'
      },
      {
        id: 'q2',
        question: 'What are the four main components of an image prompt?',
        options: [
          'Color, size, position, time',
          'Subject, style, details, composition',
          'Character, scene, action, emotion',
          'Foreground, midground, background, sky'
        ],
        correct: 1,
        explanation: 'Excellent image prompts should include Subject, Style, Details, and Composition.'
      },
      {
        id: 'q3',
        question: 'What is Stable Diffusion\'s biggest advantage over other tools?',
        options: [
          'Fastest generation speed',
          'Best image quality',
          'Open-source, free, can be self-deployed and fine-tuned',
          'Easiest to use'
        ],
        correct: 2,
        explanation: 'Stable Diffusion is open-source, allowing self-deployment and model fine-tuning for maximum flexibility and control.'
      },
      {
        id: 'q4',
        question: 'What is the main purpose of Inpainting technology?',
        options: [
          'Generate entirely new images',
          'Repair or replace specific parts of an image',
          'Change overall style',
          'Enlarge images'
        ],
        correct: 1,
        explanation: 'Inpainting is used to repair or replace specific parts of an image while keeping other areas unchanged.'
      },
      {
        id: 'q5',
        question: 'What is the best way to apply AI in brand visual design?',
        options: [
          'Completely replace designers',
          'Only for generating final products',
          'Assist with concept generation and rapid iteration',
          'Only for simple image processing'
        ],
        correct: 2,
        explanation: 'AI is best for assisting with concept generation and quickly creating multiple options for faster iteration and optimization.'
      }
    ]
  },
  rewards: {
    zh: ['🎖️ 金星藝術家徽章', '🎨 AI 視覺工具包', '🖼️ 專業 Prompt 模板集'],
    en: ['🎖️ Venus Artist Badge', '🎨 AI Visual Toolkit', '🖼️ Professional Prompt Template Set']
  },
  points: 350
};

export default function VenusMissionPage() {
  return <MissionTemplate config={venusMissionConfig} />;
}
