import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar className="navbar custom-navbar">
      <Container>
        <h1 className="main-title">רשימת קניות</h1>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
