import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './hero.css';

const Hero = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item className='slider-image'>
                <img src={process.env.PUBLIC_URL + '/assets/images/slider/banner1.jpg'} alt=''/>
            </Carousel.Item>
            <Carousel.Item className='slider-image'>
                <img src={process.env.PUBLIC_URL + '/assets/images/slider/banner2.jpg'} alt=''/>
            </Carousel.Item>
            <Carousel.Item className='slider-image'>
                <img src={process.env.PUBLIC_URL + '/assets/images/slider/banner3.jpg'} alt=''/>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default Hero