import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Get backend URL from environment variable, with fallback
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_CHATBOT_API_URL || 'https://portfolio-ai-icl1.onrender.com';
    
    // The Flask backend endpoint is /chat (not /api/chat)
    const apiUrl = `${backendUrl}/chat`;
    
    console.log('Calling backend API:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(30000), // 30 second timeout
    });

    console.log('Backend response status:', response.status);

    if (response.ok) {
      const data = await response.json();
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
          error: `API endpoint not found (404). Backend URL: ${apiUrl}`,
          status: response.status,
        },
        { status: 404 }
      );
    }
    
    throw new Error(errorMessage);
    
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Check if it's a timeout or connection error
    if (errorMessage.includes('timeout') || errorMessage.includes('fetch')) {
      return NextResponse.json(
        { 
          error: 'The chat service is currently unavailable. The server might be starting up (Render free tier apps sleep after inactivity). Please try again in a moment.',
          details: errorMessage
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to process chat request',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
