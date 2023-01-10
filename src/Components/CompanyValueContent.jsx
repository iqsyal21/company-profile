import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const CompanyValueContent = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>
      <div className="value-box">
        <Card data-aos="flip-left">
          <Card.Body>
            <Card.Title>Reputation</Card.Title>
            <Card.Text>
              We've maintained a standard of excellence in our 17 years in the
              events business, and we aim to continue doing so by building new
              generations of young, talented and creative professionals.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="flip-right">
          <Card.Body>
            <Card.Title>Turnkey Solution</Card.Title>
            <Card.Text>
              From developing a concept, coming up with creative and interesting
              marketing strategies, to the execution of your events, Alcor MICE
              is here to provide you with end to end integrated event services.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="flip-left">
          <Card.Body>
            <Card.Title>Always Moving Forward</Card.Title>
            <Card.Text>
              Constantly evolving and innovating through collaboration as new
              trends emerge to provide clients with new and exciting
              experiences.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default CompanyValueContent;
