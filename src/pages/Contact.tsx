
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us for reservations, feedback, or any questions about our services
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-charcoal font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-charcoal font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-charcoal font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                        placeholder="+968 XXXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-charcoal font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Table Reservation</option>
                        <option value="catering">Catering Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-charcoal font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-6">Get in Touch</h2>
                  <p className="text-charcoal/70 leading-relaxed">
                    We're here to serve you with authentic Omani cuisine and modern favorites. 
                    Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Location</h3>
                      <p className="text-charcoal/70">
                        Al Qurum District<br />
                        Muscat, Sultanate of Oman<br />
                        Near Sultan Qaboos Grand Mosque
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Phone</h3>
                      <p className="text-charcoal/70">
                        Main: +968 2123 4567<br />
                        Delivery: +968 2123 4568<br />
                        Catering: +968 2123 4569
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Email</h3>
                      <p className="text-charcoal/70">
                        General: info@labhankitchen.om<br />
                        Orders: orders@labhankitchen.om<br />
                        Events: events@labhankitchen.om
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                    <div className="text-3xl">🕒</div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Opening Hours</h3>
                      <div className="text-charcoal/70 space-y-1">
                        <div className="flex justify-between">
                          <span>Sunday - Thursday:</span>
                          <span>10:00 AM - 11:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday - Saturday:</span>
                          <span>10:00 AM - 12:00 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">Find Us</h2>
              <p className="text-charcoal/70">Located in the heart of Muscat</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-charcoal/70">Interactive map will be integrated here</p>
                  <p className="text-sm text-charcoal/50 mt-2">Al Qurum District, Muscat, Oman</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
