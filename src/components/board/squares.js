import React from 'react';

export default function Square(props) {
  console.log('props.piece', props.piece && props.piece.name)
    return (
      <span className={"square-base " + props.shade}>
        {props.piece && props.piece.name}
      </span>
    );
  
}