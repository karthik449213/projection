import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  image: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      quote: "I've been a client for over 5 years, and the quality of craftsmanship is consistently exceptional. My suits always receive compliments, and the attention to detail is unmatched.",
      name: "James Wilson",
      position: "Executive Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
      stars: 5
    },
    {
      quote: "As someone who struggles to find well-fitting suits off the rack, discovering Kingsman Tailors was a game-changer. The personalized service and attention to my specific requirements has made all the difference.",
      name: "Michael Chen",
      position: "Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
      stars: 5
    },
    {
      quote: "The team at Kingsman took care of my wedding suit with such professionalism. From fabric selection to final adjustments, they made the process enjoyable and stress-free. The final result was impeccable.",
      name: "Robert Johnson",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
      stars: 5
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-5 py-md-6 bg-primary text-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="font-heading text-4xl font-bold text-light mb-3">Client Testimonials</h2>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Read what our satisfied clients have to say about their experience with us.
          </p>
        </div>
        
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`} 
                key={index}
              >
                <div className="testimonial-card p-5 text-dark mx-auto" style={{ maxWidth: '800px' }}>
                  <div className="d-flex flex-column">
                    <div className="mb-4 text-warning">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <i className="bi bi-star-fill" key={i}></i>
                      ))}
                    </div>
                    <p className="mb-4 fst-italic">{testimonial.quote}</p>
                    <div className="d-flex align-items-center">
                      <img 
                        src={testimonial.image} 
                        className="rounded-circle me-3" 
                        alt={testimonial.name} 
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div>
                        <h5 className="m-0 font-heading">{testimonial.name}</h5>
                        <p className="text-muted m-0">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-control-prev" 
            type="button" 
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button 
            className="carousel-control-next" 
            type="button" 
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
          <div className="carousel-indicators mt-4">
            {testimonials.map((_, index) => (
              <button 
                type="button" 
                key={index}
                className={index === activeIndex ? 'active' : ''} 
                aria-current={index === activeIndex ? 'true' : 'false'} 
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
