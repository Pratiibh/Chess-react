// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js'
import Piece from './piece.js'
import blackIcon from '../assets/chess-icons/bk.svg'
import whiteIcon from '../assets/chess-icons/wk.svg'

export default class King extends Piece{
    constructor(startingSpace, color, board = skeletonBoard){
      super(startingSpace,color)

    }
    name = 'King'
    icon = this.color === 'white' ? whiteIcon : blackIcon;
    position = this.currentSpace;

} 