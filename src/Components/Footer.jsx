import React from 'react';

class Footer extends React.Component {
  state = {
  
      Fb:"./Fb.PNG",

      Twit:"./twitter.PNG",

      Insta:"./Insta.PNG",

    }
      Fb (){
        this.setState({Fb:"./Fb2.png"});
      }

      Fb2 (){
        this.setState({Fb:"./Fb.png"});
      }

      Twit (){
        this.setState({Twit:"./twitter2.PNG"});
      }

      Twit2 (){
        this.setState({Twit:"./twitter.PNG"});
      }

      Insta (){
        this.setState({Insta:"./Insta2.PNG"});
      }

      Insta2 (){
        this.setState({Insta:"./Insta.PNG"});
      }

    render() {
      
    return (<div style={{marginTop:"50px"}}>
      <div style={{backgroundColor:"#313234",paddingTop:"30px"}}>
        <div className="RSDIV col-sm-12 mx-auto col-xs-6 " style={{textAlign:"center"}} >
            <img src="./SuprimeLogo3.PNG" alt="Suprime" style={{width:"90px"}} />
            <p >Created by Aloui Khalil, Suprime is a low-cost version of Supreme.</p> 
        </div>

      <div >
        <div className="col-sm-6 mx-auto col-xs-3">
            <img src="./CreditCard.png" alt="Mastercard2"  className="col-sm-5 mx-auto col-xs-3" style={{float:"right", marginTop:"30px"}} />
             <p id="FlwUs" >Follow us on :</p>
             <a href="https://www.facebook.com/SuprimeClothes/?modal=admin_todo_tour" > <img src={this.state.Fb} alt="Facebook" className="Rs" onMouseOver={()=>{this.Fb()}} onMouseLeave={()=>{this.Fb2()}} /> </a>
             <a href="https://www.instagram.com/suprimeclothes/"> <img src={this.state.Insta} alt="Instagram" className="Rs" onMouseOver={()=>{this.Insta()}} onMouseLeave={()=>{this.Insta2()}}/></a>
             <a href="https://twitter.com/Suprime10905519">  <img src={this.state.Twit} alt="Twitter" className="Rs" onMouseOver={()=>{this.Twit()}} onMouseLeave={()=>{this.Twit2()}}/></a>
        </div>

         <br></br>
         <div class="Final">
          <p >Tel:+216 29197240 <br></br>
           <a id="Adress" href="https://www.google.com/maps/place/Rue+du+Lieutenant+Bejaoui,+Ariana/@36.8515098,10.1743772,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd34af30083687:0xdb368a737f3128e7!8m2!3d36.8515098!4d10.1765712https://www.google.com/maps/place/Rue+du+Lieutenant+Bejaoui,+Ariana/@36.8515098,10.1743772,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd34af30083687:0xdb368a737f3128e7!8m2!3d36.8515098!4d10.1765712"> Lieutenant Bejaoui Street, Ariana</a></p>
        </div>
     

        <div>
          <a href="#Top"><img src="./FlecheHaut.png" alt="FlecheHaut" id="FlecheHaut"/></a> 
        </div>

       <div >
          <p id="Finale">Suprime © 2020</p>
        </div>
        </div>
        </div>
</div>)
}
}
export default Footer ;


