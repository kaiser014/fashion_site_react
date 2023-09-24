import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import TestimonialSliderItem from '../testimonialslider-item/TestimonialSliderItem';
import SliderList from '../../data/slider';
import SectionHeading from '../section-heading/SectionHeading';
import './testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='testimonial-section'>
      <Container>
      <SectionHeading subtitle='testimonial' title='what out client says'/>
      <div className='mt-4'>
        <Slider {...settings}>
        {
          SliderList.map((item, index)=>{
            const {image, name, comment} = item;
            return(
              <div>
                <TestimonialSliderItem testimonialimage={image} testimonialcomment={comment} testimonialname={name}/>
              </div>
            );
          })
        }
        </Slider>
      </div>
      </Container>
    </div>
  )
}

export default Testimonial