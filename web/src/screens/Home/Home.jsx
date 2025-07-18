import React, { useState } from 'react';
import Chatbot from '../../components/Chatbot/Chatbot';
import FestivalCarousel from '../../components/FestivalCarousel/FestivalCarousel';
import FestivalList from '../../components/FestivalList';
import Footer from '../../components/Footer';
import Header from '../../components/Header/Header';
import TranslationWrapper from '../../services/TranslationWrapper';
import FestivalGrid from '../../components/FestivalGrid/FestivalGrid';

const Home = ({ onNavigate }) => {
  const [chatQuery] = useState('');

  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <FestivalCarousel />
        <h3
          style={{
            margin: '32px 128px',
            fontSize: '24px',
            color: 'var(--bleu-noir, #0B2D39)',
            fontFamily: 'Sora',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '28px',
            textAlign: 'left',
          }}
        >
          GROOVE NOMAD
        </h3>
        <section
          style={{
            margin: '32px 128px',
            fontSize: '16px',
            color: 'var(--bleu-noir, #0B2D39)',
            fontFamily: 'Sora',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
            textAlign: 'left',
          }}
        >
          <TranslationWrapper>
            Groove Nomad est la première plateforme qui combine festivals,
            voyages et IA. Grâce à notre chatbot intelligent, construis en
            quelques clics un séjour sur mesure : billets, hébergement,
            transport et activités locales. Fini les recherches compliquées,
            tout est centralisé, rapide et fluide. Groove Nomad t’accompagne de
            la première idée jusqu’au départ.
          </TranslationWrapper>
        </section>
        <FestivalGrid externalFilters={chatQuery}/>
      </main>
      <Chatbot webhookUrl="https://epit3ch.app.n8n.cloud/webhook/chatbot" />
      <Footer />
    </>
  );
};

export default Home;
