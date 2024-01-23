import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">AGRI TECH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="About">About Us</Nav.Link>
            <Nav.Link href="farmer">Farmer</Nav.Link>
            <Nav.Link href="Middleman">Middle Man</Nav.Link>
            <Nav.Link href="Government">Government</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header