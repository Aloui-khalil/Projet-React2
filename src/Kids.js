import React from 'react';
import SuprCard2 from './Components/Card2';
import H2B from './Components/H2B';
import SuprNav2 from './Components/NavBar2';
import Footer from "./Components/Footer";
import Raccourci from "./Components/Raccourci";
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';


class Kids extends React.Component {
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

        const Coat=[{src:"./KabboutZghar.png",title:"Coat Suprime",text:"90$"},{src:"./KabboutZghar2.png",title:"Coat Suprime",text:"90$"},{src:"./KabboutZghar3.png",title:"Coat Suprime",text:"80$"}];
        const Shirt=[{src:"./MaryoulZghar1.png",title:"SweatShirt Suprime",text:"50$"},{src:"./MaryoulZghar2.png",title:"SweatShirt Suprime",text:"55$"},{src:"./MaryoulZghar3.png",title:"SweatShirt Suprime",text:"50$"}];
        const Shirt2=[{src:"./MaryoulZghar4.png",title:"Hoodie Suprime",text:"50$"},{src:"./MaryoulZghar5.png",title:"Shirt Suprime",text:"30$"}];
        const Pant=[{src:"./SerwelZghar2.png",title:"Pant Suprime",text:"80$"},{src:"./SerwelZghar3.png",title:"Pant Suprime",text:"70$"},{src:"./SerwelZghar.png",title:"Jeans Suprime",text:"100$"}];
        const Shoes=[{src:"./SabbatZghar.png",title:"Sneakers Suprime",text:"90$"},{src:"./SabbatZghar2.png",title:"Sneakers Suprime",text:"90$"},{src:"./SabbatZghar3.png",title:"Shoes Suprime",text:"80$"}];
  
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
export default Kids ;
