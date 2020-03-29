import React from 'react';

const H2B =(props)=>{
    return (
       <div>
           <div><h2 class="H2B" style={{margin: "20px",marginLeft:"30px"}} id={props.id}>{props.children}</h2></div>
       </div>
    )
}
export default H2B;