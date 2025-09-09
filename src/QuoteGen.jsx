import { useState } from "react";

export default function QuoteGenerator() {
  const quotes = [
    "Stay hungry, stay foolish.",
    "The best way to predict the future is to invent it.",
    "Do what you can, with what you have, where you are.",
    "Simplicity is the ultimate sophistication.",
    "Dream big. Start small. Act now."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-red-100 rounded-xl shadow-lg text-center space-y-4 my-60">
      <h1 className="text-4xl font-bold">Random Quote Generator</h1>
      <p className="italic text-gray-700">"{quote}"</p>
      <button 
        onClick={getRandomQuote}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-purple-600"
      >
        🎲 New Quote
      </button>
    </div>
  );
}
