import { useEffect } from 'react';
import { doManyMoves } from '../board/redoMove.js';
import * as board from '../board/startingBoard.js';

const API = 'http://localhost:3000/api/v1/chess';

function Updater(props) {
  useEffect(() => {
    const moveString = JSON.stringify(props.moves);
    console.log('moveString Thing', moveString);
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: moveString
    })
      .then(response => response.json())
      .then(data => console.log('POST', data))
      .catch(console.error);
  }, [props.moves]);
  return null;
}

function GetMoves(props) {
  useEffect(() => {
    fetch(API)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('GET', data);
        doManyMoves(data, board, [...board.pieceArr]);
      })
      .catch(console.error);
  }, [props.moves]);
  return null;
}

export { Updater, GetMoves };
