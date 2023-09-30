import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './topheader.css';
import HeaderCartButton from '../header-cartbutton/HeaderCartButton';
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
                            <input
                            type="search"
                            placeholder="Search"
                            className="form-control search-input-field"
                            aria-label="Search"
                            />
                            <Button className='btn topheader-search-btn'><FontAwesomeIcon icon={faSearch}/> Search</Button>
                        </Form>
                    </div>
                </Col>
                <Col lg={2} className='text-end'>
                    <HeaderCartButton />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default TopHeader;