import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=800&fit=crop&q=80',
    alt: 'Transfert aéroport VTC Tesla Aix-en-Provence',
    title: 'Transferts Aéroport',
    description: 'Marseille Provence, Nice Côte d\'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel, service porte-à-porte.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&q=80',
    alt: 'Transport mariage événement privé Provence',
    title: 'Événements Privés',
    description: 'Mariages, anniversaires, soirées de gala. Notre Tesla apporte une touche d\'élégance à vos moments exceptionnels avec un service discret.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop&q=80',
    alt: 'Chauffeur professionnel entreprise PACA',
    title: 'Déplacements Professionnels',
    description: 'Réunions, conférences, rendez-vous clients. WiFi à bord, confidentialité assurée, facturation simplifiée pour entreprises.',
  },
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=800&fit=crop&q=80',
    alt: 'Course longue distance Tesla Côte d\'Azur',
    title: 'Courses Longue Distance',
    description: 'Nice, Cannes, Monaco, Marseille. Voyagez confortablement dans toute la région PACA sans contrainte de recharge ou d\'autonomie.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  // Schema.org structured data for services
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Taxi Malacrida"
        },
        "areaServed": "Provence-Alpes-Côte d'Azur"
      }
    }))
  };

  return (
    <section 
      id="services" 
      aria-label="Nos Services"
      className="bg-white py-20 md:py-[120px] px-6 md:px-10"
      ref={ref}
    >
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 
            className="text-[32px] md:text-[48px] font-light text-black tracking-[-0.02em] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos Services
          </h2>
          <p className="text-base md:text-lg font-light text-[#666666] max-w-[800px] mx-auto leading-relaxed">
            Taxi Malacrida vous propose un service de transport premium 24h/24 dans toute la région PACA. 
            Avec notre Tesla Model Y 2025, profitez d'un confort électrique pour tous vos déplacements 
            professionnels et privés.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="group bg-white border border-[#E5E5E5] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              {/* Image container */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{ 
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)' 
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 
                  className="text-2xl font-medium text-black tracking-[-0.01em] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>
                
                {/* Underline */}
                <div className="w-10 h-[3px] bg-black mb-4" />
                
                <p className="text-[15px] font-light text-[#666666] leading-[1.7]">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
