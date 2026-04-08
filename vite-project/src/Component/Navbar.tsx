import { useState, useEffect } from "react";
import logo from "../assets/logo4-removebg-preview.png";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Course", href: "#course" },
];

export default function PanacheNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [vibrate, setVibrate] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only Call Us & Book Now vibrate every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVibrate(true);
      setTimeout(() => setVibrate(false), 650);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        .logo-img {
  height: 100px;
  width: auto;
  object-fit: contain;
  display: block;
}

:root {
--primary: #E39A9E !important;
          --secondary: #E8C9A3 !important;
          --accent-gradient: linear-gradient(135deg, #E39A9E 0%, #E8C9A3 100%) !important;
          --primary-dark: #C87A84;
          --primary-light: #F2D0D4;
          --ink: #000000;
          --white: #FFFFFF;
          --bg-light: #FAF9F6;
        }

        /* ── ANIMATIONS ── */
        @keyframes vibrate {
          0%   { transform: translateX(0) rotate(0); }
          10%  { transform: translateX(-3px) rotate(-1deg); }
          20%  { transform: translateX(3px) rotate(1deg); }
          30%  { transform: translateX(-3px) rotate(-0.5deg); }
          40%  { transform: translateX(3px) rotate(0.5deg); }
          50%  { transform: translateX(-2px); }
          60%  { transform: translateX(2px); }
          70%  { transform: translateX(-1px); }
          85%  { transform: translateX(1px); }
          100% { transform: translateX(0) rotate(0); }
        }

        @keyframes pulse-ring {
          0%   { box-shadow: 0 2px 14px rgba(227,154,158,.35), 0 0 0 0 rgba(227,154,158,.5); }
          60%  { box-shadow: 0 2px 14px rgba(227,154,158,.35), 0 0 0 9px rgba(227,154,158,0); }
          100% { box-shadow: 0 2px 14px rgba(227,154,158,.35), 0 0 0 0 rgba(227,154,158,0); }
        }

/* Removed phone-ring animation for simple icon */

        /* Only buttons get vibrate — nav links are excluded */
        .call-btn.do-vibe            { animation: vibrate 0.65s ease; }
.call-btn.do-vibe .call-icon { animation: none; /* simple icon, no ring */ }
        .nav-cta.do-vibe             { animation: vibrate 0.65s ease, pulse-ring 0.7s ease; }

        /* ── NAVBAR ── */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          background: var(--white);
          border-bottom: 1px solid transparent;
          transition: all 0.4s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.97);
          border-bottom-color: rgba(201, 151, 58, 0.22);
          box-shadow: 0 4px 28px rgba(201, 151, 58, 0.1);
        }

        .navbar-inner {
          width: 100%;
          padding: 0 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 86px;
          gap: 1.5rem;
        }



        /* ── LOGO ── */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
          cursor: pointer;
        }

        .logo-icon { width: 42px; height: 42px; }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-the {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 12px;
          color: var(--primary);
          letter-spacing: 0.06em;
        }

        .logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 600;
          background: linear-gradient(
            135deg,
            var(--primary-dark) 0%,
            var(--primary) 45%,
            var(--secondary) 75%,
            var(--primary) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.07em;
        }

        .logo-sub {
          font-family: 'Inter', sans-serif;
          font-size: 8px;
          letter-spacing: 0.22em;
          color: var(--primary-dark);
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ── NAV LINKS ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          flex: 1;
          justify-content: center;
        }

        .nav-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--gold-light);
          opacity: 0.5;
        }

        .nav-link {
          position: relative;
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          padding: 8px 18px;
          cursor: pointer;
          border-radius: 2px;
          transition: color 0.3s ease;
          display: inline-block;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2px;
          background: rgba(201, 151, 58, 0.07);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, var(--gold-dark), var(--gold-shimmer), var(--gold-dark));
          transition: width 0.35s ease;
        }

        .nav-link:hover,
        .nav-link.active { color: var(--gold-dark); }

        .nav-link:hover::before,
        .nav-link.active::before { opacity: 1; }

        .nav-link:hover::after,
        .nav-link.active::after { width: 55%; }

        /* ── ACTIONS ── */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* ── CALL BUTTON ── (Services vibe) */
        .call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 16px;
          border: 1.5px solid #000000;
          background: white;
          color: #000000;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.88rem;
          font-family: 'Cinzel', serif;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .call-btn:hover {
          background: #000000;
          color: white;
        }

        .call-icon {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }

        /* ── BOOK NOW CTA ── (Services vibe) */
        .nav-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 16px;
          border: 1.5px solid #000000;
          background: white;
          color: #000000;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.88rem;
          font-family: 'Cinzel', serif;
          font-weight: 600;
          text-transform: uppercase;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }

        .nav-cta:hover {
          background: #000000;
          color: white;
        }

        .wa-icon {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }

        /* ── HAMBURGER ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }

        .hamburger-line {
          width: 24px;
          height: 1.5px;
          background: #000000;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open .hamburger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .hamburger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 86px;
          left: 0;
          right: 0;
          bottom: 0;
          flex-direction: column;
          background: #FFFFFF !important;
          border-top: 1px solid #00000020;
          padding: 2rem;
          gap: 0.5rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          z-index: 999;
          overflow-y: auto;
        }

        .mobile-menu.open { display: flex; }

        .mobile-link {
          font-family: 'Cinzel', serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(201, 151, 58, 0.1);
          cursor: pointer;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-link:last-of-type { border-bottom: none; }

        .mobile-link:hover,
        .mobile-link.active { color: var(--gold); }

        .mobile-arrow {
          font-size: 11px;
          color: var(--gold-light);
          transition: transform 0.2s ease;
        }

        .mobile-link:hover .mobile-arrow { transform: translateX(3px); }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 1rem;
        }

        .mobile-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border: 1.5px solid #000000;
          background: white;
          color: #000000;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          transition: background 0.2s, color 0.2s;
        }

        .mobile-call:hover {
          background: #000000;
          color: white;
        }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border: 1.5px solid #000000;
          background: white;
          color: #000000;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          transition: background 0.2s, color 0.2s;
          width: 100%;
          text-decoration: none;
        }

        .mobile-cta:hover {
          background: #000000;
          color: white;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .nav-links,
          .nav-actions { display: none; }
          .hamburger { display: flex; }
          .nav-dot { display: none; }
          .navbar-inner { padding: 0 1.5rem; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">

          {/* ── LOGO ── */}
          <a className="logo" href="#home" aria-label="The Panachè Beauty Salon & Academy">
            <img src={logo} alt="The Panachè Beauty Salon & Academy Logo" className="logo-img" />
          </a>

          {/* ── DESKTOP NAV LINKS (no vibrate) ── */}
          <ul className="nav-links" role="list">
            {navLinks.map((link, i) => (
              <>
                {i > 0 && <div key={`dot-${i}`} className="nav-dot" aria-hidden="true" />}
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`nav-link${active === link.label ? " active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.slice(1));
                      if (element) {
                        const navbarHeight = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                      setActive(link.label);
                    }}
                    aria-current={active === link.label ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              </>
            ))}
          </ul>

          {/* ── ACTIONS: only these two vibrate ── */}
          <div className="nav-actions">
            <button
              className={`call-btn${vibrate ? " do-vibe" : ""}`}
              aria-label="Call us"
              onClick={() => window.location.href = "tel:+919637616697"}
            >
              <svg className="call-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us
            </button>

            {/* ── BOOK NOW — WhatsApp icon added, opens WhatsApp with same number ── */}
            <a
              href="https://wa.me/919637616697"
              target="_blank"
              rel="noopener noreferrer"
              className={`nav-cta${vibrate ? " do-vibe" : ""}`}
              aria-label="Book an appointment on WhatsApp"
            >
              {/* WhatsApp SVG icon */}
              <svg
                className="wa-icon"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096 .547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Book Now</span>
            </a>
          </div>

          {/* ── HAMBURGER (mobile) ── */}
          <button
            className={`hamburger${isOpen ? " open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>



        {/* ── MOBILE MENU ── */}
        <div className={`mobile-menu${isOpen ? " open" : ""}`} role="menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-link${active === link.label ? " active" : ""}`}
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link.href.slice(1));
                if (element) {
                  const navbarHeight = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
                setActive(link.label);
                setIsOpen(false);
              }}
            >
              {link.label}
              <span className="mobile-arrow" aria-hidden="true">→</span>
            </a>
          ))}
          <div className="mobile-actions">
            <button 
              className="mobile-call" 
              aria-label="Call us"
              onClick={() => window.location.href = "tel:+919637616697"}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us
            </button>
            {/* Mobile Book Now — WhatsApp link */}
            <a
              href="https://wa.me/919637616697"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cta"
              aria-label="Book an appointment on WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096 .547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book an Appointment
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
