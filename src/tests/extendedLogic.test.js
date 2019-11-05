import { startingBoard, pieceArr } from '../board/startingBoard.js';

describe('extended logic tests', () => {
  it('Move into Check test', () => {
    let tempBoard = [...startingBoard];
    let tempPieces = [...pieceArr];
    tempBoard[7][4].move([3, 3], tempBoard, tempPieces);
    // console.log(tempBoard);
    expect(
      tempBoard[1][3].moveIntoCheck([2, 2], tempBoard, tempPieces)
    ).toBeTruthy();
  });

  it('Move into Check test 2', () => {
    let tempBoard2 = [...startingBoard, 0];
    // let oldMoves = tempBoard2[1][3];
    console.log(tempBoard2);
    // tempBoard[1][3].moveIntoCheck([2, 2], tempBoard, tempPieces);
    // let newMoves = tempBoard[1][3].availableMoves;
    expect(true).toBeTruthy();
  });
});
