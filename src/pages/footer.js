import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const footer = () => {
  return (
    <div>
        <div className='footer-main'>
          <Container>
            <Row>
              <Col lg={3} md={6}>
                <div className='contact-us-main mt-2'>
                  <div className='contact-us'>
                    <h5>Connect with us</h5>
                  </div>
                  <div className='contact-us-icon'>
                    <ul>
                      <li><FaFacebookF></FaFacebookF></li>
                      <li><FaInstagram></FaInstagram></li>
                      <li><FaTwitter></FaTwitter></li>
                      <li><FaLinkedin></FaLinkedin> </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className='quick-link-main mt-2'>
                    <div className='quick-link-title'>
                      <h5>Quick Links</h5>
                    </div>
                    <div className='quick-link-link'>
                      <ul>
                        <li>Create Resume</li>
                        <li>Templates</li>
                        <li>Resume Examples</li>
                        <li>Cover Letter Examples</li>
                      </ul>
                    </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className='learn-main mt-2'>
                    <div className='learn-title'>
                    <h5>Learn</h5>
                    </div>
                    <div className='learn-link'>
                      <ul>
                        <li>Resume Writing Guide</li>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>How to Write a Cover Letter</li>
                        <li>How to Write a CV</li>
                        <li>Job Interview</li>
                      </ul>
                    </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className='other-main mt-2'>
                  <div className='other-title'>
                      <h5>Other</h5>
                  </div>
                  <div className='other-link'>
                    <ul>
                      <li>About Us</li>
                      <li>Privacy Policy</li>
                      <li>Terms and Conditions</li>
                    </ul>
                  </div>
                </div>
              </Col>
             </Row>
             </Container>
            </div>
    </div>
  )
}

export default footer