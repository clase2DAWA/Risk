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
                        .addNeighbor(neighbor, this.territories.find(
                            (element) => element.name === neighbor.name
                        ));
                    /*
                    this.search(territory.name).addNeighbor(neighbor,
                        this.search(neighbor.name));
                    */
                }
            }
        }

        console.log(this.territories);
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
        let visited = [];
        let land = this.metaData.pop();
        visited.push(land);
        land.x = 500;
        land.y = 500;
        let support = [land];
        while (support.length) {
            land = null;

            // funciona
            // for (let item of support.at(-1).territory.neighbors) {
            //     let landa = this.metaData.find((element2) => item.territory === element2.territory);
            //     if (landa!= null) {
            //         land = landa;
            //     }
            // }

            // funciona
            land = this.metaData.find((element) => {
                return support.at(-1).territory.neighbors.find((element2) => element.territory === element2.territory)});

            // funciona
            // for (let item of support.at(-1).territory.neighbors) {
            //     for (let element of this.metaData) {
            //         if (item.territory === element.territory) {
            //             land = element;
            //         }
            //     }
            // }
            if (land != null) {
                visited.push(land);
                support.push(land);
                land.x = 500;
                land.y = 500;
                this.metaData.splice(this.metaData.indexOf(land),1);
            } else {
                support.pop();
            }
            
        }
        console.log("fin");
        for (let element of visited) {
            console.log(element);
        }
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