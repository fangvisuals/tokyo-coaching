import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">Tokyo Coaching</h3>
            <p className="text-sm">
              Votre partenaire pour atteindre vos objectifs sportifs et bien-être.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Liens rapides</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-gold transition-colors">À propos</Link>
              <Link to="/services" className="block text-sm hover:text-gold transition-colors">Mes services</Link>
              <Link to="/contact" className="block text-sm hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Mes réseaux</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contact@tokyocoaching.fr" className="hover:text-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cream/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tokyo Coaching. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;