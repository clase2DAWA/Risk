import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
    constructor(board) {
        this.board = board;
        this.territories = [];
        /* primero rellenar los territorios con new territorios*/
        for (let item of map.continent) {
            for (let territory of item.territories) {
                this.territories.push({
                    "posX": 0,
                    "posY": 0,
                    "name": territory.name,
                    "color": item.color
                });
            }
        }
        console.log(this.territories)
        /* luego rellenas los objetos territorio con el json*/

    };

    draw() {
        let territory;
        let posX = 60;
        let posY = 60;

        for (let item of this.territories) {
            territory = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            territory.setAttribute("cx", posX);
            territory.setAttribute("cy", posY);
            territory.setAttribute("r", 20);
            territory.setAttribute("fill", item.color);
            territory.addEventListener("click", function () {
                console.log(item.name);
            });
            this.board.appendChild(territory);
            posX += 60;

        }
    }

    search(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item.territory;
            }
        }
    }



    /* Dibujar lineas entre paises
    drawLines() {
        let neighbor;
        for (let item of this.territories) {
            neighbor = document.createElementNS("http://www.w3.org/2000/svg", "line");
            neighbor.setAttribute("x1", item.posX);
            neighbor.setAttribute("y1", item.posY);
            this.board.appendChild(neighbor);

        }


    }
    */
};

export { Board };