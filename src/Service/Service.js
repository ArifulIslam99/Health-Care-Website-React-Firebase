import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {img, name} = props.service;
    return (
        <Col>
      <Card clasName="card">
        <Card.Img  variant="top image" src={img} />
        <Card.Body>
          <Card.Title ><h4>{name}</h4></Card.Title>
          <Link to={`/services/${name}`}><Button variant="success">View Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;