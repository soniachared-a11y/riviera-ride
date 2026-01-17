import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, MapPin, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We uphold the highest standards in every ride, from punctuality to presentation.',
  },
  {
    icon: Users,
    title: 'Discretion',
    description: 'Your privacy is paramount. Our chauffeurs are trained in confidentiality.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep knowledge of the South of France ensures optimal routes and hidden gems.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    description: 'Every journey is tailored to your preferences and requirements.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding noise-overlay bg-card" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
              Why Choose Macrida
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Partner for{' '}
              <span className="gradient-text">Premium Travel</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Macrida was founded on a simple belief: private transportation should be 
              an experience, not just a service. Our commitment to safety, comfort, and 
              professionalism has made us the preferred choice for discerning travelers 
              across the French Riviera and Provence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every chauffeur in our team is carefully selected for their expertise, 
              discretion, and genuine passion for hospitality. Fluent in multiple languages, 
              they ensure seamless communication and personalized attention throughout your journey.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="glass rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">2000+</div>
                <div className="text-xs text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass rounded-xl px-6 py-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">Availability</div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
