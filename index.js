import { Tablero } from "./modules/tablero.js";
import { Territorio } from "./modules/territorio.js";


let t1 = new Territorio(450,340,100,"territorio1", "red");
let t2 = new Territorio(240,840,100,"territorio2", "green");
let t3 = new Territorio(810,560,100,"territorio3", "blue");
let t4 = new Territorio(630,230,100,"territorio4", "black");


let territorios=[t1,t2,t3,t4];

let tablero= new Tablero(territorios,1000,1000);

tablero.dibujaMapa();