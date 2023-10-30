import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {
    constructor(board) {
        this.board = board;
        this.territories = [];

        for (let item of map.continent) {
            for (let territory of item.territories) {
                this.territories.push({
                    "posX": 0,
                    "posY": 0,
                    "name": territory.name,
                    "color": item.color,
                    "visited": false,
                    "neigbors": territory.neighbors
                });
            }
        }
    }




    draw() {
        this.territories[0].posX = 500;
        this.territories[0].posY = 500;
        let neighbors = [];
        let painted = [];
        let territoryCircle;
        let neigborCircle;

        for (let territory of this.territories) {
            if (!territory.visited) {
                for (let neigbor of territory.neigbors) {
                    if (!neighbors.includes(neigbor)) {
                        neighbors.push(neigbor);
                    }
                }
            }
            territory.visited = true;
        }

        console.log("esto son los vecinos del array de vecinos");
        console.log(neighbors);
        console.log("esto son territorios");
        console.log(this.territories);

        /* Algoritmo 
        1. recorrer los vecinos del pais que estoy pintando
        2. al recorrerlos le cambiamos las coordenadas */
        /*   neighbor.posX = (Math.cos((neighbor.degrees) * (Math.PI / 180)) * 90) + territory.posX;
           neighbor.posY = (Math.sin((neighbor.degrees) * (Math.PI / 180)) * 90) + territory.posY;*/

        for (let item of this.territories) {
            territoryCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            territoryCircle.setAttribute("cx", item.posX);
            territoryCircle.setAttribute("cy", item.posY);
            territoryCircle.setAttribute("r", 20);
            territoryCircle.setAttribute("fill", item.color);
            territoryCircle.addEventListener("click", function () {
                console.log(item.name);
            });
            this.board.appendChild(territoryCircle);
            for (let neighbor of item.neigbors) {
                let temp = this.search(neighbor.name);
                let posX = (Math.cos((neighbor.degrees) * (Math.PI / 180)) * 90) + item.posX;
                let posY = (Math.sin((neighbor.degrees) * (Math.PI / 180)) * 90) + item.posY;
                neigborCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                neigborCircle.setAttribute("cx", posX);
                neigborCircle.setAttribute("cy", posY);
                neigborCircle.setAttribute("r", 20);
                neigborCircle.setAttribute("fill", item.color);
                neigborCircle.addEventListener("click", function () {
                    console.log(neighbor.name);
                });
                this.board.appendChild(neigborCircle);
                
                painted.push(temp);
            }
            painted.push(item);
            console.log(painted);
        }

    }




    search(name) {
        for (let item of this.territories) {
            if (item.name === name) {
                return item;
            }
        }
    }
};

export { Board };