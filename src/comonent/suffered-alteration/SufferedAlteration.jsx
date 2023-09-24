import React from 'react';
import SectionHeading from '../section-heading/SectionHeading';
import { Container, Row, Col } from 'react-bootstrap';
import AlterationItem from '../suffered-alteration-item/AlterationItem';
import SufferedList from '../../data/suffered-alteration';
import './suffered.css';

const SufferedAlteration = () => {
  return (
    <div className='suffered-section'>
        <SectionHeading subtitle="Suffered Alteration" title="KANCHIPURAM SILK SAREES" description="It is a long established fact that reader will be distracted by this sarees"/>
        <div className='suffered-alteration-allcontent'>
          <Container>
            <Row>
            {
              SufferedList.map((item, index)=> {
                const {image, productname, price} = item;
                return(
                  <Col xs={12} sm={6} md={6} lg={3} key={index}>
                    <AlterationItem image={image} productname={productname} price={price}/>
                  </Col>
                )
              })
            }
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default SufferedAlteration