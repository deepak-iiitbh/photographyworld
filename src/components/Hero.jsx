import React from 'react';

export default function Hero() {
  return (
    <section className="scroll-hero-container" id="section-hero">
      <div className="scroll-hero-bg" id="hero-scroll-bg">
        <img src="/assets/hero.png" alt="photographyWorld wedding editorial banner showing a couple at sunset" loading="eager" />
      </div>
      <div className="scroll-hero-content">
        <h1 className="scroll-hero-title">
          The Art of <span className="serif-italic" style={{ textTransform: 'none' }}>Devotion</span>
        </h1>
        <p className="scroll-hero-subtitle">Bespoke Wedding Editorials</p>
      </div>
    </section>
  );
}
