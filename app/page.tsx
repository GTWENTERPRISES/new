


"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import TeamMembers from '@/components/team';
import EmpresaList from '@/components/companies';
import News from '@/components/news';
import LegalFoundationSection from '@/components/found';
import ValoresInstitucionales from '@/components/values';
import EstructuraOrganizacional from '@/components/structure';
import HistoriaCamaraComercio from '@/components/history';
import CityHistory from '@/components/city-history';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [loading, setLoading] = useState(true);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button after scrolling down 500px
      setShowScrollTop(window.scrollY > 500);
      
      // Determine active section for potential navigation highlighting
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-24 h-24 rounded-full border-4 border-t-red-600 border-r-white border-b-red-600 border-l-white"
            />
            <motion.h2 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute mt-32 text-xl font-bold text-white"
            >
              Cámara de Comercio La Maná
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        {/* Main content with sections */}
        <main>
          <section id="foundation" className="section-container">
            <LegalFoundationSection />
          </section>
          
          <section id="empresas" className="section-container bg-gray-50">
            <EmpresaList />
          </section>
          
          <section id="city" className="section-container">
            <CityHistory />
          </section>
          
          <section id="services" className="section-container bg-gray-50">
            <Services />
          </section>
          
          <section id="valores" className="section-container">
            <ValoresInstitucionales />
          </section>
          
          <section id="news" className="section-container bg-gray-50">
            <News />
          </section>
          
          <section id="estructura" className="section-container">
            <EstructuraOrganizacional />
          </section>
          
          <section id="historia" className="section-container bg-gray-50">
            <HistoriaCamaraComercio />
          </section>
          
          <section id="team" className="section-container">
            <TeamMembers />
          </section>
          
          <section id="testimonials" className="section-container bg-gray-50">
            <Testimonials />
          </section>
        </main>

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors z-40"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Index;
