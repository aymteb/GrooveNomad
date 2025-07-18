// Types pour les données Airtable
export interface AirtableEvent {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  location?: string;
  type?: string[];
}

const AIRTABLE_API_KEY = process.env.EXPO_PUBLIC_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.EXPO_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "Festivals";

const airtableService = {
  async getEvents(): Promise<AirtableEvent[]> {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erreur HTTP: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();

      const transformedData: AirtableEvent[] = data.records.map(
        (record: any) => ({
          id: record.id,
          title: record.fields["Festival Name"] || "",
          date: record.fields["Start Date"] || "",
          location: record.fields["Location"] || "",
          image:
            record.fields["IMAGE"]?.[0]?.url ||
            "https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Festival",
          type: record.fields["Festival Type"] || [],
          description: record.fields["Festival Description"] || "",
        })
      );

      return transformedData;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données Airtable:",
        error
      );
      throw error;
    }
  },

  // Récupérer un festival par ID
  async getEventById(id: string): Promise<AirtableEvent | null> {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erreur HTTP: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      const record = data;

      return {
        id: record.id,
        title: record.fields["Festival Name"] || "",
        date: record.fields["Start Date"] || "",
        location: record.fields["Location"] || "",
        image:
          record.fields["IMAGE"]?.[0]?.url ||
          "https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Festival",
        type: record.fields["Festival Type"] || [],
        description: record.fields["Festival Description"] || "",
      };
    } catch (error) {
      console.error("Erreur lors de la récupération du festival:", error);
      throw error;
    }
  },
};

export default airtableService;
