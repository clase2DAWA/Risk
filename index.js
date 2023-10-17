import {Territorio} from "./modules/territorio.js";
import {Tablero} from "./modules/tablero.js";

let circulo1 = new Territorio("circulo1");
let circulo2 = new Territorio("circulo2");
let circulo3 = new Territorio("circulo3");
let circulo4 = new Territorio("circulo4");

let territorios = [circulo1, circulo2, circulo3, circulo4];


let tablero = new Tablero(territorios);

document.getElementById(circulo1.getName()).onclick = function () {
    console.log(circulo1.getName())
}

document.getElementById(circulo2.getName()).onclick = function () {
    console.log(circulo2.getName())
}

document.getElementById(circulo3.getName()).onclick = function () {
    console.log(circulo3.getName())
}

document.getElementById(circulo4.getName()).onclick = function () {
    console.log(circulo4.getName())
}