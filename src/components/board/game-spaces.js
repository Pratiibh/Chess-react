import React from 'react';

export default function Spaces(props) {
  let defaultClass = "game-pieces " + props.shade;
  let id = `${props.ycoord}${props.xcoord}`;
  let targetId;

  const showAvailableMoves = moves => {
    moves.forEach((move, idx) => {
      // let newClass = "space-default " + props.shade + " test"
      targetId = `${move[0]}${move[1]}`
      let myId = document.getElementById(targetId);
      myId.classList.add('flash');
    });
  };

  const returnToDefault = spaces => {
    spaces.forEach((space, idx) => {
      targetId = `${space[0]}${space[1]}`
      let myId = document.getElementById(targetId);
      myId.classList.remove('flash');
    });
  };

  return (
    <span
      id={id}
      className={defaultClass}
      onMouseLeave={() => {
        if (props.piece) {
          returnToDefault(props.piece.availableMoves);
        }
      }}
      onClick={() => {
        if (props.piece) {
          showAvailableMoves(props.piece.availableMoves);
        }
      }}
    >
   <img id={id} className="icon" src={props.piece && props.piece.icon} width="30" />

    </span>
  );
}
