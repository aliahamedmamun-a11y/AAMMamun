"use client";
import { useState } from "react";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-lg rounded-lg">
          <div className="p-3 border-b font-bold">Support Chat</div>
          <div className="h-64 overflow-y-auto p-3">
            <p className="text-gray-500">No messages yet...</p>
          </div>
          <div className="flex p-2 border-t">
            <input
              type="text"
              className="flex-1 border rounded px-2"
              placeholder="Type a message..."
            />
            <button className="ml-2 bg-blue-600 text-white px-3 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
