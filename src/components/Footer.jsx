import React from 'react'
import {Container } from 'react-bootstrap';
import footerlogo from './images/logo.png'


function Footer() {
  return (
    <Container fluid className='footer'>
    <img src={footerlogo}className='p-3' alt="" />
    
        <p>
          "Shop with us and discover a world of style, convenience, and savings. Happy shopping!"</p>
          <span>Fashion</span> <span>Men</span> <span>Women</span> <span>kids</span>
          <h5 className='py-3'>Contact:<span>+91 568 325 1524</span></h5>
          <p>© 2023 All Rights Reserved. Design by <span>Benny</span> </p>
  </Container>
  )
}

export default Footer