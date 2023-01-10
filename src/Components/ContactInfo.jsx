import React, { useEffect } from "react";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactInfo = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="contact-box" data-aos="fade-up">
        <div className="contact-box_content">
          <ul>
            <li>
              <FaMapMarkedAlt className="icon-size" />
              Address
            </li>
            <li>
              Alcor Prime I PT. Wahana Inspirasi Bintang <br />
              Mal Kota Kasablanka, Lt. 3 & 4 U-301 & 401 Jl. Casablanca Raya
              Kav. 88 Jakarta Selatan 12870
            </li>
          </ul>
        </div>
        <div className="contact-box_content">
          <ul>
            <li>
              <FaPhoneAlt className="icon-size" />
              Phone
            </li>
            <li>(021) 2948 8557</li>
          </ul>
        </div>
        <div className="contact-box_content">
          <ul>
            <li>
              <GrMail className="icon-size" />
              Email
            </li>
            <li>info@alcorprime.com</li>
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactInfo;
