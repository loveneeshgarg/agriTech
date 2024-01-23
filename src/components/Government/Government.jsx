import StartFirebase from '../firebaseConfig/index';
import React from 'react';
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';

const db = StartFirebase();

export class Government extends React.Component {
      constructor() {
        super();
        this.state = {
          tableData: []
        };
      }
    
      componentDidMount() {
        const dbRef = ref(db, 'Farmer');
    
        onValue(dbRef, (snapshot) => {
          let records = [];
          snapshot.forEach((childSnapshot) => {
            let keyName = childSnapshot.key;
            let data = childSnapshot.val();
            records.push({ key: keyName, data: data });
          });
          this.setState({ tableData: records });
        });
      }
    
      render() {
        return (
            <>
           
            <Container className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">AgriTech-Government</h1>
      <Row className="justify-content-center">
        <Col lg={6}>
          <p className="lead mb-4">
Welcome, Government User! This interface is designed for managing and overseeing agricultural data.</p>
          
        </Col>
      </Row>
      <div className="overflow-hidden" >
        <Container className="px-4 pt-5 my-5 text-center border-bottom">
        <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: '20px',
              borderRadius: '10px',
              margin: '50px auto', // Centering
            }}
          >
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Farmer ID</th>
                  <th>Crop Type</th>
                  <th>Moisture</th>
                  <th>Weight</th>
                  <th>Price</th>
                  <th>Total Price to Pay</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableData.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{row.key}</td>
                      <td>{row.data.croptype}</td>
                      <td>{row.data.moisture}</td>
                      <td>{row.data.weight}</td>
                      <td>{'₹' + row.data.price}</td>
                      <td>{'₹' + row.data.price * row.data.weight}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </Container>
    </>
          
        );
      }
    }
    