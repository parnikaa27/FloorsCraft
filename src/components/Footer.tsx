import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      'Hardwood Flooring',
      'Vinyl Flooring',
      'SPC Flooring',
      'Laminate Flooring',
      'WPC Decking',
      'WPC Doors'
    ],
    services: [
      'Installation',
      'Maintenance',
      'Consultation',
      'Project Management',
      'Warranty Service',
      'Custom Solutions'
    ],
    company: [
      'About Us',
      'Project Gallery',
      'Testimonials',
      'Careers',
      'News & Updates',
      'Sustainability'
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-beige-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Floors<span className="text-amber-400">Craft</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming spaces with premium flooring <br /> solutions for over 25 years. 
              Quality, craftsmanship, <br /> and customer satisfaction are at the heart of <br /> everything we do.
            </p>

            {/* Social Media */}
            {/* <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>

            {/* Contact Info */}

         <div>
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">+960 9310373</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                  <span className="text-gray-300">manager@floorscraft.com</span>
              </div>
              <div className="flex items-center">
                <a
                  href="https://wa.me/9609310373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-500 flex items-center"
                >
                <FaWhatsapp className="h-6 w-6 mr-2" />
                <span className="text-gray-300">Chat on WhatsApp</span>
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-1" />
                  <span className="text-gray-300">
                    Building: R.G. Tower – Ground and First Floor <br />
                    Region: Henveiru <br />
                    Road: Hithah Finivaa Magu <br />
                    Postal code: 20084
                  </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xlfont-semibold mb-4 text-amber-400">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} FloorsCraft. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
