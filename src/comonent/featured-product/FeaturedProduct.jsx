import React from 'react';
import SectionHeading from '../section-heading/SectionHeading';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedList from '../../data/featured-list';
import FeaturedItem from '../featured-item/FeaturedItem';
import './featuredproduct.css';

const FeaturedProduct = () => {
  return (
    <div className='featured-section'>
        <SectionHeading subtitle="" title="Featured Products" description=" It is a long established fact that reader will be distracted by this sarees"/>
        <div className='suffered-alteration-allcontent'>
          <Container>
            <Row>
            {
                FeaturedList.map((item, index)=> {
                const {image, productname, price} = item;
                return(
                  <Col xs={12} sm={6} md={6} lg={4} key={index}>
                    <FeaturedItem image={image} productname={productname} price={price}/>
                  </Col>
                )
              })
            }
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default FeaturedProduct