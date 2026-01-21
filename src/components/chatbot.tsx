'use client'

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function Chatbot() {
  console.log('Chatbot component rendered');
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "bot", text: "Thanks! I’ll get back to you shortly 😊" },
    ]);

    setInput("");
  };

  return (
    <>
      {/* Cloud Message */}
      {!isHovered && !open && (
        <div className="fixed bottom-20 right-6 z-40 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm max-w-xs">
          Ask anything! OR Schedule a meeting!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}

      {/* Floating Chat Bubble */}
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-green-50 to-green-100 text-gray-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[90vw] rounded-xl bg-gradient-to-b from-green-50 to-green-100 text-gray-800 shadow-lg animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-semibold text-sm">Yash</span>
            <img
              src="/assets/yv-logo.png"
              alt="Yash"
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
          <div className="h-64 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  msg.role === "user"
                    ? "ml-auto bg-green-500 text-white"
                    : "bg-green-100 text-gray-800"
                }`}
              >
                {msg.text}
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
              className="flex-1 rounded-md bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={sendMessage}
              className="rounded-md bg-green-500 px-3 py-2 text-sm text-white hover:bg-green-600 transition flex items-center justify-center"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
