import { Territory } from "./territory.js";
import { Continent } from "./continents.js";
import { map } from "./map.js";

let Board = class {
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
                    this.search(territory.name).addNeighbor(neighbor);
                }
            }
        }
    }



    createTerritory(map) {
        for (let item of map.continents) {
            for (let territory of item.territories) {
                this.territories.push({
                    "posX": 0,
                    "posY": 0,
                    "territory": new Territory(territory.name)
                })
            }
        }
    }

    search(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item.territory;
            }
        }
    }

    setNeighbor(map) {
        for (let item of map.continents) {
            for (let territory of item.territories) {
                this.searchTerritory(territory.name).neighborTopLeft = this.searchTerritory(territory.TopLeft);
                this.searchTerritory(territory.name).neighborTop = this.searchTerritory(territory.Top);
                this.searchTerritory(territory.name).neighborTopRight = this.searchTerritory(territory.TopRight);
                this.searchTerritory(territory.name).neighborRight = this.searchTerritory(territory.Right);
                this.searchTerritory(territory.name).neighborBottomRight = this.searchTerritory(territory.BottomRight);
                this.searchTerritory(territory.name).neighborBottom = this.searchTerritory(territory.Bottom);
                this.searchTerritory(territory.name).neighborBottomLeft = this.searchTerritory(territory.BottomLeft);
                this.searchTerritory(territory.name).neighborLeft = this.searchTerritory(territory.Left);
            }
        }
    }



    draw() {
        let x1 = 300;
        let notVisited = [];
        for (let territory of this.territories){
            notVisited.push(territory.territory);
        }
        let visited = [];
        let visualitation = [];
        for (let item of this.territories) {
            let territory = item.territory;
            visited.push(territory);
            console.log(notVisited.findIndex(territory));
            notVisited.splice(notVisited.findIndex(territory));
            
            
            /*
            var circle = document.createElement("http://www.w3.org/2000/svg", 'circle');
            circle.setAttribute(null, 'x', x);
            circle.setAttribute(null, 'y', 300);
            circle.setAttribute(null, 'height', '50');
            circle.setAttribute(null, 'width', '50');
            circle.setAttribute(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;');
            this.board.appendChild(circle);*/
            for (let neighbor of territory.neighbors) {
                let degrees = neighbor.degrees;

            }
        }
    }

}

export { Board };

