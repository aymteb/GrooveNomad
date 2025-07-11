import React, { useState } from "react";
import FestivalCard from "./FestivalCard";
import FestivalFilter from "./FestivalFilter";
import festivalsData from "../data/festivals";

const FestivalList = () => {
  const [filters, setFilters] = useState({ city: "", type: "" });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const availableCities = [...new Set(festivalsData.map((f) => f.location))];
  const availableTypes = [...new Set(festivalsData.map((f) => f.type).filter(Boolean))];

  const filtered = festivalsData.filter((festival) => {
    const matchCity =
      filters.city === "" || festival.location.toLowerCase().includes(filters.city.toLowerCase());
    const matchType =
      filters.type === "" || festival.type?.toLowerCase().includes(filters.type.toLowerCase());
    return matchCity && matchType;
  });

  return (
    <>
      <FestivalFilter
        filters={filters}
        onFilterChange={handleFilterChange}
        availableCities={availableCities}
        availableTypes={availableTypes}
      />
      <section className="flex flex-wrap justify-center gap-6 p-4">
        {filtered.length > 0 ? (
          filtered.map((f) => <FestivalCard key={f.id} {...f} />)
        ) : (
          <p className="text-center text-gray-500">Aucun festival trouvé.</p>
        )}
      </section>
    </>
  );
};

export default FestivalList;
