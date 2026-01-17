import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Wifi, Shield, Leaf, ThermometerSnowflake, Sparkles } from 'lucide-react';
import teslaExterior from '@/assets/hero-tesla-riviera.jpg';
import teslaInterior from '@/assets/tesla-interior.jpg';

const features = [
  { icon: Zap, label: '100% Électrique', description: 'Zéro émission' },
  { icon: Shield, label: 'Sécurité Avancée', description: 'Autopilot inclus' },
  { icon: Wifi, label: 'Connectivité', description: 'Wi-Fi & USB' },
  { icon: ThermometerSnowflake, label: 'Climatisation', description: 'Confort optimal' },
  { icon: Sparkles, label: 'Intérieur Premium', description: 'Cuir & toit panoramique' },
  { icon: Leaf, label: 'Éco-Responsable', description: 'Transport durable' },
];

const FleetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="fleet" className="section-padding" ref={ref}>
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
            Notre Flotte
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Voyagez en{' '}
            <span className="text-gold">Tesla Model Y 2025</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
            L'alliance parfaite entre technologie de pointe, luxe durable 
            et confort absolu dans notre flotte électrique premium.
          </p>
        </motion.div>

        {/* Fleet Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={teslaExterior}
                alt="Tesla Model Y 2025 sur la Côte d'Azur"
                className="w-full h-80 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent">
                <h3 className="text-xl font-serif text-white">Tesla Model Y 2025</h3>
                <p className="text-white/70 text-sm font-light">SUV Électrique Premium</p>
              </div>
            </div>
          </motion.div>

          {/* Interior + Features */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl group shadow-lg"
            >
              <img
                src={teslaInterior}
                alt="Intérieur premium Tesla Model Y 2025"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-sm font-light text-white">Intérieur Premium</span>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 flex-1"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card-elegant rounded-xl p-4 flex items-start gap-3"
                >
                  <feature.icon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-sm mb-0.5">{feature.label}</div>
                    <div className="text-xs font-light text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
