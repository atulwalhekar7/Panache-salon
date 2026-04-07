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

        /* ── BEAUTY PARTICLE CANVAS ── */
        .beauty-particles {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        /* Base particle: floats up, fades in/out */
        .p {
          position: absolute;
          bottom: -60px;
          opacity: 0;
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          0%   { transform: translateY(0)    rotate(0deg)  scale(0.8); opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 0.85; }
          100% { transform: translateY(-110vh) rotate(30deg) scale(1.15); opacity: 0; }
        }

        /* ── Lipstick tube ── */
        .lipstick {
          width: 10px;
          height: 38px;
          position: relative;
        }
        .lipstick-bullet {
          width: 10px; height: 14px;
          background: linear-gradient(160deg, #F090A8, #D04060);
          border-radius: 5px 5px 0 0;
          position: absolute; top: 0;
        }
        .lipstick-collar {
          width: 10px; height: 5px;
          background: #8B3050;
          position: absolute; top: 12px;
        }
        .lipstick-body {
          width: 10px; height: 21px;
          background: linear-gradient(180deg, #C06070, #8B3050);
          border-radius: 0 0 3px 3px;
          position: absolute; top: 17px;
        }

        /* ── Mascara wand ── */
        .mascara {
          width: 6px;
          height: 50px;
          position: relative;
        }
        .mascara-handle {
          width: 6px; height: 34px;
          background: linear-gradient(180deg, #3a3a3a, #1a1a1a);
          border-radius: 3px;
          position: absolute; bottom: 0;
        }
        .mascara-brush {
          width: 14px; height: 18px;
          background: #111;
          border-radius: 7px;
          position: absolute; top: 0; left: -4px;
          box-shadow:
            -5px 2px 0 1px #222,
            -5px 5px 0 1px #222,
            -5px 8px 0 1px #222,
            -5px 11px 0 1px #222,
             5px 2px 0 1px #222,
             5px 5px 0 1px #222,
             5px 8px 0 1px #222,
             5px 11px 0 1px #222;
        }

        /* ── Nail polish bottle ── */
        .nailpolish {
          width: 14px;
          height: 36px;
          position: relative;
        }
        .nailpolish-cap {
          width: 10px; height: 10px;
          background: linear-gradient(180deg, #A04060, #7a2840);
          border-radius: 3px 3px 0 0;
          position: absolute; top: 0; left: 2px;
        }
        .nailpolish-neck {
          width: 6px; height: 5px;
          background: #8B3050;
          position: absolute; top: 9px; left: 4px;
        }
        .nailpolish-bottle {
          width: 14px; height: 22px;
          background: linear-gradient(160deg, #F090A8 10%, #C04060 60%, #A03050);
          border-radius: 4px 4px 5px 5px;
          position: absolute; top: 14px;
          overflow: hidden;
        }
        .nailpolish-shine {
          width: 3px; height: 14px;
          background: rgba(255,255,255,0.25);
          border-radius: 2px;
          position: absolute; top: 4px; left: 3px;
        }

        /* ── Sparkle ── */
        .sparkle {
          width: 16px; height: 16px;
          position: relative;
        }
        .sparkle::before,
        .sparkle::after {
          content: '';
          position: absolute;
          background: #FFD6E0;
          border-radius: 1px;
        }
        .sparkle::before {
          width: 2px; height: 16px;
          top: 0; left: 7px;
        }
        .sparkle::after {
          width: 16px; height: 2px;
          top: 7px; left: 0;
        }
        .sparkle-diag::before {
          content: '';
          position: absolute;
          width: 2px; height: 11px;
          background: rgba(255,214,224,0.6);
          border-radius: 1px;
          top: 2.5px; left: 7px;
          transform: rotate(45deg);
        }
        .sparkle-diag::after {
          content: '';
          position: absolute;
          width: 2px; height: 11px;
          background: rgba(255,214,224,0.6);
          border-radius: 1px;
          top: 2.5px; left: 7px;
          transform: rotate(-45deg);
        }

        /* ── Petal ── */
        .petal {
          width: 10px; height: 16px;
          background: radial-gradient(ellipse at 40% 30%, #F9D0DA, #E39A9E);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }

        /* ── Shimmer dot ── */
        .shimmer {
          width: 8px; height: 8px;
          background: radial-gradient(circle, #FFD6E0 0%, #E39A9E 60%, transparent 100%);
          border-radius: 50%;
        }

        /* ── Heart ── */
        .heart {
          width: 14px; height: 13px;
          position: relative;
          top: 3px;
        }
        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 8px; height: 13px;
          background: #E39A9E;
          border-radius: 8px 8px 0 0;
        }
        .heart::before { transform: rotate(-45deg); left: 0; top: -3px; }
        .heart::after  { transform: rotate(45deg);  left: 6px; top: -3px; }

        /* ── Individual particle positions & timings ── */
        .p1  { left: 5%;  animation-duration: 14s; animation-delay:  0s; }
        .p2  { left: 12%; animation-duration: 18s; animation-delay:  4s; }
        .p3  { left: 20%; animation-duration: 12s; animation-delay:  2s; }
        .p4  { left: 28%; animation-duration: 20s; animation-delay:  7s; }
        .p5  { left: 35%; animation-duration: 16s; animation-delay:  1s; }
        .p6  { left: 42%; animation-duration: 22s; animation-delay: 10s; }
        .p7  { left: 50%; animation-duration: 13s; animation-delay:  5s; }
        .p8  { left: 57%; animation-duration: 17s; animation-delay:  3s; }
        .p9  { left: 64%; animation-duration: 15s; animation-delay:  9s; }
        .p10 { left: 71%; animation-duration: 19s; animation-delay:  6s; }
        .p11 { left: 79%; animation-duration: 11s; animation-delay: 12s; }
        .p12 { left: 86%; animation-duration: 21s; animation-delay:  8s; }
        .p13 { left: 93%; animation-duration: 14s; animation-delay: 14s; }
        .p14 { left: 8%;  animation-duration: 23s; animation-delay: 11s; }
        .p15 { left: 46%; animation-duration: 15s; animation-delay: 16s; }
        .p16 { left: 75%; animation-duration: 18s; animation-delay: 13s; }

        /* ── Rest of footer styles ── */
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
        .col { flex: 1; }
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
        .links li, .contact-item { margin-bottom: 12px; }
        .links a, .contact-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: 0.3s;
        }
        .links a:hover, .contact-link:hover { color: #E39A9E; }
        .contact-item {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .contact-icon { width: 16px; height: 16px; }
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
        .socials { display: flex; gap: 18px; }
        .socials a {
          color: rgba(255,255,255,0.55);
          transition: 0.3s;
        }
        .socials a:hover { color: #E39A9E; }

        @media (max-width: 1024px) {
          .footer-header { flex-direction: column; gap: 24px; }
          .nav-contact { flex-direction: column; gap: 24px; }
        }
        @media (max-width: 768px) {
          .footer { padding: 50px 6% 25px; }
          .footer-header { gap: 20px; }
          .brand-section { align-items: center; }
          .location-box { flex-direction: column; align-items: center; gap: 10px; text-align: center; }
          .map-container { width: 240px; height: 160px; }
          .nav-contact { gap: 20px; }
          .bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      {/* ── BEAUTY PARTICLE ANIMATION ── */}
      <div className="beauty-particles">

        {/* Lipstick tubes */}
        <div className="p p1">
          <div className="lipstick">
            <div className="lipstick-bullet"/>
            <div className="lipstick-collar"/>
            <div className="lipstick-body"/>
          </div>
        </div>
        <div className="p p8">
          <div className="lipstick" style={{transform:'scale(0.8)'}}>
            <div className="lipstick-bullet" style={{background:'linear-gradient(160deg,#F5B0C0,#C03858)'}}/>
            <div className="lipstick-collar"/>
            <div className="lipstick-body"/>
          </div>
        </div>

        {/* Mascara wands */}
        <div className="p p3">
          <div className="mascara">
            <div className="mascara-brush"/>
            <div className="mascara-handle"/>
          </div>
        </div>
        <div className="p p11">
          <div className="mascara" style={{transform:'scale(0.85)'}}>
            <div className="mascara-brush"/>
            <div className="mascara-handle"/>
          </div>
        </div>

        {/* Nail polish bottles */}
        <div className="p p5">
          <div className="nailpolish">
            <div className="nailpolish-cap"/>
            <div className="nailpolish-neck"/>
            <div className="nailpolish-bottle">
              <div className="nailpolish-shine"/>
            </div>
          </div>
        </div>
        <div className="p p12">
          <div className="nailpolish" style={{transform:'scale(0.9)'}}>
            <div className="nailpolish-cap" style={{background:'linear-gradient(180deg,#805080,#5a2860)'}}/>
            <div className="nailpolish-neck" style={{background:'#6a3070'}}/>
            <div className="nailpolish-bottle" style={{background:'linear-gradient(160deg,#C890D8 10%,#904090 60%,#702060)'}}>
              <div className="nailpolish-shine"/>
            </div>
          </div>
        </div>

        {/* Sparkles */}
        <div className="p p2"><div className="sparkle"/></div>
        <div className="p p6"><div className="sparkle" style={{filter:'hue-rotate(20deg)'}}/></div>
        <div className="p p9"><div className="sparkle-diag sparkle"/></div>
        <div className="p p14"><div className="sparkle" style={{width:'10px',height:'10px',transform:'scale(0.7)'}}/></div>

        {/* Rose petals */}
        <div className="p p4"><div className="petal"/></div>
        <div className="p p10"><div className="petal" style={{background:'radial-gradient(ellipse at 40% 30%,#FADADD,#C07090)',transform:'rotate(35deg)'}}/></div>
        <div className="p p15"><div className="petal" style={{transform:'rotate(-20deg)',opacity:'0.85'}}/></div>

        {/* Shimmer dots */}
        <div className="p p7"><div className="shimmer"/></div>
        <div className="p p13"><div className="shimmer" style={{background:'radial-gradient(circle,#E8C9A3 0%,#C09060 60%,transparent 100%)'}}/></div>
        <div className="p p16"><div className="shimmer" style={{width:'5px',height:'5px'}}/></div>

        {/* Hearts */}
        <div className="p p6" style={{animationDelay:'15s'}}><div className="heart"/></div>
        <div className="p p11" style={{animationDelay:'18s'}}><div className="heart" style={{width:'10px',height:'9px',transform:'scale(0.75)'}}/></div>
      </div>

      {/* ── FOOTER CONTENT ── */}
      <div className="footer-header">

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
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 .99V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17S2.61 3 3 3h3.5c.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1h-2c0 3.86 3.14 7 7 7v-2c0-.55.45-1 1-1H20c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1H6.62z"/>
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