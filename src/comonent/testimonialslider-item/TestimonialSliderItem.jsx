import React from 'react';
import './testimonialslideritem.css';

const TestimonialSliderItem = (props) => {
    const {testimonialimage, testimonialcomment, testimonialname} = props;
  return (
    <div className='testimonial-item-allcontent'>
        <div className='testimonial-image'>
            <img src={testimonialimage} alt=''/>
        </div>
        <div className='testimonial-comment'>
            <p>{testimonialcomment}</p>
        </div>
        <div className='testimonial-name'>
            <h3>{testimonialname}</h3>
        </div>
    </div>
  )
}

export default TestimonialSliderItem;