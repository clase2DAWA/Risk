import { Tablero } from "./modules/Tablero.js";

var svg = document.getElementById("board");
var tablero = new Tablero();
tablero.setTerritorios(4, 50, 50, 50);

svg = tablero.drawTerritorios(svg);
