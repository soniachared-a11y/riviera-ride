import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, MapPin, HeartHandshake, Baby } from 'lucide-react';
import clientHappy1 from '@/assets/client-happy-1.jpg';
import clientHappy2 from '@/assets/client-happy-2.jpg';
import clientHappy3 from '@/assets/client-happy-3.jpg';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Standards élevés à chaque trajet.',
  },
  {
    icon: Users,
    title: 'Discrétion',
    description: 'Vie privée respectée.',
  },
  {
    icon: MapPin,
    title: 'Expertise Locale',
    description: 'Connaissance du Sud.',
  },
  {
    icon: HeartHandshake,
    title: 'Sur-Mesure',
    description: 'Adapté à vos besoins.',
  },
  {
    icon: Baby,
    title: 'Équipement Bébé',
    description: 'Siège enfant disponible.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-10 md:py-14 texture-overlay bg-secondary" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
            Pourquoi Malacrida
          </span>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Votre Partenaire de <span style={{ color: '#0E4D64' }}>Confiance</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-sm max-w-xl mx-auto">
            Plus de 5 ans d'expérience au service de clients exigeants. 
            Disponibilité 24h/24, véhicule 100% électrique et équipements adaptés 
            pour voyager en famille ou en toute discrétion.
          </p>
          
          {/* Happy Clients Images - centered */}
          <div className="flex items-center justify-center gap-3 mt-5">
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
            <div className="text-left">
              <div className="font-serif text-base">2000+</div>
              <div className="text-xs font-light text-muted-foreground">Clients Satisfaits</div>
            </div>
          </div>
        </motion.div>

        {/* Values Marquee - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden max-w-4xl mx-auto"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee-slow gap-3">
            {[...values, ...values, ...values].map((value, index) => (
              <div
                key={`${value.title}-${index}`}
                className="flex-shrink-0 card-elegant rounded-xl p-3 w-36 bg-white/80 backdrop-blur-sm"
              >
                <value.icon className="w-5 h-5 mb-1.5" style={{ color: '#0E4D64' }} strokeWidth={1.5} />
                <h3 className="font-serif text-xs mb-0.5">{value.title}</h3>
                <p className="text-[9px] font-light text-muted-foreground leading-tight">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
