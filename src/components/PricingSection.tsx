import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpDown } from 'lucide-react';
import transfertsMobile from '@/assets/transferts-mobile.png';
import transfertsCourants from '@/assets/transferts-courants.png';

const ACCENT_BLUE = '#0E4D64';

const pricingData = [
  {
    from: 'Aix Centre',
    to: 'Aéroport Marseille',
    price: 50
  },
  {
    from: 'Aix Centre',
    to: 'Gare TGV Aix',
    price: 35
  },
  {
    from: 'Aix Centre',
    to: 'Marseille Centre',
    price: 50
  }
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section 
      ref={ref}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      {/* Mobile Background - Vertical image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url('${transfertsMobile}')` }}
      />
      
      {/* Desktop Background - Horizontal image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url('${transfertsCourants}')` }}
      />
      
      {/* Dark overlay with blur effect to hide original cards */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Tarifs <span style={{ color: ACCENT_BLUE }}>Indicatifs</span>
          </h2>
          <p className="text-gray-300 font-light text-sm md:text-base max-w-2xl mx-auto">
            Prix fixes, sans surprise. Tarifs indicatifs pour nos trajets les plus demandés.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-center"
              style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
            >
              {/* From Location */}
              <p className="text-gray-800 font-medium text-lg md:text-xl mb-3">
                {item.from}
              </p>
              
              {/* Arrow Icon */}
              <div className="flex justify-center mb-3">
                <ArrowUpDown 
                  className="w-8 h-8 md:w-10 md:h-10" 
                  style={{ color: ACCENT_BLUE }}
                  strokeWidth={1.5}
                />
              </div>
              
              {/* To Location */}
              <p className="text-gray-800 font-medium text-lg md:text-xl mb-5">
                {item.to}
              </p>
              
              {/* Price */}
              <p 
                className="font-bold text-2xl md:text-3xl"
                style={{ color: ACCENT_BLUE }}
              >
                À PARTIR DE {item.price}€
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
