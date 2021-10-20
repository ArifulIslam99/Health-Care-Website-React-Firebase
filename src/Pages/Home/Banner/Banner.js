import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/1.png'
import banner2 from '../../../images/banners/2.png'
import banner3 from '../../../images/banners/3.png'

const Banner = () => {
    return (
        <Carousel  variant="dark" >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Welcome To Mahmuda Eye Care</h5> 
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>We Care Our Patient</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
       <h5 className="text-white">Always Near on Your Service</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;