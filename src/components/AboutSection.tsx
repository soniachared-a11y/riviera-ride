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
    <section id="about" className="py-10 md:py-14 texture-overlay bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
              Pourquoi Malacrida
            </span>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              Votre Partenaire de <span style={{ color: '#0E4D64' }}>Confiance</span>
            </h2>
            <p className="text-muted-foreground mb-5 font-light leading-relaxed text-sm">
              Taxi Malacrida a été fondée sur une conviction simple : le transport privé doit être 
              une expérience. Notre engagement envers la sécurité et le professionnalisme fait de nous 
              le choix privilégié des voyageurs exigeants.
            </p>

            {/* Happy Clients Images */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex -space-x-3">
                <img
                  src={clientHappy1}
                  alt="Cliente satisfaite"
                  className="w-10 h-10 rounded-full object-cover avatar-ring"
                />
                <img
                  src={clientHappy2}
                  alt="Client satisfait"
                  className="w-10 h-10 rounded-full object-cover avatar-ring"
                />
                <img
                  src={clientHappy3}
                  alt="Clients satisfaits"
                  className="w-10 h-10 rounded-full object-cover avatar-ring"
                />
              </div>
              <div>
                <div className="font-serif text-base">2000+</div>
                <div className="text-xs font-light text-muted-foreground">Clients Satisfaits</div>
              </div>
            </div>

            {/* Stats Marquee */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee-slow gap-4">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-4 flex-shrink-0">
                    <div className="card-elegant rounded-lg px-4 py-3 text-center flex-shrink-0">
                      <div className="text-xl font-serif text-gold mb-0.5">5+</div>
                      <div className="text-[10px] font-light text-muted-foreground whitespace-nowrap">Années</div>
                    </div>
                    <div className="card-elegant rounded-lg px-4 py-3 text-center flex-shrink-0">
                      <div className="text-xl font-serif text-gold mb-0.5">24/7</div>
                      <div className="text-[10px] font-light text-muted-foreground whitespace-nowrap">Disponible</div>
                    </div>
                    <div className="card-elegant rounded-lg px-4 py-3 text-center flex-shrink-0">
                      <div className="text-xl font-serif text-gold mb-0.5">5.0</div>
                      <div className="text-[10px] font-light text-muted-foreground whitespace-nowrap">Note</div>
                    </div>
                    <div className="card-elegant rounded-lg px-4 py-3 text-center flex-shrink-0">
                      <div className="text-xl font-serif text-gold mb-0.5">100%</div>
                      <div className="text-[10px] font-light text-muted-foreground whitespace-nowrap">Électrique</div>
                    </div>
                    <div className="card-elegant rounded-lg px-4 py-3 text-center flex-shrink-0">
                      <div className="text-xl font-serif text-gold mb-0.5">Tesla</div>
                      <div className="text-[10px] font-light text-muted-foreground whitespace-nowrap">Model Y</div>
                    </div>
                    <div className="card-elegant rounded-lg px-4 py-3 text-center flex-shrink-0">
                      <div className="text-xl font-serif text-gold mb-0.5">VIP</div>
                      <div className="text-[10px] font-light text-muted-foreground whitespace-nowrap">Service</div>
                    </div>
                  </div>
                ))}
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
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee-slow gap-4">
              {[...values, ...values, ...values].map((value, index) => (
                <div
                  key={`${value.title}-${index}`}
                  className="flex-shrink-0 card-elegant rounded-xl p-5 w-48"
                >
                  <value.icon className="w-6 h-6 mb-2" style={{ color: '#0E4D64' }} strokeWidth={1.5} />
                  <h3 className="font-serif text-sm mb-1">{value.title}</h3>
                  <p className="text-[10px] font-light text-muted-foreground leading-relaxed">
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
