import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/image3.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Premium Hardwood Flooring',
      subtitle: 'Transform your space with timeless elegance',
      cta: 'Explore Hardwood'
    },
    {
      image: '/woodspcflooring3.webp?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Modern SPC Flooring',
      subtitle: 'Durable, waterproof, and beautiful',
      cta: 'Discover SPC'
    },
    {
      image: '/vinyl2.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Luxury Vinyl Solutions',
      subtitle: 'Style meets performance in every plank',
      cta: 'View Vinyl'
    },
    {
      image: '/wpcdecking8.avif?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'WPC Decking & More',
      subtitle: 'Indoor and outdoor solutions for every project',
      cta: 'Explore WPC'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            {slides[currentSlide].subtitle}
          </p>

        {/* Line and Button with Equal Spacing */}
          <div className="flex flex-col items-center space-y-8">
        {/* Decorative Line */}
            <div className="h-1 w-[70%] bg-orange-500 rounded-full"></div>

        {/* CTA Button */}
            <button className="bg-gradient-to-r from-orange-400 via-white-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2 shadow-lg">
              {slides[currentSlide].cta}
            </button>
          </div>
        </div>
      </div>
py-20 bg-gradient-to-br from-beige-100 via-beige-200 to-beige-100
      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;