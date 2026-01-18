import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award, Users, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Scrolling banner items
const bannerItems = [
  {
    icon: Award,
    title: "Excellence",
    text: "Nous maintenons les plus hauts standards à chaque trajet."
  },
  {
    icon: Users,
    title: "Discrétion",
    text: "Votre vie privée est notre priorité absolue."
  },
  {
    icon: MapPin,
    title: "Expertise Locale",
    text: "Une connaissance approfondie du Sud de la France."
  },
  {
    icon: Heart,
    title: "Service Personnalisé",
    text: "Chaque voyage est adapté à vos préférences."
  }
];

// Service cards data
const services = [
  {
    id: 1,
    title: "Transferts Aéroports",
    description: "Marseille-Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel, prise en charge directe au terminal.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/voiture%20en%20route%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS92b2l0dXJlIGVuIHJvdXRlIC5wbmciLCJpYXQiOjE3Njg3NTc3MTUsImV4cCI6MTgwMDI5MzcxNX0.iTqRqep4pCNN5bL_VLXw0LvfsNDrx8fT4LaONKYuGdw",
    alt: "Tesla Model Y route aéroport Marseille-Provence coucher soleil"
  },
  {
    id: 2,
    title: "Service à la journée",
    description: "Bénéficiez d'un chauffeur privé pour la journée entière, idéal pour vos rendez-vous professionnels ou vos activités personnelles.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/gare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9nYXJlLnBuZyIsImlhdCI6MTc2ODc1NzU3NCwiZXhwIjoxODAwMjkzNTc0fQ.QIwDTb1biOFIXpjMZ5yuUTiEbHdcxb0wxATFblSeTVQ",
    alt: "Famille avec bagages chauffeur VTC gare TGV"
  },
  {
    id: 3,
    title: "Shopping & Sorties",
    description: "Nos chauffeurs vous accompagnent confortablement pour vos séances shopping, avec ponctualité et attention à vos besoins.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Gemini_Generated_Image_wwvf4pwwvf4pwwvf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9HZW1pbmlfR2VuZXJhdGVkX0ltYWdlX3d3dmY0cHd3dmY0cHd3dmYucG5nIiwiaWF0IjoxNzY4NzU3NjU3LCJleHAiOjE4MDAyOTM2NTd9.-3IiV9rjs7IHSjYNTcI1Q78z8PTValRc8nJz7w64mTA",
    alt: "Couple élégant shopping sacs luxe devant Tesla"
  },
  {
    id: 4,
    title: "Côte d'Azur",
    description: "Nice, Cannes, Monaco. Découvrez les plus beaux paysages de la Méditerranée lors de vos trajets avec vue sur la mer.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/avion%20nice%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9hdmlvbiBuaWNlIC5wbmciLCJpYXQiOjE3Njg3NTc1MjgsImV4cCI6MTgwMDI5MzUyOH0.223Q28L3arFQ1_Y_UamI_GpMylA-zZDvQ0NYqo_qFaQ",
    alt: "Avion au-dessus Nice Côte d'Azur mer turquoise"
  },
  {
    id: 5,
    title: "Transferts Gares",
    description: "TGV Aix-en-Provence, Marseille Saint-Charles. Prise en charge directe à quai, aide aux bagages, départ immédiat.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop&q=80",
    alt: "Chauffeur professionnel VTC élégant"
  },
  {
    id: 6,
    title: "Location à l'heure",
    description: "Réservez notre service à l'heure pour tous vos besoins, que ce soit pour un trajet rapide ou une journée complète.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop&q=80",
    alt: "Passagers détendus Tesla premium"
  }
];

// Scrolling Banner Component
function ScrollingBanner() {
  const duplicatedItems = [...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems];

  return (
    <div 
      className="w-full overflow-hidden bg-white"
      style={{ height: '140px' }}
      aria-label="Valeurs de l'entreprise"
    >
      <div 
        className="flex items-center h-full animate-scroll"
        style={{ 
          width: 'fit-content',
          animation: 'scroll 20s linear infinite'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center flex-shrink-0"
            style={{ minWidth: '280px', padding: '24px', gap: '12px' }}
          >
            <item.icon size={36} strokeWidth={1.5} className="text-black" aria-hidden="true" />
            <span className="font-serif text-lg font-medium text-black">
              {item.title}
            </span>
            <span className="font-serif text-[13px] font-light text-gray-500">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <article
      className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 h-auto md:h-[440px] w-full"
      style={{
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.15)';
      }}
    >
      {/* Left side - Text */}
      <div className="w-full md:w-1/2 p-6 md:py-8 md:px-6 flex flex-col justify-center bg-white">
        <span 
          className="font-serif text-[11px] text-gray-400 uppercase tracking-widest mb-3"
          aria-hidden="true"
        >
          {String(service.id).padStart(2, '0')}
        </span>
        <h3 className="font-serif text-xl md:text-[22px] font-normal text-black mb-3">
          {service.title}
        </h3>
        <div className="w-4 h-px bg-black mb-4" aria-hidden="true" />
        <p className="font-serif text-sm font-light text-gray-500 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Right side - Image */}
      <figure className="w-full md:w-1/2 h-[280px] md:h-full relative overflow-hidden bg-gray-50">
        <img
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </figure>
    </article>
  );
}

export default function ServicesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section 
      id="services"
      className="relative bg-white"
      style={{ paddingTop: '20px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className="sr-only">Nos Services</h2>

      {/* Scrolling Banner */}
      <ScrollingBanner />

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto relative" style={{ marginTop: '60px' }}>
        
        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-gray-50 transition-all duration-300"
          aria-label="Service précédent"
        >
          <ChevronLeft size={18} className="text-black" />
        </button>
        
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-black hover:bg-gray-50 transition-all duration-300"
          aria-label="Service suivant"
        >
          <ChevronRight size={18} className="text-black" />
        </button>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.services-pagination',
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active',
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="services-pagination flex justify-center gap-3 mt-8" />

        {/* CTA Button */}
        <div className="text-center mt-10">
          <a 
            href="tel:0784628640"
            className="inline-block px-8 py-3.5 bg-black text-white font-serif text-sm font-light rounded-full hover:bg-gray-900 transition-all duration-300"
          >
            Réserver maintenant : 07 84 62 86 40
          </a>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .services-swiper {
          padding: 10px 5px;
        }
        
        .swiper-bullet {
          width: 12px;
          height: 12px;
          background: #D1D5DB;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .swiper-bullet:hover {
          background: #9CA3AF;
        }
        
        .swiper-bullet-active {
          background: #000000 !important;
        }

        @media (max-width: 768px) {
          .services-swiper .swiper-slide {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
