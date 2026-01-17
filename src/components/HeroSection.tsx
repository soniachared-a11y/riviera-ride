import { motion } from 'framer-motion';
import { ChevronDown, Shield, Clock, Star } from 'lucide-react';
import heroImage from '@/assets/hero-tesla-riviera.jpg';
import chauffeurImage from '@/assets/chauffeur-smile.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Shield, label: 'Sécurité', value: '100%' },
    { icon: Clock, label: 'Ponctualité', value: '99.8%' },
    { icon: Star, label: 'Satisfaction', value: '5.0' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tesla Model Y premium sur la Côte d'Azur"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="divider-elegant mb-6" />
              <span className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground">
                Service VTC Premium
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] mb-6"
            >
              L'Excellence du{' '}
              <span className="text-gold">Transport Privé</span>{' '}
              sur la Côte d'Azur
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg font-light text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Macrida vous offre une expérience de transport haut de gamme dans le Sud de la France. 
              Chauffeurs professionnels, discrétion absolue, disponible 24h/24.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a href="#contact" className="btn-gold text-center">
                Réserver Maintenant
              </a>
              <a href="#services" className="btn-secondary text-center">
                Découvrir nos Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 max-w-sm"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <div className="text-2xl font-serif text-foreground">{stat.value}</div>
                  <div className="text-xs font-light tracking-wide text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Chauffeur Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={chauffeurImage}
                alt="Chauffeur professionnel souriant"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-light tracking-[0.2em] uppercase">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
