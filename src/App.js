import React, {useState, useEffect}from 'react';
// import './App.css';
import GameBoard from './components/game-board.js'
import DisplayBoard from './components/board/display-board.js'

//this imports the board as well as all the objects (pieces) 
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js'

function App() {
  let [state, setState] = useState({});
  useEffect(() => {
    setState({...boardItems});
  }, [])
  // console.log(state)
  return (
    <>
    <DisplayBoard board={state} />
    <GameBoard board={state}/>
    </>
  );
}

export default App;
