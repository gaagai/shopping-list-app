import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBarComponent = (props: { title: string }) => {
  return (
    <Navbar className="navbar custom-navbar">
      <Container>
        <h1 className="main-title">{props.title}</h1>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
