import React from 'react';
import CardFestival from '../cardFestival/CardFestival';
import './FestivalList.css';

const FestivalList = () => {
  // Import des données directement dans le composant pour simplifier
  const festivals = [
    {
      id: '1',
      name: 'Coachella',
      date: '11-13 avril & 18-20 avril',
      location: 'Vallée de Coachella, Californie',
      image: 'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Coachella',
      type: ['rock', 'electro', 'hip-hop'],
    },
    {
      id: '2',
      name: 'Tomorrowland',
      date: '21-23 juillet',
      location: 'Boom, Belgique',
      image:
        'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Tomorrowland',
      type: ['electro', 'house', 'techno'],
    },
    {
      id: '3',
      name: 'Fuji Rock',
      date: '28-30 juillet',
      location: 'Naeba, Japon',
      image: 'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Fuji+Rock',
      type: ['rock', 'indie', 'alternative'],
    },
    {
      id: '4',
      name: 'Glastonbury',
      date: '26-30 juin',
      location: 'Pilton, Angleterre',
      image:
        'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Glastonbury',
      type: ['rock', 'pop', 'folk'],
    },
    {
      id: '5',
      name: 'Ultra Music Festival',
      date: '22-24 mars',
      location: 'Miami, Floride',
      image: 'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Ultra',
      type: ['electro', 'house', 'techno'],
    },
    {
      id: '6',
      name: 'Rock in Rio',
      date: '15-17 septembre',
      location: 'Rio de Janeiro, Brésil',
      image:
        'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Rock+in+Rio',
      type: ['rock', 'pop', 'metal'],
    },
  ];

  return (
    <div className="festival-list-container" style={{ padding: '0 128px' }}>
      <h5>Tous les festivals</h5>
      <div
        className="festival-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 320px)',
          gap: '55px 32px',
          justifyContent: 'center',
          padding: '20px 0',
        }}
      >
        {festivals.map((festival) => (
          <CardFestival
            key={festival.id}
            name={festival.name}
            date={festival.date}
            location={festival.location}
            image={festival.image}
            type={festival.type}
          />
        ))}
      </div>
    </div>
  );
};

export default FestivalList;
