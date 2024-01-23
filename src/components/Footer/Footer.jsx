import { Container, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
      <Container>
        <Nav className="justify-content-center border-bottom pb-3 mb-3">
          <Nav.Item>
            <Nav.Link href="home" className="px-2 text-white">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="about" className="px-2 text-white">Features</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="farmer" className="px-2 text-white">farmer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Middleman" className="px-2 text-white">Middle man</Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="text-center text-white">ECE3 Capstone project</p>
      </Container>
    </footer>
  );
}

export default Footer;
