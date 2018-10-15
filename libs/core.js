//this function generates a board of given sideLength dimension

const generateBoard = function(sideLength){
  let board = new Array(sideLength);
  for(let row=0; row<sideLength; row++){
    board[row] = new Array(sideLength);
    board[row].fill("-");
  }
  return board;
}

//function to check whether current place is occupied or not
const isPlaceEmpty = function(board,row,column){
  return (board[row][column] == "-");
}

exports.isPlaceEmpty = isPlaceEmpty;
exports.generateBoard = generateBoard;
