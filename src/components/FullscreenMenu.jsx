import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FullscreenMenu({ isOpen, onClose }) {
  
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className={`menu-overlay ${isOpen ? 'active' : ''}`} id="fullscreen-menu-overlay">
      <div className="menu-header">
        <Link to="/" className="menu-logo" onClick={onClose}>photographyWorld Studio</Link>
        <button className="menu-close" id="menu-close-btn" onClick={onClose} aria-label="Close Navigation Menu"></button>
      </div>
      
      <nav className="menu-links" id="menu-navigation">
        <Link to="/" className="menu-link-item" onClick={onClose}>Home</Link>
        <Link to="/real-weddings" className="menu-link-item" onClick={onClose}>Real Weddings</Link>
        <a href="/#about" className="menu-link-item" onClick={onClose}>The Studio</a>
        <a href="/#journal" className="menu-link-item" onClick={onClose}>Blogs & Films</a>
        <a href="/#testimonials" className="menu-link-item" onClick={onClose}>Client Stories</a>
        <a href="/#contact" className="menu-link-item" onClick={onClose}>Contact Us</a>
      </nav>
      
      <div className="menu-footer">
        <div className="menu-meta">
          <p>© 2026 photographyWorld Studio. All rights reserved.</p>
          <p>Documenting luxury love stories worldwide.</p>
        </div>
        <div className="menu-socials">
          <a href="#" className="menu-social-link">Instagram</a>
          <a href="#" className="menu-social-link">Vimeo</a>
          <a href="#" className="menu-social-link">Pinterest</a>
        </div>
      </div>
    </div>
  );
}
