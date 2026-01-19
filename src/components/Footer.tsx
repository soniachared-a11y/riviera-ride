import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import logoTaxiMalacrida from '@/assets/logo-taxi-malacrida.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Notre Tesla', href: '#fleet' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <a href="#" className="block mb-6">
              <img 
                src={logoTaxiMalacrida} 
                alt="Taxi Malacrida" 
                className="h-28 md:h-32 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Service de taxi premium à Aix-en-Provence. Transport privé en Tesla Model Y dans toute la région PACA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Link 
                  to="/mentions-legales" 
                  className="text-sm font-light text-white/70 hover:text-white transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:0784628640" 
                  className="flex items-center gap-3 text-sm font-light text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/50" />
                  07 84 62 86 40
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@taximalacrida.fr" 
                  className="flex items-center gap-3 text-sm font-light text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/50" />
                  contact@taximalacrida.fr
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-light text-white/70">
                <MapPin className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                <span>18 avenue Henri Malacrida<br />13100 Aix-en-Provence</span>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Disponibilité</h4>
            <div className="flex items-center gap-3 text-sm font-light text-white/70 mb-4">
              <Clock className="w-4 h-4 text-white/50" />
              <span>24h/24, 7j/7</span>
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Réservation possible à l'avance ou pour un départ immédiat. Transferts aéroports, gares TGV et toutes distances.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-white/50 text-center md:text-left">
            © {year} Taxi Malacrida Aix-en-Provence. Tous droits réservés.
          </p>
          <p className="text-xs font-light text-white/50">
            SIRET : 539 197 046 00029 • APE : 4932Z
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
