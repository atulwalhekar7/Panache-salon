import { useState } from "react";

const categories = [
  "All",
  "Hair Artistry",
  "Skin Rituals",
  "Bridal Couture",
];

const services = [
  {
    id: 1,
    cat: "Hair Artistry",
    title: "Advanced Skin & Glow Treatments",
    price: "From ₹1,500",
    desc: "Hand-painted highlights designed to grow out seamlessly.",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    cat: "Skin Rituals",
    title: "Personalised Skin Care",
    price: "From ₹999",
    desc: "Deep hydration ritual for radiant glass skin.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    cat: "Hair Artistry",
    title: "Editorial Cut",
    price: "From ₹799",
    desc: "Precision haircut tailored to your face structure.",
    image:
      "https://media.istockphoto.com/id/2145077718/photo/a-woman-with-blonde-hair-is-getting-her-hair-done-by-a-stylist.webp?a=1&b=1&s=612x612&w=0&k=20&c=6NmSiq4fBmMU22dCm0EdeHvCk4UPLJO42OKy2pDtz6U="
  },
  {
    id: 4,
    cat: "Bridal Couture",
    title: "Bridal & Party Makeup",
    price: "Inquiry Only",
    desc: "Luxury bridal styling for your perfect day.",
    image:
      "https://i.pinimg.com/1200x/96/73/58/967358c939afa553a5a25ff482146226.jpg"
  },
  {
    id: 5,
    cat: "Skin Rituals",
    title: "Korean Facials",
    price: "From ₹1,200",
    desc: "Professional certification in advanced hair coloring.",
    image:
      "https://media.istockphoto.com/id/1444792386/photo/attractive-asian-woman-looking-at-mirror-sitting-at-table-with-ingredients-for-homemade.webp?a=1&b=1&s=612x612&w=0&k=20&c=sVHycCDih3ZM4eRgWFZQoH_jCgTX9Wd6R-YLWWWYuPU="
  },
  {
    id: 6,
    cat: "Hair Artistry",
    title: "Herbal Potli Facial",
    price: "From ₹899",
    desc: "Smooth, shine, and restore hair health.",
    image:
      "https://i.pinimg.com/736x/62/c8/a2/62c8a2f0169f9b89494cd2b486f7516d.jpg"
  }
];

const PHONE = "919890794670";

const getWhatsAppLink = (title: string, price: string, desc: string) => {
  const message =
    `Hello! I'd like to book the following service at The Panachè:\n\n` +
    `📌 *Service:* ${title}\n` +
    `💰 *Price:* ${price}\n` +
    `📝 *Details:* ${desc}\n\n` +
    `Please confirm my appointment. Thank you!`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
};

const ServicesPage = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? services
      : services.filter((s) => s.cat === filter);

  return (
    <div className="services">
      <style>{`
        body { margin: 0; background: #faf9f6; }

        .services {
          font-family: 'Inter', sans-serif;
          padding-bottom: 100px;
        }

        .hero {
          text-align: center;
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }

        .section-header { display: inline-block; }

        .section-tag {
          color: #E39A9E;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: inline-block;
           padding-top: 20px;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
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

        @media (max-width: 768px) {
          .section-title { font-size: 2.2rem; }
        }

        .filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 20px 0 50px;
        }

        .filters button {
          padding: 10px 18px;
          border-radius: 30px;
          border: 1px solid #ccc;
          background: white;
          cursor: pointer;
        }

        .filters button.active {
          background: black;
          color: white;
        }

        .grid {
          max-width: 1300px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
          align-items: stretch;
        }

        .card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: 0.3s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card:hover { transform: translateY(-6px); }

        .img {
          width: 100%;
          height: 320px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s;
        }

        .card:hover img { transform: scale(1.05); }

        .content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .title {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 6px;
        }

        .price {
          color: #E39A9E;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .desc {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 15px;
          flex: 1;
        }

        .card-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .btn-call {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 10px;
          border: 1.5px solid #1a1a1a;
          background: white;
          color: #1a1a1a;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .btn-call:hover {
          background: #1a1a1a;
          color: white;
        }

        .btn-whatsapp {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 10px;
          border: none;
          background: #1a1a1a;
          color: white;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s;
        }

        .btn-whatsapp:hover { background: #E39A9E; }

        @media (max-width: 1024px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <div className="section-header">
          <div className="section-tag">Our Services</div>
          <h2 className="section-title">Excellence in Every Touch</h2>
          <p className="section-sub">
            Discover a wide range of beauty and wellness services designed for you.
          </p>
        </div>
      </div>

      {/* FILTER — Academy removed */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid">
        {filtered.map((s) => (
          <div className="card" key={s.id}>
            <div className="img">
              <img src={s.image} alt={s.title} />
            </div>

            <div className="content">
              <div className="title">{s.title}</div>
              <div className="price">{s.price}</div>
              <div className="desc">{s.desc}</div>

              <div className="card-actions">
                {/* Call Button */}
                <a className="btn-call" href={`tel:+${PHONE}`}>
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 1.5C2.5 1.5 1 2 1 4C1 8.5 5.5 13 10 13C12 13 12.5 11.5 12.5 11.5L10.5 9C10.5 9 9.5 9.5 9 9C8 8 6 6 5 5C4.5 4.5 5 3.5 5 3.5L2.5 1.5Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  Call Us
                </a>

                {/* WhatsApp — pre-filled with this card's service details */}
                <a
                  className="btn-whatsapp"
                  href={getWhatsAppLink(s.title, s.price, s.desc)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;