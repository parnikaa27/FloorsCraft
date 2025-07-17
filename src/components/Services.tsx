import React from 'react';
import { 
  Hammer, 
  Search, 
  Palette
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Free Consultation',
      description: 'Expert advice to help you choose the perfect flooring solution for your space and budget.',
      features: ['In-home assessment', 'Material recommendations', 'Design guidance', 'Cost estimation']
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Personalized flooring designs that match your style and complement your interior décor.',
      features: ['Color matching', 'Pattern design', '3D visualization', 'Style coordination']
    },
    {
      icon: Hammer,
      title: 'Professional Installation',
      description: 'Skilled craftsmen ensure perfect installation with attention to detail and quality.',
      features: ['Certified installers', 'Quality tools', 'Clean workspace', 'Precision fitting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to installation and beyond, we provide comprehensive services 
            to ensure your flooring project is a complete success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group beige-card border-2 border-beige-500 hover:bg-beige-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-warm-brown-400"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-beige-400 to-warm-brown-400 group-hover:from-beige-700 group-hover:to-warm-brown-700 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg">
                <service.icon className="h-8 w-8 text-beige-900 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-beige-800 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-warm-brown-700 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-beige-700 via-amber-700 to-beige-800 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us today for a free consultation and discover how we can transform your space.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-beige-800 px-8 py-3 rounded-lg font-semibold hover:bg-beige-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;