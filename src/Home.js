import React from 'react';
import swal from 'sweetalert';
import SuprNav2 from './Components/NavBar2';
import SuprCard from './Components/Card';
import Slider from "./Components/Slider";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import H2B from './Components/H2B';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class Home extends React.Component {
  state = {
        Cart:"./Cart.png",
    }

    AddToCart(){

      swal( "Successfully added to cart!","", "success");
  
  if(this.state.Cart === "./Cart.png"){
     this.setState({Cart:"./Cart1.png"});}
  
  else if (this.state.Cart === "./Cart1.png"){
     this.setState({Cart:"./Cart2.png"});}
  
  else if (this.state.Cart === "./Cart2.png"){
    this.setState({Cart:"./Cart3.png"});}
          
  else if (this.state.Cart === "./Cart3.png"){
    this.setState({Cart:"./Cart4.png"});}
          
  else if (this.state.Cart === "./Cart4.png"){
     this.setState({Cart:"./Cart5.png"});}
          
  else if (this.state.Cart === "./Cart5.png"){
     this.setState({Cart:"./Cart6.png"});}
     
   else if (this.state.Cart === "./Cart6.png"){
      this.setState({Cart:"./Cart7.png"});}  
  
   else if (this.state.Cart === "./Cart7.png"){
      this.setState({Cart:"./Cart8.png"});}
   
    else if (this.state.Cart === "./Cart8.png"){
       this.setState({Cart:"./Cart9.png"});}   
  
    else if (this.state.Cart === "./Cart9.png"){
        this.setState({Cart:"./Cart10.png"});}         
        
     else if (this.state.Cart === "./Cart10.png"){
         this.setState({Cart:"./Cart11.png"});}   
  
     else if (this.state.Cart === "./Cart11.png"){
          this.setState({Cart:"./Cart12.png"});}   
  
     else if (this.state.Cart === "./Cart12.png"){
           this.setState({Cart:"./Cart13.png"});}
  
  
    }
  
  render() {

      const tab=[{img:"./GCard1.png"},{img:"./GCard2.png"},{img:"./GCard3.png"}];

    return (
      <div id="Top">
     <SuprNav2 image={this.state.Cart} ></SuprNav2>
      <Slider>
      </Slider>

      <H2B>Gift Cards:</H2B>

    <div style={{display:"flex",marginBottom:"30px",textAlign:"center"}} className="container">
        {tab.map(article=>{return <SuprCard img={article.img} F={()=>{this.AddToCart()}}></SuprCard>})}
    </div>
        
      <Gallery>
      </Gallery>

      <Footer>
      </Footer>

        </div>
          )
        }
      };

    export default Home ;


