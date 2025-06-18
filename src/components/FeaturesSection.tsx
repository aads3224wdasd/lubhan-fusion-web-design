
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🏺',
      title: 'Traditional Omani',
      description: 'Authentic recipes passed down through generations, prepared with traditional spices and cooking methods.',
      color: 'from-primary to-primary/80'
    },
    {
      icon: '🍔',
      title: 'Modern Fast Food',
      description: 'Contemporary favorites with a unique twist, perfect for quick meals without compromising quality.',
      color: 'from-secondary to-secondary/80'
    },
    {
      icon: '🌿',
      title: 'Fresh Ingredients',
      description: 'Locally sourced, fresh ingredients ensure every dish is bursting with flavor and nutrition.',
      color: 'from-accent to-accent/80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6">
            The Perfect <span className="text-primary">Fusion</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Experience the best of both worlds where traditional Omani hospitality meets modern culinary innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-charcoal/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
