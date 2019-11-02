import React from 'react';

export default function DisplaySpaces(props) {
  let defaultClass = 'game-spaces ' + props.shade;
  let id = `y${props.ycoord}x${props.xcoord}`;

  return <span id={id} className={defaultClass}></span>;
}
