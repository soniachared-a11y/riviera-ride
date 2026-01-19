import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, MapPin, HeartHandshake } from 'lucide-react';
import clientHappy1 from '@/assets/client-happy-1.jpg';
import clientHappy2 from '@/assets/client-happy-2.jpg';
import clientHappy3 from '@/assets/client-happy-3.jpg';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous maintenons les plus hauts standards à chaque trajet.',
  },
  {
    icon: Users,
    title: 'Discrétion',
    description: 'Votre vie privée est notre priorité absolue.',
  },
  {
    icon: MapPin,
    title: 'Expertise Locale',
    description: 'Une connaissance approfondie du Sud de la France.',
  },
  {
    icon: HeartHandshake,
    title: 'Service Personnalisé',
    description: 'Chaque voyage est adapté à vos préférences.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 md:py-24 texture-overlay bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="divider-elegant mb-6" />
            <span className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Pourquoi Malacrida
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Votre Partenaire de <span style={{ color: '#0E4D64' }}>Confiance</span> pour un{' '}
              <span className="text-gold">Voyage Premium</span>
            </h2>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              Taxi Malacrida a été fondée sur une conviction simple : le transport privé doit être 
              une expérience, pas seulement un service. Notre engagement envers la sécurité, 
              le confort et le professionnalisme fait de nous le choix privilégié des voyageurs 
              exigeants sur la Côte d'Azur et en Provence.
            </p>

            {/* Happy Clients Images */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-4">
                <img
                  src={clientHappy1}
                  alt="Cliente satisfaite"
                  className="w-14 h-14 rounded-full object-cover avatar-ring"
                />
                <img
                  src={clientHappy2}
                  alt="Client satisfait"
                  className="w-14 h-14 rounded-full object-cover avatar-ring"
                />
                <img
                  src={clientHappy3}
                  alt="Clients satisfaits"
                  className="w-14 h-14 rounded-full object-cover avatar-ring"
                />
              </div>
              <div>
                <div className="font-serif text-lg">2000+</div>
                <div className="text-sm font-light text-muted-foreground">Clients Satisfaits</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="card-elegant rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-serif text-gold mb-1">5+</div>
                <div className="text-xs font-light text-muted-foreground">Années d'Expérience</div>
              </div>
              <div className="card-elegant rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-serif text-gold mb-1">24/7</div>
                <div className="text-xs font-light text-muted-foreground">Disponibilité</div>
              </div>
              <div className="card-elegant rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-serif text-gold mb-1">5.0</div>
                <div className="text-xs font-light text-muted-foreground">Note Moyenne</div>
              </div>
              <div className="card-elegant rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-serif text-gold mb-1">100%</div>
                <div className="text-xs font-light text-muted-foreground">Véhicule Électrique</div>
              </div>
            </div>
          </motion.div>

          {/* Values Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container */}
            <div className="flex animate-marquee gap-6">
              {[...values, ...values, ...values].map((value, index) => (
                <div
                  key={`${value.title}-${index}`}
                  className="flex-shrink-0 card-elegant rounded-2xl p-6 w-56"
                >
                  <value.icon className="w-8 h-8 mb-3" style={{ color: '#0E4D64' }} strokeWidth={1.5} />
                  <h3 className="font-serif text-base mb-1">{value.title}</h3>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
