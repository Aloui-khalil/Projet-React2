import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const GiftCard =()=> {
    return (<div>
<div style={{ margin: '20px'}} >
   <h2 className="H2B col-sm-12 mx-auto col-xs-3">Gift Cards:</h2>
</div>
<div style={{ display: 'flex',paddingBottom:"15px",marginBottom:"20px" }} className="col-sm-10 mx-auto col-xs-2">
   <Card className="text-center">
  <Card.Img variant="top" src="./Gcard1.png" alt="GiftCard" />
  <Card.Body>
    <Button variant="outline-dark" className="col-sm-10 mx-auto col-xs-2">Add to Cart</Button>
  </Card.Body>
    </Card>

    <Card style={{ marginRight: '35px',marginLeft: '35px' }} className="text-center">
  <Card.Img variant="top" src="./Gcard2.png" alt="GiftCard" />
  <Card.Body>
    <Button variant="outline-dark" className="col-sm-10 mx-auto col-xs-2">Add to Cart</Button>
  </Card.Body>
    </Card>

    <Card className="text-center">
  <Card.Img variant="top" src="./Gcard3.png" alt="GiftCard" />
  <Card.Body>
    <Button variant="outline-dark" className="col-sm-10 mx-auto col-xs-2">Add to Cart</Button>
  </Card.Body>
    </Card>
</div>

</div>)
}
export default GiftCard ;