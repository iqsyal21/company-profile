import React, { useEffect } from "react";
import NavbarComp from "./NavbarComp";
import CompanyValueContent from "./CompanyValueContent";
import HeaderComp from "./HeaderComp";
import ServiceContent from "./ServiceContent";
import AboutUsContent from "./AboutUsContent";
import ContactInfo from "./ContactInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import TopButton from "./TopButton";

const ProfileApp = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <NavbarComp />
      <header>
        <section id="home" data-aos="zoom-in">
          <HeaderComp />
        </section>
      </header>
      <main>
        <section id="service">
          <h2>Service</h2>
          <ServiceContent />
        </section>
        <section id="company-values">
          <div className="bgcompany">
            <h2>Company Values</h2>
            <CompanyValueContent />
          </div>
        </section>
        <section id="about-us">
          <h2>About Us</h2>
          <AboutUsContent />
        </section>
        <section id="contact-info">
          <div className="bgcontact">
            <h2>Contact Info</h2>
            <ContactInfo />
          </div>
        </section>
      </main>
      <TopButton />
    </div>
  );
};

export default ProfileApp;
