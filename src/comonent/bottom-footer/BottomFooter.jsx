import React from 'react';
import './bottomfooter.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const BottomFooter = () => {
  return (
    <div className='bottom-footer-section'>
        <Container>
            <Row>
                <Col md={10} lg={8} className='mx-auto'>
                    <div className='bottom-footer'>
                      <div className='bottom-footer-content'>
                        <p><FontAwesomeIcon icon={faLock}/> Pay Securely with</p>
                      </div>
                      <div className='bottom-footer-icon'>
                        <div className='bottomfooter-iconwrap'>
                          <div className='bottomfooter-icon-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/payment-logo/Amex.jpg'} alt='Amex-icon'/>
                          </div>
                          <div className='bottomfooter-icon-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/payment-logo/apple_pay2.jpg'} alt='Apple-Pay-icon'/>
                          </div>
                          <div className='bottomfooter-icon-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/payment-logo/google-pay.jpg'} alt='Google-Pay-icon'/>
                          </div>
                          <div className='bottomfooter-icon-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/payment-logo/mastercard.jpg'} alt='Mastercard-icon'/>
                          </div>
                          <div className='bottomfooter-icon-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/payment-logo/paypal.jpg'} alt='Paypal-icon'/>
                          </div>
                          <div className='bottomfooter-icon-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/payment-logo/visa.jpg'} alt='Visa-icon'/>
                          </div>
                        </div>
                      </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BottomFooter;