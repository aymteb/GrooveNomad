import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header/Header';
import './Festivals.css';
import FindFestival from './components/FindFestival';
import FestivalList from '../../components/FestivalList/FestivalList';

const Festivals = ({ onNavigate }) => {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <main>
        <div className="festivals-header">
          <h1>Trouve ton prochain festival, partout dans le monde</h1>
          <h4>des packs sur-mesure pour une aventure inoubliable</h4>
        </div>
        <div className="festivals-filters">
          <div className="festivals-filters-left">
            <FindFestival />
          </div>
        </div>
        <FestivalList />
      </main>
      <Footer />
    </>
  );
};

export default Festivals;
