import React from 'react';
import './FindFestival.css';

const FindFestival = () => {
  return (
    <div className="main-container">
      <div className="placeholder-container">
        <p>Rechercher...</p>
      </div>
      <div className="filters-container">
        <div className="filter-item">
          <p>Filtres</p>
        </div>
        <div className="loop-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M26 26L19.0711 19.0711M19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711Z"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FindFestival;
