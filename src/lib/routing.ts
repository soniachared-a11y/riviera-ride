// OpenRouteService utilities for route calculation
// NOTE: For production, this should be called via an Edge Function to protect the API key

const OPENROUTE_API_KEY = import.meta.env.VITE_OPENROUTE_API_KEY || '5b3ce3597851110001cf6248d0f3e3e5bb7f4a7c9ed8f2d5c2e0e8e9';

interface Coordinates {
  lon: number;
  lat: number;
}

interface RouteResult {
  distance_km: number;
  prix_euros: number;
}

const geocodeAddress = async (address: string): Promise<Coordinates> => {
  const response = await fetch(
    `https://api.openrouteservice.org/geocode/search?api_key=${OPENROUTE_API_KEY}&text=${encodeURIComponent(address)}&boundary.country=FR`
  );
  
  if (!response.ok) {
    throw new Error('Erreur lors du géocodage de l\'adresse');
  }
  
  const data = await response.json();
  
  if (!data.features || data.features.length === 0) {
    throw new Error('Adresse non trouvée');
  }
  
  return {
    lon: data.features[0].geometry.coordinates[0],
    lat: data.features[0].geometry.coordinates[1]
  };
};

export const calculateRoute = async (
  departAddress: string,
  arriveeAddress: string
): Promise<RouteResult> => {
  try {
    // 1. Geocode both addresses
    const [startCoords, endCoords] = await Promise.all([
      geocodeAddress(departAddress),
      geocodeAddress(arriveeAddress)
    ]);

    // 2. Calculate route
    const response = await fetch('https://api.openrouteservice.org/v2/directions/driving-car', {
      method: 'POST',
      headers: {
        'Authorization': OPENROUTE_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coordinates: [
          [startCoords.lon, startCoords.lat],
          [endCoords.lon, endCoords.lat]
        ]
      })
    });

    if (!response.ok) {
      throw new Error('Erreur lors du calcul de l\'itinéraire');
    }

    const data = await response.json();
    const distanceKm = parseFloat((data.routes[0].summary.distance / 1000).toFixed(2));

    // Price calculation: 7€ base + 2€/km
    const prix_euros = parseFloat((7 + (distanceKm * 2)).toFixed(2));

    return {
      distance_km: distanceKm,
      prix_euros
    };
  } catch (error) {
    console.error('Erreur calcul itinéraire:', error);
    throw error;
  }
};
