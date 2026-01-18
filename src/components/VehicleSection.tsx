import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { emoji: '📱', label: 'Tablette à bord' },
  { emoji: '🔌', label: 'Chargeurs USB-C' },
  { emoji: '📶', label: 'Connexion WiFi' },
  { emoji: '💧', label: 'Rafraîchissements' },
  { emoji: '💳', label: 'Terminal CB' },
  { emoji: '☂️', label: 'Parapluie' },
];

const VehicleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative min-h-screen bg-black py-20 px-6 overflow-hidden">
      {/* Subtle checkerboard pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.2em] mb-16 md:mb-20"
        >
          TESLA MODEL Y 2025
        </motion.h2>
        
        {/* Vehicle Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 md:mb-24 flex justify-center"
        >
          <img 
            src="https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Modele%20tesla%20%202025%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4ODQ0OGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9Nb2RlbGUgdGVzbGEgIDIwMjUgLnBuZyIsImlhdCI6MTc2ODczOTAwMCwiZXhwIjoxODAwMjc1MDAwfQ.PsMk-Y9VaEkOTdBLF8ZEXX4-RmZwOnq28tTbI67M80U"
            alt="Tesla Model Y 2025"
            className="max-w-3xl w-full h-auto"
            style={{ filter: 'drop-shadow(0 20px 80px rgba(255, 255, 255, 0.08))' }}
          />
        </motion.div>
        
        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-16"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="text-5xl md:text-6xl mb-4 grayscale brightness-200 transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110">
                {feature.emoji}
              </div>
              <p className="text-white/90 text-xs md:text-sm tracking-[0.15em] font-light">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleSection;
