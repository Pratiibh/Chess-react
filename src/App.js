import React, { useState, useEffect } from 'react';
// import './App.css';
import GameBoard from './components/board/game-board.js';
import DisplayBoard from './components/board/display-board.js';
import { checkChecker } from './board/boardmethods.js';
import Updater from './api/board-updater.js';

//this imports the board as well as all the objects (pieces)
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js';

function App() {
  let positionTracker = { start: null, end: null}
  let [state, setState] = useState({ ...boardItems });
  let [activePiece, setActivePiece] = useState(positionTracker);
  let [moveList, setMoveList] = useState([]);

  // 2 new state vars, start and end
  // start = id on mouse over
  //end = id on mouse release

  useEffect(() => {
    if(activePiece.start && activePiece.end) {
      
      let newBoard =
      state.startingBoard &&
      state.startingBoard[activePiece.start[0]][activePiece.start[1]].legalMove(activePiece.end, state.startingBoard, state.pieceArr);
    setState({ ...state, currentBoard: newBoard });
    // this needs to be extended to cover both kings this is sort of a MVP version of checking for check
    checkChecker(boardItems.wkng, boardItems.pieceArr);
    checkChecker(boardItems.bkng, boardItems.pieceArr);

    setActivePiece(positionTracker);
    }
  },[activePiece])
  
  function handleClick(pos) {
    if(activePiece.start === null) {
      setActivePiece({...activePiece, start: pos });
    }
    else {setActivePiece({...activePiece, end: pos })}
    

    // if(activePiece.start && activePiece.end) {
      
    //   let newBoard =
    //   state.startingBoard &&
    //   state.startingBoard[activePiece.start[0]][activePiece.start[1]].move(activePiece.end, state.startingBoard, state.pieceArr);
    // setState({ ...state, currentBoard: newBoard });
    // // this needs to be extended to cover both kings this is sort of a MVP version of checking for check
    // checkChecker(boardItems.wkng, boardItems.pieceArr);
    // checkChecker(boardItems.bkng, boardItems.pieceArr);

    // setActivePiece(positionTracker);
    // }
  }
  
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
      <button onClick={() => resetBoard()}> Reset board</button>
      <DisplayBoard board={state} />

      <div onClick={(e) => { 
        let clickedPiece = e.target.id.split('');
        let parsed = clickedPiece.map(int => {
          return parseInt(int);
        })
      handleClick(parsed);
      }}

        onMouseUp={(e) => {let endPosition = e.target.id.split('')
        // console.log(endPosition)
      }} >
        
      <GameBoard board={state} />
      </div>
      <Updater board={state} />
    </>
  );
}

export default App;
