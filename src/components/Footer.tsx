
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Lubhan Kitchen</h3>
                <p className="text-primary text-sm">Oman • Modern Fusion</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Where traditional Omani flavors meet modern culinary innovation. Experience authentic cuisine in a contemporary setting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white/70 hover:text-primary transition-colors">Home</Link>
              <Link to="/menu" className="text-white/70 hover:text-primary transition-colors">Menu</Link>
              <Link to="/about" className="text-white/70 hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="text-white/70 hover:text-primary transition-colors">Contact</Link>
              <Link to="/order" className="text-white/70 hover:text-primary transition-colors">Order Online</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-white/70">📍 Muscat, Oman</p>
              </div>
              <div>
                <p className="text-white/70">📞 +968 1234 5678</p>
              </div>
              <div>
                <p className="text-white/70">✉️ info@labhankitchen.om</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-2 text-white/70">
              <div className="flex justify-between">
                <span>Sun - Thu</span>
                <span>10:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>10:00 - 00:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2024 Lubhan Kitchen. All rights reserved. Made with ❤️ in Oman.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
