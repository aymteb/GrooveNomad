import React, { useState, useRef, useEffect  } from 'react';
import './Chatbot.css';
import logo from '../../assets/logo.png';

const Chatbot = ({ webhookUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Bonjour ! Quel type de festival cherches-tu ? (musique, écologie...)',
    },
  ]);
  const [context, setContext] = useState({
    step: 'type',
    type: null,
    ville: null,
    mois: null,
  });

  const [suggestions, setSuggestions] = useState([]); // ✅ Suggestions
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const toggleChat = () => setIsOpen(!isOpen);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleSend = async (customMessage = null) => {
    const msgToSend = customMessage || message;
    if (!msgToSend.trim()) return;

    const userMsg = { sender: 'user', text: msgToSend };
    setMessages((prev) => [...prev, userMsg]);

    const updatedContext = { ...context };
    switch (context.step) {
      case 'type':
        updatedContext.type = msgToSend;
        updatedContext.step = 'ville';
        break;
      case 'ville':
        updatedContext.ville = msgToSend;
        updatedContext.step = 'mois';
        break;
      case 'mois':
        updatedContext.mois = msgToSend;
        updatedContext.step = 'done';
        break;
      default:
        break;
    }

    setMessage('');
    setSuggestions([]); // ✅ Reset suggestions à chaque envoi

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: msgToSend,
          context: updatedContext,
        }),
      });

      const data = await res.json();

      if (Array.isArray(data.replies)) {
        const botMsgs = data.replies.map(text => ({ sender: 'bot', text }));
        setMessages((prev) => [...prev, ...botMsgs]);
      } else {
        const botMsg = { sender: 'bot', text: data.reply || "Réponse inconnue du serveur." };
        setMessages((prev) => [...prev, botMsg]);
      }

      if (Array.isArray(data.suggestions)) {
        setSuggestions(data.suggestions); // ✅ Affiche les suggestions reçues
      }

      setContext(data.context || updatedContext);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Erreur de communication avec le serveur.' },
      ]);
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
        <div className={`chatbot ${isExpanded ? 'expanded' : ''}`}>
          <div className="chatbot-header">
            <div className="chatbot-title">
              <img src={logo} alt="Logo" className="chatbot-logo" />
              Groovy
            </div>
            <div>
              <button onClick={toggleExpand} className="chatbot-expand" style={{ fontSize: '22px' }}>
                {isExpanded ? '–' : '⤢'}
              </button>
              <button onClick={toggleChat} className="chatbot-close">✕</button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text.split('\n').map((line, i) => (<p key={i}>{line}</p>))}
              </div>
            ))}
            {renderRedirect()}
            <div ref={messagesEndRef} />
          </div>

          {/* ✅ Suggestions affichées */}
          {suggestions.length > 0 && (
            <div className="chatbot-suggestions">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  className="chatbot-suggestion-btn"
                  onClick={() => handleSend(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-body">
            <input
              type="text"
              value={message}
              placeholder="Votre réponse..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={() => handleSend()}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.10526 2.28844C2.85362 2.25277 2.60104 2.34697 2.43421 2.5387C2.26738 2.73044 2.209 2.99361 2.27911 3.2379L3.69276 8.16378C3.87733 8.80688 4.4655 9.25 5.13456 9.25H11.25C11.6642 9.25 12 9.58579 12 10C12 10.4142 11.6642 10.75 11.25 10.75H5.13457C4.4655 10.75 3.87733 11.1931 3.69277 11.8362L2.27911 16.7621C2.209 17.0064 2.26738 17.2696 2.43421 17.4613C2.60104 17.6531 2.85362 17.7473 3.10526 17.7116C8.94303 16.8842 14.221 14.3187 18.3983 10.5574C18.5563 10.4151 18.6465 10.2126 18.6465 10C18.6465 9.78746 18.5563 9.58489 18.3983 9.44266C14.221 5.68129 8.94303 3.11585 3.10526 2.28844Z" fill="#0B2D39"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
