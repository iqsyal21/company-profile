import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsContent = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container className="text-center" data-aos="fade-down">
      <h5 className="my-3">We're an event and activation enabler company</h5>
      <p>
        Going beyond our mission as a one stop solution in the event industry,
        we're now expanding our business to work on strategic activation
        programs that generate more impact to your brand.
        Standing out from thousands of brands can be difficult without a
        well-targeted brand activation strategy. You'll need to know your
        audience in order to surprise them, to create something interactive,
        interesting - memorable. You'll find that collaborating with strategic
        partners greatly adds value to your brand. Combine this with a
        mind-blowing concept and you'll have yourself the key to a successful
        event. Alcor MICE is here to make all of this possible for you.
      </p>
    </Container>
  );
};

export default AboutUsContent;
