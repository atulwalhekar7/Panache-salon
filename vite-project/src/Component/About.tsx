/* No React import needed */

const AboutPage = () => {
  return (
    <div className="about-container">
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap');

        body, html {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .about-container {
          background-color: #FAF9F6;
          color: #1a1a1a;
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          // padding-bottom: 100px;
          width: 100%;
        }

        /* --- HERO SECTION --- */
        .about-hero {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background: #f0ede8;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 60px 8%;        /* padding controls height now, not fixed vh */
        }

        .section-header {
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }

        .section-tag {
          color: #E39A9E;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
        }

        .section-sub {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- Narrative Section --- */
        .section-padding {
          padding: 100px 20px;
        }


        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .image-box {
          position: relative;
        }

        .main-img {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }

        .accent-img {
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 250px;
          height: 300px;
          object-fit: cover;
          border: 15px solid #FAF9F6;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.05);
        }

        .text-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 2rem;
          font-weight: 400;
          line-height: 1.2;
        }

        /* --- Full Width Philosophy Section --- */
        .philosophy-section {
          background: #1a1a1a;
          color: #fff;
          text-align: center;
          padding: 120px 15%;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          box-sizing: border-box;
        }

        .philosophy-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          margin-bottom: 4rem;
          font-weight: 400;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }

        .phi-item h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1.5rem;
          color: #E39A9E;
        }

        .phi-item p {
          font-size: 0.95rem;
          color: #999;
          line-height: 1.8;
        }

        @media (max-width: 900px) {
          .narrative-grid { grid-template-columns: 1fr; gap: 40px; }
          .philosophy-grid { grid-template-columns: 1fr; gap: 40px; }
          .accent-img { display: none; }
          .section-padding { padding: 60px 5%; }
          .section-title { font-size: 2.2rem; }
          .about-hero { padding: 48px 6%; }
        }
      `}</style>

      {/* Hero Header */}
      <section className="about-hero">
        <div className="section-header">
          <div className="section-tag">About Us</div>
          <h2 className="section-title">The Heritage of Panachè</h2>
          <p className="section-sub">
            Founded on the belief that beauty is an intimate expression of self, we create experiences that last a lifetime.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding narrative-grid">
        <div className="image-box">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
            className="main-img"
            alt="Salon Interior"
          />
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop"
            className="accent-img"
            alt="Service Close-up"
          />
        </div>
        <div className="text-content">
          <h2>Our Philosophy of Personal Expression</h2>
          <p>
            Founded on the belief that beauty is an intimate expression of self,
            <strong> The Panachè</strong> has spent over a decade redefining
            luxury hair and skin care in Pune.
          </p>
          <p>
            We don't just offer services; we curate experiences. Our academy
            trains the next generation of masters, ensuring that the art of
            panache is preserved, perfected, and shared.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <h3>"Luxury is not a privilege, it is a standard of care."</h3>
        <div className="philosophy-grid">
          <div className="phi-item">
            <h4>Pure Integrity</h4>
            <p>We select only the finest organic products that respect your body and our environment.</p>
          </div>
          <div className="phi-item">
            <h4>Artistic Precision</h4>
            <p>Every movement is intentional. We blend classic techniques with avant-garde vision.</p>
          </div>
          <div className="phi-item">
            <h4>Modern Vision</h4>
            <p>Staying ahead of global trends to bring high-fashion artistry to your lifestyle.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;