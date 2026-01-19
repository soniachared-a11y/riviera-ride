import { motion } from 'framer-motion';
import BookingForm from './BookingForm';
import heroMobile from '@/assets/hero-mobile.png';

const HERO_DESKTOP_URL = 'https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Section%20hero%20Taxi%20Malacrida%20%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9TZWN0aW9uIGhlcm8gVGF4aSBNYWxhY3JpZGEgICgxKS5wbmciLCJpYXQiOjE3Njg3NDEyMjMsImV4cCI6MTgwMDI3NzIyM30.cWkcMnO_d242lDDRk6Q3cO-aBUb6ZkUPz7V7CA3p3qg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Mobile Background Image - Full visibility */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src={heroMobile}
          alt="Taxi Malacrida Hero"
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Desktop Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url('${HERO_DESKTOP_URL}')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-8 md:px-16 lg:px-24">
        {/* Text Content - Left aligned */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-white font-light"
            style={{
              fontSize: 'clamp(36px, 6vw, 56px)',
              letterSpacing: '3px',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            TAXI MALACRIDA
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="text-white font-extralight mt-4"
            style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Chauffeur privé Tesla • Aix-en-Provence • 24h/24
          </motion.h2>
          
          {/* Baseline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
            className="mt-6 font-extralight"
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '2px',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Gare • Aéroport • Toutes distances
          </motion.p>
          
          {/* Extended description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
            className="mt-5 font-light max-w-lg"
            style={{
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.7',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Spécialiste des transferts gares et aéroports en Provence. Une alternative haut de gamme au taxi traditionnel, alliant ponctualité, discrétion et confort absolu.
          </motion.p>
        </div>
        
        {/* Booking Form - Bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
          className="self-end mb-12 md:mb-16"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
