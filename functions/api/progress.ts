// Cloudflare Pages Function - 用戶進度 API
// 路徑: /api/progress

interface Env {
  PROGRESS_KV: KVNamespace; // Cloudflare KV（需要在 Dashboard 綁定）
}

interface UserProgress {
  userId: string;
  completedMissions: string[];
  currentMission: string;
  achievements: string[];
  lastUpdated: string;
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  try {
    const url = new URL(context.request.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return new Response(JSON.stringify({ error: '需要提供 userId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 從 KV 讀取進度（如果沒有綁定 KV，使用 localStorage）
    let progress: UserProgress | null = null;
    
    if (context.env.PROGRESS_KV) {
      const data = await context.env.PROGRESS_KV.get(`progress:${userId}`);
      progress = data ? JSON.parse(data) : null;
    }

    // 如果沒有進度，返回預設值
    if (!progress) {
      progress = {
        userId,
        completedMissions: [],
        currentMission: 'moon-landing',
        achievements: [],
        lastUpdated: new Date().toISOString()
      };
    }

    return new Response(JSON.stringify(progress), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Progress GET Error:', error);
    return new Response(JSON.stringify({
      error: '無法獲取進度'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const progress: UserProgress = await context.request.json();

    if (!progress.userId) {
      return new Response(JSON.stringify({ error: '需要提供 userId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 更新時間戳
    progress.lastUpdated = new Date().toISOString();

    // 保存到 KV（如果有綁定）
    if (context.env.PROGRESS_KV) {
      await context.env.PROGRESS_KV.put(
        `progress:${progress.userId}`,
        JSON.stringify(progress)
      );
    }

    return new Response(JSON.stringify({
      success: true,
      progress
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Progress POST Error:', error);
    return new Response(JSON.stringify({
      error: '無法保存進度'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// CORS
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
