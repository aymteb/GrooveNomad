// Configuration Airtable
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = 'Festivals';

const airtableService = {
  // Récupérer tous les festivals
  async getFestivals() {
    try {
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
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();

      // Transformer les données Airtable en format compatible avec votre app
      return data.records.map((record) => ({
        id: record.id,
        name: record.fields.Name || '',
        date: record.fields.Dates || '',
        location: record.fields.Location || '',
        image:
          record.fields.Image?.[0]?.url ||
          'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Festival',
        type: record.fields.Type || [],
        description: record.fields.Description || '',
        price: record.fields.Price || '',
        capacity: record.fields.Capacity || '',
        createdTime: record.createdTime,
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des festivals:', error);
      // Retourner des données de test si Airtable n'est pas configuré
      return [
        {
          id: '1',
          name: 'Coachella',
          date: '11-13 avril & 18-20 avril',
          location: 'Vallée de Coachella, Californie',
          image:
            'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Coachella',
          type: ['rock', 'electro', 'hip-hop'],
          description: 'Le plus grand festival de musique en Californie',
          price: '399€',
          capacity: '125000',
        },
        {
          id: '2',
          name: 'Tomorrowland',
          date: '21-23 juillet',
          location: 'Boom, Belgique',
          image:
            'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Tomorrowland',
          type: ['electro', 'house', 'techno'],
          description: 'Le plus grand festival EDM au monde',
          price: '299€',
          capacity: '400000',
        },
        {
          id: '3',
          name: 'Fuji Rock',
          date: '28-30 juillet',
          location: 'Naeba, Japon',
          image:
            'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Fuji+Rock',
          type: ['rock', 'indie', 'alternative'],
          description: 'Festival de rock en pleine nature',
          price: '250€',
          capacity: '45000',
        },
      ];
    }
  },

  // Rechercher des festivals par critères
  async searchFestivals(filters = {}) {
    try {
      let filterFormula = '';

      if (filters.location) {
        filterFormula += `{Location} = '${filters.location}'`;
      }

      if (filters.type) {
        if (filterFormula) filterFormula += ' AND ';
        filterFormula += `SEARCH('${filters.type}', ARRAYJOIN({Type}))`;
      }

      const url = new URL(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`
      );
      if (filterFormula) {
        url.searchParams.append('filterByFormula', filterFormula);
      }

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();

      return data.records.map((record) => ({
        id: record.id,
        name: record.fields.Name || '',
        date: record.fields.Dates || '',
        location: record.fields.Location || '',
        image:
          record.fields.Image?.[0]?.url ||
          'https://via.placeholder.com/350x200/FF6B35/FFFFFF?text=Festival',
        type: record.fields.Type || [],
        description: record.fields.Description || '',
        price: record.fields.Price || '',
        capacity: record.fields.Capacity || '',
        createdTime: record.createdTime,
      }));
    } catch (error) {
      console.error('Erreur lors de la recherche des festivals:', error);
      throw error;
    }
  },
};

export default airtableService;
