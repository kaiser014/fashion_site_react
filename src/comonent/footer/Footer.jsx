import React from 'react';
import Newsletter from '../newsletter/Newsletter';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import BottomFooter from '../bottom-footer/BottomFooter';
import UsefullLink from './usefull-link/UsefullLink';
import OthersLink from './others-link/OthersLink';
import './footer.css';

const Footer = () => {
  return (
    <div>
        <Newsletter />
        <div className='footer-section'>
            <Container>
                <Row>
                    <Col md={6} lg={6}>
                        <div className='footer-content-details'>
                            <div className='footer-logo'>
                                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt='logo.png'/>
                            </div>
                            <div className='footer-contactdetails'>
                                <div className='footer-contact'>
                                    <div className='footer-contact-icon'><FontAwesomeIcon icon={faMapLocation}/></div>
                                    <div className='footer-contact-details'><span>Address:</span> 41, Block-A, Road-1, Malibagh, Dhaka.</div>
                                </div>
                                <div className='footer-contact'>
                                    <div className='footer-contact-icon'><FontAwesomeIcon icon={faPhone}/></div>
                                    <div className='footer-contact-details'><span>Phone:</span> +880 1234 567890</div>
                                </div>
                                <div className='footer-contact'>
                                    <div className='footer-contact-icon'><FontAwesomeIcon icon={faEnvelope}/></div>
                                    <div className='footer-contact-details'><span>Email:</span> info@email.com</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} lg={3}>
                        <UsefullLink />
                    </Col>
                    <Col md={3} lg={3}>
                        <OthersLink />
                    </Col>
                </Row>
            </Container>
            <BottomFooter />
        </div>
    </div>
  )
}

export default Footer;