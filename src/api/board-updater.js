import { useState } from 'react';

import * as boardItems from '../board/startingBoard.js';

const API = 'http://localhost:3000/api/v1/chess';

function Updater() {
  let [state] = useState({ ...boardItems });
  let board = state.startingBoard;
  let json = JSON.stringify(board);
  fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.error);

  return null;
}

export default Updater;
