import React, { useEffect } from 'react';
import Header from './components/Header';
import ModelsSection from './components/ModelsSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.classList.add('scroll-smooth');
    
    // Add fade-in animation to elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      document.documentElement.classList.remove('scroll-smooth');
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark text-white">
      <Header />
      <ModelsSection />
      <AboutSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
