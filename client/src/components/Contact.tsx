import React, { useState } from 'react';
import { isValidEmail } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
      isValid = false;
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
      isValid = false;
    }
    
    // Validate service
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when field is changed
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setFormSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };
  
  return (
    <section id="contact" className="py-5 py-md-6 bg-light">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Book Your Consultation & Claim Your 20% Discount!
            </h2>
            <p className="mb-4">
              Ready to elevate your style? Fill out the form to schedule a consultation. 
              As a new client, you'll receive a 20% discount on your first order.
            </p>
            
            <div className="mb-5">
              <h4 className="font-heading text-xl font-semibold text-primary mb-3">Contact Information</h4>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-geo-alt-fill text-secondary me-3" style={{ fontSize: '1.5rem' }}></i>
                <p className="m-0">123 Savile Row, London, UK</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill text-secondary me-3" style={{ fontSize: '1.5rem' }}></i>
                <p className="m-0">+44 20 1234 5678</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill text-secondary me-3" style={{ fontSize: '1.5rem' }}></i>
                <p className="m-0">info@kingsmantailors.com</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-clock-fill text-secondary me-3" style={{ fontSize: '1.5rem' }}></i>
                <div>
                  <p className="m-0">Monday - Friday: 9am - 6pm</p>
                  <p className="m-0">Saturday: 10am - 4pm</p>
                  <p className="m-0">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-5">
              <h4 className="font-heading text-xl font-semibold text-primary mb-3">Follow Us</h4>
              <div className="d-flex">
                <a href="#" className="me-3 btn btn-outline-secondary rounded-circle p-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-3 btn btn-outline-secondary rounded-circle p-2">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="me-3 btn btn-outline-secondary rounded-circle p-2">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-secondary rounded-circle p-2">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                {!formSubmitted ? (
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                        id="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                        id="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        placeholder="+44 20 1234 5678" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="service" className="form-label">
                        Service Inquiry <span className="text-danger">*</span>
                      </label>
                      <select 
                        className={`form-select ${errors.service ? 'is-invalid' : ''}`} 
                        id="service" 
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="bespoke-suits">Bespoke Suits</option>
                        <option value="shirt-tailoring">Shirt Tailoring</option>
                        <option value="alterations">Alterations</option>
                        <option value="consultation">Style Consultation</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows={4} 
                        placeholder="Tell us more about your requirements..." 
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 py-3">
                      Book Consultation & Claim 20% Discount
                    </button>
                  </form>
                ) : (
                  <div className="alert alert-success mt-4">
                    <h5 className="alert-heading font-heading">Thank you for your inquiry!</h5>
                    <p>
                      We've received your message and will contact you shortly to confirm your 
                      consultation appointment. Your 20% discount has been added to your account 
                      and will be applied to your first order.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
