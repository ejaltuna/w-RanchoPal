import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../public/Logo/fRanchoPal.png";
import { VscLocation } from "react-icons/vsc";

function NavbarC() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="light"
        variant="light"
        className="shadow-sm" 
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} width="200px"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="font-bold text-xl">
                R
              </Nav.Link>
              <Nav.Link target={"_blank"}
                href="https://www.google.co.ve/maps/place/Finca+El+Palmar+(Ranchopal)/@6.8206327,-68.9852935,509m/data=!3m1!1e3!4m13!1m7!3m6!1s0x8dc985991ece7f99:0x305f35e0519a14f8!2sEl+Palmar+8050,+Bol%C3%ADvar!3b1!8m2!3d8.0122195!4d-61.9082158!3m4!1s0x8e70cd0f9da7bed7:0x9b738b5ef3a7a346!8m2!3d6.8218623!4d-68.9847274?hl=es-419"
                className=" my-auto"
              >
               <VscLocation size={'30px'} className="text-lg md:text-lg"/>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
              <Nav.Link href="#turismo">Turismo Capanareño</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
               Momentos
              </Nav.Link>
              <Nav.Link href="#features">Blog</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarC;
