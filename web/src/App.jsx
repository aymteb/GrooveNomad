import React, { useState } from 'react';
import CardFestival from './components/cardFestival/CardFestival';
import Chatbot from './components/Chatbot';
import FestivalCarousel from './components/FestivalCarousel';
import FestivalList from './components/FestivalList';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import garorockImage from './assets/garorock.jpg';
import Home from './screens/Home/Home';
import Festivals from './screens/Festivals/Festivals';
import Artistes from './screens/Artistes/Artistes';
import Contact from './screens/Contact/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'festivals':
        return <Festivals onNavigate={setCurrentPage} />;
      case 'artistes':
        return <Artistes onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
};

export default App;
