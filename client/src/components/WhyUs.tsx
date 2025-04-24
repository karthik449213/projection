import React from 'react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: 'bi-award',
      title: 'Expert Craftsmanship',
      description: 'Our master tailors bring decades of experience and meticulous attention to every stitch and seam.'
    },
    {
      icon: 'bi-rulers',
      title: 'Personalized Fittings',
      description: 'Every client receives individual attention with multiple fittings to ensure the perfect fit.'
    },
    {
      icon: 'bi-layers',
      title: 'Premium Materials',
      description: 'We source only the finest fabrics from renowned mills in Italy and the UK for superior quality and feel.'
    },
    {
      icon: 'bi-watch',
      title: 'Lasting Style',
      description: 'Our garments are crafted to stand the test of time, both in durability and timeless design.'
    }
  ];

  return (
    <section id="whyUs" className="py-5 py-md-6 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="font-heading text-4xl font-bold text-primary mb-3">Why Our Shop is Unique?</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            We blend traditional craftsmanship with modern style to create garments of exceptional quality and fit.
          </p>
        </div>
        
        <div className="row g-4 mt-3">
          {features.map((feature, index) => (
            <div className="col-md-3 text-center" key={index}>
              <div className="p-4">
                <div className="mb-4 text-secondary">
                  <i className={`bi ${feature.icon}`} style={{ fontSize: '3rem' }}></i>
                </div>
                <h3 className="h4 font-heading font-semibold text-primary">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
