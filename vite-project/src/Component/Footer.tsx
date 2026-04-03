/* No React import needed */

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400;500&display=swap');

        .footer {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          background: #0f0f0f;
          color: #fff;
          font-family: 'Inter', sans-serif;
          padding: 100px 8% 40px;
          position: relative;
          overflow: hidden;
        }

        /* soft glow background */
        .footer::before {
          content: "";
          position: absolute;
          top: -200px;
          right: -200px;
          width: 400px;
          height: 400px;
          background: rgba(212, 175, 55, 0.08);
          border-radius: 50%;
          filter: blur(80px);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          position: relative;
          z-index: 2;
        }

        /* BRAND */
        .brand h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #d4af37;
        }

        .brand p {
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 350px;
        }

        /* HEADINGS */
        .col h4 {
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 25px;
          color: #fff;
        }

        /* LINKS */
        .links {
          list-style: none;
          padding: 0;
        }

        .links li {
          margin-bottom: 14px;
        }

        .links a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: 0.3s;
          font-size: 0.95rem;
        }

        .links a:hover {
          color: #d4af37;
          transform: translateX(5px);
        }

        /* NEWSLETTER */
        .newsletter p {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .form {
          display: flex;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 8px;
        }

        .form input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          padding: 8px 0;
        }

        .form button {
          background: none;
          border: none;
          color: #d4af37;
          cursor: pointer;
          letter-spacing: 0.1em;
        }

        /* BOTTOM */
        .bottom {
          margin-top: 70px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }

        .socials {
          display: flex;
          gap: 25px;
        }

        .socials a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: 0.3s;
        }

        .socials a:hover {
          color: #d4af37;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .brand p {
            margin: auto;
          }

          .bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>

      {/* GRID */}
      <div className="footer-grid">

        {/* BRAND */}
        <div className="brand">
          <h2>The Panachè</h2>
          <p>
           Shop no 7,Sonigara Kesar,
           Kaspate Vasti,Kalewadi Phata,
           Wakad,Pune,Maharashtra 411057
          </p>
        </div>

        {/* NAV */}
        <div className="col">
          <h4>Navigation</h4>
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/academy">Course</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="col">
          <h4>Support</h4>
          <ul className="links">
            <li><a href="#">Booking</a></li>
            <li><a href="#">Enquiry</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter col">
          <h4>Newsletter</h4>
          <p>Join for exclusive updates & academy insights.</p>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter email" />
            <button>Join</button>
          </form>
        </div>

      </div>

      {/* BOTTOM BAR */}
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