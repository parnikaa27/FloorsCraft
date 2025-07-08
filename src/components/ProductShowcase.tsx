import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
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
      features: ['Rigid Core', 'Waterproof', 'Commercial Grade']
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
      features: ['Weather Resistant', 'Low Maintenance', 'UV Protected']
    },
    {
      id: 'wpc-doors',
      name: 'Other WPC Products',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete range of WPC products including doors, panels, and privacy fencing solutions.',
      features: ['Moisture Resistant', 'Eco-Friendly', 'Various Applications']
    }
  ];

  // Split products: first 3 for first row, remaining 4 for second row
  const firstRowProducts = products.slice(0, 3);
  const secondRowProducts = products.slice(3, 7);

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

        {/* First Row: 1 heading card + 3 product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Heading Card */}
          <div className="bg-gradient-to-br from-beige-700 via-amber-700 to-beige-800 rounded-xl shadow-xl flex flex-col items-center justify-center text-center p-8 text-white min-h-[400px]">
            <Sparkles className="h-12 w-12 mb-4 text-beige-200" />
            <h3 className="text-2xl font-bold mb-4">Premium Flooring Types</h3>
            <p className="text-beige-200 mb-6 leading-relaxed">
              Explore our carefully curated collection of flooring solutions, each designed to meet specific needs and preferences.
            </p>
            <div className="flex items-center text-beige-300 font-medium">
              <span>Discover More</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>

          {/* First 3 Product Cards */}
          {firstRowProducts.map((product) => (
            <ProductCard key={product.id} product={product} onLearnMore={onLearnMore} />
          ))}
        </div>

        {/* Second Row: 4 product cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {secondRowProducts.map((product) => (
            <ProductCard key={product.id} product={product} onLearnMore={onLearnMore} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  onLearnMore: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onLearnMore }) => (
  <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[400px] flex flex-col">
    {/* Product Image */}
    <div className="relative h-48 overflow-hidden flex-shrink-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Hover Overlay */}
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
    </div>

    {/* Product Info */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
        {product.description}
      </p>
      <button 
        onClick={() => onLearnMore(product.id)}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
      >
        Learn More
        <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    </div>
  </div>
);

export default ProductShowcase;