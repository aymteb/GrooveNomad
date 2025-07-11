import React, { useState } from "react";

const FestivalFilter = ({ filters, onFilterChange, availableCities, availableTypes }) => {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const handleFilter = () => {
    onFilterChange({ city, type });
  };

  return (
    <div className="filter-bar">
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Toutes les villes</option>
        {availableCities.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Tous les types</option>
        {availableTypes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <button onClick={handleFilter}>Filtrer</button>
    </div>
  );
};

export default FestivalFilter;
