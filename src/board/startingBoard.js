// 'use strict'

import Pawn from '../pieces/pawn.js'
import Rook from '../pieces/rook.js'
import Knight from '../pieces/knight.js'
import Bishop from '../pieces/bishop.js'
import Queen from '../pieces/queen.js'
import King from '../pieces/king.js'

let wr00, wk00, wb00, wque, wkng, wb01, wk01, wr01,
    wp00, wp01, wp02, wp03, wp04, wp05, wp06, wp07,
    bp00, bp01, bp02, bp03, bp04, bp05, bp06, bp07,
    br00, bk00, bb00, bque, bkng, bb01, bk01, br01

let startingBoard =
    [
        [wr00, wk00, wb00, wque, wkng, wb01, wk01, wr01],
        [wp00, wp01, wp02, wp03, wp04, wp05, wp06, wp07],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [bp00, bp01, bp02, bp03, bp04, bp05, bp06, bp07],
        [br00, bk00, bb00, bque, bkng, bb01, bk01, br01],
    ];


wp00 = new Pawn([1, 0], 'white', startingBoard)
wp01 = new Pawn([1, 1], 'white', startingBoard)
wp02 = new Pawn([1, 2], 'white', startingBoard)
wp03 = new Pawn([1, 3], 'white', startingBoard)
wp04 = new Pawn([1, 4], 'white', startingBoard)
wp05 = new Pawn([1, 5], 'white', startingBoard)
wp06 = new Pawn([1, 6], 'white', startingBoard)
wp07 = new Pawn([1, 7], 'white', startingBoard)
bp00 = new Pawn([6, 0], 'black', startingBoard)
bp01 = new Pawn([6, 1], 'black', startingBoard)
bp02 = new Pawn([6, 2], 'black', startingBoard)
bp03 = new Pawn([6, 3], 'black', startingBoard)
bp04 = new Pawn([6, 4], 'black', startingBoard)
bp05 = new Pawn([6, 5], 'black', startingBoard)
bp06 = new Pawn([6, 6], 'black', startingBoard)
bp07 = new Pawn([6, 7], 'black', startingBoard)


wr00 = new Rook()
wr01 = new Rook()
br00 = new Rook()
br01 = new Rook()

wk00 = new Knight()
wk01 = new Knight()
bk00 = new Knight()
bk01 = new Knight()

wb00 = new Bishop()
wb01 = new Bishop()
bb00 = new Bishop()
bb01 = new Bishop()

wque = new Queen()
bque = new Queen()

wkng = new King()
bkng = new King()


export default null;
export {
    startingBoard,
    wr00, wk00, wb00, wque, wkng, wb01, wk01, wr01,
    wp00, wp01, wp02, wp03, wp04, wp05, wp06, wp07,
    bp00, bp01, bp02, bp03, bp04, bp05, bp06, bp07,
    br00, bk00, bb00, bque, bkng, bb01, bk01, br01
}