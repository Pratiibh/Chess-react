import React, { useState } from 'react';
// import './App.css';
import DisplayBoard from './components/board/display-board.js'

//this imports the board as well as all the objects (pieces) 
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js'

function App() {
  let [state, setState] = useState({...boardItems});


function moveQueen() {
  let newBoard = state.startingBoard && state.startingBoard[7][4].move([1, 0], state.startingBoard);
  setState({...state, currentBoard: newBoard})
}
  return (
    <>
    <button onClick={()=> {moveQueen()}}>move queen</button>
      <DisplayBoard board={state} />
    </>
  );
}

export default App;
