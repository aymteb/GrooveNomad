/* global */
import React, { useState, useEffect } from 'react';
import CardFestival from '../cardFestival/CardFestival';
import './FestivalList.css';
import airtableService from '../../services/airtableService';

const FestivalList = () => {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        setLoading(true);
        const data = await airtableService.getFestivals();
        setFestivals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFestivals();
  }, []);

  if (loading) {
    return (
      <div className="festival-list-container" style={{ padding: '0 128px' }}>
        <h5>Tous les festivals</h5>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          Chargement des festivals...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="festival-list-container" style={{ padding: '0 128px' }}>
        <h5>Tous les festivals</h5>
        <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>
          Erreur: {error}
        </div>
      </div>
    );
  }

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
