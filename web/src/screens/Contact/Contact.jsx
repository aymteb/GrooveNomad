import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const Contact = ({ onNavigate }) => {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <h1>Contact</h1>
        <p>Page de contact en cours de développement...</p>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
