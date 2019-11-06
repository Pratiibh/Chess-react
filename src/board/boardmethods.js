import React from 'react';

export { checkChecker, arrayIncludes };

function checkChecker(king, allPiecesArr) {
  let bool = false;
  allPiecesArr.forEach(piece => {
    if (arrayIncludes(piece.availableMoves, king.currentSpace)) {
      bool = true;
    }
  });
  if (bool) {
  }
  return bool;
}

function arrayIncludes(bigArr, lilArr) {
  let bool = false;
  bigArr.forEach(pair => {
    if (pair[0] === lilArr[0] && pair[1] === lilArr[1]) {
      bool = true;
    }
  });
  return bool;
}
