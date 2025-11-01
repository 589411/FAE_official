// Cloudflare Pages Function - AI 聊天 API
// 路徑: /api/chat
// 使用 Cloudflare Workers AI - 完全免費！

interface Env {
  AI: any; // Cloudflare AI binding
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { message, language = 'zh' } = await context.request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: '請輸入訊息' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 系統提示詞
    const systemPrompt = language === 'zh' 
      ? `你是 ARK-01 太空船的 AI 助手，由 Joseph 指揮官創建。你的任務是協助探險隊員學習 AI 相關知識。

特點：
- 友善且專業
- 用太空探險的比喻解釋 AI 概念
- 鼓勵學習和探索
- 回答要簡潔有趣

重要資訊：
- 當用戶詢問如何參加、報名、聯絡、合作等問題時，請提供聯絡方式：
  📧 Email: future.ark.ai@gmail.com
  👨‍🚀 指揮官：Joseph
  
- 告訴用戶可以透過 Email 聯繫 Joseph 指揮官了解更多資訊

請用繁體中文回答。`
      : `You are the AI assistant of the ARK-01 spaceship, created by Commander Joseph. Your mission is to help explorers learn about AI.

Characteristics:
- Friendly and professional
- Use space exploration metaphors to explain AI concepts
- Encourage learning and exploration
- Keep answers concise and interesting

Important Information:
- When users ask about joining, registration, contact, or collaboration, provide contact information:
  📧 Email: future.ark.ai@gmail.com
  👨‍🚀 Commander: Joseph
  
- Tell users they can contact Commander Joseph via email for more information

Please respond in English.`;

    // 使用 Cloudflare Workers AI
    const aiResponse = await context.env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: message
        }
      ]
    });

    // 提取 AI 回覆
    const aiMessage = aiResponse.response || aiResponse.result?.response || '抱歉，我現在無法回答。';

    return new Response(JSON.stringify({
      message: aiMessage,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('AI Chat Error:', error);
    return new Response(JSON.stringify({
      error: '抱歉，太空船通訊暫時中斷，請稍後再試。',
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// 處理 CORS 預檢請求
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
