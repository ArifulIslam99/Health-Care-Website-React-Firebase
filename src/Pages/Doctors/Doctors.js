import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('/doctors.JSON')
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="m-4" style={{width:'90%'}}>
            <h2 className=" my-3 text-success fw-bold fs-1">Lets Get Introduce With Our Doctors </h2>
            <Row xs={1} md={2} >
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;