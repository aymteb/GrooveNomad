/* global fetch process */

// Configuration Airtable
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = 'Festivals';

const airtableService = {
  // Récupérer tous les festivals
  async getFestivals() {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Erreur HTTP: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();

    // Transformer les données Airtable en format compatible avec votre app
    const transformedData = data.records.map((record) => ({
      id: record.id,
      name: record.fields['Festival Name'] || '',
      date: record.fields['Start Date'] || '',
      location: record.fields['Location'] || '',
      image:
        record.fields['Festival Image']?.[0]?.url ||
        'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Festival',
      type: record.fields['Festival Type'] || [],
      description: record.fields['Festival Description'] || '',
    }));

    return transformedData;
  },
};

export default airtableService;
