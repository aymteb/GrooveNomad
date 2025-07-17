import React, { useState } from 'react';
import './CardHome.css';

const CardHome = ({ name, date, location, image, type }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="card-festival">
      <div className="card-festival-image">
        <img src={image} />
      </div>
      <div className="card-festival-content">
        <div className="card-festival-content-top-container">
          <div className="card-festival-content-header-container">
            <div className="card-festival-content-header">
              <p>{name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                onClick={handleHeartClick}
                style={{ cursor: 'pointer' }}
              >
                {isLiked ? (
                  <path
                    d="M16 5.375C16 3.30393 14.2511 1.625 12.0938 1.625C10.4807 1.625 9.09607 2.56356 8.5 3.90285C7.90393 2.56356 6.51927 1.625 4.90625 1.625C2.74889 1.625 1 3.30393 1 5.375C1 11.3921 8.5 15.375 8.5 15.375C8.5 15.375 16 11.3921 16 5.375Z"
                    fill="#E65E14"
                    stroke="#E65E14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M16 5.375C16 3.30393 14.2511 1.625 12.0938 1.625C10.4807 1.625 9.09607 2.56356 8.5 3.90285C7.90393 2.56356 6.51927 1.625 4.90625 1.625C2.74889 1.625 1 3.30393 1 5.375C1 11.3921 8.5 15.375 8.5 15.375C8.5 15.375 16 11.3921 16 5.375Z"
                    stroke="#E65E14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>
          </div>
          <div className="card-festival-content-body"></div>
          <div className="card-festival-tags">
            {Array.isArray(type) ? (
              type.map((tag, index) => (
                <div key={index} className="card-festival-tag">
                  <p>{tag}</p>
                </div>
              ))
            ) : (
              <div className="card-festival-tag">
                <p>{type}</p>
              </div>
            )}
          </div>
        </div>
        <div className="card-festival-content-bottom-container">
          <div className="card-festival-location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                d="M10.5601 7.4C10.5601 8.81385 9.41395 9.96 8.0001 9.96C6.58625 9.96 5.4401 8.81385 5.4401 7.4C5.4401 5.98615 6.58625 4.84 8.0001 4.84C9.41395 4.84 10.5601 5.98615 10.5601 7.4Z"
                stroke="#0F172A"
                strokeWidth="1.28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.4001 7.4C14.4001 13.4946 8.0001 17 8.0001 17C8.0001 17 1.6001 13.4946 1.6001 7.4C1.6001 3.86538 4.46548 1 8.0001 1C11.5347 1 14.4001 3.86538 14.4001 7.4Z"
                stroke="#0F172A"
                strokeWidth="1.28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{location}</p>
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
    </div>
  );
};

export default CardHome;
