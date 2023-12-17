import 'bootstrap/dist/css/bootstrap.min.css';
import resume1 from '../img/resume1.jpg'
import resume2 from '../img/resume2.jpg'
import resume3 from '../img/resume3.jpg'
import proimg from '../img/prostory.png'
import boximg1 from '../img/boximg1.png'
import boximg2 from '../img/boximg2.png'
import boximg3 from '../img/boximg3.png'
import boximg4 from '../img/boximg4.png'
import boximg5 from '../img/boximg5.png'
import jobmarketimg from '../img/jobmarket.png'
import boximg6 from '../img/boximg6.png'
import resumebuilder from  '../img/resumebuilder.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

const home = () => {
  return (
    <div>
        <div className='main'>
        <div className='slider'>
          <Container>
            <div className='slider-main'>
                  <div className='slider-text'>
                    <p>Create A  Resume <span className='slider-text-color'>Fast</span> With Our<br/> <span className='slider-text-color'>Easy</span> And <span className='slider-text-color'>Free</span> Resume Builder</p>
                  </div>
                  <div className='slider-text-second'>
                    <p>Use professional field-tested resume templates that follow the exact<br/>‘resume rules’ employers look for. Easy to use and done within<br/> minutes - try now for free!</p>
                  </div> 
                  <div className='create-resume'>
                    <a href=''>Create Your Resume Now</a>
                  </div>
            </div>
            <div className='resume-detail'>
                <div className='resume-image-background'>
                <Row>
                  <Col lg={4} md={6}>
                    <div className='resume-image'> 
                    <img src={resume1}/>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='resume-image mrg-top-first-image'> 
                    <img src={resume2}/>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='resume-image mrg-top-second-image'> 
                    <img src={resume3}/>
                    </div>
                  </Col>
                </Row>
                </div>
            </div>

            <div className='resume-builder-main-section'>
              <Row>
                <Col lg={6} md={12}>
                  <div className='resume-builder'>
                      <div className='resume-builder-title'>
                        <p>Try our <span className='blue-color'>Professional</span><br/><span className='blue-color'>Resume</span> Builder Now!</p>
                      </div>
                      <div className='resume-builder-text'>
                      <p>Save time with our easy 3-step resume builder. No more
                        writer ’ s block or formatting difficulties in Word. Rapidly make a perfect resume employers love.</p>
                      </div>
                      <div className='resume-create-builder '> 
                          <div className='create-resume-btn'>
                          <a href=''>Create Your Resume Now</a>
                          </div>
                          <div className='resume-example-btn'>
                          <a href="">Resume Examples</a>
                          </div>
                      </div>
                  </div>
                </Col>
                <Col lg={6} md={12} >
                  <div className='resume-img-top'>
                    <div className='resume-builder-img'>
                      <img src={resumebuilder}/>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className='professional--main-section'>
              <Row>
                <Col lg={4} md={12}>
                  <div className='pro-imges'>
                      <img src={proimg}/>
                  </div>
                </Col>
                <Col lg={8} md={12}>
                  <div className='professional-text-section'>
                      <div className='secure-job-title'>
                        <p>SECURE YOUR DREAM JOB</p>
                      </div>
                      <div className='create-professional-text'>
                        <p>Create A <span className='yellow-color'>Professional</span> <br/> Story In Minutes. Use <br/ > Our <span className='yellow-color'>Cover Letter Maker.</span></p>
                      </div>
                      <div className='cover-latter-pragraph'> 
                        <p>Our cover letter maker allows you to write amazing professional pitches in minutes rather than hours. No more writer’s block, no more searching for the convincing phrases or agonizing over formatting. Be persuasive without effort!</p>
                      </div>
                      <div className='create-cover-latter-btn'>
                          <a href=''>Create Cover Letter</a>
                      </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className='features-designed'>
                  <h1>Features designed to help you win<br/>your dream job</h1>
                  <div className='dream-job-box-main'>
                    <Row>
                      <Col lg={4} md={6}>
                        <div className='Box-main blue-color-border mt-3'>
                            <div className='box-image-top'> 
                                <div className='box-background-color-blue'>
                                <img src={boximg1}/>
                                </div>
                            </div>
                            <div className='box-title'>
                              <h4 className='blue-color'>Easy online resume builder</h4>
                            </div>
                            <div className='box-pragraph'>
                              <p>Create an awesome resume, cover letter or online profile without leaving your web browser.</p>        
                            </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                      <div className='Box-main yellow-color-border mt-3'>
                            <div className='box-image-top'> 
                                <div className='box-background-color-yellow'>
                                <img src={boximg2}/>
                                </div>
                            </div>
                            <div className='box-title'>
                              <h4 className='yellow-color'>Your data is safe</h4>
                            </div>
                            <div className='box-pragraph'>
                              <p>Your data is kept private and protected by strong 256-bit encryption.</p>        
                            </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                      <div className='Box-main blue-color-border mt-3'>
                            <div className='box-image-top'> 
                                <div className='box-background-color-blue'>
                                <img src={boximg3 }/>
                                </div>
                            </div>
                            <div className='box-title'>
                              <h4 className='blue-color'>Approved templates</h4>
                            </div>
                            <div className='box-pragraph'>
                              <p>Professionally-designed resume templates and examples +guides. Just edit and download in 5 minutes.</p>        
                            </div>
                        </div>    
                      </Col>
                      <Col lg={4} md={6}>
                      <div className='Box-main yellow-color-border mt-3'>
                            <div className='box-image-top'> 
                                <div className='box-background-color-yellow'>
                                <img src={boximg4}/>
                                </div>
                            </div>
                            <div className='box-title'>
                              <h4 className='yellow-color'>Job tracking</h4>
                            </div>
                            <div className='box-pragraph'>
                              <p>We’ll keep you ahead of the competition by tracking the employers  and jobs you apply to.</p>        
                            </div>
                        </div>
                      </Col>
                      <Col lg={4} md={6}>
                      <div className='Box-main blue-color-border mt-3'>
                            <div className='box-image-top'> 
                                <div className='box-background-color-blue'>
                                <img src={boximg5}/>
                                </div>
                            </div>
                            <div className='box-title'>
                              <h4 className='blue-color'>Approved templates</h4>
                            </div>
                            <div className='box-pragraph'>
                              <p>Save your perfect resume in any common format,  including Microsoft Word and PDF in a single click.</p>        
                            </div>
                        </div>  
                      </Col>
                      <Col lg={4} md={6}>
                      <div className='Box-main yellow-color-border mt-3'>
                            <div className='box-image-top'> 
                                <div className='box-background-color-yellow'>
                                <img src={boximg6}/>
                                </div>
                            </div>
                            <div className='box-title'>
                              <h4 className='yellow-color'>Approved templates</h4>
                            </div>
                            <div className='box-pragraph'>
                              <p>Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.</p>        
                            </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
            </div>


            <div className='resume-job-market-main-section'>
                <Row>
                  <Col lg={8} md={12}>
                    <div className='perfect-resume-section'>
                      <div className='resume-job-market-title'>
                        <p>Create Perfect <span className='blue-color'>Resumes</span> For<br/>The Modern <span className='blue-color'>Job Market</span></p>
                      </div>
                      <div className='perfect-resume-pragraph'>
                        <p>Creating a resume or cover letter has never been this easy! In three simple steps, create the perfect document to impress hiring managers and employers. Minimum time, maximum professional quality.</p>
                      </div>
                      <div className='create-resume-btn pt-3'>
                          <a href=''>Create Your Resume Now</a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={12}>
                    <div className='perfecr-resume-img-section'>
                        <img src={jobmarketimg}/>
                    </div>
                  </Col>
                </Row>
            </div>

            <div className='step-box-main'>
              <Row>
                <Col lg={4} md={6}>
                  <div className='step-box-section mt-3'>
                        <div className='step-title'>
                            <h6>1.Sign Up</h6>
                        </div>
                        <div className='step-class'>
                            <h6>Your First Steps</h6>
                        </div>
                        <div className='step-pragrah'>
                          <p >We’ve made sure that signing up to our resume maker tools is even more convenient than usual. Use one of the most common networks used by professionals (LinkedIn, Facebook or your Google account) or simply skip this step and enter your name and email address. We keep your data strictly confidential. </p>
                        </div>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                <div className='step-box-section mt-3'>
                      <div className='step-title'>
                          <h6>2. Create</h6>
                      </div>
                      <div className='step-class'>
                          <h6>Achieve Beauty With Ease</h6>
                      </div>
                      <div className='step-pragrah'>
                        <p>Choose one of our beautiful, professionally designed resume or cover letter formats. Add your personal info and choose and edit the necessary sections. Customize the layout and visuals as much (or as little) as you want. We provide a ton of ready content with lots of room for your own creativity and needs.</p>
                      </div>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                <div className='step-box-section mt-3'>
                      <div className='step-title'>
                          <h6>3. Download</h6>
                      </div>
                      <div className='step-class'>
                          <h6>Now It’s Yours!</h6>
                      </div>
                      <div className='step-pragrah'>
                        <p>Export your new resume, CV or application letter in one of the available formats. PDF will provide you with the best and most consistent visual formatting. Word files allow you to edit the document further or submit the resume to an online application system. You can also share your career updates online.</p>
                      </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default home
