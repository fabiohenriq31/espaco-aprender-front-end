import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carrossel.css'

import one from '../images/1.jpg'; 
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';


function Carrossel() {
  return (
  <div>
    <Carousel interval={3000}
    prevIcon={<span className="carousel-control-prev-icon custom-prev-icon" />}
    nextIcon={<span className="carousel-control-next-icon custom-next-icon" />}
    >
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={one} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={two} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={three} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={four} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>

    
  </div> 
  );
}

export default Carrossel;
