import { Territory } from "./territorio.js";
import { map } from "./map.js"

class Tablero {

    constructor(board) {
        this.board = board;
        this.territories = [];
        this.metaData = [];
        for (let item of map.continents) {
            for (let territory of item.territories) {
                let element = new Territory(territory.name);
                this.territories.push(element);
                this.metaData.push({
                    "x": 0,
                    "y": 0,
                    "territory": element,
                    "visited": false
                });
            }
        }

        for (let item of map.continents) {
            for (let territory of item.territories) {
                for (let neighbor of territory.neighbors) {
                    this.territories.find((element) => element.name === territory.name)
                        .addNeighbor(neighbor, this.territories.find(
                            (element) => element.name === neighbor.name
                        ));
                }
            }
        }

        console.log(this.territories);
        this.asignarPosicion();
    }


    asignarPosicion() {
        
        let land = this.metaData.at(-1);
        land.x = 500;
        land.y = 500;
        let support = [land];
        let neighbor;
        let degrees;
        while (support.length) {

            land = support.at(-1);
            land.visited = true;
            neighbor = this.neighborAvailable(land);



            if (neighbor != null) {

                degrees = land.territory.neighbors.find((element) => element.neighbor.name == neighbor.territory.name).neighbor.grados;
                neighbor.x = (Math.cos(degrees * (Math.PI / 180)) * 90) + (land.x);
                neighbor.y = (Math.sin(degrees * (Math.PI / 180)) * 90) + (land.y);
                support.push(neighbor);

            } else {
                support.pop();
            }
        }
    }

    
    neighborAvailable(land) {


        for (let item of land.territory.neighbors) {
            for (let metaData of this.metaData) {
                if (metaData.territory.name == item.neighbor.name && !metaData.visited) {
                    return metaData;
                }
            }
        }

    }
    draw() {

        for (let item of this.metaData) {
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', item.x);
            circle.setAttribute('cy', item.y);
            circle.setAttribute('r', 40);
            circle.setAttribute('fill', 'red');
            this.board.appendChild(circle);
            circle.addEventListener("click", function () {
                console.log(item.territory.getName());
            });
        }
    }
}



export { Tablero };