import React from 'react';

const REAL_WEDDINGS_LIST = [
  {
    couple: "Gunjan & Nehal",
    title: "A Destination Dream in Thailand",
    location: "Phuket, Thailand",
    year: "2024",
    image: "/assets/wedding_1.png"
  },
  {
    couple: "Fiza & Aditya",
    title: "A Chic Celebration in Chandigarh",
    location: "The Oberoi Sukhvilas, Chandigarh",
    year: "2023",
    image: "/assets/wedding_2.png"
  },
  {
    couple: "Aditi & Nihar",
    title: "A Dream Wedding at Sukhvilas, Chandigarh",
    location: "Chandigarh, India",
    year: "2024",
    image: "/assets/wedding_3.png"
  },
  {
    couple: "Aurushi & Keith",
    title: "A Royal Affair in Jaipur",
    location: "City Palace, Jaipur",
    year: "2025",
    image: "/assets/hero.png"
  },
  {
    couple: "Disha & Vipul",
    title: "A Timeless Wedding in Jaipur",
    location: "Rambagh Palace, Jaipur",
    year: "2025",
    image: "/assets/featured_story.png"
  },
  {
    couple: "Bhavya & Akash",
    title: "A Grand Celebration in Hyderabad",
    location: "Taj Falaknuma Palace, Hyderabad",
    year: "2025",
    image: "/assets/black_gallery.png"
  },
  {
    couple: "Shreya & Arsh",
    title: "A Royal Wedding at Udaivilas",
    location: "The Oberoi Udaivilas, Udaipur",
    year: "2023",
    image: "/assets/journal_films.png"
  },
  {
    couple: "Anushka & Divij",
    title: "A Dreamy Beachside Wedding at Sheraton",
    location: "Hua Hin, Thailand",
    year: "2021",
    image: "/assets/founder.png"
  },
  {
    couple: "Riya & Rohan",
    title: "A Sunset Devotion at Lake Palace",
    location: "Taj Lake Palace, Udaipur",
    year: "2026",
    image: "/assets/wedding_1.png"
  },
  {
    couple: "Kiara & Siddharth",
    title: "A Contemporary Grandeur in Mumbai",
    location: "Colaba, Mumbai",
    year: "2026",
    image: "/assets/wedding_2.png"
  }
];

export default function RealWeddingsPage() {
  
  // Group the 10 weddings into 5 frames (rows) containing exactly 2 items each
  const frames = [];
  for (let i = 0; i < REAL_WEDDINGS_LIST.length; i += 2) {
    frames.push(REAL_WEDDINGS_LIST.slice(i, i + 2));
  }

  return (
    <div className="real-weddings-page theme-ivory" style={{ minHeight: '100vh' }}>
      
      {/* Scroll Hero Header */}
      <section className="scroll-hero-container" id="section-real-weddings-hero">
        <div className="scroll-hero-bg" id="real-weddings-scroll-bg">
          <img src="/assets/wedding_3.png" alt="photographyWorld real weddings cover showing a couple under marigolds" loading="eager" />
        </div>
        <div className="scroll-hero-content">
          <h1 className="scroll-hero-title">Real <span className="serif-italic" style={{ textTransform: 'none' }}>Weddings</span></h1>
          <p className="scroll-hero-subtitle">Stories of Devotion</p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 'clamp(4rem, 8vw, 8rem)', paddingBottom: '6rem' }}>

        {/* 5 Frames (Rows) containing 2 weddings each */}
        <div className="real-weddings-frames-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {frames.map((pair, frameIdx) => (
            <div key={frameIdx} className="wedding-row-frame reveal">
              {pair.map((item, idx) => (
                <article key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Standardized Framed Image Box */}
                  <div className="wedding-card-img-box">
                    <img src={item.image} alt={item.title} />
                  </div>

                  {/* Serif Description Title */}
                  <h3 className="serif-heading" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', fontWeight: '400', lineHeight: '1.3' }}>
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()} 
                      style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                    >
                      {item.title}
                    </a>
                  </h3>

                  {/* Signature-style highlighted names & location below image */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '-0.5rem' }}>
                    <span className="font-cursive">{item.couple}</span>
                    <span className="font-cursive" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--color-text-muted-dark)' }}>
                      {item.location}
                    </span>
                    <span style={{ fontSize: 'var(--fs-label)', fontFamily: 'var(--font-sans)', letterSpacing: '0.15em', color: 'var(--color-text-dark)', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                      Year: {item.year}
                    </span>
                  </div>

                </article>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
