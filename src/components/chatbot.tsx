'use client'

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import Image from "next/image";

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    const openChatForMeeting = () => {
      setOpen(true);
      setInput("I'd like to schedule a meeting");
    };

    window.addEventListener('hero:ask-anything', openChat);
    window.addEventListener('hero:schedule-meeting', openChatForMeeting);
    return () => {
      window.removeEventListener('hero:ask-anything', openChat);
      window.removeEventListener('hero:schedule-meeting', openChatForMeeting);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, open]);

  const formatBotResponse = (data: {
    response?: string;
    message?: string;
    calendarLink?: string;
    eventLink?: string;
    link?: string;
  }) => {
    let responseText = data.response || data.message || "I received your message but couldn't generate a response.";
    responseText = responseText.replace(/\n/g, '<br>');

    if (data.calendarLink || data.eventLink || data.link) {
      const link = data.calendarLink || data.eventLink || data.link;
      if (link && !responseText.includes(link)) {
        responseText += `<br><br><a href="${link}" target="_blank" rel="noopener noreferrer" style="color: #059669; text-decoration: underline; font-weight: 600; word-break: break-all;">📅 View Calendar Event</a>`;
      }
    }

    const hasHtmlLinks = /<a\s+[^>]*href/i.test(responseText);

    if (!hasHtmlLinks) {
      const urlRegex = /(https?:\/\/[^\s<>"']+|www\.[^\s<>"']+)/gi;
      responseText = responseText.replace(urlRegex, (url: string) => {
        const fullUrl = url.startsWith('http') ? url : `https://${url}`;
        return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" style="color: #059669; text-decoration: underline; font-weight: 600; word-break: break-all;">${url}</a>`;
      });
    }

    return responseText;
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);
    setInput("");
    setIsLoading(true);

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

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: formatBotResponse(data) },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I'm having trouble connecting right now. Please check your internet connection and try again." },
      ]);
    } finally {
      setIsLoading(false);
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
            {isLoading && (
              <div className="max-w-[80%] rounded-lg bg-green-100 px-3 py-2 text-gray-600">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-green-500 [animation-delay:-0.2s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-green-500 [animation-delay:-0.1s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-green-500" />
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage()}
              placeholder={isLoading ? "Waiting for response..." : "Type a message..."}
              disabled={isLoading}
              className="flex-1 rounded-md bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 min-w-0 disabled:opacity-60"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="rounded-md bg-green-500 px-3 py-2 text-sm text-white hover:bg-green-600 transition flex items-center justify-center flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
