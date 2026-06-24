import React from 'react';

export default function FeaturedStory() {
  return (
    <section class="featured-story-section theme-charcoal section-spacing" id="section-featured-story">
      <div class="container reveal">
        <div class="featured-story-card">
          <p class="label-caps hero-label">Current Editorial Feature</p>
          <div class="featured-img-wrapper img-reveal-container">
            <img src="/assets/featured_story.png" alt="Intimate close-up of a traditional Indian wedding phera ritual" />
          </div>
          <div class="featured-meta">
            <div class="featured-text">
              <h2 class="serif-heading featured-title">A Love Lyric in <span class="serif-italic">Udaipur</span></h2>
              <p class="body-poetic">“Where heritage marble catches the fading golden light, and promises echo off ancient castle walls.”</p>
            </div>
            <div class="featured-details">
              <span><strong>Couple:</strong> Divya & Kabir</span>
              <span><strong>Location:</strong> Jagmandir Island Palace</span>
              <span><strong>Year:</strong> 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
