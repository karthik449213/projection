import React, { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const carouselImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Tailored Suit"
    },
    {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Man in Bespoke Suit"
    },
    {
      src: "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Suit Details"
    },
    {
      src: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      alt: "Tailor at Work"
    }
  ];
  
  const thumbnails: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Tailoring Details"
    },
    {
      src: "https://images.unsplash.com/photo-1585412459212-8def26f7e84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Fabric Selection"
    },
    {
      src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Suit Accessories"
    },
    {
      src: "https://images.unsplash.com/photo-1598112037258-dea719dcf25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Fitting Session"
    }
  ];

  return (
    <section id="gallery" className="py-5 py-md-6 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="font-heading text-4xl font-bold text-primary mb-3">Our Showcase Gallery</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Browse our portfolio of bespoke tailoring, showcasing our finest work and attention to detail.
          </p>
        </div>
        
        <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow">
            {carouselImages.map((image, index) => (
              <div 
                className={`carousel-item ${index === activeIndex ? 'active' : ''}`} 
                key={index}
              >
                <img 
                  src={image.src} 
                  className="d-block w-100" 
                  alt={image.alt} 
                  style={{ height: '500px', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <button 
            className="carousel-control-prev" 
            type="button"
            onClick={() => setActiveIndex((activeIndex - 1 + carouselImages.length) % carouselImages.length)}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button 
            className="carousel-control-next" 
            type="button"
            onClick={() => setActiveIndex((activeIndex + 1) % carouselImages.length)}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
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
        
        <div className="row g-3 mt-4">
          {thumbnails.map((thumbnail, index) => (
            <div className="col-6 col-md-3" key={index}>
              <img 
                src={thumbnail.src} 
                className="img-fluid rounded shadow-sm" 
                alt={thumbnail.alt} 
                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
