
import React from 'react';
import { Container, Row, Col, Button,Image } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import agricultureImage2 from '../CarouselImage/img6.png';
import agricultureImage from '../CarouselImage/img3.jpg';
const Home = () => {
    const containerStyle = {
        background: `url(${agricultureImage2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color:'white'
        
      };
        const navigate = useNavigate();
 
  return (
    <>
    <Container className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">AgriTech</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
AgriTech pioneers sustainable agriculture through cutting-edge technology. Our vision is a harmonious blend of tradition and innovation, empowering stakeholders with smart solutions. With a mission to revolutionize the grain supply chain, we strive for agricultural efficiency and resilience.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Button variant="primary" size="lg" className="px-4 me-sm-3" onClick={()=>navigate("/farmer")}>
            Farmer
          </Button>
          <Button variant="outline-secondary" size="lg" className="px-4" onClick={()=>navigate("/Middleman")}>
            Middle Man
          </Button>
        </div>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <Container className="px-5">
        <Image src={agricultureImage} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
        </Container>
      </div>
    </Container>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style={containerStyle}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={5} className="p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal" >Farmer</h1>
            <p className="lead fw-normal">we strive to empower farmers with innovative solutions, ensuring their prosperity, sustainability, and resilience in the face of evolving challenges.</p>
            <Button className='btn-light' variant="outline-secondary" onClick={()=>navigate("/farmer")}>Farmer</Button>
             </Col>
        </Row>
      </Container>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>

    <Container className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Arhtiya</h1>
      <Col lg={6} className="mx-auto">
        <p className="lead mb-4">
          
AgriTech supports arhtiyas by providing digital tools for transparent transactions and enhanced market access. We aim to blend technology with tradition, ensuring fairness and sustainability in agriculture. </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Button type="button" className="btn px-4 gap-3" onClick={()=>navigate("/Middleman")}>Middle Man</Button>
        </div>
      </Col>
    </Container>
    </>
  );
};

export default Home;
