import { NextRequest, NextResponse } from 'next/server';
import { getBackendUrl } from '@/lib/backend-url';

export const dynamic = 'force-dynamic';

const BACKEND_TIMEOUT_MS = 60_000;

function createTimeoutSignal(timeoutMs: number): AbortSignal {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeoutMs);
  return controller.signal;
}

async function callBackend(apiUrl: string, body: unknown) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    signal: createTimeoutSignal(BACKEND_TIMEOUT_MS),
  });

  return response;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const apiUrl = `${getBackendUrl()}/chat`;

    console.log('Calling backend API:', apiUrl);

    let response = await callBackend(apiUrl, body);

    // Render free tier can sleep; retry once after a short pause.
    if (!response.ok && (response.status === 502 || response.status === 503 || response.status === 504)) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      response = await callBackend(apiUrl, body);
    }

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
          error: 'The chat service is currently unavailable. The server might be starting up (Render free tier apps sleep after inactivity). Please wait a moment and try again.',
          details: `Request timeout after ${BACKEND_TIMEOUT_MS / 1000} seconds. The backend server may be waking up from sleep.`
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
