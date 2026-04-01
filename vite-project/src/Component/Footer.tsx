import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="panache-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Outfit:wght@300;400;500&display=swap');

        .panache-footer {
          background-color: #111111; /* Deep charcoal */
          color: #FFFFFF;
          font-family: 'Outfit', sans-serif;
          padding: 80px 8% 40px;
          border-top: 1px solid rgba(184, 134, 11, 0.2);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        /* Brand Column */
        .footer-brand h2 {
          font-family: 'Bodoni Moda', serif;
          font-size: 2.2rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          color: #B8860B; /* Gold */
          text-transform: uppercase;
        }

        .footer-brand p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          font-size: 0.95rem;
          max-width: 300px;
        }

        /* Link Columns */
        .footer-col h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          margin-bottom: 2rem;
          color: #FFFFFF;
          font-weight: 600;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 1rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.9rem;
          transition: 0.3s;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #B8860B;
          transform: translateX(5px);
        }

        /* Newsletter Column */
        .newsletter-box p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          display: flex;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 10px;
          transition: 0.3s;
        }

        .newsletter-form:focus-within {
          border-bottom-color: #B8860B;
        }

        .newsletter-form input {
          background: none;
          border: none;
          color: #fff;
          padding: 5px 0;
          width: 100%;
          outline: none;
          font-size: 0.9rem;
        }

        .newsletter-form button {
          background: none;
          border: none;
          color: #B8860B;
          text-transform: uppercase;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          cursor: pointer;
        }

        /* Bottom Bar */
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.05em;
        }

        .social-links {
          display: flex;
          gap: 2rem;
        }

        .social-links a {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: 0.3s;
        }

        .social-links a:hover {
          color: #B8860B;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>

      <div className="footer-grid">
        <div className="footer-brand">
          <h2>The Panachè</h2>
          <p>Elevating the art of hair and skin care through precision, passion, and the pursuit of perfection since 2015.</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/academy">Academy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="#">Booking Inquiry</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Academy Enrollment</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="newsletter-box footer-col">
          <h4>Newsletter</h4>
          <p>Join our inner circle for seasonal rituals and exclusive academy insights.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} THE PANACHÈ BEAUTY SALON & ACADEMY. ALL RIGHTS RESERVED.</p>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">FACEBOOK</a>
          <a href="#">PINTEREST</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;