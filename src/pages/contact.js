import React from 'react'
import vector from '../img/vector.png'
import contactimg from '../img/contactimg.png'
import '../css/contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineCall } from 'react-icons/md';
import { FaFirefoxBrowser } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container'
const contact = () => {
  return (
    <div>
        <div className='contact-main'>
            <div className='slider-img'>
                <div className='slider-text'>
                  <h3>Contact</h3>
                  <div className='flex justify-content-center vector-text'>
                      <h6>Home</h6>
                      <div className='vector-img'>
                      <img src={vector}/>
                      </div>
                      <h6 className='contact-slider-text-color'>Contact</h6>
                  </div>
                </div>
             </div>
             <Container>
             <div className='question-section'>
              <div className='question-text'>
              <h1>Have Some Question</h1>
              <p>Thank you for your interest in our services.please fill out the form below or email us at<br/>sprins1353@gmail.com and we will get back to you promptly regarding your request.</p>
              </div>
              <div className='social-media-icon'>
                <div className='email-icon'>
                  <div className='e-mail-section'>
                    <div className='rotate'>
                    <a href="" className='email-icon-border'><AiOutlineMail className='icon'/></a>
                    </div>
                    <div className='email-text'>
                          <p>sprins1353@gmail.com</p>
                    </div>
                  </div>
                </div>   
                <div className='call-icon'>
                  <div className='call-section'>
                    <div className='rotate'>
                    <a href="" className='call-icon-border'><MdOutlineCall className='icon'/></a>
                    </div>
                    <div className='call-text'>
                      <p>8980743009</p>
                    </div>
                  </div>
                </div>  
                <div className='web-icon'>
                  <div className='web-section'>
                    <div className='rotate'>
                    <a href="" className='web-icon-border'><FaFirefoxBrowser className='icon'/></a>
                    </div>
                    <div className='web-text'>
                      <p>www.livecvpro.in</p>
                    </div>
                    </div>
                </div>          
              </div>
            </div>

            <div className='contact-form-section'>
                <Row>
                  <Col lg={4} md={12}>
                    <div className='input-form-main-section'>
                      <div className='input-section'>
                        <input type="text" placeholder='First Name  '/>
                      </div>
                      <div className='input-section'>
                        <input type="text" placeholder='E-mail'/>
                      </div>
                      <div className='input-section'>
                      <textarea placeholder='Massage' rows="5" cols="24"> 
                      </textarea>
                      </div>
                      <div className='send-massage-btn'>
                          <a href=''>Send Massage</a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} md={12}>
                    <div className='contact-img-section'>
                        <div className='contact-img'>
                        <img src={contactimg}/>
                        </div>
                    </div>
                  </Col>
                </Row>
            </div>
            </Container>


        </div>

        

    </div>
  )
}

export default contact