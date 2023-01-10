import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/logo-circle.png";

const NavbarComp = () => {
  return (
    <Navbar className="navbar-bg" sticky="top" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="33"
            height="33"
            className="d-inline-block align-top mx-2"
            alt="AlcorPrime Logo"
          />
          AlcorPrime
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="nav-link-bg navbar-text"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#company-values">Company Values</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-info">Contact info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
