import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import tempvector from '../img/vector.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tempimg1 from '../img/temresume1.jpg'
import tempimg2 from '../img/temresume2.jpg'
import tempimg3 from '../img/temresume3.jpg'
import tempimg4 from '../img/temresume4.jpg'
import tempimg5 from '../img/temresume5.jpg'
import tempimg6 from '../img/temresume6.jpg'
import '../css/templates.css'

const templates = () => {
  return (
    <div>
      <div className='template-main'>

        <div className='slider-img'>
            <div className='slider-text'>
                  <h3>Templates</h3>
                  <div className='flex justify-content-center vector-text'>
                      <h6>Home</h6>
                      <div className='vector-img'>
                      <img src={tempvector}/>
                      </div>
                      <h6 className='template-slider-text-color'>Templates</h6>
                  </div>
            </div>
        </div>

        {/* <div className='template-link-section'>
          <Container>
              <Row>
                <Col lg={3}>
                  <div className='template-link'>
                        <a href=''>Trending</a>
                        <a href=''>Professional</a>
                  </div>
                </Col>
                <Col lg={3}>
                <div className='template-link'>
                        <a href=''>Simple</a>
                        <a href=''>Modern</a>
                  </div>
                </Col>
                <Col lg={3}>
                <div className='template-link'>
                        <a href=''>Creative</a>
                        <a href=''>Academic</a>
                  </div>
                </Col>
              </Row>
          </Container>
        </div> */}
        
        <div className='resume-detail'>
        <Container>

                <div className='resume-image-background'>
                <Row>
                  <Col lg={4} md={6}>
                    <div className='resume-image'> 
                    <img src={tempimg1}/>
                    <div className='use-template'>
                      <a href=''>Use This Template</a>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='resume-image mrg-top-first-image'> 
                    <img src={tempimg2}/>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='resume-image mrg-top-second-image'> 
                    <img src={tempimg3}/>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='resume-image mrg-top-second-image martop'> 
                    <img src={tempimg4}/>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='resume-image mrg-top-second-image martop'> 
                    <img src={tempimg5}/>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='resume-image mrg-top-second-image martop'> 
                    <img src={tempimg6}/>
                    </div>
                  </Col>
                </Row>
                </div>
                <div className='browse-more'>
                    <a href="">Browse More</a>
                </div>
                </Container>
            </div>
        
      </div>
    </div>
  )
}

export default templates