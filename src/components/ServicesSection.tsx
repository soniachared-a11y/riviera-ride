import { Award, Users, MapPin, Heart } from 'lucide-react';

const bannerItems = [
  { icon: Award, title: "Excellence", text: "Nous maintenons les plus hauts standards à chaque trajet." },
  { icon: Users, title: "Discrétion", text: "Votre vie privée est notre priorité absolue." },
  { icon: MapPin, title: "Expertise Locale", text: "Une connaissance approfondie du Sud de la France." },
  { icon: Heart, title: "Service Personnalisé", text: "Chaque voyage est adapté à vos préférences." }
];

const services = [
  {
    id: 1,
    title: "Transferts Aéroports",
    description: "Marseille-Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/voiture%20en%20route%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS92b2l0dXJlIGVuIHJvdXRlIC5wbmciLCJpYXQiOjE3Njg3NTc3MTUsImV4cCI6MTgwMDI5MzcxNX0.iTqRqep4pCNN5bL_VLXw0LvfsNDrx8fT4LaONKYuGdw"
  },
  {
    id: 2,
    title: "Service à la journée",
    description: "Bénéficiez d'un chauffeur privé pour la journée entière, idéal pour vos rendez-vous professionnels.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Shopping & Sorties",
    description: "Nos chauffeurs vous accompagnent confortablement pour vos séances shopping.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Gemini_Generated_Image_wwvf4pwwvf4pwwvf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9HZW1pbmlfR2VuZXJhdGVkX0ltYWdlX3d3dmY0cHd3dmY0cHd3dmYucG5nIiwiaWF0IjoxNzY4NzU3NjU3LCJleHAiOjE4MDAyOTM2NTd9.-3IiV9rjs7IHSjYNTcI1Q78z8PTValRc8nJz7w64mTA"
  },
  {
    id: 4,
    title: "Côte d'Azur",
    description: "Nice, Cannes, Monaco. Découvrez les plus beaux paysages de la Méditerranée.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/avion%20nice%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9hdmlvbiBuaWNlIC5wbmciLCJpYXQiOjE3Njg3NTc1MjgsImV4cCI6MTgwMDI5MzUyOH0.223Q28L3arFQ1_Y_UamI_GpMylA-zZDvQ0NYqo_qFaQ"
  },
  {
    id: 5,
    title: "Transferts Gares",
    description: "TGV Aix-en-Provence, Marseille Saint-Charles. Prise en charge directe à quai.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/gare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9nYXJlLnBuZyIsImlhdCI6MTc2ODc1NzU3NCwiZXhwIjoxODAwMjkzNTc0fQ.QIwDTb1biOFIXpjMZ5yuUTiEbHdcxb0wxATFblSeTVQ"
  },
  {
    id: 6,
    title: "Location à l'heure",
    description: "Réservez notre service à l'heure pour tous vos besoins de déplacements.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop&q=80"
  }
];

function ScrollingBanner() {
  const duplicatedItems = [...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems];

  return (
    <div className="w-full overflow-hidden bg-white" style={{ height: '140px' }}>
      <div 
        className="flex items-center h-full"
        style={{ width: 'fit-content', animation: 'scroll 40s linear infinite' }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center flex-shrink-0" style={{ minWidth: '280px', padding: '24px', gap: '12px' }}>
            <item.icon size={36} strokeWidth={1.5} className="text-black" />
            <span className="font-serif text-lg font-medium text-black">{item.title}</span>
            <span className="font-serif text-[13px] font-light text-gray-500">{item.text}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white pt-5 pb-20">
      <h2 className="sr-only">Nos Services</h2>
      
      <ScrollingBanner />

      {/* GRID FIXE - 3 colonnes desktop, 2 tablet, 1 mobile - GAP 0 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-16">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white border border-gray-200 hover:border-black transition-all duration-300 group"
          >
            {/* IMAGE EN HAUT */}
            <div className="w-full overflow-hidden" style={{ height: '300px' }}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* TEXTE EN BAS */}
            <div className="p-6">
              <span className="font-serif text-xs text-gray-400 uppercase tracking-widest">
                {String(service.id).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-xl font-medium text-black mt-2 mb-2">
                {service.title}
              </h3>
              <div className="w-8 h-px bg-black mb-3" />
              <p className="font-serif text-sm font-light text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="tel:0784628640" className="inline-block px-8 py-3.5 bg-black text-white font-serif text-sm rounded-full hover:bg-gray-900 transition-all">
          Réserver maintenant : 07 84 62 86 40
        </a>
      </div>
    </section>
  );
}
