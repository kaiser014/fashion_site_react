import React from 'react';
import './sectionheading.css';
import { Col, Container } from 'react-bootstrap';
const SectionHeading = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col xs={12} md={8} lg={6}>
                    <div className='section-heading'>
                        <h6>Suffered Alteration</h6>
                        <h1>Kanchipuram silk sarees</h1>
                        <p>It is a long established fact that reader will be distracted by this sarees </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SectionHeading