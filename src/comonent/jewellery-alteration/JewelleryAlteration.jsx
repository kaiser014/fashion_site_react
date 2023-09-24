import React from 'react';
import AlterationItem from '../suffered-alteration-item/AlterationItem';
import SectionHeading from '../section-heading/SectionHeading';
import { Container, Row, Col } from 'react-bootstrap';
import JewelleryList from '../../data/jewellery-list';
import './jewelleryalteration.css';

const JewelleryAlteration = () => {
    return (
        <div className='jewellery-section'>
            <SectionHeading subtitle="Suffered Alteration" title="Jewellery" description="It is a long established fact that reader will be distracted by this Jewellery"/>
            <div className='suffered-alteration-allcontent'>
              <Container>
                <Row>
                {
                    JewelleryList.map((item, index)=> {
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

export default JewelleryAlteration;