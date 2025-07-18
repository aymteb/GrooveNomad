import { useState, useEffect } from "react";
import airtableService, { AirtableEvent } from "../services/airtableService";

interface UseAirtableEventsReturn {
  events: AirtableEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useAirtableEvents = (): UseAirtableEventsReturn => {
  const [events, setEvents] = useState<AirtableEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await airtableService.getEvents();
      setEvents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      console.error("Erreur lors du chargement des événements:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
  };
};
