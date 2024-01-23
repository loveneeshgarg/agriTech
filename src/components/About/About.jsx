// Import necessary React and Bootstrap components
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Image} from 'react-bootstrap';

import agricultureImage from '../CarouselImage/img7.png'; // Make sure to replace with your actual image file
import visionimg from '../CarouselImage/img2.jpg';
import missionimg from '../CarouselImage/img9.png';
// AboutUs component


const About = () => {





    
  return (
    
    
      <Container className="col-xxl-8 py-5" >
    
      <Row>
        <Col>
          <h2>Welcome to AgriTech</h2>
          <p className="lead">
          Welcome to AgriTech, a pioneering initiative at the intersection of technology and agriculture. Our project envisions a future where the grain supply chain is seamlessly integrated, transparent, and driven by data insights. At the core of AgriTech is the utilization of Ultra High-Frequency (UHF) Radio Frequency Identification (RFID) jute tags,  harmony with cutting-edge advancements.</p>
        </Col> 
        <Col md={6}>
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <Image
              src={agricultureImage} alt="Agriculture" fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
        </Col>       
      </Row>
      
      
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        
        <Col lg={6}>
          <h2 className="">Vision</h2>
          <p className="lead">Empowering agricultural stakeholders with smart solutions, AgriTech envisions a future where technology harmonizes with traditional practices.
            Our vision is to create a seamless and intelligent grain supply chain that minimizes losses, ensures quality, and fosters sustainable agricultural practices.
          </p>
        </Col>
        <Col xs={10} sm={8} lg={6}>
          <div >
            <img src={visionimg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
        </Col>
      </Row>

      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
      <Col xs={10} sm={8} lg={6}>
          <div >
            <img src={missionimg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
        </Col>
        <Col lg={6}>
          <h2 className="">Mission</h2>
          <p className="lead">
            AgriTech's mission is to develop and implement state-of-the-art solutions that bring unprecedented efficiency to the grain supply chain.
            We aim to empower farmers, distributors, and government authorities with real-time data, predictive insights, and collaborative platforms.
            Through our mission, we strive to make a significant impact on global food security and agricultural sustainability.
          </p>
        </Col>
        
      </Row>
      

      
      
      
    </Container>

  );
};

export default About;
