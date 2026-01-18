import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Briefcase, Compass, PartyPopper, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Transferts Aéroport',
    description: 'Prise en charge ponctuelle aux aéroports de Nice, Marseille, Monaco. Suivi des vols en temps réel.',
    features: ['Suivi des vols', 'Accueil personnalisé', 'Bagages inclus'],
  },
  {
    icon: Briefcase,
    title: 'Voyages d\'Affaires',
    description: 'Transport exécutif pour réunions, conférences et événements corporate dans toute la région.',
    features: ['Wi-Fi embarqué', 'Discrétion totale', 'Facturation entreprise'],
  },
  {
    icon: Compass,
    title: 'Excursions Privées',
    description: 'Découvrez la Côte d\'Azur et la Provence avec des circuits sur mesure et des guides locaux.',
    features: ['Itinéraires personnalisés', 'Guides locaux', 'Demi-journée ou journée'],
  },
  {
    icon: PartyPopper,
    title: 'Événements Spéciaux',
    description: 'Mariages, galas, anniversaires. Un service d\'exception pour vos moments inoubliables.',
    features: ['Décoration possible', 'Champagne offert', 'Coordination événement'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="section-cream relative overflow-hidden" ref={ref}>
      {/* Decorative grid */}
      <div className="absolute inset-0 deco-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="accent-line mb-6 block mx-auto" />
          <span className="text-sm font-light tracking-[0.2em] uppercase text-charcoal-light block mb-4">
            Nos Services
          </span>
          <h2 className="mb-6">
            Des Solutions de Transport{' '}
            <span className="text-gold">Sur Mesure</span>
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto font-light">
            Chaque trajet est pensé pour répondre à vos exigences les plus élevées. 
            Découvrez notre gamme complète de services premium.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-premium p-8 lg:p-10 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="icon-box group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <h3 className="mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-charcoal-light font-light mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-xs font-light tracking-wide px-3 py-1.5 rounded-full bg-stone/50 text-charcoal-light"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
