import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

// Lazy load heavy components
const ModelsSection = lazy(() => import('./components/ModelsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

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
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
        <ModelsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading...</div>}>
        <AboutSection />
      </Suspense>
      <StatsSection />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading...</div>}>
        <ContactSection />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
