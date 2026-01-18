import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const experiences = [
  {
    id: 1,
    title: "Passagers Comblés",
    description: "Voyagez dans un environnement premium où confort et technologie créent une expérience unique",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop&q=80",
    alt: "Passagers souriants profitant du confort Tesla"
  },
  {
    id: 2,
    title: "Côte d'Azur",
    description: "Nice, Cannes, Monaco : des paysages à couper le souffle tout au long de vos trajets",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&h=600&fit=crop&q=80",
    alt: "Côte d'Azur coucher de soleil méditerranée"
  },
  {
    id: 3,
    title: "Aix-en-Provence",
    description: "Notre ville d'attache au cœur de la Provence, point de départ de tous vos voyages",
    image: "https://images.unsplash.com/photo-1590932895501-53fdca3b3d4c?w=800&h=600&fit=crop&q=80",
    alt: "Fontaine Aix-en-Provence lumière dorée"
  },
  {
    id: 4,
    title: "Marseille Vieux Port",
    description: "Entre terre et mer, la beauté marseillaise illumine vos déplacements",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop&q=80",
    alt: "Vieux Port Marseille sunset doré"
  },
  {
    id: 5,
    title: "Confort Moderne",
    description: "À l'arrière de notre Tesla, profitez d'un silence apaisant et d'équipements haut de gamme",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop&q=80",
    alt: "Intérieur Tesla passager souriant"
  },
  {
    id: 6,
    title: "Provence Authentique",
    description: "Les champs de lavande, villages perchés et paysages provençaux illuminent vos trajets",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop&q=80",
    alt: "Champs de lavande Provence coucher de soleil"
  }
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const cardsPerView = 2; // Afficher 2 cartes à la fois

  // Auto-scroll toutes les 8 secondes (beaucoup plus lent)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + cardsPerView;
        return nextIndex >= experiences.length ? 0 : nextIndex;
      });
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  // Animation au changement d'index
  useEffect(() => {
    const offset = -(currentIndex * (100 / cardsPerView));
    controls.start({
      x: `${offset}%`,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    });
  }, [currentIndex, controls]);

  const totalPages = Math.ceil(experiences.length / cardsPerView);
  const currentPage = Math.floor(currentIndex / cardsPerView);

  return (
    <section className="relative bg-white py-12 md:py-16 px-6" aria-label="À Propos">
      <div className="max-w-7xl mx-auto">
        
        {/* Header avec vrai contenu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-5 tracking-tight text-center">
            L'Excellence au Service de vos Déplacements
          </h2>
          
          <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed text-center">
            Depuis Aix-en-Provence, <strong className="font-medium text-black">Taxi Malacrida</strong> transforme chaque trajet en expérience premium. 
            Notre Tesla Model Y 2025 incarne innovation, confort et respect de l'environnement. 
            Disponibles 24h/24 de Marseille à Monaco, nous mettons la ponctualité et la discrétion au cœur de notre service.
          </p>
        </motion.div>

        {/* Carousel avec 2 cartes visibles */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={controls}
              style={{ width: `${(experiences.length / cardsPerView) * 100}%` }}
            >
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="flex-shrink-0 px-6"
                  style={{ width: `${100 / experiences.length * cardsPerView}%` }}
                >
                  <motion.article
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative bg-black rounded-2xl overflow-hidden h-[450px] border border-gray-900 hover:border-white transition-all duration-500"
                  >
                    {/* Image de fond */}
                    <div className="absolute inset-0">
                      <motion.img
                        src={experience.image}
                        alt={experience.alt}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.8 }}
                      />
                      {/* Overlay gradient noir */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>

                    {/* Contenu */}
                    <div className="relative h-full flex flex-col justify-end p-8 z-10">
                      
                      {/* Badge numéro */}
                      <div className="absolute top-6 right-6 w-10 h-10 border border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white font-light text-sm">
                          {String(experience.id).padStart(2, '0')}
                        </span>
                      </div>

                      <motion.h3 
                        className="text-2xl font-light text-white mb-3 tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {experience.title}
                      </motion.h3>
                      
                      <motion.div
                        className="h-px bg-white mb-4 w-16"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      />
                      
                      <motion.p 
                        className="text-sm text-gray-200 font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {experience.description}
                      </motion.p>
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicateurs de pagination */}
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

          {/* Boutons navigation optionnels */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - cardsPerView))}
              className="px-6 py-2.5 border border-black text-black text-sm font-light rounded-full hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              ← Précédent
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(experiences.length - cardsPerView, currentIndex + cardsPerView))}
              className="px-6 py-2.5 border border-black text-black text-sm font-light rounded-full hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex >= experiences.length - cardsPerView}
            >
              Suivant →
            </button>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-base text-gray-600 font-light mb-4">
            Prêt à vivre l'expérience Taxi Malacrida ?
          </p>
          <a 
            href="tel:0784628640"
            className="inline-block px-8 py-3 bg-black text-white text-sm font-light rounded-full hover:bg-gray-900 transition-all duration-300"
          >
            Réserver maintenant : 07 84 62 86 40
          </a>
        </motion.div>

      </div>
    </section>
  );
}
