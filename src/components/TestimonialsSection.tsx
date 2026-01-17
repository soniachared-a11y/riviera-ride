import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import clientHappy1 from '@/assets/client-happy-1.jpg';
import clientHappy2 from '@/assets/client-happy-2.jpg';
import clientHappy3 from '@/assets/client-happy-3.jpg';
import chauffeurSmile from '@/assets/chauffeur-smile.jpg';

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'Directrice Commerciale',
    content: 'Macrida est devenu mon choix pour tous mes transferts aéroport et déplacements professionnels. La ponctualité est irréprochable et la Tesla est toujours impeccable. Un service vraiment premium.',
    rating: 5,
    image: clientHappy1,
  },
  {
    name: 'Pierre Moreau',
    role: 'Homme d\'Affaires',
    content: 'J\'utilise Macrida pour tous mes clients VIP visitant Nice. Le service est constant, fiable et dépasse toujours les attentes. Hautement recommandé pour le transport corporate.',
    rating: 5,
    image: clientHappy2,
  },
  {
    name: 'Marie & Julie',
    role: 'Touristes',
    content: 'Notre journée en Provence était magique grâce à Macrida. Le chauffeur connaissait tous les meilleurs endroits et parlait parfaitement anglais. La Tesla était incroyablement confortable.',
    rating: 5,
    image: clientHappy3,
  },
  {
    name: 'Thomas Bernard',
    role: 'Client Régulier',
    content: 'Un service exceptionnel à chaque voyage. Le chauffeur est toujours ponctuel, professionnel et discret. C\'est exactement ce que j\'attends d\'un service VTC haut de gamme.',
    rating: 5,
    image: chauffeurSmile,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
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
            Témoignages
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Ce que Disent nos{' '}
            <span className="text-gold">Clients</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="card-elegant rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/10" />
            
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <motion.div
                key={`avatar-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="shrink-0"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover avatar-ring"
                />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg md:text-xl text-foreground mb-6 font-light leading-relaxed italic"
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-serif text-lg text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm font-light text-muted-foreground">{testimonials[currentIndex].role}</div>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-gold' : 'bg-border'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
