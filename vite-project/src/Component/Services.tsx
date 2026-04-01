import React, { useState } from "react";

const categories = [
  "All",
  "Hair Artistry",
  "Skin Rituals",
  "Bridal Couture",
  "Academy"
];

const services = [
  {
    id: 1,
    cat: "Hair Artistry",
    title: "Signature Balayage",
    price: "From $180",
    desc: "Hand-painted highlights designed to grow out seamlessly and enhance natural movement.",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430039?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    cat: "Skin Rituals",
    title: "Hydra-Luminous Facial",
    price: "From $120",
    desc: "A deep infusion of antioxidants and hyaluronic acid for immediate, glass-like skin.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    cat: "Hair Artistry",
    title: "Editorial Precision Cut",
    price: "From $95",
    desc: "Architectural cutting techniques tailored to your bone structure and hair texture.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    cat: "Bridal Couture",
    title: "The Royal Bride Package",
    price: "Inquiry Only",
    desc: "Comprehensive bridal styling, including trials, on-day makeup, and hair sculpture.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13df772ad5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    cat: "Academy",
    title: "Master Colorist Course",
    price: "$1,200",
    desc: "A 4-week intensive certification led by our Creative Director.",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    cat: "Hair Artistry",
    title: "Silk Press & Ritual",
    price: "From $110",
    desc: "A premium smoothing treatment and deep conditioning ritual for ultimate shine and health.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop"
  }
];

const ServicesPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredServices =
    filter === "All"
      ? services
      : services.filter((s) => s.cat === filter);

  return (
    <div className="services-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Outfit:wght@300;400;600&display=swap');

        .services-root {
          background: #FAF9F6;
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
          color: #1a1a1a;
          padding-bottom: 100px;
        }

        /* HEADER */
        .services-header {
          padding: 140px 8% 60px;
          text-align: center;
        }

        .services-header h1 {
          font-family: 'Bodoni Moda', serif;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 400;
          margin-bottom: 2rem;
        }

        /* FILTER */
        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }

        .tab-btn {
          background: none;
          border: none;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #888;
          cursor: pointer;
          padding: 10px 0;
          position: relative;
        }

        .tab-btn.active {
          color: #B8860B;
        }

        .tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #B8860B;
        }

        /* GRID */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 0 8%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* CARD */
        .service-card {
          background: #fff;
          border: 1px solid #eee;
          transition: 0.4s;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .card-img-wrapper {
          height: 380px;
          overflow: hidden;
        }

        .card-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s;
        }

        .service-card:hover img {
          transform: scale(1.1);
        }

        .card-body {
          padding: 2.5rem;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1.5rem;
        }

        .card-header h3 {
          font-family: 'Bodoni Moda', serif;
          font-size: 1.6rem;
        }

        .price-tag {
          color: #B8860B;
          font-weight: 600;
        }

        .card-desc {
          color: #666;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .btn-reserve {
          width: 100%;
          padding: 1rem;
          background: #1a1a1a;
          color: #fff;
          border: none;
          cursor: pointer;
        }

        .btn-reserve:hover {
          background: #B8860B;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            padding: 0 5%;
          }
        }
      `}</style>

      {/* HEADER */}
      <section className="services-header">
        <h1>The Menu of Artistry</h1>

        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <div className="services-grid">
        {filteredServices.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="card-img-wrapper">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="card-body">
              <div className="card-header">
                <h3>{service.title}</h3>
                <span className="price-tag">{service.price}</span>
              </div>

              <p className="card-desc">{service.desc}</p>

              <button className="btn-reserve">Book Experience</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;