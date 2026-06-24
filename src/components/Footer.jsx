import React from 'react';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. The photographyWorld team will get back to you shortly.');
    e.target.reset();
  };

  return (
    <footer class="footer-section theme-charcoal" id="contact">
      <div class="container">
        
        <div class="footer-grid reveal">
          
          {/* Brand and Info Column */}
          <div class="footer-brand">
            <h2 class="footer-logo">PHOTOGRAPHYWORLD</h2>
            <p class="footer-bio">
              We are a team of global visual storytellers based out of New Delhi, India. We travels worldwide to document luxury events, intimate celebrations, and high-end fashion campaigns.
            </p>
            <div class="footer-contact-details">
              <p>Inquiries: <a href="mailto:hello@photographyworld.com" id="contact-email-link">hello@photographyworld.com</a></p>
              <p>Studio: +91 98765 43210</p>
              <p>Address: Chanakyapuri, New Delhi, India</p>
            </div>
          </div>

          {/* Form Column */}
          <div class="footer-form-col">
            <h3 class="serif-heading footer-form-title">Tell Us Your <span class="serif-italic">Story</span></h3>
            <form class="contact-form" id="contact-inquiry-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <input type="text" id="contact-name" class="form-input" placeholder="YOUR FULL NAMES" required />
              </div>
              <div class="form-group">
                <input type="email" id="contact-email" class="form-input" placeholder="EMAIL ADDRESS" required />
              </div>
              <div class="form-group">
                <input type="text" id="contact-date" class="form-input" placeholder="WEDDING DATE (DD.MM.YYYY)" />
              </div>
              <div class="form-group">
                <input type="text" id="contact-location" class="form-input" placeholder="CELEBRATION VENUE & LOCATION" required />
              </div>
              <div class="form-group">
                <input type="text" id="contact-message" class="form-input" placeholder="MESSAGE & VISION DETAIL" required />
              </div>
              <button type="submit" class="btn-editorial" id="contact-submit-btn">Send Inquiry <span class="arrow">➔</span></button>
            </form>
          </div>

        </div>

        <div class="footer-bottom">
          <p>© 2026 photographyWorld Studio. Crafted in luxury. All rights reserved.</p>
          <div class="footer-social-links">
            <a href="#" id="social-instagram">Instagram</a>
            <a href="#" id="social-vimeo">Vimeo</a>
            <a href="#" id="social-pinterest">Pinterest</a>
            <a href="#" id="social-facebook">Facebook</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
