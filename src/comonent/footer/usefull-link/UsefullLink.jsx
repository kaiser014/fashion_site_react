import React from 'react';
import { Accordion } from 'react-bootstrap';
import './usefulllink.css';

const UsefullLink = () => {
  return (
    <div>
        <div className='footer-all-links footer-large-device'>
            <h3>Useful Links</h3>
            <ul>
                <li><a href='#footer-link'>Terms & Conditions</a></li>
                <li><a href='#footer-link'>Privacy Policy</a></li>
                <li><a href='#footer-link'>FAQs</a></li>
                <li><a href='#footer-link'>Return Policy</a></li>
                <li><a href='#footer-link'>Cookie Policy</a></li>
            </ul>
        </div>
        <div className='mobilefooter-all-links footer-mobile-device'>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Useful Links</Accordion.Header>
              <Accordion.Body>
                <div className='mobilefooter-links'>
                  <ul>
                    <li><a href='#footer-link'>Terms & Conditions</a></li>
                    <li><a href='#footer-link'>Privacy Policy</a></li>
                    <li><a href='#footer-link'>FAQs</a></li>
                    <li><a href='#footer-link'>Return Policy</a></li>
                    <li><a href='#footer-link'>Cookie Policy</a></li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    </div>
  )
}

export default UsefullLink;