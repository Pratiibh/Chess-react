import React from 'react';

import './board.css';
import Square from './squares.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  renderSquare(i, j, squareShade) {
    let boardItems = this.props.board.startingBoard;
    return <Square
    piece={boardItems && boardItems[i][j]}
    shade={squareShade}
    />
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const rows = [];
      for (let j = 0; j < 8; j++) {
        let squareShade;
        if( isLightSquare(i) && isLightSquare(j) || !isLightSquare(i) && !isLightSquare(j) ) {squareShade = "light-square"}
        //if position is comprised of both even numbers or odd numbers
        //assign class name 'light-square' other wise assign 'dark-square'
        else  { squareShade = "dark-square"}
        rows.push(this.renderSquare(i, j, squareShade));
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

function isLightSquare(int) {
  return int % 2 == 0;
}
