import { Territory } from "./territory2.js";
import { map } from "./map.js";

class Board {

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
                    "territory": element
                });
            }
        }

        for (let item of map.continents) {
            for (let territory of item.territories) {
                for (let neighbor of territory.neighbors) {
                    this.territories.find((element) => element.name === territory.name)
                        .addNeighbor(neighbor);
                }
            }
        }

        console.log(this.territories);
    }

    asignarPosicion() {
        let visited = [];
        this.metaData.at(0).x = 500;
        this.metaData.at(0).y = 500;
        for (let element of this.metaData) {
            for (let neighbor of element.territory.neighbors) {
                if (!visited.includes(neighbor)) {
                    let temp = this.metaData.find((item) => item.territory.name === neighbor.name);
                    temp.x = (Math.cos((neighbor.degrees) * (Math.PI / 180)) * 200) + element.x;
                    temp.y = (Math.sin((neighbor.degrees) * (Math.PI / 180)) * 90) + element.y;
                    visited.push(temp);
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
export { Board };



