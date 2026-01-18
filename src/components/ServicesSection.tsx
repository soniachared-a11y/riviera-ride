import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import images localement
import voitureEnRoute from '@/assets/services/voiture-en-route.png';
import chauffeurJournee from '@/assets/services/chauffeur-journee.jpg';
import shopping from '@/assets/services/shopping.png';
import vieuxPortMarseille from '@/assets/services/vieux-port-marseille.jpg';
import evenements from '@/assets/services/evenements.jpg';
import gare from '@/assets/services/gare.png';

const services = [
  {
    title: "Transferts Aéroports",
    description: "Marseille-Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel, prise en charge directe au terminal.",
    image: voitureEnRoute
  },
  {
    title: "Service à la journée",
    description: "Bénéficiez d'un chauffeur privé pour la journée entière, idéal pour vos rendez-vous professionnels ou vos activités personnelles.",
    image: chauffeurJournee
  },
  {
    title: "Shopping & Sorties",
    description: "Nos chauffeurs vous accompagnent confortablement pour vos séances shopping, avec ponctualité et attention à vos besoins.",
    image: shopping
  },
  {
    title: "Tourisme PACA",
    description: "Marseille, Cassis, Aix-en-Provence. Découvrez les trésors de la région avec un guide local passionné.",
    image: vieuxPortMarseille
  },
  {
    title: "Événements",
    description: "Mariages, galas, anniversaires. Nous transformons vos moments spéciaux en souvenirs inoubliables.",
    image: evenements
  },
  {
    title: "Transferts Gares",
    description: "TGV Aix-en-Provence, Marseille Saint-Charles. Prise en charge directe à quai, aide aux bagages.",
    image: gare
  }
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cards per view: 2 on desktop, 1 on mobile
  const cardsPerView = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(services.length / cardsPerView);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Titre et présentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="font-serif text-black mb-4 inline-block relative"
            style={{ fontSize: '42px', fontWeight: 300, letterSpacing: '0.03em' }}
          >
            Votre Satisfaction est Notre Priorité
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p 
            className="font-serif text-black/70 max-w-3xl mx-auto mt-6"
            style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.8 }}
          >
            Basé à Aix-en-Provence, Taxi Malacrida allie rigueur et excellence pour vous mener à bon port. 
            Disponibilité 24/7 dans toute la région PACA, ponctualité et tranquillité d'esprit garanties.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: `-${currentIndex * (100 / totalSlides)}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="overflow-hidden flex-shrink-0"
                style={{
                  background: '#000000',
                  borderRadius: '12px',
                  height: '600px',
                  width: isMobile ? 'calc(100% - 0px)' : 'calc(50% - 16px)'
                }}
              >
                {/* Image - 360px height */}
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Contenu texte avec padding 32px */}
                <div style={{ padding: '32px', color: '#FFFFFF' }}>
                  <h3 
                    className="font-serif"
                    style={{ 
                      fontSize: '28px', 
                      fontWeight: 400, 
                      marginBottom: '16px',
                      color: '#FFFFFF'
                    }}
                  >
                    {service.title}
                  </h3>
                  
                  {/* Ligne blanche - 60px width, 2px height */}
                  <div 
                    style={{ 
                      width: '60px', 
                      height: '2px', 
                      background: '#FFFFFF', 
                      marginBottom: '20px' 
                    }} 
                  />
                  
                  <p 
                    className="font-serif"
                    style={{ 
                      fontSize: '15px', 
                      fontWeight: 300, 
                      lineHeight: 1.7,
                      color: '#FFFFFF'
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-black scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à la slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
