import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'Business Executive',
    content: 'Macrida has become my go-to for all airport transfers and business travel. The punctuality is impeccable, and the Tesla is always spotless. Truly premium service.',
    rating: 5,
  },
  {
    name: 'James Morrison',
    role: 'Wedding Guest',
    content: 'We used Macrida for our wedding transportation and couldn\'t be happier. The chauffeur was incredibly professional and accommodating. Made our special day even more memorable.',
    rating: 5,
  },
  {
    name: 'Marie Dubois',
    role: 'Tourist',
    content: 'Our day trip through Provence was magical thanks to Macrida. The driver knew all the best spots and was fluent in English. The Tesla was incredibly comfortable for the long drive.',
    rating: 5,
  },
  {
    name: 'Alessandro Rossi',
    role: 'Corporate Client',
    content: 'We book Macrida for all our VIP clients visiting Nice. The service is consistent, reliable, and always exceeds expectations. Highly recommended for corporate transportation.',
    rating: 5,
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
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
            
            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-xl text-foreground mb-8 leading-relaxed"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-bold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                </motion.div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
