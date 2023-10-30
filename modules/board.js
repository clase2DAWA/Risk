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

    firstItemArray(array) {
        for (let item of array) {
            return item;
        }
    }

    checkNeighbour(territory, notVisited) {
        for (let neighbor of territory.neighbors) {
            if (notVisited.indexOf(this.search(neighbor.name)) != null) {
                return this.search(neighbor.name);
            }
        }
        return null;
    }

    draw() {
        let notVisited = [];
        for (let territory of this.territories) {
            notVisited.push(territory.territory);
        }
        let visualitation = [];
        let a = 1;
        while (notVisited.length != 0) {
            if (visualitation.length == 0) {
                let territory = this.firstItemArray(notVisited);
                visualitation.push(territory);
                notVisited.splice(notVisited.indexOf(territory), 1);
                /**Dibujar */
                let neighbor = this.checkNeighbour(visualitation[visualitation.length - 1], notVisited);
                if (neighbor != null) {
                    visualitation.push(neighbor);
                    notVisited.splice(notVisited.indexOf(neighbor), 1);
                    /**Dibujar */
                } else {
                    visualitation.pop();
                }
            } else {
                let neighbor = this.checkNeighbour(visualitation[visualitation.length - 1], notVisited);
                if (neighbor != null) {
                    visualitation.push(neighbor);
                    notVisited.splice(notVisited.indexOf(neighbor), 1);
                    /**Dibujar */
                } else {
                    visualitation.pop();
                }
            }
            console.log(a);
            for (let territory of notVisited) {
                console.log(territory.name);
            }
            console.log(a);
            for (let territory of visualitation) {
                console.log(territory.name);
            }
            console.log(a);
            a++;
        }
        /*
        var circle = document.createElement("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute(null, 'x', x);
        circle.setAttribute(null, 'y', 300);
        circle.setAttribute(null, 'height', '50');
        circle.setAttribute(null, 'width', '50');
        circle.setAttribute(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;');
        this.board.appendChild(circle);*/
        /*
        for (let neighbor of territory.neighbors) {
            let degrees = neighbor.degrees;

        }
        */
    }

}

export { Board };

