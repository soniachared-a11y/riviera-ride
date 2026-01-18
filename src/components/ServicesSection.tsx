import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Import images localement
import voitureEnRoute from '@/assets/services/voiture-en-route.png';
import chauffeurJournee from '@/assets/services/chauffeur-journee.jpg';
import shopping from '@/assets/services/shopping.png';
import vieuxPortMarseille from '@/assets/services/vieux-port-marseille.jpg';
import evenements from '@/assets/services/evenements.jpg';
import gare from '@/assets/services/gare.png';

const ACCENT_BLUE = '#0E4D64';

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
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Scroll to current index with snap
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section id="services" className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Titre et présentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 px-2"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4 inline-block relative text-[#1a1a1a]">
            Votre <span style={{ color: ACCENT_BLUE }}>Satisfaction</span> est Notre Priorité
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="font-serif text-black/70 max-w-3xl mx-auto mt-4 md:mt-6 text-[15px] md:text-[17px] font-light leading-relaxed md:leading-[1.8] px-2">
            Basé à Aix-en-Provence, Taxi Malacrida allie rigueur et excellence pour vous mener à bon port. 
            Disponibilité 24/7 dans toute la région PACA, ponctualité et tranquillité d'esprit garanties.
          </p>
        </motion.div>

        {/* Carousel Container with CSS Scroll Snap */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onScroll={(e) => {
            const target = e.target as HTMLDivElement;
            const newIndex = Math.round(target.scrollLeft / target.offsetWidth);
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalSlides) {
              setCurrentIndex(newIndex);
            }
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 overflow-hidden rounded-xl"
              style={{
                background: '#000000',
                height: isMobile ? '520px' : '600px',
                width: isMobile ? '100%' : 'calc(50% - 12px)',
                minWidth: isMobile ? '100%' : 'calc(50% - 12px)'
              }}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover"
                style={{
                  height: isMobile ? '280px' : '360px'
                }}
              />
              
              {/* Contenu texte */}
              <div className="p-6 md:p-8 text-white">
                <h3 className="font-serif text-xl md:text-[28px] font-normal mb-3 md:mb-4 text-white">
                  {service.title}
                </h3>
                
                {/* Ligne blanche */}
                <div className="w-12 md:w-[60px] h-0.5 bg-white mb-4 md:mb-5" />
                
                <p className="font-serif text-sm md:text-[15px] font-light leading-relaxed md:leading-[1.7] text-white/90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              style={{
                backgroundColor: currentIndex === index ? ACCENT_BLUE : undefined
              }}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
