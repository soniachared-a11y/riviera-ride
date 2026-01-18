// Telegram notification utility
// ⚠️ SECURITY WARNING: This exposes your bot token in the browser!
// For production, this should be an Edge Function to protect the token.

interface ReservationData {
  depart: string;
  arrivee: string;
  date_heure: string;
  nom: string;
  telephone: string;
  email: string;
  distance_km: number;
  prix_euros: number;
}

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8188164627:AAEUz6PxBxBLXc9JQr6HBnjVPEd2vSYvnMs';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '1470723186';

export const sendTelegramNotification = async (reservation: ReservationData): Promise<boolean> => {
  const message = `🚖 NOUVELLE RÉSERVATION

📍 Départ : ${reservation.depart}
🎯 Arrivée : ${reservation.arrivee}
📅 Date : ${reservation.date_heure}

👤 Client :
Nom : ${reservation.nom}
Tél : ${reservation.telephone}
Email : ${reservation.email}

💰 Distance : ${reservation.distance_km} km
Prix : ${reservation.prix_euros} €`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      console.error('Erreur Telegram:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Erreur Telegram:', error);
    return false;
  }
};
