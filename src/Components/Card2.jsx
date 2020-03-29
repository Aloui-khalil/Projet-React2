import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class SuprCard2 extends React.Component {

      render() {
        return (
          <div style={{marginRight:"50px",textAlign:"center"}}>

            <Card style={{ width: '18rem'}} >
             <Card.Img variant="top" src={this.props.src} style={{ width: '18rem'}} className="SuprA" />
         <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
            <Button variant="outline-dark" onClick={this.props.F} >Add to Cart</Button>
            </Card.Body>
        </Card>  
            </div>
              )
            }
          };
    
export default SuprCard2;