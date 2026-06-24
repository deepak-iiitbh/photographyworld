import React from 'react';

export default function BlackGallery() {
  return (
    <section class="black-gallery-section theme-charcoal section-spacing" id="section-showcase">
      <div class="container reveal">
        <div class="gallery-showcase-container">
          <div class="gallery-large-visual img-reveal-container">
            <img src="/assets/black_gallery.png" alt="Fine art wedding silhouette of couple on fort ramparts at night under stars" />
          </div>
          <div class="gallery-caption-group">
            <div>
              <p class="label-caps hero-label">Fine Art Portfolio</p>
              <h3 class="serif-heading">Chasing Shadows & <span class="serif-italic">Starlight</span></h3>
            </div>
            <div>
              <p class="body-editorial">
                Captured at midnight on the highest parapet of Mehrangarh Fort. This single-exposure silhouette celebrates the dramatic contrast of ancient heritage geometry against starry midnight skies, creating an image that feels entirely timeless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
