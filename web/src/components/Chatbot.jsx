import React, { useState } from "react";

const Chatbot = ({ webhookUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Quel type de festival cherches-tu ? (musique, écologie...)" }
  ]);
  const [context, setContext] = useState({
    step: "type",
    type: null,
    ville: null,
    mois: null
  });

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, context })
      });

      const data = await res.json();

      const botMsg = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMsg]);

      // mise à jour du contexte
      setContext(data.context || context);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Erreur de communication avec le serveur." }]);
    }
  };

  const renderRedirect = () => {
    const { type, ville, mois } = context;
    if (type && ville && mois) {
      const url = `/festivals?type=${type}&ville=${ville}&mois=${mois}`;
      return (
        <div className="chatbot-message bot">
          👉 <a href={url}>Voir tous les festivals correspondants</a>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {!isOpen && (
        <button className="chatbot-bubble" onClick={toggleChat}>
          💬
        </button>
      )}

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            🎤 Chatbot Festivals
            <button onClick={toggleChat} className="chatbot-close">✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
            {renderRedirect()}
          </div>

          <div className="chatbot-body">
            <input
              type="text"
              value={message}
              placeholder="Votre réponse..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>→</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
