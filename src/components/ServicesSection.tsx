import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Briefcase, Compass, PartyPopper, Clock, Users, Shield, MapPin } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Transferts Aéroport',
    description: 'Prise en charge et dépose fluides aux aéroports de Nice, Marseille et toute la région. Suivi des vols inclus.',
  },
  {
    icon: Briefcase,
    title: 'Voyages d\'Affaires',
    description: 'Transport professionnel pour événements corporate, réunions et déplacements exécutifs dans toute la région.',
  },
  {
    icon: Compass,
    title: 'Excursions Privées',
    description: 'Découvrez la Côte d\'Azur et la Provence avec des circuits sur mesure et des escapades œnologiques.',
  },
  {
    icon: PartyPopper,
    title: 'Événements Spéciaux',
    description: 'Transport élégant pour mariages, galas et célébrations exclusives avec un service irréprochable.',
  },
];

const highlights = [
  { icon: Clock, text: 'Ponctualité Garantie' },
  { icon: Shield, text: 'Discret & Professionnel' },
  { icon: Users, text: 'Chauffeurs Multilingues' },
  { icon: MapPin, text: 'Disponible 24h/24' },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding texture-overlay bg-secondary" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="divider-elegant mx-auto mb-6" />
          <span className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Un Transport Premium{' '}
            <span className="text-gold">Sur Mesure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Des transferts aéroport aux itinéraires personnalisés, nous offrons des expériences 
            de transport d'exception dans le Sud de la France.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elegant rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
              <highlight.icon className="w-5 h-5 text-gold" />
              <span className="font-light tracking-wide">{highlight.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
