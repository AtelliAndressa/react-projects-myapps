import React from 'react';
import './App.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

function App() {
  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px',
     }}>
       <Container>
         <Row>
           <Col xs='3'>
             <Button variant='danger'>C</Button>
           </Col>
           <Col xs='9'>
           </Col>
         </Row>
       </Container>
    </Jumbotron>
  );
}

export default App;
