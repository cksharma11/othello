<<<<<<< HEAD
const printBoard = function(board){
  let result = "";
  separator = "";
  for(let row = 0; row < board.length; row++){
    result += separator;
    for(let col = 0; col < board[row].length; col++){
      result += board[row][col] + " ";
    }
    separator = "\n";
  }
  return result;
}
exports printBoard = printBoard;
=======

>>>>>>> dad6996800f02f00c97c017a4a3073361ff1a82a
