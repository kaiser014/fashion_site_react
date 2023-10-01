import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter-section'>
        <Container>
            <Row className='align-items-center'>
                <Col md={5} lg={5}>
                    <div className='newsletter-social-icon'>
                        <ul>
                            <li>
                                <a href='#social-link'><span className='newletter-socialicon'><FontAwesomeIcon icon={faFacebookF}/></span></a>
                            </li>
                            <li>
                                <a href='#social-link'><span className='newletter-socialicon'><FontAwesomeIcon icon={faTwitter}/></span></a>
                            </li>
                            <li>
                                <a href='#social-link'><span className='newletter-socialicon'><FontAwesomeIcon icon={faPinterestP}/></span></a>
                            </li>
                            <li>
                                <a href='#social-link'><span className='newletter-socialicon'><FontAwesomeIcon icon={faInstagram}/></span></a>
                            </li>
                            <li>
                                <a href='#social-link'><span className='newletter-socialicon'><FontAwesomeIcon icon={faLinkedinIn}/></span></a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={1} lg={2}></Col>
                <Col md={6} lg={5}>
                    <div className='newsletter-subscription'>
                        <input type='email' name='email' className='form-control newsletter-subscription-formcontrol' placeholder='Email Address'/>
                        <Button className='btn newsletter-subscription-btn'><FontAwesomeIcon icon={faPaperPlane}/></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Newsletter;