import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Clock, Star, Play } from 'lucide-react';
import heroImage from '@/assets/hero-tesla-riviera.jpg';
import chauffeurImage from '@/assets/chauffeur-smile.jpg';
import clientHappy1 from '@/assets/client-happy-1.jpg';
import clientHappy2 from '@/assets/client-happy-2.jpg';
import clientHappy3 from '@/assets/client-happy-3.jpg';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { icon: Shield, value: '100%', label: 'Sécurité' },
    { icon: Clock, value: '99.8%', label: 'Ponctualité' },
    { icon: Star, value: '5.0', label: 'Note Clients' },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tesla Model Y sur la Côte d'Azur"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/30" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="deco-circle w-96 h-96 -top-48 -right-48" />
      <div className="deco-circle w-64 h-64 bottom-32 left-16" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="badge-premium mb-8">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
                  Service VTC Premium
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6 text-balance"
              >
                L'Excellence du{' '}
                <span className="text-gold">Transport Privé</span>{' '}
                sur la Côte d'Azur
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-charcoal-light mb-10 leading-relaxed"
              >
                Découvrez une expérience de transport haut de gamme dans le Sud de la France. 
                Chauffeurs professionnels, flotte Tesla premium, disponible 24h/24.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <a href="#contact" className="btn-gold">
                  <span>Réserver Maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#fleet" className="btn-outline">
                  <Play className="w-4 h-4" />
                  <span>Découvrir</span>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {[clientHappy1, clientHappy2, clientHappy3].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Client satisfait"
                      className="w-11 h-11 avatar-premium"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-charcoal-light">
                    <span className="font-medium text-charcoal">2,000+</span> clients satisfaits
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Stats & Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              {/* Chauffeur Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={chauffeurImage}
                  alt="Chauffeur professionnel"
                  className="relative w-80 h-[420px] object-cover rounded-3xl shadow-2xl mx-auto"
                />
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -left-12 bottom-12 card-float !p-6"
                >
                  <div className="flex gap-6">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                        <div className="text-xl font-serif text-charcoal">{stat.value}</div>
                        <div className="text-xs text-charcoal-light">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-light tracking-[0.2em] uppercase text-charcoal-light">
            Découvrir
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
