import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="main-header" 
      id="site-header"
      style={{
        paddingTop: scrolled ? '1rem' : '1.5rem',
        paddingBottom: scrolled ? '1rem' : '1.5rem',
      }}
    >
      <Link to="/" className="brand-logo" id="header-logo">
        PHOTOGRAPHYWORLD <span>STUDIO</span>
      </Link>
      <button 
        className="menu-trigger" 
        id="menu-open-btn" 
        onClick={onMenuOpen}
        aria-label="Open Navigation Menu"
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
