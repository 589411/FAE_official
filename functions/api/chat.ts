// Cloudflare Pages Function - AI 聊天 API
// 路徑: /api/chat

interface Env {
  OPENAI_API_KEY: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { message } = await context.request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: '請輸入訊息' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 調用 OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // 使用較便宜的模型
        messages: [
          {
            role: 'system',
            content: `你是 ARK-01 太空船的 AI 助手。你的任務是協助探險隊員學習 AI 相關知識。
            
特點：
- 友善且專業
- 用太空探險的比喻解釋 AI 概念
- 鼓勵學習和探索
- 回答要簡潔有趣

請用繁體中文回答。`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error('OpenAI API 錯誤');
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

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
      error: '抱歉，太空船通訊暫時中斷，請稍後再試。'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
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
