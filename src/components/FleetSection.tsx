import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Wifi, Shield, Leaf, Sparkles, Battery, Check } from 'lucide-react';
import teslaExterior from '@/assets/hero-tesla-riviera.jpg';
import teslaInterior from '@/assets/tesla-interior.jpg';

const features = [
  { icon: Zap, label: '100% Électrique' },
  { icon: Shield, label: 'Sécurité Maximale' },
  { icon: Wifi, label: 'Wi-Fi Gratuit' },
  { icon: Battery, label: 'Autonomie 500km' },
  { icon: Sparkles, label: 'Intérieur Premium' },
  { icon: Leaf, label: 'Éco-Responsable' },
];

const specs = [
  { label: 'Passagers', value: '4 personnes' },
  { label: 'Bagages', value: '3 grandes valises' },
  { label: 'Écran', value: '15" tactile' },
  { label: 'Toit', value: 'Panoramique' },
];

const FleetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="fleet" className="section-light relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="accent-line mb-6 block mx-auto" />
          <span className="text-sm font-light tracking-[0.2em] uppercase text-charcoal-light block mb-4">
            Notre Flotte
          </span>
          <h2 className="mb-6">
            Tesla Model Y{' '}
            <span className="text-gold">2025</span>
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto font-light">
            L'alliance parfaite entre technologie de pointe, confort absolu 
            et responsabilité environnementale.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={teslaExterior}
                alt="Tesla Model Y 2025"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="img-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="badge-premium mb-4">
                  Flotte Premium
                </span>
                <h3 className="text-white text-3xl mb-2">Tesla Model Y</h3>
                <p className="text-white/70 font-light">SUV 100% Électrique • 2025</p>
              </div>
            </div>

            {/* Features Grid Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -right-4 lg:-right-8 top-8 grid grid-cols-2 gap-3"
            >
              {features.slice(0, 4).map((feature, i) => (
                <div
                  key={i}
                  className="card-float !p-4 flex items-center gap-3"
                >
                  <feature.icon className="w-5 h-5 text-gold" />
                  <span className="text-sm font-light text-charcoal whitespace-nowrap">{feature.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Interior Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teslaInterior}
                alt="Intérieur Tesla Model Y"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Specs */}
            <div className="card-float !p-8">
              <h4 className="font-serif text-xl mb-6">Caractéristiques</h4>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-stone/50 last:border-0">
                    <span className="text-charcoal-light font-light">{spec.label}</span>
                    <span className="font-medium text-charcoal">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included */}
            <div className="space-y-3">
              <h4 className="font-serif text-lg mb-4">Toujours inclus</h4>
              {['Eau minérale fraîche', 'Chargeurs USB-C', 'Climatisation premium'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-charcoal-light font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
