import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

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

// Animated border component that draws around the title
const AnimatedBorder = ({ isInView }: { isInView: boolean }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ top: '-12px', left: '-16px', width: 'calc(100% + 32px)', height: 'calc(100% + 24px)' }}
    >
      <motion.rect
        x="1"
        y="1"
        rx="4"
        ry="4"
        fill="none"
        stroke={ACCENT_BLUE}
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ 
          pathLength: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
          opacity: { duration: 0.3 }
        }}
        style={{ 
          width: '100%', 
          height: '100%'
        }}
      />
    </svg>
  );
};

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cards per view: 2 on desktop, 1 on mobile
  const cardsPerView = isMobile ? 1 : 2;
  const totalSlides = services.length; // Each card is a slide now

  // Calculate card width including gap
  const getCardWidth = useCallback(() => {
    if (!carouselRef.current) return 0;
    const containerWidth = carouselRef.current.offsetWidth;
    const gap = isMobile ? 16 : 24; // gap-4 = 16px, gap-6 = 24px
    if (isMobile) {
      return containerWidth;
    } else {
      return (containerWidth - gap) / 2;
    }
  }, [isMobile]);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = isMobile ? services.length - 1 : services.length - 2;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Scroll to current index - disable snap during programmatic scroll
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const carousel = carouselRef.current;
    const cardWidth = getCardWidth();
    const gap = isMobile ? 16 : 24;
    const scrollTarget = currentIndex * (cardWidth + gap);
    
    // Disable snap during auto-scroll
    setIsAutoScrolling(true);
    carousel.style.scrollSnapType = 'none';
    
    carousel.scrollTo({
      left: scrollTarget,
      behavior: 'smooth'
    });

    // Re-enable snap after scroll completes
    const timeout = setTimeout(() => {
      carousel.style.scrollSnapType = 'x mandatory';
      setIsAutoScrolling(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex, getCardWidth, isMobile]);

  // Handle manual scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isAutoScrolling) return;
    
    const target = e.target as HTMLDivElement;
    const cardWidth = getCardWidth();
    const gap = isMobile ? 16 : 24;
    const newIndex = Math.round(target.scrollLeft / (cardWidth + gap));
    const maxIndex = isMobile ? services.length - 1 : services.length - 2;
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const maxDots = isMobile ? services.length : services.length - 1;

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
          {/* Title with animated border */}
          <div className="inline-block relative px-6 py-3">
            <AnimatedBorder isInView={isTitleInView} />
            <h2 
              ref={titleRef}
              className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-[#1a1a1a] relative z-10"
            >
              Votre <span style={{ color: ACCENT_BLUE }}>Satisfaction</span> est Notre Priorité
            </h2>
          </div>
          
          <p className="font-serif text-black/70 max-w-3xl mx-auto mt-6 md:mt-8 text-[15px] md:text-[17px] font-light leading-relaxed md:leading-[1.8] px-2">
            Basé à Aix-en-Provence, Taxi Malacrida allie rigueur et excellence pour vous mener à bon port. 
            Disponibilité 24/7 dans toute la région PACA, ponctualité et tranquillité d'esprit garanties.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onScroll={handleScroll}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 overflow-hidden rounded-xl"
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
          {Array.from({ length: maxDots }).map((_, index) => (
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
