// Cloudflare Pages Function - 航行日誌 API
// 路徑: /api/logs

interface LogEntry {
  id: string;
  timestamp: string;
  title: string;
  content: string;
  type: 'exploration' | 'learning' | 'achievement';
}

// 模擬數據庫（之後可以換成 D1）
const SAMPLE_LOGS: LogEntry[] = [
  {
    id: 'log-001',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    title: '月球軌道進入成功',
    content: '太空船 ARK-01 成功進入月球軌道。開始進行 AI 基礎能力訓練任務。所有系統運作正常，探險隊員們準備開始第一階段的學習任務。',
    type: 'exploration'
  },
  {
    id: 'log-002',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    title: 'Prompt Engineering 實戰完成',
    content: '完成了 AI 對話技巧訓練。學員們成功掌握了如何與 AI 進行有效溝通，學習成果超出預期。',
    type: 'learning'
  },
  {
    id: 'log-003',
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    title: '數據分析任務達成',
    content: '利用 AI 工具成功分析了月球表面數據，發現了新的學習模式。這次任務證明了 AI 在數據分析中的強大能力。',
    type: 'achievement'
  },
  {
    id: 'log-004',
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    title: '火星航道規劃中',
    content: '準備進入火星任務階段，將開始 AI 行銷與自動化應用的學習。預計 48 小時後抵達火星軌道。',
    type: 'exploration'
  },
  {
    id: 'log-005',
    timestamp: new Date(Date.now() - 18000000).toISOString(),
    title: 'AI 圖像生成訓練',
    content: '探險隊員們學習了如何使用 AI 生成圖像，創造了許多令人驚艷的太空藝術作品。',
    type: 'learning'
  }
];

export async function onRequestGet(context: { request: Request }) {
  try {
    const url = new URL(context.request.url);
    const limit = parseInt(url.searchParams.get('limit') || '5');
    const type = url.searchParams.get('type') as LogEntry['type'] | null;

    let logs = [...SAMPLE_LOGS];

    // 按類型篩選
    if (type) {
      logs = logs.filter(log => log.type === type);
    }

    // 限制數量
    logs = logs.slice(0, limit);

    return new Response(JSON.stringify({
      logs,
      total: SAMPLE_LOGS.length,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60' // 快取 1 分鐘
      }
    });

  } catch (error) {
    console.error('Logs API Error:', error);
    return new Response(JSON.stringify({
      error: '無法獲取航行日誌'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// 隨機獲取一條日誌（用於通知）
export async function onRequestPost(context: { request: Request }) {
  try {
    const randomLog = SAMPLE_LOGS[Math.floor(Math.random() * SAMPLE_LOGS.length)];

    return new Response(JSON.stringify({
      log: randomLog,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      error: '無法獲取日誌'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
