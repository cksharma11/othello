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
