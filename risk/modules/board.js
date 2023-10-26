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
                    "visit": false,
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
        let visitedTerritories = [];
        this.territories[0].posx = 400;
        this.territories[0].posy = 400;
        visitedTerritories.push( this.territories[0]);

        let visitedNeighbor = [];

        while(visitedTerritories != 0) {
            territory = visitedTerritories.at(-1);                // Obtenemos el último elemento de nuestro array 'visitedTerritories'
            
            if(x) {
            
            } else {
                visitedTerritories.pop();
            }
        }
        for (let item of this.territories) {
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', item.posx + 100);
            circle.setAttribute('cy', item.posy + 100);
            circle.setAttribute('r', 40);
            circle.setAttribute('fill', 'green');
            this.board.appendChild(circle);
            circle.addEventListener("click", function () {
                console.log(item.territory.getName());
            });
        }
    }
}

export { Board };