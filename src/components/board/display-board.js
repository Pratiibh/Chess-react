import React from 'react';
import './board.css';
import Spaces from './spaces.js';

export default class Board extends React.Component {

  renderSpace(i, j, spaceShade) {
    let boardItems = this.props.board.startingBoard;
    return <Spaces
    piece={boardItems[i][j]}
    shade={spaceShade}
    ycoord={i}
    xcoord={j}
    />
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const rows = [];
      for (let j = 0; j < 8; j++) {
        let spaceShade;
        if( (isLightSpace(i) && isLightSpace(j)) || (!isLightSpace(i) && !isLightSpace(j)) ) {spaceShade = "light-space"}
        //if position is comprised of both even numbers or odd numbers
        //assign class name 'light-space' other wise assign 'dark-space'
        else  { spaceShade = "dark-space"}
        rows.push(this.renderSpace(i, j, spaceShade));
      }
      board.push(<div className="board-row">{rows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}

function isLightSpace(int) {
  return int % 2 === 0;
}
