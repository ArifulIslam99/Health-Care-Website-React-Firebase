import React from 'react';
import { Accordion } from 'react-bootstrap';

const Benefits = () => {
    return (
        <div className="my-4 p-4">
            
            <div className="row align-items-center">
                <div className="col-lg-5">
                <img src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' alt="" />
            </div> 
            <div className="col-lg-7">
            <h2 className="fs-1 text-success fw-bold my-2">Why You Choose us?</h2> 
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Experience of 20 Years</Accordion.Header>
    <Accordion.Body>
      Since last 20 years our hospital is one of the standing centre for eye health care. Our commitment to the patient is very complementory since our starting. We always try to keep this believe with us.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Proffessional Doctors</Accordion.Header>
    <Accordion.Body>
      We have one of the best surgent team in optemetry. Our doctors are highly qualified and have experience more than 10 years. Some of our doctors are also renonwed in Internation level also. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Caring is Everything</Accordion.Header>
    <Accordion.Body>
       We care our passion more than everything. We try to give the highest luxury to our patients. We feel us proud to serve our patient. Our Nurses are always reafy to hear you.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Quick Response</Accordion.Header>
    <Accordion.Body>
       We are quick and easy to hear out your problem. In any kind of emergency our ambulace team is ready for you. We are also working on Home service. We are hopefull to manage it out in near future.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
            </div>
            
            
        </div>
    );
};

export default Benefits;