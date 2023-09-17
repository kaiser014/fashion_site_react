import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './topheader.css';
const TopHeader = () => {
  return (
    <>
        <Container>
            <Row className='py-3 align-items-center'>
                <Col lg={2}>
                    <div className='top-header-icon'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt=''/>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className='topheader-search'>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="search-input-field"
                            aria-label="Search"
                            />
                            <button className='btn topheader-search-btn'><FontAwesomeIcon icon={faSearch}/> Search</button>
                        </Form>
                    </div>
                </Col>
                <Col lg={2} className='text-end'>
                    <div className='topheader-cart-button'>
                        <Dropdown>
                            <Dropdown.Toggle className='topheader-button' id="dropdown-basic">
                                <FontAwesomeIcon icon={faShoppingCart}/> Cart
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='topheader-cart-menu'>
                                <div className='topheader-cartitem-details'>
                                    <div className='topheader-cartitem-allcontent'>
                                        <div className='topheader-cartitem'>
                                            <div className='topheader-cartitem-image'>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/monthofproduct1.jpg'} alt=''/>
                                            </div>
                                            <div className='topheader-cartitem-content'>
                                                <h3>Product Name</h3>
                                                <p>1 X $3.30</p>
                                            </div>
                                        </div>
                                        <div className='topheader-cartitem'>
                                            <div className='topheader-cartitem-image'>
                                                <img src={process.env.PUBLIC_URL + '/assets/images/monthofproduct1.jpg'} alt=''/>
                                            </div>
                                            <div className='topheader-cartitem-content'>
                                                <h3>Product Name</h3>
                                                <p>1 X $3.30</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='topheader-subtotal'>
                                        <h4>Sub Total</h4>
                                        <h4>$3.30</h4>
                                    </div>
                                    <div className='topheader-cartlist-button'>
                                        <div className='topheader-cartlist-cartbtn'>
                                            <Button className='btn topheader-btn'>Cart</Button>
                                        </div>
                                        <div className='topheader-cartlist-checkoutbtn'>
                                            <Button className='btn topheader-btn topheader-btn1'>Checkout</Button>                                            
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default TopHeader;