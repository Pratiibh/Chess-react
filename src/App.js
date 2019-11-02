import React, { useState } from 'react';
// import './App.css';
import GameBoard from './components/board/game-board.js';
import DisplayBoard from './components/board/display-board.js';
import { checkChecker } from './board/boardmethods.js';

//this imports the board as well as all the objects (pieces)
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js';

function App() {
  let [state, setState] = useState({ ...boardItems });
  // 2 new state vars, start and end
  // start = id on mouse over
  //end = id on mouse release

  function moveQueen() {
    let newBoard =
      state.startingBoard &&
      state.wp01.move([6, 3], state.startingBoard, state.pieceArr);
    setState({ ...state, currentBoard: newBoard });
    // this needs to be extended to cover both kings this is sort of a MVP version of checking for check
    checkChecker(boardItems.wkng, boardItems.pieceArr);
    checkChecker(boardItems.bkng, boardItems.pieceArr);
  }
  return (
    <>
      <button
        onClick={() => {
          moveQueen();
        }}
      >
        move queen
      </button>
      <DisplayBoard board={state} />
      <div onClick={(e) => { let startPosition = e.target.id.split('');
        console.log(startPosition);}}

        onMouseUp={(e) => {let endPosition = e.target.id.split('')
        console.log(endPosition)
      }} >
      <GameBoard board={state} />
      </div>
    </>
  );
}

export default App;
