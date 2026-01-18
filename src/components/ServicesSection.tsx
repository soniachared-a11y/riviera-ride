import { useEffect, useRef, useState } from 'react';
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
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80"
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
    title: "Transferts Gares",
    description: "TGV Aix-en-Provence, Marseille Saint-Charles. Prise en charge directe à quai.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/gare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9nYXJlLnBuZyIsImlhdCI6MTc2ODc1NzU3NCwiZXhwIjoxODAwMjkzNTc0fQ.QIwDTb1biOFIXpjMZ5yuUTiEbHdcxb0wxATFblSeTVQ"
  }
];

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  useEffect(() => {
    const lastCard = lastCardRef.current;
    if (!lastCard) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasReachedEnd(true);
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(lastCard);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!section || !scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (hasReachedEnd) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      if (!isAtEnd) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, [hasReachedEnd]);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="bg-white py-20 overflow-hidden"
    >
      <div className="text-center px-6">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <h2 
            className="font-serif text-black mb-2"
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
          className="font-serif mx-auto"
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
      </div>

      {/* Container scroll horizontal */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden"
        style={{
          scrollSnapType: 'x mandatory',
          padding: '40px',
          gap: '24px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            ref={index === services.length - 1 ? lastCardRef : null}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 bg-white overflow-hidden group cursor-pointer"
            style={{
              width: '380px',
              height: '500px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              scrollSnapAlign: 'center',
            }}
          >
            {/* Image */}
            <div className="overflow-hidden" style={{ height: '280px' }}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Contenu texte */}
            <div style={{ padding: '24px' }}>
              <span className="font-serif text-xs uppercase tracking-widest" style={{ color: '#999' }}>
                {String(service.id).padStart(2, '0')}
              </span>
              <h3 
                className="font-serif text-black mt-2 mb-3"
                style={{ fontSize: '22px', fontWeight: 500 }}
              >
                {service.title}
              </h3>
              <div className="w-10 h-px bg-black mb-4" />
              <p 
                className="font-serif leading-relaxed"
                style={{ fontSize: '14px', fontWeight: 300, color: '#666' }}
              >
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer à la fin pour le scroll */}
        <div className="flex-shrink-0" style={{ width: '40px' }} />
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a 
          href="tel:0784628640" 
          className="inline-block px-8 py-3.5 bg-black text-white font-serif text-sm rounded-full hover:bg-gray-900 transition-all"
        >
          Réserver maintenant : 07 84 62 86 40
        </a>
      </div>
    </section>
  );
}
