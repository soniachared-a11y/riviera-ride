import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Calendar, Clock, Users } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Merci ! Nous vous contacterons très bientôt.');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: Phone, label: 'Téléphone', value: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
    { icon: Mail, label: 'Email', value: 'contact@macrida.fr', href: 'mailto:contact@macrida.fr' },
    { icon: MapPin, label: 'Zone de Service', value: 'Sud de la France', href: null },
  ];

  return (
    <section id="contact" className="section-padding texture-overlay bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="divider-elegant mb-6" />
            <span className="text-sm font-light tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Réservez Votre{' '}
              <span className="text-gold">Trajet Premium</span>
            </h2>
            <p className="text-muted-foreground mb-8 font-light leading-relaxed">
              Prêt à vivre une expérience de transport de luxe ? Contactez-nous pour un devis 
              ou réservez directement. Notre équipe est disponible 24h/24.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl card-elegant flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-light text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="font-medium hover:text-gold transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="card-elegant rounded-2xl p-6">
              <h3 className="font-serif text-lg mb-2">Disponible 24h/24</h3>
              <p className="text-sm font-light text-muted-foreground">
                Que ce soit pour un transfert matinal ou une prise en charge tardive, 
                nous sommes là pour vous à toute heure.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card-elegant rounded-2xl p-8">
              <h3 className="text-xl font-serif mb-6">Demander un Devis</h3>
              
              <div className="grid gap-4 mb-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-light"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-light"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-light mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-light"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-light mb-2">
                      Passagers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        id="passengers"
                        name="passengers"
                        className="w-full px-10 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all appearance-none font-light"
                      >
                        <option value="1">1 passager</option>
                        <option value="2">2 passagers</option>
                        <option value="3">3 passagers</option>
                        <option value="4">4 passagers</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-light mb-2">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-10 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-light"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-light mb-2">
                      Heure
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="time"
                        id="time"
                        name="time"
                        className="w-full px-10 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-light"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light mb-2">
                    Détails du Trajet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none font-light"
                    placeholder="Lieu de prise en charge, destination, demandes particulières..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Demander un Devis
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
