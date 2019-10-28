// 'use strict'

import Pawn from '../pieces/pawn.js'
import Rook from '../pieces/rook.js'
import Knight from '../pieces/knight.js'
import Bishop from '../pieces/bishop.js'
import Queen from '../pieces/queen.js'
import King from '../pieces/king.js'

let wp00 = new Pawn([1, 0], 'white')
let wp01 = new Pawn([1, 1], 'white')
let wp02 = new Pawn([1, 2], 'white')
let wp03 = new Pawn([1, 3], 'white')
let wp04 = new Pawn([1, 4], 'white')
let wp05 = new Pawn([1, 5], 'white')
let wp06 = new Pawn([1, 6], 'white')
let wp07 = new Pawn([1, 7], 'white')
let bp00 = new Pawn([6, 0], 'black')
let bp01 = new Pawn([6, 1], 'black')
let bp02 = new Pawn([6, 2], 'black')
let bp03 = new Pawn([6, 3], 'black')
let bp04 = new Pawn([6, 4], 'black')
let bp05 = new Pawn([6, 5], 'black')
let bp06 = new Pawn([6, 6], 'black')
let bp07 = new Pawn([6, 7], 'black')
let wr00 = new Rook()
let wr01 = new Rook()
let br00 = new Rook()
let br01 = new Rook()
let wk00 = new Knight()
let wk01 = new Knight()
let bk00 = new Knight()
let bk01 = new Knight()
let wb00 = new Bishop()
let wb01 = new Bishop()
let bb00 = new Bishop()
let bb01 = new Bishop()
let wque = new Queen()
let bque = new Queen()
let wkng = new King()
let bkng = new King()

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


// export default null;
export {
    startingBoard,
    wr00, wk00, wb00, wque, wkng, wb01, wk01, wr01,
    wp00, wp01, wp02, wp03, wp04, wp05, wp06, wp07,
    bp00, bp01, bp02, bp03, bp04, bp05, bp06, bp07,
    br00, bk00, bb00, bque, bkng, bb01, bk01, br01
}