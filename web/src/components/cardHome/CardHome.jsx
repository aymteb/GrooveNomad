import React from 'react';
import './CardHome.css';

const CardHome = ({ name, date, image, price }) => {
  return (
    <div className="card-festival">
      <div className="card-festival-image">
        <img src={image} />
      </div>
      <div className="card-festival-content">
        <div className="card-festival-content-header-container">
          <p>{name}</p>
        </div>
        <div className="card-festival-content-body">
          <p>à partir de {price}€</p>
          <small>Trajet + Hôtel</small>
        </div>
        <div className="card-festival-date">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.91667 1V2.75M12.0833 1V2.75M1 13.25V4.5C1 3.5335 1.7835 2.75 2.75 2.75H13.25C14.2165 2.75 15 3.5335 15 4.5V13.25M1 13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25M1 13.25V7.41667C1 6.45017 1.7835 5.66667 2.75 5.66667H13.25C14.2165 5.66667 15 6.45017 15 7.41667V13.25"
              stroke="#0F172A"
              strokeWidth="1.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
