import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter, Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider =()=> {
    return (<div>
    <Carousel>
  <Carousel.Item>
  <Link to="/Men"><img className="d-block w-100" src="./LastSlider3.png" alt="First slide"/></Link>
   <Carousel.Caption>
      <h3 className="DarkCarousell">Polo</h3>
      <p className="DarkCarousell">70$</p>
    </Carousel.Caption>   
   </Carousel.Item>    
    
  <Carousel.Item>
  <Link to="/Women"> <img className="d-block w-100" src="./LastSlider1.png" alt="Second slide"/></Link>
    <Carousel.Caption>
      <h3 className="DarkCarousell">Coat</h3>
      <p className="DarkCarousell">100$</p>
    </Carousel.Caption>
  </Carousel.Item>

    <Carousel.Item>
    <Link to="/Men"> <img className="d-block w-100" src="./Slider2.png"  alt="Third slide"/></Link>
    <Carousel.Caption>
        <h3 className="DarkCarousell">T-Shirt</h3>
        <p className="DarkCarousell">30$</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>      

</div>
)
}
export default Slider ;