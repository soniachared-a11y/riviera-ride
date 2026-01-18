import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Calendar, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

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

  const benefits = [
    'Réponse sous 30 minutes',
    'Devis gratuit et sans engagement',
    'Annulation gratuite 24h avant',
  ];

  const contactInfo = [
    { icon: Phone, label: 'Téléphone', value: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
    { icon: Mail, label: 'Email', value: 'contact@macrida.fr', href: 'mailto:contact@macrida.fr' },
    { icon: MapPin, label: 'Zone', value: 'Côte d\'Azur & Provence' },
  ];

  return (
    <section id="contact" className="section-light relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <span className="accent-line mb-6 block" />
            <span className="text-sm font-light tracking-[0.2em] uppercase text-charcoal-light block mb-4">
              Contact
            </span>
            <h2 className="mb-6">
              Réservez Votre{' '}
              <span className="text-gold">Trajet</span>
            </h2>
            <p className="text-charcoal-light font-light leading-relaxed mb-8">
              Prêt pour une expérience de transport premium ? Notre équipe est disponible 
              24h/24 pour organiser votre prochain déplacement.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-success" />
                  </div>
                  <span className="text-charcoal font-light">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="icon-box !w-12 !h-12">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-charcoal-light font-light uppercase tracking-wider">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a href={info.href} className="font-medium text-charcoal hover:text-gold transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-medium text-charcoal">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-float !p-8 md:!p-10">
              <h3 className="font-serif text-2xl mb-8">Demander un Devis</h3>

              <div className="grid gap-5">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-light text-charcoal-light mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-dark/50 border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-charcoal-light mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={255}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-dark/50 border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Passengers */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-light text-charcoal-light mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={20}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-dark/50 border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-charcoal-light mb-2">
                      Passagers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
                      <select
                        name="passengers"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-cream-dark/50 border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light appearance-none"
                      >
                        <option value="1">1 passager</option>
                        <option value="2">2 passagers</option>
                        <option value="3">3 passagers</option>
                        <option value="4">4 passagers</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-light text-charcoal-light mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
                      <input
                        type="date"
                        name="date"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-cream-dark/50 border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-charcoal-light mb-2">
                      Heure
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
                      <input
                        type="time"
                        name="time"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-cream-dark/50 border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-light text-charcoal-light mb-2">
                    Détails du trajet *
                  </label>
                  <textarea
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-cream-dark/50 border border-stone focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none font-light"
                    placeholder="Adresse de départ, destination, demandes particulières..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer la Demande</span>
                      <ArrowRight className="w-4 h-4" />
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
