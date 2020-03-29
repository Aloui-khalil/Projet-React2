import React from 'react';
import Button from 'react-bootstrap/Button';
import SuprNav from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Link, Route } from "react-router-dom";
import H2B from './Components/H2B';

const SuprCart =()=> {
    return (<div>
       <SuprNav></SuprNav>


<H2B className="H2B" id="MenCart">Cart</H2B>

<div id="EmptyCart" className="container">
  <div style={{textAlign:"center",marginBottom:"80px"}} >
     <h2>Your Shopping Cart is empty.</h2>
      <Link to="/"> <Button variant="outline-danger" style={{marginTop:"10px"}}>Add an article</Button> </Link>
  </div>
  </div>
  <Footer></Footer>
</div>)
}
export default SuprCart ;


