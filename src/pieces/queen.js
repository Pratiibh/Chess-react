// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js'
import Piece from './piece.js'
import blackIcon from '../assets/chess-icons/bq.svg'
import whiteIcon from '../assets/chess-icons/wq.svg'

export default class Queen extends Piece{
    constructor(startingSpace, color, board){
      super(startingSpace,color)

    }
    name = 'Queen'
    icon = this.color === 'white' ? whiteIcon : blackIcon;
    position = this.startingSpace;

} 