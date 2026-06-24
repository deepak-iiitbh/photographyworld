import React from 'react';

export default function RealWeddings() {
  return (
    <section class="real-weddings-section theme-ivory section-spacing" id="real-weddings">
      <div class="container">
        
        <div class="section-header reveal">
          <p class="label-caps">Selected Portfolios</p>
          <h2 class="serif-heading">Real <span class="serif-italic">Weddings</span></h2>
          <p class="body-editorial subtitle">Explore full wedding collections. We show comprehensive stories, showing artistic focus from prep to the late hours.</p>
        </div>

        <div class="real-weddings-grid">
          
          {/* Story Block 1 */}
          <article class="story-block reveal">
            <div class="story-media-col">
              <div class="story-img-container img-reveal-container">
                <img src="/assets/wedding_1.png" alt="Indian couple walking under hanging crystal chandeliers in marble hall" />
              </div>
            </div>
            <div class="story-info-col">
              <p class="label-caps">Editorial / Jaipur</p>
              <h3 class="serif-heading story-headline">The Glass House Chandelier Union</h3>
              <div class="story-details-meta">
                <span>Couple: <strong>Ananya & Devansh</strong></span>
                <span>Year: <strong>2026</strong></span>
              </div>
              <p class="body-editorial">
                Set in a custom glass pavilion surrounded by three thousand burning candles and lush pastel floristry. A celebration that combined cinematic scale with absolute intimacy.
              </p>
              <a href="#" class="btn-editorial" onClick={(e) => e.preventDefault()}>View Collection <span class="arrow">➔</span></a>
            </div>
          </article>

          {/* Story Block 2 (Alternated layout) */}
          <article class="story-block alt reveal">
            <div class="story-media-col">
              <div class="story-img-container img-reveal-container">
                <img src="/assets/wedding_2.png" alt="Bride reflecting in an antique mirror during morning prep" />
              </div>
            </div>
            <div class="story-info-col">
              <p class="label-caps">Portraits / New Delhi</p>
              <h3 class="serif-heading story-headline">Reflections of a Heritage Bridal Dawn</h3>
              <div class="story-details-meta">
                <span>Couple: <strong>Priyanka & Rishabh</strong></span>
                <span>Year: <strong>2025</strong></span>
              </div>
              <p class="body-editorial">
                An artistic study of the quiet moments preceding the ceremony. Photographed entirely using raw ambient light, celebrating detailed embroidery, gold heritage ornaments, and soft shadows.
              </p>
              <a href="#" class="btn-editorial" onClick={(e) => e.preventDefault()}>View Collection <span class="arrow">➔</span></a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
