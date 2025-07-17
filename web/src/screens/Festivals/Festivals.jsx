import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const Festivals = ({ onNavigate }) => {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <h1>Festivals</h1>
        <p>Page des festivals en cours de développement...</p>
      </main>
      <Footer />
    </>
  );
};

export default Festivals;
