import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
