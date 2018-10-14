//this function generates a block of given side dimension
const generateBoard = function(side){
  let board = [];
  for(let row=0; row<side; row++){
    board[row] = [];
    for(let column=0; column<side; column++){
      board[row][column] = "-";
    }
  }
return board;
}
exports.generateBoard = generateBoard;

