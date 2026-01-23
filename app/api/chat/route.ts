import { NextRequest, NextResponse } from 'next/server';

// Helper to create timeout signal (compatible with older Node versions)
function createTimeoutSignal(timeoutMs: number): AbortSignal {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeoutMs);
  return controller.signal;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Get backend URL from environment variable, with fallback
    // Try both NEXT_PUBLIC_* (client-accessible) and regular env vars
    const backendUrl = 
      process.env.NEXT_PUBLIC_API_URL || 
      process.env.NEXT_PUBLIC_CHATBOT_API_URL || 
      process.env.CHATBOT_API_URL ||
      process.env.API_URL ||
      'https://portfolio-ai-icll.onrender.com';
    
    // The Flask backend endpoint is /chat (not /api/chat)
    const apiUrl = `${backendUrl.replace(/\/$/, '')}/chat`;
    
    console.log('Calling backend API:', apiUrl);
    console.log('Environment check - NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
    console.log('Environment check - NEXT_PUBLIC_CHATBOT_API_URL:', process.env.NEXT_PUBLIC_CHATBOT_API_URL);
    
    // Create timeout signal (compatible approach)
    // Reduced timeout to fail faster - Render free tier can take 30-60s to wake up
    const timeoutSignal = createTimeoutSignal(20000); // 20 second timeout
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: timeoutSignal,
    });

    console.log('Backend response status:', response.status);

    if (response.ok) {
      const data = await response.json();
      // Log the response data for debugging calendar link issues
      console.log('Backend response data:', JSON.stringify(data, null, 2));
      return NextResponse.json(data, { status: 200 });
    }
    
    // Handle error responses
    let errorMessage = `API responded with status: ${response.status}`;
    try {
      const errorData = await response.text();
      if (errorData) {
        errorMessage += ` - ${errorData}`;
      }
    } catch (e) {
      // Ignore if we can't read the error body
    }
    
    if (response.status === 404) {
      return NextResponse.json(
        { 
          error: `API endpoint not found (404). Backend URL: ${apiUrl}. Please check your environment variables.`,
          status: response.status,
        },
        { status: 404 }
      );
    }
    
    throw new Error(errorMessage);
    
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Check if it's an abort (timeout) error
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { 
          error: 'The chat service is currently unavailable. The server might be starting up (Render free tier apps sleep after inactivity). Please wait 30-60 seconds and try again.',
          details: 'Request timeout after 20 seconds. The backend server may be waking up from sleep.'
        },
        { status: 503 }
      );
    }
    
    // Check if it's a network/connection error
    if (errorMessage.includes('fetch') || errorMessage.includes('ECONNREFUSED') || errorMessage.includes('ENOTFOUND') || errorMessage.includes('ETIMEDOUT')) {
      return NextResponse.json(
        { 
          error: 'Unable to connect to the chat service. The backend server may be sleeping (Render free tier) or unavailable. Please try again in a moment.',
          details: errorMessage
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to process chat request',
        details: errorMessage,
        response: errorMessage
      },
      { status: 500 }
    );
  }
}
