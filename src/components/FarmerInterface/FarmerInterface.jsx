import React from "react";
import StartFirebase from "../firebaseConfig/index";
import { ref, get,  child } from "firebase/database";
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

export class FarmerInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: StartFirebase(),
      rfid: '',
      farmerid: '',
      croptype: '',
      price: '',
      weight: '',
      moisture: ''
    };
    this.interface = this.interface.bind(this);
    this.selectData = this.selectData.bind(this); 
  }

  render() {
    return (
      <Container className="col-xl-10 col-xxl-8 px-4 py-5">
        <Row className="align-items-center g-lg-5 py-5">
          <Col lg={7} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">AgriTech-Farmer</h1>
            <p className="col-lg-10 fs-4">Welcome, This interface allows you to see the data of our transaction.</p>
          </Col>
          <Col md={10} xs={12} mx-auto lg={5}>
            <Form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              
              <FloatingLabel controlId="farmerid" label="Farmer ID" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Farmer ID"
                  value={this.state.farmerid}
                  onChange={(e) => this.setState({ farmerid: e.target.value })}
                />
              </FloatingLabel>
              <FloatingLabel controlId="croptype" label="Crop Type" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Crop Type"
                  value={this.state.croptype}
                  onChange={(e) => this.setState({ croptype: e.target.value })}
                />
              </FloatingLabel>
              <FloatingLabel controlId="price" label="Price" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  value={this.state.price}
                  onChange={(e) => this.setState({ price: e.target.value })}
                />
              </FloatingLabel>
              <FloatingLabel controlId="weight" label="Weight" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Weight"
                  value={this.state.weight}
                  onChange={(e) => this.setState({ weight: e.target.value })}
                />
              </FloatingLabel>
              
              <Button variant="primary" type="button" className="w-100 btn-lg" onClick={this.selectData}>
              Get Data
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

  interface() {
    this.insertData();
  }

  selectData() {
    const dbref = ref(this.state.db);
    const farmerid = this.state.farmerid;
  
    get(child(dbref, `Farmer/${farmerid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          this.setState({
            
            croptype: data.croptype || '',
            price: data.price || '',
            weight: data.weight || '',
            
          });
        } else {
          alert("No data found for the given Farmer ID");
          // Optionally, you can clear the state here
          this.setState({
            rfid: '',
            croptype: '',
            price: '',
            weight: '',
            moisture: '',
          });
        }
      })
      .catch((error) => {
        alert("There was an error. Details: " + error);
      });
  }

  getAllInputs() {
    return {
      rfid: this.state.rfid,
      farmerid: this.state.farmerid,
      croptype: this.state.croptype,
      price: Number(this.state.price),
      weight: Number(this.state.weight),
      moisture: Number(this.state.moisture)
    };
  } 
}
