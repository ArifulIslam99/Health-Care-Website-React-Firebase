import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/1.png'
import banner2 from '../../../images/banners/2.png'
import banner3 from '../../../images/banners/3.png'

const Banner = () => {
    return (
        <Carousel  variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;