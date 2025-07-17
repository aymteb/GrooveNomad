import React, { useState } from 'react';
import Chatbot from '../../components/Chatbot';
import FestivalCarousel from '../../components/FestivalCarousel';
import FestivalList from '../../components/FestivalList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Home = ({ onNavigate }) => {
  const [chatQuery] = useState('');

  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <FestivalCarousel />
        <FestivalList externalFilters={chatQuery} />
      </main>
      <Chatbot webhookUrl="https://epit3ch.app.n8n.cloud/webhook/chatbot" />
      <Footer />
    </>
  );
};

export default Home;
