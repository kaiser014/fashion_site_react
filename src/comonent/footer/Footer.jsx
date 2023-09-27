import React from 'react';
import Newsletter from '../newsletter/Newsletter';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import BottomFooter from '../bottom-footer/BottomFooter';
import './footer.css';

const Footer = () => {
  return (
    <div>
        <Newsletter />
        <div className='footer-section'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='footer-content-details'>
                            <div className='footer-logo'>
                                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt='logo.png'/>
                            </div>
                            <div className='footer-contactdetails'>
                                <div className='footer-contact'>
                                    <div className='footer-contact-icon'><FontAwesomeIcon icon={faMapLocation}/></div>
                                    <div><span>Address:</span> 41, Block-A, Road-1, Malibagh, Dhaka.</div>
                                </div>
                                <div className='footer-contact'>
                                    <div className='footer-contact-icon'><FontAwesomeIcon icon={faPhone}/></div>
                                    <div><span>Phone:</span> +880 1234 567890</div>
                                </div>
                                <div className='footer-contact'>
                                    <div className='footer-contact-icon'><FontAwesomeIcon icon={faEnvelope}/></div>
                                    <div><span>Email:</span> info@email.com</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footer-all-links'>
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href='#footer-link'>Terms & Conditions</a></li>
                                <li><a href='#footer-link'>Privacy Policy</a></li>
                                <li><a href='#footer-link'>FAQs</a></li>
                                <li><a href='#footer-link'>Return Policy</a></li>
                                <li><a href='#footer-link'>Cookie Policy</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footer-all-links'>
                            <h3>Others</h3>
                            <ul>
                                <li><a href='#footer-link'>Instagram Profile</a></li>
                                <li><a href='#footer-link'>About Us</a></li>
                                <li><a href='#footer-link'>Contact Us</a></li>
                                <li><a href='#footer-link'>New Collection</a></li>
                                <li><a href='#footer-link'>Latest News</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <BottomFooter />
        </div>
    </div>
  )
}

export default Footer;