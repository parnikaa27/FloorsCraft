import React from 'react';
// import { Award, Users, Clock, Shield } from 'lucide-react';

const About: React.FC = () => {
  /*
  const stats = [
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: Users, number: '10K+', label: 'Happy Customers' },
    { icon: Clock, number: '48h', label: 'Quick Installation' },
    { icon: Shield, number: '100%', label: 'Quality Guarantee' }
  ];
  */

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-beige-200 via-beige-200 to-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About FloorsCraft
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              FloorsCraft has been at the forefront of flooring innovation, 
              providing premium solutions that combine exceptional quality with timeless design. 
              We specialize in hardwood, vinyl, SPC, laminate flooring, and comprehensive WPC products.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence extends beyond products to encompass exceptional service, 
              expert installation, and ongoing support. We believe that great flooring is an investment 
              in your space's future, and we're here to help you make the perfect choice.
            </p>
            
            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-beige-700 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Materials</h4>
                  <p className="text-gray-600">Only the finest materials from trusted manufacturers worldwide</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-beige-700 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Installation</h4>
                  <p className="text-gray-600">Professional installation teams with years of experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-beige-700 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lifetime Support</h4>
                  <p className="text-gray-600">Ongoing maintenance and support for all our installations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/jason-hafso-YypTXBPF5S4-unsplash.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="FloorsCraft Team"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        {/*
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default About;