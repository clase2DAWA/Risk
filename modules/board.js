import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {

    constructor(board) {
        this.board = board;
        this.territories = [];
        for (let item of map.continents) {
            for (let territory of item.territories) {
                this.territories.push({
                    "posx": 0,
                    "posy": 0,
                    "territory": new Territory(territory.name)
                });
            }
        }

        for (let item of map.continents) {
            for (let territory of item.territories) {
                for (let neighbor of territory.neighbors) {
                    this.search(territory.name).territory.addNeighbor(neighbor);
                }
            }
        }

        console.log(this.territories);

    }

    search(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item;
            }
        }
    }



    draw() {
        let ArrayLog = [];
        let posX = 0;
        let posY = 0;
        /** eliminamos y devolvemos un array de un unico elemento(el primero del array territories) mediante shifts
         *  y guardamos la copia del primer territorio de ese nuevo array mediante la funcion slice */
        let initialTerritory = this.territories.slice(0, 1).shift();
        if (initialTerritory.posx === 0) {
            posX = 300;
            if (initialTerritory.posy === 0) {
                posY = 300;
            }
        }
        if (!ArrayLog.includes(initialTerritory)) {

            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', posX);
            initialTerritory.posx = posX;
            circle.setAttribute('cy', posY);
            initialTerritory.posy = posY;
            circle.setAttribute('r', 50);
            circle.setAttribute('fill', 'red');
            this.board.appendChild(circle);

            circle.addEventListener("click", function () {
                console.log(initialTerritory.territory.getName());
            });
            ArrayLog.push(initialTerritory);
        }
        let result, Save, neighbor, region;
        while (ArrayLog.length > 0) {
            region = ArrayLog[ArrayLog.length - 1];
            if (region.territory.neighbors.length > 0) {
                /** si tiene vecinos comenzamos con el proceso para obtener los territorios de dichos vecinos */
                result = false;
                for (const neighborsMeta of region.territory.neighbors) {

                    if (this.search(neighborsMeta.name) != null && this.search(neighborsMeta.name).posx == 0) {
                        neighbor = this.search(neighborsMeta.name);


                        result = true;
                        /** una vez obtenido el territorio que no es nulo ni está posicionado se guarda los metadatos para cambiarlos en un futuro
                         * guardandolos en una variable "Save"
                        */
                        Save = neighborsMeta;
                    }
                }
                if (!result) {
                    ArrayLog.pop();
                } else {
                    /* Sacamos la x y la y del centro del primer territorio */
                    let Nx = Math.cos(Save.degrees * (Math.PI / 180)) * 40;
                    let Ny = Math.sin(Save.degrees * (Math.PI / 180)) * 40;

                    console.log(Nx);
                    /*mediante los grados sacamos la posicion x que debe tener el vecino */

                    /** si observamos un circulo en grados sabremos como actuar segun los grados */

                    /** Como estamos sacado la x si un circulo tiene los grados 0 o 180 no hay que cambiar la x ya que estaria en un punto fijo 
                     * y solo cambiar la y */
                    if (Save.degrees > 0 && Save.degrees < 180) {

                        Nx += region.posx + 150

                    } else if (Save.degrees == 0 || Save.degrees == 180) {
                        Nx = region.posx;
                    } else {
                        Nx = region.posx - 150
                    }
                    /** En este caso como estamos sacado la y si un circulo tiene los grados 90 o 270 no hay que cambiar la "y" 
                     * ya que estaria en un punto fijo y solo cambiar la "x" como hacemos en el anterior paso */
                    if (Save.degrees > 90 && Save.degrees < 270) {
                        Ny += region.posy + 150
                    } else if (Save.degrees == 90 || Save.degrees == 270) {
                        Ny = region.posy;
                    } else {
                        Ny = region.posx - 150
                    }
                    /** una vez tenemos la x y la y del vecino se cambian en los metadatos para que no se siga reproduciendo el bucle */
                    neighbor.posx = Nx;
                    neighbor.posy = Ny;
                    /** Y ya procedemos a dibujar los territorios vecinos */
                    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    circle.setAttribute('cx', Nx);

                    circle.setAttribute('cy', Ny);

                    circle.setAttribute('r', 50);
                    circle.setAttribute('fill', 'green');

                    let name = neighbor.territory.getName();
                    circle.addEventListener("click", function () {
                        console.log(name);
                    });
                    this.board.appendChild(circle);
                    ArrayLog.push(neighbor);
                }
            } else {
                /** Si no tiene vecinos se borra de nuestro array log */
                ArrayLog.pop();
            }
        }

    }



}
export { Board };