import React from 'react';

export default function About() {
  return (
    <section class="about-section theme-ivory section-spacing" id="about">
      <div class="container">
        
        <div class="about-monogram-container reveal">
          <div class="monogram">A</div>
        </div>

        <div class="about-intro-grid">
          
          <div class="about-img-frame img-reveal-container reveal">
            <img src="/assets/founder.png" alt="Portrait of photographyWorld Studio lead photographer holding a mirrorless camera" />
          </div>

          <div class="about-content reveal delay-1">
            <p class="label-caps">The Studio / Philosophy</p>
            <h2 class="serif-heading about-tagline">Crafting photographs that feel like <span class="serif-italic">poetry</span>, frozen in time.</h2>
            <p class="about-bio">
              Founded by Devendra Batra, photographyWorld Studio is built on the philosophy of visual calm. We reject generic poses and high-contrast digital artifacts in favor of soft natural light, warm film textures, and timeless compositions. 
            </p>
            <p class="about-bio">
              Over the last decade, we have curated and captured some of the most exclusive destination weddings globally. Our lens is silent, artistic, and entirely focused on the elegance of your celebration.
            </p>
            <blockquote class="about-quote">
              “We don’t just record what happened. We preserve how it felt, capturing the silent sighs, the nervous laughter, and the grand heritage details.”
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
