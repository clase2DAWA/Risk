

import { Board } from "./modules/board.js";
import { Territory } from "./modules/territory.js";


let map = document.getElementById("board");
let board = new Board(map);

board.draw();