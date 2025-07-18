import React, { useState } from 'react';
import FestivalCard from './cardHome/CardHome';
import festivalsData from '../data/festivals';

const FestivalList = () => {
  const [filters] = useState({ city: '', type: '' });

  const filtered = festivalsData.filter((festival) => {
    const matchCity =
      filters.city === '' ||
      festival.location.toLowerCase().includes(filters.city.toLowerCase());
    const matchType =
      filters.type === '' ||
      festival.type?.toLowerCase().includes(filters.type.toLowerCase());
    return matchCity && matchType;
  });

  return (
    <>
      <section
        className="festival-grid"
        style={{
          display: 'flex',
          gap: '32px',
          margin: '32px 128px',
          overflow: 'scroll',
          padding: '10px',
          flexWrap: 'wrap',
          flexDirection: 'row',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          justifyContent: 'space-between',
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((f) => <FestivalCard key={f.id} {...f} />)
        ) : (
          <p className="no-result-message">Aucun festival trouvé.</p>
        )}
      </section>
    </>
  );
};

export default FestivalList;
