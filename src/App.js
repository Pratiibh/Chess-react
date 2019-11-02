import React, { useState } from 'react';
// import './App.css';
import GameBoard from './components/board/game-board.js';
import DisplayBoard from './components/board/display-board.js';
import { checkChecker } from './board/boardmethods.js';
import Updater from './api/board-updater.js';

//this imports the board as well as all the objects (pieces)
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js';

function App() {
  let [state, setState] = useState({ ...boardItems });
  let [moveList, setMoveList] = useState([]);
  
  function moveQueen() {
    let newBoard =
      state.startingBoard &&
      state.startingBoard[1][3].move(
        [6, 4],
        state.startingBoard,
        state.pieceArr
      );
    state.startingBoard[1][2].move([6, 3], state.startingBoard, state.pieceArr);
    setState({ ...state, currentBoard: newBoard });
    // this needs to be extended to cover both kings this is sort of a MVP version of checking for check
    checkChecker(boardItems.wkng, boardItems.pieceArr);
    checkChecker(boardItems.bkng, boardItems.pieceArr);
  }

  function resetBoard() {
    let resettedBoard = state.resetBoard();
    setState({ ...state, startingBoard: resettedBoard });
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
      <button onClick={() => resetBoard()}> Reset board</button>
      <DisplayBoard board={state} />
      <GameBoard board={state} />
      <Updater board={state} />
    </>
  );
}

export default App;
