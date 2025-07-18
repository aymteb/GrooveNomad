import { useState, useEffect } from 'react';
import airtableService from '../services/airtableService';

const useFestivals = () => {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFestivals = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await airtableService.getFestivals();
      setFestivals(data);
    } catch (err) {
      setError(err.message);
      console.error('Erreur lors du chargement des festivals:', err);
    } finally {
      setLoading(false);
    }
  };

  const searchFestivals = async (filters) => {
    try {
      setLoading(true);
      setError(null);
      const data = await airtableService.searchFestivals(filters);
      setFestivals(data);
    } catch (err) {
      setError(err.message);
      console.error('Erreur lors de la recherche des festivals:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFestivals();
  }, []);

  return {
    festivals,
    loading,
    error,
    refetch: fetchFestivals,
    search: searchFestivals,
  };
};

export default useFestivals;
