import logo from "../assets/logo4-removebg-preview.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
          padding: 60px 5% 30px;
          position: relative;
          overflow: hidden;
        }

        /* ── 3D BEAUTY SCENE ── */
        .scene-wrap {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 200px;
          pointer-events: none;
          overflow: hidden;
        }
        .scene {
          width: 100%; height: 100%;
          perspective: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .orbit-group {
          width: 130px; height: 130px;
          position: relative;
          transform-style: preserve-3d;
          animation: spinOrbit 20s linear infinite;
        }
        @keyframes spinOrbit {
          0%   { transform: rotateX(18deg) rotateY(0deg); }
          100% { transform: rotateX(18deg) rotateY(360deg); }
        }
        .obj3d {
          position: absolute;
          top: 50%; left: 50%;
          transform-style: preserve-3d;
        }

        /* Lipstick */
        .ls-body   { width:12px; height:36px; background:linear-gradient(180deg,#C06070,#8B3050); border-radius:2px; position:absolute; top:-18px; left:-6px; }
        .ls-bullet { width:12px; height:16px; background:linear-gradient(160deg,#F090A8,#D04060); border-radius:6px 6px 0 0; position:absolute; top:-34px; left:-6px; }
        .ls-collar { width:12px; height:4px; background:#6a1030; position:absolute; top:-18px; left:-6px; }
        .ls-side   { width:4px; height:36px; background:#7a2040; position:absolute; top:-18px; left:6px; }

        /* Mascara */
        .msc-handle { width:7px; height:42px; background:linear-gradient(180deg,#444,#111); border-radius:3px; position:absolute; top:0; left:-3px; }
        .msc-brush  { width:16px; height:20px; background:#222; border-radius:8px; position:absolute; top:-22px; left:-8px;
          box-shadow: -6px 3px 0 1px #333, -6px 8px 0 1px #333, -6px 13px 0 1px #333,
                       6px 3px 0 1px #333,  6px 8px 0 1px #333,  6px 13px 0 1px #333; }
        .msc-side   { width:3px; height:42px; background:#2a2a2a; position:absolute; top:0; left:4px; }

        /* Nail polish */
        .np-bottle { width:16px; height:26px; background:linear-gradient(160deg,#F090A8 10%,#C04060 60%,#A03050); border-radius:4px 4px 6px 6px; position:absolute; top:-20px; left:-8px; overflow:hidden; }
        .np-shine  { width:3px; height:16px; background:rgba(255,255,255,0.28); border-radius:2px; position:absolute; top:4px; left:3px; }
        .np-neck   { width:7px; height:6px; background:#8B3050; position:absolute; top:-26px; left:-3px; }
        .np-cap    { width:12px; height:12px; background:linear-gradient(180deg,#A04060,#7a2840); border-radius:3px 3px 0 0; position:absolute; top:-38px; left:-6px; }
        .np-side   { width:5px; height:26px; background:#A03050; border-radius:0 4px 6px 0; position:absolute; top:-20px; left:8px; }

        /* Bob animations */
        .bob1 { animation: bob1 4s ease-in-out infinite; }
        .bob2 { animation: bob2 5.5s ease-in-out infinite; }
        .bob3 { animation: bob3 6s ease-in-out infinite; }
        @keyframes bob1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes bob2 { 0%,100%{transform:translateY(0) rotate(-6deg)} 50%{transform:translateY(-11px) rotate(6deg)} }
        @keyframes bob3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }

        /* Scene sparkles */
        .sc-spark {
          position: absolute;
          opacity: 0;
          animation: scSparkAnim linear infinite;
        }
        .sc-spark::before, .sc-spark::after {
          content: ''; position: absolute; background: #FFD6E0; border-radius: 1px;
        }
        .sc-spark::before { width:1.5px; height:11px; top:0; left:5px; }
        .sc-spark::after  { width:11px; height:1.5px; top:5px; left:0; }
        @keyframes scSparkAnim {
          0%  { transform:translateY(40px) scale(0.4); opacity:0; }
          15% { opacity:1; }
          85% { opacity:0.7; }
          100%{ transform:translateY(-50px) scale(1.3); opacity:0; }
        }

        /* ── RISING PARTICLES ── */
        .bp {
          position: absolute;
          bottom: -30px;
          opacity: 0;
          animation: bpRise linear infinite;
        }
        @keyframes bpRise {
          0%   { transform:translateY(0) rotate(0deg) scale(0.85); opacity:0; }
          10%  { opacity:0.9; }
          88%  { opacity:0.75; }
          100% { transform:translateY(-110vh) rotate(28deg) scale(1.15); opacity:0; }
        }
        .petal  { width:9px; height:15px; background:radial-gradient(ellipse at 40% 30%,#F9D0DA,#E39A9E); border-radius:50% 50% 50% 50%/60% 60% 40% 40%; }
        .shimmer{ width:7px; height:7px; background:radial-gradient(circle,#FFD6E0 0%,#E39A9E 60%,transparent 100%); border-radius:50%; }
        .heart-p{ width:13px; height:12px; position:relative; top:3px; }
        .heart-p::before,.heart-p::after { content:''; position:absolute; width:7px; height:12px; background:#E39A9E; border-radius:7px 7px 0 0; }
        .heart-p::before { transform:rotate(-45deg); left:0; top:-3px; }
        .heart-p::after  { transform:rotate(45deg);  left:6px; top:-3px; }

        /* ── FOOTER LAYOUT ── */
        .footer-grid {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          position: relative;
          z-index: 1;
          padding-right: 180px;
        }

        .brand-col    { flex: 1.2; }
        .nav-col      { flex: 0.8; display: flex; flex-direction: column; align-items: center; }
        .contact-col  { flex: 1;   display: flex; flex-direction: column; align-items: flex-end;  }

        .addr-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 16px;
}

.map-box {
  width: 90px;
  height: 70px;
  border: none;
  border-radius: 8px;
  flex-shrink: 0;
}

        /* Brand */
        .brand-col { display:flex; flex-direction:column; gap:8px; }
        .logo-img  { height:72px; width:auto; cursor:pointer; }
        .logo-text { font-family:'Playfair Display',serif; font-size:2.4rem; margin:0; color:#E39A9E; font-weight:500; line-height:1; }
        .tagline   { font-size:0.82rem; color:rgba(255,255,255,0.55); letter-spacing:0.15em; text-transform:uppercase; margin:0; }
        .addr-block{ margin-top:18px; }
        .addr-block p { margin:0 0 12px; font-size:0.84rem; color:rgba(255,255,255,0.78); line-height:1.6; }
        .addr-branch { display:block; font-size:0.72rem; color:rgba(255,255,255,0.38); letter-spacing:0.08em; text-transform:uppercase; margin-top:3px; }

        /* Nav (center) */
        .nav-col { display:flex; flex-direction:column; align-items:center; margin-top: 100px;}
        .nav-col h4, .contact-col h4 {
          font-size:0.72rem; letter-spacing:0.22em; text-transform:uppercase;
          color:#fff; margin:0 0 18px;
        }
        .nav-col ul { list-style:none; padding:0; margin:0; text-align:center; }
        .nav-col ul li { margin-bottom:11px; }
        .nav-col ul li a {
          color:rgba(255,255,255,0.65); text-decoration:none;
          font-size:0.9rem; transition:color 0.3s;
        }
        .nav-col ul li a:hover { color:#E39A9E; }

        /* Contact (right) */
        .contact-col { display:flex; flex-direction:column; align-items:flex-end; margin-top: 100px }
        .c-item { display:flex; gap:10px; align-items:center; margin-bottom:13px; }
        .c-item a {
          color:rgba(255,255,255,0.65); text-decoration:none;
          font-size:0.87rem; transition:color 0.3s;
        }
        .c-item a:hover { color:#E39A9E; }
        .c-icon { width:15px; height:15px; flex-shrink:0; }

        /* Bottom bar */
        .footer-bottom {
          margin-top:40px; padding-top:16px;
          border-top:1px solid rgba(255,255,255,0.08);
          display:flex; justify-content:space-between; align-items:center;
          font-size:0.76rem; color:rgba(255,255,255,0.35);
          position:relative; z-index:1;
        }
        .socials { display:flex; gap:18px; }
        .socials a { color:rgba(255,255,255,0.45); text-decoration:none; font-size:0.76rem; transition:color 0.3s; }
        .socials a:hover { color:#E39A9E; }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns:1fr 1fr; padding-right:0; }
          .scene-wrap  { display:none; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns:1fr; }
          .nav-col  { align-items:flex-start; }
          .contact-col { align-items:flex-start; }
          .footer-bottom { flex-direction:column; gap:12px; text-align:center; }
        }
      `}</style>

      {/* ── 3D BEAUTY SCENE ── */}
      <div className="scene-wrap">
        <div className="scene">
          <div className="orbit-group">

            {/* Lipstick 1 – rose */}
            <div className="obj3d bob1" style={{transform:'translate3d(-42px,-24px,0)'}}>
              <div className="ls-bullet"/>
              <div className="ls-collar"/>
              <div className="ls-body"/>
              <div className="ls-side"/>
            </div>

            {/* Mascara wand */}
            <div className="obj3d bob2" style={{transform:'translate3d(30px,18px,28px)'}}>
              <div className="msc-brush"/>
              <div className="msc-handle"/>
              <div className="msc-side"/>
            </div>

            {/* Nail polish */}
            <div className="obj3d bob3" style={{transform:'translate3d(-8px,34px,-22px)'}}>
              <div className="np-cap"/>
              <div className="np-neck"/>
              <div className="np-bottle"><div className="np-shine"/></div>
              <div className="np-side"/>
            </div>

            {/* Lipstick 2 – purple */}
            <div className="obj3d bob1" style={{transform:'translate3d(44px,-32px,12px) scale(0.72)'}}>
              <div className="ls-bullet" style={{background:'linear-gradient(160deg,#C890D8,#804090)'}}/>
              <div className="ls-collar" style={{background:'#5a2060'}}/>
              <div className="ls-body"   style={{background:'linear-gradient(180deg,#A070B0,#6a3080)'}}/>
              <div className="ls-side"   style={{background:'#5a2070'}}/>
            </div>

          </div>
        </div>

        {/* Sparkles inside scene */}
        <div className="sc-spark" style={{left:'22%',top:'35%',animationDuration:'3.4s',animationDelay:'0s'}}/>
        <div className="sc-spark" style={{left:'58%',top:'55%',animationDuration:'4.1s',animationDelay:'1.3s'}}/>
        <div className="sc-spark" style={{left:'77%',top:'22%',animationDuration:'3s',animationDelay:'2.6s'}}/>
        <div className="sc-spark" style={{left:'40%',top:'72%',animationDuration:'5s',animationDelay:'0.8s'}}/>
      </div>

      {/* ── RISING BEAUTY PARTICLES ── */}
      <div className="bp" style={{left:'3%',  animationDuration:'14s',animationDelay:'0s' }}><div className="petal"/></div>
      <div className="bp" style={{left:'9%',  animationDuration:'11s',animationDelay:'3s' }}><div className="shimmer"/></div>
      <div className="bp" style={{left:'16%', animationDuration:'16s',animationDelay:'1s' }}><div className="heart-p"/></div>
      <div className="bp" style={{left:'23%', animationDuration:'13s',animationDelay:'6s' }}><div className="petal" style={{transform:'rotate(30deg)',background:'radial-gradient(ellipse at 40% 30%,#FADADD,#C07090)'}}/></div>
      <div className="bp" style={{left:'30%', animationDuration:'10s',animationDelay:'2s' }}><div className="shimmer" style={{background:'radial-gradient(circle,#E8C9A3 0%,#C09060 60%,transparent 100%)'}}/></div>
      <div className="bp" style={{left:'37%', animationDuration:'17s',animationDelay:'8s' }}><div className="heart-p" style={{transform:'scale(0.75)'}}/></div>
      <div className="bp" style={{left:'44%', animationDuration:'12s',animationDelay:'4s' }}><div className="petal"/></div>
      <div className="bp" style={{left:'51%', animationDuration:'15s',animationDelay:'9s' }}><div className="shimmer"/></div>
      <div className="bp" style={{left:'58%', animationDuration:'11s',animationDelay:'5s' }}><div className="petal" style={{transform:'rotate(-20deg)'}}/></div>
      <div className="bp" style={{left:'65%', animationDuration:'13s',animationDelay:'7s' }}><div className="heart-p"/></div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="footer-grid">

        {/* Column 1: Brand + Addresses */}
        <div className="brand-col">
          <img src={logo} alt="The Panachè Logo" className="logo-img" onClick={scrollToHome}/>
          <h2 className="logo-text">The Panachè</h2>
          <p className="tagline">Luxury Salon + Academy</p>
          <div className="addr-block">

  {/* Branch 1 */}
  <div className="addr-item">
    <iframe
      src="https://www.google.com/maps?q=Sonigara+Kesar+Wakad+Pune&output=embed"
      className="map-box"
      loading="lazy"
    ></iframe>
    <p>
      Shop no 7, Sonigara Kesar<br/>
      Kaspate Vasti, Wakad, Pune 411057
      <span className="addr-branch">Branch 1 — Wakad</span>
    </p>
  </div>

  {/* Branch 2 */}
  <div className="addr-item">
    <iframe
      src="https://www.google.com/maps?q=Tapkir+Mala+Road+Rahatani+Pune&output=embed"
      className="map-box"
      loading="lazy"
    ></iframe>
    <p>
      Shop No. 6, Tapkir Mala Road<br/>
      Near Nayara Petrol Pump, Rahatani, Pune 411017
      <span className="addr-branch">Branch 2 — Rahatani</span>
    </p>
  </div>

</div>
        </div>

        {/* Column 2: Navigation (centered) */}
        <div className="nav-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#course">Course</a></li>
          </ul>
        </div>

        {/* Column 3: Contact (right-aligned) */}
        <div className="contact-col">
          <h4>Contact</h4>
          <div className="c-item">
            <svg className="c-icon" viewBox="0 0 24 24" fill="#E39A9E">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a href="mailto:thepanachebeautystudio@gmail.com">thepanachebeautystudio@gmail.com</a>
          </div>
          <div className="c-item">
            <svg className="c-icon" viewBox="0 0 24 24" fill="#E39A9E">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 .99V20c0 .55-.45 1-1 1C9.39 21 3 14.61 3 7c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1h-2z"/>
            </svg>
            <a href="tel:+919890794670">+91 98907 94670</a>
          </div>
          <div className="c-item">
            <svg className="c-icon" viewBox="0 0 24 24" fill="#E39A9E">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <a href="#">Wakad &amp; Rahatani, Pune</a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p style={{margin:0}}>© {year} The Panachè. All rights reserved.</p>
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