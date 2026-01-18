import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Train, Building2, ArrowRight } from 'lucide-react';

const ACCENT_BLUE = '#0E4D64';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const estimates = [
    {
      icon: Plane,
      destination: "Liaison Aéroport Marseille",
      detail: "Marseille Provence ↔ Aix-en-Provence",
      price: "À partir de 50 €"
    },
    {
      icon: Train,
      destination: "Gare TGV Aix-en-Provence",
      detail: "Depuis Aix Centre",
      price: "À partir de 35 €"
    },
    {
      icon: Building2,
      destination: "Marseille ↔ Aix Centre",
      detail: "Centre-ville ↔ Centre-ville",
      price: "À partir de 50 €"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide mb-6">
            Transparence & <span style={{ color: ACCENT_BLUE }}>Tarifs</span>
          </h2>
          <p className="font-sans text-muted-foreground font-light max-w-2xl mx-auto text-[15px] md:text-[16px] leading-relaxed">
            Quelques exemples de tarifs pour vos trajets courants. Le prix final est ajusté selon votre demande exacte.
          </p>
        </motion.div>

        {/* Elegant Price List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          {estimates.map((estimate, index) => (
            <motion.div
              key={estimate.destination}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 ${
                index !== estimates.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              {/* Left side - Icon + Text */}
              <div className="flex items-start md:items-center gap-4 mb-3 md:mb-0">
                <estimate.icon 
                  className="w-6 h-6 mt-0.5 md:mt-0 flex-shrink-0" 
                  style={{ color: ACCENT_BLUE }} 
                  strokeWidth={1.5} 
                />
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-[#1a1a1a] mb-1">
                    {estimate.destination}
                  </h3>
                  <p className="font-sans text-sm text-[#888888] font-light">
                    {estimate.detail}
                  </p>
                </div>
              </div>
              
              {/* Right side - Price */}
              <div className="ml-10 md:ml-0">
                <span 
                  className="font-serif text-xl md:text-2xl font-light"
                  style={{ color: ACCENT_BLUE }}
                >
                  {estimate.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-8 border-t border-gray-100"
        >
          <p className="font-serif text-lg md:text-xl mb-8 text-[#1a1a1a]">
            Besoin d'un trajet spécifique ou longue distance ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a1a1a] text-white font-sans font-light tracking-wide text-[15px] transition-all duration-300 hover:bg-[#333333] hover:gap-4"
          >
            <span>Obtenir un devis précis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="font-sans text-xs text-[#999999] mt-8 font-light tracking-wide">
            Tarifs indicatifs. Moyens de paiement acceptés : CB, Espèces, Virement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
