import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Transferts Aéroport', href: '#services' },
      { name: 'Voyages d\'Affaires', href: '#services' },
      { name: 'Excursions Privées', href: '#services' },
      { name: 'Événements', href: '#services' },
    ],
    company: [
      { name: 'Notre Flotte', href: '#fleet' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Mentions Légales', href: '#' },
      { name: 'Confidentialité', href: '#' },
      { name: 'CGV', href: '#' },
    ],
  };

  const social = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#" className="text-3xl font-serif text-white mb-6 block">
              Macrida
            </a>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-sm">
              Service VTC premium dans le Sud de la France. 
              L'excellence du transport privé sur la Côte d'Azur et en Provence.
            </p>
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
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
            <h4 className="text-white font-serif text-lg mb-6">Entreprise</h4>
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
                <a href="tel:+33600000000" className="flex items-center gap-3 text-sm font-light hover:text-gold transition-colors group">
                  <Phone className="w-4 h-4 text-gold" />
                  +33 6 00 00 00 00
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="mailto:contact@macrida.fr" className="flex items-center gap-3 text-sm font-light hover:text-gold transition-colors group">
                  <Mail className="w-4 h-4 text-gold" />
                  contact@macrida.fr
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm font-light">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>Côte d'Azur & Provence<br />Sud de la France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-white/50">
            © {year} Macrida. Tous droits réservés.
          </p>
          <ul className="flex gap-6">
            {links.legal.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-light text-white/50 hover:text-white/80 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
