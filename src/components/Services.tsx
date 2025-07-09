import React from 'react';
import { 
  Hammer, 
  Search, 
  Truck, 
  Shield, 
  Palette, 
  HeadphonesIcon,
  Clock,
  Award
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
    },
    {
      icon: Truck,
      title: 'Delivery & Logistics',
      description: 'Reliable delivery service ensuring your flooring materials arrive safely and on time.',
      features: ['Scheduled delivery', 'Safe handling', 'Material inspection', 'Storage solutions']
    },
    {
      icon: Shield,
      title: 'Warranty & Protection',
      description: 'Comprehensive warranty coverage and protection plans for your peace of mind.',
      features: ['Extended warranties', 'Damage protection', 'Replacement guarantee', 'Quality assurance']
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Continuous support for maintenance, care instructions, and any questions you may have.',
      features: ['24/7 helpline', 'Maintenance tips', 'Care products', 'Technical support']
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Efficient project management ensuring timely completion without compromising quality.',
      features: ['Fast scheduling', 'Efficient workflow', 'Minimal disruption', 'On-time delivery']
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure every project meets our high standards.',
      features: ['Quality inspections', 'Material testing', 'Performance standards', 'Customer satisfaction']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-beige-100 via-beige-200 to-beige-100">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-beige-200 hover:bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-beige-300 hover:border-beige-400"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-beige-400 group-hover:bg-gradient-to-br group-hover:from-beige-700 group-hover:to-amber-700 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <service.icon className="h-8 w-8 text-beige-800 group-hover:text-white transition-colors duration-300" />
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
                    <div className="w-1.5 h-1.5 bg-beige-700 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-beige-800 font-medium text-sm">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
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

        {/* Decorative Line */}
        <div className="mt-12 flex justify-center">
          <div className="h-1 w-[100%] bg-amber-600 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Services;