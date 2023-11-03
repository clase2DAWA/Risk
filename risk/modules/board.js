import { Territory } from "./territory.js";
import { map } from "./map.js";

class Board {

    constructor(board) {
        this.board = board;
        this.territories = [];
        let elementTerritory;
        for (let continent of map.continents) {
            for (let territory of continent.territories) {
                let element = ({
                    "posx": 0,
                    "posy": 0,
                    "territory": null,
                    "visited": false
                });
                elementTerritory = new Territory(territory.name, element);
                element.territory = elementTerritory;
                elementTerritory
                console.log(elementTerritory);
            }
            
        }
        console.log(elementTerritory);

                    /*tenemos que acceder al element de cada territorio y que muestre los vecinos*/
        
                for (let item of map.continents) {
                    for (let territory of item.territories) {
                        this.search(territory.name).addNeighbor(this.getJsonData(this.search(territory.name)));
                    }
                }
                console.log(this.territories);
                
    }

    getJsonData(elementTerritory) {
        let jsonData;

        for (let continent of map.continents) {
            jsonData = continent.territories.find((territory) => territory.name === elementTerritory.getName());
        }
        return jsonData.neighbors;
    }

    search(name) {
        for (let item of this.territories) {
            if (item.territory.getName() === name) {
                return item;
            }
        }
    }

    draw() {
        let pos = 40;
        for (let item of this.territories) {
            let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', pos);
            circle.setAttribute('cy', 40);
            circle.setAttribute('r', 40);
            circle.setAttribute('fill', 'red');
            this.board.appendChild(circle);
            item.posx = pos;
            item.posy = 40;
            circle.addEventListener("click", function () {
                console.log(item.territory.getName());
            });

            pos += 100;
        }
    }


}
export { Board };