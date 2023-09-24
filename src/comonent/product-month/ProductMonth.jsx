import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './productmonth.css';

const ProductMonth = () => {
  return (
    <div className='product-month-section'>
        <Container>
            <Row className='align-items-center'>
                <Col md={5}>
                    <div className='product-month-allcontent'>
                        <div className='product-month-title'>
                            <h1>Product of the month</h1>
                        </div>
                        <div className='product-month-description'>
                            <p>It look like readable English. Many Desktop Publishing packages and web pages Editors Now Use lorem Ipsum as their default model. </p>
                        </div>
                        <div className='product-month-button'>
                            <Button className='btn productmonth-btn'>Shop Now</Button>
                        </div>
                    </div>
                </Col>
                <Col md={7}>
                    <div className='product-month-allimages'>
                        <div className='productmonth-img product-month-image1'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/monthofproduct1.jpg'} alt='productmonth-img1'/>
                        </div>
                        <div className='productmonth-img product-month-image2'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/productmonth2.jpg'} alt='productmonth-img2'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductMonth;