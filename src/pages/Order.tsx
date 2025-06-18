
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Order = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [orderType, setOrderType] = useState('delivery');

  const menuItems = [
    {
      id: 1,
      name: 'Shuwa',
      description: 'Traditional slow-cooked lamb',
      price: 18,
      category: 'omani',
      image: '🐑'
    },
    {
      id: 2,
      name: 'Fusion Burger',
      description: 'Beef patty with Omani spices',
      price: 8,
      category: 'fastfood',
      image: '🍔'
    },
    {
      id: 3,
      name: 'Majboos',
      description: 'Fragrant spiced rice with meat',
      price: 12,
      category: 'omani',
      image: '🍚'
    },
    {
      id: 4,
      name: 'Shawarma Wrap',
      description: 'Marinated chicken wrap',
      price: 6,
      category: 'fastfood',
      image: '🌯'
    }
  ];

  const addToCart = (item: any) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Order <span className="text-primary">Online</span>
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Enjoy our delicious fusion cuisine from the comfort of your home
            </p>
          </div>
        </section>

        {/* Order Type Selection */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-2 shadow-lg border border-primary/10">
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    orderType === 'delivery'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'text-charcoal hover:text-primary'
                  }`}
                >
                  🚚 Delivery
                </button>
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    orderType === 'pickup'
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'text-charcoal hover:text-primary'
                  }`}
                >
                  🏪 Pickup
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Menu Items */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-charcoal mb-8">Select Items</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-4xl mb-4 text-center">{item.image}</div>
                    <h3 className="text-lg font-bold text-charcoal mb-2">{item.name}</h3>
                    <p className="text-charcoal/70 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{item.price} OMR</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-md transform hover:scale-105 transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Your Order</h2>
                
                {cart.length === 0 ? (
                  <div className="text-center text-charcoal/50 py-8">
                    <div className="text-4xl mb-4">🛒</div>
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{item.image}</span>
                            <div>
                              <h4 className="font-medium text-charcoal">{item.name}</h4>
                              <p className="text-sm text-charcoal/70">{item.price} OMR each</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-colors"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-primary/10 pt-4 mb-6">
                      <div className="flex justify-between items-center text-lg font-bold text-charcoal">
                        <span>Total:</span>
                        <span className="text-primary">{getTotalPrice()} OMR</span>
                      </div>
                    </div>

                    <button className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      Proceed to Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
