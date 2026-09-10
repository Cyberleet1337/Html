import React, { useEffect } from 'react';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { PartnersMarquee } from './components/sections/PartnersMarquee.jsx';
import { Solutions } from './components/sections/Solutions.jsx';
import { OnePartner } from './components/sections/OnePartner.jsx';
import { FeaturedCaseStudy } from './components/sections/FeaturedCaseStudy.jsx';
import { HardwareGallery } from './components/sections/HardwareGallery.jsx';
import { WhoWeServe } from './components/sections/WhoWeServe.jsx';
import { FAQ } from './components/sections/FAQ.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <PartnersMarquee />
        <Solutions />
        <OnePartner />
        <FeaturedCaseStudy />
        <HardwareGallery />
        <WhoWeServe />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
