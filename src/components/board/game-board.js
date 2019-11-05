import React from 'react';
import './board.css';
import Spaces from './game-spaces.js';

const API = 'http://localhost:3000/api/v1/board';

export default class Board extends React.Component {
  renderSpace(i, j) {
    let boardItems = this.props.board.startingBoard;
    return (
      <Spaces
        board={boardItems}
        pieceArr={this.props.board.pieceArr}
        piece={boardItems[i][j]} //this gives access to all methods in Piece class
        ycoord={i}
        xcoord={j}
      />
    );
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const rows = [];
      for (let j = 0; j < 8; j++) {
        rows.push(this.renderSpace(i, j));
      }
      board.push(<div className="board-row">{rows}</div>);
    }

    return <div id="clear" className="board-container">{board}</div>;
  }
}
