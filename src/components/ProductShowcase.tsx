import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  subcategories?: {
    id: string;
    name: string;
    description: string;
  }[];
}

interface ProductShowcaseProps {
  onLearnMore: (productId: string) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onLearnMore }) => {
  const products: Product[] = [
    {
      id: 'hardwood-flooring',
      name: 'Hardwood Flooring',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Premium solid and engineered hardwood floors that bring natural beauty and lasting value to your space.',
      features: ['100% Natural Wood', 'Refinishable Surface', '25+ Year Warranty']
    },
    {
      id: 'vinyl-flooring',
      name: 'Vinyl Flooring',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Luxury vinyl planks and tiles offering durability, comfort, and stunning visual appeal.',
      features: ['100% Waterproof', 'Easy Installation', 'Scratch Resistant']
    },
    {
      id: 'wood-spc-flooring',
      name: 'Wood SPC Flooring',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Natural wood beauty with SPC technology for superior stability and waterproof performance.',
      features: ['Real Wood Veneer', 'Waterproof Core', 'Superior Stability']
    },
    {
      id: 'spc-flooring',
      name: 'SPC Flooring',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Stone Plastic Composite flooring that combines durability with beautiful design options.',
      features: ['Rigid Core', 'Waterproof', 'Commercial Grade'],
      subcategories: [
        {
          id: 'standard-spc-flooring',
          name: 'Standard SPC',
          description: 'Rigid core technology for ultimate stability'
        },
        {
          id: 'flexible-spc-flooring',
          name: 'Flexible SPC',
          description: 'Comfort meets durability in flexible design'
        }
      ]
    },
    {
      id: 'laminate-flooring',
      name: 'Laminate Flooring',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'High-quality laminate floors that replicate natural materials at an affordable price.',
      features: ['Fade Resistant', 'Easy Maintenance', 'Pet Friendly']
    },
    {
      id: 'wpc-decking',
      name: 'WPC Decking',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Wood Plastic Composite decking for outdoor spaces that resist weather and wear.',
      features: ['Weather Resistant', 'Low Maintenance', 'UV Protected'],
      subcategories: [
        {
          id: 'wpc-decking-solid',
          name: 'Solid WPC Decking',
          description: 'Premium outdoor living solutions'
        },
        {
          id: 'wpc-decking-hollow',
          name: 'Hollow WPC Decking',
          description: 'Lightweight strength for modern decks'
        }
      ]
    },
    {
      id: 'wpc-products',
      name: 'Other WPC Products',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete range of WPC products including doors, panels, and privacy fencing solutions.',
      features: ['Moisture Resistant', 'Eco-Friendly', 'Various Applications'],
      subcategories: [
        {
          id: 'wpc-privacy-fence',
          name: 'WPC Privacy Fence',
          description: 'Beautiful boundaries that last'
        },
        {
          id: 'wpc-fluted-panels',
          name: 'WPC Fluted Panels',
          description: 'Architectural elegance for modern spaces'
        },
        {
          id: 'wpc-doors',
          name: 'WPC Interior Doors',
          description: 'Sustainable beauty for modern interiors'
        }
      ]
    }
  ];

  // Split products: first 4 for first row, remaining 3 for second row (centered)
  const firstRowProducts = products.slice(0, 4);
  const secondRowProducts = products.slice(4, 7);

  return (
    <section id="flooring" className="py-20 bg-gradient-to-br from-beige-200 via-beige-100 to-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Flooring Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium flooring solutions designed to transform your space with quality, beauty, and durability.
          </p>
        </div>

        {/* First Row: 4 product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {firstRowProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onLearnMore={onLearnMore}
            />
          ))}
        </div>

        {/* Second Row: 3 product cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
            {secondRowProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onLearnMore={onLearnMore}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  onLearnMore: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onLearnMore }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasSubcategories = product.subcategories && product.subcategories.length > 0;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    if (hasSubcategories) {
      e.preventDefault();
      setShowDropdown(!showDropdown);
    } else {
      onLearnMore(product.id);
    }
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[400px] flex flex-col">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Subcategory Indicator */}
        {hasSubcategories && (
          <div className="absolute top-3 right-3">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
              {product.subcategories!.length} Types
            </div>
          </div>
        )}

        {/* Default Hover Overlay for products without subcategories */}
        {!hasSubcategories && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-xs flex items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Subcategories Hover Overlay with Scrolling */}
        {hasSubcategories && (
          <div className="absolute inset-0 bg-gray-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-4">
            <h3 className="text-white text-lg font-bold mb-4 text-center flex-shrink-0">{product.name}</h3>
            
            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
              <div className="space-y-3 pr-2">
                {product.subcategories!.map((subcategory, index) => (
                  <div key={subcategory.id}>
                    <div 
                      className="cursor-pointer hover:bg-white/10 p-3 rounded transition-colors duration-200 group/item"
                      onClick={(e) => {
                        e.stopPropagation();
                        onLearnMore(subcategory.id);
                      }}
                    >
                      <h4 className="text-white font-semibold text-sm mb-1 group-hover/item:text-amber-200 transition-colors">
                        {subcategory.name}
                      </h4>
                      <p className="text-white/90 text-xs leading-relaxed">
                        {subcategory.description}
                      </p>
                    </div>
                    {index < product.subcategories!.length - 1 && (
                      <div className="border-t border-white/30 my-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            {product.subcategories!.length > 2 && (
              <div className="flex-shrink-0 text-center mt-2">
                <div className="text-white/60 text-xs animate-bounce">
                  ↕ Scroll for more
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {product.description}
        </p>
        
        {/* Learn More Button with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={handleLearnMoreClick}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Learn More
            {hasSubcategories ? (
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            ) : (
              <ArrowRight className="h-4 w-4 ml-2" />
            )}
          </button>

          {/* Dropdown Menu for Subcategories */}
          {hasSubcategories && showDropdown && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 max-h-48 overflow-y-auto">
              <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
                Choose a type:
              </div>
              {product.subcategories!.map((subcategory) => (
                <button
                  key={subcategory.id}
                  onClick={() => {
                    onLearnMore(subcategory.id);
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                >
                  <div className="font-medium text-sm text-gray-900">{subcategory.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{subcategory.description}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;