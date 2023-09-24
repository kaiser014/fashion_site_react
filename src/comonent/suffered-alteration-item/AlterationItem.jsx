import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './alterationitem.css';

const AlterationItem = (props) => {
  const { image, productname, price } = props;
  return (
    <div className='alteration-all-item'>
        <div className='alteration-item-image'>
          <div className='alteritem-image-hold'>
            <img src={image} alt=''/>
          </div>
        </div>
        <div className='alteration-item-details'>
          <h5>{productname}</h5>
          <p><span>Category:</span> Sarees</p>
          <div className='alterationitem-price-link'>
            <div className='item-price'>
              <p>
                <span><FontAwesomeIcon icon={faStar}/></span>
                <span><FontAwesomeIcon icon={faStar}/></span>
                <span><FontAwesomeIcon icon={faStar}/></span>
                <span><FontAwesomeIcon icon={faStar}/></span>
                <span><FontAwesomeIcon icon={faStar}/></span>
              (5.0)
              </p>
              <h6>${price}</h6>
            </div>
            <div className='item-link'>
              <a href='#anchor'>
                <div className='item-link-hold'>
                  <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AlterationItem;