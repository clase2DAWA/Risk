import { Territory } from "./territorio.js";
import { map } from "./map.js"

class Tablero {

    constructor(board) {
        this.board = board;
        this.metaData = new Map();
        let territories = [];
        for (let item of map.continents) {
            for (let territory of item.territories) {
                let element = new Territory(territory.name);
                territories.push(element);
                this.metaData.set(element, {
                    "x": 0,
                    "y": 0,
                    "visited": false
                })
            }
        }

        for (let item of map.continents) {
            for (let territory of item.territories) {
                for (let neighbor of territory.neighbors) {
                    territories.find((element) => element.name === territory.name)
                        .addNeighbor(neighbor, territories.find(
                            (element) => element.name === neighbor.name
                        ));
                   
                }
            }
        }
        this.asignarPosicion();
    }


    asignarPosicion() {
                
        let land =this.metaData.keys().next().value;
        this.metaData.get(land).x=500;
        this.metaData.get(land).y=500;
        let support = [land];
        let neighbor;
        let degrees;
        while (support.length) {

            land = support.at(-1);
            this.metaData.get(land).visited=true; 
            neighbor =  land.neighbors.find((element)=> !this.metaData.get(element.territory).visited);
            if (neighbor != null) {

                degrees = land.neighbors.find((element) => element.territory == neighbor.territory).neighbor.grados;
                this.metaData.get(neighbor.territory).x = (Math.cos(degrees * (Math.PI / 180)) * 90) + ( this.metaData.get(land).x);
                this.metaData.get(neighbor.territory).y = (Math.sin(degrees * (Math.PI / 180)) * 90) + ( this.metaData.get(land).y);
                support.push(neighbor.territory);

            } else {
                support.pop();
            }
        }

    }


    draw() {
        let territories = Array.from(this.metaData.keys());
        for (let item of territories) {
             let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', this.metaData.get(item).x);
            circle.setAttribute('cy', this.metaData.get(item).y);
            circle.setAttribute('r', 40);
            circle.setAttribute('fill', 'red');
            this.board.appendChild(circle);
            circle.addEventListener("click", function () {
                console.log(item.getName());
            });
        }
    }
}



export { Tablero };