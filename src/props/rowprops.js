import React from 'react';
import "./props.css";

function RowProps(props) {
  return (
    <div className='propsouterdiv'>
      
        
    <div className="listofmoves">

    <div 
    className="singlmove" 
    style={{ backgroundImage:  `url(${props.bgpath})` }}
    
    onClick={() => props.fun()} 

>
</div>

    </div>

    </div>
    
  );
}

export default RowProps;
