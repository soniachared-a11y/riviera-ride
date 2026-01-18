import { motion } from 'framer-motion';
import { MapPin, Flag, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Section%20hero%20Taxi%20Malacrida%20%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9TZWN0aW9uIGhlcm8gVGF4aSBNYWxhY3JpZGEgICgxKS5wbmciLCJpYXQiOjE3Njg3NDEyMjMsImV4cCI6MTgwMDI3NzIyM30.cWkcMnO_d242lDDRk6Q3cO-aBUb6ZkUPz7V7CA3p3qg')`
        }}
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
            Votre chauffeur privé Tesla à Aix-en-Provence
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
            Confort électrique • Ponctualité • Discrétion
          </motion.p>
        </div>
        
        {/* Booking Form - Bottom right, transparent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
          className="self-end mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Départ Input */}
            <div className="relative">
              <MapPin 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" 
                size={16} 
                strokeWidth={1.5}
              />
              <input
                type="text"
                placeholder="Adresse de départ"
                className="w-full sm:w-44 pl-10 pr-3 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors duration-300 font-extralight text-sm"
              />
            </div>
            
            {/* Arrivée Input */}
            <div className="relative">
              <Flag 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" 
                size={16} 
                strokeWidth={1.5}
              />
              <input
                type="text"
                placeholder="Adresse d'arrivée"
                className="w-full sm:w-44 pl-10 pr-3 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors duration-300 font-extralight text-sm"
              />
            </div>
            
            {/* Date/Heure Input */}
            <div className="relative">
              <Clock 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" 
                size={16} 
                strokeWidth={1.5}
              />
              <input
                type="text"
                placeholder="19/01/2026 16:05"
                className="w-full sm:w-40 pl-10 pr-3 py-3 bg-transparent border border-white/30 rounded text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-colors duration-300 font-extralight text-sm"
              />
            </div>
            
            {/* Submit Button */}
            <button
              className="bg-white text-black px-6 py-3 rounded font-light transition-all duration-300 hover:bg-black hover:text-white hover:border-white border border-transparent text-sm tracking-widest"
            >
              RÉSERVER
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
