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
        for (let territory of this.territories){
            if(!territory.visited){
                for(let neigbor of territory.neigbors){
                    if(!neighbors.includes(neigbor.name)){
                        neighbors.push(neigbor.name);
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
        /*              neighbor.posX = (Math.cos((neighbor.degrees) * (Math.PI / 180)) * 90) + territory.posX;
                        neighbor.posY = (Math.sin((neighbor.degrees) * (Math.PI / 180)) * 90) + territory.posY;
                      
                for (let item of this.territories) {
                    territory = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    territory.setAttribute("cx", item.posX);
                    territory.setAttribute("cy", item.posY);
                    territory.setAttribute("r", 20);
                    territory.setAttribute("fill", item.color);
                    territory.addEventListener("click", function () {
                        console.log(item.name);
                    });
                    this.board.appendChild(territory);
                
                }
                 */
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