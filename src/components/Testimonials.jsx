import React, { useState } from 'react';

const TESTIMONIALS_DATA = [
  {
    quote: "“Devendra did not just photograph our wedding; he captured our souls. Every frame feels like a scene from an old romantic film. His calm presence was the greatest gift during the chaos of our celebration.”",
    author: "Alisha & Siddharth — Udaipur Destination Wedding"
  },
  {
    quote: "“From the heritage corridors of Jaipur to the sunset ceremonies, the photographyWorld team captured details we didn't even notice. The typography of our album is just as beautiful as the photos.”",
    author: "Kareena & Aditya — Jaipur Palace Union"
  },
  {
    quote: "“The film trailer made us cry. The framing, the cinematic shadows, and the quiet pacing are absolutely stunning. They are artists, not just photographers.”",
    author: "Sonia & Kabir — New Delhi Chandelier Reception"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = (e) => {
    e.preventDefault();
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
      setFade(true);
    }, 400); // Duration matches transition delay
  };

  return (
    <section class="testimonials-section theme-ivory section-spacing" id="testimonials">
      <div class="container reveal">
        <div class="testimonials-slider-container">
          <div class="testimonial-slide">
            <div class="testimonial-avatar">
              <img src="/assets/founder.png" alt="Client portrait thumbnail placeholder" />
            </div>
            <p 
              className="testimonial-quote"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease'
              }}
            >
              {TESTIMONIALS_DATA[index].quote}
            </p>
            <p 
              className="testimonial-author"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease'
              }}
            >
              {TESTIMONIALS_DATA[index].author}
            </p>
          </div>
        </div>
        <div class="testimonials-footer">
          <a 
            href="#" 
            className="btn-editorial" 
            id="view-reviews-btn"
            onClick={handleNext}
          >
            View All Reviews <span class="arrow">➔</span>
          </a>
        </div>
      </div>
    </section>
  );
}
