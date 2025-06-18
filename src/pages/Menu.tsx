
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('omani');

  const omaniDishes = [
    {
      name: 'Shuwa',
      description: 'Traditional slow-cooked lamb marinated in Omani spices and wrapped in banana leaves',
      price: '18 OMR',
      image: '🐑',
      isSignature: true
    },
    {
      name: 'Majboos',
      description: 'Fragrant spiced rice with tender meat, nuts, and raisins',
      price: '12 OMR',
      image: '🍚'
    },
    {
      name: 'Mashuai',
      description: 'Grilled kingfish served with tangy tamarind rice',
      price: '15 OMR',
      image: '🐟'
    },
    {
      name: 'Omani Halwa',
      description: 'Traditional sweet dessert with rose water and nuts',
      price: '6 OMR',
      image: '🍮'
    },
    {
      name: 'Qahwa',
      description: 'Traditional Omani coffee with cardamom and rose water',
      price: '3 OMR',
      image: '☕'
    },
    {
      name: 'Lokhemat',
      description: 'Sweet dumplings drizzled with date syrup',
      price: '7 OMR',
      image: '🧁'
    }
  ];

  const fastFoodItems = [
    {
      name: 'Fusion Burger',
      description: 'Beef patty with Omani spice blend, local cheese, and harissa mayo',
      price: '8 OMR',
      image: '🍔',
      isSignature: true
    },
    {
      name: 'Shawarma Wrap',
      description: 'Marinated chicken with tahini sauce and fresh vegetables',
      price: '6 OMR',
      image: '🌯'
    },
    {
      name: 'Spiced Fries',
      description: 'Crispy fries seasoned with traditional Omani spices',
      price: '5 OMR',
      image: '🍟'
    },
    {
      name: 'Frankincense Smoothie',
      description: 'Refreshing blend with dates, honey, and a hint of frankincense',
      price: '5 OMR',
      image: '🥤'
    },
    {
      name: 'Date Milkshake',
      description: 'Creamy milkshake made with fresh Omani dates',
      price: '6 OMR',
      image: '🥛'
    },
    {
      name: 'Mini Samosas',
      description: 'Crispy pastries filled with spiced vegetables or meat',
      price: '4 OMR',
      image: '🥟'
    }
  ];

  const currentMenu = activeCategory === 'omani' ? omaniDishes : fastFoodItems;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Discover our carefully crafted selection of traditional Omani dishes and modern fast food favorites
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Category Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-2 shadow-lg border border-primary/10">
                <button
                  onClick={() => setActiveCategory('omani')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === 'omani'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'text-charcoal hover:text-primary'
                  }`}
                >
                  Traditional Omani
                </button>
                <button
                  onClick={() => setActiveCategory('fastfood')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === 'fastfood'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'text-charcoal hover:text-primary'
                  }`}
                >
                  Modern Fast Food
                </button>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentMenu.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                >
                  {item.isSignature && (
                    <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-medium">
                      ⭐ Signature Dish
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="text-6xl mb-4 text-center">{item.image}</div>
                    
                    <h3 className="text-xl font-bold text-charcoal mb-3 text-center">
                      {item.name}
                    </h3>
                    
                    <p className="text-charcoal/70 leading-relaxed mb-6 text-center">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <button className="px-6 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full font-medium hover:from-primary hover:to-secondary hover:text-white transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
