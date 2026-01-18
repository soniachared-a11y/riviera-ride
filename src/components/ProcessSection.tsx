import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, CalendarCheck, Car, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    number: '1',
    title: 'Demande de course',
    description: 'Réservez par téléphone au 07 84 62 86 40 ou via notre formulaire. Réponse très rapide garantie.'
  },
  {
    icon: CalendarCheck,
    number: '2',
    title: 'Confirmation & Tarif',
    description: 'Validation immédiate du créneau. Prix fixe annoncé à l\'avance : aucune surprise à l\'arrivée.'
  },
  {
    icon: Car,
    number: '3',
    title: 'Prise en charge',
    description: 'Votre chauffeur vous attend à l\'heure. Installez-vous et profitez du confort silencieux de la Tesla.'
  },
  {
    icon: CreditCard,
    number: '4',
    title: 'Paiement simple',
    description: 'Règlement facile à bord : espèces ou Carte Bancaire (terminal disponible).'
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 
            id="process-title"
            className="font-serif text-[32px] md:text-[42px] font-light text-black tracking-[0.03em] mb-4"
          >
            Votre Trajet en 4 Étapes Simples
          </h2>
          <div className="w-16 h-[2px] bg-black mx-auto" />
        </motion.div>

        {/* Timeline Road */}
        <div className="relative max-w-4xl mx-auto">
          {/* Road Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-gray-300 transform -translate-x-1/2">
            {/* Dashed center line */}
            <div className="absolute inset-0 w-[2px] left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-gray-400" />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-black origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ height: '100%' }}
            />
          </div>

          {/* Road Line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-gray-300">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-black origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ height: '100%' }}
            />
          </div>

          {/* Steps */}
          <div className="relative space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`relative md:flex md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } md:min-h-[160px]`}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start pl-14">
                    {/* Node on road */}
                    <div className="absolute left-4 w-5 h-5 bg-black rounded-full border-2 border-white shadow-lg transform -translate-x-1/2" />
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-[18px] font-medium text-black">
                          {step.number}. {step.title}
                        </h3>
                      </div>
                      <p className="font-serif text-[14px] text-black/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:flex md:w-1/2 ${isEven ? 'md:pr-12 md:justify-end' : 'md:pl-12 md:justify-start'}`}>
                    <div className={`bg-gray-50 p-8 rounded-lg shadow-sm max-w-md ${isEven ? 'text-right' : 'text-left'}`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-[22px] font-medium text-black">
                          {step.number}. {step.title}
                        </h3>
                      </div>
                      <p className="font-serif text-[15px] text-black/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node - Desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                      className="w-8 h-8 bg-black rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Empty space for opposite side - Desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 md:mt-20"
        >
          <a
            href="#contact"
            className="inline-block bg-black text-white font-serif text-[16px] md:text-[18px] font-light tracking-[0.05em] px-10 py-4 rounded-sm hover:bg-black/90 transition-colors duration-300"
          >
            Réserver mon chauffeur maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
