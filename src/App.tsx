import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage !== 'home') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={handleNavigation} />
        <ProductPage productType={currentPage} onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigation} />
      <Hero />
      <ProductShowcase onLearnMore={handleNavigation} />
      <About />
      <Services />
      <ProjectGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;