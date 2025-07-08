import React from 'react';
import { ArrowLeft, Star, Shield, Award, Truck } from 'lucide-react';

interface ProductPageProps {
  productType: string;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ productType, onBack }) => {
  const scrollToContact = () => {
    onBack();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getProductData = (type: string) => {
    const products: Record<string, any> = {
      'hardwood-flooring': {
        title: 'Hardwood Flooring',
        subtitle: 'Timeless elegance meets lasting durability',
        description: 'Our premium hardwood flooring collection brings the natural beauty and warmth of real wood into your space. Each plank is carefully selected and crafted to provide decades of lasting beauty with authentic grain patterns and rich textures.',
        features: [
          'Premium solid and engineered hardwood options',
          'Multiple wood species: Oak, Maple, Cherry, Walnut',
          'Refinishable surface for decades of beauty',
          'Natural grain patterns and rich textures',
          'Professional installation with precision',
          '25+ year structural warranty coverage'
        ],
        specifications: {
          'Thickness': '3/4" solid, 1/2" to 5/8" engineered',
          'Width': '3" to 7" planks available',
          'Finish': 'Pre-finished and unfinished options',
          'Installation': 'Nail-down, glue-down, floating',
          'Warranty': '25 years structural, 10 years finish'
        },
        gallery: [
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'vinyl-flooring': {
        title: 'Vinyl Flooring',
        subtitle: 'Modern luxury meets practical performance',
        description: 'Our luxury vinyl flooring combines stunning visual appeal with exceptional durability and comfort. Perfect for any room in your home, including kitchens and bathrooms, with realistic wood and stone textures.',
        features: [
          '100% waterproof construction',
          'Realistic wood and stone textures with embossing',
          'Comfortable underfoot with integrated cushioning',
          'Easy click-lock installation system',
          'Scratch, stain, and dent resistant surface',
          'Pet and family friendly with antimicrobial coating'
        ],
        specifications: {
          'Thickness': '4mm to 8mm luxury vinyl planks',
          'Width': '6" to 9" planks, 12" to 24" tiles',
          'Wear Layer': '12mil to 28mil commercial grade',
          'Installation': 'Click-lock floating system',
          'Warranty': '20 years residential, 10 years commercial'
        },
        gallery: [
          'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'wood-spc-flooring': {
        title: 'Wood SPC Flooring',
        subtitle: 'Natural wood beauty with SPC technology',
        description: 'Wood SPC flooring combines the authentic look and feel of real wood with the superior stability and waterproof properties of Stone Plastic Composite technology. Perfect for areas requiring both beauty and performance.',
        features: [
          'Real wood veneer over SPC core',
          '100% waterproof stone plastic composite base',
          'Superior dimensional stability',
          'Authentic wood grain textures and colors',
          'Click-lock installation system',
          'Commercial grade durability'
        ],
        specifications: {
          'Thickness': '6mm to 8mm total thickness',
          'Width': '6" to 9" planks',
          'Wear Layer': 'Real wood veneer with protective coating',
          'Core': 'Stone Plastic Composite',
          'Warranty': '25 years residential'
        },
        gallery: [
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'standard-spc-flooring': {
        title: 'Standard SPC Flooring',
        subtitle: 'Rigid core technology for ultimate stability',
        description: 'Our Standard SPC flooring features a rigid stone plastic composite core that provides exceptional stability and durability. Ideal for high-traffic areas and commercial applications with superior performance characteristics.',
        features: [
          'Rigid stone plastic composite core',
          '100% waterproof throughout',
          'Superior indentation resistance',
          'Temperature stable - no expansion/contraction',
          'Easy maintenance and cleaning',
          'VOC-free and eco-friendly'
        ],
        specifications: {
          'Thickness': '4mm to 6mm',
          'Width': '6" to 9" planks',
          'Core': 'Stone Plastic Composite',
          'Installation': 'Click-lock floating',
          'Warranty': '20 years residential, 15 years commercial'
        },
        gallery: [
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'flexible-spc-flooring': {
        title: 'Flexible SPC Flooring',
        subtitle: 'Comfort meets durability in flexible design',
        description: 'Flexible SPC flooring offers the stability of stone plastic composite with added flexibility for enhanced comfort underfoot. Perfect for residential applications where comfort and performance are equally important.',
        features: [
          'Flexible SPC core for comfort',
          'Waterproof and moisture resistant',
          'Enhanced underfoot comfort',
          'Reduced noise transmission',
          'Easy installation over existing floors',
          'Suitable for radiant heating systems'
        ],
        specifications: {
          'Thickness': '5mm to 7mm',
          'Width': '6" to 9" planks',
          'Core': 'Flexible Stone Plastic Composite',
          'Installation': 'Click-lock or glue-down',
          'Warranty': '20 years residential'
        },
        gallery: [
          'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'laminate-flooring': {
        title: 'Laminate Flooring',
        subtitle: 'Affordable beauty with lasting performance',
        description: 'Our high-quality laminate flooring replicates the look of natural materials at an affordable price point. Advanced printing and embossing technology creates realistic textures and patterns that are virtually indistinguishable from the real thing.',
        features: [
          'High-definition printing technology',
          'Fade resistant and UV protected',
          'Easy maintenance and cleaning',
          'Quick and easy installation',
          'Pet friendly with scratch resistance',
          'Moisture resistant core options'
        ],
        specifications: {
          'Thickness': '7mm to 12mm',
          'Width': '5" to 8" planks',
          'AC Rating': 'AC3 to AC5 commercial grade',
          'Installation': 'Click-lock floating system',
          'Warranty': '15 to 25 years residential'
        },
        gallery: [
          'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'wpc-decking-solid': {
        title: 'WPC Solid Decking',
        subtitle: 'Premium outdoor living solutions',
        description: 'Our solid WPC decking boards provide the ultimate in outdoor durability and beauty. Made from wood plastic composite materials, these boards resist weather, insects, and wear while maintaining their appearance year after year.',
        features: [
          'Solid wood plastic composite construction',
          'Weather and UV resistant',
          'Splinter-free and safe for bare feet',
          'Low maintenance - no staining required',
          'Slip-resistant textured surface',
          'Insect and rot resistant'
        ],
        specifications: {
          'Dimensions': '1" x 5.5" standard boards',
          'Length': '12ft, 16ft, 20ft options',
          'Material': '60% wood fiber, 40% recycled plastic',
          'Installation': 'Hidden fastener system',
          'Warranty': '25 years residential'
        },
        gallery: [
          'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'wpc-decking-hollow': {
        title: 'WPC Hollow Decking',
        subtitle: 'Lightweight strength for modern decks',
        description: 'Our hollow WPC decking combines lightweight design with exceptional strength. The hollow core design reduces weight while maintaining structural integrity, making installation easier and more cost-effective.',
        features: [
          'Hollow core design for reduced weight',
          'Excellent strength-to-weight ratio',
          'Easy installation and handling',
          'Weather and moisture resistant',
          'Consistent color throughout',
          'Environmentally friendly materials'
        ],
        specifications: {
          'Thickness': '1" x 5.5" hollow profile',
          'Length': '12ft, 16ft options',
          'Weight': '40% lighter than solid boards',
          'Installation': 'Standard deck fasteners',
          'Warranty': '20 years residential'
        },
        gallery: [
          'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'wpc-privacy-fence': {
        title: 'WPC Privacy Fence',
        subtitle: 'Beautiful boundaries that last',
        description: 'Our WPC privacy fencing provides the perfect combination of privacy, beauty, and durability. Made from composite materials that resist weathering, warping, and fading while requiring minimal maintenance.',
        features: [
          'Complete privacy protection',
          'Weather and UV resistant',
          'No painting or staining required',
          'Warp and crack resistant',
          'Easy installation system',
          'Multiple color options available'
        ],
        specifications: {
          'Height': '6ft and 8ft options',
          'Panel Width': '6ft standard',
          'Thickness': '1" composite boards',
          'Installation': 'Post and panel system',
          'Warranty': '20 years limited'
        },
        gallery: [
          'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'wpc-fluted-panels': {
        title: 'WPC Fluted Panels',
        subtitle: 'Architectural elegance for modern spaces',
        description: 'Our WPC fluted panels add sophisticated texture and visual interest to both interior and exterior applications. The vertical groove design creates dramatic shadow lines and contemporary appeal.',
        features: [
          'Modern fluted design pattern',
          'Interior and exterior applications',
          'Easy installation system',
          'Moisture and humidity resistant',
          'Consistent color and texture',
          'Low maintenance requirements'
        ],
        specifications: {
          'Dimensions': '8ft x 4ft panels',
          'Thickness': '3/4" composite material',
          'Groove Spacing': '1" on center',
          'Installation': 'Wall mounting system',
          'Warranty': '15 years limited'
        },
        gallery: [
          'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      },
      'wpc-doors': {
        title: 'WPC Interior Doors',
        subtitle: 'Sustainable beauty for modern interiors',
        description: 'Our WPC interior doors combine the natural look of wood with enhanced durability and moisture resistance. Perfect for any interior application with various styles and finishes available to match your décor.',
        features: [
          'Moisture resistant construction',
          'Stable structure - no warping or shrinking',
          'Multiple design styles available',
          'Easy installation process',
          'Eco-friendly composite materials',
          'Long-lasting finish options'
        ],
        specifications: {
          'Material': 'Wood Plastic Composite core',
          'Thickness': '35mm standard, 40mm available',
          'Sizes': 'Standard and custom sizes available',
          'Finish': 'Pre-finished and paintable options',
          'Hardware': 'Compatible with standard door hardware'
        },
        gallery: [
          'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        ]
      }
    };

    return products[type] || products['hardwood-flooring'];
  };

  const product = getProductData(productType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-200 via-beige-100 to-beige-300 pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-beige-900 via-amber-800 to-beige-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${product.gallery[0]})` }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl md:text-2xl opacity-90">{product.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Specifications</h3>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start border-b border-gray-100 pb-3">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600 text-right ml-4">{String(value)}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-beige-200 rounded-lg border border-beige-300">
                <Shield className="h-8 w-8 text-beige-700 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Warranty</div>
                <div className="text-xs text-gray-600">Protected</div>
              </div>
              <div className="text-center p-4 bg-beige-200 rounded-lg border border-beige-300">
                <Award className="h-8 w-8 text-beige-700 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Quality</div>
                <div className="text-xs text-gray-600">Certified</div>
              </div>
              <div className="text-center p-4 bg-beige-200 rounded-lg border border-beige-300">
                <Truck className="h-8 w-8 text-beige-700 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Installation</div>
                <div className="text-xs text-gray-600">Included</div>
              </div>
              <div className="text-center p-4 bg-beige-200 rounded-lg border border-beige-300">
                <Star className="h-8 w-8 text-beige-700 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">Rating</div>
                <div className="text-xs text-gray-600">5 Stars</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.gallery.map((image: string, index: number) => (
              <div
                key={index}
                className="group relative h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{product.title}</p>
                    <p className="text-xs opacity-90">View {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-beige-700 via-amber-700 to-beige-800 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and quote for your {product.title.toLowerCase()} project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-beige-800 px-8 py-3 rounded-lg font-semibold hover:bg-beige-100 transition-colors duration-300"
            >
              Get Free Quote
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-beige-800 transition-colors duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;