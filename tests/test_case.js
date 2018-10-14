const assert = require("assert");
const engineLib = require("../libs/engine.js");
const coreLib = require("../libs/core.js");

//---------------------------Test for generateBoard() function
//Test for input 0
assert.deepEqual(coreLib.generateBoard(0), []);

//Test for input 1
assert.deepEqual(coreLib.generateBoard(1), [["-"]]);

//Test for input 2
assert.deepEqual(coreLib.generateBoard(2), [["-", "-"], ["-", "-"]]);

//Test for input 4
assert.deepEqual(coreLib.generateBoard(4), [["-", "-", "-", "-"], ["-", "-", "-", "-"],["-", "-", "-", "-"],["-", "-", "-", "-"]]);

//---------------------------Test for printBoard() function
let board, output;

//Test for empty board
board = [];
output = "";
assert.deepEqual(engineLib.printBoard(board), output);

//Test for 1x1 board
board = [["-"]];
output = "- ";
assert.deepEqual(engineLib.printBoard(board), output);

//Test for 2x2 board
board = [["-","-"], ["-", "-"]];
output = "- - \n- - ";
assert.deepEqual(engineLib.printBoard(board), output);

//Test for 4x4 board
board = [["-","-","-","-"], ["-", "-", "-", "-"],["-","-","-","-"], ["-", "-", "-", "-"]];
output = "- - - - \n- - - - \n- - - - \n- - - - ";
assert.deepEqual(engineLib.printBoard(board), output);

