import React from 'react';
import { scrollToElement } from '@/lib/utils';

const Hero: React.FC = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('contact');
  };

  return (
    <header className="hero-section d-flex align-items-center" id="hero">
      <div className="container text-center text-white">
        <h1 className="display-3 mb-4 font-heading font-bold">Crafting Your Perfect Gentleman's Style</h1>
        <p className="lead mb-5">Experience bespoke tailoring with unparalleled precision and quality.</p>
        <a 
          href="#contact" 
          className="btn btn-primary btn-lg px-5 py-3 rounded"
          onClick={handleCTAClick}
        >
          Book Our Services & Get 20% Off!
        </a>
      </div>
    </header>
  );
};

export default Hero;
