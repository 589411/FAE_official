// Cloudflare Pages Function - AI 聊天測試 API
// 路徑: /api/chat-test
// 用途：測試 API 是否正常運作，不需要 OpenAI API Key

export async function onRequestPost(context: { request: Request }) {
  try {
    const { message } = await context.request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: '請輸入訊息' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 模擬回應（不需要 API Key）
    const mockResponses = [
      `🚀 收到你的訊息：「${message}」\n\n太好了！API 運作正常！讓我們一起探索 AI 的世界！`,
      `📊 你問：「${message}」\n\n這是個很棒的問題！AI 就像太空探險一樣充滿驚喜。`,
      `💡 關於「${message}」\n\n我建議你可以從基礎任務開始，循序漸進地學習。`,
      `🌟 訊息已收到：「${message}」\n\n繼續保持好奇心，你會成為優秀的 AI 探險家！`
    ];

    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];

    return new Response(JSON.stringify({
      message: randomResponse,
      timestamp: new Date().toISOString(),
      status: 'success',
      note: '這是測試回應，不使用真實的 OpenAI API'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Test API Error:', error);
    return new Response(JSON.stringify({
      error: '測試 API 錯誤',
      details: error instanceof Error ? error.message : '未知錯誤'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// 處理 GET 請求 - 顯示 API 狀態
export async function onRequestGet() {
  return new Response(JSON.stringify({
    status: 'online',
    message: '✅ Cloudflare Functions API 運作正常！',
    endpoint: '/api/chat-test',
    method: 'POST',
    usage: '發送 POST 請求，body: { "message": "你的訊息" }'
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

// 處理 CORS 預檢請求
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
