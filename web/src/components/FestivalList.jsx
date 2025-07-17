import React, { useState } from 'react';
import FestivalCard from './cardHome/CardHome';
import FestivalFilter from './FestivalFilter';
import festivalsData from '../data/festivals';

const FestivalList = () => {
  const [filters, setFilters] = useState({ city: '', type: '' });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const availableCities = [...new Set(festivalsData.map((f) => f.location))];
  const availableTypes = [
    ...new Set(festivalsData.map((f) => f.type).filter(Boolean)),
  ];

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
