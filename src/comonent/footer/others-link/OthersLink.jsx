import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../usefull-link/usefulllink.css';

const OthersLink = () => {
  return (
    <div>
        <div className='footer-all-links footer-large-device'>
            <h3>Others</h3>
            <ul>
                <li><a href='#footer-link'>Instagram Profile</a></li>
                <li><a href='#footer-link'>About Us</a></li>
                <li><a href='#footer-link'>Contact Us</a></li>
                <li><a href='#footer-link'>New Collection</a></li>
                <li><a href='#footer-link'>Latest News</a></li>
            </ul>
        </div>
        <div className='mobilefooter-all-links footer-mobile-device'>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Others Links</Accordion.Header>
              <Accordion.Body>
                <div className='mobilefooter-links'>
                  <ul>
                    <li><a href='#footer-link'>Instagram Profile</a></li>
                    <li><a href='#footer-link'>About Us</a></li>
                    <li><a href='#footer-link'>Contact Us</a></li>
                    <li><a href='#footer-link'>New Collection</a></li>
                    <li><a href='#footer-link'>Latest News</a></li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
    </div>
  )
}

export default OthersLink;