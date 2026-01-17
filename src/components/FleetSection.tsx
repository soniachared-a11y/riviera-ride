import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Wifi, Shield, Leaf, ThermometerSnowflake, Sparkles } from 'lucide-react';
import teslaExterior from '@/assets/hero-tesla-riviera.jpg';
import teslaInterior from '@/assets/tesla-interior.jpg';

const features = [
  { icon: Zap, label: 'All-Electric', description: 'Zero emissions luxury' },
  { icon: Shield, label: 'Advanced Safety', description: 'Autopilot & collision avoidance' },
  { icon: Wifi, label: 'Connectivity', description: 'Wi-Fi & USB charging' },
  { icon: ThermometerSnowflake, label: 'Climate Control', description: 'Premium HVAC system' },
  { icon: Sparkles, label: 'Premium Interior', description: 'Leather seats & panoramic roof' },
  { icon: Leaf, label: 'Eco-Friendly', description: 'Sustainable transportation' },
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
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Travel in a{' '}
            <span className="gradient-text">Tesla Model Y 2025</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the perfect blend of cutting-edge technology, sustainable luxury, 
            and uncompromising comfort in our premium electric fleet.
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
            <div className="absolute -inset-1 bg-gradient-premium rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={teslaExterior}
                alt="Tesla Model Y 2025 exterior on the French Riviera"
                className="w-full h-80 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <h3 className="text-xl font-bold">Tesla Model Y 2025</h3>
                <p className="text-muted-foreground text-sm">Premium All-Electric SUV</p>
              </div>
            </div>
          </motion.div>

          {/* Interior + Features */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img
                src={teslaInterior}
                alt="Tesla Model Y 2025 premium interior"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-sm font-medium text-foreground">Premium Interior</span>
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
                  className="glass rounded-xl p-4 flex items-start gap-3 card-hover"
                >
                  <feature.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm mb-0.5">{feature.label}</div>
                    <div className="text-xs text-muted-foreground">{feature.description}</div>
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
