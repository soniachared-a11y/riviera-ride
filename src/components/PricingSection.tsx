import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Train, Building2, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const estimates = [
    {
      icon: Plane,
      title: "Liaison Aéroport",
      price: "À partir de 50 €",
      note: "Marseille Provence ↔ Aix-en-Provence"
    },
    {
      icon: Train,
      title: "Gare TGV Aix",
      price: "À partir de 35 €",
      note: "Depuis Aix Centre"
    },
    {
      icon: Building2,
      title: "Aix ↔ Marseille",
      price: "À partir de 50 €",
      note: "Centre-ville ↔ Centre-ville"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Transparence & <span style={{ color: '#0E4D64' }}>Tarifs</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Quelques exemples de tarifs pour vos trajets courants. Le prix final est ajusté selon votre demande exacte.
          </p>
        </motion.div>

        {/* Estimate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {estimates.map((estimate, index) => (
            <motion.div
              key={estimate.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                <estimate.icon 
                  className="w-10 h-10" 
                  style={{ color: '#0E4D64' }} 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="font-serif text-xl mb-3">{estimate.title}</h3>
              <p className="text-2xl font-semibold mb-3" style={{ color: '#0E4D64' }}>
                {estimate.price}
              </p>
              <p className="text-sm text-muted-foreground font-light">
                {estimate.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-serif text-lg md:text-xl mb-6 text-foreground">
            Besoin d'un trajet spécifique ou longue distance ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-lg font-light tracking-wide text-lg transition-all duration-300 hover:bg-charcoal/90 hover:gap-4"
          >
            <span>Obtenir mon Devis Express</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground mt-6 font-light">
            Tarifs indicatifs. Moyens de paiement acceptés : CB, Espèces, Virement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
