import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Confort Premium",
    description: "Intérieur cuir premium, climatisation bi-zone, sièges chauffants. Profitez d'un silence de roulage exceptionnel grâce à la motorisation 100% électrique de notre Tesla Model Y 2025.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=800&fit=crop&q=80",
    alt: "Intérieur luxueux Tesla Model Y confort premium Aix-en-Provence"
  },
  {
    id: 2,
    title: "Disponibilité 24/7",
    description: "Service disponible jour et nuit, 7 jours sur 7. Réservation simple par téléphone ou en ligne. Prise en charge rapide partout dans la région PACA.",
    image: "https://images.unsplash.com/photo-1551817958-20e86ca1d6b4?w=600&h=800&fit=crop&q=80",
    alt: "Service VTC disponible 24h/24 Provence Côte d'Azur"
  },
  {
    id: 3,
    title: "Événements Spéciaux",
    description: "Mariages, soirées de gala, anniversaires. Notre Tesla apporte une touche d'élégance moderne à vos moments exceptionnels. Service discret et professionnel.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=800&fit=crop&q=80",
    alt: "Transport mariage événement VTC Tesla Aix-en-Provence"
  },
  {
    id: 4,
    title: "Transferts Aéroports",
    description: "Marseille Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel. Prise en charge directe terminal, aide aux bagages.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=800&fit=crop&q=80",
    alt: "Transfert aéroport VTC Tesla Marseille Nice Toulon"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-24 md:py-32 px-6" aria-label="Nos Services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Nos Services
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Taxi Malacrida vous propose un service de transport premium 24h/24 dans toute la région PACA. 
            Avec notre Tesla Model Y 2025, profitez d'un confort électrique pour tous vos déplacements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-black transition-all duration-500"
              style={{
                boxShadow: hoveredCard === service.id 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredCard === service.id ? 1.08 : 1
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Number Badge */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
                  animate={{
                    scale: hoveredCard === service.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-light text-lg">
                    {String(service.id).padStart(2, '0')}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-medium text-black mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                {/* Animated Underline */}
                <motion.div
                  className="h-0.5 bg-black mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="mt-6 flex items-center text-black font-medium text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: hoveredCard === service.id ? 1 : 0,
                    x: hoveredCard === service.id ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="mr-2">En savoir plus</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <motion.div
                className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-black/10"
                animate={{
                  width: hoveredCard === service.id ? 24 : 16,
                  height: hoveredCard === service.id ? 24 : 16
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
