import React from 'react';
import SuprCard2 from './Components/Card2';
import H2B from './Components/H2B';
import SuprNav2 from './Components/NavBar2';
import Footer from "./Components/Footer";
import Raccourci from "./Components/Raccourci";
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';


class Women extends React.Component {
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

        const Coat=[{src:"./KabboutNsé.png",title:"Coat Suprime",text:"100$"},{src:"./KabboutNsé3.png",title:"Coat Suprime",text:"110$"},{src:"./KabboutNsé4.png",title:"Coat Suprime",text:"100$"}];
        const Shirt=[{src:"./MaryoulNsé1.png",title:"SweatShirt Suprime",text:"60$"},{src:"./MaryoulNsé4.png",title:"Hoodie Suprime",text:"50$"},{src:"./MaryoulNsé3.png",title:"Hoodie Suprime",text:"50$"}];
        const Shirt2=[{src:"./MaryoulNsé5.png",title:"SweatShirt Suprime",text:"70$"},{src:"./MaryoulNsé2.png",title:"Polo",text:"60$"}];
        const Pant=[{src:"./SerwelNsé.png",title:"Pant Suprime",text:"70$"},{src:"./SerwelNsé3.png",title:"Pant Suprime",text:"80$"},{src:"./SerwelNsé2.png",title:"Pant Suprime",text:"60$"}];
        const Shoes=[{src:"./SabbatNsé1.png",title:"Sneakers Suprime",text:"100$"},{src:"./SabbatNsé.png",title:"Sneakers Suprime",text:"90$"},{src:"./SabbatNsé3.png",title:"Shoes Suprime",text:"110$"}];
  
        return (<div>
          <SuprNav2 image={this.state.Cart}></SuprNav2>

         <Raccourci></Raccourci>

    <H2B id="Coats">Coats</H2B>
     
       <div className="container col-sm-9" style={{display:"flex"}}>
          {Coat.map(article=>{return <SuprCard2 src={article.src}  title={article.title} text={article.text} F={()=>{this.AddToCart()}}></SuprCard2>})}
       </div>

 <H2B id="Shirts">Shirts</H2B>

    <div className="container col-sm-9" style={{display:"flex"}}>
           {Shirt.map(article=>{return <SuprCard2 src={article.src}  title={article.title} text={article.text} F={()=>{this.AddToCart()}}></SuprCard2>})}
     </div>

     <div className="container col-sm-6" style={{display:"flex",marginTop:"40px"}}>
          {Shirt2.map(article=>{return <SuprCard2 src={article.src}  title={article.title} text={article.text} F={()=>{this.AddToCart()}}></SuprCard2>})}
       </div>

<H2B id="Pants">Pants</H2B>

<div className="container col-sm-9" style={{display:"flex"}}>
          {Pant.map(article=>{return <SuprCard2 src={article.src}  title={article.title} text={article.text} F={()=>{this.AddToCart()}}></SuprCard2>})}
       </div>

<H2B id="Shoes">Shoes</H2B>
<div className="container col-sm-9" style={{display:"flex"}}>
          {Shoes.map(article=>{return <SuprCard2 src={article.src}  title={article.title} text={article.text} F={()=>{this.AddToCart()}}></SuprCard2>})}
       </div>

<Footer></Footer>

</div>
   )
 }
};

export default Women ;


