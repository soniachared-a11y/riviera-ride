import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import clientHappy1 from '@/assets/client-happy-1.jpg';
import clientHappy2 from '@/assets/client-happy-2.jpg';
import clientHappy3 from '@/assets/client-happy-3.jpg';
import chauffeurSmile from '@/assets/chauffeur-smile.jpg';

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'Directrice Marketing',
    content: 'Un service exceptionnel du début à la fin. Le chauffeur était d\'une ponctualité irréprochable et la Tesla d\'un confort remarquable. Je recommande sans hésitation.',
    rating: 5,
    image: clientHappy1,
  },
  {
    name: 'Pierre Moreau',
    role: 'CEO, Tech Startup',
    content: 'J\'utilise Macrida pour tous mes déplacements professionnels à Nice. Le service est constant, fiable et le niveau de discrétion est parfait pour mes clients VIP.',
    rating: 5,
    image: clientHappy2,
  },
  {
    name: 'Marie & Julie',
    role: 'Touristes, Canada',
    content: 'Notre journée découverte en Provence était magique. Le chauffeur connaissait tous les endroits secrets et parlait parfaitement anglais. Une expérience inoubliable !',
    rating: 5,
    image: clientHappy3,
  },
  {
    name: 'Thomas Bernard',
    role: 'Client Régulier',
    content: 'Cela fait deux ans que je fais appel à Macrida pour mes transferts aéroport. Le professionnalisme et la qualité du service sont toujours au rendez-vous.',
    rating: 5,
    image: chauffeurSmile,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 section-cream relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="deco-circle w-80 h-80 -top-40 -left-40" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="accent-line mb-6 block mx-auto" />
          <span className="text-sm font-light tracking-[0.2em] uppercase text-charcoal-light block mb-4">
            Témoignages
          </span>
          <h2>
            Ils Nous Font{' '}
            <span className="text-gold">Confiance</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-float !p-10 md:!p-14 relative">
            <Quote className="absolute top-8 right-8 w-20 h-20 text-gold/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Avatar */}
                <div className="shrink-0">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-28 h-28 md:w-36 md:h-36 avatar-premium"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed mb-6 italic">
                    "{testimonials[current].content}"
                  </blockquote>

                  <div>
                    <div className="font-serif text-lg text-charcoal">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-charcoal-light font-light">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-stone/30">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-gold' : 'bg-stone hover:bg-charcoal-light'
                    }`}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-stone flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-stone flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Suivant"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
