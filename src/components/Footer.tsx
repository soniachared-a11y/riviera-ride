import { Link } from 'react-router-dom';
import logoTaxiMalacrida from '@/assets/logo-taxi-malacrida.png';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img 
              src={logoTaxiMalacrida} 
              alt="Taxi Malacrida" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-light text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/mentions-legales" 
              className="text-sm font-light text-white/70 hover:text-white transition-colors"
            >
              Mentions Légales
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-xs font-light text-white/50">
            © {year} Taxi Malacrida Aix-en-Provence. Tous droits réservés. • SIRET : 539 197 046 00029
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
