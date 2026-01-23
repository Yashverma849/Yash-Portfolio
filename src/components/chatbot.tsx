'use client'

import { useState } from "react";
import { MessageCircle, Send, Calendar } from "lucide-react";
import Image from "next/image";

export default function Chatbot() {
  console.log('Chatbot component rendered');
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const connectCalendar = async () => {
    setIsConnecting(true);
    try {
      // Redirect to the OAuth authorize endpoint
      window.location.href = '/api/oauth/authorize';
    } catch (error) {
      console.error('Calendar connection error:', error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I couldn't initiate the calendar connection. Please try again." },
      ]);
      setIsConnecting(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
    ]);

    const userMessage = input;
    setInput("");

    try {
      const response = await fetch(`/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        let errorData: { error?: string; details?: string; response?: string } = {};
        try {
          errorData = await response.json();
        } catch {
          // If JSON parsing fails, try to get text
          try {
            const text = await response.text();
            errorData = { error: text || 'Unknown error' };
          } catch {
            errorData = { error: 'Unknown error occurred' };
          }
        }
        
        let errorMessage = "Sorry, I'm having trouble connecting right now.";
        
        if (response.status === 404) {
          errorMessage = errorData.error || "The chat service endpoint was not found. Please check the API configuration.";
        } else if (response.status === 503) {
          errorMessage = errorData.error || "The chat service is temporarily unavailable. Please try again in a moment.";
          if (errorData.details) {
            errorMessage += ` (${errorData.details})`;
          }
        } else if (response.status === 500) {
          // Show more details for 500 errors
          errorMessage = errorData.error || errorData.response || "Failed to process chat request. Please try again.";
          if (errorData.details && !errorMessage.includes(errorData.details)) {
            errorMessage += ` Details: ${errorData.details}`;
          }
        } else {
          errorMessage = errorData.error || errorData.response || `Error: ${response.status} ${response.statusText}`;
        }
        
        console.error('Chat API error:', {
          status: response.status,
          errorData,
          errorMessage
        });
        
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: errorMessage },
        ]);
        return;
      }

      const data = await response.json();
      
      // Log the full response for debugging
      console.log('Chat API response:', data);
      
      // Extract the response text
      let responseText = data.response || data.message || "I received your message but couldn't generate a response.";
      
      // Convert newlines to <br> tags for proper display
      responseText = responseText.replace(/\n/g, '<br>');
      
      // If there's a separate calendar link field, append it to the response
      if (data.calendarLink || data.eventLink || data.link) {
        const link = data.calendarLink || data.eventLink || data.link;
        if (link && !responseText.includes(link)) {
          responseText += `<br><br><a href="${link}" target="_blank" rel="noopener noreferrer" style="color: #059669; text-decoration: underline; font-weight: 600; word-break: break-all;">📅 View Calendar Event</a>`;
        }
      }
      
      // Convert plain text URLs to HTML links (only if not already in HTML format)
      // Check if response already contains HTML links
      const hasHtmlLinks = /<a\s+[^>]*href/i.test(responseText);
      
      if (!hasHtmlLinks) {
        // Simple regex to match URLs that aren't already in HTML
        const urlRegex = /(https?:\/\/[^\s<>"']+|www\.[^\s<>"']+)/gi;
        responseText = responseText.replace(urlRegex, (url: string) => {
          // Add https:// if it's a www link
          const fullUrl = url.startsWith('http') ? url : `https://${url}`;
          return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" style="color: #059669; text-decoration: underline; font-weight: 600; word-break: break-all;">${url}</a>`;
        });
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: responseText },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I'm having trouble connecting right now. Please check your internet connection and try again." },
      ]);
    }
  };

  return (
    <>
      {/* Cloud Message */}
      {!isHovered && !open && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-40 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm max-w-[calc(100vw-5rem)] sm:max-w-xs">
          Ask anything! OR Schedule a meeting!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}

      {/* Floating Chat Bubble */}
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-green-50 to-green-100 text-gray-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 max-w-[calc(100vw-2rem)] sm:max-w-[90vw] rounded-xl bg-gradient-to-b from-green-50 to-green-100 text-gray-800 shadow-lg animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-green-200">
            <span className="font-semibold text-sm">Yash</span>
            <Image
              src="/assets/yv-logo.png"
              alt="Yash"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Connect Calendar Button */}
          <div className="px-4 py-2 border-b border-green-200">
            <button
              onClick={connectCalendar}
              disabled={isConnecting}
              className="w-full flex items-center justify-center gap-2 rounded-md bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 px-3 py-2 text-sm text-white transition-colors"
            >
              <Calendar size={16} />
              {isConnecting ? 'Connecting...' : 'Connect Google Calendar'}
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto overflow-x-hidden p-4 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-lg px-3 py-2 break-words ${
                  msg.role === "user"
                    ? "ml-auto bg-green-500 text-white"
                    : "bg-green-100 text-gray-800"
                }`}
              >
                {msg.role === "bot" ? (
                  <div 
                    className="prose prose-sm max-w-none"
                    style={{
                      wordBreak: 'break-word',
                    }}
                    dangerouslySetInnerHTML={{ __html: msg.text }} 
                  />
                ) : (
                  msg.text
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 rounded-md bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 min-w-0"
            />
            <button
              onClick={sendMessage}
              className="rounded-md bg-green-500 px-3 py-2 text-sm text-white hover:bg-green-600 transition flex items-center justify-center flex-shrink-0"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
