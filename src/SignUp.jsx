import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SuprNav from "./Components/NavBar";
import Footer from "./Components/Footer";
import swal from 'sweetalert';


class SignUp extends React.Component {

  state={
    email:"",
    password:"",
    password2:"",
    Fname:"",
    Lname:""
  }

  SignUpF(){
    if (this.state.email == "" || this.state.password == "" || this.state.password2 == "" || this.state.Fname == "" || this.state.Lname == ""){
      swal({
        title: "You forgot something !",
        text: "Please fill in the empty boxes.",
        icon: "warning",
      }); 
    }else  if (this.state.password !== this.state.password2){
      swal({
         title: "Please verify your password !",
         icon: "warning",
       });
   }else{
   
      swal({
         title: "Successfully submitted !",
         text: "Thank you for submitting "+this.state.Fname+" .",
         icon: "success",
       });
       this.setState({email: ""});
       this.setState({password: ""});   
       this.setState({password2: ""});
       this.setState({Fname: ""});
       this.setState({Lname: ""});   
   }
}


  render(){ 

    return (<div>
        <SuprNav></SuprNav>
        <div style={{textAlign:"center",margin:"20px"}}>
          <h2 > Sign Up</h2>
      </div>


        <div className="container" style={{marginBottom: "20px",textAlign:"center"}}>
<Form>
<Form.Label>First and Last name</Form.Label>
<Form.Group>
<Form.Row>

  <div className="container col-sm-6 mx-auto col-xs-6" style={{display:"flex"}}>

      <Form.Control placeholder="First name" style={{marginRight:"20px"}} value={this.state.Fname}  onChange={(e) =>{this.setState({Fname : e.target.value})}}/>

      <Form.Control placeholder="Last name" value={this.state.Lname}  onChange={(e) =>{this.setState({Lname : e.target.value})}}/>

  </div>

  </Form.Row>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  className="col-sm-6 mx-auto col-xs-6" value={this.state.email}  onChange={(e) =>{this.setState({email : e.target.value})}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  className="col-sm-6 mx-auto col-xs-6" value={this.state.password}  onChange={(e) =>{this.setState({password : e.target.value})}}/>
    <div style={{marginTop:"20px"}}> 
    <Form.Control type="password" placeholder="Confirm Password"  className="col-sm-6 mx-auto col-xs-6" value={this.state.password2}  onChange={(e) =>{this.setState({password2 : e.target.value})}}/>
    </div>
   
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I would like to be informed of new articles by e-mail." />
  </Form.Group>

  <Button variant="outline-danger" onClick={()=>{this.SignUpF()}}>
    Submit
  </Button>
 
</Form>

</div>


<Footer></Footer>

</div>
)
    }
}
export default SignUp ;