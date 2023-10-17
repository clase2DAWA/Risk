import { TERRITORIO } from "./territorio.js";

let TABLERO = {};

TABLERO.tablero = class {
    constructor(territorios) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", "500px");
        this.svg.setAttribute("height", "500px");
        document.getElementById("container").appendChild(this.svg);
        for (let i = 0; i < territorios.length; i++) {
            this.pintarTerritorio(territorios[i]);
        } 
    }

    pintarTerritorio (territorio){
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', Math.floor(Math.random() * (450 - 50 + 1) + 50));
        circle.setAttribute('cy', Math.floor(Math.random() * (450 - 50 + 1) + 50));
        circle.setAttribute('r', 50);
        circle.setAttribute('fill', 'blue');
        circle.setAttribute('id', territorio.getName());
        this.svg.appendChild(circle);
    }
}

export { TABLERO };