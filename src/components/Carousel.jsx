import React from 'react';
import {Carousel , Button} from 'react-bootstrap';

function Caro() {
  return (
    <div className='carous '>
    <Carousel>
      <Carousel.Item interval={3000}>
        <span>
       <h1>GET START</h1>
       <h1>YOUR FAVOURITE SHOPPING</h1>
       
       </span>
      
       
      </Carousel.Item >
      <Carousel.Item interval={2000}>
      <span>
      <h1>WELCOME</h1>
       <h1>WHERE CONVENIENCE MEET STYLE</h1>
       </span>
      
      </Carousel.Item>
      
    </Carousel>
    <Button variant="dark" className='buybtn'>Buy Now</Button>
    </div>
  );
}

export default Caro;