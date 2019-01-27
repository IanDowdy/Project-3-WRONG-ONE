import React from 'react';
import { Card, CardImg, Row, Col, CardTitle, CardText } from 'reactstrap';

const Pics = (props) => {
  return (

     <Row>
       <Col>
      <Card>
        <CardImg  width="100%" src="../assets/images/pics1.jpg" alt="Card image cap" />
        
      </Card>
      </Col>

     
      <Col sm="6">
        <Card body>
          <CardTitle style={{fontSize: "35px"}}>How this app works</CardTitle>
          <CardText style={{fontSize: "25px"}}>With supporting text below as a natural lead-in to additional content.</CardText>        
        </Card>
      </Col>
      </Row>
      
    
  );
};

export default Pics;