import { motion } from 'framer-motion';

const services = [
  {
    title: "Transferts Aéroports",
    description: "Marseille-Provence, Nice Côte d'Azur, Toulon Hyères. Ponctualité garantie, suivi de vol en temps réel, prise en charge directe au terminal.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/voiture%20en%20route%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS92b2l0dXJlIGVuIHJvdXRlIC5wbmciLCJpYXQiOjE3Njg3NTc3MTUsImV4cCI6MTgwMDI5MzcxNX0.iTqRqep4pCNN5bL_VLXw0LvfsNDrx8fT4LaONKYuGdw"
  },
  {
    title: "Service à la journée",
    description: "Bénéficiez d'un chauffeur privé pour la journée entière, idéal pour vos rendez-vous professionnels ou vos activités personnelles.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Shopping & Sorties",
    description: "Nos chauffeurs vous accompagnent confortablement pour vos séances shopping, avec ponctualité et attention à vos besoins.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Gemini_Generated_Image_wwvf4pwwvf4pwwvf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9HZW1pbmlfR2VuZXJhdGVkX0ltYWdlX3d3dmY0cHd3dmY0cHd3dmYucG5nIiwiaWF0IjoxNzY4NzU3NjU3LCJleHAiOjE4MDAyOTM2NTd9.-3IiV9rjs7IHSjYNTcI1Q78z8PTValRc8nJz7w64mTA"
  },
  {
    title: "Tourisme PACA",
    description: "Marseille, Cassis, Aix-en-Provence. Découvrez les trésors de la région avec un guide local passionné.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/Vieux-Port-de-Marseille%20(1).jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9WaWV1eC1Qb3J0LWRlLU1hcnNlaWxsZSAoMSkuanBlZyIsImlhdCI6MTc2ODc2Mzg1MSwiZXhwIjoxODAwMjk5ODUxfQ.tCRSFXn8yns1iJJj3q_ZqsaOhg_5rhsEIXvPjCsF9dw"
  },
  {
    title: "Événements",
    description: "Mariages, galas, anniversaires. Nous transformons vos moments spéciaux en souvenirs inoubliables.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Transferts Gares",
    description: "TGV Aix-en-Provence, Marseille Saint-Charles. Prise en charge directe à quai, aide aux bagages.",
    image: "https://uqjftifudojfgfwfxxia.supabase.co/storage/v1/object/sign/image%20tesla/gare.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lMmY3N2MyMi0wNDFkLTQ5YWQtODE3ZC04MDJiY2M4NDQ4ZSIsImFsZyI6IkhTMjU2In0.eyJ1cmwiOiJpbWFnZSB0ZXNsYS9nYXJlLnBuZyIsImlhdCI6MTc2ODc1NzU3NCwiZXhwIjoxODAwMjkzNTc0fQ.QIwDTb1biOFIXpjMZ5yuUTiEbHdcxb0wxATFblSeTVQ"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="font-serif text-black mb-4 inline-block relative"
            style={{ fontSize: '48px', fontWeight: 300, letterSpacing: '0.05em' }}
          >
            Nos Services
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p 
            className="font-serif text-black/70 max-w-2xl mx-auto mt-6"
            style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.8 }}
          >
            Une gamme complète de services de transport haut de gamme, 
            adaptée à chacun de vos besoins.
          </p>
        </motion.div>

        {/* Grid 3 colonnes desktop, 2 tablet, 1 mobile */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '32px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden"
              style={{
                background: '#000000',
                borderRadius: '12px',
                height: '600px'
              }}
            >
              {/* Image - 360px height */}
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '360px',
                  objectFit: 'cover'
                }}
              />
              
              {/* Contenu texte avec padding 32px */}
              <div style={{ padding: '32px', color: '#FFFFFF' }}>
                <h3 
                  className="font-serif"
                  style={{ 
                    fontSize: '28px', 
                    fontWeight: 400, 
                    marginBottom: '16px',
                    color: '#FFFFFF'
                  }}
                >
                  {service.title}
                </h3>
                
                {/* Ligne blanche - 60px width, 2px height */}
                <div 
                  style={{ 
                    width: '60px', 
                    height: '2px', 
                    background: '#FFFFFF', 
                    marginBottom: '20px' 
                  }} 
                />
                
                <p 
                  className="font-serif"
                  style={{ 
                    fontSize: '15px', 
                    fontWeight: 300, 
                    lineHeight: 1.7,
                    color: '#FFFFFF'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
