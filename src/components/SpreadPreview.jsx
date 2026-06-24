import React from 'react';

export default function SpreadPreview() {
  return (
    <section class="story-preview-block theme-ivory" id="section-spread">
      <div class="container reveal">
        <div class="spread-layout">
          <div class="spread-headline-box">
            <div class="spread-titles">
              <h3 class="serif-heading">Marigold Dreams & Monsoon Petals</h3>
              <p>Meera & Samar • Jodhpur Heritage Estate</p>
            </div>
            <span class="spread-meta label-caps">Exclusive Spread</span>
          </div>
          
          <div class="spread-image img-reveal-container">
            <img src="/assets/wedding_3.png" alt="Joyful Indian wedding ceremony with couple showered in marigold flowers" />
          </div>
          
          <p class="spread-caption">
            An outdoor courtyard celebration in Jodhpur where the couple walked down the aisle amid a cascade of five hundred kilograms of fresh marigold petals. The vibrant orange tones set against pristine sandstone walls provided a stunning contrast.
          </p>
        </div>
      </div>
    </section>
  );
}
