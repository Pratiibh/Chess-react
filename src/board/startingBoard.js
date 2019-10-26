// 'use strict'

let Pawn = require('../pieces/pawn.js')
let Rook = require('../pieces/rook.js')
let Knight = require('../pieces/knight.js')
let Bishop = require('../pieces/bishop.js')
let Queen = require('../pieces/queen.js')
let King = require('../pieces/king.js')

let wp00 = new Pawn()
let wp01 = new Pawn()
let wp02 = new Pawn()
let wp03 = new Pawn()
let wp04 = new Pawn()
let wp05 = new Pawn()
let wp06 = new Pawn()
let wp07 = new Pawn()
let bp00 = new Pawn()
let bp01 = new Pawn()
let bp02 = new Pawn()
let bp03 = new Pawn()
let bp04 = new Pawn()
let bp05 = new Pawn()
let bp06 = new Pawn()
let bp07 = new Pawn()

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

    export default null;
export {
    startingBoard,
    wr00, wk00, wb00, wque, wkng, wb01, wk01, wr01,
    wp00, wp01, wp02, wp03, wp04, wp05, wp06, wp07,
    bp00, bp01, bp02, bp03, bp04, bp05, bp06, bp07,
    br00, bk00, bb00, bque, bkng, bb01, bk01, br01
}