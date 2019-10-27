// 'use strict'

export default class Pawn {
  constructor(startingSpace, color, board) {
    availableMoves: this.howItMoves(startingSpace, color, board) // [move spaces]
    monitoredSpaces: this.howItMonitors(startingSpace, color, board) // [monitored spaces]
    currentSpace: startingSpace
    startingSpace: startingSpace
  }
  name = 'Pawn'
  howItMoves = (currentSpace, color, board) => {

    let newAvailableMoves = [];
    let [y, x] = currentSpace;

    if (color === 'white') {
      //y coordinate and x coordinate
      if (!board[y + 1][x]) {
        newAvailableMoves.push([y + 1, x])
        //if this position is available, add it to this piece's available moves

        if (!board[y + 2][x] && currentSpace[0] === startingSpace[0] && currentSpace[1] === startingSpace[1]) { newAvailableMoves.push([y + 2, x]) }
        //if this position is available and this piece is in the starting space, add position to available moves
      }
      if (board[y + 1][x + 1] && board[y + 1][x + 1].color === 'black') { newAvailableMoves.push([y + 1][x + 1]) }
      if (board[y + 1][x - 1] && board[y + 1][x - 1].color === 'black') { newAvailableMoves.push([y + 1][x - 1]) }
      //attack options: if forward diagnal positions are occupied by enemy piece, add position to available moves
    }

    if (color === 'black') {
      //y coordinate and x coordinate
      if (!board[y - 1][x]) {
        newAvailableMoves.push([y - 1, x])
        //if this position is available, add it to this piece's available moves

        if (!board[y - 2][x] && currentSpace[0] === startingSpace[0] && currentSpace[1] === startingSpace[1]) { newAvailableMoves.push([y - 2, x]) }
        //if this position is available and this piece is in the starting space, add position to available moves
      }
      if (board[y - 1][x + 1] && board[y - 1][x + 1].color === 'white') { newAvailableMoves.push([y - 1][x + 1]) }
      if (board[y - 1][x - 1] && board[y - 1][x - 1].color === 'white') { newAvailableMoves.push([y - 1][x - 1]) }
      //attack options: if forward diagnal positions are occupied by enemy piece, add position to available moves
    }
    return newAvailableMoves /*board[i][j]*/

  }
  howItMonitors = (currentSpace, color) => {
    let [y, x] = currentSpace;
    let monitoredSpaces = []

    if(color === 'white') {monitoredSpaces = [[y + 1, x+ 1],[y + 1, x - 1]] }
    if(color === 'black') {monitoredSpaces = [[y - 1, x+ 1],[y - 1, x - 1]] }

    return monitoredSpaces
  }

  checkAvailableMoves = (updatedSpace, board) => {
    const newAvailableMoves = this.howItMoves(updatedSpace, this.color, board);
    const newMonitor = this.howItMonitors(updatedSpace, this.color);
    //felt cute, might update state later
    this.availableMoves = newAvailableMoves;
    this.monitoredSpaces = newMonitor;
  }
} 