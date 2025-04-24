import React from 'react';
import { scrollToElement } from '@/lib/utils';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Bespoke Suits',
      description: 'Handcrafted suits tailored to your exact measurements and style preferences, ensuring the perfect fit and look.',
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Shirt Tailoring',
      description: 'Custom dress shirts made with premium fabrics and precise measurements for comfort and elegance.',
      image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Alterations',
      description: 'Professional alterations to ensure your existing garments fit perfectly and look their best.',
      image: 'https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('contact');
  };

  return (
    <section id="services" className="py-5 py-md-6 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="font-heading text-4xl font-bold text-primary mb-3">Our Services</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover our range of bespoke tailoring services, each crafted with precision and care.
          </p>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card service-card border-0 h-100 shadow-sm">
                <img 
                  src={service.image} 
                  className="card-img-top" 
                  alt={service.title} 
                  style={{ height: '240px', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="card-body p-4">
                  <h3 className="card-title h4 font-heading font-semibold text-primary">{service.title}</h3>
                  <p className="card-text text-muted">{service.description}</p>
                  <a 
                    href="#contact" 
                    className="btn btn-outline-secondary mt-3"
                    onClick={handleLearnMoreClick}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
