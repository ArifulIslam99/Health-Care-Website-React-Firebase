import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/data.JSON')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-4">
            <h2 style={{fontWeight:"700"}}>Our Eye Cares</h2>
            <Row className="cards" xs={1} md={3}>
               {
                   services.map(service => <Service service={service}></Service>)
               }
           </Row>
        </div>
    );
};

export default Services;