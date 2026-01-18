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
    title: 'Paiement & Arrivée',
    description: 'Voyage serein et règlement facile à bord : espèces ou Carte Bancaire.',
  }
];

const ACCENT_BLUE = '#0E4D64';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 
            id="process-title"
            className="font-serif text-[28px] md:text-[42px] lg:text-[48px] font-light tracking-[0.02em] leading-tight"
          >
            <span className="text-[#1a1a1a]">Réservez votre trajet avec </span>
            <span style={{ color: ACCENT_BLUE }}>Taxi Malacrida</span>
          </h2>
        </motion.div>

        {/* Desktop Zig-Zag Layout */}
        <div className="hidden lg:block relative">
          {/* Animated SVG Roadmap */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 500"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M200 80 
                 C350 80, 350 80, 500 80
                 C650 80, 650 80, 800 80
                 C900 80, 900 180, 800 180
                 C650 180, 650 180, 500 180
                 C350 180, 350 180, 200 180
                 C100 180, 100 280, 200 280
                 C350 280, 350 280, 500 280
                 C650 280, 650 280, 800 280
                 C900 280, 900 380, 800 380
                 C650 380, 650 380, 500 380
                 C350 380, 350 380, 200 380"
              stroke={ACCENT_BLUE}
              strokeWidth="4"
              strokeDasharray="12 8"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
          </svg>

          {/* Grid Layout - 2 Rows x 2 Columns */}
          <div className="relative grid grid-cols-2 gap-x-24 gap-y-16">
            {steps.map((step, index) => {
              const isTopRow = index < 2;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className={`relative ${isLeft ? 'justify-self-end' : 'justify-self-start'}`}
                >
                  {/* Card */}
                  <div 
                    className="bg-white border border-[#e5e5e5] rounded-lg p-8 max-w-[380px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                    }}
                  >
                    {/* Number Circle */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.2 + index * 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-105"
                      style={{
                        borderColor: ACCENT_BLUE,
                        boxShadow: '0 6px 25px rgba(14,77,100,0.15)'
                      }}
                    >
                      <span 
                        className="font-serif text-[2.5rem] font-light"
                        style={{ color: ACCENT_BLUE }}
                      >
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-serif text-[20px] font-normal text-[#1a1a1a] mb-3 text-center tracking-[0.02em]">
                      {step.title}
                    </h3>
                    <p className="text-[14px] font-light text-[#4a4a4a] leading-[1.7] text-center">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden relative">
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div 
                  className="bg-white border border-[#e5e5e5] rounded-lg p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Number Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.2 }}
                    className="w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center mb-5 mx-auto"
                    style={{
                      borderColor: ACCENT_BLUE,
                      boxShadow: '0 4px 15px rgba(14,77,100,0.12)'
                    }}
                  >
                    <span 
                      className="font-serif text-[1.75rem] font-light"
                      style={{ color: ACCENT_BLUE }}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  <h3 className="font-serif text-[17px] font-normal text-[#1a1a1a] mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-light text-[#4a4a4a] leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Vertical with Blue Line */}
        <div className="md:hidden relative">
          {/* Vertical Blue Dashed Line */}
          <motion.div 
            className="absolute left-8 top-6 bottom-6 w-1"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            style={{ 
              backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 6px, ${ACCENT_BLUE} 6px, ${ACCENT_BLUE} 14px)`,
              transformOrigin: 'top',
              opacity: 0.5
            }}
          />

          <div className="space-y-6 pl-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                  className="absolute -left-[72px] top-4 w-14 h-14 rounded-full bg-white border-2 flex items-center justify-center"
                  style={{
                    borderColor: ACCENT_BLUE,
                    boxShadow: '0 4px 15px rgba(14,77,100,0.15)'
                  }}
                >
                  <span 
                    className="font-serif text-[1.25rem] font-light"
                    style={{ color: ACCENT_BLUE }}
                  >
                    {step.number}
                  </span>
                </motion.div>

                {/* Card */}
                <div 
                  className="bg-white border border-[#e5e5e5] rounded-lg p-5"
                  style={{
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  <h3 className="font-serif text-[16px] font-normal text-[#1a1a1a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-light text-[#4a4a4a] leading-relaxed">
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
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <a
            href="#contact"
            className="inline-block text-white font-serif text-[13px] md:text-[14px] font-light tracking-[0.12em] uppercase px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: ACCENT_BLUE,
              boxShadow: '0 6px 25px rgba(14,77,100,0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0a3d50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ACCENT_BLUE;
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
