import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class SuprCard extends React.Component {
    state = {
       Cart:"./Cart.png", 

      }

      render() {
        return (
          <div style={{marginRight:"30px"}}>
            
          <Card className="text-center" >
          <Card.Img variant="top" src={this.props.img} alt="GiftCard" />
          <Card.Body>
            <Button variant="outline-dark" className="col-sm-10 mx-auto col-xs-2" onClick={this.props.F} >Add to Cart</Button>
          </Card.Body>
            </Card>

            </div>
              )
            }
          };
    

export default SuprCard;