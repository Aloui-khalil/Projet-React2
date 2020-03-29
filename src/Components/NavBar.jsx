import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Link, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const SuprNav =(props)=> {
    return (<div>
   <Navbar collapseOnSelect expand="lg"   style={{backgroundColor:"#e3231e"}} >

<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">
  <Nav.Link ><Link to="/" style={{textDecoration:'none'}}><p className="NavFelsa">Home</p></Link></Nav.Link>
  <Nav.Link ><Link to="/Men" style={{textDecoration:'none'}}><p className="NavFelsa">Men</p></Link></Nav.Link>
  <Nav.Link><Link to="/Women" style={{textDecoration:'none'}}><p className="NavFelsa">Women</p></Link></Nav.Link>
  <Nav.Link> <Link to="/Kids" style={{textDecoration:'none'}}><p className="NavFelsa">Kids</p></Link></Nav.Link>
  <div style={{textAlign:"center",marginTop:"7px"}}><Link to="/"><img src="./LogoAcceuil2.PNG" className="col-sm-3" alt="Suprime" /></Link></div>
</Nav>
<Nav>
  <Nav.Link><Link to="/Cart"><img src="./Cart.png" id="CartNav" alt="Cart"/></Link></Nav.Link>
  <Nav.Link><Link to="/SignIn"><img src="./SignUp.png" id="SignNav" alt="Sign"/></Link></Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar> 
</div>)

}
export default SuprNav ;