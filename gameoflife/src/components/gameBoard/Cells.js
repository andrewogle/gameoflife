import React,{useEffect,useState} from 'react';

const Cells = (props) => {

    return (  <div className="Cell" style={{
        left: `${props.cellSize * props.x + 1}px`,
        top: `${props.cellSize * props.y + 1}px`,
        width: `${props.cellSize - 1}px`,
        height: `${props.cellSize - 1}px`,
    }} /> );
}
 
export default Cells;

