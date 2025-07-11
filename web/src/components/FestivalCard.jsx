import React from "react";

const FestivalCard = ({ name, date, location, image }) => (
  <div style={{
    backgroundColor: "var(--light-gray)",
    borderRadius: "12px",
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: "250px"
  }}>
    <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
    <h3>{name}</h3>
    <p><strong>Lieu :</strong> {location}</p>
    <p><strong>Date :</strong> {date}</p>
  </div>
);

export default FestivalCard;
