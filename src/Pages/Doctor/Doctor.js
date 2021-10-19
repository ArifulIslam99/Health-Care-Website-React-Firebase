import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({doctor}) => { 
   const {img, name, age, experience, specialist} = doctor;
    return (
        <div >
           <Col>
      <Card className="mx-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>
              <h5 className="fw-bold">Age: {age} Years </h5>
              <h5 className="fw-bold">Practice Experience: {experience} Years</h5>
              <h5 className="fw-bold">Phd Holder with specialist on {specialist} </h5>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col> 
        </div>
    );
};

export default Doctor;