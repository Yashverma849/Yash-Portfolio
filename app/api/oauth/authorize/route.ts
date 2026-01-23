import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get backend URL from environment variable, with fallback
    const backendUrl = 
      process.env.NEXT_PUBLIC_API_URL || 
      process.env.NEXT_PUBLIC_CHATBOT_API_URL || 
      process.env.CHATBOT_API_URL ||
      process.env.API_URL ||
      'https://portfolio-ai-icll.onrender.com';
    
    // The Flask backend endpoint is /authorize
    const apiUrl = `${backendUrl.replace(/\/$/, '')}/authorize`;
    
    console.log('Redirecting to OAuth authorize endpoint:', apiUrl);
    
    // Redirect to the Flask backend OAuth endpoint
    // The Flask backend will handle the OAuth flow and redirect to Google
    return NextResponse.redirect(apiUrl);
    
  } catch (error) {
    console.error('OAuth authorize error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Failed to initiate OAuth flow',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
