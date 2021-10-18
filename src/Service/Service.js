import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {img, name} = props.service;
    return (
        <Col>
      <Card clasName="card">
        <Card.Img  variant="top image" src={img} />
        <Card.Body>
          <Card.Title ><h4>{name}</h4></Card.Title>
          <Button variant="success">View Details</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;