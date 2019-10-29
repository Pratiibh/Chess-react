export default class Piece {
  constructor(startingSpace,color){
    this.currentSpace = startingSpace;
    this.startingSpace = startingSpace;
    this.color = color;
  }
  isFriend(space, board) {
    if (board[space[0]][space[1]] && board[space[0]][space[1]].color === this.color) {
      return true
    }
    else {
      return false
    }
  }

  isFoe(space, board) {
    if(board[space[0]][space[1]] && board[space[0]][space[1]].color && board[space[0]][space[1]].color !== this.color){
      return true
    }
    else {
      return false;
    }
  }

  isEmpty(space, board) {
    if (board[space[0]][space[1]] && board[space[0]][space[1]].color) {
      return false;
    }
    else {
      return true;
    }
  }

  canMove(space, board) {
    let [s,b] = [space,board];
    if ((!this.isFriend(s, b)) && ( this.isEmpty(s, b) || this.isFoe(s, b) )){
      return true
    }
    else { return false }
  }

  checkAvailableMoves = (updatedSpace, board) => {
    const newAvailableMoves = this.howItMoves(updatedSpace, this.color, board);
    const newMonitor = this.howItMonitors(updatedSpace, this.color);
    //felt cute, might update state later
    this.availableMoves = newAvailableMoves;
    this.monitoredSpaces = newMonitor;
  }

  move(space,board){
    let [y,x] = [space[0],space[1]]
    let [oy,ox] = [...this.currentSpace]
    board[oy][ox] = null
    board[y][x] = this
    this.currentSpace = [...space]
    this.checkAvailableMoves(space,board)
    return board
  }

}

/*
    let tempBoard = [...board.startingBoard]
    let tempPawn = board.wp00
    tempBoard[5][0] = tempPawn;
    tempBoard[1][0] = null;
    tempPawn.currentSpace = [5,0];
    tempPawn.checkAvailableMoves(tempPawn.currentSpace, tempBoard);
    expect(tempPawn.availableMoves).toContainEqual([6,1])
*/