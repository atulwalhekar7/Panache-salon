import React from "react";
import PanacheNavbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import AboutPage from "./Component/About";
import ServicesPage from "./Component/Services";
import Footer from "./Component/Footer";





import "./App.css";

export default function App() {
  return (
    <div>
      <PanacheNavbar />

      {/* HOME - Banner Page */}
      <section id="home" style={{ height: "100vh" }}>
        <Banner />
      </section>


      {/* ABOUT */}
      <section id="about">
        <AboutPage />
      </section>

      {/* SERVICES */}
      <section id="services" style={{ minHeight: "100vh", scrollMarginTop: "80px" }}>
        <ServicesPage />
      </section>


      {/* FOOTER */}
      <Footer />


    </div>

  );
}


