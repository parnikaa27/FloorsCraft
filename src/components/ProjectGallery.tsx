import React, { useState } from 'react';
import { Filter } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Modern Living Room',
      category: 'hardwood',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Elegant hardwood flooring installation in contemporary home'
    },
    {
      id: '2',
      title: 'Kitchen Renovation',
      category: 'vinyl',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Luxury vinyl plank flooring for high-traffic kitchen area'
    },
    {
      id: '3',
      title: 'Office Complex',
      category: 'spc',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Commercial SPC flooring for professional workspace'
    },
    {
      id: '4',
      title: 'Outdoor Deck',
      category: 'wpc',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'WPC decking installation for outdoor entertainment area'
    },
    {
      id: '5',
      title: 'Bedroom Suite',
      category: 'laminate',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Premium laminate flooring in master bedroom'
    },
    {
      id: '6',
      title: 'Retail Store',
      category: 'vinyl',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Durable vinyl flooring for commercial retail space'
    },
    {
      id: '7',
      title: 'Beach Villa',
      category: 'spc',
      image: '/oxabeachvilla.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Durable vinyl flooring for commercial retail space'
    },
    {
    id: '8',
    title: 'Contemporary Master Bedroom',
    category: 'spc',
    image: '/updatespc1.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    description: 'Premium SPC flooring creating a warm and elegant bedroom ambiance.'
  },
  {
    id: '9',
    title: 'Luxury Guest Bedroom',
    category: 'spc',
    image: '/updatespc2.jpg',
    description: 'Scratch-resistant SPC flooring designed for modern guest interiors.'
  },
  {
    id: '10',
    title: 'Minimalist Bedroom Interior',
    category: 'spc',
    image: '/updatespc3.jpg',
    description: 'Natural wood-look SPC flooring complementing minimalist interior décor.'
  },
  {
    id: '11',
    title: 'Modern Indoor Lounge',
    category: 'wpc',
    image: '/wspc.jpg',
    description: 'High-quality WPC flooring offering durability with a sophisticated wood finish.'
  },
  {
    id: '12',
    title: 'Premium Residential Bedroom',
    category: 'spc',
    image: '/rigidabaspc.jpg',
    description: 'Comfortable and stylish SPC flooring installed for a premium residential space.'
  }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'hardwood', name: 'Hardwood' },
    { id: 'vinyl', name: 'Vinyl' },
    { id: 'spc', name: 'SPC' },
    { id: 'laminate', name: 'Laminate' },
    { id: 'wpc', name: 'WPC' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-beige-200 via-beige-400 to-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful flooring installations across residential and commercial projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-beige-700 to-amber-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-beige-200 hover:text-beige-800 shadow-md border border-beige-300'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-beige-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-beige-300 text-beige-900 px-2 py-1 rounded-full uppercase tracking-wide font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;