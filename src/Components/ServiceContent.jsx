import React , { useEffect } from "react";
import team from "../assets/images/team.jpg";
import event from "../assets/images/event.jpg";
import crew from "../assets/images/crew.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceContent = () => {

    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="service-box">
        <div className="service-box_content-1" data-aos="fade-left">
          <img src={team} alt="team" className="service-box_image" />
        </div>
        <div className="service-box_content-1" data-aos="fade-right">
          <h4>Brand Activation</h4>
          <p>
            Our services go beyond organizing events. We're here to help you
            create a brand activation strategy tailored specifically to your
            needs. offering you various solutions to increase awareness and
            engagement with your brand.
          </p>
          <br />
          <h4>Event Organizer</h4>
          <p>
            Collaboration is the key to innovation. Our team of bright, talented
            and passionate creatives are here to work together with you to
            create spectacular event concepts that will surely be ones to
            remember
          </p>
        </div>
      </div>
      <div className="service-box-2">
        <div className="service-box_content-2" data-aos="fade-right">
          <img src={event} alt="event" className="service-box_image" />
        </div>
        <div className="service-box_content-2" data-aos="fade-left">
          <h4>Venue</h4>
          <p>
            We manage two of the finest venues for corporate events, concerts,
            conferences, as well as exhibitions.
          </p>
          <br />
          <h4>Hybrid Event</h4>
          <p>
            Hybrid events have become part of the new culture. We've helped
            facilitate these events for a global audience, and we're here to
            help you.
          </p>
        </div>
      </div>
      <div className="service-box">
        <div className="service-box_content-3" data-aos="fade-left">
          <img src={crew} alt="Crew" className="service-box_image" />
        </div>
        <div className="service-box_content-3" data-aos="fade-right">
          <h4>Crew</h4>
          <p>
            Need a crew of hard-working professionals with a high standard of
            execution? We can make it happen.
          </p>
          <br />
          <h4>Production</h4>
          <p>
            Collaboration is the key to innovation. Our team of bright, talented
            and passionate creatives are here to work together with you to
            create spectacular event concepts that will surely be ones to
            remember
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
