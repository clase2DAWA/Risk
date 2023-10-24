import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
    constructor(board) {
        this.board = board;
        this.territories = [];
    };

    draw() {
        let territory;

        for (let item of this.territories) {
            territory = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            territory.setAttribute("cx", item.posX);
            territory.setAttribute("cy", item.posY);
            territory.setAttribute("r", item.r);
            territory.setAttribute("fill", item.color);
            territory.addEventListener("click", function () {
                console.log(item.territory.getName());
            });
            this.board.appendChild(territory);
           
        }
    }

    search() {
        for (let item of map.territories) {
            if(){

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