import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import contactBgImage from '@/assets/contact-bg-tesla.png';

const ACCENT_BLUE = '#0E4D64';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success('Demande envoyée ! Nous vous recontactons sous 30 minutes.');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-[90vh] flex items-center overflow-hidden py-20 md:py-28"
      ref={ref}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBgImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6"
            >
              Votre Tesla est Prête.
              <br />
              <span className="text-white/90">Réservez l'Excellence Maintenant.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 font-light text-base md:text-lg leading-relaxed max-w-xl"
            >
              Disponibilité 24h/24 et 7j/7 pour tous vos déplacements vers gares, 
              aéroports et trajets privés en Provence. Confirmation immédiate.
            </motion.p>
          </motion.div>

          {/* Right Column - Floating Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10"
              style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}
            >
              <h3 
                className="font-serif text-2xl md:text-3xl mb-8 text-center"
                style={{ color: ACCENT_BLUE }}
              >
                Planifier Votre Course
              </h3>

              <div className="space-y-5">
                {/* Departure Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Adresse de départ
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="departure"
                      required
                      maxLength={200}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0E4D64] focus:ring-2 focus:ring-[#0E4D64]/20 outline-none transition-all text-gray-800"
                      placeholder="Ex: Aéroport Marseille Provence"
                    />
                  </div>
                </div>

                {/* Arrival Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Adresse d'arrivée
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="arrival"
                      required
                      maxLength={200}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0E4D64] focus:ring-2 focus:ring-[#0E4D64]/20 outline-none transition-all text-gray-800"
                      placeholder="Ex: Hôtel Le Pigonnet, Aix-en-Provence"
                    />
                  </div>
                </div>

                {/* Date & Time - Split Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0E4D64] focus:ring-2 focus:ring-[#0E4D64]/20 outline-none transition-all text-gray-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Heure
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="time"
                        name="time"
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#0E4D64] focus:ring-2 focus:ring-[#0E4D64]/20 outline-none transition-all text-gray-800"
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-white font-medium text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-3 mt-4 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: ACCENT_BLUE,
                    boxShadow: '0 4px 16px rgba(14,77,100,0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0a3d50';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = ACCENT_BLUE;
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Traitement...</span>
                    </>
                  ) : (
                    <>
                      <span>Estimation & Réservation Instantanée</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
