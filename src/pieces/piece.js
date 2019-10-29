export default class Piece {
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

}