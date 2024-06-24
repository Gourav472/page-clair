import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/svg/navbar-logo.svg'
import { Language } from '../assets/icon';
import cart from '../assets/images/svg/kart.svg'
import image1 from '../assets/images/hero.webp'
import bottomheader from '../assets/images/bottom-header.webp'
import Light1 from "../assets/images/svg/light1.svg"
import light2 from "../assets/images/svg/light2.svg"
import Mouse from '../assets/images/svg/mouse.svg'
const Herosection = () => {
  return (
    <section className=' bg-hero position-relative '>
      <Navbar expand="lg" className="bg-navbar py-navbar border-navbar">
        <Container>
          <div className=' d-flex align-items-center gap-12'>
            <img className='cursor' src={logo} alt="icon" />
            <h3 className='cursor mb-0 manrope fw-600 text-32 lh-48 yellow'>$CLAIR</h3>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center gap-links">
              <Nav.Link href="#About" className=' manrope fw-medium text-16 lh-24 links-navbar'>About</Nav.Link>
              <Nav.Link href="#Tokenomics" className=' manrope fw-medium text-16 lh-24 links-navbar'>Tokenomics</Nav.Link>
              <Nav.Link href="#Audit" className=' manrope fw-medium text-16 lh-24 links-navbar'>Audit</Nav.Link>
              <Nav.Link href="#Roadmap" className=' manrope fw-medium text-16 lh-24 links-navbar'>Roadmap</Nav.Link>
              <Nav.Link href="#WhitePaper" className=' manrope fw-medium text-16 lh-24 links-navbar'>White Paper</Nav.Link>

              <NavDropdown className='pl-dropdown d-none d-lg-block' title={<Language />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  中国人
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className=' d-flex flex-column align-items-center pt-hero'>
          <h2 className=' mb-0 manrope fw-700 text-60 lh-72 white text-center'>Presale is <span className=' yellow'>Live</span></h2>
          <p className=' mb-0 manrope fw-400 text-16 lh-24 text-center max-702 pt-3 grey2'>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</p>
          <button className=' d-flex align-items-center gap-10 manrope fw-700 text-16 lh-24 black btn-buy text-nowrap mt-btn-buy'>
            Buy $Clair
            <span><img src={cart} alt="kart" /></span>
          </button>
          <img className='mt-4  mt-lg-0 max-810 w-100' src={image1} alt="img" />
        </div>
      </Container>
      <div className='yellow-ellipse yellow-positon '></div>
      <img className=' position-relative  min-w-1440 w-100 bottom-header' src={bottomheader} alt=" black-bottom" />
      <a className=' mouse-position position-absolute' href="#down"><img src={Mouse} alt="mouse" /></a>
    </section>
  )
}

export default Herosection