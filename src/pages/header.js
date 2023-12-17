import React from 'react'
import logo from '../img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
const header = () => {
  return (
    <div>
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='navbar-link'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/templates">Templates</Nav.Link>               
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>               
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll" className='login-button'>
          <Nav>
            <Nav.Link as={Link} to="#">Log in</Nav.Link>            
            <div className="sign-in">
            <Nav.Link as={Link} to="#">Sign in</Nav.Link>            
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default header;