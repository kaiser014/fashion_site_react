import React from 'react';
import './sectionheading.css';
import { Row, Col, Container } from 'react-bootstrap';
const SectionHeading = (props) => {
    const { subtitle, title, description } = props;
  return (
    <div>
        <Container>
            <Row>
                <Col xs={12} md={8} lg={7} className='text-center m-auto'>
                    <div className='section-heading'>
                        <h5>{subtitle}</h5>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SectionHeading