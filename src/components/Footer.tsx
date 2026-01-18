import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Transferts Aéroport', href: '#services' },
      { name: 'Transferts Gare TGV', href: '#services' },
      { name: 'Courses Toutes Distances', href: '#services' },
      { name: 'Région PACA', href: '#services' },
    ],
    company: [
      { name: 'Notre Tesla', href: '#fleet' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#" className="text-3xl font-serif text-white mb-6 block">
              Taxi Malacrida
            </a>
            <p className="text-white/60 font-light leading-relaxed mb-6 max-w-sm">
              Service de taxi premium à Aix-en-Provence. 
              Transport privé en Tesla Model Y dans toute la région PACA.
            </p>
            <div className="flex items-center gap-2 text-gold text-sm font-light">
              <Clock className="w-4 h-4" />
              <span>Disponible 24h/24, 7j/7</span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-light hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-light hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0784628640" className="flex items-center gap-3 text-sm font-light hover:text-gold transition-colors group">
                  <Phone className="w-4 h-4 text-gold" />
                  07 84 62 86 40
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="mailto:contact@taximalacrida.fr" className="flex items-center gap-3 text-sm font-light hover:text-gold transition-colors group">
                  <Mail className="w-4 h-4 text-gold" />
                  contact@taximalacrida.fr
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-light">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>18 avenue Henri Malacrida<br />13100 Aix-en-Provence</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-light text-white/50 text-center md:text-left">
            <p>© {year} Taxi Malacrida Aix-en-Provence. Tous droits réservés.</p>
            <p className="mt-1">SIRET : 539 197 046 00029 • APE : 4932Z</p>
          </div>
          <ul className="flex gap-6">
            <li>
              <Link to="/mentions-legales" className="text-sm font-light text-white/50 hover:text-white/80 transition-colors">
                Mentions Légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
