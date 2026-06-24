import React from 'react';

export default function Journal() {
  const handlePlayFilm = () => {
    alert("Opening cinematic film player... In a live environment, this loads the luxury Vimeo showreel.");
  };

  return (
    <section class="journal-section theme-ivory section-spacing" id="journal">
      <div class="container">
        
        <div class="section-header reveal">
          <p class="label-caps">The Journal & Films</p>
          <h2 class="serif-heading">Essays on <span class="serif-italic">Love</span> & Cinema</h2>
          <p class="body-editorial subtitle">Behind the lens guides, cinematic film releases, and thoughts on destination wedding curation.</p>
        </div>

        <div class="journal-grid">
          
          {/* Film column */}
          <div class="journal-featured-col reveal">
            <p class="label-caps" style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Featured Film Release</p>
            <div class="film-preview-card" id="film-player-card" onClick={handlePlayFilm}>
              <img src="/assets/journal_films.png" alt="Cinematic film thumbnail showing couple walking through a forest" />
              <div class="play-overlay-btn" aria-label="Play wedding film trailer">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <h3 class="serif-heading" style={{ fontSize: '2rem', marginTop: '1rem' }}>Misty Pines & Sunrise Promises</h3>
            <p class="body-editorial">Watch the trailer of our latest film captured in the foggy mornings of Himachal Pradesh. A visual tone poem of love in high altitudes.</p>
          </div>

          {/* Blog lists column */}
          <div class="journal-list-col reveal delay-1">
            <p class="label-caps" style={{ marginBottom: '1rem' }}>Recent Journal Entries</p>
            
            <article class="journal-item">
              <span class="journal-item-date label-caps">June 12, 2026</span>
              <a href="#" class="journal-item-title" onClick={(e) => e.preventDefault()}>Curating a Heritage Wardrobe: Photographic Guidelines for Royal Venues</a>
            </article>

            <article class="journal-item">
              <span class="journal-item-date label-caps">May 28, 2026</span>
              <a href="#" class="journal-item-title" onClick={(e) => e.preventDefault()}>Light, Shadows, and Sandstone: The Magic of Rajasthan Golden Hour</a>
            </article>

            <article class="journal-item">
              <span class="journal-item-date label-caps">April 19, 2026</span>
              <a href="#" class="journal-item-title" onClick={(e) => e.preventDefault()}>Analog vs Digital: Why We Still Shoot Medium Format Film for Bridals</a>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}
