import React, { useState, useEffect } from 'react';
import './App.css';
import GameBoard from './components/board/game-board.js';
import DisplayBoard from './components/board/display-board.js';
import Updater from './api/board-updater.js';
import DeadHomies from './components/board/deadHomies.js';
import Nav from './components/banner/banner.js';
import { arrayIncludes } from './board/boardmethods.js';
import exampleGame from './board/exampleGame.js';
import { doManyMoves } from './board/redoMove.js';

// this imports the board as well as all the objects (pieces)
// naming convention is in notes folder
import * as boardItems from './board/startingBoard.js';

function App() {
  let defaultPieceState = { piece: null };
  let targetId;

  let [state, setState] = useState({ ...boardItems });
  let [activePiece, setActivePiece] = useState(defaultPieceState);
  let [moveList, setMoveList] = useState([]);
  let [deadWhite, setDeadWhite] = useState([]);
  let [deadBlack, setDeadBlack] = useState([]);
  let [turn, setTurn] = useState('white');

  useEffect(() => {
    const showAvailableMoves = moves => {
      moves.forEach((move, idx) => {
        targetId = `${move[0]}${move[1]}`;
        let myId = document.getElementById(targetId);
        myId.classList.add('flash');
      });
    };

    if (activePiece.piece) {
      showAvailableMoves(activePiece.piece.availableMoves);
    }
  }, [activePiece]);

  const returnToDefault = () => {
    let elems = document.querySelectorAll('span.flash');
    elems.forEach(elem => {
      elem.classList.remove('flash');
    });
  };

  function flipTurn(turnString) {
    return turnString === 'white' ? 'black' : 'white';
  }

  function handleClick(position) {
    if (activePiece.piece === null) {
      if (state.startingBoard[position[0]]) {
        if (
          state.startingBoard[position[0]][position[1]] &&
          state.startingBoard[position[0]][position[1]].color === turn
        ) {
          setActivePiece({
            piece: state.startingBoard[position[0]][position[1]]
          });
        }
      }
    } else {
      let moveArr = [activePiece.piece.currentSpace, position];
      setMoveList([...moveList, moveArr]);
      if (
        state.startingBoard[position[0]][position[1]] &&
        arrayIncludes(activePiece.piece.availableMoves, position)
      ) {
        grimReaper(position);
      }
      if (arrayIncludes(activePiece.piece.availableMoves, position)) {
        setTurn(flipTurn(turn));
      }
      activePiece.piece.legalMove(
        position,
        state.startingBoard,
        state.pieceArr
      );

      setActivePiece(defaultPieceState);
      returnToDefault();
    }
  }

  function resetBoard() {
    let resettedBoard = state.resetBoard();
    setState({ ...state, startingBoard: resettedBoard });
    setDeadBlack([]);
    setDeadWhite([]);
    setMoveList([]);
    setTurn('white');
  }
  function grimReaper(position) {
    if (state.startingBoard[position[0]]) {
      let victim = state.startingBoard[position[0]][position[1]];
      if (victim) {
        if (victim.color === 'white') {
          setDeadWhite([...deadWhite, victim]);
        }
        if (victim.color === 'black') {
          setDeadBlack([...deadBlack, victim]);
        }
      }
    }
  }

  return (
    <>
      {/* <button className='reset' onClick={() => resetBoard()}> Reset board</button> */}
      <Nav/>
      <div>
        <span id="banner-text">ULTIMATE CHESS</span>
      </div>
      <DeadHomies white={deadWhite} black={deadBlack} />
      <Updater moves={moveList} />
      <DisplayBoard board={state} />

      <div
        onClick={e => {
          let clickedPiece = e.target.id.split('');
          let parsedId = clickedPiece.map(num => {
            return parseInt(num);
          });
          handleClick(parsedId);
        }}
      >
        <GameBoard board={state} />
      </div>
    </>
  );
}

export default App;
