import React, { useState } from "react";

const Chatbot = ({ onQuery }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onQuery(message);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-0 right-0 m-4 w-full max-w-sm bg-white border rounded shadow-lg">
      <div className="p-2 border-b font-bold bg-yellow-400">🎤 Chatbot Festivals</div>
      <div className="p-2 flex">
        <input
          type="text"
          value={message}
          placeholder="Ex: festivals à Lyon"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded-l px-2 py-1"
        />
        <button onClick={handleSend} className="bg-black text-white px-3 rounded-r">→</button>
      </div>
    </div>
  );
};

export default Chatbot;
