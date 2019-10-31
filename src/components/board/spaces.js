import React from 'react';

export default function Spaces(props) {
  let defaultClass = "space-default " + props.shade;
  let id = `y${props.ycoord}x${props.xcoord}`;
  let targetId;
  const showAvailableMoves = (moves) => {
    moves.forEach((move, idx) => {
      // let newClass = "space-default " + props.shade + " test"
      targetId = `y${move[0]}x${move[1]}`
      let myId = document.getElementById(targetId);
      myId.classList.add("flash")
      })
  }

  const returnToDefault = (spaces) => {
    spaces.forEach((space, idx) => {
      targetId = `y${space[0]}x${space[1]}`
      let myId = document.getElementById(targetId);
      myId.classList.remove("flash");
      })
  }

    return (
      // <span onClick={
      // () => { props.piece && props.piece.position
      //   ? alert(`you selected ${props.piece.name} at position ${props.piece.position}`)
      //   : alert(`invalid selection`)}
      // } 
      // className={"space-default " + props.shade + " flash"}>
      //   <img src={props.piece && props.piece.icon} width='30'/>
      // </span>

       <span id={id} className={defaultClass} 
       onMouseLeave={() => {
         if(props.piece){
        returnToDefault(props.piece.availableMoves)}
         }
      }
       onMouseOver={ () => { 
         if(props.piece){
         showAvailableMoves(props.piece.availableMoves) }
       }
  
       }>

      
      <img src={props.piece && props.piece.icon} width='30'/>

        </span>
    );
}