import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Transferts Aéroports",
    description: "Marseille-Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/voiture%20en%20route%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS92b2l0dXJlIGVuIHJvdXRlIC5wbmciLCJpYXQiOjE3Njg3NTc3MTUsImV4cCI6MTgwMDI5MzcxNX0.iTqRqep4pCNN5bL_VLXw0LvfsNDrx8fT4LaONKYuGdw"
  },
  {
    id: 2,
    title: "Service à la journée",
    description: "Bénéficiez d'un chauffeur privé pour la journée entière, idéal pour vos rendez-vous professionnels ou vos activités personnelles.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Vieux-Port-de-Marseille%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9WaWV1eC1Qb3J0LWRlLU1hcnNlaWxsZSAoMSkuanBlZyIsImlhdCI6MTc2ODc2MzIyNSwiZXhwIjoxODAwMjk5MjI1fQ.ZlUm9tdnP_MkFryhlgHlbk2bLHZZNneUcJXMpnt6Zlw"
  },
  {
    id: 3,
    title: "Shopping & Sorties",
    description: "Nos chauffeurs vous accompagnent confortablement pour vos séances shopping.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Gemini_Generated_Image_wwvf4pwwvf4pwwvf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9HZW1pbmlfR2VuZXJhdGVkX0ltYWdlX3d3dmY0cHd3dmY0cHd3dmYucG5nIiwiaWF0IjoxNzY4NzU3NjU3LCJleHAiOjE4MDAyOTM2NTd9.-3IiV9rjs7IHSjYNTcI1Q78z8PTValRc8nJz7w64mTA"
  },
  {
    id: 4,
    title: "Tourisme PACA",
    description: "Marseille, Cassis, Aix-en-Provence. Découvrez les trésors de la région avec un guide local passionné.",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=600&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Événements",
    description: "Mariages, galas, anniversaires. Nous transformons vos moments spéciaux en souvenirs inoubliables.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Location à l'heure",
    description: "Réservez notre service à l'heure pour tous vos besoins de déplacements ponctuels.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=800&fit=crop&q=80"
  }
];

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // 6 cards / 3 per slide = 2 slides on desktop

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 
            className="font-serif text-black mb-2 inline-block"
            style={{ fontSize: '48px', fontWeight: 300 }}
          >
            Nos Services
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-px bg-black mx-auto"
          />
        </motion.div>

        {/* Texte présentation */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-serif text-center mx-auto"
          style={{ 
            fontSize: '18px', 
            fontWeight: 300, 
            color: '#666666',
            maxWidth: '700px',
            marginTop: '24px',
            marginBottom: '60px'
          }}
        >
          De l'aéroport aux événements, notre Tesla Model Y 2025 vous accompagne avec élégance dans tous vos déplacements.
        </motion.p>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop: 3 cards per slide, auto-scroll */}
          <div className="hidden lg:block overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ width: '200%' }}
            >
              {/* Slide 1: Cards 1-3 */}
              <div className="flex gap-6 w-full flex-shrink-0">
                {services.slice(0, 3).map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
              {/* Slide 2: Cards 4-6 */}
              <div className="flex gap-6 w-full flex-shrink-0">
                {services.slice(3, 6).map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tablet: 2 columns grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Mobile: 1 column grid */}
          <div className="grid md:hidden grid-cols-1 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Dots indicator - Desktop only */}
          <div className="hidden lg:flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-black scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="tel:0784628640" 
            className="inline-block px-8 py-3.5 bg-black text-white font-serif text-sm rounded-full hover:bg-gray-900 transition-all"
          >
            Réserver maintenant : 07 84 62 86 40
          </a>
        </div>
      </div>
    </section>
  );
}

// Square Service Card Component
function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white overflow-hidden group cursor-pointer flex-1"
      style={{
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        aspectRatio: '1 / 1',
      }}
    >
      {/* Image - Square format */}
      <div className="overflow-hidden relative" style={{ height: '60%' }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span 
            className="font-serif text-xs uppercase tracking-widest bg-white/90 px-3 py-1 rounded-full"
            style={{ color: '#333' }}
          >
            {String(service.id).padStart(2, '0')}
          </span>
        </div>
      </div>
      
      {/* Contenu texte */}
      <div className="p-5" style={{ height: '40%' }}>
        <h3 
          className="font-serif text-black mb-2"
          style={{ fontSize: '20px', fontWeight: 500 }}
        >
          {service.title}
        </h3>
        <div className="w-8 h-px bg-black mb-3" />
        <p 
          className="font-serif leading-relaxed line-clamp-3"
          style={{ fontSize: '13px', fontWeight: 300, color: '#666' }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
