import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: 'Transferts Aéroport', href: '#services' },
      { name: 'Voyages d\'Affaires', href: '#services' },
      { name: 'Excursions Privées', href: '#services' },
      { name: 'Événements Spéciaux', href: '#services' },
    ],
    company: [
      { name: 'À Propos', href: '#about' },
      { name: 'Notre Flotte', href: '#fleet' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Politique de Confidentialité', href: '#' },
      { name: 'Conditions Générales', href: '#' },
      { name: 'Mentions Légales', href: '#' },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow section-padding !py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-serif mb-4 block">
              Macrida
            </a>
            <p className="text-muted-foreground text-sm font-light mb-6 leading-relaxed">
              Service VTC premium dans le Sud de la France. 
              L'excellence du transport privé.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg card-elegant flex items-center justify-center hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg card-elegant flex items-center justify-center hover:border-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg card-elegant flex items-center justify-center hover:border-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33600000000"
                  className="flex items-center gap-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +33 6 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@macrida.fr"
                  className="flex items-center gap-2 text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@macrida.fr
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm font-light text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Côte d'Azur & Provence, Sud de la France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-muted-foreground">
            © {currentYear} Macrida. Tous droits réservés.
          </p>
          <ul className="flex gap-6">
            {links.legal.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                >
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
