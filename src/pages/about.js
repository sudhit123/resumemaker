import React from 'react'
import vector from '../img/vector.png'
import ultimateimg from '../img/ultimate.png'
import '../css/about.css'
import teamimg1 from '../img/teamimg1.png'
import teamimg2 from '../img/teamimg2.png'
import teamimg3 from '../img/teamimg3.png'
import teamimg4 from '../img/teamimg4.png'
import usersay1 from '../img/usersay1.png'
import usersay2 from '../img/usersay2.png'
import usersay3 from '../img/usersay3.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import {RiLinkedinLine} from 'react-icons/ri'
import {GrStar} from 'react-icons/gr'
import {VscStarHalf} from 'react-icons/vsc'
import Container from 'react-bootstrap/esm/Container'


const about = () => {
  return (
    <>
        <div className='about-main'>
            <div className='slider-img'>
                <div className='slider-text'>
                  <h3>About Us</h3>
                    <div className='flex justify-content-center vector-text'>
                        <h6>Home</h6>
                        <div className='vector-img'>
                        <img src={vector}/>
                        </div>
                        <h6 className='contact-slider-text-color'>About Us</h6>
                    </div>
                </div>    
             </div>
            <Container>
             <div className='resume-ultimate-section'>
                <div className='resume-ultimate-header'>
                    <h1><span className='blue-color'>RESUME</span> is your ultimate career toolbox.</h1>
                </div>
                <div className='resume-ultimate'>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className='ultimate-image'>
                                <img src={ultimateimg}/>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='ultimate-text'>
                                <ul>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <div className='read-more-btn'>
                                    <a href=''>Read more</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
             </div>
             
             <div className='our-team-section'>
                <div className='our-team-title'>
                    <h1>OUR TEAM</h1>
                </div>
                <div className='our-team-paragraph'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.<br/> Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.</p>
                </div>
                <div className='team-member-section'>
                    <Row>
                        <Col lg={3} md={6}>
                            <div className='team-box-main blue-color-border'>
                                <div className='team-member-img'>
                                    <img src={teamimg1}/>
                                </div>
                                <div className='team-member-name'>
                                    <h4>Jordan Wagner</h4>
                                </div>
                                <div className='team-member-sub-title'>
                                    <h6>Founder</h6>
                                </div>
                                <div className='team-social-media-icon'>
                                    <ul className='flex'>
                                        <li><FaFacebookF/></li>
                                        <li><FaInstagram/></li>
                                        <li><FaTwitter/></li>
                                        <li><RiLinkedinLine/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                        <div className='team-box-main yellow-color-border'>
                                <div className='team-member-img'>
                                    <img src={teamimg2}/>
                                </div>
                                <div className='team-member-name'>
                                    <h4>Rose Murray</h4>
                                </div>
                                <div className='team-member-sub-title'>
                                    <h6>HR Manager</h6>
                                </div>
                                <div className='team-social-media-icon'>
                                    <ul className='flex'>
                                        <li><FaFacebookF/></li>
                                        <li><FaInstagram/></li>
                                        <li><FaTwitter/></li>
                                        <li><RiLinkedinLine/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                        <div className='team-box-main blue-color-border'>
                                <div className='team-member-img'>
                                    <img src={teamimg3}/>
                                </div>
                                <div className='team-member-name'>
                                    <h4>Jane Morris</h4>
                                </div>
                                <div className='team-member-sub-title'>
                                    <h6>UI Designer </h6>
                                </div>
                                <div className='team-social-media-icon'>
                                    <ul className='flex'>
                                        <li><FaFacebookF/></li>
                                        <li><FaInstagram/></li>
                                        <li><FaTwitter/></li>
                                        <li><RiLinkedinLine/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                        <div className='team-box-main yellow-color-border'>
                                <div className='team-member-img'>
                                    <img src={teamimg4}/>
                                </div>
                                <div className='team-member-name'>
                                    <h4>Paul Freeman</h4>
                                </div>
                                <div className='team-member-sub-title'>
                                    <h6>Web Developer</h6>
                                </div>
                                <div className='team-social-media-icon'>
                                    <ul className='flex'>
                                        <li><FaFacebookF/></li>
                                        <li><FaInstagram/></li>
                                        <li><FaTwitter/></li>
                                        <li><RiLinkedinLine/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='user-say-section'>
                <div className='user-say-heading'>
                    <h1>WHAT OUR USERS SAY?</h1>
                </div>
                <div className='user-say-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit. Ut et massa mi. </p>
                </div>
                <div className='user-say-card-section'>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className='user-say-box blue-color-border'>
                                <div className='user-img-section'>
                                        <div className='user-img'>
                                            <img src={usersay1}/>
                                        </div>
                                        <div className='user-img-title'>
                                            <h5>Nancy Webb</h5>
                                            <h6>Writer</h6>
                                        </div>
                                </div>
                                <div className='user-img-text'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                                </div>
                                <div className='user-say-icon'>
                                    <ul>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className='user-say-box yellow-color-border'>
                                <div className='user-img-section'>
                                        <div className='user-img'>
                                            <img src={usersay2}/>
                                        </div>
                                        <div className='user-img-title'>
                                            <h5>Philip Ryan</h5>
                                            <h6>Businessman</h6>
                                        </div>
                                </div>
                                <div className='user-img-text'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                                </div>
                                <div className='user-say-icon'>
                                    <ul>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className='user-say-box blue-color-border'>
                                <div className='user-img-section'>
                                        <div className='user-img'>
                                            <img src={usersay3}/>
                                        </div>
                                        <div className='user-img-title'>
                                            <h5>Billy Hart</h5>
                                            <h6>Student</h6>
                                        </div>
                                </div>
                                <div className='user-img-text'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                                </div>
                                <div className='user-say-icon'>
                                    <ul>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><GrStar/></li>
                                        <li><VscStarHalf/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                      
                    </Row>
                    <div className='user-read-more-btn'>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
             </Container>
        </div>
    </>
  )
}

export default about