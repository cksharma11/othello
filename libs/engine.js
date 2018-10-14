const coreLib = require("./core.js");
const generateBoard = coreLib.generateBoard;

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

const initBoard = function(board){
  let boardSize = board.length;
  //Upper Left Position 
  board[boardSize/2 -1][boardSize/2 -1] = 'X';
  
  //Bottom right position
  board[boardSize/2][boardSize/2] = 'X';
  
  //Upper right position
  board[boardSize/2 -1][boardSize/2] = 'O';
  
  //Bottom left position
  board[boardSize/2][boardSize/2 -1] = 'O';

  return board;
}

exports.initBoard = initBoard;
exports.printBoard = printBoard;
