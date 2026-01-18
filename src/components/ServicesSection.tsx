import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const cardsPerView = 3;

  // Auto-scroll every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + cardsPerView;
        return nextIndex >= services.length ? 0 : nextIndex;
      });
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  // Animation on index change
  useEffect(() => {
    const offset = -(currentIndex * (100 / cardsPerView));
    controls.start({
      x: `${offset}%`,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    });
  }, [currentIndex, controls]);

  const totalPages = Math.ceil(services.length / cardsPerView);
  const currentPage = Math.floor(currentIndex / cardsPerView);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - cardsPerView));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(services.length - cardsPerView, currentIndex + cardsPerView));
  };

  return (
    <section className="relative bg-white py-16 md:py-24 px-6" aria-label="Nos Services">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
            Nos Services Premium
          </h2>
          <p className="font-serif text-base md:text-lg font-light text-gray-600 max-w-2xl mx-auto">
            De l'aéroport aux événements, notre Tesla Model Y 2025 vous accompagne avec élégance.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={controls}
              style={{ width: `${(services.length / cardsPerView) * 100}%` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / services.length * cardsPerView}%` }}
                >
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: service.id * 0.1 }}
                    className="group flex h-[400px] bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300"
                  >
                    {/* Left side - Text */}
                    <div className="w-1/2 p-6 flex flex-col justify-center bg-white">
                      <span className="font-serif text-sm text-gray-400 mb-3">
                        {String(service.id).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-black mb-3">
                        {service.title}
                      </h3>
                      <div className="w-12 h-px bg-black mb-4" />
                      <p className="font-serif text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right side - Image */}
                    <div className="w-1/2 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsPerView)}
                className="group relative"
                aria-label={`Aller à la page ${index + 1}`}
              >
                <div className={`h-1 rounded-full transition-all duration-500 ${
                  currentPage === index 
                    ? 'bg-black w-16' 
                    : 'bg-gray-300 w-8 hover:bg-gray-500'
                }`} />
              </button>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="px-6 py-2.5 border border-black text-black text-sm font-light rounded-full hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              ← Précédent
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2.5 border border-black text-black text-sm font-light rounded-full hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex >= services.length - cardsPerView}
            >
              Suivant →
            </button>
          </div>
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
