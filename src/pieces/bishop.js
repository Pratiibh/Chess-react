// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js'
import Piece from './piece.js'
import blackIcon from '../assets/chess-icons/bb.svg'
import whiteIcon from '../assets/chess-icons/wb.svg'

export default class Bishop extends Piece{
    constructor(startingSpace, color, board = skeletonBoard){
      super(startingSpace,color)

    }
    name= 'Bishop' 
    icon = this.color === 'white' ? whiteIcon : blackIcon;
    position = this.startingSpace;

} 