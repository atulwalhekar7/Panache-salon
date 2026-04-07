import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    tag: "Signature Hair Care",
    title: ["Artistry in", "Every Strand"],
    sub: "Expert styling & restorative treatments tailored to your unique beauty.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "Advanced Skin Rituals",
    title: ["Glow Like", "Never Before"],
    sub: "Bespoke facials & skin rituals designed to restore your natural radiance.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "Beauty Academy Training",
    title: ["Learn. Create.", "Transform Lives"],
    sub: "Hands-on professional training in hair, skin & makeup by industry experts.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 4,
    tag: "Certified Courses",
    title: ["Turn Passion", "Into Profession"],
    sub: "Industry-recognised academy programs that launch real beauty careers.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1920&auto=format&fit=crop",
  },
];

const MARQUEE =
  "Best Beauty Salon & Academy  ✦  Hair · Skin · Makeup · Nails  ✦  Professional Courses  ✦  Certified Training  ✦  Panachè Beauty  ✦  ";

export default function PanacheBanner() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const prevRef = useRef<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => {
      prevRef.current = active;
      setActive((p) => (p + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 5800);
    return () => clearInterval(t);
  }, [active]);

  const goTo = (i: number) => {
    if (i === active) return;
    prevRef.current = active;
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ─────────────────────────────────────────
           FULL-BLEED WRAPPER
           Breaks out of ANY parent padding/max-width
        ───────────────────────────────────────── */
        #pb-root {
          box-sizing: border-box;
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          height: auto;
          min-height: 100svh;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        #pb-root * {
          box-sizing: border-box;
        }

        /* ── BG SLIDES ── */
        .pb-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.08);
          transition: opacity 1.6s ease, transform 7s ease;
          z-index: 0;
          will-change: opacity, transform;
          pointer-events: none;
        }
        .pb-bg.active  { opacity: 1; transform: scale(1);    z-index: 1; }
        .pb-bg.leaving { opacity: 0; transform: scale(0.97); z-index: 1; }

        /* ── DARK OVERLAY ── */
        .pb-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            170deg,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.48) 45%,
            rgba(0,0,0,0.78) 100%
          );
          pointer-events: none;
        }

        /* ── MARQUEE TOP BAR ── */
        .pb-marquee {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 20;
          overflow: hidden;
          white-space: nowrap;
          padding: 12px 0;
          background: rgba(0,0,0,0.32);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(232,201,163,0.28);
        }
        .pb-marquee-track {
          display: inline-block;
          animation: pb-scroll 50s linear infinite;
        }
        .pb-marquee-track span {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #FAD9B3;
        }
        @media (max-width: 768px) {
          .pb-marquee-track span {
            font-size: 16px;
            animation-duration: 60s;
          }
        }
@keyframes pb-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Highlight glow animation for buttons */
        @keyframes highlight-glow {
          0%, 100% {
            box-shadow: 0 4px 16px rgba(232, 201, 163, 0.3);
            transform: translateY(0) scale(1);
          }
          50% {
            box-shadow: 0 8px 32px rgba(227, 154, 158, 0.6), 0 0 40px rgba(232, 201, 163, 0.4);
            transform: translateY(-3px) scale(1.02);
          }
        }

        /* ── TAGLINE STRIP (below marquee, fixed) ── */
        .pb-tagline {
          position: absolute;
          top: 65px;
          left: 0; right: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 30px 20px;
          background: rgba(0,0,0,0.22);
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }
        .pb-tagline-divider {
          width: 28px;
          height: 1px;
          background: rgba(232,201,163,0.5);
        }
        .pb-tagline-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.30em;
          text-transform: uppercase;
          color: #ffffff;
          white-space: nowrap;
        }

        /* ── VERTICAL SIDE TEXT ── */
        .pb-side {
          position: absolute;
          left: 26px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          z-index: 6;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }

        /* ── CENTER STAGE ── */
        .pb-stage {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 32px 130px;
        }

        /* pill tag */
        .pb-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #E8C9A3;
          border: 1px solid rgba(232,201,163,0.42);
          padding: 7px 22px;
          border-radius: 100px;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(10px);
          animation: pb-up 0.6s ease 0.05s forwards;
        }

        /* main heading */
        .pb-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.4rem, 9.5vw, 8rem);
          font-weight: 600;
          line-height: 1.0;
          color: #ffffff;
          margin: 0 0 22px;
          opacity: 0;
          transform: translateY(22px);
          animation: pb-up 0.78s ease 0.18s forwards;
        }
        .pb-heading .line1 { display: block; }
        .pb-heading .line2 {
          display: block;
          font-style: italic;
          font-weight: 300;
          color: #f5f5f5;
        }

        /* subtitle */
        .pb-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.88rem, 1.6vw, 1.06rem);
          font-weight: 300;
          color: rgba(255,255,255,0.78);
          max-width: 490px;
          line-height: 1.82;
          margin: 0 0 40px;
          opacity: 0;
          transform: translateY(14px);
          animation: pb-up 0.78s ease 0.32s forwards;
        }

        /* action row */
        .pb-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transform: translateY(12px);
          animation: pb-up 0.78s ease 0.46s forwards;
        }

        .pb-cta {
          background: #E39A9E;
          color: #000000 !important;
          border: none;
          padding: 15px 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, transform 0.25s, box-shadow 0.3s;
          box-shadow: none;
        }
.pb-cta:hover {
          background: #E8C9A3;
          color: #000000 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(227,154,158,0.4);
          animation: highlight-glow 1.5s ease-in-out infinite;
        }

        .pb-outline {
          background: transparent;
          color: #ffffff !important;
          border: 1.5px solid rgba(255,255,255,0.42);
          padding: 15px 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          transition: border-color 0.3s, background 0.3s, transform 0.25s;
        }
.pb-outline:hover {
          border-color: #E39A9E;
          background: rgba(227,154,158,0.12);
          color: #ffffff !important;
          transform: translateY(-2px);
          animation: highlight-glow 1.5s ease-in-out infinite;
        }

        /* Focus states for accessibility */
        .pb-cta:focus, .pb-outline:focus {
          outline: none;
          animation: highlight-glow 1.5s ease-in-out infinite;
        }

        @keyframes pb-up {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── SLIDE DOTS ── */
        .pb-dots {
          position: absolute;
          // bottom: 86px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 8;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .pb-dot {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          border: none;
          background: rgba(255,255,255,0.28);
          cursor: pointer;
          padding: 0;
          transition: width 0.35s ease, background 0.35s ease;
        }
        .pb-dot.on {
          background: #E39A9E;
          width: 26px;
        }

        /* ── BOTTOM INFO BAR ── */
        .pb-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 8;
          display: flex;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .pb-cell {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 16px 10px;
          background: rgba(0,0,0,0.44);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .pb-cell:last-child { border-right: none; }

        .pb-cell-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #E8C9A3;
        }
        .pb-cell-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.04em;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .pb-side { display: none; }

          .pb-stage {
            padding: 110px 20px 170px;
          }

          .pb-heading {
            font-size: clamp(2.8rem, 13vw, 5rem);
          }

          .pb-actions {
            flex-direction: column;
            width: 100%;
            max-width: 290px;
          }
          .pb-cta, .pb-outline {
            width: 100%;
            padding: 14px 24px;
          }

          .pb-bar { flex-wrap: wrap; }
          .pb-cell { flex: 1 1 50%; }
          .pb-cell:nth-child(2) { border-right: none; }
          .pb-cell:nth-child(1),
          .pb-cell:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }

          .pb-tagline-text { font-size: 9px; letter-spacing: 0.22em; }
        }

        @media (max-width: 420px) {
          .pb-heading { font-size: clamp(2.4rem, 14vw, 3.5rem); }
          .pb-tag { font-size: 9px; letter-spacing: 0.22em; }
        }
      `}</style>

      <div id="pb-root">

        {/* ── BACKGROUND IMAGES ── */}
        {slides.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            alt={s.tag}
            className={`pb-bg${
              i === active ? " active" : i === prevRef.current ? " leaving" : ""
            }`}
          />
        ))}

        {/* ── OVERLAY ── */}
        <div className="pb-overlay" />

        {/* ── MARQUEE ── */}
        <div className="pb-marquee" aria-hidden="true">
          <div className="pb-marquee-track">
            <span>{MARQUEE.repeat(8)}</span>
          </div>
        </div>

        {/* ── TAGLINE STRIP (fixed below marquee) ── */}
        <div className="pb-tagline" aria-label="Best Beauty Salon & Academy">
          <div className="pb-tagline-divider" />
          <span className="pb-tagline-text">Best Beauty Salon &amp; Academy</span>
          <div className="pb-tagline-divider" />
        </div>

        {/* ── SIDE LABEL ── */}
        {/* <div className="pb-side" aria-hidden="true">
          Salon &amp; Academy · Est. 2024
        </div> */}

        {/* ── CENTRE CONTENT (re-mounts on slide change for animation) ── */}
        <div className="pb-stage" key={animKey}>
          <span className="pb-tag">{slides[active].tag}</span>
          <h1 className="pb-heading">
            <span className="line1">{slides[active].title[0]}</span>
            <span className="line2">{slides[active].title[1]}</span>
          </h1>
          <p className="pb-sub">{slides[active].sub}</p>
          <div className="pb-actions">
            <button className="pb-cta" onClick={scrollToServices}>
              Explore Services
            </button>
            <a
              href="https://wa.me/919637616697"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-outline"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Now
            </a>
          </div>
        </div>

        {/* ── DOTS ── */}
        <div className="pb-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`pb-dot${i === active ? " on" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        {/* <div className="pb-bar">
          <div className="pb-cell">
            <span className="pb-cell-lbl">Speciality</span>
            <span className="pb-cell-val">Hair · Skin · Makeup</span>
          </div>
          <div className="pb-cell">
            <span className="pb-cell-lbl">Academy</span>
            <span className="pb-cell-val">Certified Courses</span>
          </div>
          <div className="pb-cell">
            <span className="pb-cell-lbl">Location</span>
            <span className="pb-cell-val">Panachè Studio</span>
          </div>
          <div className="pb-cell">
            <span className="pb-cell-lbl">Contact</span>
            <span className="pb-cell-val">+91 98907 94670</span>
          </div>
        </div> */}

      </div>
    </>
  );
}