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
    
    // Get the full callback URL with query parameters
    const searchParams = request.nextUrl.searchParams;
    const callbackUrl = `${backendUrl.replace(/\/$/, '')}/oauth2callback?${searchParams.toString()}`;
    
    console.log('Proxying OAuth callback to:', callbackUrl);
    
    // Proxy the request to the Flask backend
    const response = await fetch(callbackUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.text();
      
      // Return a proper HTML response for the user
      return new NextResponse(
        `<!DOCTYPE html>
<html>
<head>
  <title>Calendar Connected</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .container {
      text-align: center;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      backdrop-filter: blur(10px);
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.1rem;
      opacity: 0.9;
    }
    .checkmark {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="checkmark">✅</div>
    <h1>Calendar Connected Successfully!</h1>
    <p>You can close this tab and return to the portfolio.</p>
  </div>
  <script>
    // Optionally close the window after 3 seconds
    setTimeout(() => {
      if (window.opener) {
        window.close();
      }
    }, 3000);
  </script>
</body>
</html>`,
        {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
          },
        }
      );
    }
    
    // Handle error responses
    let errorMessage = `OAuth callback failed with status: ${response.status}`;
    try {
      const errorData = await response.text();
      if (errorData) {
        errorMessage += ` - ${errorData}`;
      }
    } catch (e) {
      // Ignore if we can't read the error body
    }
    
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
  <title>OAuth Error</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #f44336;
      color: white;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>❌ OAuth Error</h1>
    <p>${errorMessage}</p>
    <p>Please try again.</p>
  </div>
</body>
</html>`,
      {
        status: response.status,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
    
  } catch (error) {
    console.error('OAuth callback error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
  <title>OAuth Error</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #f44336;
      color: white;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>❌ OAuth Error</h1>
    <p>Failed to process OAuth callback: ${errorMessage}</p>
  </div>
</body>
</html>`,
      {
        status: 500,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  }
}
