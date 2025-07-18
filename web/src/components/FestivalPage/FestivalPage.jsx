import React, { useEffect, useState } from 'react';
import airtableService from '../services/airtableService';

const FestivalPage = ({ festivalId }) => {
  const [festival, setFestival] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const festivals = await airtableService.getFestivals();
        const selectedFestival = festivals.find((f) => f.id === festivalId);
        setFestival(selectedFestival);
      } catch (error) {
        console.error('Erreur lors du chargement du festival :', error);
      }
    };

    fetchData();
  }, [festivalId]);

  if (!festival) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{festival.name}</h1>
          <p className="text-gray-600 mt-2">
            📅 Du {new Date(festival.date).toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })}{' '}
            au {new Date(festival.endDate).toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <p className="mt-1 text-gray-700">📍 {festival.location}</p>

          <button className="bg-orange-500 text-white font-semibold px-4 py-2 mt-4 rounded">
            Ouvrir le chatbot
          </button>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">À propos</h2>
            <p className="mt-2 text-gray-800 whitespace-pre-line">
              {festival.description}
            </p>
          </div>
        </div>

        <div className="w-full md:w-[400px]">
          <img
            src={festival.image}
            alt={festival.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FestivalPage;
