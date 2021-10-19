import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import Booking from '../Booking/Booking';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Services></Services>
            <Booking></Booking> 
            <Benefits></Benefits>
        </div>
    );
};

export default Home;