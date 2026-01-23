import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Try different possible endpoint paths
    const possibleEndpoints = [
      'https://portfolio-ai-icll.onrender.com/chat',
      'https://portfolio-ai-icll.onrender.com/api/chat',
    ];
    
    let lastError: Error | null = null;
    let lastResponse: Response | null = null;
    
    for (const apiUrl of possibleEndpoints) {
      try {
        console.log('Trying endpoint:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          // Add timeout to prevent hanging
          signal: AbortSignal.timeout(30000), // 30 second timeout
        });

        console.log('Response status:', response.status, 'for', apiUrl);

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json(data, { status: 200 });
        }
        
        // If 404, try next endpoint
        if (response.status === 404) {
          console.log('404 for', apiUrl, '- trying next endpoint');
          lastResponse = response;
          continue;
        }
        
        // For other errors, try to get error message
        let errorMessage = `API responded with status: ${response.status}`;
        try {
          const errorData = await response.text();
          if (errorData) {
            errorMessage += ` - ${errorData}`;
          }
        } catch (e) {
          // Ignore if we can't read the error body
        }
        
        lastResponse = response;
        lastError = new Error(errorMessage);
        
        // If it's not a 404, don't try other endpoints
        break;
      } catch (error) {
        console.error('Error trying endpoint', apiUrl, ':', error);
        lastError = error instanceof Error ? error : new Error(String(error));
        
        // If it's a network error and we have more endpoints, continue
        if (possibleEndpoints.indexOf(apiUrl) < possibleEndpoints.length - 1) {
          continue;
        }
      }
    }
    
    // If we get here, all endpoints failed
    if (lastResponse) {
      return NextResponse.json(
        { 
          error: `API endpoint not found (404). Tried: ${possibleEndpoints.join(', ')}`,
          status: lastResponse.status,
        },
        { status: 404 }
      );
    }
    
    throw lastError || new Error('All endpoints failed');
    
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
