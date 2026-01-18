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
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            id="process-title"
            className="font-serif text-[36px] md:text-[52px] font-light text-black tracking-[0.01em] mb-3"
          >
            Votre Trajet en 4 Étapes Simples
          </h2>
          <p className="text-[14px] md:text-[15px] font-light text-black/50 tracking-[0.15em] uppercase">
            L'excellence en quelques clics
          </p>
        </motion.div>

        {/* Winding Road Timeline - Desktop */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* SVG Winding Path - Tighter curves */}
          <svg 
            className="absolute left-1/2 top-0 transform -translate-x-1/2 pointer-events-none"
            width="100"
            height="520"
            viewBox="0 0 100 520"
            fill="none"
          >
            <motion.path
              d="M50 0 
                 C50 30, 15 50, 15 80 
                 C15 110, 85 130, 85 160 
                 C85 190, 15 210, 15 240 
                 C15 270, 85 290, 85 320 
                 C85 350, 15 370, 15 400 
                 C15 430, 50 450, 50 520"
              stroke="black"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
          </svg>

          {/* Steps Container - Compact spacing */}
          <div className="relative" style={{ minHeight: '520px' }}>
            {steps.map((step, index) => {
              const isLeft = step.side === 'left';
              const topPosition = index * 130;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25, x: isLeft ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.18 }}
                  className="absolute flex items-center w-full"
                  style={{ top: `${topPosition}px` }}
                >
                  {/* Left Side Content */}
                  {isLeft && (
                    <div className="w-[42%] pr-10 text-right">
                      <h3 className="font-serif text-[20px] font-normal text-black mb-1.5 tracking-[0.02em]">
                        {step.title}
                      </h3>
                      <p className="text-[13px] font-light text-black/55 leading-[1.7]">
                        {step.description}
                      </p>
                    </div>
                  )}
                  {!isLeft && <div className="w-[42%]" />}

                  {/* Center - Number Circle */}
                  <div className="w-[16%] flex justify-center relative">
                    {/* Horizontal Connector */}
                    <div 
                      className={`absolute top-1/2 transform -translate-y-1/2 w-8 border-t border-dashed border-black/20 ${
                        isLeft ? 'right-[calc(50%+28px)]' : 'left-[calc(50%+28px)]'
                      }`}
                    />
                    
                    {/* Number Circle with Shadow */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.45 + index * 0.18,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="w-14 h-14 rounded-full bg-white border border-black/80 flex items-center justify-center z-10"
                      style={{
                        boxShadow: '0 4px 20px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)'
                      }}
                    >
                      <span className="font-serif text-[22px] font-light text-black">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Side Content */}
                  {!isLeft && (
                    <div className="w-[42%] pl-10 text-left">
                      <h3 className="font-serif text-[20px] font-normal text-black mb-1.5 tracking-[0.02em]">
                        {step.title}
                      </h3>
                      <p className="text-[13px] font-light text-black/55 leading-[1.7]">
                        {step.description}
                      </p>
                    </div>
                  )}
                  {isLeft && <div className="w-[42%]" />}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Compact */}
        <div className="md:hidden relative pl-16">
          {/* Vertical Path */}
          <motion.div 
            className="absolute left-6 top-2 bottom-2 w-px bg-black/15"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2 }}
            style={{ 
              backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(0,0,0,0.2) 4px, rgba(0,0,0,0.2) 10px)',
              transformOrigin: 'top'
            }}
          />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.15 }}
                className="relative"
              >
                {/* Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.15 }}
                  className="absolute -left-[52px] top-0 w-11 h-11 rounded-full bg-white border border-black/70 flex items-center justify-center"
                  style={{
                    boxShadow: '0 3px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <span className="font-serif text-[18px] font-light text-black">
                    {step.number}
                  </span>
                </motion.div>

                {/* Connector */}
                <div className="absolute -left-[8px] top-5 w-3 border-t border-dashed border-black/25" />

                {/* Content */}
                <div>
                  <h3 className="font-serif text-[17px] font-normal text-black mb-1 tracking-[0.02em]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-light text-black/55 leading-[1.65]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center mt-14 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-black text-white font-serif text-[14px] md:text-[15px] font-light tracking-[0.12em] uppercase px-14 py-4 transition-all duration-300 hover:bg-black/85 hover:tracking-[0.16em]"
          >
            Réserver mon chauffeur maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
