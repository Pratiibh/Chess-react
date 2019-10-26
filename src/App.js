import React from 'react';
import logo from './logo.svg';
import './App.css';

//this imports the board as well as all the objects (pieces) 
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js'
console.log(boardItems.startingBoard)
console.log(boardItems.br00)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
