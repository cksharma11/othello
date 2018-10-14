const coreLib = require("./core.js");
const generateBoard = coreLib.generateBoard;

const printBoard = function(board){
  let finalBoard = "";
  let separator = "";
  for(let row = 0; row < board.length; row++){
    finalBoard = finalBoard + separator;
    for(let col = 0; col < board[row].length; col++){
      finalBoard = finalBoard + board[row][col] + " ";
    }
    separator = "\n";
  }
  return finalBoard;
}

const initBoard = function(board){
  let boardSize = board.length;
  let place_1 = boardSize/2 -1;
  let place_2 = boardSize/2;
  board[place_1][place_1] = board[place_2][place_2] = 'X';
  board[place_1][place_2] = board[place_2][place_1] = 'O';
  return board;
}

const placeDisc = function(board, element, row, column){
  board[row][column] = element;
  return board;
}

exports.initBoard = initBoard;
exports.printBoard = printBoard;
exports.placeDisc = placeDisc;
