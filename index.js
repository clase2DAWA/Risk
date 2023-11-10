/*let territorio1 = document.getElementById("territorio1").addEventListener("click", function () {
    console.log("Territorio 1");
});

let territorio2 = document.getElementById("territorio2").addEventListener("click", function () {
    console.log("Territorio 2");
});*/
import { Board } from "./modules/board2.js";
let board = new Board(document.getElementById("board"));
board.asignarPosicion();