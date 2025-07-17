import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Artistes = ({ onNavigate }) => {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <h1>Artistes</h1>
        <p>Page des artistes en cours de développement...</p>
      </main>
      <Footer />
    </>
  );
};

export default Artistes;
