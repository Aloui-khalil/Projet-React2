import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Raccourci =()=> {
    return (<div>

     <div style={{textAlign:"center",paddingTop:"15px",paddingBottom:"15px"}} className="col-sm-12 col-xs-1 Choose" >
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" className="labelZina"><a href="#Coats" className="linkZina" >Coats</a></Button>
            <Button variant="secondary" className="labelZina"><a href="#Shirts" className="linkZina">Shirts</a></Button>
            <Button variant="secondary" className="labelZina"><a href="#Pants" className="linkZina">Pants</a></Button>
            <Button variant="secondary" className="labelZina"><a href="#Shoes" className="linkZina">Shoes</a></Button>
        </ButtonGroup>
     </div>
</div>)
}
export default Raccourci ;
    

    




