import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import pricingSplitImage from '@/assets/pricing-split.png';

const PricingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      id="tarifs"
      className="w-full min-h-[80vh] grid grid-cols-1 md:grid-cols-2"
    >
      {/* Mobile: Image on top */}
      <div className="block md:hidden w-full aspect-square">
        <img
          src={pricingSplitImage}
          alt="Tesla Model Y - Tarification claire et fixe"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Column - Left on Desktop, Bottom on Mobile */}
      <motion.div 
        className="flex flex-col justify-center bg-white p-8 md:p-12 lg:p-16"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-lg">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tarification{' '}
            <span className="text-[#0E4D64]">Claire & Fixe</span>
          </motion.h2>

          <motion.p 
            className="font-serif text-lg md:text-xl text-black/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            L'excellence sans mauvaise surprise.
          </motion.p>

          <motion.p 
            className="text-base md:text-lg text-black/60 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contrairement aux taxis traditionnels, nos tarifs sont définis à l'avance et ne changent jamais. 
            Pas de supplément bagages, pas de frais d'approche, et aucun compteur qui tourne dans les embouteillages. 
            Bénéficiez d'un service VTC haut de gamme pour une tranquillité d'esprit totale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              className="bg-[#0E4D64] hover:bg-[#0E4D64]/90 text-white px-8 py-6 text-lg font-medium rounded-lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Estimer mon Trajet
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Column - Right on Desktop (hidden on mobile, shown above) */}
      <motion.div 
        className="hidden md:block relative"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={pricingSplitImage}
          alt="Tesla Model Y - Tarification claire et fixe"
          className="w-full h-full object-cover md:rounded-l-2xl"
        />
      </motion.div>
    </section>
  );
};

export default PricingSection;
