import React, { useState } from "react";

const FestivalFilter = ({ filters, onFilterChange, availableCities, availableTypes }) => {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const handleFilter = () => {
    onFilterChange({ city, type });
  };

  return (
    <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-center">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">Toutes les villes</option>
        {availableCities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">Tous les types</option>
        {availableTypes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <button onClick={handleFilter} className="bg-yellow-400 text-black px-4 py-1 rounded">
        Filtrer
      </button>
    </div>
  );
};

export default FestivalFilter;
