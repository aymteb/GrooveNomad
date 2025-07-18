import React, { useState } from 'react';
import Home from './screens/Home/Home';
import Festivals from './screens/Festivals/Festivals';
import AboutUs from './screens/AboutUs/AboutUs';
import Login from './screens/Login/Login';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'festivals':
        return <Festivals onNavigate={setCurrentPage} />;
      case 'AboutUs':
        return <AboutUs onNavigate={setCurrentPage} />;
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
};

export default App;
