import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
     <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" className="head-icon">Mahmuda Optikal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/doctors">Doctors Corner</Nav.Link>
      <Nav.Link as={Link} to="/booking">Book Appointment</Nav.Link>
      <Nav.Link as={Link} to="/about">About us</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      
    
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     </>
    );
};

export default Header;