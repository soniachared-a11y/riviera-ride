import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '1',
    title: 'Demande de course',
    description: 'Réservez par téléphone au 07 84 62 86 40 ou via notre formulaire. Réponse très rapide garantie.',
    side: 'left'
  },
  {
    number: '2',
    title: 'Confirmation & Tarif',
    description: 'Nous validons votre créneau instantanément et fixons le prix à l\'avance. Aucune surprise.',
    side: 'right'
  },
  {
    number: '3',
    title: 'Prise en charge',
    description: 'Votre chauffeur vous attend à l\'heure dite. Installez-vous et profitez du confort.',
    side: 'left'
  },
  {
    number: '4',
    title: 'Paiement simple',
    description: 'Règlement facile à bord : espèces ou Carte Bancaire.',
    side: 'right'
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 
            id="process-title"
            className="font-serif text-[32px] md:text-[44px] font-light text-black tracking-[0.02em] mb-6"
          >
            Votre Trajet en 4 Étapes Simples
          </h2>
          <div className="w-20 h-[1px] bg-black/30 mx-auto" />
        </motion.div>

        {/* Winding Road Timeline - Desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* SVG Winding Path */}
          <svg 
            className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-32"
            viewBox="0 0 120 800"
            preserveAspectRatio="none"
            style={{ height: '100%' }}
          >
            <motion.path
              d="M60 0 
                 C60 50, 20 80, 20 130 
                 C20 180, 100 210, 100 260 
                 C100 310, 20 340, 20 390 
                 C20 440, 100 470, 100 520 
                 C100 570, 20 600, 20 650 
                 C20 700, 60 730, 60 800"
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="3"
              strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Steps Container */}
          <div className="relative space-y-24">
            {steps.map((step, index) => {
              const isLeft = step.side === 'left';
              const yPosition = index * 200;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.25 }}
                  className="relative flex items-center min-h-[140px]"
                >
                  {/* Left Side Content */}
                  {isLeft && (
                    <div className="w-[45%] pr-16 text-right">
                      <h3 className="font-serif text-[24px] font-medium text-black mb-3 tracking-wide">
                        {step.title}
                      </h3>
                      <p className="font-serif text-[15px] text-black/60 leading-[1.8]">
                        {step.description}
                      </p>
                    </div>
                  )}
                  {!isLeft && <div className="w-[45%]" />}

                  {/* Center - Number Circle with Connectors */}
                  <div className="w-[10%] flex justify-center relative">
                    {/* Horizontal Connector Line */}
                    <div 
                      className={`absolute top-1/2 transform -translate-y-1/2 w-16 border-t-2 border-dashed border-black/20 ${
                        isLeft ? 'right-full mr-2' : 'left-full ml-2'
                      }`}
                    />
                    
                    {/* Number Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.25 }}
                      className="w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-lg z-10"
                    >
                      <span className="font-serif text-[24px] font-light text-black">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Side Content */}
                  {!isLeft && (
                    <div className="w-[45%] pl-16 text-left">
                      <h3 className="font-serif text-[24px] font-medium text-black mb-3 tracking-wide">
                        {step.title}
                      </h3>
                      <p className="font-serif text-[15px] text-black/60 leading-[1.8]">
                        {step.description}
                      </p>
                    </div>
                  )}
                  {isLeft && <div className="w-[45%]" />}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical Winding Path */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px]">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-black/20 via-black/30 to-black/20"
              style={{ backgroundSize: '2px 12px', backgroundImage: 'repeating-linear-gradient(to bottom, #000 0, #000 6px, transparent 6px, transparent 12px)' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5 }}
            />
          </div>

          <div className="space-y-10 pl-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                  className="absolute -left-[52px] top-1 w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-md"
                >
                  <span className="font-serif text-[16px] font-light text-black">
                    {step.number}
                  </span>
                </motion.div>

                {/* Horizontal Connector */}
                <div className="absolute -left-[12px] top-5 w-4 border-t-2 border-dashed border-black/30" />

                {/* Content */}
                <div>
                  <h3 className="font-serif text-[18px] font-medium text-black mb-2 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="font-serif text-[14px] text-black/60 leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-16 md:mt-24"
        >
          <a
            href="#contact"
            className="inline-block bg-black text-white font-serif text-[15px] md:text-[16px] font-light tracking-[0.08em] uppercase px-12 py-5 hover:bg-black/90 transition-all duration-300 hover:tracking-[0.12em]"
          >
            Réserver mon chauffeur maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
