
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Platforms', 'Ecosystems', 'Engineering', 'About Us'];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-2xl flex items-center justify-between px-6 py-3 transition-all ${isScrolled ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20' : 'border-white/10'}`}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <motion.div 
              whileHover={{ rotate: 90 }}
              className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center neon-glow-cyan transition-transform"
            >
              <Cpu className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tighter font-heading text-white">
              Arc<span className="text-cyan-400">Vion</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-slate-400 hover:text-white transition-colors relative group"
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400"
                  whileHover={{ width: '100%' }}
                ></motion.span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              LOG IN
            </button>
            <button className="px-6 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-cyan-400 transition-all flex items-center gap-2 energy-pulse">
              BUILD NOW <ChevronRight size={16} />
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="asolute top-full left-0 w-full glass mt-2 p-6 md:hidden flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-heading text-white">{item}</a>
            ))}
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl">BUILD NOW</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
