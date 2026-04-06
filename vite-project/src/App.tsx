/* No React import needed */
import PanacheNavbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import AboutPage from "./Component/About";
import ServicesPage from "./Component/Services";
import CoursePage from "./Component/Course"; // ✅ ADD THIS
import Footer from "./Component/Footer";
import FloatingSocialIcons from "./Component/FloatingSocialIcons"; // ✅ NEW

import "./App.css";

export default function App() {
  return (
    <div>
      <PanacheNavbar />

      {/* HOME - Banner Page */}
      <section id="home" style={{ height: "100vh", scrollMarginTop: "100px" }}>
        <Banner />
      </section>

      {/* ABOUT */}
      <section id="about" style={{ scrollMarginTop: "100px" }}>
        <AboutPage />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{ minHeight: "100vh", scrollMarginTop: "100px" }}
      >
        <ServicesPage />
      </section>

      {/* COURSE */}
      <section
        id="course"
        style={{ minHeight: "100vh", scrollMarginTop: "100px" }}
      >
        <CoursePage />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING SOCIAL ICONS */}
      <FloatingSocialIcons />
    </div>
  );
}