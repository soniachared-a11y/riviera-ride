import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Award, Users, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bannerItems = [
  { icon: Award, title: "Excellence", text: "Nous maintenons les plus hauts standards à chaque trajet." },
  { icon: Users, title: "Discrétion", text: "Votre vie privée est notre priorité absolue." },
  { icon: MapPin, title: "Expertise Locale", text: "Une connaissance approfondie du Sud de la France." },
  { icon: Heart, title: "Service Personnalisé", text: "Chaque voyage est adapté à vos préférences." }
];

const services = [
  {
    id: 1,
    title: "Transferts Aéroports",
    description: "Marseille-Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/voiture%20en%20route%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS92b2l0dXJlIGVuIHJvdXRlIC5wbmciLCJpYXQiOjE3Njg3NTc3MTUsImV4cCI6MTgwMDI5MzcxNX0.iTqRqep4pCNN5bL_VLXw0LvfsNDrx8fT4LaONKYuGdw"
  },
  {
    id: 2,
    title: "Service à la journée",
    description: "Bénéficiez d'un chauffeur privé pour la journée entière, idéal pour vos rendez-vous professionnels.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/gare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9nYXJlLnBuZyIsImlhdCI6MTc2ODc1NzU3NCwiZXhwIjoxODAwMjkzNTc0fQ.QIwDTb1biOFIXpjMZ5yuUTiEbHdcxb0wxATFblSeTVQ"
  },
  {
    id: 3,
    title: "Shopping & Sorties",
    description: "Nos chauffeurs vous accompagnent confortablement pour vos séances shopping.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Gemini_Generated_Image_wwvf4pwwvf4pwwvf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9HZW1pbmlfR2VuZXJhdGVkX0ltYWdlX3d3dmY0cHd3dmY0cHd3dmYucG5nIiwiaWF0IjoxNzY4NzU3NjU3LCJleHAiOjE4MDAyOTM2NTd9.-3IiV9rjs7IHSjYNTcI1Q78z8PTValRc8nJz7w64mTA"
  },
  {
    id: 4,
    title: "Côte d'Azur",
    description: "Nice, Cannes, Monaco. Découvrez les plus beaux paysages de la Méditerranée.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/avion%20nice%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9hdmlvbiBuaWNlIC5wbmciLCJpYXQiOjE3Njg3NTc1MjgsImV4cCI6MTgwMDI5MzUyOH0.223Q28L3arFQ1_Y_UamI_GpMylA-zZDvQ0NYqo_qFaQ"
  },
  {
    id: 5,
    title: "Transferts Gares",
    description: "TGV Aix-en-Provence, Marseille Saint-Charles. Prise en charge directe à quai.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/gare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9nYXJlLnBuZyIsImlhdCI6MTc2ODc1NzU3NCwiZXhwIjoxODAwMjkzNTc0fQ.QIwDTb1biOFIXpjMZ5yuUTiEbHdcxb0wxATFblSeTVQ"
  },
  {
    id: 6,
    title: "Location à l'heure",
    description: "Réservez notre service à l'heure pour tous vos besoins de déplacements.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/voiture%20en%20route%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS92b2l0dXJlIGVuIHJvdXRlIC5wbmciLCJpYXQiOjE3Njg3NTc3MTUsImV4cCI6MTgwMDI5MzcxNX0.iTqRqep4pCNN5bL_VLXw0LvfsNDrx8fT4LaONKYuGdw"
  }
];

function ScrollingBanner() {
  const duplicatedItems = [...bannerItems, ...bannerItems, ...bannerItems, ...bannerItems];

  return (
    <div className="w-full overflow-hidden bg-white" style={{ height: '140px' }}>
      <div 
        className="flex items-center h-full"
        style={{ width: 'fit-content', animation: 'scroll 40s linear infinite' }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center flex-shrink-0" style={{ minWidth: '280px', padding: '24px', gap: '12px' }}>
            <item.icon size={36} strokeWidth={1.5} className="text-black" />
            <span className="font-serif text-lg font-medium text-black">{item.title}</span>
            <span className="font-serif text-[13px] font-light text-gray-500">{item.text}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export default function ServicesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="services" className="bg-white pt-5 pb-20 px-10">
      <h2 className="sr-only">Nos Services</h2>
      
      <ScrollingBanner />

      <div className="max-w-[1300px] mx-auto relative mt-16">
        
        <button ref={prevRef} className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-all">
          <ChevronLeft size={20} />
        </button>
        
        <button ref={nextRef} className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-all">
          <ChevronRight size={20} />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              {/* CARTE VERTICALE SIMPLE */}
              <div 
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 mx-auto"
                style={{ 
                  width: '360px', 
                  height: '500px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                {/* IMAGE EN HAUT */}
                <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                {/* TEXTE EN BAS */}
                <div style={{ padding: '24px' }}>
                  <span className="font-serif text-xs text-gray-400 uppercase tracking-widest">
                    {String(service.id).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-black mt-2 mb-2">
                    {service.title}
                  </h3>
                  <div className="w-8 h-px bg-black mb-3" />
                  <p className="font-serif text-sm font-light text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center gap-2 mt-8" />

        <div className="text-center mt-10">
          <a href="tel:0784628640" className="inline-block px-8 py-3.5 bg-black text-white font-serif text-sm rounded-full hover:bg-gray-900 transition-all">
            Réserver maintenant : 07 84 62 86 40
          </a>
        </div>
      </div>

      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px; height: 10px; background: #d1d5db; border-radius: 50%; opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active { background: #000; }
      `}</style>
    </section>
  );
}
