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
          'Professional installation with precision'
        ],
        specifications: {
          'Thickness': 'Standard: 3/4" solid, 1/2" to 5/8" engineered - Customisable',
          'Width': 'Standard: 3" to 7" planks available - Customisable',
          'Finish': 'Pre-finished and unfinished options',
          'Installation': 'Nail-down, glue-down, floating'
        },
        gallery: [
  { image: '/hardwood.jpg', code: 'HWX9421' },
  { image: '/hardwood1.webp', code: 'HWX9478' },
  { image: '/hardwood2.webp', code: 'HWX9512' },
  { image: '/hardwood3.webp', code: 'HWX9384' },
  { image: '/hardwood4.jpg', code: 'HWX9653' },
  { image: '/hardwood5.webp', code: 'HWX9726' }
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
          'Thickness': 'Standard: 4mm to 8mm luxury vinyl planks - Customisable',
          'Width': 'Standard: 6" to 9" planks, 12" to 24" tiles - Customisable',
          'Wear Layer': '12mil to 28mil commercial grade',
          'Installation': 'Click-lock floating system'
        },
       gallery: [
{ image: '/dKTV1246.webp', code: 'FCV1246' },
{ image: '/dKTV1816.webp', code: 'FCV1816' },
{ image: '/dKTV2139.webp', code: 'FCV2139' },
{ image: '/dKTV2270.webp', code: 'FCV2270' },
{ image: '/dKTV3509.webp', code: 'FCV3509' },
{ image: '/dKTV3757.webp', code: 'FCV3757' },
{ image: '/dKTV8004.webp', code: 'FCV8004' },
{ image: '/dKTV8011.webp', code: 'FCV8011' },
{ image: '/dKTV8012.webp', code: 'FCV8012' },
{ image: '/dKTV8013.webp', code: 'FCV8013' },
{ image: '/dKTV8015.webp', code: 'FCV8015' },
{ image: '/dKTV8019.webp', code: 'FCV8019' },
{ image: '/dKTV8023.webp', code: 'FCV8023' },
{ image: '/dKTV8031.webp', code: 'FCV8031' },
{ image: '/dKTV8032.webp', code: 'FCV8032' }
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
          'Thickness': 'Standard: 6mm to 8mm total thickness - Customisable',
          'Width': 'Standard: 6" to 9" planks - Customisable',
          'Wear Layer': 'Real wood veneer with protective coating',
          'Core': 'Stone Plastic Composite'
        },
        gallery: [
{ image: '/aKTWV0105.webp', code: 'FCWV0105' },
{ image: '/aKTWV0902.webp', code: 'FCWV0902' },
{ image: '/aKTWV1002.webp', code: 'FCWV1002' },
{ image: '/aKTWV1004.webp', code: 'FCWV1004' },
{ image: '/aKTWV1005.webp', code: 'FCWV1005' },
{ image: '/aKTWV1007.webp', code: 'FCWV1007' },
{ image: '/aKTWV1008.webp', code: 'FCWV1008' },
{ image: '/aKTWV1011.webp', code: 'FCWV1011' },
{ image: '/aKTWV1147.webp', code: 'FCWV1147' },
{ image: '/aKTWV1161.webp', code: 'FCWV1161' },
{ image: '/aKTWV1166.webp', code: 'FCWV1166' },
{ image: '/aKTWV1241.webp', code: 'FCWV1241' },
{ image: '/aKTWV1242.webp', code: 'FCWV1242' },
{ image: '/aKTWV3031.webp', code: 'FCWV3031' },
{ image: '/aWV1001.webp', code: 'FCWV1001' },
{ image: '/aWV1003.webp', code: 'FCWV1003' }
]
      },
      'solid-hardwood-flooring': {
        title: 'Solid Hardwood Flooring',
        subtitle: 'Traditional elegance in pure wood',
        description: 'Our solid hardwood flooring represents the pinnacle of traditional flooring craftsmanship. Made from single pieces of natural wood, these floors offer unmatched authenticity and the ability to be refinished multiple times throughout their lifetime.',
        features: [
          '100% solid wood construction',
          'Multiple refinishing opportunities',
          'Authentic wood grain and character',
          'Long-lasting durability and value',
          'Natural temperature regulation',
          'Timeless aesthetic appeal'
        ],
        specifications: {
          'Thickness': 'Standard: 3/4" solid wood planks - Customisable',
          'Width': 'Standard: 2.25" to 5" planks available - Customisable',
          'Species': 'Oak, Maple, Cherry, Walnut, Hickory',
          'Installation': 'Nail-down over subfloor'
        },
        gallery: [
  { image: '/hardwood.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'SHW301' },
  { image: '/hardwood1.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'SHW302' },
  { image: '/hardwood5.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'SHW303' },
  { image: '/hardwood3.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'SHW304' },
  { image: '/hardwood4.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'SHW305' },
  { image: '/hardwood2.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'SHW306' }
]
      },
      'engineered-hardwood-flooring': {
        title: 'Engineered Hardwood Flooring',
        subtitle: 'Modern engineering meets natural beauty',
        description: 'Our engineered hardwood flooring combines a real wood veneer top layer with a stable plywood or HDF core. This construction provides enhanced dimensional stability while maintaining the authentic look and feel of solid hardwood.',
        features: [
          'Real wood veneer surface layer',
          'Enhanced dimensional stability',
          'Suitable for below-grade installation',
          'Multiple installation methods available',
          'Resistant to humidity changes',
          'Can be refinished (depending on veneer thickness)'
        ],
        specifications: {
          'Thickness': 'Standard: 3/8" to 3/4" total thickness - Customisable',
          'Veneer Layer': 'Standard: 2mm to 6mm real wood - Customisable',
          'Core': 'Multi-layer plywood or HDF',
          'Installation': 'Nail-down, glue-down, or floating'
        },
        gallery: [
  { image: '/hardwood2.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'ENG401' },
  { image: '/hardwood4.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'ENG402' },
  { image: '/hardwood1.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'ENG403' },
  { image: '/hardwood3.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'ENG404' },
  { image: '/hardwood5.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'ENG405' },
  { image: '/hardwood.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'ENG406' }
]
      },
      'standard-spc-flooring': {
        title: 'SPC Flooring',
        subtitle: 'Rigid core technology for ultimate stability',
        description: 'Our SPC flooring features a rigid stone plastic composite core that provides exceptional stability and durability. Ideal for high-traffic areas and commercial applications with superior performance characteristics.',
        features: [
          'Rigid stone plastic composite core',
          '100% waterproof throughout',
          'Superior indentation resistance',
          'Temperature stable - no expansion/contraction',
          'Easy maintenance and cleaning',
          'VOC-free and eco-friendly'
        ],
        specifications: {
          'Thickness': 'Standard: 4mm to 6mm - Customisable',
          'Width': 'Standard: 6" to 9" planks - Customisable',
          'Core': 'Stone Plastic Composite',
          'Installation': 'Click-lock floating'
        },
        gallery: [
{ image: '/bKTV1714.webp', code: 'FCV1714' },
{ image: '/bKTV1816.webp', code: 'FCV1816' },
{ image: '/bKTV2056.webp', code: 'FCV2056' },
{ image: '/bKTV2309.webp', code: 'FCV2309' },
{ image: '/bKTV4038.webp', code: 'FCV4038' },
{ image: '/bKTV4058.webp', code: 'FCV4058' },
{ image: '/bKTV8005.webp', code: 'FCV8005' },
{ image: '/bKTV8020.webp', code: 'FCV8020' },
{ image: '/bKTV8022.webp', code: 'FCV8022' },
{ image: '/bKTV8024.webp', code: 'FCV8024' },
{ image: '/bKTV8025.webp', code: 'FCV8025' },
{ image: '/bKTV8030.webp', code: 'FCV8030' },
{ image: '/bKTV8033.webp', code: 'FCV8033' },
{ image: '/bKTV8034.webp', code: 'FCV8034' },
{ image: '/bKTV8035.webp', code: 'FCV8035' },
{ image: '/bKTV8036.webp', code: 'FCV8036' }
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
          'Thickness': 'Standard: 5mm to 7mm - Customisable',
          'Width': 'Standard: 6" to 9" planks - Customisable',
          'Core': 'Flexible Stone Plastic Composite',
          'Installation': 'Click-lock or glue-down'
        },
        gallery: [
  { image: '/flexiblespc1.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FSP601' },
  { image: '/flexiblespc2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FSP602' },
  { image: '/flexible3.png?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FSP603' },
  { image: '/flexible4.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FSP604' },
  { image: '/flexible5.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FSP605' },
  { image: '/flexible6.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FSP606' }
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
          'Thickness': 'Standard: 7mm to 12mm - Customisable',
          'Width': 'Standard: 5" to 8" planks - Customisable',
          'AC Rating': 'AC3 to AC5 commercial grade',
          'Installation': 'Click-lock floating system'
        },
        gallery: [
{ image: '/cKTL300.webp', code: 'FCL300' },
{ image: '/cKTL1004.webp', code: 'FCL1004' },
{ image: '/cKTL2001.webp', code: 'FCL2001' },
{ image: '/cKTL2002.webp', code: 'FCL2002' },
{ image: '/cKTL2003.webp', code: 'FCL2003' },
{ image: '/cKTL2004.webp', code: 'FCL2004' },
{ image: '/cKTL2007.webp', code: 'FCL2007' },
{ image: '/cKTL3004.webp', code: 'FCL3004' },
{ image: '/cKTL3005.webp', code: 'FCL3005' },
{ image: '/cKTL3006.webp', code: 'FCL3006' },
{ image: '/cKTL3007.webp', code: 'FCL3007' },
{ image: '/cKTL7001.webp', code: 'FCL7001' },
{ image: '/cKTL7002.webp', code: 'FCL7002' }
]
      },
      'wpc-decking-solid': {
        title: 'WPC Decking',
        subtitle: 'Premium outdoor living solutions',
        description: 'Our WPC decking boards provide the ultimate in outdoor durability and beauty. Made from wood plastic composite materials, these boards resist weather, insects, and wear while maintaining their appearance year after year.',
        features: [
          'Solid wood plastic composite construction',
          'Weather and UV resistant',
          'Splinter-free and safe for bare feet',
          'Low maintenance - no staining required',
          'Slip-resistant textured surface',
          'Insect and rot resistant'
        ],
        specifications: {
          'Dimensions': 'Standard: 1" x 5.5" standard boards - Customisable',
          'Length': 'Standard: 12ft, 16ft, 20ft options - Customisable',
          'Material': '60% wood fiber, 40% recycled plastic',
          'Installation': 'Hidden fastener system'
        },
        gallery: [
{ image: '/gKTW30S30-5.webp', code: 'FCW30S30-5' },
{ image: '/gKTW90S20.webp', code: 'FCW90S20' },
{ image: '/gKTW100H17.webp', code: 'FCW100H17' },
{ image: '/gKTW100H20-A.webp', code: 'FCW100H20-A' },
{ image: '/gKTW138H23-C.webp', code: 'FCW138H23-C' },
{ image: '/gKTW140H25-G.webp', code: 'FCW140H25-G' },
{ image: '/gKTW140S35-A.webp', code: 'FCW140S35-A' },
{ image: '/gKTW150H25-D.webp', code: 'FCW150H25-D' },
{ image: '/gKTW150H30.webp', code: 'FCW150H30' },
{ image: '/gKTW150S25.webp', code: 'FCW150S25' },
{ image: '/gKTW160H25.webp', code: 'FCW160H25' },
{ image: '/gKTW250H25.webp', code: 'FCW250H25' }
]
      },
//       'wpc-decking-hollow': {
//         title: 'WPC Hollow Decking',
//         subtitle: 'Lightweight strength for modern decks',
//         description: 'Our hollow WPC decking combines lightweight design with exceptional strength. The hollow core design reduces weight while maintaining structural integrity, making installation easier and more cost-effective.',
//         features: [
//           'Hollow core design for reduced weight',
//           'Excellent strength-to-weight ratio',
//           'Easy installation and handling',
//           'Weather and moisture resistant',
//           'Consistent color throughout',
//           'Environmentally friendly materials'
//         ],
//         specifications: {
//           'Thickness': 'Standard: 1" x 5.5" hollow profile - Customisable',
//           'Length': 'Standard: 12ft, 16ft options - Customisable',
//           'Weight': '40% lighter than solid boards',
//           'Installation': 'Standard deck fasteners'
//         },
//         gallery: [
//   { image: '/wpcdecking1.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'WHD901' },
//   { image: '/wpcdecking2.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'WHD902' },
//   { image: '/wpcdecking5.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'WHD903' },
//   { image: '/wpchollow.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'WHD904' },
//   { image: '/wpcdecking9.avif?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'WHD905' },
//   { image: '/wpcdecking6.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'WHD906' }
// ]
//       },
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
          'Height': 'Standard: 6ft and 8ft options - Customisable',
          'Panel Width': 'Standard: 6ft - Customisable',
          'Thickness': '1" composite boards',
          'Installation': 'Post and panel system'
        },
        gallery: [
  { image: '/fence4.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FNC1001' },
  { image: '/fence2.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FNC1002' },
  { image: '/fence3.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FNC1003' },
  { image: '/fence1.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FNC1004' },
  { image: '/fence5.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FNC1005' },
  { image: '/fence6.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'FNC1006' }
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
          'Dimensions': 'Standard: 8ft x 4ft panels - Customisable',
          'Thickness': 'Standard: 3/4" composite material - Customisable',
          'Groove Spacing': '1" on center',
          'Installation': 'Wall mounting system'
        },
        gallery: [
  { image: '/panel4.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'PNL1101' },
  { image: '/panel2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'PNL1102' },
  { image: '/panel3.avif?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'PNL1103' },
  { image: '/panel1.avif?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'PNL1104' },
  { image: '/panel5.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'PNL1105' },
  { image: '/panel6.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'PNL1106' }
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
          'Thickness': 'Standard: 35mm standard, 40mm available - Customisable',
          'Sizes': 'Standard and custom sizes available',
          'Finish': 'Pre-finished and paintable options',
          'Hardware': 'Compatible with standard door hardware'
        },
        gallery: [
  { image: '/wpcdoor1.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'DRS1201' },
  { image: '/wpcdoor2.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'DRS1202' },
  { image: '/wpcdoor3.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'DRS1203' },
  { image: '/wpcdoor4.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'DRS1204' },
  { image: '/wpcdoor5.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'DRS1205' },
  { image: '/wpcdoor6.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', code: 'DRS1206' }
]
      }
    };

    return products[type] || products['hardwood-flooring'];
  };

  const product = getProductData(productType);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fade, setFade] = React.useState(true);
  const handlePageChange = (page: number) => {
  setFade(false);

  setTimeout(() => {
    setCurrentPage(page);
    setFade(true);
  }, 120); // small lag
};
  const imagesPerPage = 6;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const currentImages = product.gallery.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(product.gallery.length / imagesPerPage);

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
          style={{ backgroundImage: `url(${product.gallery[0].image})` }}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specifications</h3>
            <div className="space-y-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-600 text-right ml-4">{String(value)}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators
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
            </div> */}
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((item: any, index: number) => (
              <div
                key={index}
                className="group relative h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.code}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{product.title}</p>
                    <p className="text-xs opacity-90">{item.code}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
  <div className="flex justify-center mt-8 space-x-2">
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => handlePageChange(i + 1)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage === i + 1
            ? "bg-amber-600 text-white"
            : "bg-white text-gray-700 border hover:bg-gray-100"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
)}
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