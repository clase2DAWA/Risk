import { Terrytory } from "./modules/territory.js";
import { Board } from "./modules/board.js";

let españa = new Terrytory("españa");
let gibraltar = new Terrytory("gibraltar");
let italia = new Terrytory("italia");
let inglaterra = new Terrytory("inglaterra");

let territorios = [españa, gibraltar, italia, inglaterra];

let tablero = new Board(document.getElementById("board"));