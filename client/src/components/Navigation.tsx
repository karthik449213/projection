import React, { useState, useEffect } from 'react';
import { scrollToElement } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`} 
      id="mainNav"
    >
      <div className="container">
        <a 
          className="navbar-brand font-heading text-xl font-bold" 
          href="#"
          onClick={(e) => handleNavLinkClick(e, 'hero')}
        >
          <span className="text-secondary">Kingsman</span> Tailors
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarResponsive" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className="nav-link hover:text-secondary" 
                href="#whyUs"
                onClick={(e) => handleNavLinkClick(e, 'whyUs')}
              >
                Why Us?
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link hover:text-secondary" 
                href="#services"
                onClick={(e) => handleNavLinkClick(e, 'services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link hover:text-secondary" 
                href="#testimonials"
                onClick={(e) => handleNavLinkClick(e, 'testimonials')}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link hover:text-secondary" 
                href="#gallery"
                onClick={(e) => handleNavLinkClick(e, 'gallery')}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link hover:text-secondary" 
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, 'contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
