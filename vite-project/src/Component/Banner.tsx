import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    // tag: "Signature Hair Care",
    title: "Artistry in Every Strand",
    sub: "Expert styling and restorative treatments tailored to your unique beauty.",
    accent: "#B8860B",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    // tag: "Advanced Skin Rituals",
    title: "The Science of Glow",
    sub: "Bespoke facials designed to restore your natural vitality and radiance.",
    accent: "#A67C00",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    tag: "Beauty Academy Training",
    title: "Learn. Create. Transform.",
    sub: "Professional hands-on training in hair, skin, and makeup guided by experts.",
    accent: "#D4AF37",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    tag: "Certified Professional Courses",
    title: "Build Your Beauty Career",
    sub: "Industry-recognized academy programs designed to turn passion into profession.",
    accent: "#C89B3C",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function HighContrastBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (!el) return;
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="banner-outer">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap');

        html { scroll-behavior: smooth; }
        body, html { margin: 0; padding: 0; overflow-x: hidden; }

        .banner-outer {
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          height: 100vh;
          min-height: 600px;
          background: #FAF9F6;
          color: #1a1a1a;
        font-family: 'Inter', sans-serif;
          overflow: hidden;
          display: flex;
        }

        /* ── LEFT CONTENT ── */
        .side-content {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 8%;
          box-sizing: border-box;
          z-index: 1;
        }

        .tag-pill {
          color: var(--accent);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-sub {
          font-size: 1.1rem;
          color: #000000;
          max-width: 450px;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .book-btn {
          background: #000000;
          color: #fff;
          border: none;
          padding: 1.2rem 3.5rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.3s;
          width: fit-content;
        }

        .book-btn:hover {
          background: #E39A9E;
          transform: translateY(-3px);
        }

        /* ── RIGHT IMAGE ── */
        .side-image {
          width: 50%;
          height: 100%;
          position: relative;
          flex-shrink: 0;
        }

        .img-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.1);
          transition: opacity 1.2s ease, transform 2s ease;
        }

        .img-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        /* ── MOBILE ── */
        @media (max-width: 1024px) {
          .banner-outer {
            flex-direction: column;
            height: auto;
            min-height: 100svh;
          }

          .side-image {
            order: -1;
            width: 100%;
            height: 55vh;
            min-height: 320px;
            max-height: 500px;
            flex-shrink: 0;
          }

          .side-content {
            width: 100%;
            height: auto;
            padding: 40px 8% 56px;
            justify-content: flex-start;
          }

          .hero-title {
            font-size: clamp(1.8rem, 7vw, 3rem);
            margin-bottom: 1rem;
          }

          .hero-sub {
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }

          .book-btn {
            width: 100%;
            text-align: center;
            padding: 1rem 2rem;
          }
        }

        @media (max-width: 480px) {
          .side-image {
            height: 50vh;
            min-height: 300px;
          }

          .side-content {
            padding: 32px 6% 48px;
          }
        }
      `}</style>

      {/* LEFT CONTENT */}
      <div
        className="side-content"
        style={{ "--accent": slides[active].accent } as React.CSSProperties}
      >
        <span className="tag-pill">{slides[active].tag}</span>
        <h1 className="hero-title">{slides[active].title}</h1>
        <p className="hero-sub">{slides[active].sub}</p>
        <button className="book-btn" onClick={scrollToServices}>
          Explore Services
        </button>
      </div>

      {/* RIGHT IMAGE SLIDER */}
      <div className="side-image">
        {slides.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            className={`img-slide ${i === active ? "active" : ""}`}
            alt="Salon & Academy"
          />
        ))}
      </div>
    </div>
  );
}