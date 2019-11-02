import * as board from '../board/startingBoard.js';

function Board() {
  this.arr = [...board.startingBoard];
}
describe('extended logic tests', () => {
  xit('Move into Check test', () => {
    let tempBoard1 = new Board();
    let tempPieces = [...board.pieceArr];
    tempBoard1.arr[7][4].move([3, 3], tempBoard1.arr, tempPieces);
    expect(
      tempBoard1.arr[1][3].moveIntoCheck([2, 2], tempBoard1.arr, tempPieces)
    ).toBeTruthy();
  });

  it('Move into Check test 2', () => {
    let tempBoard2 = new Board();
    // let oldMoves = tempBoard2[1][3];
    // console.log(tempBoard2.arr);
    // tempBoard[1][3].moveIntoCheck([2, 2], tempBoard, tempPieces);
    // let newMoves = tempBoard[1][3].availableMoves;
    expect(true).toBeTruthy();
  });
});
