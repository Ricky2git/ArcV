
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { ModularConcept } from './components/ModularConcept';
import { AILayer } from './components/AILayer';
import { WhyArcVion } from './components/WhyArcVion';
import { Industries } from './components/Industries';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-600/10 rounded-full blur-[128px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        {/* The high-conversion slider is now the primary product exploration point */}
        <ProductShowcase />
        <ModularConcept />
        <AILayer />
        <WhyArcVion />
        <Industries />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;
