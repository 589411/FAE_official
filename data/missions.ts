// 任務數據 - 支持多語言

export interface MissionData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  status: string;
  duration: string;
  difficulty: string;
  points: number;
  skills: string[];
  objectives: string[];
  rewards: string[];
  planet?: string;
  planetInfo?: string;
  prerequisites?: string[];
  useCases?: string[];
}

export const basicMissionsData = {
  zh: [
    {
      id: 1,
      title: '太空船發射：AI基礎能力啟動',
      subtitle: 'Mission 01 | Rocket Launch',
      description: '從零開始認識 AI，了解機器學習的基本原理，學會使用 ChatGPT 等 AI 工具提升工作效率',
      icon: '🚀',
      status: 'available',
      duration: '2-3 小時',
      difficulty: 'beginner',
      points: 100,
      skills: ['AI 基礎概念', 'Prompt 工程', '工具應用'],
      objectives: [
        '理解 AI 與機器學習的核心概念',
        '掌握 ChatGPT 的基本使用技巧',
        '學會撰寫有效的 AI 提示詞',
        '完成第一個 AI 輔助專案'
      ],
      rewards: ['🎖️ 太空探險者徽章', '⭐ 100 探險點數', '🔓 解鎖月球任務']
    },
    {
      id: 2,
      title: '月球登陸準備：數據分析與決策演練',
      subtitle: 'Mission 02 | Lunar Preparation',
      description: '學習如何使用 AI 進行數據分析，從海量資訊中提取關鍵洞察，做出數據驅動的決策',
      icon: '🌙',
      status: 'available',
      duration: '3-4 小時',
      difficulty: 'beginner',
      points: 150,
      skills: ['數據分析', '資訊提取', '決策思維'],
      objectives: [
        '使用 AI 工具進行數據清理與整理',
        '學會從數據中發現趨勢與模式',
        '掌握數據視覺化的基本技巧',
        '完成一個數據分析專案'
      ],
      rewards: ['🎖️ 數據探索者徽章', '⭐ 150 探險點數', '📊 數據分析工具包']
    },
    {
      id: 3,
      title: '月球探索與研究：解碼與洞察的應用',
      subtitle: 'Mission 03 | Lunar Exploration',
      description: '深入探索 AI 在研究與分析中的應用，學會使用 AI 進行文獻研究、市場調查和競品分析',
      icon: '🔍',
      status: 'available',
      duration: '4-5 小時',
      difficulty: 'intermediate',
      points: 200,
      skills: ['研究方法', '洞察分析', '報告撰寫'],
      objectives: [
        '使用 AI 進行快速文獻回顧',
        '掌握市場研究與競品分析技巧',
        '學會從多維度分析問題',
        '產出專業的研究報告'
      ],
      rewards: ['🎖️ 月球研究員徽章', '⭐ 200 探險點數', '🔬 研究工具組']
    },
    {
      id: 4,
      title: '月球宣示：完成成就與獎勵解鎖',
      subtitle: 'Mission 04 | Lunar Declaration',
      description: '整合所學技能，完成一個綜合性的 AI 應用專案，展示你的學習成果並解鎖進階任務',
      icon: '🏆',
      status: 'available',
      duration: '5-6 小時',
      difficulty: 'intermediate',
      points: 250,
      skills: ['專案整合', '成果展示', '問題解決'],
      objectives: [
        '設計並執行一個完整的 AI 專案',
        '整合前三個任務所學的技能',
        '製作專業的成果展示',
        '通過最終評估測驗'
      ],
      rewards: ['🏅 月球征服者徽章', '⭐ 250 探險點數', '🚀 進階任務通行證', '🎁 神秘獎勵包']
    }
  ],
  en: [
    {
      id: 1,
      title: 'Rocket Launch: AI Fundamentals Activation',
      subtitle: 'Mission 01 | Rocket Launch',
      description: 'Learn AI from scratch, understand machine learning basics, and master ChatGPT and other AI tools to boost productivity',
      icon: '🚀',
      status: 'available',
      duration: '2-3 Hours',
      difficulty: 'beginner',
      points: 100,
      skills: ['AI Fundamentals', 'Prompt Engineering', 'Tool Application'],
      objectives: [
        'Understand core concepts of AI and machine learning',
        'Master basic ChatGPT usage techniques',
        'Learn to write effective AI prompts',
        'Complete your first AI-assisted project'
      ],
      rewards: ['🎖️ Space Explorer Badge', '⭐ 100 Explorer Points', '🔓 Unlock Lunar Missions']
    },
    {
      id: 2,
      title: 'Lunar Landing Prep: Data Analysis & Decision Making',
      subtitle: 'Mission 02 | Lunar Preparation',
      description: 'Learn to use AI for data analysis, extract key insights from massive information, and make data-driven decisions',
      icon: '🌙',
      status: 'available',
      duration: '3-4 Hours',
      difficulty: 'beginner',
      points: 150,
      skills: ['Data Analysis', 'Information Extraction', 'Decision Thinking'],
      objectives: [
        'Use AI tools for data cleaning and organization',
        'Learn to discover trends and patterns in data',
        'Master basic data visualization techniques',
        'Complete a data analysis project'
      ],
      rewards: ['🎖️ Data Explorer Badge', '⭐ 150 Explorer Points', '📊 Data Analysis Toolkit']
    },
    {
      id: 3,
      title: 'Lunar Exploration: Decoding & Insight Applications',
      subtitle: 'Mission 03 | Lunar Exploration',
      description: 'Deep dive into AI applications in research and analysis, learn to use AI for literature research, market surveys, and competitive analysis',
      icon: '🔍',
      status: 'available',
      duration: '4-5 Hours',
      difficulty: 'intermediate',
      points: 200,
      skills: ['Research Methods', 'Insight Analysis', 'Report Writing'],
      objectives: [
        'Use AI for rapid literature review',
        'Master market research and competitive analysis',
        'Learn multi-dimensional problem analysis',
        'Produce professional research reports'
      ],
      rewards: ['🎖️ Lunar Researcher Badge', '⭐ 200 Explorer Points', '🔬 Research Toolkit']
    },
    {
      id: 4,
      title: 'Lunar Declaration: Achievement & Reward Unlock',
      subtitle: 'Mission 04 | Lunar Declaration',
      description: 'Integrate learned skills, complete a comprehensive AI application project, showcase your learning outcomes, and unlock advanced missions',
      icon: '🏆',
      status: 'available',
      duration: '5-6 Hours',
      difficulty: 'intermediate',
      points: 250,
      skills: ['Project Integration', 'Outcome Presentation', 'Problem Solving'],
      objectives: [
        'Design and execute a complete AI project',
        'Integrate skills from the first three missions',
        'Create professional outcome presentations',
        'Pass the final assessment'
      ],
      rewards: ['🏅 Lunar Conqueror Badge', '⭐ 250 Explorer Points', '🚀 Advanced Mission Pass', '🎁 Mystery Reward Pack']
    }
  ]
};

export const advancedMissionsData = {
  zh: [
    {
      id: 1,
      title: '水星行動：AI文字與對話應用',
      subtitle: 'Mercury Mission | Text & Dialogue',
      description: '掌握進階 Prompt 工程、對話系統設計、內容生成與文案優化，打造智能化的文字應用',
      icon: '☿️',
      planet: 'Mercury',
      planetInfo: '水星：距離太陽最近的行星，象徵快速溝通與訊息傳遞',
      difficulty: 'intermediate',
      status: 'available',
      duration: '6-8 小時',
      points: 300,
      prerequisites: ['完成所有基礎任務'],
      skills: ['進階 Prompt', '對話設計', '文案優化', 'API 整合'],
      objectives: [
        '掌握進階 Prompt Engineering 技巧',
        '設計與實作 AI 對話機器人',
        '學會使用 AI 進行內容創作與改寫',
        '整合 ChatGPT API 到應用程式'
      ],
      useCases: ['智能客服', '內容生成', '文案優化', '自動回覆'],
      rewards: ['🎖️ 水星使者徽章', '⭐ 300 探險點數', '🤖 AI 對話模板庫']
    },
    {
      id: 2,
      title: '金星探索：AI視覺與圖像生成',
      subtitle: 'Venus Mission | Visual & Image',
      description: '學習 AI 圖像生成、圖片編輯、視覺設計與品牌視覺應用，釋放視覺創意的無限可能',
      icon: '♀️',
      planet: 'Venus',
      planetInfo: '金星：太陽系最明亮的行星，象徵美學與視覺藝術',
      difficulty: 'intermediate',
      status: 'available',
      duration: '7-9 小時',
      points: 350,
      prerequisites: ['完成水星任務'],
      skills: ['AI 繪圖', '圖像編輯', '視覺設計', '風格轉換'],
      objectives: [
        '掌握 Midjourney, DALL-E, Stable Diffusion',
        '學會 AI 輔助視覺設計流程',
        '創作品牌視覺與行銷素材',
        '掌握圖像風格轉換技術'
      ],
      useCases: ['品牌設計', '行銷素材', '社群圖文', '產品視覺'],
      rewards: ['🎖️ 金星藝術家徽章', '⭐ 350 探險點數', '🎨 AI 視覺工具包']
    },
    {
      id: 3,
      title: '火星任務：AI行銷與自動化應用',
      subtitle: 'Mars Mission | Marketing & Automation',
      description: '運用 AI 優化行銷流程、內容策略、客戶經營與數據分析，打造智能行銷系統',
      icon: '♂️',
      planet: 'Mars',
      planetInfo: '火星：紅色行星，象徵行動力與執行力',
      difficulty: 'advanced',
      status: 'available',
      duration: '8-10 小時',
      points: 400,
      prerequisites: ['完成水星與金星任務'],
      skills: ['行銷自動化', 'SEO 優化', '客戶分析', '成效追蹤'],
      objectives: [
        '使用 AI 建立內容行銷系統',
        '自動化社群媒體管理與發文',
        '利用 AI 進行客戶分群與精準行銷',
        '建立數據驅動的行銷決策流程'
      ],
      useCases: ['內容行銷', '社群管理', 'Email 行銷', '客戶經營'],
      rewards: ['🎖️ 火星征服者徽章', '⭐ 400 探險點數', '📊 行銷自動化套件']
    },
    {
      id: 4,
      title: '木星航道：AI資料分析與洞察',
      subtitle: 'Jupiter Mission | Data & Insights',
      description: '深入大數據分析、預測模型、商業智能與決策支持，成為數據科學家',
      icon: '♃',
      planet: 'Jupiter',
      planetInfo: '木星：太陽系最大的行星，象徵龐大數據與深度洞察',
      difficulty: 'advanced',
      status: 'available',
      duration: '10-12 小時',
      points: 450,
      prerequisites: ['完成火星任務'],
      skills: ['數據挖掘', '預測分析', '商業智能', '視覺化報表'],
      objectives: [
        '使用 AI 進行進階數據分析',
        '建立預測模型與趨勢分析',
        '創建互動式數據儀表板',
        '產出可執行的商業洞察報告'
      ],
      useCases: ['業務分析', '趨勢預測', '風險評估', '決策支持'],
      rewards: ['🎖️ 木星分析師徽章', '⭐ 450 探險點數', '📊 數據科學工具箱']
    },
    {
      id: 5,
      title: '土星工坊：AI語音與多媒體應用',
      subtitle: 'Saturn Mission | Voice & Multimedia',
      description: '探索 AI 語音合成、音樂生成、影片製作與多媒體整合，打造沉浸式體驗',
      icon: '♄',
      planet: 'Saturn',
      planetInfo: '土星：擁有壯麗光環，象徵多元媒體與豐富內容',
      difficulty: 'expert',
      status: 'available',
      duration: '12-15 小時',
      points: 500,
      prerequisites: ['完成木星任務'],
      skills: ['AI 語音', '音樂生成', '影片製作', '多媒體整合'],
      objectives: [
        '掌握 AI 語音合成與識別技術',
        '使用 AI 生成音樂與音效',
        '創作 AI 輔助的影片內容',
        '整合多種 AI 工具打造完整專案'
      ],
      useCases: ['有聲書', 'Podcast', '影片配音', '多媒體創作'],
      rewards: ['🎖️ 土星創作者徽章', '⭐ 500 探險點數', '🎧 多媒體創作套件']
    },
    {
      id: 6,
      title: '天王星與海王星：AI前沿應用前瞻',
      subtitle: 'Uranus & Neptune | Future Tech',
      description: '探索 AI 最前沿技術：AGI、多模態 AI、AI Agent、自主系統，成為 AI 領域先驅',
      icon: '⛢',
      planet: 'Uranus & Neptune',
      planetInfo: '外太陽系：神秘的遠方行星，象徵前沿探索與未來願景',
      difficulty: 'expert',
      status: 'available',
      duration: '15-20 小時',
      points: 600,
      prerequisites: ['完成所有前置任務'],
      skills: ['AGI 概念', '多模態 AI', 'AI Agent', '未來趨勢'],
      objectives: [
        '了解 AGI 與未來 AI 發展趨勢',
        '學習多模態 AI 模型的應用',
        '建立自主 AI Agent 系統',
        '探索 AI 在各領域的未來可能性'
      ],
      useCases: ['自主系統', '智能助理', '跨模態應用', '未來場景'],
      rewards: ['🏅 太陽系征服者徽章', '⭐ 600 探險點數', '🚀 AI 先驅證書', '🌟 終極獎勵包']
    }
  ],
  en: [
    {
      id: 1,
      title: 'Mercury Mission: AI Text & Dialogue Applications',
      subtitle: 'Mercury Mission | Text & Dialogue',
      description: 'Master advanced Prompt Engineering, dialogue system design, content generation, and copywriting optimization to build intelligent text applications',
      icon: '☿️',
      planet: 'Mercury',
      planetInfo: 'Mercury: The closest planet to the Sun, symbolizing rapid communication and message delivery',
      difficulty: 'intermediate',
      status: 'available',
      duration: '6-8 Hours',
      points: 300,
      prerequisites: ['Complete all basic missions'],
      skills: ['Advanced Prompts', 'Dialogue Design', 'Copy Optimization', 'API Integration'],
      objectives: [
        'Master advanced Prompt Engineering techniques',
        'Design and implement AI chatbots',
        'Learn to use AI for content creation and rewriting',
        'Integrate ChatGPT API into applications'
      ],
      useCases: ['Smart Customer Service', 'Content Generation', 'Copy Optimization', 'Auto-Reply'],
      rewards: ['🎖️ Mercury Messenger Badge', '⭐ 300 Explorer Points', '🤖 AI Dialogue Template Library']
    },
    {
      id: 2,
      title: 'Venus Exploration: AI Visual & Image Generation',
      subtitle: 'Venus Mission | Visual & Image',
      description: 'Learn AI image generation, photo editing, visual design, and brand visual applications to unleash unlimited visual creativity',
      icon: '♀️',
      planet: 'Venus',
      planetInfo: 'Venus: The brightest planet in the solar system, symbolizing aesthetics and visual arts',
      difficulty: 'intermediate',
      status: 'available',
      duration: '7-9 Hours',
      points: 350,
      prerequisites: ['Complete Mercury mission'],
      skills: ['AI Drawing', 'Image Editing', 'Visual Design', 'Style Transfer'],
      objectives: [
        'Master Midjourney, DALL-E, Stable Diffusion',
        'Learn AI-assisted visual design workflow',
        'Create brand visuals and marketing materials',
        'Master image style transfer techniques'
      ],
      useCases: ['Brand Design', 'Marketing Materials', 'Social Media Graphics', 'Product Visuals'],
      rewards: ['🎖️ Venus Artist Badge', '⭐ 350 Explorer Points', '🎨 AI Visual Toolkit']
    },
    {
      id: 3,
      title: 'Mars Mission: AI Marketing & Automation',
      subtitle: 'Mars Mission | Marketing & Automation',
      description: 'Use AI to optimize marketing processes, content strategy, customer management, and data analysis to build intelligent marketing systems',
      icon: '♂️',
      planet: 'Mars',
      planetInfo: 'Mars: The Red Planet, symbolizing action and execution',
      difficulty: 'advanced',
      status: 'available',
      duration: '8-10 Hours',
      points: 400,
      prerequisites: ['Complete Mercury and Venus missions'],
      skills: ['Marketing Automation', 'SEO Optimization', 'Customer Analysis', 'Performance Tracking'],
      objectives: [
        'Build content marketing systems with AI',
        'Automate social media management and posting',
        'Use AI for customer segmentation and precision marketing',
        'Establish data-driven marketing decision processes'
      ],
      useCases: ['Content Marketing', 'Social Management', 'Email Marketing', 'Customer Management'],
      rewards: ['🎖️ Mars Conqueror Badge', '⭐ 400 Explorer Points', '📊 Marketing Automation Suite']
    },
    {
      id: 4,
      title: 'Jupiter Route: AI Data Analysis & Insights',
      subtitle: 'Jupiter Mission | Data & Insights',
      description: 'Deep dive into big data analysis, predictive models, business intelligence, and decision support to become a data scientist',
      icon: '♃',
      planet: 'Jupiter',
      planetInfo: 'Jupiter: The largest planet in the solar system, symbolizing massive data and deep insights',
      difficulty: 'advanced',
      status: 'available',
      duration: '10-12 Hours',
      points: 450,
      prerequisites: ['Complete Mars mission'],
      skills: ['Data Mining', 'Predictive Analytics', 'Business Intelligence', 'Visual Reports'],
      objectives: [
        'Use AI for advanced data analysis',
        'Build predictive models and trend analysis',
        'Create interactive data dashboards',
        'Produce actionable business insight reports'
      ],
      useCases: ['Business Analysis', 'Trend Forecasting', 'Risk Assessment', 'Decision Support'],
      rewards: ['🎖️ Jupiter Analyst Badge', '⭐ 450 Explorer Points', '📊 Data Science Toolbox']
    },
    {
      id: 5,
      title: 'Saturn Workshop: AI Voice & Multimedia',
      subtitle: 'Saturn Mission | Voice & Multimedia',
      description: 'Explore AI voice synthesis, music generation, video production, and multimedia integration to create immersive experiences',
      icon: '♄',
      planet: 'Saturn',
      planetInfo: 'Saturn: With magnificent rings, symbolizing diverse media and rich content',
      difficulty: 'expert',
      status: 'available',
      duration: '12-15 Hours',
      points: 500,
      prerequisites: ['Complete Jupiter mission'],
      skills: ['AI Voice', 'Music Generation', 'Video Production', 'Multimedia Integration'],
      objectives: [
        'Master AI voice synthesis and recognition',
        'Use AI to generate music and sound effects',
        'Create AI-assisted video content',
        'Integrate multiple AI tools for complete projects'
      ],
      useCases: ['Audiobooks', 'Podcasts', 'Video Dubbing', 'Multimedia Creation'],
      rewards: ['🎖️ Saturn Creator Badge', '⭐ 500 Explorer Points', '🎧 Multimedia Creation Suite']
    },
    {
      id: 6,
      title: 'Uranus & Neptune: AI Frontier Applications',
      subtitle: 'Uranus & Neptune | Future Tech',
      description: 'Explore cutting-edge AI technologies: AGI, multimodal AI, AI Agents, autonomous systems, and become an AI pioneer',
      icon: '⛢',
      planet: 'Uranus & Neptune',
      planetInfo: 'Outer Solar System: Mysterious distant planets, symbolizing frontier exploration and future vision',
      difficulty: 'expert',
      status: 'available',
      duration: '15-20 Hours',
      points: 600,
      prerequisites: ['Complete all prerequisite missions'],
      skills: ['AGI Concepts', 'Multimodal AI', 'AI Agents', 'Future Trends'],
      objectives: [
        'Understand AGI and future AI development trends',
        'Learn multimodal AI model applications',
        'Build autonomous AI Agent systems',
        'Explore AI possibilities across various domains'
      ],
      useCases: ['Autonomous Systems', 'Smart Assistants', 'Cross-modal Applications', 'Future Scenarios'],
      rewards: ['🏅 Solar System Conqueror Badge', '⭐ 600 Explorer Points', '🚀 AI Pioneer Certificate', '🌟 Ultimate Reward Pack']
    }
  ]
};
