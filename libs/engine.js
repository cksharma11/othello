const printBoard = function(board){
  let result = "";
  let rowSeparator = "";
  for(let row = 0; row < board.length; row++){
    result += rowSeparator;
    for(let col = 0; col < board[row].length; col++){
      result += board[row][col] + " ";
    }
    rowSeparator = "\n";
  }
  return result;
}
exports.printBoard = printBoard;
