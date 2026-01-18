import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const services = [
  {
    id: 1,
    title: "Aéroports",
    subtitle: "Transferts garantis avec suivi de vol",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80",
    alt: "Transfert aéroport VTC Tesla Marseille Nice"
  },
  {
    id: 2,
    title: "Gares",
    subtitle: "Prise en charge directe à quai",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop&q=80",
    alt: "Transfert gare TGV Aix-en-Provence"
  },
  {
    id: 3,
    title: "Longue Distance",
    subtitle: "Nice, Cannes, Monaco, toute la PACA",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop&q=80",
    alt: "Course longue distance Côte d'Azur"
  },
  {
    id: 4,
    title: "Événements",
    subtitle: "Mariages, galas et soirées d'exception",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80",
    alt: "Transport événement mariage VTC"
  }
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  // Auto-scroll toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Animation au changement d'index
  useEffect(() => {
    controls.start({
      x: -currentIndex * 100 + '%',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    });
  }, [currentIndex, controls]);

  return (
    <section className="relative bg-white py-20 md:py-24 px-6 overflow-hidden" aria-label="Nos Services">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-3 tracking-tight">
            Nos Services
          </h2>
          <p className="text-base text-gray-600 font-light">
            Voyagez à bord de notre Tesla Model Y 2025, récente et entretenue
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={controls}
              style={{ width: `${services.length * 100}%` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / services.length}%` }}
                >
                  <motion.article
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group relative bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-white transition-all duration-500 h-[380px]"
                  >
                    <div className="flex h-full">
                      
                      {/* Partie gauche : Texte (40%) */}
                      <div className="w-[40%] flex flex-col justify-center items-start p-8 relative z-10">
                        <motion.h3 
                          className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {service.title}
                        </motion.h3>
                        
                        <motion.div
                          className="h-px bg-white mb-4 w-16"
                          initial={{ width: 0 }}
                          whileInView={{ width: 64 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        />
                        
                        <motion.p 
                          className="text-sm text-gray-300 font-light mb-6 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          {service.subtitle}
                        </motion.p>
                        
                        <motion.button
                          className="group/btn px-6 py-2.5 border border-white text-white text-sm font-light rounded-full hover:bg-white hover:text-black transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          En savoir plus
                          <span className="inline-block ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                        </motion.button>
                      </div>

                      {/* Partie droite : Image (60%) */}
                      <div className="w-[60%] relative overflow-hidden">
                        <motion.img
                          src={service.image}
                          alt={service.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Gradient overlay subtil */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                        
                        {/* Badge numéro */}
                        <div className="absolute top-6 right-6 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <span className="text-white font-light text-sm">
                            {String(service.id).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative"
                aria-label={`Aller à la carte ${index + 1}`}
              >
                <div className={`h-1 rounded-full transition-all duration-500 ${
                  currentIndex === index 
                    ? 'bg-black w-12' 
                    : 'bg-gray-300 w-6 hover:bg-gray-400'
                }`} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
