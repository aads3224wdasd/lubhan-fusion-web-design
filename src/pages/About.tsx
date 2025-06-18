
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              About <span className="text-primary">Lubhan Kitchen</span>
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Discover the story behind our culinary journey and passion for bringing together traditional Omani flavors with modern dining
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal">
                  Our <span className="text-primary">Story</span>
                </h2>
                <p className="text-charcoal/70 leading-relaxed">
                  Founded in the heart of Muscat, Lubhan Kitchen was born from a vision to celebrate Oman's rich culinary heritage while embracing the convenience and flavors of modern dining. Our name "Lubhan" - meaning frankincense in Arabic - represents our deep connection to Omani culture and traditions.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  We believe that food is a bridge between generations and cultures. Our kitchen combines time-honored recipes passed down through Omani families with contemporary cooking techniques and international influences, creating a unique fusion that honors both tradition and innovation.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">🏺</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Our Mission</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  To provide an exceptional dining experience that celebrates Omani culture while satisfying modern tastes. We strive to be the bridge between traditional hospitality and contemporary convenience, serving our community with pride and passion.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🌟</div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  To become Oman's premier destination for fusion cuisine, where every meal tells a story of cultural heritage and culinary innovation. We envision a future where traditional Omani flavors are celebrated and enjoyed by people from all walks of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                The principles that guide everything we do at Lubhan Kitchen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🌿',
                  title: 'Fresh Quality',
                  description: 'We source the finest local ingredients to ensure every dish meets our high standards'
                },
                {
                  icon: '🤝',
                  title: 'Cultural Respect',
                  description: 'Honoring Omani traditions while embracing global culinary influences'
                },
                {
                  icon: '⚡',
                  title: 'Innovation',
                  description: 'Constantly evolving our menu an services to meet changing customer needs'
                },
                {
                  icon: '❤️',
                  title: 'Hospitality',
                  description: 'Treating every guest like family with warm, genuine Omani hospitality'
                }
              ].map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-3">{value.title}</h4>
                  <p className="text-charcoal/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                The passionate people behind Lubhan Kitchen's culinary excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Chef Ahmed Al-Rashid',
                  role: 'Head Chef',
                  description: 'Master of traditional Omani cuisine with 15+ years of experience',
                  avatar: '👨‍🍳'
                },
                {
                  name: 'Sara Al-Balushi',
                  role: 'Operations Manager',
                  description: 'Ensuring seamless service and exceptional customer experience',
                  avatar: '👩‍💼'
                },
                {
                  name: 'Omar Al-Hinai',
                  role: 'Innovation Chef',
                  description: 'Creating modern twists on classic dishes and new fusion concepts',
                  avatar: '👨‍🍳'
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-charcoal/70 leading-relaxed">{member.description}</p>
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

export default About;
