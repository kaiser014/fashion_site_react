import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './jewelbox.css';

const JewelBox = () => {
  return (
    <div className='jewelbox-section'>
        <Container>
            <Row>
                <Col md={12} lg={8} className='mx-auto'>
                    <div className='jewelbox-all-content'>
                        <div className='jewelbox-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/saree-addimg.jpg'} alt=''/>
                        </div>
                        <div className='jewelbox-content-details'>
                            <h4>The Jewel Box</h4>
                            <p>When an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                            <div className='jewelbox-button'>
                                <Button className='btn jewelbox-btn'>Shop Now</Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default JewelBox;