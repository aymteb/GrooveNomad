import React from 'react';
import CardFestival from '../cardFestival/CardFestival';
import './FestivalGrid.css';

const FestivalGrid = ({ festivals, loading, error }) => {
  if (loading) {
    return (
      <div className="festival-grid-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Chargement des festivals...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="festival-grid-container">
        <div className="error-message">
          <p>Erreur lors du chargement des festivals: {error}</p>
        </div>
      </div>
    );
  }

  if (!festivals || festivals.length === 0) {
    return (
      <div className="festival-grid-container">
        <div className="no-festivals">
          <p>Aucun festival disponible pour le moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="festival-grid-container">
      <div className="festival-grid">
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

export default FestivalGrid;
