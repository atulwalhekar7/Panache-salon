import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    tag: "Signature Hair Care",
    title: "Artistry in Every Strand",
    sub: "Expert styling and restorative treatments tailored to your unique beauty.",
    accent: "#B8860B",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    tag: "Advanced Skin Rituals",
    title: "The Science of Glow",
    sub: "Bespoke facials designed to restore your natural vitality and radiance.",
    accent: "#A67C00",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
  }
]

export default function HighContrastBanner() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="banner-outer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Outfit:wght@300;400;600&display=swap');

        /* Global Reset to ensure no gaps at the very top/sides of the site */
        body, html {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .banner-outer {
          position: relative;
          /* BREAKOUT TECHNIQUE: Forces 100% width even if inside a container */
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          height: 100vh;
          background: #FAF9F6;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          display: flex;
          left: 0;
        }

        /* Left Side: Content */
        .side-content {
          width: 50%; /* Equal split for a cleaner look */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 8%; /* Inner padding for text alignment */
          z-index: 10;
          background: #FAF9F6;
          box-sizing: border-box;
        }

        .tag-pill {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin-bottom: 1.5rem;
          display: block;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          color: #1a1a1a;
          line-height: 1.1;
          margin-bottom: 2rem;
          font-weight: 400;
        }

        .hero-sub {
          font-size: 1.1rem;
          color: #555;
          max-width: 450px;
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .book-btn-container {
            border-bottom: 2px solid #1a1a1a;
            width: fit-content;
            padding-bottom: 5px;
        }

        .book-btn {
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 1.2rem 3.5rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .book-btn:hover {
          background: var(--accent);
          transform: translateY(-3px);
        }

        /* Right Side: Image */
        .side-image {
          width: 50%;
          height: 100%;
          position: relative;
        }

        .img-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 2s ease;
          transform: scale(1.1);
        }

        .img-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        /* Progress Bar */
        .prog-bar-container {
          position: absolute;
          bottom: 8%;
          left: 8%;
          width: 180px;
          height: 2px;
          background: rgba(0,0,0,0.05);
        }

        .prog-fill {
          height: 100%;
          background: var(--accent);
          width: 0%;
        }

        @media (max-width: 1024px) {
          .banner-outer { flex-direction: column; height: auto; min-height: 100vh; }
          .side-content { width: 100%; padding: 120px 8% 60px; }
          .side-image { width: 100%; height: 50vh; }
          .prog-bar-container { bottom: 5%; }
        }
      `}</style>

      <div className="side-content" style={{ '--accent': slides[active].accent } as any}>
        <span className="tag-pill">{slides[active].tag}</span>
        <h1 className="hero-title">{slides[active].title}</h1>
        <p className="hero-sub">{slides[active].sub}</p>
        
        <button className="book-btn">
          Explore Services
        </button>

        <div className="prog-bar-container">
          <div 
            className="prog-fill" 
            style={{ 
              width: '100%', 
              transition: 'width 6s linear',
              visibility: 'visible' 
            }} 
            key={active} 
          />
        </div>
      </div>

      <div className="side-image">
        {slides.map((s, i) => (
          <img 
            key={s.id}
            src={s.image} 
            className={`img-slide ${i === active ? 'active' : ''}`}
            alt="The Panache Luxury Service" 
          />
        ))}
      </div>
    </div>
  )
}