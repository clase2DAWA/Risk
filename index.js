import { Board } from "./modules/board.js";

let board = new Board(document.getElementById("board"));

board.setTerritories();
board.draw();
