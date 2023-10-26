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

    firstItemArray(array){
        for (let item of array){
            return item;
        }
    }

    checkNeighbour(territory, nonVisited){
        for (let neighbor of territory.neighbors){
            if (notVisited.indexOf(this.search(neighbor.name)) != null){
                return vecino;
            }
        }
        return null;
    }

    draw() {
        let x1 = 300;
        let notVisited = [];
        for (let territory of this.territories){
            notVisited.push(territory.territory);
        }
        let visualitation = [];

        while (notVisited != null) {
            if (visualitation == null){
                let territory = this.firstItemArray(notVisited);
                visualitation.push(territory);
                notVisited.splice(notVisited.indexOf(territory), 1);
                let neighbor = this.checkNeighbour(visualitation[visualitation.length - 1], notVisited);
                if(neighbor != null){
                    visualitation.push(neighbor);
                    notVisited.splice(notVisited.indexOf(neighbor), 1);
                }else{
                    visualitation.pop();
                }
            }else{
                let neighbor = this.checkNeighbour(visualitation[visualitation.length - 1], notVisited);
                if(neighbor != null){
                    visualitation.push(neighbor);
                    notVisited.splice(notVisited.indexOf(neighbor), 1);
                }else{
                    visualitation.pop();
                }
            }
        }

        for (let item of this.territories) {
            let territory = item.territory;
            if (notVisited.includes(territory)) {
                notVisited.splice(notVisited.indexOf(territory), 1);
                visited.push(territory);
                visualitation.push(territory);
                let numVecinos = territory.neighbors.length;
                let indice = 0;
                let vecino = null;
                while (indice < numVecinos || vecino != null){
                    if(notVisited.includes(this.search(territory.neighbors[indice].name))){
                        vecino = this.search(territory.neighbors[indice].name);
                    }
                }
                visited.push(vecino);
                visualitation.push(vecino);
                notVisited.splice(notVisited.indexOf(vecino), 1);

            }
            /*
            visited.push(territory);
            console.log(notVisited.findIndex(territory));
            notVisited.splice(notVisited.findIndex(territory));
            */
            
            
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

