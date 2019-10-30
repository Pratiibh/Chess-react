// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js'
import Piece from './piece.js'
import blackIcon from '../assets/chess-icons/br.svg'
import whiteIcon from '../assets/chess-icons/wr.svg'


export default class Rook extends Piece{
    constructor(startingSpace, color, board){
      super(startingSpace,color)

    }
    name = 'Rook'
    icon = this.color === 'white' ? whiteIcon : blackIcon;
    position = this.startingSpace;

}