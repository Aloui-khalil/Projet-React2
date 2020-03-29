import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import SuprNav from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Link, Route } from "react-router-dom";
import swal from 'sweetalert';

class SignIn extends React.Component {

  state={
    name:"",
    email:"",
    password:""
  }

  SignInF(){
    if (this.state.email == "" || this.state.password == "" || this.state.name == ""){
      swal({
        title: "You forgot something !",
        text: "Please fill in the empty boxes.",
        icon: "warning",
      }); 
    }else{
      swal({
         title: "Successfully logged in !",
         text: "Welcome back "+ this.state.name +" .",
         icon: "success",
       });
       this.setState({email: ""});
       this.setState({password: ""});
       this.setState({name: ""});    
   }
}

  render () {
 
    return (<div>
     
        <SuprNav></SuprNav>
        <div style={{textAlign:"center",margin:"20px"}}>
          <h2 > Sign In</h2>
      </div>


<div className="container" style={{marginBottom: "20px",textAlign:"center"}}>
<Form>

<Form.Group controlId="formBasicFname">
    <Form.Label>First name</Form.Label>
    <Form.Control type="email" value={this.state.name} placeholder="Enter first name" className="col-sm-6 mx-auto col-xs-6" onChange={(e) =>{this.setState({name : e.target.value})}}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={this.state.email} placeholder="Enter email" className="col-sm-6 mx-auto col-xs-6" onChange={(e) =>{this.setState({email : e.target.value})}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={this.state.password} placeholder="Password"  className="col-sm-6 mx-auto col-xs-6" onChange={(e) =>{this.setState({password: e.target.value})}}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>

  <Button variant="outline-danger"  onClick={()=>{this.SignInF()}}>
    LogIn
  </Button>
  <hr></hr>
            <div style={{textAlign:"center"}}>
            <p>New member ?  <Link to="/SignUp"><a>Sign Up</a></Link></p>
            </div>
</Form>

</div>


<Footer></Footer>
</div>)}
}
export default SignIn ;