import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function PanacheNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Cinzel:wght@400;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --gold-primary: #C9973A;
          --gold-light: #E8C46A;
          --gold-dark: #9A6F2A;
          --gold-shimmer: #F5D87A;
          --white: #FFFFFF;
          --off-white: #FAF7F2;
          --text-dark: #3A2A10;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          background: ${`var(--white)`};
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.97);
          border-bottom-color: rgba(201, 151, 58, 0.25);
          box-shadow: 0 4px 30px rgba(201, 151, 58, 0.12);
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          cursor: pointer;
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          position: relative;
        }

        .logo-text-wrap {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-the {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.85rem;
          color: var(--gold-primary);
          letter-spacing: 0.05em;
        }

        .logo-name {
          font-family: 'Cinzel', serif;
          font-size: 1.35rem;
          font-weight: 600;
          background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold-primary) 40%, var(--gold-shimmer) 70%, var(--gold-primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.06em;
        }

        .logo-sub {
          font-family: 'Cinzel', serif;
          font-size: 0.45rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          color: var(--gold-dark);
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          list-style: none;
        }

        .nav-link {
          position: relative;
          font-family: 'Cinzel', serif;
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-dark);
          text-decoration: none;
          padding: 0.55rem 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2px;
          background: linear-gradient(135deg, rgba(201,151,58,0.08), rgba(245,216,122,0.08));
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
        .nav-link.active {
          color: var(--gold-dark);
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          opacity: 1;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 60%;
        }

        /* Divider dots between links */
        .nav-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--gold-light);
          opacity: 0.5;
        }

        /* CTA Button */
        .nav-cta {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--white);
          background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold-primary) 50%, var(--gold-light) 100%);
          border: none;
          padding: 0.65rem 1.5rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 2px 16px rgba(201, 151, 58, 0.35);
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold-shimmer) 0%, var(--gold-primary) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(201, 151, 58, 0.5);
        }

        .nav-cta:hover::before {
          opacity: 1;
        }

        .nav-cta span {
          position: relative;
          z-index: 1;
        }

        /* Gold ornament line */
        .navbar-ornament {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold-primary), var(--gold-shimmer), var(--gold-primary), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .navbar.scrolled .navbar-ornament {
          opacity: 1;
        }

        /* Hamburger */
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
          background: var(--gold-primary);
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--white);
          border-top: 1px solid rgba(201,151,58,0.15);
          padding: 1rem 2rem 1.5rem;
          gap: 0.25rem;
          box-shadow: 0 8px 30px rgba(201,151,58,0.1);
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-link {
          font-family: 'Cinzel', serif;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-dark);
          text-decoration: none;
          padding: 0.9rem 0;
          border-bottom: 1px solid rgba(201,151,58,0.12);
          cursor: pointer;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-link:last-of-type {
          border-bottom: none;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: var(--gold-primary);
        }

        .mobile-link-arrow {
          font-size: 0.7rem;
          color: var(--gold-light);
          transition: transform 0.2s ease;
        }

        .mobile-link:hover .mobile-link-arrow {
          transform: translateX(3px);
        }

        .mobile-cta {
          margin-top: 1rem;
          font-family: 'Cinzel', serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--white);
          background: linear-gradient(135deg, var(--gold-dark), var(--gold-primary), var(--gold-light));
          border: none;
          padding: 0.85rem;
          cursor: pointer;
          width: 100%;
          box-shadow: 0 4px 20px rgba(201,151,58,0.3);
        }

        @media (max-width: 768px) {
          .nav-links,
          .nav-cta { display: none; }
          .hamburger { display: flex; }
          .nav-dot { display: none; }
        }

        /* Demo page background */
        body {
          background: var(--off-white);
          min-height: 100vh;
        }
      `}</style>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">

          {/* Logo */}
          <a className="logo" href="#home" aria-label="The Panachè Beauty Salon & Academy">
            <svg className="logo-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9A6F2A" />
                  <stop offset="45%" stopColor="#C9973A" />
                  <stop offset="100%" stopColor="#F5D87A" />
                </linearGradient>
              </defs>
              {/* Crown / fleur motif simplified */}
              <circle cx="22" cy="19" r="10" fill="none" stroke="url(#logoGrad)" strokeWidth="1.2" />
              <path d="M17 19 Q22 12 27 19" stroke="url(#logoGrad)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M22 12 L22 8" stroke="url(#logoGrad)" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="22" cy="7" r="1.5" fill="url(#logoGrad)" />
              <path d="M18 13 L16 10" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" />
              <path d="M26 13 L28 10" stroke="url(#logoGrad)" strokeWidth="1" strokeLinecap="round" />
              {/* Sparkles */}
              <path d="M10 10 L10.5 12 L12 12.5 L10.5 13 L10 15 L9.5 13 L8 12.5 L9.5 12 Z" fill="url(#logoGrad)" opacity="0.7" />
              <path d="M33 8 L33.3 9.3 L34.6 9.6 L33.3 9.9 L33 11.2 L32.7 9.9 L31.4 9.6 L32.7 9.3 Z" fill="url(#logoGrad)" opacity="0.7" />
            </svg>

            <div className="logo-text-wrap">
              <span className="logo-the">The</span>
              <span className="logo-name">Panachè</span>
              <span className="logo-sub">Beauty Salon & Academy</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links" role="list">
            {navLinks.map((link, i) => (
              <>
                {i > 0 && <div key={`dot-${i}`} className="nav-dot" aria-hidden="true" />}
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`nav-link${active === link.label ? " active" : ""}`}
                    onClick={() => setActive(link.label)}
                    aria-current={active === link.label ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              </>
            ))}
          </ul>

          {/* CTA */}
          <button className="nav-cta" aria-label="Book an appointment">
            <span>Book Now</span>
          </button>

          {/* Hamburger */}
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

        {/* Gold ornament line */}
        <div className="navbar-ornament" aria-hidden="true" />

        {/* Mobile Menu */}
        <div className={`mobile-menu${isOpen ? " open" : ""}`} role="menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-link${active === link.label ? " active" : ""}`}
              role="menuitem"
              onClick={() => { setActive(link.label); setIsOpen(false); }}
            >
              {link.label}
              <span className="mobile-link-arrow" aria-hidden="true">→</span>
            </a>
          ))}
          <button className="mobile-cta" aria-label="Book an appointment">Book an Appointment</button>
        </div>
      </nav>
    </>
  );
}