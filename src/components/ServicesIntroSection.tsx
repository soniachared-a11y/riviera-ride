import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ACCENT_BLUE = '#0E4D64';

// Animated underline component
const AnimatedUnderline = ({ isInView }: { isInView: boolean }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 h-1 rounded-full"
      style={{ backgroundColor: ACCENT_BLUE }}
      initial={{ width: '0%' }}
      animate={isInView ? { width: '100%' } : { width: '0%' }}
      transition={{ 
        duration: 1.2, 
        ease: [0.65, 0, 0.35, 1],
        delay: 0.2
      }}
    />
  );
};

export default function ServicesIntroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="services" 
      className="bg-white min-h-auto md:min-h-[80vh] flex items-center justify-center py-12 md:py-0"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center px-2"
        >
          {/* Title with animated underline */}
          <div className="inline-block relative pb-4">
            <h2 
              ref={titleRef}
              className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-[#1a1a1a]"
            >
              Votre <span style={{ color: ACCENT_BLUE }}>Satisfaction</span> est Notre Priorité
            </h2>
            <AnimatedUnderline isInView={isTitleInView} />
          </div>
          
          <h3 className="font-serif text-lg md:text-xl font-light mt-6 md:mt-8 mb-4" style={{ color: ACCENT_BLUE }}>
            L'Excellence au Service de vos Déplacements
          </h3>
          <p className="font-sans text-black/70 max-w-3xl mx-auto text-[15px] md:text-[17px] font-light leading-relaxed md:leading-[1.8] px-2">
            Depuis notre installation à Aix-en-Provence, Taxi Malacrida s'est donné une mission : transformer chaque trajet en une expérience premium et mémorable. Notre Tesla Model Y 2025 incarne notre engagement envers l'innovation, le confort et le respect de l'environnement.
          </p>
          <p className="font-sans text-black/60 max-w-3xl mx-auto mt-4 text-[14px] md:text-[15px] font-light leading-relaxed px-2">
            Que vous rejoigniez un aéroport à l'aube, assistiez à un événement exceptionnel ou voyagiez pour affaires, nous comprenons que votre temps est précieux. C'est pourquoi nous mettons un point d'honneur à la ponctualité, la discrétion et l'attention aux détails. Notre connaissance approfondie de la région PACA, de Marseille à Monaco, garantit des trajets optimisés et une disponibilité 24h/24, 7j/7.
          </p>
          <p className="font-sans text-black/60 max-w-3xl mx-auto mt-4 text-[14px] md:text-[15px] font-light leading-relaxed px-2">
            Plus qu'un simple transport, nous offrons une bulle de sérénité où technologie et élégance se rencontrent pour vous permettre de voyager dans les meilleures conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
