import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Briefcase, Compass, PartyPopper, MapPin, Clock, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless pick-up and drop-off at Nice, Marseille, and all regional airports. Flight tracking included.',
  },
  {
    icon: Briefcase,
    title: 'Business Travel',
    description: 'Professional transportation for corporate events, meetings, and executive travel throughout the region.',
  },
  {
    icon: Compass,
    title: 'Private Excursions',
    description: 'Discover the French Riviera and Provence with curated sightseeing tours and wine country adventures.',
  },
  {
    icon: PartyPopper,
    title: 'Special Events',
    description: 'Elegant transportation for weddings, galas, and exclusive celebrations with white-glove service.',
  },
];

const highlights = [
  { icon: Clock, text: 'Punctuality Guaranteed' },
  { icon: Shield, text: 'Discreet & Professional' },
  { icon: Users, text: 'Multilingual Chauffeurs' },
  { icon: MapPin, text: '24/7 Availability' },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding noise-overlay bg-card" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Premium Transportation{' '}
            <span className="gradient-text">Tailored to You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From airport transfers to bespoke itineraries, we deliver exceptional 
            private transportation experiences across the South of France.
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
              className="group relative glass rounded-2xl p-8 card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
              <highlight.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{highlight.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
