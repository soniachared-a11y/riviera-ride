import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '1',
    title: 'Demande de course',
    description: 'Réservez par téléphone au 07 84 62 86 40 ou via notre formulaire. Réponse très rapide garantie.',
  },
  {
    number: '2',
    title: 'Confirmation & Tarif',
    description: 'Nous validons votre créneau instantanément et fixons le prix à l\'avance. Aucune surprise.',
  },
  {
    number: '3',
    title: 'Prise en charge',
    description: 'Votre chauffeur vous attend à l\'heure dite. Installez-vous et profitez du confort.',
  },
  {
    number: '4',
    title: 'Paiement simple',
    description: 'Règlement facile à bord : espèces ou Carte Bancaire.',
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 
            id="process-title"
            className="font-serif text-[32px] md:text-[48px] font-light text-black tracking-[0.02em] mb-4"
          >
            Votre Trajet en 4 Étapes
          </h2>
          <div className="w-16 h-px bg-black/30 mx-auto" />
        </motion.div>

        {/* Desktop Zig-Zag Layout */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Winding SVG Path */}
          <svg 
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none"
            viewBox="0 0 800 600"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M400 0 
                 C400 40, 200 60, 200 100 
                 C200 140, 600 160, 600 200 
                 C600 240, 200 260, 200 300 
                 C200 340, 600 360, 600 400
                 C600 440, 200 460, 200 500
                 C200 540, 400 560, 400 600"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="8 12"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.15 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </svg>

          {/* Steps Grid */}
          <div className="relative space-y-8">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`grid grid-cols-[1fr_auto_1fr] gap-8 items-center ${
                    index !== steps.length - 1 ? 'pb-8' : ''
                  }`}
                >
                  {/* Left Card or Spacer */}
                  {isLeft ? (
                    <div className="justify-self-end">
                      <div 
                        className="bg-white rounded-lg p-6 max-w-sm text-right"
                        style={{
                          boxShadow: '0 4px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)'
                        }}
                      >
                        <h3 className="font-serif text-[18px] font-normal text-black mb-2 tracking-[0.02em]">
                          {step.title}
                        </h3>
                        <p className="text-[14px] font-light text-black/60 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* Center Number */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="relative z-10"
                  >
                    <div 
                      className="w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center"
                      style={{
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 4px 10px rgba(0,0,0,0.08)'
                      }}
                    >
                      <span className="font-serif text-[24px] font-light text-black">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Card or Spacer */}
                  {!isLeft ? (
                    <div className="justify-self-start">
                      <div 
                        className="bg-white rounded-lg p-6 max-w-sm text-left"
                        style={{
                          boxShadow: '0 4px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)'
                        }}
                      >
                        <h3 className="font-serif text-[18px] font-normal text-black mb-2 tracking-[0.02em]">
                          {step.title}
                        </h3>
                        <p className="text-[14px] font-light text-black/60 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden relative max-w-2xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className={`flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div 
                    className={`flex-1 bg-white rounded-lg p-5 ${isLeft ? 'text-right' : 'text-left'}`}
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                    }}
                  >
                    <h3 className="font-serif text-[17px] font-normal text-black mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[13px] font-light text-black/55 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.15 }}
                    className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center flex-shrink-0"
                    style={{
                      boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    <span className="font-serif text-[20px] font-light text-black">
                      {step.number}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          {/* Vertical dashed line */}
          <motion.div 
            className="absolute left-7 top-4 bottom-4 w-px"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2 }}
            style={{ 
              backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(0,0,0,0.2) 4px, rgba(0,0,0,0.2) 10px)',
              transformOrigin: 'top'
            }}
          />

          <div className="space-y-6 pl-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                className="relative"
              >
                {/* Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.12 }}
                  className="absolute -left-[68px] top-2 w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center"
                  style={{
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                >
                  <span className="font-serif text-[18px] font-light text-black">
                    {step.number}
                  </span>
                </motion.div>

                {/* Card */}
                <div 
                  className="bg-white rounded-lg p-4"
                  style={{
                    boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
                  }}
                >
                  <h3 className="font-serif text-[16px] font-normal text-black mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-light text-black/55 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button - Refined Pill Shape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-16 md:mt-20"
        >
          <a
            href="#contact"
            className="inline-block bg-black text-white font-serif text-[13px] md:text-[14px] font-light tracking-[0.15em] uppercase px-10 py-3.5 rounded-full transition-all duration-300 hover:bg-black/90 hover:-translate-y-0.5"
            style={{
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}
          >
            Réserver mon chauffeur
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
