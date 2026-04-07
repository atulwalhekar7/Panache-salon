/* No React import needed */
import logo from "../assets/logo4-removebg-preview.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap');

        .footer {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          background: #0f0f0f;
          color: #fff;
          font-family: 'Inter', sans-serif;
          padding: 60px 8% 30px;
          position: relative;
          overflow: hidden;
        }

        /* BEAUTY PARTICLE ANIMATION - Makeup/Salon theme */
        .beauty-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.12;
          animation: beautyFloat 25s infinite linear;
        }
        .particle.brush1 {
          width: 12px; height: 4px; 
          background: linear-gradient(90deg, transparent, #E39A9E, #E8C9A3, transparent);
          left: 15%; animation-delay: 0s;
        }
        .particle.brush2 {
          width: 8px; height: 3px; 
          background: linear-gradient(45deg, #F2D0D4, #E39A9E);
          left: 35%; animation-delay: 8s; animation-duration: 18s;
        }
        .particle.shimmer1 {
          width: 6px; height: 6px; 
          background: radial-gradient(circle, #FFD1DC 0%, transparent 70%);
          left: 70%; animation-delay: 4s;
        }
        .particle.shimmer2 {
          width: 10px; height: 10px;
          background: radial-gradient(circle, #E8C9A3 0%, #E39A9E 50%, transparent 70%);
          left: 85%; animation-delay: 12s;
        }
        @keyframes beautyFloat {
          0% { transform: translateY(100vh) translateX(0) rotate(0deg) scale(0.8); opacity: 0; }
          8% { opacity: 0.2; scale(1); }
          85% { opacity: 0.2; }
          100% { transform: translateY(-100px) translateX(100px) rotate(180deg) scale(1.2); opacity: 0; }
        }

        .footer-header {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .brand-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          flex-shrink: 0;
        }
        .logo-click {
          cursor: pointer;
          height: 52px;
          width: auto;
        }
        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          margin: 0;
          color: #e39a9e !important;
          font-weight: 500;
        }
        .tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 400;
          margin: 0;
        }

        .locations {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
          min-width: 280px;
        }
        .location-box {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .map-container {
          flex-shrink: 0;
          width: 180px;
          height: 130px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 6px 22px rgba(0,0,0,0.4);
        }
        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        .location-text {
          flex: 1;
          color: rgba(255,255,255,0.9);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .nav-contact {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .col {
          flex: 1;
        }
        .col h4 {
          font-size: 0.76rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 18px;
          color: #fff;
        }

        .links, .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .links li, .contact-item {
          margin-bottom: 12px;
        }
        .links a, .contact-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: 0.3s;
        }
        .links a:hover, .contact-link:hover {
          color: #E39A9E;
        }

        .contact-item {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .contact-icon {
          width: 16px;
          height: 16px;
        }

        .bottom {
          margin-top: 40px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
        }
        .socials {
          display: flex;
          gap: 18px;
        }
        .socials a {
          color: rgba(255,255,255,0.55);
          transition: 0.3s;
        }
        .socials a:hover {
          color: #E39A9E;
        }

        @media (max-width: 1024px) {
          .footer-header {
            flex-direction: column;
            gap: 24px;
          }
          .nav-contact {
            flex-direction: column;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 50px 6% 25px;
          }
          .footer-header {
            gap: 20px;
          }
          .brand-section {
            align-items: center;
          }
          .location-box {
            flex-direction: column;
            align-items: center;
            gap: 10px;
            text-align: center;
          }
          .map-container {
            width: 240px;
            height: 160px;
          }
          .nav-contact {
            gap: 20px;
          }
          .bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>

      <div className="beauty-particles">
        <div className="particle brush1"></div>
        <div className="particle brush2"></div>
        <div className="particle shimmer1"></div>
        <div className="particle shimmer2"></div>
      </div>

      <div className="footer-header">
        
        {/* BRAND STACK */}
        <div className="brand-section">
          <img src={logo} alt="The Panachè Logo" className="logo-click" onClick={scrollToHome} />
          <h2 className="logo-text">The Panachè</h2>
          <p className="tagline">Luxury Salon + Academy</p>
        </div>

        <div className="locations">
          <div className="location-box">
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.9!2d73.7755!3d18.5989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1d5b4b4b4b5%3A0x4b4b4b4b4b4b4b4b!2sWakad%2C%20Pune!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="location-text">
              Shop no 7, Sonigara Kesar<br/>Kaspate Vasti, Wakad<br/>Pune 411057
            </div>
          </div>
          <div className="location-box">
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.9!2d73.8015!3d18.6189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2d5b5b5b5b5%3A0x5c5c5c5c5c5c5c5c!2sRahatani%2C%20Pune!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="location-text">
              Shop No. 6, Tapkir Mala Road<br/>Near Nayara Petrol Pump, Rahatani<br/>Pune 411017
            </div>
          </div>
        </div>

        <div className="nav-contact">
          <div className="col">
            <h4>Navigation</h4>
            <ul className="links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#course">Course</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:hello@panache.com" className="contact-link">hello@panache.com</a>
              </li>
              <li className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 .99V20c0 .55-.45 1-1 1-9.39 0-17 7.61-17 17s7.61 17 17 17 17-7.61 17-17S15.65 4 6.5 4c0-.55-.45-.99-1-.99V4c0-.55-.45-1-1-1s-.99.45-1-.99v-.01zm0 1.38c-2.87.93-5.01 3.05-5.7 5.7H6.6c.11-.36.2-.74.27-1.11-.91-1.65-1.98-3.14-3.26-4.59z"/>
                </svg>
                <a href="tel:+919890794670" className="contact-link">+91 98907 94670</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>© {year} The Panachè. All rights reserved.</p>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Pinterest</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

