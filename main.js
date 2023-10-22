import { Board } from "./modules/board.js";

var map = document.getElementById("board");
var board = new Board(map);

board.draw(map);
