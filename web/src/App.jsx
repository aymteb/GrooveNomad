import React, { useState } from 'react';
import CardFestival from './components/cardFestival/CardFestival';
import Chatbot from './components/Chatbot';
import FestivalCarousel from './components/FestivalCarousel';
import FestivalList from './components/FestivalList';
import Footer from './components/Footer';
import Header from './components/Header';
import garorockImage from './assets/garorock.jpg';

const App = () => {
  const [chatQuery, setChatQuery] = useState('');

  const handleChatQuery = (query) => {
    const cityMatch = query.match(/à\s+([a-zA-Z]+)/i);
    const typeMatch = query.match(/de\s+([a-zA-Z]+)/i);

    setChatQuery({
      city: cityMatch ? cityMatch[1] : '',
      type: typeMatch ? typeMatch[1] : '',
    });
  };

  return (
    <>
      <Header />
      <main>
        <CardFestival name="Garorock" date="2025-07-16" location="Paris" image={garorockImage} type={['Tag', 'Rock', 'Metal']} />
        <FestivalCarousel />
        <FestivalList externalFilters={chatQuery} />
      </main>
      <Chatbot webhookUrl="https://epit3ch.app.n8n.cloud/webhook/chatbot" />
      <Footer />
    </>
  );
};

export default App;
