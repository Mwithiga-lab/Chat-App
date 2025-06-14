import React, { useEffect, useState } from "react";
import { fetchMessages, sendMessage } from "../src/api/messages.js";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = React.useRef(null);
  const currentUser = 1; // Replace with actual current user ID

  useEffect(() => {
    fetchMessages().then(setMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsg = await sendMessage({ sender_id: currentUser, content: input });
    setMessages((msgs) => [...msgs, newMsg]);
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              background: msg.sender_id === currentUser ? "#dbeafe" : "#e5e7eb",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "8px",
              maxWidth: "400px",
              alignSelf: msg.sender_id === currentUser ? "flex-end" : "flex-start",
            }}
          >
            <b>{msg.sender_id === currentUser ? "You" : msg.username}:</b> {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "16px",
          borderTop: "1px solid #e5e7eb",
          background: "#f9fafb",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            fontSize: "16px",
            outline: "none",
            background: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}