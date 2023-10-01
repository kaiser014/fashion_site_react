import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import TestimonialSliderItem from '../testimonialslider-item/TestimonialSliderItem';
import SliderList from '../../data/slider';
import SectionHeading from '../section-heading/SectionHeading';
import './testimonial.css';
import JewelBox from '../jewel-box/JewelBox';

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='testimonial-section'>
      <Container>
        <SectionHeading subtitle='testimonial' title='what out client says'/>
        <div className='mt-4s'>
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
      <JewelBox />
    </div>
  )
}

export default Testimonial