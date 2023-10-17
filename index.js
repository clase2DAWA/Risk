import { TERRITORIO } from "./modules/territorio.js";
import { TABLERO } from "./modules/tablero.js";

let españa = new TERRITORIO.territorio("españa");
let gibraltar = new TERRITORIO.territorio("gibraltar");
let italia = new TERRITORIO.territorio("italia");
let inglaterra = new TERRITORIO.territorio("inglaterra");

let territorios = [españa, gibraltar, italia, inglaterra];

let tablero = new TABLERO.tablero(territorios);

document.getElementById(españa.getName()).onclick = function () {
    console.log(españa.getName())
}

document.getElementById(gibraltar.getName()).onclick = function () {
    console.log(gibraltar.getName())
}

document.getElementById(italia.getName()).onclick = function () {
    console.log(italia.getName())
}

document.getElementById(inglaterra.getName()).onclick = function () {
    console.log(inglaterra.getName())
}
