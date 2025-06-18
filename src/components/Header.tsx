
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Order Online', path: '/order', isSpecial: true }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-charcoal">Lubhan Kitchen</h1>
              <p className="text-xs text-primary font-medium">Oman • Modern Fusion</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  item.isSpecial
                    ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105'
                    : isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-charcoal hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
                {!item.isSpecial && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/10 shadow-lg">
            <nav className="flex flex-col p-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    item.isSpecial
                      ? 'bg-gradient-to-r from-primary to-secondary text-white text-center font-medium'
                      : isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-charcoal hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
