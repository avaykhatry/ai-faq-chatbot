import { useState } from 'react'
import './App.css'

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);

    // Call API (mock or OpenAI)
    const response = await fetch("https://api.example.com/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    const botMsg = { sender: "bot", text: data.reply || "Hello!" };
    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  }

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto bg-white rounded p-3 shadow">
        {messages.map((msg, i) => (
          <div key={i} className={`my-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`px-3 py-2 rounded-xl inline-block ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-3 py-2"
          placeholder="Ask me something..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
}