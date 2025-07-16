import React from 'react';

const FestivalCard = ({
  name,
  date,
  location,
  image,
  type,
  style,
  topArtists,
}) => (
  <div className="festival-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>
      <strong>📍 Lieu :</strong> {location}
    </p>
    <p>
      <strong>📅 Date :</strong> {date}
    </p>
    <p>
      <strong>🎵 Type :</strong> {type}
    </p>
    <p>
      <strong>🎶 Style :</strong> {style}
    </p>
    <p>
      <strong>⭐ Artistes principaux :</strong>{' '}
      {topArtists && topArtists.join(', ')}
    </p>
  </div>
);

export default FestivalCard;
