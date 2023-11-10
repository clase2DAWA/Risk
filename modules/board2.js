import { Territory } from "./territory2.js";
import { map } from "./map.js";

class Board {

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
                    /*
                    this.search(territory.name).addNeighbor(neighbor,
                        this.search(neighbor.name));
                    */
                }
            }
        }
        console.log(this.metaData);
    }

    /*
    search(name) {
        for (let item of this.territories) {
            if (item.getName() === name) {
                return item;
            }
        }
    }
    */

    asignarPosicion() {
        let land = this.metaData.keys().next();
        let support = [land];
        while (support.length) {
            let territoryTemp = support.at(-1);
            let a = territoryTemp.neighbors;
            support.pop();
            for(let item of a){
                let c = this.metaData.get(item.territory);
                if(!c.visited) {
                    c.visited = true;
                    support.push(item.territory);
                }
            }
        }
        console.log(this.metaData);
    }

    draw() {
        let posX = 0;
        let posY = 0;
        for (let item of this.territories) {
            if (item.posx === 0) {
                posX = 400;
                if (item.posy === 0) {
                    posY = 400;
                }
            } else {
                posX = item.posx;
                posY = item.posy;
            }
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', posX);
            circle.setAttribute('cy', posY);
            circle.setAttribute('r', 40);
            circle.setAttribute('fill', 'red');
            this.board.appendChild(circle);
            item.posx = posX;
            item.posy = posY;
            circle.addEventListener("click", function () {
                console.log(item.territory.getName());
            });
            for (let neighbor of item.territory.neighbors) {
                let degrees = neighbor.degrees;
                let territory = this.search(neighbor.name);
                var y = (Math.sin(degrees * (Math.PI / 180)) * 40) + posY + 250;
                var x = (Math.cos(degrees * (Math.PI / 180)) * 40) + posX + 250;
                let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', x);
                circle.setAttribute('cy', y);
                circle.setAttribute('r', 40);
                circle.setAttribute('fill', 'red');
                this.board.appendChild(circle);
                territory.posx = x;
                territory.posy = y;
            }
        }
    }


}
export { Board };