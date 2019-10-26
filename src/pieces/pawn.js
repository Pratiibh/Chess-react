// 'use strict'

export default class Pawn {
  constructor(startingSpace, color, board) {
    availableMoves: this.howItMoves(startingSpace) // [move spaces]
    monitoredSpaces: this.howItMonitors(startingSpace) // [monitored spaces]
    currentSpace: startingSpace
  }
  name = 'Pawn'
  howItMoves = (startingSpace, color) => {
    if (color === 'black') {
      // starting space 
      return startingSpace /*board[i][j]*/
    }
  }
  howItMonitors = (startingSpace) => {
    return monitoredSpaces
  }
} 