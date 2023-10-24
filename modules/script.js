import { RISK } from "./Board.js";

const SVG = document.getElementById("map"); 

const BOARD1 = new RISK.board(1,900,1200);

BOARD1.assignTerritories();
BOARD1.drawTerrainOnMap(SVG);
//BOARD1.drawLinesOnMap(SVG);






