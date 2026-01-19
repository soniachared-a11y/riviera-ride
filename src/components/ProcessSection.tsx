import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  
  // Scroll progress for mobile timeline
  const { scrollYProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start 80%", "end 40%"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 lg:py-40 bg-white overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 
            id="process-title"
            className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight text-[#1a1a1a] mb-6"
          >
            Votre <span style={{ color: ACCENT_BLUE }}>Trajet</span> en 4 Étapes Simples
          </h2>
          <p className="font-sans text-base md:text-lg text-black/70 font-light max-w-2xl mx-auto mb-4">
            Une organisation millimétrée pour supprimer tout stress. De la réservation à l'arrivée, tout est clair et transparent.
          </p>
          <p className="font-sans text-sm md:text-base text-black/60 font-light max-w-2xl mx-auto">
            Nous avons simplifié chaque étape de votre expérience pour vous offrir un service fluide et sans surprise. 
            Réservez en quelques clics, recevez une confirmation immédiate avec le tarif exact, 
            et profitez d'un suivi en temps réel jusqu'à votre destination. Notre objectif : vous faire gagner du temps et de la sérénité.
          </p>
        </motion.div>

        {/* Desktop Zig-Zag Layout */}
        <div className="hidden lg:block relative">
          {/* Animated SVG Roadmap */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 700"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M200 100 
                 C350 100, 350 100, 500 100
                 C650 100, 650 100, 800 100
                 C920 100, 920 250, 800 250
                 C650 250, 650 250, 500 250
                 C350 250, 350 250, 200 250
                 C80 250, 80 400, 200 400
                 C350 400, 350 400, 500 400
                 C650 400, 650 400, 800 400
                 C920 400, 920 550, 800 550
                 C650 550, 650 550, 500 550
                 C350 550, 350 550, 200 550"
              stroke={ACCENT_BLUE}
              strokeWidth="5"
              strokeDasharray="14 10"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
          </svg>

          {/* Grid Layout - 2 Rows x 2 Columns */}
          <div className="relative grid grid-cols-2 gap-x-20 gap-y-12">
            {steps.map((step, index) => {
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
                    className="bg-white border border-[#e5e5e5] rounded-xl p-10 max-w-[420px] min-h-[300px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                    style={{
                      boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
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
                      className="w-24 h-24 rounded-full bg-white border-3 flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: ACCENT_BLUE,
                        borderWidth: '3px',
                        boxShadow: '0 8px 30px rgba(14,77,100,0.2)'
                      }}
                    >
                      <span 
                        className="font-serif text-5xl font-light"
                        style={{ color: ACCENT_BLUE }}
                      >
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-serif text-2xl font-medium mb-4 text-center tracking-[0.02em]" style={{ color: ACCENT_BLUE }}>
                      {step.title}
                    </h3>
                    <p className="text-base font-light text-[#4a4a4a] leading-relaxed text-center">
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
          <div className="grid grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div 
                  className="bg-white border border-[#e5e5e5] rounded-xl p-8 h-full min-h-[280px] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                  }}
                >
                  {/* Number Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.2 }}
                    className="w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center mb-6"
                    style={{
                      borderColor: ACCENT_BLUE,
                      boxShadow: '0 6px 20px rgba(14,77,100,0.15)'
                    }}
                  >
                    <span 
                      className="font-serif text-4xl font-light"
                      style={{ color: ACCENT_BLUE }}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  <h3 className="font-serif text-xl font-medium mb-3 text-center" style={{ color: ACCENT_BLUE }}>
                    {step.title}
                  </h3>
                  <p className="text-base font-light text-[#4a4a4a] leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Vertical with Animated Progress Line */}
        <div ref={mobileTimelineRef} className="md:hidden relative">
          {/* Vertical Dashed Line (Background) */}
          <div 
            className="absolute left-7 top-4 bottom-4 w-0.5"
            style={{ 
              backgroundImage: `repeating-linear-gradient(to bottom, transparent, transparent 4px, #d1d5db 4px, #d1d5db 10px)`,
            }}
          />
          
          {/* Animated Solid Blue Line (Progress) */}
          <motion.div 
            className="absolute left-7 top-4 w-0.5 origin-top"
            style={{ 
              height: lineHeight,
              backgroundColor: ACCENT_BLUE,
            }}
          />

          <div className="space-y-3 pl-16">
            {steps.map((step, index) => {
              const stepProgress = (index + 1) / steps.length;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                  className="relative"
                >
                  {/* Number Circle with scroll-activated state */}
                  <motion.div
                    className="absolute -left-[60px] top-3 w-11 h-11 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: ACCENT_BLUE,
                      boxShadow: '0 3px 12px rgba(14,77,100,0.15)'
                    }}
                  >
                    <span 
                      className="font-serif text-[1.1rem] font-light"
                      style={{ color: ACCENT_BLUE }}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Card - Compact */}
                  <div 
                    className="bg-white border border-[#e5e5e5] rounded-lg px-4 py-3"
                    style={{
                      boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
                    }}
                  >
                    <h3 className="font-serif text-[15px] font-normal mb-1.5" style={{ color: ACCENT_BLUE }}>
                      {step.title}
                    </h3>
                    <p className="text-[12px] font-light text-[#4a4a4a] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <a
            href="#contact"
            className="inline-block text-white font-serif text-[13px] md:text-[14px] font-light tracking-[0.1em] uppercase px-8 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              backgroundColor: '#000000',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ACCENT_BLUE;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
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
