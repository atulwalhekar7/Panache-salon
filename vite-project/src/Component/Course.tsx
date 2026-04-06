import { useEffect, useRef } from "react";

export default function CourseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current!;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el!);
  }, []);

  return (
    <section className="course-section" ref={sectionRef}>
      <style>{`
        .course-section {
          // padding: 100px 8%;
          background: linear-gradient(135deg, #FAF9F6, #E8C9A3);
          font-family: 'Inter', sans-serif;
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s ease;
        }

        .course-section.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* HEADER */
        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-tag {
          color: #E39A9E;
          letter-spacing: 0.3em;
          font-size: 0.90rem;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .section-desc {
          max-width: 600px;
          margin: 0 auto;
          color: #666;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* CONTAINER */
        .course-container {
          display: flex;
          gap: 60px;
          align-items: center;
          flex-wrap: wrap;
        }

        /* IMAGE */
        .course-image {
          flex: 1;
          min-width: 300px;
          overflow: hidden;
          border-radius: 16px;
        }

        .course-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .course-image:hover img {
          transform: scale(1.08);
        }

        /* CONTENT CARD */
        .course-content {
          flex: 1;
          min-width: 300px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: transform 0.4s ease;
        }

        .course-content:hover {
          transform: translateY(-8px);
        }

        .course-tag {
          color: #E39A9E;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .course-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .course-sub {
          font-size: 1.05rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .badge {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 6px 14px;
          font-size: 0.75rem;
          margin-bottom: 20px;
          border-radius: 20px;
        }

        /* LIST */
        .course-highlights {
          margin-bottom: 2rem;
        }

        .course-highlights li {
          margin-bottom: 10px;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .course-highlights li::before {
          content: "✔";
          color: #E39A9E;
          font-weight: bold;
        }

        /* BUTTON */
        .cta-btn {
          background: linear-gradient(135deg, #000, #333);
          color: #fff;
          padding: 14px 32px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .cta-btn:hover {
          background: #D4AF37;
          color: #000;
          transform: translateY(-2px);
        }

        .contact {
          margin-top: 15px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* HEADER */}
      <div className="section-header">
        <div className="section-tag">Our Courses</div>
        <h2 className="section-title">Professional Beauty Courses</h2>
        <p className="section-desc">
          Learn industry-leading beauty techniques with expert trainers and
          build a successful career in the salon and wellness industry.
        </p>
      </div>

      {/* CONTENT */}
      <div className="course-container">
        
        {/* IMAGE */}
        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop"
            alt="Beauty Training"
          />
        </div>

        {/* CARD */}
        <div className="course-content">
          <div className="course-tag">Certified Course</div>

          <h2 className="course-title">Beauty Therapist Course</h2>

          <p className="course-sub">
            Master professional beauty skills including skincare, hair, and makeup with hands-on training.
          </p>

          <div className="badge">100% Job Assistance</div>

          <ul className="course-highlights">
            <li>Govt. NSDC Approved Certificate</li>
            <li>International Valid Certification</li>
            <li>100% Placement Assistance</li>
            <li>Self Employment Opportunities</li>
            <li>Learn from Industry Experts</li>
            <li>Online & Offline Classes</li>
          </ul>

          <button className="cta-btn">Apply Now</button>

          
        </div>
      </div>
    </section>
  );
}