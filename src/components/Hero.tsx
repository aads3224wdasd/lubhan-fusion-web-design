
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-white to-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M30 30l-15-15h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-7xl font-bold text-charcoal leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Lubhan Kitchen
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Where traditional Omani flavors meet modern culinary innovation. 
              Experience the perfect fusion of heritage and contemporary dining.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-sm lg:text-base">
            <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-charcoal font-medium">Authentic Omani Cuisine</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              <span className="text-charcoal font-medium">Modern Fast Food</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-charcoal font-medium">Fresh Ingredients</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/menu"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Explore Our Menu
            </Link>
            <Link 
              to="/order"
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
            >
              Order Online
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary/60" size={24} />
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
        <div className="h-full bg-gradient-to-l from-primary/10 to-transparent flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <span className="text-4xl">🍽️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
