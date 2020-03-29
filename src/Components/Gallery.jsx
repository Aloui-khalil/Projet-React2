import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

const Gallery =()=> {
    return (<div>
        <hr/>
 <div className="gallery" id="gallery" style={{margin:"40px"}}>
         <div className="mb-3 pics all ">
            <img className="img-fluid" src="./1.png" alt="Card image cap"/>
         </div>

          <div className="mb-3 pics all ">
            <Link to="/Women"><img className="img-fluid" src="./3.png" alt="Card image cap" /></Link>
          </div>
        
          <div className="mb-3 pics all ">
            <Link to="/Men"><img className="img-fluid" src="./2.png" alt="Card image cap" /></Link>
          </div>

          <div className="mb-3 picsall ">
          <Link to="/Men"><img className="img-fluid" src="./4.png" alt="Card image cap" /></Link>
          </div>

          <div className="mb-3 pics all ">
          <Link to="/Kids"><img className="img-fluid" src="./6.png" alt="Card image cap" /></Link>
          </div>

          <div className="mb-3 pics all ">
            <img className="img-fluid" src="./5.png" alt="Card image cap" />
          </div>
        </div>


 </div>)
}
export default Gallery ;
           


