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
          width: 100%;
        }

        /* HERO SECTION */
        .about-hero {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background: linear-gradient(135deg, #faf9f6 0%, #f4f0ec 100%);
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 40px 8%;
        }

        /* BEAUTY ANIMATIONS */
        .hero-glow {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(227,154,158,0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: glowPulse 4s ease-in-out infinite;
          pointer-events: none;
        }
        .brush-stroke {
          position: absolute;
          top: 60%;
          left: 15%;
          width: 80px;
          height: 6px;
          background: linear-gradient(90deg, transparent, #E39A9E, transparent);
          border-radius: 3px;
          animation: brushSweep 3s ease-out infinite;
          pointer-events: none;
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.3) rotate(180deg); opacity: 0.1; }
        }
        @keyframes brushSweep {
          0% { transform: translateX(-100px) rotate(-10deg); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateX(300px) rotate(10deg); opacity: 0; }
        }

        .section-header {
          animation: fadeInUp 1.2s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
          max-width: 800px;
        }

        .section-title {
          font-size: clamp(2.4rem, 5vw, 3.2rem);
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #E39A9E, transparent);
          animation: underlineGrow 1.5s ease-out 0.8s forwards;
        }

        .section-sub {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-family: 'Cinzel', serif;
        }

        /* NARRATIVE SECTION */
        .section-padding {
          // padding: 80px 20px; /* reduced top padding */
        }

        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .image-box {
          position: relative;
          animation: slideInLeft 1s ease-out 0.5s forwards;
          opacity: 0;
          transform: translateX(-50px);
        }
        .image-box.show {
          opacity: 1;
          transform: translateX(0);
        }

        .main-img {
          width: 100%;
          height: 580px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
          transition: transform 0.4s ease;
        }
        .image-box:hover .main-img {
          transform: scale(1.02);
        }

        .accent-img {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 220px;
          height: 280px;
          object-fit: cover;
          border: 12px solid #FAF9F6;
          border-radius: 16px;
          box-shadow: 15px 15px 40px rgba(0,0,0,0.1);
          animation: floatAccent 6s ease-in-out infinite;
        }
        @keyframes floatAccent {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .text-content {
          animation: slideInRight 1s ease-out 0.7s forwards;
          opacity: 0;
          transform: translateX(50px);
        }
        .text-content.show {
          opacity: 1;
          transform: translateX(0);
        }
        .text-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          margin-bottom: 1.8rem;
          font-weight: 400;
          line-height: 1.25;
          color: #1a1a1a;
          position: relative;
        }
        .text-content h2::before {
          content: '';
          position: absolute;
          left: -40px;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #E39A9E, transparent);
          opacity: 0;
          animation: accentLine 1.8s ease-out 1s forwards;
        }
        @keyframes accentLine {
          to { opacity: 1; }
        }
        .text-content p {
          margin-bottom: 1.4rem;
          opacity: 0;
          animation: fadeInParagraph 0.8s ease-out forwards;
        }
        .text-content p:nth-child(2) { animation-delay: 1.3s; }
        .text-content p:nth-child(3) { animation-delay: 1.6s; }
        .text-content p:nth-child(4) { animation-delay: 1.9s; }
        @keyframes fadeInParagraph {
          to { opacity: 1; transform: translateY(0); }
        }

        /* PHILOSOPHY */
        .philosophy-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
          color: #fff;
          text-align: center;
          padding: 100px 15%;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          box-sizing: border-box;
          position: relative;
        }
        .philosophy-section::before {
          content: '';
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(227,154,158,0.1) 0%, transparent 70%);
          animation: philosophyGlow 4s ease-in-out infinite;
        }
        @keyframes philosophyGlow {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.8; transform: translateX(-50%) scale(1.1); }
        }

        .philosophy-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          margin-bottom: 4rem;
          font-weight: 400;
          animation: fadeInUp 1.5s ease-out;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }

        .phi-item {
          opacity: 0;
          transform: translateY(40px) rotateX(-10deg);
          animation: phiItemRise 0.8s ease-out forwards;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .phi-item:nth-child(1) { animation-delay: 0.5s; }
        .phi-item:nth-child(2) { animation-delay: 0.7s; }
        .phi-item:nth-child(3) { animation-delay: 0.9s; }
@keyframes phiItemRise {
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        .phi-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(227,154,158,0.4);
          background: rgba(255,255,255,0.12);
          border-color: rgba(227,154,158,0.3);
        }

        .phi-item:hover h4 {
          color: #E8C9A3;
          text-shadow: 0 4px 20px rgba(232,201,163,0.6);
          transform: translateY(-2px);
        }

        .phi-item h4 {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1.8rem;
          color: #E39A9E;
          font-family: 'Cinzel', serif;
          font-weight: 600;
          text-shadow: 0 2px 10px rgba(227,154,158,0.5);
          transition: all 0.3s ease;
        }

        .phi-item p {
          font-size: 1rem;
          color: #ddd;
          line-height: 1.7;
          font-family: 'Cinzel', serif;
          flex-grow: 1;
        }

        /* GENERAL ANIMATIONS */
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes underlineGrow {
          to { width: 80px; }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .narrative-grid { 
            grid-template-columns: 1fr; 
            gap: 40px; 
          }
          .philosophy-grid { 
            grid-template-columns: 1fr; 
            gap: 40px; 
          }
          .accent-img { display: none; }
          .section-padding { padding: 60px 5%; }
          .section-title { font-size: 2.2rem; }
          .about-hero { padding: 32px 6%; }
          .phi-item h4 { font-size: 0.95rem; }
          .phi-item:hover {
            transform: translateY(-5px) scale(1.01);
          }
        }
      `}</style>

      {/* Hero Header */}
      <section className="about-hero">
        <div className="hero-glow"></div>
        <div className="brush-stroke"></div>
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
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
          <p style={{ fontFamily: 'Cinzel, serif' }}>
            Founded on the belief that beauty is an intimate expression of self,
            <strong>The Panachè</strong> has spent over a decade redefining
            luxury hair and skin care in Pune. Our journey is rooted in passion,
            precision, and a commitment to enhancing every client's natural elegance.
          </p>

          <p style={{ fontFamily: 'Cinzel, serif' }}>
            We don't just offer services; we curate experiences. From personalized
            consultations to the use of premium products and advanced techniques,
            every detail is thoughtfully designed to deliver exceptional results.
            Our space reflects comfort, sophistication, and a sense of indulgence.
          </p>

          <p style={{ fontFamily: 'Cinzel, serif' }}>
            Beyond our salon, our academy stands as a pillar of excellence. We train
            the next generation of beauty professionals, blending creativity with
            technical expertise to uphold the highest industry standards.
          </p>

          <p style={{ fontFamily: 'Cinzel, serif' }}>
            At <strong>The Panachè</strong>, we believe confidence begins with how you
            feel. Whether it's a subtle transformation or a bold new look, our team
            is dedicated to helping you express your individuality with style and grace.
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
