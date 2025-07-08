import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-beige-200 via-beige-100 to-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with our flooring experts for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-300 text-beige-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+960 9310373</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-300 text-beige-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">sales.cenpro@opromaldives.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-300 text-beige-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Building: R.G. Tower – Ground and First Floor</p>
                    <p className="text-gray-600">Region: Henveiru</p>
                    <p className="text-gray-600">Road: Hithah Finivaa Magu</p>
                    <p className="text-gray-600">Postal code: 20084</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-300 text-beige-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM – 6:00 PM</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div id="support" className="bg-beige-300 p-6 rounded-xl border border-beige-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Support?</h3>
              <p className="text-gray-600 mb-4">
                Our customer support team is here to help with any questions about your flooring project, 
                maintenance tips, or warranty claims.
              </p>
              <p className="text-gray-800 font-medium">
                Contact us on <span className="text-beige-800 font-semibold">+960 9310373</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-beige-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request a Quote</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="hardwood">Hardwood Flooring</option>
                    <option value="vinyl">Vinyl Flooring</option>
                    <option value="spc">SPC Flooring</option>
                    <option value="laminate">Laminate Flooring</option>
                    <option value="wpc">WPC Products</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors duration-200"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-beige-600 to-amber-600 hover:from-beige-700 hover:to-amber-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;