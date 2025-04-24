import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-primary text-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <h3 className="font-heading text-xl mb-3">Kingsman Tailors</h3>
            <p>Crafting the perfect gentleman's style since 1985.</p>
            <p>&copy; {new Date().getFullYear()} Kingsman Tailors. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <h4 className="font-heading text-lg mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none hover:text-secondary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none hover:text-secondary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none hover:text-secondary">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
