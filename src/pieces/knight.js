// 'use strict'
import skeletonBoard from '../board/skeletonBoard.js'
import Piece from './piece.js'
import blackIcon from '../assets/chess-icons/bkn.svg'
import whiteIcon from '../assets/chess-icons/wkn.svg'

export default class Knight extends Piece{
    constructor(startingSpace, color, board = skeletonBoard){
      super(startingSpace,color)

    }
    name = 'Knight'
    icon = this.color === 'white' ? whiteIcon : blackIcon;
    position = this.currentSpace;

} 