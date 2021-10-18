import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-flex footer">
            <div className="w-25">
                <h2 style={{fontFamily: 'cursive'}}>Mahmuda Optics</h2>
                <p>A 20 year journey on eye care!</p>
                
            </div> 
            <div className="w-25">
                <p>If you feel dusty on your eyes. Please check up today!</p>
                <Button variant="warning">Book Appointment</Button>
            </div>
            <div className="w-25">
                <h3>Quick Visit</h3>
                <p><Link className="url"  to="/home">Home   </Link></p>
                <p><Link className="url"  to="/about">About </Link></p>
                

            </div> 
            <div className="w-25">
                <h3>Contact Us</h3>
                <p>admin@mahmudaoptics.com</p>
                <p>099-8888-77-258</p>
            </div>
        </div>
        <div>
            <footer>© Copyright 2020 by Mahmuda Optics</footer>
        </div>
        </div>
    );
};

export default Footer;