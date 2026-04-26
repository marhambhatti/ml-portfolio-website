import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Brain, User, Mail } from 'lucide-react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Models', icon: Brain, href: '#models' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-dark/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-8 h-8 text-electric-blue glow-text" />
              <span className="font-orbitron font-bold text-xl text-white">
                Muhammad Arham
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-electric-blue transition-colors duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-rajdhani font-medium">{item.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 glass-card p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-electric-blue py-2 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-rajdhani font-medium">{item.name}</span>
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <NeuralNetworkCanvas />
        
        <div className="relative z-10 text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6">
              <span className="text-electric-blue glow-text animate-glow">Muhammad</span>
              <br />
              <span className="text-cyber-green">Arham</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-rajdhani text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
              Software Engineer & ML Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#models"
              className="glass-card px-8 py-4 text-white font-rajdhani font-semibold rounded-full hover:scale-105 transition-transform duration-300 neon-border"
            >
              Explore Models
            </a>
            <a
              href="#about"
              className="border-2 border-electric-blue text-electric-blue px-8 py-4 font-rajdhani font-semibold rounded-full hover:bg-electric-blue hover:text-navy-dark transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 animate-float"
          >
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-electric-blue">9+</div>
                <div className="text-sm text-gray-400 font-rajdhani">ML Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-cyber-green">95%+</div>
                <div className="text-sm text-gray-400 font-rajdhani">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-hot-pink">3+</div>
                <div className="text-sm text-gray-400 font-rajdhani">Years Exp</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Header;
