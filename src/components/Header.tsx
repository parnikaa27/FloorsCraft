import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 150);
  };

  const handleSubMouseEnter = (subDropdown: string) => {
    setActiveSubDropdown(subDropdown);
  };

  const scrollToSection = (sectionId: string) => {
    onNavigate?.('home');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navigationItems = [
    {
      name: 'HOME',
      onClick: () => {
        onNavigate?.('home');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      },
    },
    { name: 'ABOUT US', onClick: () => scrollToSection('about') },
    {
      name: 'FLOORING',
      dropdown: [
       
        
        { name: 'WOOD SPC FLOORING', onClick: () => onNavigate?.('wood-spc-flooring') },
        {
          name: 'SPC FLOORING',
          submenu: [
            { name: 'STANDARD SPC FLOORING', onClick: () => onNavigate?.('standard-spc-flooring') },
            { name: 'FLEXIBLE SPC FLOORING', onClick: () => onNavigate?.('flexible-spc-flooring') },
          ],
        },
        { name: 'LAMINATE FLOORING', onClick: () => onNavigate?.('laminate-flooring') },
        { name: 'VINYL FLOORING', onClick: () => onNavigate?.('vinyl-flooring') },
        { name: 'HARDWOOD FLOORING', onClick: () => onNavigate?.('hardwood-flooring') },
        {
          name: 'WPC DECKING',
          submenu: [
            { name: 'SOLID', onClick: () => onNavigate?.('wpc-decking-solid') },
            { name: 'HOLLOW', onClick: () => onNavigate?.('wpc-decking-hollow') },
          ],
        },
        {
          name: 'OTHER WPC PRODUCTS',
          submenu: [
            { name: 'WPC PRIVACY FENCE', onClick: () => onNavigate?.('wpc-privacy-fence') },
            { name: 'WPC FLUTED PANELS', onClick: () => onNavigate?.('wpc-fluted-panels') },
            { name: 'WPC DOORS', onClick: () => onNavigate?.('wpc-doors') },
          ],
        },
      ],
    },
    { name: 'SERVICES', onClick: () => scrollToSection('services') },
    { name: 'PROJECT GALLERY', onClick: () => scrollToSection('gallery') },
    { name: 'CONTACT US', onClick: () => scrollToSection('contact') },
  ];

  const handleItemClick = (item: any) => {
    if (item.onClick) item.onClick();
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  return (
    <header className="bg-stone-950 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate?.('home')}>
            <img src="/FloorsCraft Logo.png" alt="FloorsCraft Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.name === 'FLOORING' && handleMouseEnter('flooring')}
                onMouseLeave={item.name === 'FLOORING' ? handleMouseLeave : undefined}
              >
                <button
                  className="flex items-center text-white hover:text-gray-400 font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap"
                  onClick={() => {
                    if (!item.dropdown) handleItemClick(item);
                  }}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>

                {/* Dropdown for FLOORING */}
                {item.name === 'FLOORING' && activeDropdown === 'flooring' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-beige-300 py-2 z-50">
                    {item.dropdown?.map((subItem: any, index: number) => (
                      <div key={index} className="relative group">
                        <div
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-beige-100 hover:text-beige-800 flex justify-between items-center cursor-pointer"
                          onClick={() => subItem.onClick?.()}
                          onMouseEnter={() => subItem.submenu && handleSubMouseEnter(subItem.name)}
                        >
                          {subItem.name}
                          {subItem.submenu && <ChevronDown className="h-3 w-3 rotate-[-90deg]" />}
                        </div>

                        {subItem.submenu && activeSubDropdown === subItem.name && (
                          <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl border border-beige-300 py-2 z-50">
                            {subItem.submenu.map((subSubItem: any, subIndex: number) => (
                              <button
                                key={subIndex}
                                onClick={() => handleItemClick(subSubItem)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-beige-100 hover:text-beige-800 transition-colors duration-200"
                              >
                                {subSubItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* WhatsApp Icon Desktop */}
            <a
              href="https://wa.me/9609310373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-colors duration-200"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </nav>



          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-beige-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-beige-100 border-t border-beige-300">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleItemClick(item)}
                    className="block w-full text-left px-3 py-2 text-gray-800 hover:text-beige-800 hover:bg-beige-200 rounded-md font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem: any, index: number) => (
                        <div key={index}>
                          {subItem.submenu ? (
                            <div>
                              <div className="px-3 py-1 text-sm text-gray-700 font-medium">
                                {subItem.name}
                              </div>
                              <div className="ml-4 space-y-1">
                                {subItem.submenu.map((subSubItem: any, subIndex: number) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => handleItemClick(subSubItem)}
                                    className="block w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-beige-800 hover:bg-beige-200 rounded-md transition-colors duration-200"
                                  >
                                    {subSubItem.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleItemClick(subItem)}
                              className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-beige-800 hover:bg-beige-200 rounded-md transition-colors duration-200"
                            >
                              {subItem.name}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;