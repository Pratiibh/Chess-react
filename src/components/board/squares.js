import React from 'react';

export default function Square(props) {
  console.log('icon', props.piece && props.piece.icon)
    return (
      <span onClick={() => {alert(`you selected ${props.piece.name} at position ${props.piece.position}`)}} className={"square-base " + props.shade}>
        <img src={props.piece && props.piece.icon} width='30'/>
      </span>
    );
  
}