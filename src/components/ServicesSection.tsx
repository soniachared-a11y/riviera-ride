import { motion } from 'framer-motion';
import { Award, Users, MapPin, Heart } from 'lucide-react';

const scrollingItems = [
  {
    icon: Award,
    title: "Excellence",
    text: "Nous maintenons les plus hauts standards à chaque trajet."
  },
  {
    icon: Users,
    title: "Discrétion",
    text: "Votre vie privée est notre priorité absolue."
  },
  {
    icon: MapPin,
    title: "Expertise Locale",
    text: "Une connaissance approfondie du Sud de la France."
  },
  {
    icon: Heart,
    title: "Service Personnalisé",
    text: "Chaque voyage est adapté à vos préférences."
  }
];

const services = [
  {
    id: 1,
    title: "Transferts Aéroports",
    description: "Marseille-Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel, prise en charge directe au terminal.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/voiture%20en%20route%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS92b2l0dXJlIGVuIHJvdXRlIC5wbmciLCJpYXQiOjE3Njg3NTc3MTUsImV4cCI6MTgwMDI5MzcxNX0.iTqRqep4pCNN5bL_VLXw0LvfsNDrx8fT4LaONKYuGdw"
  },
  {
    id: 2,
    title: "Service à la journée",
    description: "Bénéficiez d'un chauffeur privé pour la journée entière, idéal pour vos rendez-vous professionnels ou vos activités personnelles.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Shopping & Sorties",
    description: "Nos chauffeurs vous accompagnent confortablement pour vos séances shopping, avec ponctualité et attention à vos besoins.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Gemini_Generated_Image_wwvf4pwwvf4pwwvf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9HZW1pbmlfR2VuZXJhdGVkX0ltYWdlX3d3dmY0cHd3dmY0cHd3dmYucG5nIiwiaWF0IjoxNzY4NzU3NjU3LCJleHAiOjE4MDAyOTM2NTd9.-3IiV9rjs7IHSjYNTcI1Q78z8PTValRc8nJz7w64mTA"
  },
  {
    id: 4,
    title: "Côte d'Azur",
    description: "Nice, Cannes, Monaco. Découvrez les plus beaux paysages de la Méditerranée lors de vos trajets avec vue sur la mer.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/avion%20nice%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9hdmlvbiBuaWNlIC5wbmciLCJpYXQiOjE3Njg3NTc1MjgsImV4cCI6MTgwMDI5MzUyOH0.223Q28L3arFQ1_Y_UamI_GpMylA-zZDvQ0NYqo_qFaQ"
  },
  {
    id: 5,
    title: "Transferts Gares",
    description: "TGV Aix-en-Provence, Marseille Saint-Charles. Prise en charge directe à quai, aide aux bagages, départ immédiat après votre arrivée.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/gare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9nYXJlLnBuZyIsImlhdCI6MTc2ODc1NzU3NCwiZXhwIjoxODAwMjkzNTc0fQ.QIwDTb1biOFIXpjMZ5yuUTiEbHdcxb0wxATFblSeTVQ"
  },
  {
    id: 6,
    title: "Location à l'heure",
    description: "Réservez notre service à l'heure pour tous vos besoins, que ce soit pour un trajet rapide ou une journée complète de déplacements.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop&q=80"
  }
];

export default function ServicesSection() {
  // Duplicate items for seamless loop
  const duplicatedItems = [...scrollingItems, ...scrollingItems, ...scrollingItems, ...scrollingItems];

  return (
    <section className="relative bg-white py-20 md:py-20" aria-label="Nos Services">
      
      {/* Scrolling Banner */}
      <div className="w-full overflow-hidden mb-16" style={{ backgroundColor: '#F9FAFB', height: '180px' }}>
        <motion.div
          className="flex items-center h-full"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          style={{ gap: '60px', paddingLeft: '60px' }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center flex-shrink-0"
              style={{ minWidth: '350px', padding: '32px' }}
            >
              <item.icon size={40} strokeWidth={1.5} className="text-black mb-3" />
              <h3 className="font-serif text-xl font-medium text-black mb-2">
                {item.title}
              </h3>
              <p className="font-serif text-sm font-light text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-20">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
          style={{ gap: '40px' }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex w-full max-w-[380px] h-[400px] bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300"
              style={{
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
              }}
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Left side - Text */}
              <div className="w-1/2 p-5 flex flex-col justify-center bg-white">
                <span className="font-serif text-sm text-gray-400 mb-2">
                  {String(service.id).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg font-medium text-black mb-2">
                  {service.title}
                </h3>
                <div className="w-3 h-px bg-black mb-3" />
                <p className="font-serif text-xs text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right side - Image */}
              <div className="w-1/2 h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a 
            href="tel:0784628640"
            className="inline-block px-8 py-3.5 bg-black text-white font-serif text-sm font-light rounded-full hover:bg-gray-900 transition-all duration-300"
          >
            Réserver maintenant : 07 84 62 86 40
          </a>
        </motion.div>
      </div>

    </section>
  );
}
