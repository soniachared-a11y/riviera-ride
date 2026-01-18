import { motion } from 'framer-motion';
import { MapPin, Flag, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-white text-center font-bold"
          style={{
            fontSize: 'clamp(40px, 8vw, 72px)',
            letterSpacing: '2px',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          TAXI MALACRIDA
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          className="text-white text-center font-light mt-4"
          style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          Votre chauffeur privé Tesla à Aix-en-Provence
        </motion.h2>
        
        {/* Baseline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
          className="text-center mt-6"
          style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.8)',
            letterSpacing: '3px',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          Confort électrique • Ponctualité • Discrétion
        </motion.p>
        
        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
          className="mt-16 w-full"
          style={{ maxWidth: '900px' }}
        >
          <div 
            className="bg-white rounded-lg p-6 md:p-10"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Départ Input */}
              <div className="flex-1 relative">
                <MapPin 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
                  size={20} 
                />
                <input
                  type="text"
                  placeholder="Adresse de départ"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                />
              </div>
              
              {/* Arrivée Input */}
              <div className="flex-1 relative">
                <Flag 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
                  size={20} 
                />
                <input
                  type="text"
                  placeholder="Adresse d'arrivée"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                />
              </div>
              
              {/* Date/Heure Input */}
              <div className="flex-1 relative">
                <Clock 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
                  size={20} 
                />
                <input
                  type="text"
                  placeholder="19/01/2026 16:05"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors duration-300"
                  style={{
                    fontSize: '15px',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                />
              </div>
              
              {/* Submit Button */}
              <button
                className="bg-black text-white px-8 md:px-12 py-4 rounded-md font-semibold transition-all duration-400 hover:bg-white hover:text-black hover:scale-[1.02] border-2 border-black"
                style={{
                  letterSpacing: '2px',
                  fontSize: '14px',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}
              >
                RÉSERVER
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
