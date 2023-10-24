import { Terrytory } from "./territory.js";
import { Continent } from "./continents.js";
import { map } from "./map.js";

let Board = class {
    constructor(board) {
        this.board = board;
        this.createTerritory(map);
    }

    draw() {
        let r = 25;
        let pos = 0;
        for (let item of this.continents) {
            for (let item1 of item.territories) {
                /*Comprobar que el pais este dibujado*/
                if (item1.posX != 0 || item1.posY != 0) {
                    console.log("ya dibujado");
                    /*Comprobar que los vecinos esten dibujados*/
                    for (let item2 of item1.neighbor) {
                        let pais = item.territories.find(({ name }) => name === item2.getName());
                        if (pais.posX != 0 || pais.posY != 0) {
                        } else {
                            /*Imprimir vecino*/
                        }
                    }
                } else {
                    /*Area de un apis y sus vecinos */
                    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    let width = (r + r) * 3;
                    let y = 0;
                    rect.setAttributeNS(null, 'x', pos);
                    rect.setAttributeNS(null, 'y', y);
                    rect.setAttributeNS(null, 'width', width);
                    rect.setAttributeNS(null, 'height', width);
                    rect.setAttributeNS(null, 'fill', 'red');
                    this.board.appendChild(rect);
                    /*Posibles posiciones para vecinos */
                    let posicionesPaises = [];
                    posicionesPaises.push({
                        "name": "main",
                        "posX": pos + (width / 2),
                        "posY": (y + width) / 2
                    });
                    posicionesPaises.push({
                        "name": "pos1",
                        "posX": pos + (width / 2),
                        "posY": (((y + width) / 2) - r) / 2
                    });
                    posicionesPaises.push({
                        "name": "pos2",
                        "posX": pos + (((width / 2) - r) / 2) * 5,
                        "posY": (((y + width) / 2) - r) / 2
                    });
                    posicionesPaises.push({
                        "name": "pos3",
                        "posX": pos + (((width / 2) - r) / 2) * 5,
                        "posY": (y + width) / 2
                    });
                    posicionesPaises.push({
                        "name": "pos4",
                        "posX": pos + (((width / 2) - r) / 2) * 5,
                        "posY": ((((y + width) / 2) - r) / 2) * 5
                    });
                    posicionesPaises.push({
                        "name": "pos5",
                        "posX": pos + (width / 2),
                        "posY": ((((y + width) / 2) - r) / 2) * 5
                    });
                    posicionesPaises.push({
                        "name": "pos6",
                        "posX": pos + ((width / 2) - r) / 2,
                        "posY": ((((y + width) / 2) - r) / 2) * 5
                    });
                    posicionesPaises.push({
                        "name": "pos7",
                        "posX": pos + ((width / 2) - r) / 2,
                        "posY": (y + width) / 2
                    });
                    posicionesPaises.push({
                        "name": "pos8",
                        "posX": pos + ((width / 2) - r) / 2,
                        "posY": (((y + width) / 2) - r) / 2
                    });
                    /*Creamos pais nuevo */
                    this.darwTerritory(posicionesPaises[0].posX, posicionesPaises[0].posY, item1.territory.getName());
                    item1.posX = posicionesPaises[0].posX;
                    item1.posY = posicionesPaises[0].posY;
                    /*Contador para posiciones */
                    let px = 1;
                    /*Recorremos vecinos */
                    for (let item2 of item1.neighbor) {
                        /* Creamos vecino*/
                        this.darwTerritory(posicionesPaises[px].posX, posicionesPaises[px].posY, item2.getName());
                        let pais = item.territories.find(({ name }) => name === item2.getName());
                        console.log(pais);
                        pais.posX = posicionesPaises[px].posX;
                        pais.posY = posicionesPaises[px].posY;
                        console.log(item2.getName());
                        console.log(item2.posX);
                        px += 1;
                    }
                    pos += (r + r) * 3 + 20;
                }
            }
        }
    }

    createTerritory(map) {
        for (let item of map.continents) {
            for (let territory of item.territories) {
                new Terrytory(territory.name);
            }
        }
    }

    setNeighborTopLeft(map){

    }

    darwTerritory(x, y, name) {
        let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', 25);
        circle.setAttribute('fill', 'blue');
        circle.onclick = function () {
            console.log(name);
        }
        this.board.appendChild(circle);
    }
}

export { Board };